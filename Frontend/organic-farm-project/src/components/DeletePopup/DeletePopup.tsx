import { useDispatch } from "react-redux";

import "./DeletePopup.css";

import { Button } from "@mui/material";
import { deleteActivityRequest } from "../../store/thunks/activitiesThunk";

type DeletePopupProps = {
  id: string;
  title: string;
  closePopup: any;
};
function DeletePopup(props: DeletePopupProps) {
  const dispatch = useDispatch<any>();
  return (
    <div className="delete-popup-container">
      <div onClick={props.closePopup} className="delete-popup-overlay"></div>
      <div className="delete-popup-content">
        <h2>Are you sure you want to delete {props.title} activity?</h2>

        <div>
          <Button
            color="inherit"
            variant="contained"
            type="submit"
            onClick={props.closePopup}
          >
            Cancel
          </Button>
          <Button
            color="inherit"
            variant="contained"
            type="submit"
            onClick={() =>
              dispatch(deleteActivityRequest(props.id, props.closePopup))
            }
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
