import React, { Fragment } from 'react'

export class InfoBox extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='p-3 mt-3 text-white bg-dark test-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h3 className='dispaly-4 text-center'>Enjoy Your Holiday</h3>
                                <p className='lead text-center'>Test cricket is a format of cricket with the longest match duration and is considered</p>
                            </div>

                        </div>

                    </div>
                </div>

            </Fragment>
        );
    }
}