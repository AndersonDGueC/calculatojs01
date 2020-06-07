import React, {Component} from "react"
 import Button from './Button'
import DisplayCal from "./DisplayCal";
import TeclasCal from "../TeclasCal"

class ContainerCal extends Component{

    constructor(props){
        super(props)
        this.state={
            arrTerm:[ ],
            num:[ ],
            oper:' ',
            resultado:' '
        }
        this.funcTeclas=this.funcTeclas.bind(this)
    }
componentDidMount(){
this.funcTeclas()
}
funcTeclas=()=>{
    let arrFun=TeclasCal.map((arr)=>{
        return document.querySelector(`#${arr.num}`).addEventListener('click',(e)=>{
            let numsimTecl=document.querySelector(`#${arr.num}`).value;
            if(numsimTecl!=="+"&& numsimTecl!=="-"&& numsimTecl!=="*"&& numsimTecl!=="/"&&numsimTecl!=="."){
                
                this.setState({
                num:numsimTecl
            })
        }
        else{
            this.setState({
                oper:numsimTecl
                
            })

        }
        })
    })
   
    
}
    render(){
        
        console.log(this.state.num)
        
        return(
            <div className="container1">
              <DisplayCal/>
                <div className="container2">
                
                
                { TeclasCal.map((arr)=>{
                 return(
                    <Button  key={arr.num} num={arr.simb} name={arr.num}/>
                 )
                }
                )
            }
            
                
            </div>
            <div className="container3">
            <Button key="clear" num="AC" name="clear"/>
            <Button key="equal" num="=" name="equal"/>
            </div>
            
            </div>
        )
    }
}

export default ContainerCal