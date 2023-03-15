

export default function lox (){
    const textInputted = document.querySelector('.Reason__input');
    const button = document.querySelector('.Button__whiteBg');
    let text = '';

    button.addEventListener('click', () => {
        text = textInputted.textContent = `${textInputted.value.trim()}`;
        console.log('12')
    })
}

