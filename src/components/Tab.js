import React from "react";
import Card from "./Card";

class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tabName: this.props.tabName,
            cardList: this.props.cardList
        };
    }

    OnAddCard(){
        console.log(this.state.cardList);

        this.setState(state => ({
            cardList: state.cardList.concat(<Card />)
        }));
    }

    render(){
        return(
            <div className="tab">
                <h1>{this.state.tabName}</h1>
                {this.state.cardList.map((card, index) => <Card key={index} title={card.props.title} desc={card.props.desc} />)}
                <button className="tab-add-card" onClick={this.OnAddCard.bind(this)}>Add Card</button>
            </div>
        );
    }
}

// Default values for our properties for each tab
Tab.defaultProps = {
    tabName: "Default Tab",
    cardList: [<Card />, <Card />, <Card />]
};

export default Tab;