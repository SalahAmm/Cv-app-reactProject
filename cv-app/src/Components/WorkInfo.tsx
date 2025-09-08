
import { useState } from "react";
import { type workInfoType } from "../App";
import { type Dispatch, type SetStateAction } from "react";
import { type FormEvent, type ChangeEvent } from "react";

type WorkInfoProps = {
  workInfo: workInfoType[];
  setWorkInfo: Dispatch<SetStateAction<workInfoType[]>>;
};

export default function WorkInfo({
  workInfo,
  setWorkInfo,
}: WorkInfoProps) {
  const [modes, setModes] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModes((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;

    setWorkInfo((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };


  const handleClick = () => {
    setWorkInfo((prev) => {
      return [...prev , {
        company:'',
        position:'',
        responsibility: '',
        startDate:'',
        endDate:'',
      }];
    });
  }

  const handleDelete = (index: number) => {
    setWorkInfo((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-2 border-gray-200 shadow-lg  p-6 m-4  rounded-lg bg-white"
      >
        {workInfo.map((item, index) => {
          return (
            <>
              <div className="flex flex-col p-2 gap-2">
                <label
                  htmlFor="company"
                  className="font-semibold text-gray-700"
                >
                  Company Name:
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  readOnly={modes}
                  value={item.company}
                  onChange={(e) => handleChange(e, index)}
                  className={`border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md p-2 ${
                    modes && `bg-gray-200 text-gray-500`
                  }`}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label
                  htmlFor="position"
                  className="font-semibold text-gray-700"
                >
                  Position:
                </label>
                <input
                  id="position"
                  type="text"
                  name="position"
                  readOnly={modes}
                  value={item.position}
                  onChange={(e) => handleChange(e, index)}
                  className={`border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md p-2 ${
                    modes && `bg-gray-200 text-gray-500`
                  }`}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label
                  htmlFor="responsibility"
                  className="font-semibold text-gray-700"
                >
                  Responsibility:
                </label>
                <input
                  id="responsibility"
                  type="textarea"
                  name="responsibility"
                  readOnly={modes}
                  value={item.responsibility}
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
                  StartDate:
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
                  EndDate:
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
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg transition duration-300"
                >
                  Delete
                </button>
              </div>
              <hr className="mt-4" />
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