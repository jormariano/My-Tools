import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <Link to='/calculator'> <button>Calculator</button> </Link>
            <Link to='/todolist'><button>To do List</button></Link>
            <Link to='/weather'><button>Weather</button></Link>
            <Link to='/clock'><button>Clock</button></Link>
            <Link to='/survey'><button>Survey</button></Link>
        </div>
    )
}

export default Home