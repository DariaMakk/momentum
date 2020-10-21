const time = document.querySelector('.time'),
      greeting = document.querySelector('.greeting'),
      name = document.querySelector('.name'),
      focus = document.querySelector('.focus');

function showTime() {
    let today = new Date(),
    // let today = new Date(2020, 12, 12, 20, 00, 20)
        hour = today.getHours(),
        minute = today.getMinutes(),
        second = today.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(second)}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n) < 10 ? '0' : '') + n;
}

function setBackgrGreet() {
    let time = new Date();
        hour = time.getHours();
    if (hour < 12) {
        document.querySelector('body').style.backgroundImage = "url('assets/morning/01.JPG')";
        greeting.innerText = 'Good Morning,';
    } else if (hour < 18) {
        document.querySelector('body').style.backgroundImage = "url('assets/day/01.JPG')";
        greeting.innerText = 'Good Afternoon,';
    } else if (hour < 24) {
        document.querySelector('body').style.backgroundImage = "url('assets/evening/01.JPG')";
        greeting.innerText = 'Good Evening,';
    } else {
        document.querySelector('body').style.backgroundImage = "url('assets/night/01.JPG')";
        document.querySelector('body').style.color = white;
        greeting.innerText = 'Good Night,';
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.target.innerText === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.target.innerText === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBackgrGreet();
getName();
getFocus();