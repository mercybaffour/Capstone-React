import React, {useState, useCallback}  from 'react';
import img4 from '../images/abstract.jpg';
import Form from './Form';
import TargetIdSection from './TargetIdSection';
import Structures from './Structures';

function DownloadSection() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [showStructures, toggleShowStructures] = useState(false);

     //Download file as last step
     const downloadFile = useCallback ( (dataset) => {
        let a = document.createElement('a');
        a.href = 'data:attachment/csv,' +  encodeURIComponent(dataset);
        a.target = '_blank';
        a.download = 'projectFile.csv';
        document.body.appendChild(a);
        a.click();
    }, []);

    //Convert to CSV format
    const convertToCSV = useCallback( (arr) => {
        let csvContent = arr.map(e => e.join(",")).join("\n");
        downloadFile(csvContent);
    }, [downloadFile]);

    //Array of Objects to Array of Arrays
    const toArrayOfArrays = useCallback( (input) => {
       let output = input.map( obj => {
            return Object.keys(obj).sort().map( key => {
                return obj[key];
            });
        });
        convertToCSV(output);
    }, [convertToCSV]);

    //Add bioactivity_class property to objects.
    const classifyActivity = useCallback( (newArr) => {
        for(let i=0; i<newArr.length; i++){
            if(newArr[i].standard_value >= 10000){
                newArr[i].bioactivity_class = "inactive";
            } else if(newArr[i].standard_value <= 1000){
                newArr[i].bioactivity_class = "active";
            } else {
                newArr[i].bioactivity_class = "intermediary";
            }
        }
        console.log(newArr);
        setData(newArr);
        toggleShowStructures(!showStructures);
        toArrayOfArrays(newArr);
    }, [showStructures, toArrayOfArrays]);


     //Filter array of objects with type = "IC50", and return new array with objects holding only 3 relevant properties.
     const filterArray = useCallback( (activities) => {
        console.log(activities);
        let newArr = activities.filter( item => {
            return item.type === "IC50";
        }).map( item => {
            return {
                molecule_chembl_id: item.molecule_chembl_id,
                canonical_smiles: item.canonical_smiles,
                standard_value: item.standard_value
            }
        });
        console.log(newArr);
        classifyActivity(newArr);
     }, [classifyActivity]);


     //Extract the activities array from response body
     const manipulateData = useCallback ((response) => {
         let activities = response.activities;
        filterArray(activities);
     }, [filterArray]);

    const loadFromAPI = useCallback(async () => {
        let response = await fetch(`https://www.ebi.ac.uk/chembl/api/data/activity/search.json?limit=100&q=${id}`);
        response  = await response.json();
        console.log(response);
        manipulateData(response);
      }, [id, manipulateData]);

    return (
        <>
            <div className="container-fluid mt-4 mb-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="download-image">
                            <img src={img4} alt="" class="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-uppercase pt-5 font-weight-bold" id="feature-title">Extract Your Dataset</h3>
                        <div className="paragraph py-4 w-75 pb-0">
                            <p>
                                Below, you will extract your own personal data set from the ChEMBL data source. This will comprise of
                                data from your specified target, its associated compounds, and their bioactivity profiles.
                                From your selected target dataset, you can then train your very own QSAR model. This model will be
                                used to predict the activites of compounds associated with your target protein/organism of interest.
                            </p>
                            <p>
                                Enter your target's ChEMBL ID and view the associated compounds' structures below!
                            </p>
                        </div>
                        <Form onChange={e => setId(e.target.value)} onClick={loadFromAPI} />
                    </div>
                </div>
            </div>
            <TargetIdSection />
            {showStructures && (
                <div>
                  <Structures properties={data} />
                </div>
              )}
        </>
    )
 }

export default DownloadSection;
