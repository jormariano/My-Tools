import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <Link to='/calculator'> <button>Calculator</button> </Link>
            <Link to='/calendar'><button>Calendar 4'</button></Link>
            <Link to='/todolist'><button>To do List</button></Link>
            <Link to='/worldtime'><button>World Time</button></Link>
            <Link to='/currencyconverter'><button>Currency Converter</button></Link>
            <Link to='/survey'><button>Survey</button></Link>
        </div>
    )
}

export default Home