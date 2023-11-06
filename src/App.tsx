import { useState } from "react";
import Characters from "./components/Character/Characters";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App = () => {
  const [name, setName] = useState<string>("");
  return (
    <div className="container">
      <Header />
      <Search name={name} setName={setName} />
      <Characters name={name} />
    </div>
  );
};

export default App;
