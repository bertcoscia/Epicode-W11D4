import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";

interface SingleArticleProps {
  article: IArticles;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  const date = new Date(article.published_at);
  const localeString = date.toLocaleString();

  return (
    <Col xs={12} md={4} className="my-3">
      <Link to={`article/${article.id}`} className="text-decoration-none">
        <Card>
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title className="line-clamp-2">{article.title}</Card.Title>
            <small>{article.news_site}</small>
            <Card.Text className="line-clamp-2 mt-2">{article.summary}</Card.Text>
            <p>{localeString.slice(0, 10)}</p>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleArticle;
