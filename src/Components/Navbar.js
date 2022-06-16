import React from 'react'

function Navbar(props) {
    
  return (
    <>
    <nav className={`navbar  navbar-${props.mode} bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <li id = 'textFilter' style={{listStyle : 'none',marginLeft : '2vw' }}> <b> Text - Transform</b></li>
      <div className="d-flex mx-3">
        <button className={`btn rounded mx-2 btn-${props.mode === 'light' ? 'dark' : 'light'}`}  style = {{height : '25px'}} onClick={props.ChangeMode}></button>
        mode to {props.mode === 'light' ? 'dark' : 'light'}
      </div>
    </nav>
    </>
  )
}
export default Navbar