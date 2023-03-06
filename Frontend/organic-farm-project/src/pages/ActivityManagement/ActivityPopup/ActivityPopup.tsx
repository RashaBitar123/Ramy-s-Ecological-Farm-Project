//CSS
import "./ActivityPopup.css";
//Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//MUI
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//Thunk
import {
  createActivityRequest,
  updateActivityRequest,
} from "../../../store/thunks/activitiesThunk";


type ActivityPopupProps = 
{
id?: string;
closePopup: any;
};

type ActivityState = 
{
title: string;
description: string;
image:string;
};

function ActivityPopup(props: ActivityPopupProps) 
{
  const [base64String, setBase64String] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setBase64String((e.target as FileReader).result as string);
    };
    reader.readAsDataURL(file);
  };

  const dispatch = useDispatch<any>();

  //redux states
  const activities = useSelector((state: any) => state.ActivitiesReducer);

  //local state
  const [activity, setActivty] = useState<ActivityState>
  ({
    title: "",
    description: "",
    image:"",
  });

  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const getActivityById = () =>
  {
  return activities.filter((activity: any, index: number) => 
  {
    if (activity.id == props.id)
    {
    setActivty(activities[index]);
    }
  });
  };
  useEffect(() => 
  {
  getActivityById();
  }, []);

  console.log("activity", activity);
  const handleOnTitleChange = (event: any) => 
  {
  let value = event.target.value;
  setActivty({ ...activity, title: value });
  };

  const handleOnDescriptionChange = (event: any) => 
  {
  let value = event.target.value;
  setActivty({ ...activity, description: value });
  };
  const handleOnImageChange = (event: any) => 
  {
  let value = event.target.value;
  setActivty({ ...activity, image: value });
  };

  const validator = () => 
  {
  if 
  (
  activity.title=== "" ||
  activity.description === "" ||
  activity.image ===""
  ) 
  {
  setSaveButtonDisabled(true);
  } 
  else 
  {
  setSaveButtonDisabled(false);
  }
  };

  useEffect(() => 
  {
  validator();
  }, [activity]);

  const handleOnSubmit = () => 
  {
  props.id
  ? dispatch(
  updateActivityRequest(
  props.id,
  {title: activity.title, description: activity.description,image: activity.image },
    props.closePopup
   )
   )
  : dispatch(createActivityRequest(activity, props.closePopup));
  };

  return (
    <div className="activity-popup-container">
      <div onClick={props.closePopup} className="activity-popup-overlay"></div>
      <div className="activity-popup-content">
        <div className="activity-popup-header">
          <Typography variant="h3" fontWeight="bold" color="inherit">
            {props.id ? "Update Activity" : "Create Activity"}
          </Typography>
          <IconButton
            size="large"
            title="closeIcon"
            color="error"
            onClick={props.closePopup}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Activity Title"
              variant="outlined"
              fullWidth
              name="title"
              value={activity.title}
              onChange={handleOnTitleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Activity Description"
              variant="outlined"
              fullWidth
              name="description"
              value={activity.description}
              onChange={handleOnDescriptionChange}
            />
          </Grid>
          <Grid item xs={12}>
          <div>
         <input type="file" onChange={handleFileChange} />
       {base64String && (
        <img src={base64String} alt="Encoded image" onChange={handleOnImageChange} />
      )}
    </div>
     </Grid>
          <Grid item xs={12}>
            <Button
              color="inherit"
              variant="contained"
              type="submit"
              disabled={isSaveButtonDisabled}
              onClick={handleOnSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ActivityPopup;
