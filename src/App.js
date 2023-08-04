import './App.css';
import React, { useState } from 'react'
import Card from './components/Card'
import IIM from './components/IIM.jpg'
import CU from './components/CU.jpeg'
import BCA from './components/BCA.jpg'

function App() {
  const [course, setCourse] = useState('')
  const [fees, setFees] = useState('')
  const [courseSelected, setCourseSelected] = useState('')
  const [feeSelected, setFeeSelected] = useState('')

  function handleCourseChange(e) {
    setCourse(e.target.value)
    setCourseSelected(e.target.value)
  }

  function handleFeeChange(e) {
    setFees(e.target.value)
    setFeeSelected(e.target.value)
  }

  function handleCourseReset() {
    setCourse('')
    setCourseSelected('')
  }

  function handleFeeReset() {
    setFees('')
    setFeeSelected('')
  }

  return (
    <div className="App">
      <div className="radio">
        <label htmlFor="MBA">MBA</label>
        <input id="MBA" onChange={handleCourseChange} type="radio" value="MBA" name="course" checked={courseSelected === 'MBA'}/>
        <label htmlFor="MCA">MCA</label>
        <input id="MCA" onChange={handleCourseChange} type="radio" value="MCA" name="course" checked={courseSelected === 'MCA'}/>
        <label htmlFor="BCA">BCA</label>
        <input id="BCA" onChange={handleCourseChange} type="radio" value="BCA" name="course" checked={courseSelected === 'BCA'}/>
        <button onClick={handleCourseReset}>Reset</button>
      </div>
      <div className="radio">
        <label htmlFor="morefees">Fee More Than 1,00,000</label>
        <input id="morefees" onChange={handleFeeChange} type="radio" value="gfees" name="fees" checked={feeSelected === 'gfees'}/>
        <label htmlFor="lessfees">Fee Less Than 1,00,000</label>
        <input id="lessfees" onChange={handleFeeChange} type="radio" value="lfees" name="fees" checked={feeSelected === 'lfees'}/>
        <button onClick={handleFeeReset}>Reset</button>
      </div>
      {(course === 'MBA' || fees === 'gfees') && (course !== 'BCA' && course !== 'MCA' && fees !== 'lfees') ? <Card img={IIM} course="MBA" tag="Master of Business Administration" fees={155000}/> : (course === '' && fees === '') ? <Card img={IIM} course="MBA" tag="Master of Business Administration" fees={155000}/> : ''}
      {(course === 'MCA' || fees === 'lfees') && (course !== 'MBA' && course !== 'BCA' && fees !== 'gfees') ? <Card img={CU} course="MCA" tag="Master of Computer Application" fees={80000}/> : (course === '' && fees === '') ? <Card img={CU} course="MCA" tag="Master of Computer Application" fees={80000}/> : ''}
      {(course === 'BCA' || fees === 'lfees') && (course !== 'MCA' && course !== 'MBA' && fees !== 'gfees') ? <Card img={BCA} course="BCA" tag="Bachelor of Computer Application" fees={65000}/> : (course === '' && fees === '') ? <Card img={BCA} course="BCA" tag="Bachelor of Computer Application" fees={65000}/> : ''}
    </div>
  );
}

export default App;


// MBA Card -> <Card img={IIM} course="MBA" tag="Master of Business Administration" fees={155000}/>
// MCA Card -> <Card img={CU} course="MCA" tag="Master of Computer Application" fees={80000}/>
// BCA Card -> <Card img={BCA} course="BCA" tag="Bachelor of Computer Application" fees={65000}/>