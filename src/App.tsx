import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, useUsers } from "./redux/sliceUsers";
import getUsers from "./services/getUsers"
import { UserState } from "./types/user"

function App() {
  const users = useSelector(useUsers);
  const dispatch = useDispatch();
  const [initialData, setInitialData] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers()
      const users: UserState[] = result.data
      dispatch(addUsers(users))  
      setInitialData(false)
    };
    
    if( initialData ) {
      fetchData();
    }
  }, []);

  return (
    <div>
      <ul>
        {users && users.map(
          (user) => {
            return (
              <>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.id}</div>
                <div>{user.email}</div>
                <hr/>
              </>
            )
          }
        )} 
      </ul>
    </div>
  );
}

export default App;
