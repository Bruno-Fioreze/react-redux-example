import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialUsers, useUsers, setupUsers } from "./redux/sliceUsers";
import getUsers from "./services/getUsers"
import { UserState } from "./types/user"
import UserCard from "./components/UserCard"
import Header from "./components/Header" 
import "./App.css"
 
function App() {
  const users = useSelector(useUsers);
  const dispatch = useDispatch();
 
  const populateUsers = () => {
    const fetchData = async () => {
      const result = await getUsers()
      const users: UserState[] = result.data
      dispatch(initialUsers(users))   
    };
    fetchData();
  }

  useEffect(() => {
    populateUsers()
  }, [])

  return (
    <>
      <Header populateUsers={populateUsers} />
      <div className="user-list-container">
        {users && users.map(
          (user: UserState) => {
            return (
              <UserCard user={user} />
            )
          }
        )} 
    </div>
    </>

  );
}

export default App;
