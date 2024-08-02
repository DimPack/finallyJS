"use strict";

/*
const option={
    classNames : ['actors', 'active'],
    attributes : {'title' : 'actors', 'key': 'value'},
    style : {'title' : 'actors'},
    events : {'click', handleClick}
}

*/
function createElement(teg, option = {}, ...children) {
  const elem = document.createElement(teg);

  if (option.classNames) {
    elem.classList.add(...option["classNames"]);
  }
  if (option.attributes) {
    for (const titleAttr in option.attributes) {
      elem.setAttribute(titleAttr, option.attributes[titleAttr]);
    }
  }
  if (option.events) {
    for (const titleEvent in option.events) {
      elem.addEventListener(titleEvent, option.events[titleEvent]);
    }
  }
  elem.append(...children);
  return elem;
}

function addClickList(user, listNames, ul) {
  const name = `${user.firstName} ${user.lastName}`;
  if (!listNames.includes(name)) {

    listNames.push(name);
    renderList(listNames, ul)
      
  } 
return listNames;
}

function renderList(listNames, ul) {
  console.log(listNames);
  const listChoosedNames = listNames.map((name) => {
    console.log(name);
    return createElement("li", { classNames: ["li"] }, name);
  });
  console.log(listChoosedNames);
  ul.innerHTML = '';
  ul.append(...listChoosedNames)

}