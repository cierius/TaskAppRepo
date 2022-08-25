// This script contains 'basically' the Main() of React.js

import NavBar from "./components/NavBar";
import Tab from  "./components/Tab";

const tabs = [<Tab tabName="Test1" />, <Tab tabName="Test2" />, <Tab />];
let cards = ["Create This Website", "Do Dishes", "Trim Beard"];


function App() {
  return (
    <div className="bg">
      <NavBar text="My Tasks Web App" />
      
      {/* Runs through the master list of tabs */}
      <div className="horz-tab-layout">
        {tabs.map((tab, index) => <Tab key={index} tabName={tab.props.tabName} cardList={tab.props.cardList} />)}
      </div>
      
    </div>
  );
}

export default App;
