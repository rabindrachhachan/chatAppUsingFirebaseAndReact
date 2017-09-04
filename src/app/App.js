import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Message from './../message/Message';
import Users from '../user/Users';
import Header from './Header'
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css';

export default class App extends React.Component {
  render() {
   var navLink = {
       display:'inline-flex',
       padding: '.5em 1em'
    }
    var fullWidth= {
        position: 'absolute',
        width: '100%',
        height:'100%',
    }
    var channelCol ={
      position: 'relative',
      minHeight:'690px',
    }
    var userCol = {
      position: 'relative',
      minHeight:'690px',
    }
      return (
        <div>
          <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
            <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                  <Link style={navLink} to="/user">User Onboarding</Link>
                  <Link style={navLink} to="/team_admin">Team Administration</Link>
                  <Link style={navLink} to="/group_admin">Group Adminstration</Link>
                  <Link style={navLink} to="/course_admin">Course Administration</Link>
                  <Link style={navLink} to="/learning_development">Learning & Development</Link>
                  <Link style={navLink} to="/system_admin">System Administration</Link>
                </div>
              </div>
            </div>
          </nav>
          <Header />
          <div className="container-fluid">
            <div className="col-sm-12 col-md-12 fullWidth">
              <div className="col-sm-3 col-md-3 bg-success float-left" style={userCol}>
                <Users />
              </div>
              <div className="col-sm-9 col-md-9 bg-info float-right" style={channelCol}>
                <Message />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

