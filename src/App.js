import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import Home from './components/Home';
import Activities from './components/Activities';
import Faculties from './components/Faculties';
import Alumni from './components/Alumni';
import Mentor from './components/Mentor';
import Contact from './components/Contact'
import About from './components/About';
import Members from './components/Members';

function App() {
  return (
    <>
    <Router>
      <SideBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/activities' element={<Activities/>}/>
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
