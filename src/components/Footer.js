import React from 'react';
import img from '../images/logo.png';

function Footer() {
    return (

      <footer className="bg-dark text-white">
        <div className="container-fluid pt-4">
            <div className="row pl-4">
                <div className="col-md-6 text-left">
                    <h4 id="about-author"><img src={img} className="d-inline" alt="" />About Author</h4>
                    <p>I'm a beginner IT professional with career interests in everything technology. My passion lies in the intersection of technology, industry, and society. </p>
                </div>
                <div className="col-md-4 align-left pt-4 ml-auto">
                    <h4 className="pb-4 mb-4">Credits</h4>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>Inspired by <a href="https://www.youtube.com/c/DataProfessor">Data Professor on Youtube</a></div>
                </div>
                <div className="col-sm-12 pt-4 text-center">
                    <p> Copyright &copy;2021 All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    );
  }

export default Footer;
