import React, {Component} from "react";
 import Button from './Button';
import DisplayCal from "./DisplayCal";
import TeclasCal from "../TeclasCal";

var Parser=require('expr-eval').Parser;
let displayVal=' ';
let val1 =" ";

class ContainerCal extends Component{

    constructor(props){
        super(props)
        this.state={
            preview:' ',
            num:0
          
        }
        this.funcTeclas=this.funcTeclas.bind(this)
        this.handleClear=this.handleClear.bind(this)
        this.handleEquals=this.handleEquals.bind(this)
    }
   
    handleClear=()=>{
        val1=' '
        displayVal=' '
        this.setState({
            num:0,
            resultado:' '
             })
    }
    handleEquals=()=>{
        if(val1===" "){
            this.setState({
                num:"NN",
                resultado:' '

            })
        }
        else{
            this.setState({
                num:Parser.evaluate(displayVal).toFixed(4)
                
            })
            
           
        }
    }

    
componentDidMount(){


this.funcTeclas()
}   
funcTeclas=()=>{
    
    let arrFun=TeclasCal.map((arr)=>{
        
        
        document.querySelector(`#${arr.num}`).addEventListener('click',(e)=>{
            let numsimTecl=document.querySelector(`#${arr.num}`).value;
            
            
            
                displayVal+=numsimTecl
                val1+=numsimTecl

                this.setState({
                    num:val1,
                    
                })
                if(numsimTecl==="+"){
                    val1=' '
                   
                    this.setState({
                        preview:numsimTecl,
                        num:numsimTecl

                    })
                
                }

                
                
                      
        })
    
    })
   
    
}
    render(){
        
     
        
        return(
            <div className="container1">
              <DisplayCal val={this.state.num} valdisplay={displayVal} />
                <div className="container2">
                
                
                { TeclasCal.map((arr)=>{
                 return(
                    <Button  key={arr.num} num={arr.simb} name={arr.num} />
                 )
                }
                )
            }
            
                
            </div>
            <div className="container3">
            <Button key="clear" num="AC" name="clear" push={this.handleClear}/>
            <Button key="equal" num="=" name="equals" push={this.handleEquals}/>
            </div>
            
            </div>
        )
    }
}

export default ContainerCal