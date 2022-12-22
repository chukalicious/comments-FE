import { Route, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (localStorage.getItem("token")) {
          return children;
        } else {
          return <Navigate to={{ pathname: "/", state: { from: location } }} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
