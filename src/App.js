import "./App.css";
import { Route, Switch } from "react-router-dom";
import Rooms from "../src/components/layouts/rooms";
import NavBar from "./components/common/ui/navBar";
import Hotel from "./components/layouts/hotel";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/rooms" component={Rooms} />
        <Route path="/" component={Hotel} />
      </Switch>
    </div>
  );
}

export default App;
