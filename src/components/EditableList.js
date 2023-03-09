import React, { Component } from "react";
import ListItem from "./ListItem";

class EditableList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask() {
        this.setState({ items: [...this.state.items, this.state.items.length + 1] })
    }

    render() {
        const sectionClass = `${this.props.sectionName} ${this.props.sectionClass}`

        return (
            <div className={sectionClass}>
                <div className="container-fluid">
                    <div className="section-header d-md-flex">
                        <h2 className="">{this.props.sectionName}</h2>
                        <button className="btn btn-primary mx-2" onClick={this.handleAddTask}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div className="list">
                        <ul>
                            {this.state.items.map(el => {
                                return <ListItem key={el}/>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditableList;