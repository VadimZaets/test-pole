import { useMutation, useQuery } from "react-query";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export const GetQuestionsApi = () => {
  return useQuery("getQuestions", async () => {
    return await axios.get("/api/questions").then((res) => res.data);
  });
};
export const AddFollowerApi = () => {
  try {
    return useMutation("addFollower", async (data) => {
      return await axios.post("/api/follower", data).then((res) => {
        // console.log("res.status :>> ", res.status);
        return res.status;
      });
    });
  } catch (error) {
    console.log("error.message :>> ", error.message);
    error.message;
  }
};
