import { type personalInfoType } from "../App";

type personalInfoProps = {
    personalInfo : personalInfoType;
    setPersonalInfo : (prev : personalInfoType) => void;
} 

export default function PersonalInfo({personalInfo , setPersonalInfo} : personalInfoProps) {

    // Think need to be done 
    // 1 - condition rendering based on the buuton Click (save Button / Edit Button ) [True of false]
    // 2- Style the form element so everything will be clearer
    // 3 - Complete everthing in this Components and learn [form / styling / hanlding events ] 
    // 4 - after completing everthing go to the other components 



    return (
        <>
        <form>
        <label>
            Personal Name
            <input
               type="text" 
               name="name"
            />
        </label>
        <label>
            Email Adress
            <input
               type="email" 
               name="email"
            />
        </label>
        <label>
            Phone Number
            <input
               type="text" 
               name="phone"
            />
        </label>
        </form>
        </>
    );
}