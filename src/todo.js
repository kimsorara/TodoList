import styled from "styled-components";
import { fetchDelete } from "./utill/api";
import { useState } from "react";
import Page from "./page";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  border: 4px solid solid rgb(208, 156, 250);
  box-shadow: -5px 4px 2px gray;
`;
const TodoTitle = styled.div`
  width: 400px;
  height: 62px;
  border-radius: 15px;
  padding: 10px;
  background-color: rgb(243, 204, 255, 0.5);
  font-size: 2rem;
  font-weight: bold;
`;
const TodoContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border-radius: 15px;
  padding: 10px;
  background-color: rgb(243, 204, 255, 0.5);

  div {
    height: 100px;
    margin: 20px;
    flex-grow: 1;
    &:nth-child(1) {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
const DelteBtn = styled.button`
  background-color: rgb(73, 85, 121);
  color: white;
  border: none;
  i {
    font-size: 2rem;
    font-weight: bold;
  }
  &:active {
    background-color: rgb(165, 85, 236);
  }
`;
const Todo = ({ value }) => {
  const handleDeleteClick = () => {
    fetchDelete("http://localhost:3001/todo", value.id);
  };
  const [update, setUpdate] = useState(false);
  const updateBtn = () => {
    setUpdate(!update);
  };
  return (
    <>
      {update && <Page value={value} />}
      <Main>
        <div>
          <TodoTitle>{value.day}</TodoTitle>
        </div>
        <TodoContent>
          <div>{value.title}</div>
          <div>{value.content}</div>
        </TodoContent>
        <DelteBtn onClick={handleDeleteClick}>
          <i className="fa-solid fa-trash-can-arrow-up"></i>
        </DelteBtn>
        <DelteBtn onClick={updateBtn}>
          <i className="fa-solid fa-feather"></i>
        </DelteBtn>
      </Main>
    </>
  );
};
export default Todo;
