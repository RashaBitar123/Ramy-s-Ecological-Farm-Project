import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./LoginPopup.css";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
type LoginPopupProps = {
    closePopup: any;
  };
  
function LoginPopup(props:LoginPopupProps) {
  const navigate = useNavigate();
  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);
 
 
    return(
        <div className="login-popup-container">
        <div onClick={props.closePopup} className="login-popup-overlay"></div>
        <div className="login-popup-content">
          {/*Popup header (title + closeicon)*/}
          <div className="login-popup-header">
            <Typography variant="h3" fontWeight="bold" color="inherit">
              Login Form
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
              label="Username"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
             type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="inherit"
              variant="contained"
              type="submit"
              onClick={() => navigate("activity-management")}
            >
              Save
            </Button>
          </Grid>
          </Grid>
          </div>
    </div>
    );
}
export default LoginPopup;