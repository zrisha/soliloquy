import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Line from './Line.js';
import LineTA from './LineTA.js';
import LineHover from './LineHover.js';
import Menu from './Menu.js';
import Thoughts from './Thoughts.js';
import '../styles/ThinkAloud.css';
import 'antd/es/spin/style/index.css'; // for css
import { Spin } from 'antd';

class ThinkAloud extends Component {

  componentDidMount() {
    //Mount api call to start thinkaloud
    window.soliloquy.start = this.startThinkaloud;
    
    var {title, lines} = this.props.data.text;
    this.lines = lines.slice();
    this.lines.unshift(title);
    this.props.setConfig(this.props.data);
    this.maxLine = this.getMaxLine(this.props.data)
  }

  componentDidUpdate(nextProps){
    //calls a line query on lineOrder update
    if(nextProps.thinkaloud.lineOrder !== this.props.thinkaloud.lineOrder){
      if(this.props.thinkaloud.running)
        this.props.queryLines(this.props.thinkaloud.data.linesTA);
    }
  }

  componentWillUnmount(){
    this.props.endThinkaloud();
  }

  getMaxLine(data){
    const allLines = data.linesTA.flatMap(line => line.order)
    return Math.max(...allLines);
  }

  renderLines() {
    //compiles lines and handles state changes
    const { activeLine, lineOrder, hoveredThought } = this.props.thinkaloud;
    const {linesTA, wordDelay, commaDelay} = this.props.thinkaloud.data;
    let breakCount = 0;
    const payload = this.lines.map(function(line, key){
      //Handles line breaks in data e.g. ''
      if(line === ''){
        breakCount++;
        return <li key={'break_' + breakCount}>&nbsp;</li>;
      }
      const lineNum = key - breakCount;
      const className = key === 0 ? "title": "line";
      const words = line.split(' ');
      const active = activeLine === lineNum ? true : false;

      if(active){
        return (
          <LineTA
            className = {className}
            key = {'line_' + lineNum}
            dataTA = {{tooltips: linesTA[lineNum].tooltips, lineOrder}}
            commaDelay = {commaDelay}
            words={words}
            triggerThought={(args) => this.props.triggerThought(args)}
            thought={this.props.thinkaloud.thought}
            wordDelay = {wordDelay}
            nextLine = {this.nextLine.bind(this)}
          />
        );
      }else if(hoveredThought && linesTA[lineNum] && linesTA[lineNum].order.includes(hoveredThought.lnOrder)){
        return (
          <LineHover
          className = {className}
          key = {'line_' + lineNum}
          thought={hoveredThought}
        >{line}</LineHover>
        )
      }else{
      return (
        <Line
          className = {className}
          key = {'line_' + lineNum}
        >{line}</Line>
      )
      }
    }.bind(this));
    return payload;
  }

  nextLine(trigger){
    const {lineDelay} = this.props.thinkaloud.data;
    if(trigger === 'user'){
      this.props.nextLine(trigger);
    }else{
      setTimeout(this.props.nextLine.bind(this, trigger), lineDelay);
    }
  }

  startThinkaloud = () => {
    this.props.startThinkaloud(this.props.thinkaloud.data.startingLine);
  }

  render() {
    if(!this.props.thinkaloud || !this.props.thinkaloud.data)
      return null

    const thought = this.props.thinkaloud.thought ? this.props.thinkaloud.thought.lnOrder : null;

    return (
      <Spin
        spinning={!this.props.thinkaloud.hasOwnProperty('data')}
      >
        <div id="ThinkAloud">
          <Menu
            startThinkaloud = {this.startThinkaloud}
            nextLine = {this.nextLine.bind(this, 'user')}
            thought={thought}
            lineOrder={this.props.thinkaloud.lineOrder}
            maxLine={this.maxLine}
            completed={this.props.thinkaloud.completed}
          />
          <div className="content">
          <ul className="poem">
            {this.renderLines()}
          </ul>
          <Thoughts
            lineOrder={this.props.thinkaloud.lineOrder}
            completed={this.props.thinkaloud.completed}
            thought={thought}
            data={this.props.thinkaloud.data}
            nextLine = {this.nextLine.bind(this, 'user')}
            hoverThought={this.props.hoverThought}
            hoveredThought={this.props.thinkaloud.hoveredThought}
          />
          </div>
        </div>
      </Spin>
    )
  }
}


function mapStateToProps(state) {
  return {
    thinkaloud: state.thinkaloud,
    params: state.params
  };
}

export default connect(mapStateToProps, actions)(ThinkAloud);
