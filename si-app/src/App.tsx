import './App.css';
import { Home } from './screens/Home';
import { Contact } from './screens/Contact';
import { Routes,Route, NavLink } from 'react-router-dom';
import { Ressources } from './screens/Ressources';
import Background from '../src/img/background.jpg';

function App() {
  return (

    <div style={{backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',    
                backgroundSize: 'cover',   
              }}> 
    <link rel="icon" href="../build/favicon.ico" />
    <header className=''>
    <nav className='flex justify-end text-xl bg-gradient-to-r from-blue-500 via-cyan-500 to bg-purple-500'>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })} to='/'>Accueil</NavLink><br></br>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })} to='/Ressources'>Ressources</NavLink><br></br>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })} to='/Contact'>Contact</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Ressources' element={ <Ressources/>}/>
      <Route path='/Contact' element={ <Contact/>}/>
    </Routes>
    </div>
  )
}

export default App;
