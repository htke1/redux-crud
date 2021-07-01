import React   from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { AddUser } from "./components/pages/AddUser";
import { EditUser } from "./components/pages/EditUser";
import Liked from './components/pages/likedPage';
import Disliked from './components/pages/disLiked'
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {

  
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
     
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/liked" component={Liked} />
            <Route path="/disliked" component={Disliked} />
          </Switch>
        </Router>
    </div>
  )
}

export default App
