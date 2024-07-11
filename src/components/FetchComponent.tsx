import { useEffect, useState } from "react";
import { IArticles } from "../interfaces/IArticles";
import { Container, Row, Spinner } from "react-bootstrap";

import SingleArticle from "./SingleArticle";
const url = "https://api.spaceflightnewsapi.net/v4/articles";

const FetchComponent = () => {
  const [articles, setArticles] = useState<IArticles[]>([]);

  const fetchArticles = () => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - fetchArticles @FetchComponent.tsx");
        }
      })
      .then(data => {
        setArticles(data.results);
        console.log(articles);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {articles.length > 0 ? (
        <Container>
          <Row>
            {articles.map(article => (
              <SingleArticle key={article.id} article={article} />
            ))}
          </Row>
        </Container>
      ) : (
        <div className="position-relative vh-100">
          <Spinner animation="grow" variant="primary" className="position-absolute top-50 start-50" />
        </div>
      )}
    </>
  );
};

export default FetchComponent;
