import { useDispatch, useSelector } from "react-redux";
import { filterUsers } from "../redux/sliceUsers";
import { useValueSlice, updateValue } from "../redux/sliceValue"
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import "../App.css"
import { HeaderProps } from "../types/headerProps"

const Header: React.FC<HeaderProps> = ( props ) => {
    const value = useSelector(useValueSlice);
    const dispatch = useDispatch();

    return (
        <div className="user-filter">
            <OutlinedInput 
                placeholder="Pesquise pelo nome"
                onChange={(e) => {
                    dispatch(
                    updateValue(e.target.value)
                )
            }}
            /> 
            <Button 
                variant="contained" color="success"
                onClick={() => {
                    dispatch(
                        filterUsers(value.value)
                    )
                }}
            > 
                Pesquisar
            </Button>
            <Button variant="contained" color="warning" onClick={() => { props.populateUsers() }}> 
                Limpar Pesquisa
            </Button>
        </div>
    )
}

export default Header;