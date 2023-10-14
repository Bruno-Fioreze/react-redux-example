import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, useUsers } from "./redux/sliceUsers";
import getUsers from "./services/getUsers"
import { UserState } from "./types/user"
import UserCard from "./components/UserCard"
import "./App.css"

function App() {
  const users = useSelector(useUsers);
  const dispatch = useDispatch();

  useEffect(() => { 
    const fetchData = async () => {
      const result = await getUsers()
      const users: UserState[] = result.data
      dispatch(addUsers(users))   
    };
    
    fetchData();
  }, [dispatch]); 

  return (
    <div className="user-list-container">
        {users && users.map(
          (user: UserState) => {
            return (
              <UserCard user={user} />
            )
          }
        )} 
    </div>
  );
}

export default App;
