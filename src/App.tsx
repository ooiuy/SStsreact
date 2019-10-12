import * as React from 'react'

import { Link, Router,  } from '@reach/router'

// import  Home  from './Home/index'
// import Login  from './Login/index'
// import  News  from './News/index'
// import Profile  from './Profile/index'

import './App.css'

const App = (props:any) => {
  return (
  <div className="container">
    <h1>Hello,Mars</h1>
    <nav>
      <p>Navigation</p>
    </nav>

    <p>Routes</p>
    <p>Hello, {props.name}</p>
  </div>  
    
    
  )

}

const RoutedApp = () => {
  return (
      <App name="Mars ubica"/>
       
  )
}

export { RoutedApp }


export default App;
