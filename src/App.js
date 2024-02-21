import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/home';
import Announcements from './pages/Announcements/announcements'; 
import Result from './pages/Result/result';
import Shortlisted from './pages/Result/shortlisted';
import Steps from './pages/Steps/steps';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/announcements" element={<Announcements />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/final-shortlisted-result" element={<Shortlisted />}></Route>
        <Route path="/join-community" element={<Steps />}></Route>
      </Routes>
    </>
  );
}

export default App;
