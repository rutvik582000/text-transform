import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
// import Textarea from "./Components/Textarea";
import TextUpper from "./Components/TextUpper";

function App() {
  const [mode, setMode] = useState("light");
  let root = document.getElementById('root')
  
  const ChangeMode = () => {
    if (mode === "light") {
      setMode("dark");
      root.style.backgroundColor = '#1f1f52'
      showAlert('successfully implemented dark mode','success')
      
    } else {
      setMode("light");
      root.style.backgroundColor = '#9c97af'
      showAlert('successfully implemented light mode','success')
    }
  };
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type:type  })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
}
  return (
    <>
      <Navbar mode={mode} ChangeMode={ChangeMode} />
      <Alert alert = {alert}/>      
      {/* <Textarea mode={mode} ChangeMode={ChangeMode} /> */}
      <TextUpper mode={mode} showAlert = {showAlert} />
    </>
  );
}

export default App;
// #1f1f52
// #9c97af