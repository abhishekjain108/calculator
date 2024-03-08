import React, { useState } from 'react'

const Calculator = () => {

   const [ans, setAns] = useState('');

   function clickhandle(e){
    setAns(ans.concat(e.target.value))
   }

   function handleClear(){
    setAns('')
   }

   function calculate(){

    setAns(eval(ans).toString())
   }

  return (
    <>
    <div className="container" style={{marginTop:'50px'}}>
    <h1 className='heading'>Calculator</h1>
    <br />
    <div className="con">
    <input className='text' type="text" placeholder='0' value={ans}/>
    <input className='button' type="button" value="9" onClick={clickhandle}/>
    <input className='button' type="button" value="8" onClick={clickhandle}/>
    <input className='button' type="button" value="7" onClick={clickhandle}/>
    <input className='button' type="button" value="6" onClick={clickhandle}/>
    <input className='button' type="button" value="5" onClick={clickhandle}/>
    <input className='button' type="button" value="4" onClick={clickhandle}/>
    <input className='button' type="button" value="3" onClick={clickhandle}/>
    <input className='button' type="button" value="2" onClick={clickhandle}/>
    <input className='button' type="button" value="1" onClick={clickhandle}/>
    <input className='button' type="button" value="+" onClick={clickhandle}/>
    <input className='button' type="button" value="0" onClick={clickhandle}/>
    <input className='button' type="button" value="-" onClick={clickhandle}/>
    <input className='button' type="button" value="/" onClick={clickhandle}/>
    <input className='button' type="button" value="%" onClick={clickhandle}/>
    <input className='button' type="button" value="*" onClick={clickhandle}/>
    <input className='button b1' type="button" value="Clear" onClick={handleClear} />
    <input className='button b1' type="button" value="=" onClick={calculate}/>
    </div>
    </div>
    </>
  )
}

export default Calculator