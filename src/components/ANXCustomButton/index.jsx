import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import  './ANXCustomButton.scss';

const CustomButton = ({col, text, onPress, type, disabled, children, size, style}) => {

  const chooseStyleButton = (type) => {
    if(type === 'secondary'){
      return 'ANXCustomSecondaryButton'
    }
    if(type === 'noBorder'){
      return 'ANXCustomNoBorderButton'
    }
    if(type === 'primaryLogin'){
      return 'ANXCustomPrimaryButtonLogin'
    }
    if(type === 'secondaryLogin'){
      return 'ANXCustomSecondaryButtonLogin'
    }
    return 'ANXCustomPrimaryButton'
  }

  const chooseStyleText = (type) => {
    if(type === 'secondary' || type === 'noBorder' || type === 'secondaryLogin'){
      return 'ANXCustomSecondaryText'
    }
    return 'ANXCustomPrimaryText'
  }



  return (
    <Button 
      className={`${chooseStyleButton(type)} col-${col}`}
      onClick={onPress}
      disabled={disabled}
      size={size}
      style={style}
    >
      <p className={chooseStyleText(type)}>
        {text || children}
      </p>
    </Button>
  )};

export default CustomButton;


CustomButton.propTypes = {
  children: PropTypes.element,
  col: PropTypes.string,
  type:  PropTypes.string,
  text:  PropTypes.string.isRequired,
  disabled:  PropTypes.bool,
  size:  PropTypes.string,
  onPress:  PropTypes.func,
  cancel:  PropTypes.func,
  variant:  PropTypes.string,
  style: PropTypes.object,
}
CustomButton.defaultProps = {
  text:'',
  disabled: false,
  type: "button",
  style: [],
};