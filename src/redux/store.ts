import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './slices/rootReducer';
//import { ThunkAction, Action } from '@reduxjs/toolkit';

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Define los tipos de Thunk y Dispatch para tu aplicación
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
//export type AppThunk<ReturnType = void> = ThunkAction<
//  ReturnType,
//  RootState,
//  unknown,
//  Action<string>
//>;

// Exporta el persistor para la persistencia
export const persistor = persistStore(store);
