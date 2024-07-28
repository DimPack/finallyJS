'use strict';

/*
const option={
    classNames : ['actors', 'active'],
    attributes : {'title' : 'actors', 'key': 'value'},
    style : {'title' : 'actors'},
    events : {'click', handleClick}
}

*/
function createElement(tag, option = {}, ...children) {
    const elem = document.createElement(tag);

    console.log(option);
    if(option.classNames) {
        elem.classList.add(...option['classNames'])
    }
    if(option.attributes) {
        for (const titleAttr in option.attributes) {
            elem.setAttribute(titleAttr, option.attributes[titleAttr]);
        }
    }
    elem.append(...children);
    return elem;
}