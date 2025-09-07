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
  endDate: string;
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
  const [educationInfo , setEducationInfo] = useState<educationInfoType[]>([{
    schoolName:'',
    degree:'',
    startDate:'',
    endDate:'',
  },]);
  const [workInfo , setWorkInfo] = useState<workInfoType[]>([{
    company:'',
    position:'',
    responsibility:'',
    startDate:'',
    endDate:''
  },]);

   

  return (
    <>
    {/* {Has to scale it to full site 
      // how to seperate it in the middle 
      // how make each of them deffrent background with a line in the middle for ease to stle } */}
    <div className="h-screen flex gap-4 p-1 box-border" >
      <AllInfo  
        personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
        educationInfo={educationInfo} setEducationInfo={setEducationInfo}
        workInfo={workInfo} setWorkInfo={setWorkInfo}
        

      />
      <CvPreview />

    </div>
  </>

  )
}

export default App
