import React, { Fragment, Component } from "react";

export class WishCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body bg-success">
                        <p className="h3 text-white">{this.props.msg}</p>
                    </div>

                </div>
            </Fragment>
        );
    }
}