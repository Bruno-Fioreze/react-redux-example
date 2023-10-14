import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialUsers, filterUsers, useUsers } from "./redux/sliceUsers";
import { useValueSlice, updateValue } from "./redux/sliceValue"
import getUsers from "./services/getUsers"
import { UserState } from "./types/user"
import UserCard from "./components/UserCard"
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import "./App.css"
 
function App() {
  const users = useSelector(useUsers);
  const value = useSelector(useValueSlice);

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
  }, []);  
  


  return (
    <>
      <div className="user-filter">
        <OutlinedInput 
          onChange={(e) => {
            dispatch(
              updateValue(e.target.value)
            )
          }}
        /> 
        <Button 
          onClick={() => {
            dispatch(
              filterUsers(value.value)
            )
          }}
        > 
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
