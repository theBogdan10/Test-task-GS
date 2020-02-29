/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import styles from "./NewsPage.module.css";

const NewsPage = props => {
  debugger;

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/top-headlines?` +
        `country=us&language=en&category=${props.category}&` +
        `apiKey=bffc4a247a324a988f1d52b0658e9560`
    )
      .then(responce => responce.json())
      .then(result => {
        setNews(result.articles);
      });
  }, [props.category]);

  return (
    <div>
      <div>
        {news.map((item, index) => {
          return (
            <div>
              <div className={styles.container}>
                <div className={styles.title}>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className={styles.topBtn}>
          <button onclick="topFunction()" id="myBtn" title="Go to top">
            Top
          </button> 
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
