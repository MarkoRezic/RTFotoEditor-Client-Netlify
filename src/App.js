import "./App.css";
import "./css/bootstrap_override.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/blog.css";
import Navbar from "./components/Navbar";
import { AuthorityProvider } from './components/AuthorityContext';
import Axios from 'axios';

function App() {

  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "https://rt-foto-editor.netlify.app";

  return (
    <AuthorityProvider>
      <div className="App">
        <Navbar />
      </div>
    </AuthorityProvider>
  );
}

export default App;
