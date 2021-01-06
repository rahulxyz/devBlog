import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Article from "./pages/article/Article";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>  
        <Route path="/article/:id" component={Article} />
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
