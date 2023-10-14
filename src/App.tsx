import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialUsers, filterUsers, useUsers } from "./redux/sliceUsers";
import getUsers from "./services/getUsers"
import { UserState } from "./types/user"
import UserCard from "./components/UserCard"
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import "./App.css"

function App() {
  const users = useSelector(useUsers);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const populateUsers = () => {
    const fetchData = async () => {
      const result = await getUsers()
      const users: UserState[] = result.data
      dispatch(initialUsers(users))   
    };
    console.log("passou aqui")
    fetchData();
  }

  useEffect(() => { 
    populateUsers()
  }, []);    

  return (
    <>
      <div className="user-filter">
        <OutlinedInput 
          value={filter} 
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        /> 
        <Button className="btn-blue" onClick={() => { dispatch(filterUsers(filter)) }}> 
          Pesquisar
        </Button>
        <Button className="btn-yellow" onClick={() => { populateUsers() }}> 
          Limpar Pesquisa
        </Button>
      </div>
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
