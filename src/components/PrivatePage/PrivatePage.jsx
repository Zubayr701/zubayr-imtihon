import React from "react";
import { useDispatch } from "react-redux";
import { Button, Typography, Container } from "@mui/material";
import { authActions } from "../../store/authSlice";

const PrivatePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Private Page! 
      </Typography>
  
    </Container>
  );
};

export default PrivatePage;
