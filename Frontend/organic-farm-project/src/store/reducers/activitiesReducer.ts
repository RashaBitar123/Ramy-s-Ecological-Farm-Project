import { GET_ALL_ACTIVITIES_SUCCESS } from "../actions/activitiesAction";
import { CREATE_ACTIVITY_SUCCESS } from "../actions/activitiesAction";
import { DELETE_ACTIVITY_SUCCESS } from "../actions/activitiesAction";
import { UPDATE_ACTIVITY_SUCCESS } from "../actions/activitiesAction";

const initialState = [] as any;

const ActivitiesReducer = (state = initialState, action: any) => {
  const { type, payload } = action; //distract them from action

  let tempArray = [] as any;
  switch (type) {
    case GET_ALL_ACTIVITIES_SUCCESS:
      return payload;
    case CREATE_ACTIVITY_SUCCESS:
      return [...state, payload];
    case UPDATE_ACTIVITY_SUCCESS:
      let array = [...state];
      array.map((activity: any, index: number) => {
        if (activity.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;
    case DELETE_ACTIVITY_SUCCESS:
      tempArray = state.filter((activity: any) => activity.id !== payload);
      return tempArray;
    default:
      return state;
  }
};
export default ActivitiesReducer;
