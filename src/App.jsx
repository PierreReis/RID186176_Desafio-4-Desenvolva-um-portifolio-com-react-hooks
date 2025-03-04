import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/technologies" element={<><h1>TECNOLOGIAS</h1></>}></Route>
        <Route path="/about" element={<><h1>SOBRE MIM</h1></>}></Route>
      </Routes>
    </Router>
  )
}
export default App