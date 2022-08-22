import NewCar from '../components/NewCar'
import List from '../components/List'
import './Home.css'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <NewCar/>
            <List/>
            <Footer/>
        </div>
    )
}

export default Home