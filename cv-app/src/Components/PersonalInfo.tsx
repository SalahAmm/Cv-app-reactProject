import { type personalInfoType } from "../App";

type personalInfoProps = {
  personalInfo: personalInfoType;
  setPersonalInfo: (prev: personalInfoType) => void;
};

export default function PersonalInfo({
  personalInfo,
  setPersonalInfo,
}: personalInfoProps) {
  // Think need to be done
  // 1 - condition rendering based on the buuton Click (save Button / Edit Button ) [True of false]
  // 2- Style the form element so everything will be clearer
  // 3 - Complete everthing in this Components and learn [form / styling / hanlding events ]
  // 4 - after completing everthing go to the other components

  return (
    <>
      <div>
        <form className="flex flex-col gap-4 border-2 border-gray-300 shadow  p-4 m-3  rounded bg-white">
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="name">Personal Name</label>
            <input id="name" type="text" name="name" className="border-2 border-gray-300 rounded p-1" />
          </div>
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" className="border-2 border-gray-300 rounded p-1"/>
          </div>
          <div className="flex flex-col p-2 gap-1">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" name="phone" className="border-2 border-gray-300 rounded p-1"/>
          </div>
            <button className="border bg-black text-white p-1 w-2/5 rounded self-center">Save Information</button>
        </form>
      </div>
    </>
  );
}
