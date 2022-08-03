import React, { Fragment } from 'react'
import card1 from '../assests/img/abc-1.jpeg'
import card2 from '../assests/img/abc-2.jpeg'
import card3 from '../assests/img/abc-3.jpeg'
import card4 from '../assests/img/abc-4.jpeg'
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
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card2} className="img-fiuid" alt=" " />
                                <div className="card-body">
                                    <h4 className="card-title">America</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                        pulvinar facilisis justo mollis, auctor consequat urna. </p>
                                    <button className='btn btn-black btn-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card3} className="img-fiuid" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">India</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                        pulvinar facilisis justo mollis, auctor consequat urna. </p>
                                    <button className='btn btn-black btn-sm'>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={card4} className="img-fiuid" alt=" " />
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