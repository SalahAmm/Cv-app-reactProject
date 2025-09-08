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

  const [modes, setModes] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModes(prev => !prev);
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border-2 border-gray-200 shadow-lg  p-6 m-4  rounded-lg bg-white"
        >
          <div className="flex flex-col p-2 gap-2">
            <label htmlFor="name" className="font-semibold text-gray-700">
              Personal Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              readOnly={modes}
              value={personalInfo.name}
              onChange={handleChange}
              className={`border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md p-2 ${
                modes && `bg-gray-200 text-gray-500`
              }`}
            />
          </div>
          <div className="flex flex-col p-2 gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              readOnly={modes}
              value={personalInfo.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              className={`border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md p-2 ${
                modes && `bg-gray-200 text-gray-500`
              }`}
            />
          </div>
          <div className="flex flex-col p-2 gap-2">
            <label htmlFor="phone" className="font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              readOnly={modes}
              value={personalInfo.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
              className={`border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 ${
                modes && `bg-gray-200 text-gray-500`
              }`}
            />
          </div>
          {!modes && (
            <button className="border bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg self-center transition duration-300">
              Save Information
            </button>
          )}

          {modes && (
            <button className="border bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg self-center transition duration-300">
              Editing Mode
            </button>
          )}
        </form>
      </div>
    </>
  );
}