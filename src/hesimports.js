// react cdn
const reactcdn1 = document.createElement(`script`);
reactcdn1.src = `https://unpkg.com/react@latest/umd/react.production.min.js`;
// react dom cdn
const reactcdn2 = document.createElement(`script`);
reactcdn2.src = `https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js`;

// Babel cdn (to compile JSX) -->
const babeltocompilejsx = document.createElement(`script`);
babeltocompilejsx.src = `https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js`;

export default function reactnbabel() {
    document.head.appendChild(reactcdn1);
    document.head.appendChild(reactcdn2);
    document.head.appendChild(babeltocompilejsx);
}