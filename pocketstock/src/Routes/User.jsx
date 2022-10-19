import React, { useState } from "react";
import "../StyleSheets/User.css"

const User = () => {
    const users = [{id: 1, userName: 'Brian', avatar_url: 'https://avatars.dicebear.com/api/croodles/your-custom-seed.svg', role:'Operations Director'}, {id: 2, userName: 'Maggie', avatar_url: 'https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg', role: 'Sales Director'}, {id: 3, userName: 'Lisa', avatar_url: 'https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg', role: 'Sales Assisting'}, {id: 4, userName: 'Jodie', avatar_url: 'https://avatars.dicebear.com/api/micah/your-custom-seed.svg', role: 'Sales Assisting'}, {id: 5, userName: 'Leo', avatar_url: 'https://avatars.dicebear.com/api/bottts/your-custom-seed.svg', role: 'Warehouse Operative'}];

    const [loggedUser, setLoggedUser] = useState({id: 2, userName: 'Maggie', avatar_url: 'https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg', role: 'Sales Director'})


    return (
        <>  
        <div className="loggedIn-staff">
            <div className="wrapper">
            <h2 className="target" >Current User</h2>
            </div>
            <img src={loggedUser.avatar_url} alt="user_img" width="300" />
            <p><strong>{loggedUser.userName}</strong></p>
            <p><strong>{loggedUser.role}</strong></p>
        </div>
        <div>
        <ul className="staff-list">
            {users.map((user) => {
                return <li key={user.id} className="staff">
                    <img src={user.avatar_url} alt="user_img" width="100" className="userimg" />
                    <p>{user.userName}</p>
                    <button className="rainbow" onClick={() => setLoggedUser(user)}>Select</button>
                </li>
            })}
        </ul>
        </div>
        </>

    )
}

export default User;