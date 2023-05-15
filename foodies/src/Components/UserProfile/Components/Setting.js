import React, { useState } from "react";
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteAccountPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete("http://localhost:8183/users/110");

      if (response.status === 200) {
        handleCloseDialog();
        console.log("Account deleted successfully");
      } else {
        console.log("Failed to delete the account");
      }
    } catch (error) {
      console.error("Error deleting the account:", error);
    }
  };

  return (
    <div>
      <div className="setting_content">
        <Stack sx={{ alignItems: "center", mt: "150px" }}>
          <Typography variant="h3" gutterBottom>
            Delete Account
          </Typography>
          <Typography variant="h6">
            Are you sure you want to delete your account?
          </Typography>
          <Typography variant="body1" gutterBottom>
            This action cannot be undone.
          </Typography>
          <Stack sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleOpenDialog}
            >
              Delete Account
            </Button>
            <Link to="/profile">
              <Button variant="outlined" color="primary">
                Back
              </Button>
            </Link>
          </Stack>
        </Stack>

        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete your account?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Link to="/">
              <Button onClick={handleDeleteAccount} color="error" autoFocus>
                Delete
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
