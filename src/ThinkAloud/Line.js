import React from 'react';  // eslint-disable-line no-unused-vars
import Word from './Word.js';
import '../styles/Line.css';

function Line(props){
  let words, offset;

  if(props.className === 'title')
    words = (<h2>{props.children}</h2>);
  else
    words = props.children.split(' ').map((word, key) => <Word key={key}>{word}</Word>);

  if(props.offText)
    offset =  <span style={{visibility: 'hidden'}}>{props.offText}</span>

  return (
    <li key = {props.lineKey} className = {props.className}>
      {offset} {words}
    </li>
  );
}

export default Line;
