import React from "react";

import AppLayout from "../layouts/appLayout";


const AboutPage = () => {
    return (
        <AppLayout>
            <div className="container">
                <div className="text-center ">
                    <h1>About US</h1>
                </div>
                <div className="row">
                    <p className="text-center">
                        Swiftnews is the most recent instant news website that collects all daily breaking news and delivers it to our customers with a single click. We have used world-class data and technology to generate independent research, rankings, journalism, and advice that has won the confidence of our readers and users. swiftnews.com.kh’s platforms include Business, Sport, Politic, Travel.
                    </p>
                </div>
                <div className="container">
                    <div className="text-center ">
                        <h1>Our Team</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{ width: "15rem" }}>
                                <img src="assets/images/pitou-sq.jpg" alt="img" className="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Pitou Noun</h5>
                                </div>
                            </div>
                            {/* <img src="assets/images/pitou.JPG" alt="img" className="img-fluid" /> */}
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "15rem" }}>
                                <img src="assets/images/yong.jpg" alt="img" className="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Yong Hao</h5>
                                </div>
                            </div>
                            {/* <img src="assets/images/pitou.JPG" alt="img" className="img-fluid" /> */}
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "15rem" }}>
                                <img src="assets/images/kan-sq.jpg" alt="img" className="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Sorikan Bun</h5>
                                </div>
                            </div>
                            {/* <img src="assets/images/pitou.JPG" alt="img" className="img-fluid" /> */}
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "15rem" }}>
                                <img src="assets/images/kong-sq.jpg" alt="img" className="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Sovanna Kong Mao</h5>
                                </div>
                            </div>
                            {/* <img src="assets/images/kan.jpg" alt="img" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default AboutPage;