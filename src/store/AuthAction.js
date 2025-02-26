import axios from "axios";
import { authActions } from "./authSlice";

const FIREBASE_URL = "https://exam-6fb47-default-rtdb.firebaseio.com/users.json";

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      await axios.post(FIREBASE_URL, userData);
      dispatch(authActions.setUser(userData));
      return true;
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  };
};

export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(FIREBASE_URL);
      const users = response.data;
      const user = Object.values(users).find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        dispatch(authActions.setUser(user));
        return true;
      } else {
        alert("Invalid credentials!");
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };
};
