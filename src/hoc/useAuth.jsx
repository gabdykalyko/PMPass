import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [authData , setAuthData] = useState(
    {
      isAuthenticated: false,
      userData: null
    }
  )

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
          setAuthData(
            {
              isAuthenticated: true,
              userData: response.data
            }
          )
        } else {
          setAuthData(
            {
              isAuthenticated: false,
              userData: null
            }
          )
        }
    
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

  return [authData, setAuthData, fetchData]
}

export default useAuth