import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/home"
import Bollywood from './components/blog';
import Hollywood from './components/hollywood';
import Fitness from './components/fitness';
import Cricket from './components/cricket';
import Technology from './components/technology';
import Api from './components/api/blogapi';
import './components/blog.css'
import ApiHolly from './components/api/hollywoodapi';
import ApiTech from './components/api/technologyapi';
import ApiFit from './components/api/fitness';
import ApiHome from './components/api/homeapi';
import ApiCric from './components/api/cricketapi';
import {Link} from 'react-router-dom'
function App() {
  return (
    <ApiCric>
    <ApiHome>
    <ApiFit>
    <ApiTech>
    <ApiHolly>
    <Api>
    <div className="App">
      <BrowserRouter>
      <div className='homePage'>
      <div className="logo">
        <div className="the">THE</div>
        <div className="siren"> SIREN</div>
      </div> 
      <div class="navbar navbar-expand-lg bg-white" id='navBar'>
          <div><Link to="/"><button className='btn btn-outline-success'>Home </button></Link></div>
          <div><Link to={'/bollywood'}><button className='btn btn-outline-success'>Bollywood </button></Link></div>
          <div><Link to={'/hollywood'}><button className='btn btn-outline-success'> Hollywood</button></Link></div>
          <div><Link to={'/technology'}><button className='btn btn-outline-success'>Technology </button></Link></div>
          <div><Link to={'/fitness'}><button className='btn btn-outline-success'>Fitness </button></Link></div>
          <div><Link to={'/cricket'}><button className='btn btn-outline-success'>Cricket </button></Link></div>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path="/cricket" element={<Cricket/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Api>
    </ApiHolly>
    </ApiTech>
    </ApiFit>
    </ApiHome>
    </ApiCric>
  );
}

export default App;