import React, { Component } from 'react';
import { fetchNotes } from './noteActions'
import { connect } from 'react-redux';

class Notes extends Component {  //not exporting entire component see 'connect' below
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

const mapStateToProps = state => {
  return {
    notes: state
  }
}
export default connect(mapStateToProps, {})(Notes) // only exporting connected part of component
