import { useState } from "react";
import { type educationInfoType } from "../App";
import { type Dispatch, type SetStateAction } from "react";
import { type FormEvent, type ChangeEvent } from "react";

type EducationInfoProps = {
  educationInfo: educationInfoType[];
  setEducationInfo: Dispatch<SetStateAction<educationInfoType[]>>;
};

export default function EducationInfo({
  educationInfo,
  setEducationInfo,
}: EducationInfoProps) {
  const [modes, setModes] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModes((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;

    setEducationInfo((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const handleDelete = (index: number) => {
    setEducationInfo((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClick = () => {
    setEducationInfo((prev) => {
      return [...prev , {
        schoolName:'',
        degree:'',
        startDate:'',
        endDate:'',
      }];
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-2 border-gray-200 shadow-lg  p-6 m-4  rounded-lg bg-white"
      >
        {educationInfo.map((item, index) => {
          return (
            <>
              <div className="flex flex-col p-2 gap-2">
                <label
                  htmlFor="schoolName"
                  className="font-semibold text-gray-700"
                >
                  SchoolName:
                </label>
                <input
                  id="schoolName"
                  type="text"
                  name="schoolName"
                  readOnly={modes}
                  value={item.schoolName}
                  onChange={(e) => handleChange(e, index)}
                  className={`border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md p-2 ${
                    modes && `bg-gray-200 text-gray-500`
                  }`}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label htmlFor="degree" className="font-semibold text-gray-700">
                  Degree:
                </label>
                <input
                  id="degree"
                  type="text"
                  name="degree"
                  readOnly={modes}
                  value={item.degree}
                  onChange={(e) => handleChange(e, index)}
                  className={`border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md p-2 ${
                    modes && `bg-gray-200 text-gray-500`
                  }`}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label
                  htmlFor="startDate"
                  className="font-semibold text-gray-700"
                >
                  StartDate
                </label>
                <input
                  id="startDate"
                  type="date"
                  name="startDate"
                  readOnly={modes}
                  value={item.startDate}
                  onChange={(e) => handleChange(e, index)}
                  className={`border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 ${
                    modes && `bg-gray-200 text-gray-500`
                  }`}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label
                  htmlFor="endDate"
                  className="font-semibold text-gray-700"
                >
                  EndDate
                </label>
                <input
                  id="endDate"
                  type="date"
                  name="endDate"
                  readOnly={modes}
                  value={item.endDate}
                  onChange={(e) => handleChange(e, index)}
                  className={`border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 ${
                    modes && `bg-gray-200 text-gray-500`
                  }`}
                />
              </div>
              <hr />
            </>
          );
        })}

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

        <button
          onClick={handleClick}
          className="border bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg self-center transition duration-300"
        >
          Add Extra Detail
        </button>
      </form>
    </div>
  );
}