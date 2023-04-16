import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContact,
  addContact,
  deleteContact,
  signupUser,
  loginUser,
  logoutUser,
  refreshUser,
} from 'operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContact.pending, handlePending)

      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })

      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected),
});

const authState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefrehing: false,
};

const authReducers = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: builder =>
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    searchContacts(state, actions) {
      return (state = actions.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const authReducer = authReducers.reducer;
export const filtersReducer = filtersSlice.reducer;

export const { searchContacts } = filtersSlice.actions;

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedToken = persistReducer(persistConfig, authReducer);
