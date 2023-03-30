import React from 'react'
import { useSelector } from 'react-redux'
import CostComparison from './CostComparison'
import HowTo from './HowTo'


function Landing() {

    const sqft = useSelector((state) => state.squareft.value)


    return (
        <>
            <div className="container calculator bg-light-subtle">
                <div className="row">
                    <div className="col">
                        <h2 className="text-danger fw-bold mt-3 text-center">Custom Pontoon Protection Kit <br />
                            for New Pontoons up to {Math.round(sqft)} Sq. Ft.</h2>
                    </div>
                </div>
                <div className="row ms-1">
                    <div className="col">
                        <h5 className="text-danger fw-bold mt-4">Benefits of Alumetron and VS721 Protected Pontoons:</h5>
                        <ul className="sblue fw-bold check-marks">
                            <li><span className="ms-1">Pontoons </span>Stay Clean and Shiny Year After Year</li>
                            <li><span className="ms-1">Pride </span>of Ownership. Your Boat is a Reflection of Your Personality.</li>
                            <li><span className="ms-1">3 Year </span>Transferable Factory Warranty.</li>
                            <li><span className="ms-1">Greater </span>Trade or Resale Value. Adding $5,000 to $10,000 is Common.</li>
                            <li><span className="ms-1">Better </span>Fuel Economy. Reduce Fuel Consumption Up to 20%.</li>
                            <li><span className="ms-1">Easier </span>Maintenance. Pontoons Can Stay Fouling Free All Summer.</li>
                            <li><span className="ms-1">Lasts </span>up to 10 Years. Save Money by Reducing Costly Annual Maintenance.</li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">

                
                <div className="col-11 bg-white mx-5 py-3 border rounded-3">


                    <div className="row text-center justify-content-center mt-4 sblue">
                        <div className="col-5">
                            <h4 className="fw-bold">Products Required</h4>
                        </div>
                        <div className="col-2">
                            <h4 className="fw-bold">Qty Req.</h4>
                        </div>
                        <div className="col-2">
                            <h4 className="fw-bold">No. of Bottles</h4>
                        </div>
                        <div className="col-2">
                            <h4 className="fw-bold">Total Price</h4>
                        </div>
                    </div>

                    <div className="row mb-3 text-center justify-content-center align-items-center sblue">
                        <div className="col-5">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-12 col-sm-5 col-md-5 col-lg-5 ms-4">
                                    <img src="https://auroramarine.com/wp-content/uploads/2023/03/vs721-both-150x150.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                                    <h5>VS721 Bottom Coat</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="">1.4</h5>
                        </div>
                        <div className="col-2">
                            <h5 className="">2</h5>
                        </div>
                        <div className="col-2">
                            <h5 className="">$29</h5>
                        </div>
                    </div>
                    <div className="row mb-3 text-center justify-content-center align-items-center sblue">
                        <div className="col-5">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-12 col-sm-5 col-md-5 col-lg-5 ms-4">
                                    <img src="https://auroramarine.com/wp-content/uploads/2023/03/vs721-both-150x150.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                                    <h5>VS721 Bottom Coat</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="">1.4</h5>
                        </div>
                        <div className="col-2">
                            <h5 className="">2</h5>
                        </div>
                        <div className="col-2">
                            <h5 className="">$29</h5>
                        </div>
                    </div>
                    <div className="row mb-3 text-center justify-content-center align-items-center sblue">
                        <div className="col-5">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-12 col-sm-5 col-md-5 col-lg-5 ms-4">
                                    <img src="https://auroramarine.com/wp-content/uploads/2023/03/vs721-both-150x150.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                                    <h5 className="">VS721 Bottom Coat</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="">1.4</h5>
                        </div>
                        <div className="col-2">
                            <h5 className="">2</h5>
                        </div>
                        <div className="col-2">
                            <h5 className="">$29</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="row text-center justify-content-center align-items-center">
                        <div className="col-5">

                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                            <h4 className="text-danger fw-bold">Total Investment:</h4>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                            <h4 className="sblue fw-bold">$87</h4>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row mt-2 align-items-center justify-content-end">
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3 text-end">
                        <button className="btn btn-lg btn-danger">Add to Cart</button>
                    </div>
                    <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                        <button className="btn btn-lg btn-success">Buy Now</button>
                    </div>
                </div>
                <CostComparison />
                <HowTo />
            </div>
        </>
    )
}

export default Landing