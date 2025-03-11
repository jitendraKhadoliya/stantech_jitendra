import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetItemsQuery } from "../features/itemsApi";
import { Card, Button, Container } from "react-bootstrap";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: items = [] } = useGetItemsQuery("");

  const item = items.find((item: { id: number }) => item.id === Number(id));

  if (!item)
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <h4 className="text-muted">Item not found 😕</h4>
      </Container>
    );

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4 w-50">
        <Card.Body>
          <Card.Title className="text-primary">{item.title}</Card.Title>
          <Card.Text className="text-muted">{item.body}</Card.Text>
          <Link to="/">
            <Button variant="primary">⬅ Back to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Details;
