import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Searchbar } from "./components/Searchbar";
import { Discover } from "./routes/Discover/index";
import { Home } from "./routes/Home/index";
import { Search } from "./routes/Search/index";
function App() {
  return (
    <Router>
      <div className='movie-search'>
        <Header />
        <Searchbar />
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/discover'>
            <Discover />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
