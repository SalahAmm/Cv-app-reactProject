import { type personalInfoType } from "../App";
import { type ChangeEvent } from "react";
import { type Dispatch , type SetStateAction} from "react";


type personalInfoProps = {
  personalInfo: personalInfoType;
  setPersonalInfo:  Dispatch<SetStateAction<personalInfoType>>;
};

export default function PersonalInfo({
  personalInfo,
  setPersonalInfo,
}: personalInfoProps) {


   
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
     
    setPersonalInfo((prev: personalInfoType) => {
      return {...prev , [name]:value}
    })
  };

  return (
    <>
      <div>
        <form className="flex flex-col gap-4 border-2 border-gray-300 shadow  p-4 m-3  rounded bg-white">
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="name">Personal Name</label>
            <input 
              id="name" 
              type="text" 
              name="name" 
              value={personalInfo.name} 
              onChange={handleChange}
              className="border-2 border-gray-300 rounded p-1" />
          </div>
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="email">Email Address</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={personalInfo.email} 
              onChange={handleChange}
              className="border-2 border-gray-300 rounded p-1"/>
          </div>
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="phone">Phone Number</label>
            <input 
            id="phone" 
            type="text" 
            name="phone" 
            value={personalInfo.phone} 
            onChange={handleChange}
            className="border-2 border-gray-300 rounded p-1"/>
          </div>
            <button className="border bg-black text-white p-1 w-2/5 rounded self-center">Save Information</button>
        </form>
      </div>
    </>
  );
}
