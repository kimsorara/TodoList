import { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .blank {
    width: 68px;
  }
  & div i {
    font-size: 2rem;
    margin: 20px;
    font-weight: bold;
  }
  h1 {
    flex: 1;
  }
`;

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ModalBtn = styled.button`
  text-decoration: none;
  position: fixed;
  top: 100px;
  border: none;
  width: 100px;
  background-color: rgb(165, 85, 236);
  color: white;
  font-size: 2rem;
  border-radius: 10px;
  &:active {
    background-color: rgb(243, 204, 255);
    transition: 0.5s;
  }
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  font-size: 2rem;
  width: 350px;
  height: 100vh;
  background-color: rgb(238, 241, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Nav({ data }) {
  const [click, setClick] = useState(false);
  function todoClick() {
    setClick(!click);
    console.log(click);
  }
  const [linkClick, setLinkClick] = useState(false);
  function navClick() {
    setLinkClick(true);
  }
  function homeClick() {
    window.location.href = "http://localhost:3000/";
  }
  return (
    <ModalContainer>
      <div className="blank"></div>
      <h1>Todo List</h1>

      {!linkClick && (
        <div>
          <i onClick={todoClick} className="fa-solid fa-bars" />
        </div>
      )}
      {linkClick && (
        <div onClick={homeClick}>
          <i onClick={navClick} className="fa-solid fa-house" />
        </div>
      )}
      {click && (
        <ModalBackdrop>
          <ModalView>
            <ModalBtn onClick={todoClick}>x</ModalBtn>
            {data?.map((el) => (
              <Link key={el.id} to={`/todos/${el.id}`} onClick={todoClick}>
                <div onClick={navClick}>{el.title}</div>
              </Link>
            ))}
          </ModalView>
        </ModalBackdrop>
      )}
    </ModalContainer>
  );
}
export default Nav;
