import API from "./api";

// Login service
export const login = async (email, password) => {
  try {
    const response = await API.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error.response?.data || "An error occurred during login.";
  }
};

// Signup service
export const signup = async (email, password) => {
  try {
    const response = await API.post("/signup", { email, password });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error.response?.data || "An error occurred during signup.";
  }
};
