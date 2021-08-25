window.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.panel'),
          screen = panel.querySelector('.screen');
          one = panel.querySelector('#one'),
          two = panel.querySelector('#two'),
          three = panel.querySelector('#three'),
          four = panel.querySelector('#four'),
          five = panel.querySelector('#five'),
          six = panel.querySelector('#six'),
          seven = panel.querySelector('#seven'),
          eight = panel.querySelector('#eight'),
          nine = panel.querySelector('#nine'),
          backspace = panel.querySelector('#delete'),
          zero = panel.querySelector('#zero'),
          done = panel.querySelector('#enter')
    
    const controls = [one, two, three, four, five, six, seven, eight, nine, backspace, zero, done];

    let PINVAL;
    const PIN = 4059;

    function isPinValid() {
        if (PIN === PINVAL) {
            screen.style.border = '1px solid green';
            let deleteNotification = setTimeout(() => {
                alert('Here\'s your cash, bro');
                screen.style.border = '';
                }, 500);
        } else {
            screen.style.border = '1px solid red';
            screen.value = '';
            let deleteNotification = setTimeout(() => {
                alert('Sorry, you won\'t get cash, bro. Your PIN is invalid');
                screen.style.border = '';
            }, 500);
        }
    }
    
    controls.forEach(key => {
        key.addEventListener('click', () => {
            if (screen.value.length <= 3) {
                if (key === backspace) {
                    screen.value = screen.value.substring(0, screen.value.length - 1);
                } else if (screen.value.length == 4 && key === done) {
                    PINVAL = +screen.value;
                } else {
                    if (key === done) {
                        screen.style.border = '1px solid red';
                        let b = setTimeout(() => {
                            screen.style.border = '';
                        }, 500);
                    } else {
                        screen.value += key.getAttribute('data-inp');
                    }
                }  
            } else {
                if (key === backspace) {
                    screen.value = screen.value.substring(0, screen.value.length - 1);
                } else if (key === done) {
                    PINVAL = +screen.value;
                    isPinValid();
                    screen.value = '';
                }
            }

        });
    });
});