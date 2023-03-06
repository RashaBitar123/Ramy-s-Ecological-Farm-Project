//CSS
import "./ActivityManagement.css";
// //Hooks
import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
 //MUI
 import { Box, Button, IconButton } from "@mui/material";
 import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
 //Thunk
 import { getAllActivitiesRequest } from "../../store/thunks/activitiesThunk";
 //Components
 import ActivityPopup from "./ActivityPopup/ActivityPopup";
 import DeletePopup from "../../components/DeletePopup/DeletePopup";

function ActivityManagement()
{
const dispatch = useDispatch<any>();
 //local state
  const [activityPopup, setactivityPopup] = useState
   ({
   IsActivityPopup: false,
   id: "",
   });
  //local state
  const [deletePopup, setdeletePopup] = useState({
   IsDeletePopup: false,
   id: "",
   title: "",
   });
 
   //redux state
  const activities = useSelector((state: any) => state.ActivitiesReducer);
  
   useEffect(() => 
   {
    activities.length <= 0 &&  dispatch(getAllActivitiesRequest());
  }, [dispatch]);
    const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
     field: "title",
    headerName: "Title",
      flex: 1,
     editable: true,
   },
   {
      field: "description",
      headerName: "Description",
     flex: 1,
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
     flex: 1,
      editable: true,
    },
   {
      field: "Actions",
      headerName: "Actions",
      flex: 1,
     renderCell: (row: any) => {
        return (
          <>
             <IconButton
              size="large"
                title="Edit Activity"
               onClick={() => {
                  setactivityPopup({
                   IsActivityPopup: true,
               id: row.row.id,
               });
           }}
         >
               <EditIcon />
             </IconButton>
             <IconButton
               size="large"
               title="Delete Activity"
                onClick={() => {
               setdeletePopup({
                IsDeletePopup: true,
                id: row.row.id,
               title: row.row.title,
               });
               }}
            >
             <DeleteIcon />
           </IconButton>
</>
       );
     },
 },
 ];


  //to close the delete and add popup turn the IsActivityPopup and IsDeletePopup state to false
   const closePopup = () => 
   {
 setactivityPopup({ IsActivityPopup: false, id: "" });
  setdeletePopup({ IsDeletePopup: false, id: "", title: "" });
  };

  return (
    <>
     {activityPopup.IsActivityPopup ? (
        <ActivityPopup closePopup={closePopup} id={activityPopup.id} />
      ) : null}
      {deletePopup.IsDeletePopup ? (
        <DeletePopup
          closePopup={closePopup}
          id={deletePopup.id}
         title={deletePopup.title}
        />
      ) : null} 

     <div>
     <div className="main-title">Activities Management</div>
        <div className="button-container">
          <Button
             onClick={() => {
              setactivityPopup({
               ...activityPopup,
               IsActivityPopup: true,
              });
             }}
            className="create-button"
            color="inherit"
            variant="contained"
          >
            Add Activity
          </Button>
        </div>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
           rows={activities}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>

    );
}

export default ActivityManagement;

