import {configureStore} from '@reduxjs/toolkit';
import {praciceApi} from '../services';
import {curryGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [praciceApi.reducerPath]: praciceApi.reducer,
  },
  middleware: curryGetDefaultMiddleware =>
    curryGetDefaultMiddleware().concat(praciceApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
