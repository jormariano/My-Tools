import './Switch.css'
import { useEffect, useState } from 'react'

const Switch = () => {

  const [theme, setTheme] = useState('clear')

  const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'clear')

  useEffect(() => {

    const divCalculator = document.getElementById('calculator'); // Reemplaza 'tuDivId' con el id de tu <div>
    
    if (divCalculator) {
      divCalculator.setAttribute('data-theme', theme);
    }

    return () => {
      if (divCalculator) {
        divCalculator.removeAttribute('data-theme');
      }
    };
  }, [theme]);


  return (
    <section className='switch'>
      <label className='switch-label'>
        <input type='checkbox' className='switch-checkbox' onChange={handleChange} hidden />
        <span className='slider' />
      </label>
    </section>
  )
}

export default Switch