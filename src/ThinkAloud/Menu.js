import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button, Progress} from 'antd';

export default function Menu(props) {
  let progress = 0;
  if(props.completed){
    progress = 100;
  }else if(props.lineOrder){
    progress = Math.round(100 * (props.lineOrder / (props.maxLine + 1)));
  }
  return (
  <ul className='menu'>
    <li><Button onClick={props.startThinkaloud} size="small">Start &nbsp; <FontAwesomeIcon icon={faPlay} /></Button></li>
    <li>
      <Button
        disabled={props.thought == null}
        onClick={props.nextLine}
        size="small"
      >Next</Button>
    </li>
    <li>
        <Progress percent={progress} size="small" style={{width: '125px'}}/>
    </li>
  </ul>
  )
}