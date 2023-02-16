import APIOrder from "../../apis/APIOrder";
import {
  ACTIVITY_CARLIST_REDUCER_CLEARED_SEARCH,
  ACTIVITY_CARLIST_REDUCER_FULFILLED,
  ACTIVITY_CARLIST_REDUCER_FULFILLED_SEARCH,
  ACTIVITY_CARLIST_REDUCER_PENDING,
  ACTIVITY_CARLIST_REDUCER_REJECT,
  ACTIVITY_CARLIST_REDUCER_SEARCH,
  ACTIVITY_CARLIST_FILTER_SMALL,
} from "../type/typeCarlist";

export function ActSearchCar(search) {
  return (dispatch, State) => {
    dispatch({
      type: ACTIVITY_CARLIST_REDUCER_SEARCH,
      search,
    });
  };
}

export function ActClearedSearchCar() {
  return (dispatch, State) => {
    dispatch({
      type: ACTIVITY_CARLIST_REDUCER_CLEARED_SEARCH,
    });
  };
}

export function ActCarlist() {
  return (dispatch, getState) => {
    const { CarlistStateReducer } = getState();
    dispatch({
      type: ACTIVITY_CARLIST_REDUCER_PENDING,
    });
    APIOrder.getCarsList(`?name=${CarlistStateReducer?.search}`)
      .then((res) => {
        dispatch({
          type: ACTIVITY_CARLIST_REDUCER_FULFILLED_SEARCH,
          status: res.status,
          payload: res.data.cars,
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTIVITY_CARLIST_REDUCER_REJECT,
        });
      });
  };
}

export function SmallFilter() {
  return (dispatch, getState) => {
    const { category } = getState();
    APIOrder.getCarsList(`?category=${category}`).then((res) => {
      dispatch({
        type: ACTIVITY_CARLIST_FILTER_SMALL,
        status: res.status,
        payload: res.data.cars,
      });
    });
  };
}
