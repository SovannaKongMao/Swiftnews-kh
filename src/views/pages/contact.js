import React, { useState } from "react";
import emailjs from "emailjs-com";


import AppLayout from "../layouts/appLayout";

const Result = () => {
    return (
        <p>Your message has been successfully sent!!!</p>
    )
}

function ContactPage(props) {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_al1x8ff", "template_fytu6ua", e.target, "V9U_AHOfCZtLoUF2D")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);
    };
    setTimeout(() => {
        showResult(false)
    }, 5000);

    return (
        <AppLayout>

            <form action="" onSubmit={sendEmail} style={{ width: "500px" }}>
                <div className="formWord">
                    <h2>Say Hello!</h2>
                    <div className="mb-3 ">
                        <label className="form-label">Full Name</label>
                        <input className="input100 form-control rounded" type="text" name="fullName" placeholder="Firstname LastName" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input className="input100 form-control rounded" type="text" name="phone" placeholder="xxx xxx xxx" required />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="input100 form-control rounded" type="text" name="email" placeholder="name@example.com" required />

                    </div>

                </div>
                <div className="formWord">
                    <label className="form-label">Message</label>

                    <textarea className="form-control rounded" row="3" name="message" placeholder="Reports or News" required></textarea>
                    <br />
                    <button className="col-form-label btn btn-success btn-lg"> SUBMIT</button>
                    <div className="row">
                        {result ? <Result /> : null}
                    </div>
                </div>
            </form>

        </AppLayout>
    )
}

export default ContactPage;