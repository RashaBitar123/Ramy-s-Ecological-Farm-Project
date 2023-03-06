import ActivitiesService from "../../services/activitiesService";
//actions
import {
  deleteActivitySuccess,
  getAllActivitiesSuccess,
} from "../actions/activitiesAction";
import { createActivitySuccess } from "../actions/activitiesAction";
import { updateActivitySuccess } from "../actions/activitiesAction";


export const getAllActivitiesRequest = () => (dispatch: any) => {
  try {
  
    //API Call
    ActivitiesService.getAllActivities().then((response: any) => {
      //dispatch an action
      dispatch(getAllActivitiesSuccess(response.data));
    },
    (error: any) => {
      //we closed the popup only when it is success if there is badrequest it wont close
      console.log("error", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();
      console.log("message", message);
    }
  );
} catch (error) {
  console.log("error", error);

}
};
export const createActivityRequest =
  (activity: any, closePopup: any) => (dispatch: any) => {
    try {
      ActivitiesService.createActivity(activity).then(
        (response: any) => {
          dispatch(createActivitySuccess(response.data));
          closePopup();
        },
        (error: any) => {
          //we closed the popup only when it is success if there is badrequest it wont close
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
         
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
export const updateActivityRequest =
  (id: string, activity: any, closePopup: any) => (dispatch: any) => {
    try {

      ActivitiesService.updateActivity(id, activity).then(
        (response: any) => {
          dispatch(updateActivitySuccess(response.data));
          closePopup();
        },
        (error: any) => {
          //we closed the popup only when it is success if there is badrequest it wont close
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

export const deleteActivityRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      ActivitiesService.deleteActivity(id).then(
        (response: any) => {
          dispatch(deleteActivitySuccess(response.data.id));
          closePopup();
        },
        (error: any) => {
          //we closed the popup only when it is success if there is badrequest it wont close
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
