import React, { createRef, useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
// import FullCalendar from 'fullcalendar-reactwrapper';

import FullCalendar, { formatDate, getDateMeta } from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import ANXAddEvetnModal from './ANXAddEvetnModal/ANXAddEvetnModal';
import { Tooltip } from 'react-bootstrap';



function CustomCalendar({
    renderEventContent,
    renderEventContentAsync,
    slotMinTime,
    slotMaxTime,
    showModalAddEvent,
    onClickAgendPeriod,
    onClickOpenModalAddEvent,
    onClickCloseModalAddEvent,
    listEvents,
}) {

  let element = createRef(null);
  let calendarRef = createRef()
  let todayStr = new Date().toISOString().replace(/T.*$/, '') 
  const [addNewEvent, setAddNewEvent] = useState({});
  const [events, setEvents] = useState([]);


  const handleDateSelect = (event) => {
    // eslint-disable-next-line no-undef
    onClickOpenModalAddEvent(true)
    setAddNewEvent(event)  
  }  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleEvents = () => {
    setEvents(listEvents)
    return events
  }
  
  useEffect(()=> { 
    handleEvents();
  },[handleEvents,events])
  
  const renderModalAddEvent = () => {
    return (
      <ANXAddEvetnModal 
        showModal={showModalAddEvent}
        onClickcloseModal={()=>{
          onClickCloseModalAddEvent(false);
        }}
        selectPeriod={addNewEvent}
        onClickAgendPeriod={(periods)=>{
          onClickAgendPeriod(periods)
        }}
      />
    )
  }

  const eventRender = (info) => {
    let tooltip = new Tooltip(info.el, {
      title: info.event.extendedProps.title,
      placement: "top",
      trigger: "click",
      container: "body"
    });
  }

  const renderCalendar = () => {
        return (
        <div id="example-component">
            <FullCalendar
                schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                id = "your-custom-ID"
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{        
                left: 'title',//'prev,next',
                center: '',        
                right: 'prev,next' //'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                titleFormat={{ year: 'numeric', month: 'short', day: 'numeric', omitCommas: true  }}
                dayHeaderFormat={{ weekday: 'long', day: 'numeric', month: 'numeric', omitCommas: true  }}
                locale={ptBrLocale}
                slotDuration={'00:30:00'}
                businessHours={[ // specify an array instead
                  {
                    daysOfWeek: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
                    startTime: '08:00', // 8am
                    endTime: '18:00' // 6pm
                  },
                  {
                    daysOfWeek: [ 4, 5 ], // Thursday, Friday
                    startTime: '10:00', // 10am
                    endTime: '16:00' // 4pm
                  }
                ]}
                initialView='timeGridWeek'
                eventOverlap={false}
                selectOverlap={false}
                selectable={true}
                slotMinTime={slotMinTime}
                slotMaxTime={slotMaxTime}        
                themeSystem="bootstrap"
                selectMirror={true}        
                dayMaxEvents={true}
                dayMaxEventRows={false}
                allDaySlot={false}
                timeZone="UTC"
                formatDate="D/M/YYYY"
                navLinks= {true} // can click day/week names to navigate views
                editable= {true}
                eventLimit= {true} // allow "more" link when too many events
                events = {listEvents}	
                eventRender={eventRender}
                select={handleDateSelect}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                validRange={{
                    start: todayStr, 
                    end: '2025-03-25'
                }}

            />
        </div>
        )
    }
    return (
        <div className="ANXAgendaCalendar"  id="calendar" ref={el => element = el}>
          {renderModalAddEvent()}
          {renderCalendar()}
        </div>
      )
};

export default CustomCalendar;

CustomCalendar.propTypes = {
    listEvents: PropTypes.array,
    onClickAgendPeriod: PropTypes.func,
    onClickCloseModalAddEvent: PropTypes.func,
    onClickOpenModalAddEvent: PropTypes.func,
    renderEventContent: PropTypes.func,
    showModalAddEvent: PropTypes.func,
    renderEventContentAsync: PropTypes.func,
    slotMaxTime: PropTypes.string,
    slotMinTime: PropTypes.string
  }  
  
  CustomCalendar.defaultProps = {
    renderEventContent: ()=>{},
    renderEventContentAsync: ()=>{},
    slotMinTime: "07:00:00",
    slotMaxTime: "18:00:00",
  }
    