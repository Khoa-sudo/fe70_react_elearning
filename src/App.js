import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Profile from "./pages/Profile/Profile";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
