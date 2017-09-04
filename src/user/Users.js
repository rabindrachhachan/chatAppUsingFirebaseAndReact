import React from "react"
import { connect } from 'react-redux';
import UsersList from './UsersList';

export  class Users extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        const { dispatch, users } = this.props;
        const {auth } = this.props;
        const {uid } = auth;
        var user={
            team:"workadda",
            name:"rabindra",
        }
        var channel={
            name:"general",
        }
        var team={
            name:"Workadda",
            user:[{
                name:"rabindra",
            }]
        }
        return(
            <div>
                <div className="col-sm-3 col-md-3">
                    <div className="col-sm-3 col-md-3">
                         <h3>{user.team}</h3>
                         <p>{user.name}</p>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <h3>All thread</h3>
                    </div>
                    <div className="col-sm-3 col-md-3">
                         <h3>Channel</h3>
                         <p>{channel.name}</p>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <h3>Direct Messages</h3>
                    <div>
                         <h3>Members</h3>
                    <UsersList
                				dispatch={ dispatch }
                				users={ users }
            			   />
                     </div>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <h3>Apps</h3>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <h3>setting</h3>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    auth: state.auth
  }
};

export default connect(
  mapStateToProps
)(Users);
