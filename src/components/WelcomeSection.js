import React from 'react';

function WelcomeSection () {
    return(
        <div className="container-fluid spacing">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-6">Data Science Life Cycle</h1>
                </div>
                <hr />
                <div className="col-12">
                    <p className="lead">Let's explore the workflow of how to start and finish a data science project.
                        First, you need to come up with a problem to solve and collect the data.
                        Luckily, I have that covered for you.
                        Below are the next phases of the data science life cycle you should expect post data-collection.
                    </p>
                </div>
            </div>
         </div>
    );
}

export default WelcomeSection;
