import React from 'react';

function Form(props) {
    return (
        <div className="container-fluid mt-0 pt-0 pl-0">
            <form id="form">
                <div className="col-sm-6 pl-0">
                    <input type="text" onChange={props.onChange} id="target" placeholder="Enter Target ID" />
                </div>
                <div className="col-sm-10 pl-0 pt-4">
                    <button type="button" className="btn btn-info btn-lg button text-left" id="csvbutton" onClick={props.onClick}>Download CSV</button>
             </div>
            </form>
        </div>
    )
}

export default Form;
