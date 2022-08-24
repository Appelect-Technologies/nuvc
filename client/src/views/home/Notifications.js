import React from "react";
import { Link } from "react-router-dom";
import { getAllNews } from "../../utils/dataApi";

function Notifications() {
  const [news, setNews] = React.useState([]);
  const [marq, setMarq] = React.useState(true);
  React.useEffect(() => {
    async function fatchData() {
      const allNews = await getAllNews("?limit=30&type=notify");
      console.log("all news ", allNews);

      setNews(allNews?.data ? allNews.data?.news : []);
    }
    fatchData();
  }, []);

  if (news.length === 0) {
    return (
      <div class="card shadow-sm">
        <div className="card-header">
          <h6 class="card-title m-0">Notifications</h6>
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
        <h6 class="card-title m-0">Notifications</h6>
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
              <li key={index}>
                <span className="news-time">
                  {new Date(value.date).toLocaleString()}
                </span>
                <p className="news-text text-truncate">
                  <Link to={"/news/descp/" + value._id}>{value.title}</Link>
                </p>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </marquee>
      </div>
    </div>
  );
}

export default Notifications;
