import React, { Component, useState } from "react";

function EditableInput(props) {
    const [isEditing, setIsEditing] = useState(true);
    const [text, setText] = useState('');

    const handleOnClickEdit = () => {
        toggleIsEditing();
        console.log('edit')
    }

    const handleOnClickConfirm = () => {
        toggleIsEditing();
        console.log('confirm')
    }
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const toggleIsEditing = () => {
        setIsEditing(!isEditing);
    }

    let input;
    let textB;

    if (props.type === 'textarea') {
        input = <textarea cols="30" rows="10" value={text} className="form-control" onChange={handleOnChange}></textarea>
        textB = <p className="">{text}</p>
    } else {
        input = <input type="text" value={text} className="form-control" onChange={handleOnChange} style={{height: 100}}/>;
        textB = <h5>{text}</h5>;
    }

    return (
        <div className="EditableInput row">
            <div className="display col">
                {isEditing
                    ? input
                    : textB
                }
            </div>
            <div className="item-buttons col">
                {isEditing
                    ? <button className="btn btn-primary" onClick={handleOnClickConfirm}>
                        <i className="fa-solid fa-check"></i>
                      </button>
                    : <button className="btn btn-primary" onClick={handleOnClickEdit}>
                        <i className="fa-solid fa-pen"></i>
                      </button>
                }

                {/* {this.props.isDeletable
                    ? <button className="btn btn-primary" onClick={this.handleOnClickDelete}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    : null
                } */}
            </div>
        </div>
    );
}



// class EditableInput extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isEditing: true,
//             text: '',
//         }

//         this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
//         this.handleOnClickConfirm = this.handleOnClickConfirm.bind(this);
//         // this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
//         this.handleOnChange = this.handleOnChange.bind(this);
//     }

//     handleOnClickEdit() {
//         this.toggleIsEditing();
//         console.log('edit')
//     }
    
//     handleOnClickConfirm() {
//         this.toggleIsEditing();
//         console.log('confirm')
//     }

//     // handleOnClickDelete() {
//     //     console.log('delete')
//     // }

//     handleOnChange(e) {
//         this.setState({ text: e.target.value });
//     }

//     toggleIsEditing() {
//         this.setState({ isEditing: !this.state.isEditing });
//     }

//     render() {
//         let input;
//         let text;

//         if (this.props.type === 'textarea') {
//             input = <textarea cols="30" rows="10" value={this.state.text} className="form-control" onChange={this.handleOnChange}></textarea>
//             text = <p className="">{this.state.text}</p>
//         } else {
//             input = <input type="text" value={this.state.text} className="form-control" onChange={this.handleOnChange} style={{height: 100}}/>;
//             text = <h5>{this.state.text}</h5>;
//         }

//         return (
//             <div className="EditableInput row">
//                 <div className="display col">
//                     {this.state.isEditing
//                         ? input
//                         : text
//                     }
//                 </div>
//                 <div className="item-buttons col">
//                     {this.state.isEditing
//                         ? <button className="btn btn-primary" onClick={this.handleOnClickConfirm}>
//                             <i className="fa-solid fa-check"></i>
//                           </button>
//                         : <button className="btn btn-primary" onClick={this.handleOnClickEdit}>
//                             <i className="fa-solid fa-pen"></i>
//                           </button>
//                     }

//                     {/* {this.props.isDeletable
//                         ? <button className="btn btn-primary" onClick={this.handleOnClickDelete}>
//                             <i className="fa-solid fa-trash"></i>
//                           </button>
//                         : null
//                     } */}
//                 </div>
//             </div>
//         );
//     }
// }

export default EditableInput;