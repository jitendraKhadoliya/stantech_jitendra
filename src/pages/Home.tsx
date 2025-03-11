import React, { useState } from "react";
import { useGetItemsQuery } from "../features/itemsApi";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/uiSlice";
import SearchBar from "../components/SearchBar";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const { data: items = [], isLoading } = useGetItemsQuery(debouncedSearch);
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.ui.favorites);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">📦 Item Catalog</h2>
      <SearchBar setSearch={setSearch} />
      {isLoading && (
        <div className="text-center my-3">
          <Spinner animation="border" />
        </div>
      )}

      <InfiniteScroll
        dataLength={items.length}
        next={() => {}}
        hasMore={false}
        loader={<p>Loading...</p>}
      >
        <Row className="g-4 m-0">
          {items.map((item: any) => (
            <Col key={item.id} md={6} lg={4}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-muted small text-truncate">
                    {item.body}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/details/${item.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </Link>
                    <Button
                      variant={
                        favorites.includes(item.id)
                          ? "warning"
                          : "outline-secondary"
                      }
                      size="sm"
                      onClick={() => dispatch(toggleFavorite(item.id))}
                    >
                      {favorites.includes(item.id)
                        ? "★ Favorited"
                        : "☆ Favorite"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default Home;
