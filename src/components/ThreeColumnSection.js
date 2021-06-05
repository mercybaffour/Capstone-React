import React from 'react';
import img1 from '../images/data-analysis-symbol.png';
import img2 from '../images/model-training.png';
import img3 from '../images/model-evaluation.png';

function ThreeColumnSection() {
    return (
        <div class="container-fluid spacing">
            <div class="row text-center">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <img src={img1} class="icon mx-auto" alt="" />
                    <h3>Exploratory Data Analysis</h3>
                    <p></p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <img src={img2} class="icon mx-auto" alt="" />
                    <h3>Model Training</h3>
                    <p></p>
                </div>
                <div class="col-sm-12 col-md-4">
                    <img src={img3} class="icon mx-auto" alt="" />
                    <h3>Model Evaluation</h3>
                    <p></p>
                </div>

            </div>
            <hr class="my-4" />
        </div>

    )
}

export default ThreeColumnSection;
