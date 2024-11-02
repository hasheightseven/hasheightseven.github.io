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
@import url('https://fonts.googleapis.com/css2?family=Chokokutai&display=swap');
`;
export default defaultstyles;