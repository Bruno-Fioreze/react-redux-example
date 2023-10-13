import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Languages {
  name: string;
  favorite: boolean;
}

const INITIAL_STATE: Languages[] = [];

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguages(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, favorite: false }];
    },
    toFavorite(state, { payload }: PayloadAction<string>) {
      return state.map((st) =>
        st.name === payload ? { ...st, favorite: !st.favorite } : st
      );
    }, 
    removeLanguage(state, { payload }: PayloadAction<string>) {
      return [ ...state.filter((language) => language.name !== payload) ];
    },
    setUp(state, { payload }: PayloadAction<boolean | undefined>) {
      if (!state.length) {   
        return [...state, { name: "JAVA", favorite: false }, { name: "C#", favorite: false }, { name: "JAVASCRIPT", favorite: false }, ]
      } 
      return state
    },
    filterByLanguage(state, {payload}: PayloadAction<string>){
      return [ ...state.filter((language) => language.name === payload) ];
    },
    setInitialData(state, { payload }: PayloadAction<string>) {
      
    }

  }, 
});

export default sliceLanguages.reducer;
export const { addLanguages, toFavorite, setUp, removeLanguage, filterByLanguage, setInitialData } = sliceLanguages.actions;

export const useLanguages = (state: any) => {
  return state.languages as Languages[];
};
