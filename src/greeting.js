const greeting = document.createElement('div');
greeting.setAttribute('id', 'greeting-div');
greeting.textContent = `ello ${'username'}`;

async function something(){
    await greeting.onclick(()=> {
        greeting.style.color = '#bdcefa';
    });
}