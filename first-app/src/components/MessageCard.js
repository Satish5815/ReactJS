import React, { Fragment } from "react";
import '../App.css'
export class MessageCard extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="Card">
                    <div className="card-body">
                        <h3>Good Mornning</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                            Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
                            faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
                            Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
                            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus,
                            non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}