import React, { Component} from 'react';
import { Popover } from 'antd';
import 'antd/es/popover/style/index.css'; // for css
import '../styles/zoom.css';


class TooltipTA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.style = {
      width: '100%',
      padding: '8px 16px'
    }
  }

  componentDidMount(){
    setTimeout(function(){
      this.setState({
        visible: true
      });
    }.bind(this), 300)
  }

  closeTT(){
    this.setState({
      visible:false,
    });
    this.props.nextLine("user");
    this.props.closeTT();
  }

  render() {
    const content = (
      <div
        className='thinkaloud-tooltip'
        onClick={this.closeTT.bind(this)}>
        {this.props.content}
      </div>
    );

    return (
      <React.Fragment>
        <Popover
          content={content}
          placement="right"
          visible={this.state.visible}
          overlayClassName="tooltipTA"
          getPopupContainer = {() => window.soliloquy.domTarget}
        >
            {this.props.children}
        </Popover>
        
      </React.Fragment>
    );
  }

}

export default TooltipTA;
