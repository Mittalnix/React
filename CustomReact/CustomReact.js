function renderElement(childEl,parentEl)
{
  const domEl = document.createElement(childEl.type);
  domEl.innerHTML= childEl.children;
  domEl.setAttribute("href",childEl.props.href);
  domEl.setAttribute("target",childEl.props.target);
  parentEl.appendChild(domEl);
}
const reactElement = {
    type:"a",
    props:{
      href:"https://www.google.com/",
      target:"_blank"
    },
    children:"Click to go to Google"
}
const mainContainer = document.querySelector("#root");

renderElement(reactElement,mainContainer);
