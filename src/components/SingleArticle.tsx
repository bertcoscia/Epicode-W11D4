import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";

interface SingleArticleProps {
  article: IArticles;
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Col xs={12} md={4} className="my-3">
      <Card>
        <Link to={`article/${props.article.id}`}>
          <Card.Img variant="top" src={props.article.image_url} />
        </Link>
        <Card.Body>
          <Card.Title className="line-clamp-2">{props.article.title}</Card.Title>
          <Card.Text className="line-clamp-2">{props.article.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticle;
