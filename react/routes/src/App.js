// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
import './App.css';
import { Route,Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
export default function App() {
  return (<div className='d1'>
 <Link to='/'>Acceuil</Link> <br/>
 <Link to='/ab'>Apropos</Link> <br/>
 <Link to='/blog'> Blog</Link> <br/>
 <div className='d2'>
 <Routes>
  <Route path='/'  element={<Home />} />
  <Route path='/ab'  element={<About/>}/>
  <Route path='/blog'  element={<Blog/>}/>
 </Routes>
 </div>
  </div>)
}
