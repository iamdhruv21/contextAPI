import {useContext} from 'react';
import userContext from "../context/UserContext.js";

function Profile() {
    const {user} = useContext(userContext)

    if (!user) return <div>Please Login First!</div>

    return <div>Welcome, {user.username}</div>
}

export default Profile;