import React, { Component } from 'react';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Users from '../components/Users';



export default class index extends Component {
  static getInitialProps = async function () {
    const res = await fetch('https://reqres.in/api/users?page=2');
    const data = await res.json();
    return { users: data.data};
  }

  render() {
    
    console.log("this", this.props.users);


    return (
      <div>
        <Layout>
          <Users users={this.props.users}></Users>
        </Layout>
      </div>
    )
  }
}



