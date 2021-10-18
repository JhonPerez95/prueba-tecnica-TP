import './App.css'
import { BrowserRouter as Router,  Route } from 'react-router-dom'

import NavBart from './components/NavBart'
import Games from './components/Games'
import Favorites from './components/Favorites'

function App() {
    return (
        <Router>
            <NavBart />
            <Route path="/" component={Games} exact />
            <Route path="/favorites" component={Favorites}  />
        </Router>
    )
}

export default App
