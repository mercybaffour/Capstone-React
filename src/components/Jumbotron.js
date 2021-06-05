import React from 'react';

function Jumbotron() {
    return (
        <div className="jumbotron container-fluid" id="jumbotron-index">
            <h1 className="display-4 text-center text-white mt-4 pt-4">Automate Tasks in Your Workflow</h1>
            <div className="row h-75 align-items-center justify-content-center">
                <div className="col-sm col-md-4 ml-5">
                    <p className="lead pl-5 pt-5 text-white">Start your data science journey by gaining hands-on experience with the QSAR model. Receive a pre-processed file that will kick-start your project.</p>
                </div>
                <div className="col-sm col-md-2">
                    <a className="btn btn-info btn-lg button pt-0" href="features.html" role="button">Get Started</a>
                </div>
            </div>
        </div>
    );
  }

export default Jumbotron;
