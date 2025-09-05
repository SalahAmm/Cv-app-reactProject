import PersonalInfo  from "./PersonalInfo"
import EducationInfo from "./EducationInfo"
import WorkInfo from "./WorkInfo"
import { type personalInfoType as personInfo , 
        type educationInfoType as educationType,
        type workInfoType as workType
} from "../App.tsx"

type AllInfoProps = {
    personalInfo : personInfo;
    setPersonalInfo: (prev: personInfo) => void;
    educationInfo: educationType;
    setEducationInfo: (prev : educationType) => void;
    workInfo: workType;
    setWorkInfo: (prev: workType) => void;
}

export default function AllInfo({personalInfo , setPersonalInfo
    ,educationInfo ,setEducationInfo , workInfo , setWorkInfo
} : AllInfoProps) {
    return (
        <>
        </>
    )
}