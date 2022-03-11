import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchNews() {
    const [data, setData] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [click, setClick] = useState(true);

    function getNews(key) {
        try {
            let keyWord = key;
            console.log(key);
            axios
                .get(
                    `https://newsapi.org/v2/top-headlines?q=${keyWord}&apiKey=ce070bbd38b14214bb368e325a0d7f31 `
                )
                .then((response) => {
                    console.log(response);
                    setData(response.data.articles);
                });
        } catch {
            console.log("error");
        }
    }

    // const noNewsText = () => {
    //   if (data.articles.length === 0)
    //     document.getElementById("noNewsText").innerHTML = "No related news found";
    // };

    useEffect(() => {
        getNews(searchKey);
        console.log(click);
    }, [click,searchKey]);

    // const openUrl = (url) => {
    //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    //   if (newWindow) newWindow.opener = null;
    // };

    return (
        <div className="container">
            <div className="row g-3 align-items-center">

                <div className="col-sm-10">
                    <input type="text" id="searchText" className="form-control mb-5 rounded" />
                </div>
                <div className="col-sm-1 mb-5">
                    <button
                        // onClick=""
                        onClick={() => {
                            setClick(!click);
                            setSearchKey(() => {
                                let text = document
                                    .getElementById("searchText")
                                    .value.replace(/ /g, "-");
                                return text;
                            });
                        }}
                        for="search"
                        className="col-form-label btn btn-success btn-lg"
                        href="..."
                    >
                        Search
                    </button>
                </div>
                <div>
                    <p id="noNewsText" className="text-muted"></p>
                </div>
            </div>
            {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={getNews()}>
          Get News
        </button>
      </div> */}
            <div className="row">
                {data.map((value) => {
                    return (
                        <div className="col">
                            <div className="card mb-3" style={{ width: "1100px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={value.urlToImage}
                                            className="img-fluid rounded-start"
                                            alt="NewsImage"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            {/* <p className="card-text">{value.description}</p> */}
                                            <a
                                                // onclick={() => openUrl(value.url)}
                                                href={value.url}
                                                className="card-text"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <small className="text-primary ">Read more</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchNews;
