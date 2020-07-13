import PropTypes from "prop-types";
import React from 'react';
import { Modal, Row } from 'react-bootstrap';
import moment from 'moment'

import ANXCustomButton from '../../ANXCustomButton'

import './ANXAddEvetnModal.style.scss';

function ANXAddEvetnModal({
  showModal, 
  onClickcloseModal,
  onClickAgendPeriod,
  selectPeriod
}) {

  const calculeInterval = (tstart) => {
    let Nstart = tstart;
    const Nend = moment(selectPeriod.end).utc().format("x");
    let first = true;
    let interval = []
    Array(24).fill().map( () => {
      if(moment(Nstart).utc().format('x') < Nend) {
        if(first){
          first = false
          Nstart =  moment(Nstart);
          interval.push(Nstart)
        }else{
          Nstart =  moment(Nstart).utc().add(30, 'minutes');
          interval.push(Nstart)
        }
      }
      if(moment(Nstart).utc().format('x') === moment(selectPeriod.start).utc().format('x')) {
        Nstart =  moment(Nstart);
      }
      return '';
    })
    return interval.map( (item, index) =>{
      return ( <span key={index} className="addHour">{moment(item).utc().format('HH:mm')} </span>)
    });
      
  }


  const createPeriods = () => {
    let Nstart = selectPeriod.start;
    const Nend = moment(selectPeriod.end).utc().format("x");
    let first = true;
    let interval = []
    Array(24).fill().map( () => {
      if(moment(Nstart).utc().format('x') < Nend) {
        if(first){
          first = false
          Nstart =  moment(Nstart);
          interval.push({
            start: moment(Nstart).utc().format('YYYY-MM-DDTHH:mm:ss'),
            end: moment(Nstart).add(30,'minutes').utc().format('YYYY-MM-DDTHH:mm:ss')
          }) 
        }else{
          Nstart =  moment(Nstart).utc().add(30, 'minutes');
          interval.push({
            start: moment(Nstart).utc().format('YYYY-MM-DDTHH:mm:ss'),
            end: moment(Nstart).add(30,'minutes').utc().format('YYYY-MM-DDTHH:mm:ss')
          })          
        }
      }
      // if(moment(Nstart).utc().format('x') === moment(selectPeriod.start).utc().format('x')) {
      //   Nstart =  moment(Nstart).utc();
      //   interval.push({
      //     id: createEventId(),
      //     start: moment(Nstart).utc().format('YYYY-MM-DDTHH:mm:ss'),
      //     end: moment(Nstart).add(30,'minutes').utc().format('YYYY-MM-DDTHH:mm:ss')
      //   }) 
        
      // }
      return '';
    })
    return interval;
  }

  return( <>
    <Modal
      centered
      show={showModal}
      size='md'
      dialogClassName="ANXAddEvetnModal"
    >
      <Modal.Body className="customBody">
        <Row className="justify-content-start">
          <div className="col-12 title">Deseja liberar sua agenda de teleatendimento nos dias e horários:</div>
        </Row>
        <Row className="justify-content-start">
          <div className="col-12"></div>
          <span className="addDate">{moment(selectPeriod.startStr).format('DD/MM')} </span>
          {calculeInterval(selectPeriod.start)}
        </Row>
        <Row className="justify-content-start buttons">
          <div className="button1"> 
            <ANXCustomButton
              type="noBorder"
              onPress={()=>onClickcloseModal()}
            >
              Cancelar
            </ANXCustomButton>
          </div>
          <div className="button2">   
            <ANXCustomButton
              onPress={()=>{       
                const periodos = createPeriods();
                onClickAgendPeriod(periodos)
              }}
            >
              LIBERAR AGENDAMENTO
            </ANXCustomButton>
          </div>
        </Row>
      </Modal.Body>
    </Modal>
  </>
  );
}

ANXAddEvetnModal.propTypes = {
  onClickAgendPeriod: PropTypes.func,
  onClickcloseModal: PropTypes.func,
  selectPeriod: PropTypes.shape({
    end: PropTypes.string,
    start: PropTypes.string,
    startStr: PropTypes.string
  }),
  showModal: PropTypes.bool
}

export default ANXAddEvetnModal;
