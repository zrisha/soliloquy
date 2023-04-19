import { Component } from 'react';
import HtmlToReact from 'html-to-react';
import '../styles/Word.css';




class Word extends Component {
  constructor(props){
    super(props);
    this.htmlToReact = new HtmlToReact.Parser();
  }

  render(){

    let className;
    if(this.props.colorTA)
      className = 'word colorTA';
    else if(this.props.colored)
      className = 'word colored';
    else
      className = 'word';

    const word = this.htmlToReact.parse('<span class="'+className+'">'+this.props.children+' </span>');
    return word;
  }
}

export default Word;
