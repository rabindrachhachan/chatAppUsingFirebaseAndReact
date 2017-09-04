import React, { Component } from 'react';
import { retrieveMessage } from './messageActions';

export default class MessageList extends Component {
  componentDidMount() {
    this._firebaseRef = firebase.database().ref('messages');
    this._firebaseRef.on('child_added', (snapshot) => {
      const { uid,displayName,photoURL,message } = snapshot.val();
      this.props.dispatch( retrieveMessage({ uid,message }) );
    });
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="col-sm-9 col-md-9 float-right">
        <ul>
          { messages.map(msg => <li>{ msg.uid.displayName+ ': ' + msg.message }</li>)}
        </ul>
      </div>
    );
  }

  componentWillUnmount() {
    this._firebaseRef.off();
  }
}
