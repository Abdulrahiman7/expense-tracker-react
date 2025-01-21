import "./App.css";
import Routes from "./Routes/Routes";
import Header from "./components/Layout/Header/Header"
import { AuthContextProvider } from "./store/auth-context";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
