export const selectSearchOpen = state => state.headerSearch.isSearchOpen;
export const selectAuthOpen = state => state.ui.isAuthOpen;

export const selectAccessToken = state => state.auth.accessToken;
export const selectIsLogged = state => state.auth.isLogged;
export const selectIsLoading = state => state.auth.isLoading;
export const selectCart = state => state.user.cart;
