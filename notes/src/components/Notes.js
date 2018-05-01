import React, { Component } from 'react';

export default class Animals extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        {/* <ul>
          <li><h3>Notes:</h3></li>
        </ul> */}

        <div className="View-header">
                    <h1>Your Notes</h1>
                    {/* <h1>Your Notes {this.props.pageHeader}</h1> */}
        </div>
      </div>
    )
  }
}


