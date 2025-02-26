import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { loginUser } from "../../store/authAction";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
}));

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser(username, password)).then((result) => {
      if (result) {
        navigate("/private");
      }
    });
  };

  return (
    <StyledContainer maxWidth="sm">
      <Box sx={{
        width: "100%",
        maxWidth: 400,
        p: 4,
        boxShadow: 3,
        borderRadius: "10px",
        backgroundColor: "white",
      }}>
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </StyledButton>
        <Button
          color="blue"
          fullWidth
          onClick={() => navigate("/")} >Register</Button>
      </Box>
    </StyledContainer>
  );
}

export default Login;