import React from "react";
import { getAllNews } from "../../utils/dataApi";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    async function fatchData() {
      const allNews = await getAllNews("?limit=30&type=news");
      setNews(allNews?.data ? allNews.data?.news : []);
    }
    fatchData();
  }, []);
  if (news.length === 0) {
    return (
      <div class="card">
        <div className="card-header">
          <h6 class="card-title m-0">News</h6>
        </div>
        <div class="card-body">
          <marquee
            direction="up"
            behavior="scroll"
            scrollamount="3"
            height="300px"
            width="100%"
          ></marquee>
        </div>
      </div>
    );
  }
  return (
    <div class="card shadow-sm">
      <div className="card-header">
        <h6 class="card-title m-0">News</h6>
      </div>
      <div class="card-body">
        <marquee
          direction="up"
          behavior="scroll"
          scrollamount="3"
          height="300px"
          width="100%"
        >
          <ul
            id="ticker01"
            style={{
              listStyle: "none",
              paddingLeft: 0,
            }}
          >
            {news.map((value, index) => (
              <li key={index} className="mb-2">
                <span className="news-time">
                  {new Date(value.date).toLocaleString()}
                </span>
                <Link to={"/news/descp/" + value._id}>{value.title}</Link>
              </li>
            ))}
          </ul>
        </marquee>
      </div>
    </div>
  );
}

export default News;
