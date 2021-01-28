import React from 'react'
import { file } from '../../node_modules/@babel/types';

class Createcompany extends React.Component{
    render(){
        return(
            <div> 
                <div> 
                    <label> Name the Company </label>
                    <input />
                    <label > Image </label>
                    <input type={file} />
                </div>
            </div>
        )
    }
}

export default Createcompany ;