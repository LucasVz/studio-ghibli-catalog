import { Container, Banner, Title, Description } from "./style.js";

export function CardFilm({ film }) {
  return (
    <Container>
      <Title>{film.title}</Title>
      <Banner src={film.image} alt="banner" />
      <Description>
        <span>Description:</span> {film.description}
      </Description>
      <Description>
        <span>Director:</span> {film.director}
      </Description>
      <Description>
        <span>Producer:</span> {film.producer}
      </Description>
    </Container>
  );
}
