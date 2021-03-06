import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./MainPage.module.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import NewsPage from "../NewsPage/NewsPage";
import Weather from "../Weather/Weather";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
      </div>

      <div className={styles.cont2}>
        <Navbar />

        <Switch>
          <Route exact path="/main" component={Content} />
          <Route
            path="/main/health"
            component={() => <NewsPage category="health" />}
          />
          <Route
            path="/main/sports"
            component={() => <NewsPage category="sports" />}
          />
          <Route
            path="/main/technology"
            component={() => <NewsPage category="technology" />}
          />
          <Route
            path="/main/entertainment"
            component={() => <NewsPage category="entertainment" />}
          />
          <Route path="/main/weather" component={() => <Weather />} />
        </Switch>
      </div>
    </div>
  );
};

export default MainPage;
