import './App.css';
import './style.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  const [theme, settheme] = useState('light-theme');
  const [visiblity, setVisibility] = useState('hidden');
  const [themeIcon, setThemeIcon] = useState('moon-stars');
  const [accordianTheme, setaccordianTheme] = useState('accordian');
  const [textAreatheme, settextAreatheme] = useState('light');
  const [alertMsg, setAlertMsg] = useState(null);
  const [themeNumber, setThemeNumber] = useState(0);
  // ================== Alert Block ====================
  const showAlert = (message, type) => {
    setAlertMsg({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  }
  // ==================== theme change manually by user ===============
  const toggleTheme = () => {
    if (themeNumber === 0) {
      document.body.style.backgroundColor = "rgb(3 16 45)";
      setThemeNumber(1);
    }
    if (themeNumber === 1) {
      document.body.style.backgroundColor = "rgb(12, 2, 49)";
      setThemeNumber(2);
    }
    if (themeNumber === 2) {
      document.body.style.backgroundColor = "rgb(31, 2, 34)";      
      setThemeNumber(3);
    }
    if (themeNumber === 3) {
      document.body.style.backgroundColor = "rgb(31, 2, 18)";     
      setThemeNumber(4);
    }
    if (themeNumber === 4) {
      document.body.style.backgroundColor = "rgb(29, 14, 0)";     
      setThemeNumber(5);
    }
    if (themeNumber === 5) {
      document.body.style.backgroundColor = "black"; 
      setThemeNumber(0);
    }
  }

  // =================== Theme Icon Change Section ===============
  const toggleBtn = () => {
    
    if (theme === "light-theme") {
      settheme('dark-theme');
      setThemeIcon('brightness-high');
      setVisibility('visible')
      setaccordianTheme('accordion-dark')
      settextAreatheme("textarea-dark");
      setThemeNumber(0);
      showAlert("Dark Theme Enable", "success")
      document.body.style.backgroundColor = "#06031f";
      document.body.style.color = "white";      
    }
    else {
      settheme('light-theme');
      setThemeIcon('moon-stars');
      setVisibility('hidden')
      setaccordianTheme('accordion')
      settextAreatheme("light");
      setThemeNumber(0);
      showAlert("Light Theme Enable", "success")
      document.body.style.backgroundColor = "rgb(185, 255, 255)";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <Navbar title="S21k TextUtils" theme={theme} iconChange={themeIcon} toggleBtn={toggleBtn} activeColorBox={visiblity} toggleTheme= {toggleTheme} />
      <Alert alert={alertMsg} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" textAreatheme={textAreatheme} theme={accordianTheme} />
      </div>
    </>
  );
}

export default App;
