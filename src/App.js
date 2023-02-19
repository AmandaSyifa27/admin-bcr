import React from "react";
import SetupRouter from "./routes/SetupRouter";
import store from "./store";
import { Provider } from "react-redux";

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
