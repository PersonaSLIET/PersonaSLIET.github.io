// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
// import Navbar from './components/SideBar'
import Team from './components/Team';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import Home from './components/Home';
import Activities from './components/Activities';
import Faculties from './components/Faculties';
import Club from './components/Club';
import Alumni from './components/Alumni';
import Mentor from './components/Mentor';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Router>
      <SideBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/faculties' element={<Faculties/>}/>
        <Route path='/about/club' element={<Club/>}/>
        <Route path='/about/alumni' element={<Alumni/>}/>
        <Route path='/about/mentor' element={<Mentor/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </SideBar>
    </Router>
    {/* <Team/> */}
    </>
  );
}

export default App;
