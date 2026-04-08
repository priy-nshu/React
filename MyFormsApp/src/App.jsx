//import { useState } from 'react'
import './App.css'

/////////////////////////////////// MyFormsApp //////////////////////////////

import MyCallRef from './CallRef';
import Uncontrolled from './MyForm1';
import  MyUCForm1  from './MyUCForm1';
import { FuncControlledForm } from './ControllForm';
import Person from './Person';
import BMICalculator from './BMICalculator';
import ValidatingForms from './ValidatingForm';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyCallRef />
      <Uncontrolled /> */}
      {/* <MyUCForm1 />

      <FuncControlledForm />
      <Person></Person> */}

      {/* <BMICalculator /> */}
      <ValidatingForms />
      
    </>
  )
}

export default App
