import React, { Component } from "react";
import EditableInput from "./EditableInput";

function ListItem(props) {
    return (
        <div className="ListItem my-4 border d-flex align-items-start">
            <div className="inputs col-11 row gap-3">
                <EditableInput type="text"/>
                <EditableInput type="textarea"/>
            </div>
            <button 
                className="btn btn-primary col"
                value={props.index}
                onClick={props.deleteOnClick}
            >
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}

// class ListItem extends Component {
//     render() {
//         return (
//             <div className="ListItem my-4 row gap-3 border">
//                 <EditableInput type="text"/>
//                 <EditableInput type="textarea"/>
//             </div>
//         );
//     }
// }

export default ListItem;