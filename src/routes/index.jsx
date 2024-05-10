import { Suspense } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { HomeLoader } from '@triquetra/ui';

import Layout from "./../layout/"
import Home from "./../pages/Home"
import Test from "../pages/Test";

import "@triquetra/ui/dist/style.css";

const AllRoutes = () => {
  return (
    <Layout>
      <HashRouter>
        <Switch>
          <Route path="/test">
            <Suspense fallback={<HomeLoader />}>
              <Test />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<HomeLoader />}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </HashRouter>
    </Layout>
  );
};

export default AllRoutes;
