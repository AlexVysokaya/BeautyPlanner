import { calendar } from "../api/api";

const SET_DATA = 'SET-DATA';
const SET_PLAN = 'SET-PLAN';
const EDIT_PLAN = 'EDIT-PLAN';



const initialState = {
  date: null,
  plan: {
    morning: [],
    daytime: [],
    evening: [],
  }
}

const dailyReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_DATA: {
      return {
        ...state,
        date: action.date
      }
    }

    case SET_PLAN: {
      return {
        ...state,
        plan: {
          morning: [ ...action.plan.morning],
          daytime: [ ...action.plan.daytime],
          evening: [ ...action.plan.evening],
        }
      }
    }

    case EDIT_PLAN: {
      return {
        ...state,
        plan: {
          ...state.plan,
          [action.period]: [ ...action.plan]
        }
      }
    }

    default:
      return state;
  }
}

export const setDate = (date) => {
  return { type: SET_DATA , date}
}

const setUserPlan = (plan) => {
  return { type: SET_PLAN , plan}
}

const editUserPlan = (period, plan) => {
  return { type: EDIT_PLAN , period, plan}
}

export const editUserPlanThunk = (date, period, state) => async (dispatch) => {
  const response = await calendar.editUserPlan({date, period, state});

  if (response.status === 200) {
    dispatch(editUserPlan(period, state))
  } else {
    alert(response.data)
  }
}

export const getUserPlanThunk = (date) => async (dispatch) => {
  const response = await calendar.getUserPlan(date);

  if (response.status === 200) {
    dispatch(setUserPlan(response.data.plan))
  } else {
    alert(response.data)
  }
}

export default dailyReducer;