import { configureStore } from "@reduxjs/toolkit"
import { articleApi } from "./article"

// get everything into store
export const store = configureStore({
  // reduce the things in store to needed
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})