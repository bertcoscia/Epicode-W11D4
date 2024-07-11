import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";
import { Button, Container, Spinner } from "react-bootstrap";

const url = "https://api.spaceflightnewsapi.net/v4/articles/";

const ArticleDetails = () => {
  const [article, setArticle] = useState<IArticles | null>(null);
  const [pubDate, setPubDate] = useState<string>("");

  const params = useParams();

  const fetchArticle = () => {
    fetch(url + params.id)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - fetchArticle @SingleArticle.tsx");
        }
      })
      .then(article => {
        setArticle(article);
        const date = new Date(article.published_at);
        setPubDate(date.toLocaleString());
      });
  };

  useEffect(() => {
    fetchArticle();
    console.log(article);
  }, []);

  return (
    <>
      {article ? (
        <>
          <div className="w-100 position-relative" style={{ backgroundImage: `url(${article.image_url})`, backgroundSize: "cover", height: "40vh" }}>
            <h1 className="text-center my-3 text-white position-absolute bottom-0" style={{ left: "15px", backgroundColor: "rgba(0, 0, 0, .5)", backdropFilter: "blur(10px)" }}>
              {article.title}
            </h1>
          </div>
          <Container className="my-3">
            <div className="d-flex justify-content-between align-items-center border-bottom border-1">
              <h2 className="lead">{article.news_site}</h2>
              <p>Published: {pubDate.slice(0, 10)}</p>
            </div>
            <p>{article.summary}</p>
            <Link className="btn btn-info my-3" to={article.url}>
              Read full article
            </Link>
            <Link to={"/"} className="d-block" style={{ color: "#000000" }}>
              Back to Home
            </Link>
          </Container>
        </>
      ) : (
        <div className="position-relative vh-100">
          <Spinner animation="grow" variant="primary" className="position-absolute top-50 start-50" />
        </div>
      )}
    </>
  );
};

export default ArticleDetails;
