import React, {useState, useEffect} from 'react';
import CustomCalendar from './components/CustomCalendar/CustomCalendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { INITIAL_EVENTS, createEventId } from './event-utils'
import Axios from 'axios';

function App() {
  const [listEvents, setListEvents] = useState(INITIAL_EVENTS)
  const [showModalAddEvent, setShowModalAddEvent] = useState(false);

  const getData = async() => {

    await Axios.get('https://5f07496c9c5c250016306c61.mockapi.io/calendario')
      .then(response=>{
        // eslint-disable-next-line no-undef
        console.log('response.data',response.data);
        if(response.data === undefined || response.data === null || response.data === '' || response.data.length === 0){          
          //saveData(INITIAL_EVENTS)
        }else{
          setListEvents(response.data)
        }
      })
      .catch(err=>{
        // eslint-disable-next-line no-undef
        console.log(err);      
      })
    return
  }  

  const postData = async(data) => {
    await Axios.post('https://5f07496c9c5c250016306c61.mockapi.io/calendario',data)
      .then(res=>
        setListEvents(res.data)
      ).catch(err=>{
        // eslint-disable-next-line no-undef
        console.log(err);        
      })
  }  

  const saveData = (periodos) => {
    let periods = [];
    periods = listEvents;
    periodos.map(item => {
      item.id = createEventId();
      postData(item)
    })
    
  }  

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <CustomCalendar 
          listEvents={listEvents}
          showModalAddEvent={showModalAddEvent}
          onClickOpenModalAddEvent={()=> {
            setShowModalAddEvent(true)
          }}
          onClickCloseModalAddEvent={()=> {
            setShowModalAddEvent(false)
          }}
          onClickAgendPeriod={(periodos) => {
            saveData(periodos)
            setShowModalAddEvent(false)
          }}
        />
      </header>
    </div>
  );
}

export default App;
