import React, { Component } from 'react';
import SingleUser from '../components/SingleUser';
import Layout from '../components/Layout';





// 2
export default class viewUser extends Component {

    static getInitialProps = async function (ctx) {
        let id = ctx.query.id
        const res = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await res.json();
        return { user: data.data };
    }

    // nextUser=() => {

    // }


    render() {
        console.log("SINGLE USER", this.props.user)
        return (
            <Layout title={this.props.user.first_name}>
                <div>
                    {JSON.stringify(this.props.user)}
                    {this.props.user && <SingleUser user={this.props.user} />}
                </div>
            </Layout>
        )
    }
}
