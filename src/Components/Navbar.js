import React from 'react'

function Navbar(props) {
    
  return (
    <>
    <nav className={`navbar  navbar-${props.mode} bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <li id = 'textFilter' style={{listStyle : 'none',marginLeft : '2vw' }}>Text - Transform</li>
      <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.ChangeMode}>turn on {props.mode === 'light' ? 'dark' : 'light'}</button>
    </nav>
    </>
  )
}
export default Navbar