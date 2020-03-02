/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import styles from "./NewsPage.module.css";
import up from "../../img/up.png";

const NewsPage = props => {
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
      })
      .catch(err => console.log(err));
  }, [props.category]);

  return (
    <div>
      <div>
        {news.map((item, index) => {
          return (
            <div>
              <div className={styles.container}>
                <div className={styles.title}>
                  <div>
                    <img
                      className={styles.imgNews}
                      src={item.urlToImage}
                      alt=""
                    />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className={styles.description}>
                  <p>{item.description}</p>
                </div>
                <hr />
              </div>
            </div>
          );
        })}

        <div className={styles.topBtn}>
          <img
            src={up}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
            }}
            id="myBtn"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
