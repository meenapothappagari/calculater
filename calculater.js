document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('display');
    document.addEventListener('click', (a) => {
        if (a.target.tagName === 'BUTTON') {
            let text = a.target.innerText;
            let string = input.value;
            switch (text) {
                case '=':
                    input.value = eval(string);
                    break;
                case 'AC':
                    input.value = "";
                    break;
                case 'DEL':
                    input.value = string.slice(0, -1);
                    break;
                default:
                    input.value += text;
            }
        }
    });
});