import React from 'react'

const DisplayCal =({val, valdisplay})=>{
    return(
        <div id="display">
             <input id="input2" value={valdisplay} disabled/>
            <input id="input1" value={val} disabled/>
    
           
        </div>
    )
}
export default DisplayCal