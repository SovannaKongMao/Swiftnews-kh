import React from "react";
import DateTime from "../posts/DateTime";

const Header = () => {
    return (
        <div>
            <div className="flash-news-banner">
                <div className="container">
                    <div className="d-lg-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <span
                                className="badge badge-dark mr-3">Explore Top Headline with US!!!</span>
                        </div>
                        <div className="d-flex">
                            <span className="mr-3 text-danger"><DateTime /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;