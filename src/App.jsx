import Evenement from "./Evenement"
import Expert from "./Expert"
import Formulaire from "./Formulaire"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/evenement" element= {<Evenement/>}/>
        <Route path="/expert" element= {<Expert/>}/>
        <Route path="/formulaire" element= {<Formulaire/>}/>
      </Routes>
    </Router>

  )
}

export default App
