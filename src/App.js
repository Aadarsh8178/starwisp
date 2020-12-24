import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import { routes } from "./routes";
import { StyledApp } from "./appstyles";

function App(props) {
  return (
    <StyledApp>
      <Sidebar />
      <Switch>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => (
              <>
                <route.component {...props} />
              </>
            )}
          />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </StyledApp>
  );
}

export default App;
