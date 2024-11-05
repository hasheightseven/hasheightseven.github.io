const noicetom = new Object(name => {
    if (name in users.keys) {
        const user = loginUser(name);
    } else {
        const user = signupUser(name);
    }
});

const entries = [ ['nane': 'john'], ['age': '00'] ];
const objfrmentries = Object.fromEntries(entries);

