import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Companies } from "./components/Companies.jsx";
import { Courses } from "./components/Courses.jsx";
import { Achievement } from "./components/Achievement.jsx";
import { Categories } from "./components/Categories.jsx";
import './App.css'
import { FeedBack } from "./components/FeedBack.jsx";
import { Cta } from "./components/Cta.jsx";
import { Footer } from "./components/Footer.jsx";

function App () {


    return ( <div className="relative">
        <Navbar/>
        <Hero/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <FeedBack/>
        <Cta/>
        <Footer/>


    </div> )
}

export default App
