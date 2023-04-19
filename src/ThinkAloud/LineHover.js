import React from 'react';  // eslint-disable-line no-unused-vars
import Word from './Word.js';
import '../styles/Line.css';

function LineHover(props){

  const offset =  props.offText ? <span style={{visibility: 'hidden'}}>{props.offText}</span> : false;

  const words = props.children.split(' ').map((word, key) => {
        const range = props.thought.range;

        //start and end for slice
        let start = range[0] -1,
        end = range.length === 2 ? range[1] -1 : range[0] -1,
        colored;

        if(key >= start && key <= end){
          colored = true;
        }
        return <Word key={`${word}_${key}`} colored={colored}>{word}</Word>;
  });

  if(props.className === 'title'){
    return <li key = {props.lineKey} className = {props.className}>
      {offset} <h2>{words}</h2>
    </li>
  }else{
    return <li key = {props.lineKey} className = {props.className}>
      {offset} {words}
    </li>
  }
}

export default LineHover;
