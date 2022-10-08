import { useState } from "react";
import Image from "./Components/Image";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Image />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
