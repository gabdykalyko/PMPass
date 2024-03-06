import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated , setIsAuthenticated] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.data.pm_id) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {

      }
    };

    fetchData();
  }, []);

  return isAuthenticated
}

export default useAuth