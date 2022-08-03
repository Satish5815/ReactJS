import React, { Fragment } from "react"
import '../App.css';
export class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="Landing">
                    <div className="wrapper">
                        <div className="text-white d-flex flex-column text-center justify-content">
                            <h2 className="display-3">Welcome to Ultimate Vocation</h2>
                            <p className="lead">Test cricket is a format of cricket with the longest match duration and is considered the game's highest standard.[1][2] Test matches are played between national representative teams that have been granted Test status, as determined and conferred by the International Cricket Council (ICC).</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}