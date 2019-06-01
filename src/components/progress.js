import React, {Component} from 'react';

class Progress extends Component{
    
    render(){

        let progsize= {
            backgroundColor: '#2aaebe',
            width: `${this.props.prog}`
        }

      return (
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={progsize} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      )
}
}
export default Progress;