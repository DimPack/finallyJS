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
      // console.log(user.contacts);
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

          if (element.match('facebook')) {
            return createElement(
              "a",
              {
                classNames: ["icons", "facebook"],
                attributes: {
                  href: element,
                  target: "_blank",
                },
              },
            );
          }
          if (element.match('instagram')) {
            return createElement(
              "a",
              {
                classNames: ["icons", "instagram"],
                attributes: {
                  href: element,
                  target: "_blank",
                },
              },
            );
          }
          if (element.match('twitter')) {
            return createElement(
              "a",
              {
                classNames: ["icons", "twitter"],
                attributes: {
                  href: element,
                  target: "_blank",
                },
              },
            );
          }

      });

      // const socialNetworks = createElement("div", {}, socialIcons);

      // createElement("div", {}, socialIcons);

      const socialNetworks = createElement("div", {classNames: ["socialNetworks"]}, ...socialIcons)

      return createElement(
        "article",
        { classNames: ["actor"] },
        img,
        nameActors,
        socialNetworks
      );
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
