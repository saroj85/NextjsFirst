import React, { Component } from 'react';

export default class SingleUser extends Component {
    render() {
        const {user} = this.props;
        
        return (
            <div>
                <div className="box">
                    <img src={user.avatar} alt={user.avatar} />
                    <h1>NAME : - {user.first_name} {user.last_name} </h1>
                    <h1>EMAIL : - {user.email}</h1>
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
width: 50%;
box-sizing: border-box;
// height: 100px;
border: 1px solid #ccc;
padding: 10px;
box-shadow: 2px 3px 2px #ccc;
margin-bottom: 20px;
cursor: pointer;
margin: auto;
}
h1{
font-size: 20px;
}
`}
</style>          
            </div>
                );
            };
        };
