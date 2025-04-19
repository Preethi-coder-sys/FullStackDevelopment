import React from "react";
import BasicComponents from "./components/BasicComponents";
import Product from "./components/Product";
import InputField from "./components/InputField";
import Counter from "./components/Counter";
import DataFetchingComponent from "./components/DataFetchingComponent";
import ConditionalRendering from "./components/ConditionalRendering";


function App() {

  const product = {productname:'Laptop', cost:40000};

  return (
    <div>
    <h2 align="center">Welcome to React.js</h2>  
    <BasicComponents />
    <Product productinfo = {product}/>
    <Counter />
    <InputField />
    <DataFetchingComponent />
    <ConditionalRendering />
    </div>
  );
}

export default App;
