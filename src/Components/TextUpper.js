import React,{useState} from 'react';

function TextUpper(props) {

let preview = document.getElementById('preview');
let textarea = document.getElementById('textarea');
const [text,setText] = useState("Enter text here : ");

const UpperCaseConvert = () =>{
  let newText = "";
  newText = text.toUpperCase();
  setText(newText);
  preview.style.display = 'block'; 
  props.showAlert('successfully converted to Uppercase','success')
}
const LowerCaseConvert = () =>{
  let newText = "";
  newText = text.toLowerCase();
  setText(newText);
  preview.style.display = 'block';
  props.showAlert('successfully converted to Lowercase','success')
}
const CopyText = () => {  
  navigator.clipboard.writeText(text);
  props.showAlert('successfully copied text area','success')
}
const ClearTextArea = () => {
  let newText = ""
  setText(newText);
  preview.style.display = 'none';
  props.showAlert('successfully cleaned text area','success')
  textarea.value = "";
}
const RemoveSpace = () =>{
  let array = text.split(/\s+/).filter((ele)=>{return ele.length!==0})
  let newText = array.join(" ")
  setText(newText);
  preview.style.display = 'block';
  props.showAlert('successfully removed extra space','success')
}

const AssignText = (e) => {
  setText(e.target.value);
  preview.style.display = 'none';
  }
  return (
  <>
    <div className={`container my-3 `} >
      
        <label className= {`p-3 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}htmlFor="textarea"> <b>Input your text here </b>         
          <textarea name="textInput" id="textarea" className={`container mt-3 mb-0 containe bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={AssignText} placeholder='Enter text here' cols={150} rows={10} ></textarea>
        </label>
        
        <div className='row my-3 container  '>
          <button disabled = {text.length === 0} className={`col-sm border-${props.mode} btn btn-${props.mode} border-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={UpperCaseConvert}>To UPPERCASE</button>
          <button  disabled = {text.length === 0} className={`col-sm border-${props.mode} btn btn-${props.mode} border-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={LowerCaseConvert}>To LOWERCASE</button>
          <button  disabled = {text.length === 0} className={`col-sm border-${props.mode} btn btn-${props.mode} border-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={CopyText}>Copy</button>
          <button  disabled = {text.length === 0} className={`col-sm border-${props.mode} btn btn-${props.mode} border-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={ClearTextArea}>Clear textarea</button>
          <button  disabled = {text.length === 0} className={`col-sm border-${props.mode} btn btn-${props.mode} border-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={RemoveSpace}>Remove extra space</button>
        </div>
        
        <div className={`p-2 my-3  bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} >
          <h2>Basic Information</h2>
          <p>This input contains <b>{text.length}</b> characters, <b>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</b> words and <b>{text.split(".").length - 1}</b> sentences. </p>
        </div>

        <div id = "preview" className={`p-2 my-3 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h2>Preview</h2>
          <p className="container  text-light bg-dark">{text}</p>
        </div>
    </div>
  </>      
  )
}

export default TextUpper