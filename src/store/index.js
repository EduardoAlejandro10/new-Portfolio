import { configureStore } from '@reduxjs/toolkit'
import navMenuSlice from './slices/navMenu.slice'

export default configureStore({
  reducer: {
    navMenuSlice
	}
})