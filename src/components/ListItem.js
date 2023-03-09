import React, { Component } from "react";
import EditableInput from "./EditableInput";

class ListItem extends Component {
    render() {
        return (
            <div className="ListItem my-4 row gap-3 border">
                <EditableInput type="text"/>
                <EditableInput type="textarea"/>
            </div>
        );
    }
}

export default ListItem;