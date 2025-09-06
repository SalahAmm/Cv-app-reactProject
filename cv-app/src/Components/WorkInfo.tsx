

export default function WorkInfo() {


    return (
        <>
        <form >
           <label>
                <input
                    type="text"
                    name="compay" 
                    /> 

            </label> 
           <label>
                <input 
                    type="text" 
                    name="position"
                /> 
            </label> 
           <label>
                <input 
                    type="textarea" 
                    name="responsibility"
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
        
        </>
    )
}