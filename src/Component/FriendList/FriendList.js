import React from 'react';

const FriendList = (props) => {
    const friends = props.friend;
    console.log(friends);
    // const totalSalary = friends.reduce((total, frnd) => total + frnd.salary,0);
    const total = friends.reduce((total,frnd) => total + frnd.salary,0);
    return (
        <div>
            <h1>Friends Added : {friends.length} </h1>
            <p>Friends Yearly Salary : {total}</p>
        </div>
    );
};

export default FriendList;