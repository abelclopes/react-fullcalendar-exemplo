import moment from 'moment';
import momentTz from 'moment-timezone';
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = 
[
  {id: createEventId(), start: todayStr + 'T14:00:00' },
  {id: createEventId(), start: todayStr + 'T13:00:00' },
// {id:createEventId(),start:`${moment('10/07/2020 07:00:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`,"end":`${moment('10/07/2020 07:30:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`},
//   // {id:createEventId(),start:`${moment('10/07/2020 10:00:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`,"end":`${moment('10/07/2020 10:30:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`},
//   // {id:createEventId(),start:`${moment('10/07/2020 10:30:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`,"end":`${moment('10/07/2020 11:00:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`},
//   // {id:createEventId(),start:`${moment('10/07/2020 11:00:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`,"end":`${moment('10/07/2020 11:30:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`},
//   // {id:createEventId(),start:`${moment('10/07/2020 11:30:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`,"end":`${moment('10/07/2020 12:00:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`},
//   // {id:createEventId(),start:`${moment('10/07/2020 12:00:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`,"end":`${moment('10/07/2020 12:30:00').utc().format('YYYY-DD-MMTHH:mm:ss')}`},
//   // {id:"12",start:"2020-07-08T12:00:00",end:"2020-07-08T12:30:00"},
//   // {id:"13",start:"2020-07-08T12:30:00",end:"2020-07-08T13:00:00"},
//   // {id:"14",start:"2020-07-08T13:00:00",end:"2020-07-08T13:30:00"},
//   // {id:"15",start:"2020-07-08T13:30:00",end:"2020-07-08T14:00:00"},
//   // {id:"16",start:"2020-07-08T14:00:00",end:"2020-07-08T14:30:00"},
//   // {"start":"2020-07-11T12:30:00","end":"2020-07-11T13:00:00"},
//   // {"start":"2020-07-11T13:00:00","end":"2020-07-11T13:30:00"},
//   // {"start":"2020-07-11T13:30:00","end":"2020-07-11T14:00:00"},
//   // {"start":"2020-07-11T14:00:00","end":"2020-07-11T14:30:00"},
//   // {"start":"2020-07-11T14:30:00","end":"2020-07-11T15:00:00"},
//   // {"start":"2020-07-11T15:00:00","end":"2020-07-11T15:30:00"},
//   // {"start":"2020-07-11T15:30:00","end":"2020-07-11T16:00:00"},
//   // {"start":"2020-07-11T16:00:00","end":"2020-07-11T16:30:00"},
//   // {"start":"2020-07-11T16:30:00","end":"2020-07-11T17:00:00"}
]

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function createEventId() {
  return uuidv4()
}