import React, { Component } from 'react';
import Word from './Word.js';
import '../styles/Line.css';

class LineTA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coloredWord: null,
      tooltip: null
    };
  }

  componentDidMount(){
    this.mounted = true;
    this.colorWord();
  }

  componentWillUnmount(){
    this.mounted = false;
    this.setState({
      coloredWord: null,
      tooltip: null
    });
  }

  renderWords(coloredWord) {
    if(this.props.thought){
      let line = this.launchThought(this.props.thought);
      return line;
    }
    const words = this.props.words.map(function(wordNode, key){
      const colorTA = coloredWord === key ? true : false;
      const ele = <Word colorTA={colorTA} key={'word_'+ key}>{wordNode}</Word>;
      return ele;
    });
    return words;
  }

  //recursion to color each word of line
  colorWord(i=0) {
    if(!this.mounted)
      return;

    const {words, wordDelay, commaDelay} = this.props;
    //Check if last of the array
    if(i+1 > words.length){
      this.setState({coloredWord: null});
      this.queryThought();
      return;
    }

    let re = new RegExp('[,–.—;:]');

    const delay = re.test(words[i]) && i !== words.length-1
                  ? wordDelay + commaDelay : wordDelay;

    //Change current word to colored
    this.setState({coloredWord: i});

    //After pause, move on to next word
    setTimeout(function(){
      return this.colorWord(i+1);
    }.bind(this), delay);
  }


  queryThought() {
    //If no tooltip next line
    if(!this.props.dataTA.tooltips) {
      this.props.nextLine();
      return
    }

    const tooltips = this.props.dataTA.tooltips;

    //Check for match
    for(let tooltip of tooltips) {
      if(tooltip.lnOrder === this.props.dataTA.lineOrder) {
        setTimeout(() => {
          // this.setState({tooltip: tooltip});
          this.props.triggerThought(tooltip);
        }, 600);
        return
      }
    }
    //No match? Next line
    this.props.nextLine();
  }

  closeTT(){
    setTimeout(() => {
      this.setState({tooltip: null});
    }, 200);
  }

  launchThought(){
   const range = this.props.thought.range;
   //start and end for slice
   let start = range[0] -1,
   end = range.length === 2 ? range[1] -1 : range[0] -1;

   return this.props.words.map((wordNode, key) => {
     let colored = false;
     if(key >= start && key <= end){
      colored = true;
     }

     return <Word key={'word_'+ key} colorTA={colored}>{wordNode}</Word>;
   });
 }


  render() {
    var line = this.renderWords(this.state.coloredWord);
    if(this.props.className === 'title')
     line = <h2>{line}</h2>;

    return (
      <li className = {this.props.className}>
        {line}
      </li>
    )
  }
}

export default LineTA;
