import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Root />}>
  //       <Route index element={
  //         <>
  //           {/* <div className='container' style={{ height: '42px' }}>
  //             <Alert type={alert.alertType} message1={alert.alertMsg1} message2={alert.alertMsg2} isAlert={alert.alertBool} />
  //           </div> */}
  //           <TextForm heading="Enter the text to analyse" />
  //         </>
  //       } />
  //       <Route path='/about' element={<About about="About us" />} />
  //     </Route>
  //   )
  // )


  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(false);
  const [alert, setAlert] = useState({
    alertBool: false,
    alertType: null,
    alertMsg1: null,
    alertMsg2: null,
  });
  function handleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020617";
      document.body.style.color = "white";
      setAlert({
        alertBool: true,
        alertType: "success",
        alertMsg1: "Success:",
        alertMsg2: "Dark Mode On"
      });
      setTimeout(() => {
        setAlert({ alertBool: false });
      }, 1000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setAlert({
        alertBool: true,
        alertType: "success",
        alertMsg1: "Success:",
        alertMsg2: "Dark Mode Off"
      });
      setTimeout(() => {
        setAlert({ alertBool: false });
      }, 1000);
    }
  };

  return (
    // <>
    //   <RouterProvider router={router} />
    // </>
    <Router>
      <Navbar title='Texterpreter' about="About Us" mode={mode} onModeChange={handleMode} />
      <Routes>
        <Route path='/' element={<>
          <div className='container' style={{ height: '42px' }}>
            <Alert type={alert.alertType} message1={alert.alertMsg1} message2={alert.alertMsg2} isAlert={alert.alertBool} />
          </div>
          <TextForm heading="Enter the text to analyse" mode={mode} />
        </>} />
        <Route path='/about' element={<About about="About us" />} />
      </Routes>
    </Router>
  );
}

// const Root = () => {
//   return (
//     <>
//       <Navbar title='Texterpreter' about="About Us" />
//       <Outlet />
//     </>
//   )
// }

export default App;