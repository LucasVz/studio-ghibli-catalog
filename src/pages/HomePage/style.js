import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerFilms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Pager = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100px;
  margin-top: 20px;
  margin-bottom: 50px;
  img {
    fill: red;
  }
`;

const PagerArrow = styled.button`
  all: unset;
  font-size: 28px;
  &:hover {
    color: blue;
  }
  &:disabled {
    color: gray;
  }
`;
const Button = styled.button`
  all: unset;
  font-size: 28px;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px 20px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  margin-bottom: 40px;
  &:hover {
    background-color: #e0e0e0;
  }
  &:disabled {
    color: gray;
    background-color: #e0e0e0;
  }
`;

export { Container, ContainerFilms, Title, Pager, PagerArrow, Button };
