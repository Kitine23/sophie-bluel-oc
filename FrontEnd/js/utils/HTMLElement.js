// https://stackoverflow.com/questions/43168284/javascript-createelement-export function
export function createHTMLElement(tagName, attributes = {}, ...children) {
  const element = document.createElement(tagName)
  Object.keys(attributes).forEach((attr) => (element[attr] = attributes[attr]))
  if (children) {
    element.append(...children)
  }

  return element
}

export function span(...params) {
  return createHTMLElement('span', ...params)
}

export function div(...params) {
  return createHTMLElement('div', ...params)
}

export function a(...params) {
  return createHTMLElement('a', ...params)
}

export function article(...params) {
  return createHTMLElement('article', ...params)
}

export function img(...params) {
  return createHTMLElement('img', ...params)
}

export function h3(...params) {
  return createHTMLElement('h3', ...params)
}

export function p(...params) {
  return createHTMLElement('p', ...params)
}

export function strong(...params) {
  return createHTMLElement('strong', ...params)
}

export function figure(...params) {
  return createHTMLElement('figure', ...params)
}

export function figcaption(...params) {
  return createHTMLElement('figcaption', ...params)
}

export function button(...params) {
  return createHTMLElement('button', ...params)
}
