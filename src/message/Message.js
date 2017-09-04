import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export class Message extends Component {
  render() {
    const { dispatch, userMessage, isUserSignedIn, messages } = this.props;

    return (
      <div>
         <div className="col-sm-9 col-md-9">
               <MessageList
		  dispatch={ dispatch }
		  messages={ messages }
		/>
		{ isUserSignedIn &&
		    <MessageInput
		      userMessage={ userMessage }
		      dispatch={ dispatch }
		    />
		}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userMessage: state.userMessage,
    isUserSignedIn: state.auth.isUserSignedIn,
    messages: state.messages
  }
};

export default connect(
  mapStateToProps
)(Message);
