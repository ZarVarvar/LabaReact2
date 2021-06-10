import './App.css';
import Header from "./Components/Cit/Header/Header.js";
import Info from "./Components/Cit/Header/Info.js";
import Form_zap from "./Components/Cit/Header/Form_zap.js";
import "./Components/Cit/Header/color.css";

function App() {
  return (
    <div className="App">
      <div class='color'>
        <Header />
        <Info />
        <Form_zap/>
      </div>
    </div>
  );
}

export default App;