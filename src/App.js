import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { About } from './Pages/About';
import { ArticlesPage } from './Pages/ArticlesPage';
import { News } from './Pages/News';
import { Home } from './Pages/Home';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import Detail1 from './components/ArticlesDetail/Detail1';
import ArticleCategory from './components/ArticleCategory';


function App() {


  return (

  

    <div className="App">
      




      <MainNavbar/>  
            <Routes>
              <Route exact path = "/" element={ <>  <Home/> </>}/>
              <Route exact path = "/about" element={<About/>}/>
              <Route exact path = "/articles" element={<ArticlesPage/>}/>
              <Route exact path = "/news" element={<News/>}/>
              <Route exact path = "/articles/:category" element={<ArticleCategory/>}/>
              <Route exact path = "/articles/:category/:id" element={<Detail1/>}/>
            </Routes>
      <Footer/>
    </div>
    

    
  );
}

  export default App;
      