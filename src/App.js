import Card from "./components/Card";
import NavBar from "./components/NavBar";

let tabs = ["Tab 1", "Tab 2", "Tab 3"]
let cards = ["Create This Website", "Do Dishes", "Trim Beard"]


function App() {
  return (
    <div className="bg">
      <NavBar text="My Tasks Web App" />
      
      <div>
        {cards.map((card, index) => <Card key={index} title={card} />)}
      </div>
      
    </div>
  );
}

export default App;
