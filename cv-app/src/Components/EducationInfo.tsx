
export default function EducationInfo() {


    return (
        <form >
           <label>
                <input
                    type="text"
                    name="schoolname" 
                    /> 

            </label> 
           <label>
                <input 
                    type="text" 
                    name="degree"
                /> 
            </label> 
           <label>
                <input  
                    type="date" 
                    name="startdate"
                /> 
            </label> 
           <label>
                <input 
                    type="date" 
                    name="enddate"
                /> 
            </label> 

        </form>
    )
}