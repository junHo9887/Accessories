import { Routes, Route, useLocation } from 'react-router-dom';
import '../css/App.css';
import '../css/Footer.css';
import '../css/Main.css';
import '../css/Login.css';
import Header from './Header1';
import Footer from './Footer';
import Main from './Main';
import Main1 from './Main1'
import Home from './Home';
import Login from './Login';
import Sub from './Sub';
import Join from './Join'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Main.js" element={<Main />}/>
        <Route path="/Main1.js" element={<Main1 />}/>
        <Route path="/Login.js" element={<Login />}/>
        <Route path="/Join.js" element={<Join />}/>
        <Route path="/item/:itemId" element={<Sub/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
