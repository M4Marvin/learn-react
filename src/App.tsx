// import { useState } from "react";

import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-green-950 py-8 text-green-200">
      <div className="m-4 flex-none">
        <Header />
      </div>
      <div className="flex grow flex-row">
        <div className="m-4">
          <Navbar />
        </div>
        <div className="m-4">
          <Content />
        </div>
      </div>
      <div className="m-4 flex-none">
        <Footer />
      </div>
    </div>
  );
}

export default App;
