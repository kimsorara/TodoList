import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import uuid4 from "uuid4";
import { fetchCreate } from "./utill/api";
const SubmitBtn = styled.button`
  background: rgb(243, 204, 255);
  text-decoration: none;
  width: 30%;
  border: none;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;

  .fa-regular {
    border-radius: 10px;
    font-size: 2rem;
    color: blak;
  }
  &:active {
    .fa-regular {
      color: rgb(193, 71, 233);
      transition: 0.3s;
    }
  }
`;
function Home() {
  const [info, setInfo] = useState({ days: "", content: "", title: "" }); //

  function onChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }
  const { title, days, content } = info; //
  function submitBtn(e) {
    e.preventDefault();

    if (title.length !== 0 && days.length !== 0 && content.length !== 0) {
      const data = {
        id: uuid4().slice(0, 8),
        day: days,
        title: title,
        content: content,
      };
      fetchCreate("http://localhost:3001/todo/", data);
      console.log(data);
    }

    setInfo({ days: "", content: "", title: "" });
  }

  return (
    <main>
      <div className="main-border">
        <form>
          <div className="day">
            <div>날짜: </div>
            <input
              type="text"
              id="day"
              name="days" //
              required
              onChange={onChange}
              value={days}
            />
          </div>
          <div className="title">
            <div>제목: </div>
            <input
              type="text"
              id="title"
              name="title" //
              onChange={onChange}
              value={title}
            />
          </div>
          <div className="textbox">
            <div> 세부내용: </div>
            <input
              id="textbox"
              onChange={onChange}
              value={content}
              name="content" //
            ></input>
          </div>
          <SubmitBtn type="submit" onClick={submitBtn}>
            <i className="fa-regular fa-pen-to-square"></i>
          </SubmitBtn>
        </form>
      </div>
    </main>
  );
}

export default Home;
