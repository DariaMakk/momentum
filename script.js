const time = document.querySelector('.time'),
      date = document.querySelector('.date'),
      greeting = document.querySelector('.greeting'),
      name = document.querySelector('.name'),
      focus = document.querySelector('.focus');

const daysOfWeek = {
    0: 'Воскресенье',
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
}

const months = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Октября',
    10: 'Ноября',
    11: 'Декабря',
}

function showTime() {
    let currentTime = new Date(),
        hour = currentTime.getHours(),
        minute = currentTime.getMinutes(),
        second = currentTime.getSeconds();
    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(second)}`;
    setTimeout(showTime, 1000);
}

function showDate() {
    let today = new Date (),
        day = today.getDate(),
        month = today.getMonth(),
        dayOfWeek = today.getDay();
    date.innerHTML = `${daysOfWeek[dayOfWeek]}<span>, </span>${day}<span> </span>${months[month]}`
}

function addZero(n) {
    return (parseInt(n) < 10 ? '0' : '') + n;
}

function setBackgrGreet() {
    let time = new Date();
        hour = time.getHours();
    if (hour < 6) {
            document.querySelector('body').style.backgroundImage = "url('assets/night/01.JPG')";
            document.querySelector('body').style.color = "#fff";
            greeting.innerText = 'Good Night,';
        }
    else if (hour < 12) {
        document.querySelector('body').style.backgroundImage = "url('assets/morning/01.JPG')";
        greeting.innerText = 'Good Morning,';
    } else if (hour < 18) {
        document.querySelector('body').style.backgroundImage = "url('assets/day/01.JPG')";
        greeting.innerText = 'Good Afternoon,';
    } else if (hour < 24) {
        document.querySelector('body').style.backgroundImage = "url('assets/evening/01.JPG')";
        greeting.innerText = 'Good Evening,';
    } 
}

function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
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
    // } else if (e.type = 'click') {
    //     name.textContent = ' ';
    //     name.focus();
    } else {
        //getName();
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


name.addEventListener('click', setName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
showDate();
setBackgrGreet();
getName();
getFocus();