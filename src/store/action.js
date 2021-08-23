import { push } from 'react-router-redux';
import {  deleteDataPerikanan, updateDataPerikanan, insertDataPerikanan, getDetailDataPerikanan, getAllDataPerikanan } from '../service/service';
import { FAILED, FETCH, LOADING } from './type'

export const getDataAllPerikanan = (limit, offset) => {
  return async (dispatch) => {
    dispatch(loadingAction())
    try {
      const data = await getAllDataPerikanan(limit, offset);
      dispatch(fetchAction({ perikanan: data }))
    } catch(err) {
      if(err.code === 404) {
        dispatch(fetchAction({ perikanan: [] }));
      }
      dispatch(loadingAction(err));
    }
  }
}

export function fetchDeletePerikanan(id, limit, offset) {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      await deleteDataPerikanan(id);
      dispatch(push({ state:{ notif: `Data Fishery has been successfully deleted.` } }));
      dispatch(failedAction('success-delete'));
      dispatch(getDataAllPerikanan(limit, offset));
    } catch (err) {
      dispatch(failedAction('failed-delete'));
      dispatch(push({ state:{ notif: `${err.message} ---#ee4c24 ` } }));
    }
  };
}

export function fetchDetailPerikanan(id) {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      const { data } = await getDetailDataPerikanan(id);
      console.log(data);
      dispatch(fetchAction({ detailById: data }));
    } catch (err) {
      if(err.code === 404) {
        dispatch(fetchAction({ detailById: [] }));
      }
      dispatch(failedAction(err.message));
    }
  };
}

export function fetchUpdatePerikanan(id, data) {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      await updateDataPerikanan(id, data);
      dispatch(loadingAction(false));
      dispatch(push({ pathname: '/',
        state:{ notif: `Data Fishery has been successfully update.` } }));
    } catch (err) {
      dispatch(loadingAction(false));
      dispatch(push({ pathname: '/',
        state:{ notif: `${err.message} ---#ee4c24 ` } }));
    }
  };
}

export function fetchCreatePerikanan(data) {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      await insertDataPerikanan(data);
      dispatch(loadingAction(false));
      dispatch(push({ pathname: '/',
        state:{ notif: `Data Fishery has been successfully insert.` } }));
    } catch (err) {
      dispatch(loadingAction(false));
      dispatch(push({ pathname: '/',
        state:{ notif: `${err.message} ---#ee4c24 ` } }));
    }
  };
}


export const fetchAction = (data) => ({ type: FETCH, data });
export const loadingAction = () => ({ type: LOADING });
export const failedAction = payload => ({ type: FAILED, payload });