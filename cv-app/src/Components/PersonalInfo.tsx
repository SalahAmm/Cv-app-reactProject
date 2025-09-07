import { type personalInfoType } from "../App";
import { type ChangeEvent } from "react";
import { type Dispatch , type SetStateAction} from "react";
import { useState } from 'react';
import { type FormEvent } from "react";

type personalInfoProps = {
  personalInfo: personalInfoType;
  setPersonalInfo:  Dispatch<SetStateAction<personalInfoType>>;
};

export default function PersonalInfo({
  personalInfo,
  setPersonalInfo,
}: personalInfoProps) {

  const [savedInfo , setSavedInfo] = useState<personalInfoType>({name:'', email:'' , phone:'',});
  const [modes , setModes] = useState<boolean>(false);



   

  const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get('name') as string,
      email: formData.get('email')as string,
      phone: formData.get('phone')as string,
    };
    setSavedInfo(formValues);

    console.log(savedInfo);
    setModes(prev => !prev);
    console.log(modes)

  }




  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
     
    setPersonalInfo((prev: personalInfoType) => {
      return {...prev , [name]:value}
    })
  };






  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border-2 border-gray-300 shadow  p-4 m-3  rounded bg-white">
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="name">Personal Name</label>
            <input 
              id="name" 
              type="text" 
              name="name" 
              readOnly={modes}
              value={personalInfo.name} 
              onChange={handleChange}
              className={`border-2 focus:outline-gray-500 border-gray-300 rounded p-1 ${modes && `bg-gray-300 text-gray-500`}`} />
          </div>
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="email">Email Address</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              readOnly={modes}
              value={personalInfo.email} 
              onChange={handleChange}
              className={`border-2 focus:outline-gray-500 border-gray-300 rounded p-1 ${modes && `bg-gray-300 text-gray-500`}`}/>
          </div>
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="phone">Phone Number</label>
            <input 
            id="phone" 
            type="text" 
            name="phone"
            readOnly={modes}
            value={personalInfo.phone} 
            onChange={handleChange}
            className={`border-2 border-gray-300 rounded focus:outline-gray-500 p-1 ${modes && `bg-gray-300 text-gray-500`}`}/>
          </div>
            {!modes && <button className="border bg-black text-white p-1 w-2/5 rounded self-center">Save Information</button>}
            
            {modes && <button className="border bg-black text-white p-1 w-2/5 rounded self-center">Editing Mode</button>}
        </form>
      </div>
    </>
  );
}
