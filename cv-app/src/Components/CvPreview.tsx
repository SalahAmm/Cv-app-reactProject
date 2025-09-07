import { type personalInfoType } from "../App"

type CvPreviewProps = {
  personalInfo: personalInfoType;
}

export default function CvPreview ({personalInfo } : CvPreviewProps) {




    return (
        <>
       <div className="w-1/2 bg-gray-50 flex justify-center align-baseline">
          <div className="border-2 shadow border-gray-300 rounded bg-white w-4/5 m-10 p-4">
        Cv_Perview
            <div className="p-4 bg-amber-200 flex flex-col gap-4 m-4">
              <p>Personal Information</p>
                <hr />
              <div>
                {personalInfo.name}
                <br />
                {personalInfo.email}
                <br />
                {personalInfo.phone}
              </div>
            </div>
            <hr />
          </div>
        </div> 
        </>
    )
}