import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
export const HomeTemplate = (props) => {//path,exact,Component
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <Header {...propsRoute}/>
            <HomeCarousel {...propsRoute}/>
            <Component {...propsRoute} />
            <footer className="bg-dark h-10 text-white">
              Đây là footer homepage
            </footer>
          </Fragment>
        );
      }}
    />
  );
};
