import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategories,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    selectedTalent: {
      frontOrBack: '',
      selectedCategory: '',
      proficiency: '',
    },
    backEndCategories: [],
    frontEndCategories: [],
  },
  reducers: {
    selectTalent(state, { payload: { value } }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          frontOrBack: value,
        },
      };
    },

    setCategories(state, { payload: { frontEndCategories, backEndCategories } }) {
      return {
        ...state,
        backEndCategories,
        frontEndCategories,
      };
    },

    selectCategory(state, { payload: category }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          selectedCategory: category,
        },
      };
    },

    selectProficiency(state, { payload: level }) {
      return {
        ...state,
        selectedTalent: {
          ...state.selectedTalent,
          proficiency: level,
        },
      };
    },
  },
});

export const {
  selectTalent,
  setCategories,
  selectCategory,
  selectProficiency,
} = actions;

export function loadCategories() {
  return async (dispatch) => {
    const { frontEndCategories, backEndCategories } = await fetchCategories();

    dispatch(setCategories({ frontEndCategories, backEndCategories }));
  };
}

export default reducer;
