import { createAction } from 'redux-actions';

export * from './Dashboard';
export * from './Pickup';

//
export const redirectTo = createAction('REDIRET_TO');
//
export const showLoader = createAction('SHOW_LOADER');
export const hideLoader = createAction('HIDE_LOADER');
export const LogOutRequest = createAction('Logout Started!');
