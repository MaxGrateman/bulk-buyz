import './App.css'
import Header from './components/application/header/Header'
import Cards from './components/application/cards/Cards'
import Reviews from "./components/application/reviews/Reviews";
import Footer from "./components/application/footer/Footer";
import Support from "./components/application/support/Support";

function App() {

  return (
    <div className="wrapper">
        <Header/>
        <Cards/>
        <Reviews/>
        <Support/>
        <Footer/>
    </div>
  )
}

export default App
