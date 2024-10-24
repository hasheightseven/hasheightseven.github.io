// REF: https://react.dev/learn/add-react-to-an-existing-project
import { createRoot } from "/node_modules/react-dom/client";

// clear the existing HTML content
document.body.innerHTML = `<div id="hashtag-87"></div>`;

//Render your React Component instead.
const hash87 = createRoot(document.getElementById("hashtag-87"));
hash87.render(function () {
  // the whole html goes here
  "<Hash87></Hash87>";
});
// End REF
