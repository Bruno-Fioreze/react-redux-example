import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLanguages, useLanguages, toFavorite, setUp, removeLanguage, filterByLanguage, setInitialData } from "./redux/sliceLanguages";

function App() {
  const languages = useSelector(useLanguages);

  const [newLanguage, setNewLanguage] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUp()) 
  }, []);

  return (
    <div>
      <ul>
        {languages.map((language) => {
          return (
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <span style={{ color: language.favorite ? "green" : "black" }}>
                {language.name}
              </span>
            </div>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <button
          type="button"
          onClick={() => dispatch(addLanguages(newLanguage))}
        >
          Adicionar nova linguagem
        </button>
      </div>
      <hr/>
      <div>
        <label htmlFor="">Pesquise por algo</label>
        <input value={filterLanguage} onChange={(e) => { setFilterLanguage(e.target.value)}}/>
        <button onClick={
           () => {
            dispatch(filterByLanguage(filterLanguage))
           }
        }>
          Search
        </button>

      </div>
    </div>
  );
}

export default App;
