import Navbar from './components/Navbar';
import Home from './components/Home';
import SideBar from './components/SideBar';
import { Container } from './styles';

const App = () =>  {
    return (
        <Container>
                <Navbar />
                <SideBar />
                <Home />
        </Container>
    )
}

export default App;
