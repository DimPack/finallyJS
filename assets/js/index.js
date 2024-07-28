"use strict";

const root = document.getElementById("root");

const h1 = createElement(
  "h1",
  {
    classNames: ["actors-heading", "upper-case"],
    attributes: {
      title: "qwerty",
      "data-key": 22,
    },
  },
  "Actors"
);

fetch("/assets/data.json")
  .then((response) => response.json())
  .then((data) => {
    const articles = data.map((user) => {
        const img = createElement('img', {
            attributes: { src: user.profilePicture},
            events: {'error': ({target})=>{target.remove()}}
        })
       return createElement("article", { classNames: ["actor"] }, user.firstName, img)
    });
    const section = createElement(
      "section",
      { classNames: ["actors"] },
      h1,
      ...articles
    );
    root.append(section);
  })
  .catch((error) => {
    root.append("try aga");
  });
