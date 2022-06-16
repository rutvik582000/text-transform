import React from 'react';

export default function Textarea(props) {
  const YesRadio = () =>{
    let send = document.getElementById('send');
    send.style.display = 'block';
    let yes = document.getElementById('Yes');
    yes.checked = true;
  }
  const NoRadio = () =>{
    let send = document.getElementById('send');
    send.style.display = 'none';
    let no = document.getElementById('No');
    no.checked = true;
  }
  const EmailValidation =(e) =>{
    let reg = /^[a-zA-Z0-9\.]+@[a-zA-Z\.]+\.[a-zA-Z\.]+$/
      if (!(reg.test(e.target.value))){
      e.target.style.backgroundColor = '#ffd8d8'
      }
      else{
        e.target.style.backgroundColor = '#b2f3b2'
      }
  }
  const Blured = (e) =>{
    if (e.target.style.backgroundColor = '#b2f3b2'){
        e.target.style.backgroundColor = 'white'
      }
  }
  return (
    <>
      <div className={`container border my-3 p-5 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} id = "form">
        <label htmlFor="name" >Full Name <input type="text"/></label><br /><hr />  
        <label htmlFor="Email" onBlur={Blured} onChange={EmailValidation}>Email ID :<input type="text" id='email'/></label><br /><hr />  
        <label htmlFor="receive" >Send copy to your email : 
          <label htmlFor="yes"  onClick={YesRadio}  className='label'>Yes<input id = "Yes" type="radio" name = "email"/></label>
          <label htmlFor="no"  onClick={NoRadio} className='label'>No<input id = "No" type="radio" name = "email"/></label>
          
        </label>
        <hr />  
        <div style={{height:'70px'}}>
        <button className={`btn btn-${props.mode} border-${props.mode === 'light' ? 'dark' : 'light'} px-5`} id = 'send' >Send</button>
        <hr />
        </div>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.ChangeMode}>turn on {props.mode === 'light' ? 'dark' : 'light'}</button>
      </div>

    </>
  )
}