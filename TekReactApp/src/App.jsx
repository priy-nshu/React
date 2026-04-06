//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import WelcomeMessage,{Welcome2React} from './WelcomeMeassage'
import WelcomeInClass from './WelcomeinClass'
import StudentApp from './StudentApp'
import DisplayBio from './DisplayBio'

function App() {
//const [count, setCount] = useState(0)

  return (
    <>
      <h3>Welcome to React</h3>
      {/* <WelcomeMessage name="to React App Developer Experience" />
      <Welcome2React name="React App Developer Experience" /> */}

      {/* <WelcomeInClass name="Priyanshu"></WelcomeInClass>
      <p >Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <StudentApp></StudentApp> */}
      <DisplayBio />

    </>
  )
}

export default App
