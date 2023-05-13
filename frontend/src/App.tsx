import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Header from './components/application/header/Header'
import Cards from './components/application/cards/Cards'
import Reviews from "./components/application/reviews/Reviews";
import Footer from "./components/application/footer/Footer";

function App() {

  return (
    <div className="wrapper">
        <Header/>
        <Cards/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default App
