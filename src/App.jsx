
import {useEffect, useState } from 'react'
import DataDisplay from './components/DataDisplay'
import './App.css'
import MessageDisplay from './components/MessageDisplay';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [isLoading,SetIsLoading]=useState(false);
  const [error,SetError]=useState(null);
  const [Data,SetData]=useState([]);
  const getData = async () =>{
    SetIsLoading(true);
    SetError(null);

    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const fetchedData = await response.json();
      SetData(fetchedData);
    } catch (error) {
      SetError(error.message);
    }finally {
      SetIsLoading(false)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  const [data,Setdata]=useState([])
  const[errors,Seterrors]=useState(null)
  function fetchData (){
    (error!==null?Seterrors(error):Setdata(Data))
    console.log(errors)
    
  }
  return (
    <>
      <button onClick={fetchData} disabled={isLoading}>{isLoading ? 'Loading...' : 'Fetch Data'}</button>
      <div class="d-flex align-content-start flex-wrap display" >
        {errors!==null ? <><MessageDisplay error ={errors}/></>:<>{data.map(dataa=>(<DataDisplay key={data.indexOf(dataa)} data={dataa}/>))}</>}
      </div>

      
    </>
  )
}

export default App
