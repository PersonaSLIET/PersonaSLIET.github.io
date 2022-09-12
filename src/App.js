// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
// import Navbar from './components/SideBar'
import Team from './components/Team';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <SideBar>
      <Routes>
        <Route path='/' element={Home}/>
      </Routes>
      </SideBar>
    </Router>
    <Team/>
    </>
  );
}

export default App;
