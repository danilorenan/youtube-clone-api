import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SideBar from './components/SideBar';
import SearchScreen from './components/SearchScreen';
import { Container } from './styles';
import { Switch, Route } from 'react-router-dom';
import WatchScreen from './components/WatchScreen';

const Layout = ({children}) => {
    const [sidebar, toggleSidebar] = useState(false)
    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
            <Container>
                <Navbar handleToggleSidebar={handleToggleSidebar} />
                <SideBar
                    sidebar={sidebar} 
                    handleToggleSidebar={handleToggleSidebar} 
                />
                    {children}
            </Container>
        </>
    )
}

const App = () =>  {
    return (
            <Switch>
                <Route path='/' exact>
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route path='/search/:query'>
                    <Layout>
                        <SearchScreen />
                    </Layout>
                </Route>
                <Route path='/watch/:id'>
                    <Layout>
                        <WatchScreen />
                    </Layout>
                </Route>
            </Switch>
    )
}

export default App;
