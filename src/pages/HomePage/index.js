import { useEffect, useState } from "react";
import api from "../../services/api.js";
import { CardFilm } from "../../components/CardFilm/index.js";
import {
  Container,
  Title,
  ContainerFilms,
  Pager,
  PagerArrow,
  Button,
} from "./style.js";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(0);
  const [att, setAtt] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function getAllFilms(x) {
    setPage(page + x);
    const response = await api.getFilms(page + x);
    setFilms(response.data);
    setAtt(false);
  }

  async function postFilms() {
    setDisabled(true);
    await api.postFilms();
    setDisabled(false);
    setAtt(true);
    alert("atualizado");
  }

  useEffect(() => {
    getAllFilms(0);
  }, [att]);

  return (
    <Container>
      <Title>STUDIO GHIBLI</Title>
      <Button disabled={disabled && "disabled"} onClick={postFilms}>
        Atualizar filmes
      </Button>
      <ContainerFilms>
        {films.map((film) => (
          <CardFilm key={film.id} film={film} />
        ))}
      </ContainerFilms>
      <Pager>
        <PagerArrow
          disabled={page <= 0 && "disabled"}
          onClick={(x) => getAllFilms(-1)}
        >
          &lt;
        </PagerArrow>
        <p>{page + 1}</p>
        <PagerArrow
          disabled={page >= films.length - 1 && "disabled"}
          onClick={(x) => getAllFilms(1)}
        >
          &gt;
        </PagerArrow>
      </Pager>
    </Container>
  );
}
