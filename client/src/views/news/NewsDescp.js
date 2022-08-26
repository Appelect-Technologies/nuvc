import React from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../../utils/dataApi";

function NewsDiscp() {
  let { nid } = useParams();

  const [news, setNews] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const newsData = await getNews("?id=" + nid);
      setNews(newsData && newsData.news);
    }
    fetchData();
    return () => {
      setNews(null);
    };
  }, []);

  if (!news) {
    return (
      <div className="container">
        <div class="card-body">Loading...</div>
      </div>
    );
  }
  return (
    <div className="container">
      <div
        class="card mb-3"
        style={{ border: "none", borderRadius: 0, marginTop: 10 }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={news.image}
              class="img-fluid"
              style={{
                width: "100%",
                maxHeight: 400,
                objectFit: "contain",
              }}
            />
          </div>
          <div class="col-md-8">
            <div className="card-header bg-white">
              <h5 class="card-title mb-0">{news.title}</h5>
              <small className="text-muted">
                Posted on: {new Date(news.date).toDateString()}
              </small>
            </div>
            <div class="card-body">
              <h5 class="card-text mb-2">Description</h5>
              <p class="card-text">{news.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDiscp;
