import {message} from 'antd';

//ThinkAloud

export function startThinkaloud(lineNum = 1){
  return {
    type: 'START_THINKALOUD',
    lineNum
  }
}

export function queryLines(lineData){
  return (dispatch, getState) => {
    const { lineOrder } = getState().thinkaloud;

    for(let i=0; i < lineData.length; i++){
      const line = lineData[i], lineNum = i;

      for(let i=0; i < line.order.length; i++){
        if(line.order[i] === lineOrder){
          dispatch ({ type: 'SELECT_LINE', activeLine: lineNum });
          return
        }
      }
    }
    dispatch ({ type: 'END_THINKALOUD' });
    message.success("Activity Complete");
  }
}

export function nextLine(trigger){
  if(trigger && trigger === "user"){
    return {
      type: 'USER_NEXT_LINE'
    }
  }
  else{
    return {
      type: 'NEXT_LINE'
    }
  }
}

export function triggerThought(thought){
  return {
    type: 'TRIGGER_THOUGHT',
    thought
  }
}

export function hoverThought(thought){
  return {
    type: 'HOVER_THOUGHT',
    thought
  }
}

export function endThinkaloud(){
  return {
    type: 'END_THINKALOUD'
  }
}

//Mounts config data into state
export function setConfig(data){
  return {
    type: "SET_CONFIG",
    data
  }
}