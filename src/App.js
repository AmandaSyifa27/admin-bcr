import React from "react";
import SetupRouter from "./routes/SetupRouter";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SetupRouter />
      </Provider>
    </div>
  );
}

export default App;
