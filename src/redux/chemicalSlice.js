import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  chemicals: [
    {
      id: 1,
      name: 'Hydrochloric Acid',
      formula: 'HCL',
    },
    {
      id: 2,
      name: 'Sodium Chloride',
      formula: 'NaCL',
    },
    {
      id: 3,
      name: 'Sulfuric Acid',
      formula: 'H2SO4',
    },
    {
      id: 4,
      name: 'Ammonia',
      formula: 'NH3',
    },
    {
      id: 5,
      name: 'Ethanol',
      formula: 'C2H5OH',
    },
  ],
};

const chemicalSlice = createSlice({
  name: 'chemicals',
  initialState,
  reducers: {
      deleteChemical: (state, action) => {
          const data = state.chemicals
          state.chemicals = data.filter(item => item.id !== action.payload)
      },
      addChemical: (state, action) => {
        const data = state.chemicals
        state.chemicals = [...data, action.payload]
      },
      updateChemical: (state, action) => {
        const data = state.chemicals
        const {id, name, formula} = action.payload
        state.chemicals = data.map(item => item.id === id? {...item, name: name, formula: formula}: item)
      }
  },
});

export const {deleteChemical, addChemical, updateChemical} = chemicalSlice.actions
export default chemicalSlice.reducer;
