import './App.css';
import Header from './components/Layout/Header/Header';
import UserRoutes from './Routes/UserRoutes';
import { AuthContextProvider } from './store/auth-context';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

      <UserRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
