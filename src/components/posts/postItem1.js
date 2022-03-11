import React from "react";

const PostItem1 = () => {
    return (
        <div class="col-xl-4 stretch-card grid-margin">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <h2>Latest news</h2>

                    <div
                        class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    >
                        <div class="pr-3">
                            <h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
                            <div class="fs-12">
                                <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                        </div>
                        <div class="rotate-img">
                            <img
                                src="assets/images/dashboard/home_1.jpg"
                                alt="thumb"
                                class="img-fluid img-lg"
                            />
                        </div>
                    </div>

                    <div
                        class="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between"
                    >
                        <div class="pr-3">
                            <h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
                            <div class="fs-12">
                                <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                        </div>
                        <div class="rotate-img">
                            <img
                                src="assets/images/dashboard/home_2.jpg"
                                alt="thumb"
                                class="img-fluid img-lg"
                            />
                        </div>
                    </div>

                    <div
                        class="d-flex pt-4 align-items-center justify-content-between"
                    >
                        <div class="pr-3">
                            <h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
                            <div class="fs-12">
                                <span class="mr-2">Photo </span>10 Minutes ago
                            </div>
                        </div>
                        <div class="rotate-img">
                            <img
                                src="assets/images/dashboard/home_3.jpg"
                                alt="thumb"
                                class="img-fluid img-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem1;