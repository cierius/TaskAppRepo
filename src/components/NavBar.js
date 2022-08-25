import React from "react";

class NavBar extends React.Component{
    render(){
        return(
            <div className="nav">
                <h2 className="nav">{this.props.text}</h2>
                <button className="nav">Create Tab</button>
                <button className="nav">Edit Tabs</button>
                <button className="nav">Options</button>
            </div>
        );
    }
}

export default NavBar;