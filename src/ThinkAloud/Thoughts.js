import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong}  from '@fortawesome/free-solid-svg-icons';
import '../styles/Thoughts.css';
import '../styles/Animate.css'; 

export default class Thoughts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thoughtClicked: false
    };
    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.debouncedOnHover = debounce(this.onHover, 350);
  }

  onClick(){
    if(this.lnOrder !== this.state.thoughtClicked){
      this.setState({thoughtClicked: this.lnOrder});
      this.props.nextLine();
    }else{
      return
    }
  }

  onHover(thought){
    this.props.hoverThought(thought);
    this.hovered = true;
  }

  onMouseLeave(){
    if(this.hovered){
      this.props.hoverThought(false);
      this.hovered=false;
    }
    this.debouncedOnHover.cancel();
  }

  renderThoughts(){
    if(!this.props.data){
      return
    }
    let orderedThoughts = this.props.data.linesTA.flatMap(line => line.tooltips ? line.tooltips : [])
    orderedThoughts = orderedThoughts.sort((a, b) => a.lnOrder > b.lnOrder ? 1 : -1);

    return orderedThoughts.map(thought => {
      if(thought.lnOrder === this.props.thought){
        this.lnOrder = thought.lnOrder
        return <li ref={this.thoughtRef} key={thought.lnOrder} onClick={this.onClick} className='active animate__animated animate__fadeIn'>
          {thought.content}<FontAwesomeIcon className='next' icon={faRightLong} />
          </li>
      }else if(thought.lnOrder < this.props.lineOrder || this.props.completed){
        const classname = this.props.hoveredThought && this.props.hoveredThought.lnOrder === thought.lnOrder ? 'hovered' : '';
        return(
        <li key={thought.lnOrder} 
            onMouseEnter={() => this.debouncedOnHover(thought)} 
            onMouseLeave={this.onMouseLeave}
            className={classname}>
            {thought.content}
        </li>)
      }else{
        return(
          <li key={thought.lnOrder} className="upcoming">
              <span style={{visibility: 'hidden'}}>{thought.content}</span>
          </li>)
      }
    })
  }

  render(){
    return (
      <ul className='thoughts'>
        {this.renderThoughts()}
      </ul>
    )
  }

}