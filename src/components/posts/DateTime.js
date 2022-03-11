// import React from "react";
import React, { useState } from "react";

const DateTime = () => {

    var showdate = new Date();
    var displaytodaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
    var dt = showdate.toDateString();
    // var displaytime = showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds();

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(Updatetime, 1000);
    return (
        <div>

            <h2>{dt} - {ctime}</h2>

        </div>
    );
}

export default DateTime;