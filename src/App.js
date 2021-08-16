
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      {/*HOME*/}
      {/*HEADER*/}

      {/* BANNER*/}

      {/*SEARCH */}

      {/*CARDS */}
      {/*FOOTER */}

      <Router>

  




 {/*Header and footer will get rendered but Home and SearchPage would get conditionallly rendered*/}

        <Header />


        <Switch>

<Route path='/search'>
<SearchPage />
</Route>

<Route path='/'>
<Home />
</Route>


</Switch>







        <Footer />



       

      </Router>




    </div>
  );
}

export default App;
