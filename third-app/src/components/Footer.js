import React, { Fragment } from "react"

export class Footer extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="p-3 bg-dark text-white text-center mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Copyright and Copy;2022: Ultimate Vocation</h3>
                                <p>All Right Reserverd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}