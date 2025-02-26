import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { registerUser } from "../../store/authAction";

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

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    dispatch(registerUser({ username, password }));
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
          Register
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
          onClick={handleRegister}
        >
          Register
        </StyledButton>
      </Box>
    </StyledContainer>
  );
}

export default Register;
