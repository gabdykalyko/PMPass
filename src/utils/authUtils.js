import axios from 'axios'

export const updateUserAuth = async (dispatch) => {
  try {
    const userResponse = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    return userResponse.data
  } catch (error) {
    console.error(error);
    return null
  }
}