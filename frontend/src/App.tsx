import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Main from './components/Main'
import About from "./components/About";
import Contacts from "./components/Contacts";
import Reviews from "./components/Reviews";

function App() {

  return (
    <>
      <header className="header">
        <Link to="/" className="header_link">Главная</Link>
        <div></div>
        <Link to="/contacts" className="header_link">Контакты</Link>
        <Link to="/reviews" className="header_link">Обзоры</Link>
        <Link to="/about" className="header_link">О нас</Link>
      </header>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
    </>
  )
}

export default App
