import { FrontPage } from './pages/frontpage/frontpage';
import { ProjectPage } from './pages/projects/projectpage';
import { ContactPage } from './pages/contact/contactpage';
import { AboutPage } from './pages/about/aboutpage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Style/navigation.scss';


function App() {
  return (
<>
<Router>
<nav className="navBar">
<h2>Oliver Juul</h2>
<ul>
  <li>
    <Link to="/"></Link><a href="#front-nav">Home</a>
  </li>
  <li>
    <Link to="/ProjectsPage"></Link><a href="#front-nav">Projects</a>
  </li>
  <li>
    <Link to="/ContactPage"></Link><a href="#contact-nav">Contact</a>
  </li>
  <li>
    <Link to="/AboutPage"></Link><a href="#about-nav">About</a>
  </li>
</ul>
</nav>
<Switch>
  <Route path="/">
  </Route>
  <Route path="/ProjectsPage">
    <ProjectPage />
  </Route>
  <Route path="/ContactPage">
    <ContactPage />
  </Route>
  <Route path="/AboutPage">
    <AboutPage />
  </Route>
  </Switch>
  </Router>
    <FrontPage></FrontPage>

    <ProjectPage></ProjectPage>

    <ContactPage></ContactPage>

    <AboutPage></AboutPage>

</>
  );
}

export default App;
