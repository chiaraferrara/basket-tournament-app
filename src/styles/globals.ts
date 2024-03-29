import styled from "@emotion/styled";

import { Global, css } from "@emotion/react";
import exp from "constants";

export const globalStyles = css`
  body {
    background-color: red;
  }
`;

export const MinHeight = styled.div`
  min-height: 40vh;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  background-color: #f02b2b;
  color: black;
  font-weight: bold;
  height: 30px;
  min-width: 130px;
  font-size: 12px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 25%);
  padding: 0.5rem 1rem;
  margin: 3px;
  margin-inline: 10px;
  border: none;
  cursor: pointer;
  z-index: 0;
  transition: all 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #212322;
    z-index: -1;
    transition: height 0.3s ease;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover {
    color: #fff;
  }
`;


export const PageButton = styled.button`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  color: black;
  font-weight: bold;
  height: 30px;
  min-width: 130px;
  font-size: 12px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 25%);
  padding: 0.5rem 1rem;
  margin: 3px;
  margin-inline: 10px;
  border: none;
  cursor: pointer;
  z-index: 0;
  transition: all 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #212322;
    z-index: -1;
    transition: height 0.3s ease;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover {
    color: #fff;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerName = styled.h3`
  font-size: 0.8rem;
  text-transform: capitalize;
`;

export const Nav = styled.div`
  display: flex;

  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #212322;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  box-shadow: 0 2px 20px 0px rgb(0 0 0 / 68%);
  margin: 0 auto;
  a {
    &:hover {
      color: white;
    }
    text-decoration: none;

    font-weight: bold;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start
    padding: 1rem 2rem;
    background-color: #212322;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin: 0 auto;
    `;

export const PreviewPic = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  object-fit: cover;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 25%);
`;

export const PointsDetail = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  padding: 2rem 3rem;
  color: black;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-top: 1rem;
  margin: 0 auto;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  color: white;
  padding: 1rem 2rem;
  align-items: center;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;

export const TeamWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(33, 35, 34);
  background: linear-gradient(
    180deg,
    rgba(33, 35, 34, 1) 3%,
    rgba(255, 255, 255, 1) 3%
  );
  background-color: #ffffff;
  color: black;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  text-align: center;

  h1 {
    color: #black;
    font-size: 1.5rem;
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f7f7f7;
  color: black;
  font-weight: 600;
  letter-spacing: 0.1rem;
  align-items: center;
  background: rgb(240, 43, 43);
  background: linear-gradient(
    90deg,
    rgba(240, 43, 43, 1) 0%,
    rgba(240, 43, 43, 1) 1%,
    rgba(242, 242, 242, 1) 1%,
    rgba(245, 245, 245, 1) 1%,
    rgba(246, 246, 246, 1) 13%,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 1) 92%,
    rgba(255, 255, 255, 1) 94%,
    rgba(255, 255, 255, 1) 99%,
    rgba(240, 43, 43, 1) 99%,
    rgba(240, 43, 43, 1) 100%
  );
`;

export const GamesRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;

export const TeamGameColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;

export const TeamName = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  text-transform: uppercase;
`;

export const DateRow = styled.p`
  background-color: #212322;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
`;

export const FooterRow = styled.div`
  background-color: #212322;
  display: flex;
  flex-flow: row wrap;
  color: white;
`;

export const FooterContainer = styled.footer`
  background-color: #212322;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: white;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 25%);
  position: relative;
  margin-top: 0px;
  margin-bottom: 0px;
  bottom: 0px;
`;

export const Logos = styled.img`
  height: 60px;
  margin: 20px;
`;

export const LeaderboardRow = styled.div`
  font-size: 1.8rem;
`;

export const Table = styled.table`
width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 7rem;
  background-color: #f7f7f7;
  box-shadow: 0 2px 8px 0px rgb(0 0 0 / 25%);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;


  a{
    color: black;
    text-decoration: none;
  
  }

  a:visited{
    color: black;
  }
`;

export const Tr = styled.tr`
height: 90px;
  border-bottom: 1px solid #f7f7f7;
  color: white;
`;

export const Thead = styled.thead`
background: rgb(33,35,34);
background: linear-gradient(180deg, rgba(33,35,34,1) 2%, rgba(33,35,34,1) 3%, rgba(33,35,34,1) 13%, rgba(33,35,34,1) 60%, rgba(33,35,34,1) 87%, rgba(240,43,43,1) 91%, rgba(240,43,43,1) 92%, rgba(240,43,43,1) 100%);
padding: 3rem;
color: white;
`;

export const Td = styled.td`
  padding: 1rem; 
  transition: all 0.3s ease;
  
  &:hover {
    font-weight: bold;
    height:50px;
    font-size: 1.2rem;
  }
`;

export const Th =   styled.th`
  padding: 1rem;

 
`;