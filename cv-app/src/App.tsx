import './App.css';
import AllInfo from "./Components/AllInfo.tsx"
import CvPreview from "./Components/CvPreview.tsx"
import {useState} from 'react'

export type personalInfoType = {
  name: string;
  email: string;
  phone: string;
}

export type educationInfoType = {
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string
}

export type workInfoType = {
  company: string;
  position: string;
  responsibility: string;
  startDate: string;
  endDate: string;

}

function App() {

  const [personalInfo , setPersonalInfo] = useState<personalInfoType>({
    name:'',
    email:'',
    phone:'',
  });
  const [educationInfo , setEducationInfo] = useState<educationInfoType[]>([]);
  const [workInfo , setWorkInfo] = useState<workInfoType[]>([]);

   

  return (
    <>
  <AllInfo  
    personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
    educationInfo={educationInfo} setEducationInfo={setEducationInfo}
    workInfo={workInfo} setWorkInfo={setWorkInfo}
    

  />
  <CvPreview />

  </>
  )
}

export default App
