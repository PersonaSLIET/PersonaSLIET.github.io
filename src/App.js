import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import Home from './components/Home';
import Faculties from './components/Faculties';
import Alumni from './components/Alumni';
import Mentor from './components/Mentor';
import Contact from './components/Contact'
import History from './components/History';
import Members from './components/Members';
import Upcoming from './components/Upcoming'
import Past from './components/Past'
import Club from './components/Club';


function App() {

  return (
    <>
    <Router>
      <SideBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
          {/* <Navigate to="/home" />  */}
        {/* <Route path="/" element={<Home/> ? <Navigate to="/" /> : <Home/>}/> */}
        <Route path='/about/club' element={<Club/>}/>
        <Route path='/about/history' element={<History/>}/>
        <Route path='/activities/upcoming' element={<Upcoming/>}/>
        <Route path='/activities/past' element={<Past/>}/>
        <Route path='/faculties' element={<Faculties/>}/>
        <Route path='/team/members' element={<Members/>}/>
        <Route path='/team/alumnis' element={<Alumni/>}/>
        <Route path='/team/mentors' element={<Mentor/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </SideBar>
    </Router>
    </>
  );
}

export default App;
