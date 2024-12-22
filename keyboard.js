document.addEventListener('keydown', function (event) {
    let key = event.key;
    let virtualKey = document.querySelector(`[data="${key}"]`);

    if (virtualKey) {
        virtualKey.classList.add('active');
    }

    let keyOutput = document.getElementById('key-output');
    if (key === 'Backspace') {
        keyOutput.textContent = keyOutput.textContent.slice(0, -1);
        event.preventDefault();
    } else if (key.length === 1) {
        keyOutput.textContent += key;
    }
});

document.addEventListener('keyup', function (event) {
    let key = event.key;
    let virtualKey = document.querySelector(`[data="${key}"]`);

    if (virtualKey) {
        virtualKey.classList.remove('active');
    }
});

document.querySelectorAll('.key').forEach((keyElement) => {
    keyElement.addEventListener('mousedown', function () {
        let key = this.getAttribute('data');
        let keyOutput = document.getElementById('key-output');

        if (key === 'backspace') {
            keyOutput.textContent = keyOutput.textContent.slice(0, -1);
        } else if (key === 'space') {
            keyOutput.textContent += ' ';
        } else if (key.length === 1) {
            keyOutput.textContent += key;
        }
        this.classList.add('active');
    });

    keyElement.addEventListener('mouseup', function () {
        this.classList.remove('active');
    });
});