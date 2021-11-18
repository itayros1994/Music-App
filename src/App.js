import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import React, { useEffect } from 'react'
import logo from "./logo.svg";
import "./App.css";
import "./assets/style/main.scss";
import { Footer } from "./cmps/Footer";
import { Header } from "./cmps/Header";
import { SnackBar } from "./cmps/SnackBar";
import { setToFavoriteFromLS } from "./store/action/youtube.action";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let favoriteFromLS = localStorage.getItem('favorites')
    dispatch(setToFavoriteFromLS(JSON.parse(favoriteFromLS) || []))
    console.log('chup');
   }, [])


  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <div className="main-container">
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact
                  component={route.component}
                  path={route.path}
                />
              );
            })}
          </div>
        </Switch>
        <SnackBar/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
