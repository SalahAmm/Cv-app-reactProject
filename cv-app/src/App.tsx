import './App.css';
import GeneralInfo from './Components/GeneralInfo';
import CvPreview from './Components/CvPreview';
import {useState} from 'react';

function App() {


    const [personalInfo , setPersonalInfo] = useState('');
    const [educationExp , setEducationExp] = useState('');
    const [practicalExp , setPracticalExp] = useState('');


  return (
    <>
    <GeneralInfo 
      personalInfo={personalInfo} 
      
      />
    <CvPreview />

  </>
  )
}

export default App
