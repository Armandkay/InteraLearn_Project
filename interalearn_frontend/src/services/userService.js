import API from "./api";

// Fetch user data
export const fetchUsers = async () => {
  try {
    const response = await API.get("/fetch_data");
    return response.data;
  } catch (error) {
    console.error("Fetch Data Error:", error);
    throw error.response?.data || "An error occurred while fetching data.";
  }
};
