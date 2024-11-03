const defaultstyles = document.createElement("style");
document.head.appendChild(defaultstyles);
defaultstyles.setAttribute("type", "text/css");
defaultstyles.setAttribute("media", "screen");
defaultstyles.innerText = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-family: chokokutai;
  font-weight: 400;
  font-style: normal;
  font-size: 150%;
}

form {
  width: 100%;
  height: 100%;
  background-color: #f1f1f154;
  color: #112692;
  padding: 2.6em;
}
`;
export default defaultstyles;