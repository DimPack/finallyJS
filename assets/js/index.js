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
const listNames = [];


const ul = createElement("ul", {
  classNames: ["list"],
});


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
            target.src = "/assets/img/noavatar.png";
          },
        },
      });

      const socialIcons = user.contacts.map((element) => {
        const platforms = {
          facebook: "facebook",
          instagram: "instagram",
          twitter: "twitter",
        };

        for (const platform in platforms) {
          if (element.includes(platform)) {
            return createElement("a", {
              classNames: ["icons", platforms[platform]],
              attributes: {
                href: element,
                target: "_blank",
              },
            });
          }
        }
      });

      const socialNetworks = createElement(
        "div",
        { classNames: ["socialNetworks"] },
        ...socialIcons
      );

      return createElement(
        "article",
        {
          classNames: ["actor"],
          events: { click: () => addClickList(user, listNames, ul) },
        },
        img,
        nameActors,
        socialNetworks
      );
    });

    const articlsBlock = createElement(
      "div",
      { classNames: ["articlsBlock"] },
      ...articles
    );
    const section = createElement(
      "section",
      { classNames: ["actors"] },
      h1,
      articlsBlock,
      ul
    );
    root.append(section);
  })
  .catch((error) => {
    root.append("try aga");
  });
