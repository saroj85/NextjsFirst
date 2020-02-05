import React, { Component } from 'react';
import Link from 'next/link';

export default class Users extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    const { users } = this.props
    return (
      <div>
        <div className="user_main_box">
          {users && users.length > 0 && users.map((user, index) => {
            return <div className="box" key={user.id}>
         
          <img src={user.avatar} alt={user.avatar} />
          <h1>Name - {user.first_name} &nbsp; {user.last_name}</h1>
          <p>Email: - {user.email}</p>
          <Link href={{ pathname: '/viewUser', query: { id: user.id } }}>View User Profile</Link>
          </div>
          })}
        </div>



        <style jsx>{`
.user_main_box{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.box{
  width: 100%;
  // height: 100px;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 2px 3px 2px #ccc;
  margin-bottom: 20px;
  cursor: pointer;
}
h1{
  font-size: 20px;
}
`}</style>

      </div>

    )
  }
}

