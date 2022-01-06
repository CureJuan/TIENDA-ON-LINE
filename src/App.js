import React from "react";
import { Header } from "./componentes/Header"
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom"
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/DataProvider";
import { Carrito } from "./componentes/Carrito/index"
import { Footer } from "./componentes/footer/Footer"
import { BsWhatsapp } from "react-icons/bs"

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router> 
        <Header />
        <Carrito />
        <Paginas />
        <a href="#" class="btn-flotante"><BsWhatsapp fontSize="40px"/></a>
        <Footer />
      </Router>
        
    </div>
   
    </DataProvider>
    
  );
}

export default App;
