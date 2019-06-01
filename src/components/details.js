import React, {Component} from 'react';

const txt = {
    textAlign: 'left',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
}

const dt = {
    marginRight: '15%'
}

const bold = {
    fontWeight: 'bold'
}

class Detail extends Component{
    
    render(){

      return (
        <div style={txt}>
            <div style={dt}>
                <p style={bold}>{this.props.startDate} <br/>
                {this.props.endDate}</p>
            </div>
            <div>
                <p style={bold}>{this.props.title}</p>
                <p>{this.props.place}<br/>
                {this.props.descrip}</p>
            </div>
        </div>
      )
}
}
export default Detail;