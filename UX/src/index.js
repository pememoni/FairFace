import upload from './upload.js'
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const input = document.createElement('input');

    input.id = 'text_input';

    btn.innerHTML = 'Upload text to IPFS!';
    btn.onclick = upload;

    element.appendChild(input);
    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());