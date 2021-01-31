import "./App.css";
import "./css/bootstrap_override.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/blog.css";
import Navbar from "./components/Navbar";
import { AuthorityProvider } from './components/AuthorityContext';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "RT Foto Editor"
  }, []);

  return (
    <AuthorityProvider>
      <div className="App">
        <Navbar />
      </div>
    </AuthorityProvider>
  );
}

export default App;
