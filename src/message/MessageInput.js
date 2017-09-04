import React from 'react';
import { sendMessage } from './messageActions';

let myInput;

export default ({ dispatch }) => {
var inputBoxColor={
  color:'#111',
  width:'100%',
  bottom:'0px'
}
 var inputDiv ={
      position: 'relative',
      bottom:'0px',
    }
  return (
    <div className="col-sm-9 col-md-9 float-right" style={inputDiv}>
      <input
        style={inputBoxColor}
        type="text"
        name="message"
        ref={ (ref) => myInput = ref }

        onKeyUp={ ({ keyCode }) => {
          if(keyCode === 13) {
            dispatch(sendMessage(myInput.value));
            myInput.value = '';
          }
        } }
      />
    </div>
  );
};
