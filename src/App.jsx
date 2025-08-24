import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Content from "./components/Content";
import Best from "./components/Best";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Category />
      <Content />
      <Best />
      <Footer />
    </div>
  );
}

export default App;
