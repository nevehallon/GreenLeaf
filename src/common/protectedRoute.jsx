import { Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";
import userService from "../services/userService";

const ProtectedRoute = ({ component: Component, render, biz, ...rest }) => {
  const currentUser = userService.getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser || (biz && !currentUser.biz)) {
          toast.error("Sorry, you need a business account to access this page", {
            position: "top-center",
            autoClose: 2500,
          });
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: props.location },
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
