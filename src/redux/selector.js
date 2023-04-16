import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectlsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefresh = state => state.auth.isRefrehing;

export const selectUserEmail = state => state.auth.user.email;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact => contact.name.includes(filterValue));
  }
);
