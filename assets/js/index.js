"use strict";

const root = document.getElementById("root");

const h1 = createElement(
  "h1",
  {
    classNames: ["actors-heading", "upper-case"],
    attributes: {
      title: "mainTitle",
      "data-key": 22,
    },
  },
  "Actors"
);

fetch("/assets/data.json")
  .then((response) => response.json())
  .then((data) => {
    const articles = data.map((user) => {
      const nameActors = createElement(
        "p",
        { classNames: ["actor-name"] },
        `${user.firstName} ${user.lastName}`
      );

      const img = createElement("img", {
        classNames: ["actor-img-block"],
        attributes: { src: user.profilePicture },
        events: {
          error: ({ target }) => {
            target.remove();
          },
        },
      });

      const blockphoto = createElement(
        "div",
        { },
        img
      );

      // const socialNetworks = createElement("div", {}, ...user.contacts)
      return createElement("article", { classNames: ["actor"] }, blockphoto, nameActors, /*socialNetworks*/);
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
