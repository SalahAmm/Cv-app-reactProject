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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">CV Builder</h1>
          <p className="text-center mt-2">Create your professional CV in minutes</p>
        </div>
      </header>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 pb-12">
        <div className="lg:w-1/2">
          <AllInfo  
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            workInfo={workInfo}
            setWorkInfo={setWorkInfo}
          />
        </div>
        <div className="lg:w-1/2">
          <CvPreview  
            personalInfo={personalInfo} 
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App
