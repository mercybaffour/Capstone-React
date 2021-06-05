import React from 'react';
import img4 from '../images/abstract.jpg';


function DownloadSection() {
    return (
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
                    <div className="container-fluid mt-0 pt-0 pl-0">
                        <form id="form">
                            <div className="col-sm-6 pl-0">
                                <input type="text" id="target" placeholder="Enter Target ID" />
                            </div>
                            <div className="col-sm-10 pl-0 pt-4">
                                <button type="button" className="btn btn-info btn-lg button text-left" id="csvbutton">Download CSV</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
