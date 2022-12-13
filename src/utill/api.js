const BASE_URL = "http://localhost:3000/";
const BLOG_URL = "http://localhost:3000/todos/";

export const fetchCreate = (url, data) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const fetchDelete = (url, id) => {
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

export const fetchPatch = (url, id, data) => {
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = `${BLOG_URL}${id}`;
    })
    .catch((error) => {
      console.error("Error", error);
    });
};
