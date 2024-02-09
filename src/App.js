import {Switch, Route} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/register" component={Register} />
    <Route component={NotFound} />
  </Switch>
)

export default App
