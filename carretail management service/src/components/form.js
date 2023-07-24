import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/form.css";
import formlogo from '../images/dhcarretail-logo.png';

export function Form() {
    return (
        <>
        <div className="contactscroll">&nbsp;</div>
            <div className="container p-5 mt-5 contactscroll">
                    <div className="content row p-4">
                        <div className="col-lg-7">
                            <h3>Enter your details we will contact you</h3>
                            <div className="row mt-4">
                                <div className="col-lg-3" >
                                    <label for="personname">Name</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" name="personname" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">

                                <div className="col-lg-3">
                                    <label for="email">Email</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="email" name="email" className="form-control" />
                                </div>
                            </div>


                            <div className="row  mt-4">
                                <div className="col-lg-3">
                                    <label for="phonenumber">Phone number</label>
                                </div>
                                <div className="col-lg-9">

                                    <input type="text" name="phonenumber" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3">
                                    <label for="place">Place</label>
                                </div>
                                <div className="col-lg-9">
                                    <input type="text" name="place" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-4">
                            <img className="formlogoimage"  src={formlogo} />
                        </div>
                    </div>
                </div>
         </>
    );
}