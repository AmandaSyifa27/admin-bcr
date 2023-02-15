import React from "react";
import SetupRouter from "./routes/SetupRouter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SetupRouter />
      </div>
    </Provider>
  );
}

export default App;
