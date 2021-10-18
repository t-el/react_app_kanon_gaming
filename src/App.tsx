import React, { useEffect, useState }  from 'react';
import Results from './components/Results';


function App (){
const [data ,setData] = useState<Array<any>>([])
const [error ,setError] = useState<Boolean>(false)
const [st ,setSt] = useState<Boolean>(true)

useEffect(() => {
  fetch("https://restcountries.com/v3.1/all").then(
      res => res.json()
  ).then(
    res => {
      setData(res)
      setSt(false)
    }

  ).catch(
     () => {
       setError(true)
      }
  )
},[]);

function filter(name :string){
  setSt(true)
if(!name)
   {
    fetch("https://restcountries.com/v3.1/all").then(
      res => res.json()
  ).then(
    res => {
      setData(res)
      setSt(false)
    }

  ).catch(
     () => {
       setError(true)
      }
  )  
   }else{
  fetch("https://restcountries.com/v3.1/name/"+name).then(
    res => res.json()
    ).then(
      res => {
        setData(res)
        setSt(false)
      }
    ).catch(
      () => {
        setError(true)
      }
    )
   }
}

  /*function if_not(){
    let h = document.getElementById('no_data')?document.getElementById('no_data'):undefined;
   if(h){
     h.innerHTML = "No Country ";
   }
}*/




return(

   <div>
      <div className="container">
      <h1>Country Api</h1>
      <input id="input" onInput ={(ev) => filter(ev.currentTarget.value)} placeholder="search by name" className='m-1 form-control' type='text' />
      <hr />
      {st?"Loading .... ": <Results st={st} error ={error} data={data}/>}
     
       </div>
     
   </div>
   
   );

    
  }
export default App;



