import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, updateAuth } from "../slices/authSlice";

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        if (response.data.pm_id) {
          dispatch(updateAuth({
            isAuthenticated: true,
            user: response.data
          }))
          dispatch(setLoading(false))
        } else {
          dispatch(updateAuth({
            isAuthenticated: false,
            user: null
          }))
          dispatch(setLoading(false))
        }

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [dispatch])
}

export default useAuth