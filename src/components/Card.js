import React from "react";

class Card extends React.Component {
    constructor(props){
        super(props);
        this.title = this.props.title;
        this.desc = this.props.desc;
    }

    OnDelete(){
        console.log("Delete");
    }

    OnEdit(){
        console.log("Edit");
    }

    OnComplete(){
        console.log("Complete");
    }

    OnSelect(){
        console.log("Select");
    }

    render(){
        return(
            <div className="card">
                <h2 className="card">{this.props.title}</h2>
                <p className="card">{this.props.desc}</p>
                <div className="actions">
                    <button onClick={this.OnDelete}>Delete</button>
                    <button onClick={this.OnEdit}>Edit</button>
                    <button onClick={this.OnComplete}>Complete</button>
                    <button onClick={this.OnSelect}>Select</button>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    title: "Default Card Title",
    desc: "Default Description"
}
export default Card;