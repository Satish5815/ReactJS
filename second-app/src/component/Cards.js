import React, { Fragment } from "react";
import card1 from '../assest/img/download.jpeg'
import card2 from '../assest/img/download (1).jpeg'
import card3 from '../assest/img/download (2).jpeg'
import card4 from '../assest/img/download (3).jpeg'

export class Cards extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card1} className="img-fiuid" alt=" " />
                                <div className="card-body">
                                    <h4 className="card-title">Paris</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                        pulvinar facilisis justo mollis, auctor consequat urna. </p>
                                    <button className='btn btn-black btn-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card2}></img>
                                <div className="card-body">
                                    <h4 className="card-title">America</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                        pulvinar facilisis justo mollis, auctor consequat urna. </p>
                                    <button className='btn btn-black btn-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card3}></img>
                                <div className="card-body">
                                    <h4 className="card-title">India</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                        pulvinar facilisis justo mollis, auctor consequat urna. </p>
                                    <button className='btn btn-black btn-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card4}></img>
                                <div className="card-body">
                                    <h4 className="card-title">Japan</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                        pulvinar facilisis justo mollis, auctor consequat urna. </p>
                                    <button className='btn btn-black btn-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
} 