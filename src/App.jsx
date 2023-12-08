import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Calculator from './components/Calculator/Calculator'
import Calendar from './components/Calendar/Calendar'
import ToDoList from './components/ToDoList/ToDoList'
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter'
import WorldTime from './components/WorldTime/WorldTime'
import Survey from './components/Survey/Survey'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/currencyconverter' element={<CurrencyConverter/>} />
          <Route path='/worldtime' element={<WorldTime/>}/>
          <Route path='/survey' element={<Survey/>}/>
          <Route path='*' element={<div className='not-found'><h2>404 NOT FOUND. GO TO </h2> <Link to='/'><h2>HOME</h2></Link></div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
