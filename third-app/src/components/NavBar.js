import React, { Fragment } from "react"

export class NavBar extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-brand navbar-nav navbar-expand-sm navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">Ultimate Vocation</a>
                </nav>
            </Fragment>
        );
    }

}