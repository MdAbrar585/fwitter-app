import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Users.css'
import Person from '../Person/Person';
import FriendList from '../FriendList/FriendList';

const Users = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 15);
    const [users, setusers] = useState(first10);
    const [friend,setFriend] = useState([]);

    const handleAddFriend = (user)=>{
        let existedFriend = friend.find( friends => friends.id ===user.id)
        if(!existedFriend)
        {
            const newFriend = [...friend,user];
            setFriend(newFriend);
        }
        else
        {
            alert('Friends Already Added');
        }

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