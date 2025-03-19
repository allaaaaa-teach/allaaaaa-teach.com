// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Проверяем сохраненную тему при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
});

// Функция для шифрования текста шифром Цезаря
function encrypt() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(text, shift);
    document.getElementById('result').textContent = result;
}

// Функция для дешифрования текста шифром Цезаря
function decrypt() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(text, -shift);
    document.getElementById('result').textContent = result;
}

// Реализация шифра Цезаря
function caesarCipher(text, shift) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const alphabetLength = alphabet.length;
    let result = '';

    for (let char of text.toLowerCase()) {
        const index = alphabet.indexOf(char);
        if (index === -1) {
            result += char;
            continue;
        }

        let newIndex = (index + shift) % alphabetLength;
        if (newIndex < 0) {
            newIndex += alphabetLength;
        }

        result += alphabet[newIndex];
    }

    return result;
}

// Добавляем анимацию для карточек методов
document.addEventListener('DOMContentLoaded', () => {
    const methodCards = document.querySelectorAll('.method-card');
    
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 