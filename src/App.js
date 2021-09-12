import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/page/homepage";


function App() {
  return (
    <div >
      <Router>
        <div>
          <Homepage />
        </div>
      </Router>


    </div>
  );
}

export default App;
