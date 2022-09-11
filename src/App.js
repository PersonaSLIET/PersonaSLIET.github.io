// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Navbar from './components/SideBar'
import Team from './components/Team';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';

function App() {
  return (
    <>
    <Router>
      <SideBar>
      <Routes>
        <Route path='/' element={About}/>
      </Routes>
      </SideBar>
    </Router>
    <Team/>
    </>
  );
}

export default App;
