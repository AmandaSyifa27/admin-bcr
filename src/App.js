import React from "react";
import SetupRouter from "./routes/SetupRouter";
import { Provider } from "react-redux";
import Redux from "./redux/store";
import store from "./store";

function App() {
  return (
    <Provider store={Redux.store}>
      <div className="App">
        <SetupRouter />
      </div>
    </Provider>
  );
}

export default App;
