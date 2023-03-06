export const GET_ALL_ACTIVITIES_SUCCESS = "GET_ALL_ACTIVITIES_SUCCESS";

export const getAllActivitiesSuccess = (activities: any) => ({
  type: GET_ALL_ACTIVITIES_SUCCESS,
  payload: activities,
});

export const CREATE_ACTIVITY_SUCCESS = "CREATE_ACTIVITY_SUCCESS";

export const createActivitySuccess = (activities: any) => ({
  type: CREATE_ACTIVITY_SUCCESS,
  payload: activities,
});

export const UPDATE_ACTIVITY_SUCCESS = "UPDATE_ACTIVITY_SUCCESS";

export const updateActivitySuccess = (activity: any) => ({
  type: UPDATE_ACTIVITY_SUCCESS,
  payload: activity,
});

export const DELETE_ACTIVITY_SUCCESS = "DELETE_ACTIVITY_SUCCESS";

export const deleteActivitySuccess = (id: string) => ({
  type: DELETE_ACTIVITY_SUCCESS,
  payload: id,
});
