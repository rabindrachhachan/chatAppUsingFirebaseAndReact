import React, { Component } from 'react';
import { addConnectedUser } from './usersActions';

export default class UsersList extends Component {
  componentDidMount() {
    firebase.database().ref('users').on('child_added', (snapshot) => {
      this.props.dispatch(
        addConnectedUser({
          uid: snapshot.key,
          userPayload: snapshot.val()
        })
      );
    });
  }

  onClickHandle(){
    event.preventDefault();

  }

  showUsersList(users) {
    if(!users) {
      return [];
    }

    return Object.keys(users).reduce(
      (list, uid) => {
      return [
        ...list,
        {
          uid,
          ...users[uid]
        }
      ];
    }, []);
  }

  render() {
    const { users } = this.props;
    return (
      <ul>
        { this.showUsersList(users).map(user =>
          <li>
             <a href={this.onClickHandle.bind()}
             aria-label="rabindrachhanchan (selected, direct message, active)">
             <i className="c-icon c-presence c-presence--active
             c-icon--presence-online c-icon--align-baseline"
             type="presence-online" title="Active" aria-hidden="true">
             </i>
             <span>
                  {user.displayName}
             </span>
              </a>
          </li>)
         }
      </ul>
    );
  }
}
