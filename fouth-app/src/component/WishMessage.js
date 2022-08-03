import React, { Fragment } from "react";
export const WishMessage = (Props) => {
    return (
        <Fragment>
            <div className="card m-3 bg-dark text-white">
                <div className="card-body">
                    <h3>Hello {Props.msg} & Time is {Props.time}</h3>
                </div>
            </div>
        </Fragment>
    );
}