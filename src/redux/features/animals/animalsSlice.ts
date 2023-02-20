import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateID } from '../../../assets/helper'
import type { RootState } from '../../store/store'
import { Animal } from './types'


// Define a type for the slice state
interface AnimalsState {
  animals: Animal[]
}

// Define the initial state using that type
const initialState: AnimalsState = {
  animals: localStorage.getItem('animals') ? JSON.parse(localStorage.getItem('animals')!) : []
}

export const animalsSlice = createSlice({
    name: 'animals',
  // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addAnimal: (state, action: PayloadAction<Animal>) => {
            state.animals.push(action.payload)
        },
        removeAnimal: (state, action: PayloadAction<string>) => {
            state.animals = state.animals.filter(animal => animal._id != action.payload)
        },
        setAnimals: (state, action: PayloadAction<Animal[]>) => {
            state.animals = action.payload
        }
    }
})

export const { addAnimal, removeAnimal, setAnimals } = animalsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.animals.animals

export default animalsSlice.reducer