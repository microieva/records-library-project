/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { showSelection } from "./redux/actions";
import { AppState } from "./types";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import RecordPage from "./pages/RecordPage";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.ui.selectionOpen);

  const handleClick = () => {
    if (open) {
      dispatch(showSelection(false));
    }
  };
  return (
    <div className="App" onClick={handleClick}>
      <Router>
        <Switch>
          <Route exact path="/records/:title" component={RecordPage} />
          <Route exact path="/login" component={Header} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
