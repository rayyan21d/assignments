import React from 'react'








function App() {
  return (
    <>
    
    <CardWrapper>
    { 
        // Logic is written here for the specific section of the page
    }
        Hi there
    </CardWrapper>

     <CardWrapper>
       Helloo there
    </CardWrapper>
    
    </>
  )
}


function CardWrapper({children}){

    return <>
    {
        // This is the outermost card wrapper which can have smaller boxes or sections of website..
    }
        <div style={{border: '10px solid black', padding:'50px'}}>
           {children}
        </div>
    </>

}




export default App