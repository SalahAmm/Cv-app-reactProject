import PersonalInfo  from "./PersonalInfo"
import EducationInfo from "./EducationInfo"
import WorkInfo from "./WorkInfo"
import { type personalInfoType as personInfo , 
        type educationInfoType as educationType,
        type workInfoType as workType
} from "../App.tsx"
import { type Dispatch , type SetStateAction } from "react"

type AllInfoProps = {
    personalInfo : personInfo;
    setPersonalInfo: Dispatch<SetStateAction<personInfo>> 
    educationInfo: Array<educationType>;
    setEducationInfo: (prev : educationType[]) => void;
    workInfo: workType[];
    setWorkInfo: (prev: workType[]) => void;
}

export default function AllInfo({personalInfo , setPersonalInfo
    // ,educationInfo ,setEducationInfo , workInfo , setWorkInfo
} : AllInfoProps) {
    return (
        <>
        <div className="w-1/2 border bg-gray-50">
        <PersonalInfo 
            personalInfo={personalInfo} 
            setPersonalInfo={setPersonalInfo}
        /> 
        </div>
        
        </>
    )
}