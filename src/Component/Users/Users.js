import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Users.css'
import Person from '../Person/Person';
import FriendList from '../FriendList/FriendList';

const Users = () => {
    // console.log(fakeData);
    const first5 = fakeData.slice(0, 10);
    const [users, setusers] = useState(first5);
    const [friend,setFriend] = useState([]);

    const handleAddFriend = (user)=>{
        console.log("friend Added",user);
        const newFriend = [...friend,user];
        setFriend(newFriend);
    }
    return (
        <div className="user-container">
            <div className="user-image">
                {/* <h3>{users.length}</h3> */}
                
                    {
                        users.map(userDetails =>  <Person 
                            handleAddFriend ={handleAddFriend}
                            user={userDetails}
                            ></Person>)
                    }
                
            </div>
            <div className="user-details">
                {/* <h1>this is habi jabi</h1>
                <h3>Friends Added : {friend.length}</h3> */}
                <FriendList friend={friend}></FriendList>
            </div>

        </div>
    );
};

export default Users;