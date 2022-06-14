import axios from "axios";
export const selectUser = (user) => {
  return async (dispatch) => {
    const userNo = Math.floor(((Math.random() * 10) % 10) + 1);
    const { data } = await axios.get(`https://reqres.in/api/users/${userNo}`);
    console.log(data);
    dispatch({
      type: "FETCH_USER",
      payload: data.data,
    });
  };
};
