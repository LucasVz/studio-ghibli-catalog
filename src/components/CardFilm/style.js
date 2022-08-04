import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  width: 320px;
  height: auto;
  background-color: #e9ffe1;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Banner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 375px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition-property: all;
  transition-delay: 2s;
  &:hover {
    overflow: visible;
    display: block;
  }

  span {
    font-weight: 600;
  }
`;
export { Container, Banner, Title, Description };
