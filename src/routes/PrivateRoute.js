import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import logo from '../assets/images/logo.svg'

const PrivateRoute = ({ children }) => {

  const isLoading = useSelector(state => state.auth.isLoading)

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (isLoading) {
    return <div className='loader'>
      <img src={logo}/>
    </div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PrivateRoute