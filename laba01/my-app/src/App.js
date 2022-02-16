import "./App.css";
import HeaderSide from "./componetnts/heder";
import Header from "./componetnts/header";
import Chess from "./componetnts/chess";

function App() {
    return (<div className="main">
        <h1>Task 3</h1>
        <Header/>
        <HeaderSide/>
        <Chess/>
        <HeaderSide/>
        <Header/>
    </div>);
}

export default App;
