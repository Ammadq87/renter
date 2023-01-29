import './App.css';
import { Login } from './Components/Routes/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Routes/Home';
import { PostAd } from './Components/Routes/PostAd';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/postAd' element={<PostAd/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
