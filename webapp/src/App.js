import React from 'react';
import Landing from './components/landing';
import PublicHome from './components/publichome';
import PoliceHome from './components/policehome';
import PoliceSignup from './components/policesignup';
import PublicSignup from './components/publicsignup';
import Instructions from './components/instructions';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/publichome" element={<PublicHome/>}/>
        <Route path="/policehome" element={<PoliceHome/>}/>
        <Route path="/publicsignup" element={<PublicSignup/>}/>
        <Route path="/policesignup" element={<PoliceSignup/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;



