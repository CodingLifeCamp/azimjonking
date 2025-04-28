// import styles
import "./App.css";

// import components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// import sections
import Hero from "./sections/hero/Hero";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
