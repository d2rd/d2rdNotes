import React, { Component } from 'react';
import { fetchNotes } from './noteActions'
import { connect } from 'react-redux';

class Notes extends Component {  //not exporting entire component see 'connect' below
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchNotes()
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
        <div>
          <ul>
            {/* <li>
              {this.props.notes.map( notes => {
                      return <div>{ notes }</div>
                    })}
            </li> */}
            <li className="Note-row">
              <div>
                <header className="Note-header">
                  <h3> {this.props.notes.title}</h3>
                </header>
                <p className="Note-item"> {this.props.notes.body}</p>
              </div>
            </li>
          </ul>
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
export default connect(mapStateToProps, { fetchNotes })(Notes) // only exporting connected part of component
