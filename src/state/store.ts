import { createSlice, configureStore } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light'
  },
  reducers: {
    dark: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("dark dipatch - - ", state);
      state.value = "dark"
    },
    light: state => {
      console.log("light dipatch - - ", state);
        state.value = "light"
    }
  }
})

export const { dark, light } = themeSlice.actions

export const store = configureStore({
  reducer: themeSlice.reducer
})
