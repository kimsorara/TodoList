import { fetchPatch } from "./utill/api";
import { useState } from "react";
import styled from "styled-components";
const CreateBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateBtn = styled.button`
  text-decoration: none;
  position: fixed;
  top: 100px;
  border: none;
  width: 300px;
  background-color: rgb(165, 85, 236);
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  &:active {
    background-color: rgb(243, 204, 255);
    transition: 0.5s;
  }
`;
const CreateView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  width: 350px;
  height: 90vh;
  background-color: rgb(238, 241, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CreateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Page({ value }) {
  const [created, setcreated] = useState({
    days: value.day,
    content: value.content,
    title: value.title,
  });

  function handleChange(e) {
    setcreated({
      ...created,
      [e.target.name]: e.target.value,
    });
  }
  const { title, days, content } = created; //

  function submitBtn(e) {
    e.preventDefault();
    const patchData = {
      day: days,
      title: title,
      content: content,
    };

    fetchPatch("http://localhost:3001/todo/", value.id, patchData);
  }
  return (
    <CreateContainer>
      <CreateBackdrop>
        <CreateView>
          <form>
            <div className="day">
              <input
                type="text"
                id="day"
                name="days" //
                onChange={handleChange}
                value={days}
              />
            </div>
            <div className="title">
              <input
                type="text"
                id="title"
                name="title" //
                onChange={handleChange}
                value={title}
              />
            </div>
            <div className="textbox">
              <input
                id="textbox"
                onChange={handleChange}
                value={content}
                name="content" //
              ></input>
            </div>
          </form>
          <CreateBtn onClick={submitBtn}>
            <i className="fa-solid fa-feather"></i>
          </CreateBtn>
        </CreateView>
      </CreateBackdrop>
    </CreateContainer>
  );
}

export default Page;
