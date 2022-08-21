import React from "react";

class Card extends React.Component {
    render(){
        return(
            <div className="card">
                <h2 className="card">{this.props.title == "" ? "Default" : this.props.title}</h2>
                <p className="card">Description</p>
                <div className="actions">
                    <button>Delete</button>
                    <button>Edit</button>
                    <button>Complete</button>
                    <button>Select</button>
                </div>
            </div>
        )
    }
}
export default Card;