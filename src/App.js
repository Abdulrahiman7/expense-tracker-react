import { Provider } from "react-redux";
import "./App.css";
import Routes from "./Routes/Routes";
import Header from "./components/Layout/Header/Header"
import { BrowserRouter} from "react-router-dom";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
