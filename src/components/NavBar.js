
function NavBar(props){
    return(
        <div className="nav">
            <h2 className="nav">{props.text}</h2>
            <button className="nav">Create Tab</button>
            <button className="nav">Edit Tab</button>
            <button className="nav">Options</button>
        </div>
    );
}

export default NavBar;