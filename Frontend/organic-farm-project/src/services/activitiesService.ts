import { httpCommon } from "./http-common";

const getAllActivities = () => {
  return httpCommon.get("Activities");
};

const createActivity = (activity: any) => {
  return httpCommon.post("Activities",activity);
};
const updateActivity = (id: string, activity: any) => {
  return httpCommon.put(`Activities/${id}`, activity);
};
const deleteActivity = (id: string) => {
  return httpCommon.delete(`Activities/${id}`);
};
const ActivitiesService = {
  getAllActivities,
  createActivity,
  updateActivity,
  deleteActivity,
};

export default ActivitiesService;
