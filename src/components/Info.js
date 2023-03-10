import React, { Component } from "react";
import EditableInput from "./EditableInput";


function Info() {
    return (
        <div className="Info container-fluid mb-5">
            <div className="row">
                <h2>Info</h2>
                <div className="first-name col">
                    <h3>First Name</h3>
                    <EditableInput isDeletable={false} type="text"/>
                </div>
                <div className="last-name col">
                    <h3>Last Name</h3>
                    <EditableInput isDeletable={false} type="text"/>
                </div>
                <div className="email col">
                    <h3>E-Mail</h3>
                    <EditableInput isDeletable={false} type="text"/>
                </div>
                <div className="phone-number col">
                    <h3>Phone Number</h3>
                    <EditableInput isDeletable={false} type="text"/>
                </div>
            </div>
        </div>
    );
}


// class Info extends Component {
//     render() {
        // return (
        //     <div className="Info container-fluid mb-5">
        //         <div className="row">
        //             <h2>Info</h2>
        //             <div className="first-name col">
        //                 <h3>First Name</h3>
        //                 <EditableInput isDeletable={false} type="text"/>
        //             </div>
        //             <div className="last-name col">
        //                 <h3>Last Name</h3>
        //                 <EditableInput isDeletable={false} type="text"/>
        //             </div>
        //             <div className="email col">
        //                 <h3>E-Mail</h3>
        //                 <EditableInput isDeletable={false} type="text"/>
        //             </div>
        //             <div className="phone-number col">
        //                 <h3>Phone Number</h3>
        //                 <EditableInput isDeletable={false} type="text"/>
        //             </div>
        //         </div>
        //     </div>
        // );
//     }
// }

export default Info;