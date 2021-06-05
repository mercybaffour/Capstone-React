import React from 'react';
import img5 from '../images/chemistry.png';
import img6 from '../images/flask.png';
import img7 from '../images/chemistry2.png';
import img8 from '../images/structure.jpg';

function TargetIdSection() {
    return (
        <div className="container-fluid">
            <h4 className="text-center pt-4 pb-4 mt-4 mb-4">Example Targets of Interest</h4>
            <div className="row">
                <div className="card col-lg-3">
                    <div className="card-body">
                    <img src={img5} class="icon mx-auto mb-4" alt="" />
                    <h6 className="card-title">ID: CHEMBL3927</h6>
                    <h6 className="card-title">Type: SINGLE PROTEIN </h6>
                    <h6 className="card-title">Preferred Name: SARS coronavirus 3C-like proteinase </h6>
                    <h6 className="card-title">Classification: Enzyme</h6>
                    </div>
                </div>
                <div className="card col-lg-3">
                    <div className="card-body">
                        <img src={img6} class="icon mx-auto mb-4" alt="" />
                        <h6 className="card-title">ID: CHEMBL1293269</h6>
                        <h6 className="card-title">Type: SINGLE PROTEIN </h6>
                        <h6 className="card-title">Preferred Name: NS3 </h6>
                        <h6 className="card-title">Organism: Hepatitis C Virus </h6>
                    </div>
                </div>
                <div className="card col-lg-3">
                    <div className="card-body">
                        <img src={img7} class="icon mx-auto mb-4" alt=""/>
                        <h6 className="card-title">ID: CHEMBL4523307</h6>
                        <h6 className="card-title">Type: SINGLE PROTEIN </h6>
                        <h6 className="card-title">Preferred Name: Genome polyprotein </h6>
                        <h6 className="card-title">Organism: Zika Virus </h6>
                    </div>
                </div>
                <div className="card col-lg-3">
                    <div className="card-body">
                        <img src={img8} class="icon mx-auto mb-4" alt="" />
                        <h6 className="card-title">ID: CHEMBL2033</h6>
                        <h6 className="card-title">Type: SINGLE PROTEIN </h6>
                        <h6 className="card-title">Preferred Name: Cytochrome P450 11A1 </h6>
                        <h6 className="card-title">Classification: Enzyme</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TargetIdSection;
