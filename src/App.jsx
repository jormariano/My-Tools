import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Calculator from './components/Calculator/Calculator'
import ToDoList from './components/ToDoList/ToDoList'
import Weather from './components/Weather/Weather'
import Clock from './components/Clock/Clock'
import Survey from './components/Survey/Survey'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/clock' element={<Clock />}/>
          <Route path='/survey' element={<Survey />}/>
          <Route path='*' element={<div className='not-found'><h2>404 NOT FOUND. GO TO </h2> <Link to='/'><h2>HOME</h2></Link></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
