import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Main from './components/application/Main'
import About from "./components/application/About";
import Contacts from "./components/application/Contacts";
import Reviews from "./components/application/Reviews";

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
