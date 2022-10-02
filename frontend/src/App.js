import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Speakers from "./Components/Speakers/Speakers";
import EventSection from "./Components/EventSection/EventSection";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

function App() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Speakers />
            <EventSection />
            <Footer />
            <Form />
        </div>
    );
}

export default App;
