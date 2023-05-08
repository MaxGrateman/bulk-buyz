import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Header from './components/application/header/Header'
import Cards from './components/application/cards/Cards'

function App() {

  return (
    <div className="wrapper">
        <Header/>
        <Cards/>
    </div>
  )
}

export default App
