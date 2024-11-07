const greeting = document.createElement('div');
greeting.setAttribute('id', 'greeting-div');
greeting.textContent = `ello ${'username'}`;
greeting.style.color = `#abcdef`;
greeting.style.fontFamily = `Chokokutai, Arial, Sans-Serif`;
greeting.style.fontSize = `26px`;

export async function something(){
    await greeting.onclick(()=> {
        greeting.style.color = '#bdcefa';
    });
}

export default greeting;