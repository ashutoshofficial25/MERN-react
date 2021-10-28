
import { BrowserRouter ,Route } from 'react-router-dom';
import './App.css';
import EventHandling from './Components/eventhandling';
import Gallery from './Components/gallery';
import Header from './Components/header';
import Home from './Components/home';  // import every component here in root folder
import Login from './Components/Login page';
import Signup from './Components/signup';
// import Login from './Components/Login page';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Header></Header>
     <Route path="/event" component={EventHandling}/>
     <Route path="/home" component={Home}/>    {/* <Route></Route> */}
     <Route path="/login" component={Login}/>
     <Route path="/signup" component={Signup}/>
     <Route path="/gallery" component={Gallery}/>
     </BrowserRouter>
      {/* <Login></Login> */}
      {/* <login></login>  assignment work  */}
    </div>
  );
}

export default App;
