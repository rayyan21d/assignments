import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Landing = lazy(() => import('./pages/Landing'))

function App() {


  return (
    
    <BrowserRouter>

    <Appbar />
    
    <Routes>

      <Route path='/dashboard' element={ <Suspense fallback={"...Loading"} > <Dashboard /> </Suspense>} />
      <Route path='/' element={ <Suspense fallback={"loading..."}> <Landing/> </Suspense>} />

    </Routes>

    </BrowserRouter>
    
  )
}


function Appbar(){

  const navigate = useNavigate();


  return(
    <div>
      <div>
        <button onClick={()=>{
            navigate("/");
        }}>Landing</button>
          
        <button onClick={()=>{
          navigate("/dashboard");
        }}>Dashboard</button>
        
      </div>

    </div>

  ) 

  
}


export default App