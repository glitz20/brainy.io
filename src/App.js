import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import { Switch } from 'react-router'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbarclass from './components/navbar'
import Home from './components/home'
import Admin from './components/admin'
import Error from './components/error'
import AddItem from './components/additem'
import EditItem from './components/EditItem'
import Description from './components/description'
import Dashboard from './components/itemdashboard'
import Thanks from './components/thanks'
import Chart from './components/chart'
import Profile from './components/profile'
import EditProfile from './components/editprofile'
import EditComment from './components/editcomment'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      admin:false
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
      axios.get('/user/').then(response => {
          console.log('Get user response: ')
          console.log(response.data)

           if (response.data.user && response.data.user.username == 'admin') {
              this.setState({
                  loggedIn: true,
                  username: response.data.user.username,
                  admin: true
              })
          }
          else if (response.data.user) {
              console.log('Get User: There is a user saved in the server session: ')

              this.setState({
                  loggedIn: true,
                  username: response.data.user.username
              })
          }

         
      
       else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

    

  render() {
    return (
      <div className="App">

            <Navbarclass className="navbar1" updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username} />
        {/*greet user if logged in: 
        this.state.loggedIn &&
          //<p>Join the party, {this.state.username}!</p>
        */}
            {/* Routes to different components */}
           
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" render={() => <LoginForm updateUser={this.updateUser}/>}/>
                <Route path="/signup" render={() => <Signup />} />


                <Route exact path='/admin' render={() => <Admin />} />
                <Route exact path='/admin/:id' render={(props) => <Dashboard {...props} />} />
                  
                   
                {[
                    //this.state.admin  && (<Route exact path='/admin' render={() => <Admin />} />),
                    //!this.state.loggedIn && (<Route exact path='/admin' render={() => <Error />} />),
                    //!this.state.admin && (<Route exact path='/admin' render={() => <Error />} />),
                    this.state.admin && (<Route exact path='/add-item' render={() => <AddItem />} />),
                    this.state.admin && (<Route exact path='/edit/:id' render={(props) => <EditItem {...props} />} />),
                    //this.state.admin && (<Route exact path='/admin/:id' render={(props) => <Dashboard {...props} />} />),

                ]}
                this.state.loggedIn && <Route exact path='/description/:id' render={() => <Description />} />

                this.state.loggedIn && <Route exact path='/profile/:username' render={() => <Profile />} />

                this.state.loggedIn && <Route exact path='/editprofile/:username' render={() => <EditProfile />} />

                this.state.loggedIn && <Route exact path='/editcomment/:id' render={() => <EditComment />} />
               
                <Route exact path='/thanks' render={() => <Thanks />} />
                <Route exact path='/chart' render={() => <Chart />} />
            </Switch>

            

      </div>
    );
  }
}

export default App;
