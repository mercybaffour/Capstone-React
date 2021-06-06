import React from 'react';

function Structures(props) {
    return (
        <div className="row">
            <div className="container-fluid col-lg-4 text-center pt-4 mt-4 pb-4 mb-4">
                {props.properties.map( molecule => {
                    return <ul style={{listStyleType: "none"}}>
                        <li style={{fontWeight: "bold"}}> {molecule.molecule_chembl_id}</li>
                        <li> {molecule.canonical_smiles}</li>
                     </ul>
                    })};
            </div>
        </div>
    )
}

export default Structures;
