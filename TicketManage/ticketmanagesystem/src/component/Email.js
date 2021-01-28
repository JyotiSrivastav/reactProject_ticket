import React from 'react'
import './pageStyle.css'

class Email extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            emailInfo :{
            fromEmail :'',
            toEmail :'',
            subject :'',
            description :'',
            priority :'',
            status :'',
            photo :''
            },
            file: '',imagePreviewUrl: ''
        }
    }

    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }


    emailField=( event , field)=>{
         var currentInfo = this.state.emailInfo ;
         currentInfo[field] = event.target.value ;
         this.setState({emailInfo : currentInfo})
    }
    sendAnother =()=>{
        this.clearField();
    }
    clearField=()=>{
       this.setState ({
        emailInfo :{
            fromEmail :'',
            toEmail :'',
            subject :'',
            description :'',
            priority :'',
            status :'',
            photo :''
            }
       })
    }
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return(
            <div className="emailFeildContainer">
                <h5 className="pageSubTitle">Send an Email</h5>
               
               

                 <label> From </label>
                {/* <input type="file"  onChange={(event)=>{ this.emailField(event, "photo")}}/> */}
                    <input  className="form-control"
                    value={this.state.fromEmail} placeholder="abc@gmail.com" onChange={(event)=>{ this.emailField(event, "fromEmail")}} />
                    <label> To</label>
                    <input className="form-control"
                    value={this.state.toEmail} required  onChange={(event)=> {this.emailField(event, "toEmail")}}/>
                    <label> Subject </label>
                    <input className="form-control"
                    value={this.state.toEmail} onChange={(event)=> {this.emailField(event, "subject")}}/>
                  <label> Priority </label>
                    <select className="form-control"
                     onChange={(event) =>{this.emailField(event, "priority")}}>
                        <option> Low</option>
                        <option> Medium</option>
                        <option> High </option>
                        <option> Urgent </option>
                    </select>
                    <label> Status </label>
                    <select className="form-control"
                    onChange={(event)=> {this.emailField(event, "status")}}>
                        <option>Open</option>
                        <option> Closed </option>
                        <option> Pending</option>
                        <option> Resolved</option>
                    </select>
                    <label> Description</label>
                    <textarea className="form-control"
                    value={this.state.toEmail} onChange={(event)=> {this.emailField(event, "description")}} >
                     
                    </textarea>
                    
                    <div>
                      {/* <div className="imgPreview">
                      {$imagePreview}
                      </div> */}
                      <input className="fileInputEmail" 
                      type="file" 
                      onChange={(e)=>this._handleImageChange(e)} />
                    </div>

                    <div>
                        {/* <button className="subBtn" onClick={this.sendAnother}> Another </button> */}
                        <button className="subBtn" onClick={this.clearField}> Cancel </button>
                        <button className="subBtn" onClick={this.submit}> Send </button>
                    </div>
            </div>
        )
    }
}

export default Email