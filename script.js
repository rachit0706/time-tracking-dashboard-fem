import DATA from './data.json' assert {type: 'json'};

renderData("weekly");

function renderData(filter) {
    const activityContent = document.getElementById("activity-content");

    DATA.forEach(obj => {
        const activityCard = activityContent.querySelector(`.${obj.title.toLowerCase().split(' ').join('-')}`);
        activityCard.style.backgroundColor = obj.backgroundColor;
        activityCard.style.backgroundImage = `url("${obj.icon}")`;

        activityCard.querySelector('.activity-type').textContent = obj.title;
        activityCard.querySelector('.ellipsis-icon').src = "./images/icon-ellipsis.svg";

        activityCard.querySelector('.current-duration').textContent = `${obj.timeframes[filter].current}hrs`;

        activityCard.querySelector('.previous-duration').textContent = `Last ${filter === 'daily' ?"day" : filter.substring(0, filter.length - 2)} - ${obj.timeframes[filter].previous}hrs`;
        
    });
}

const selectedTime = {
    daily: false,
    weekly: true,
    monthly: false
}

const timeFrames = document.querySelector(".timeframes");

let currentTimeframe = document.querySelector('.weekly');

timeFrames.addEventListener('click', function (e) {
    currentTimeframe.classList.remove('default-timeframe');
    selectedTime[currentTimeframe.classList[1]] = false;
    
    currentTimeframe = e.target;
    
    selectedTime[currentTimeframe.classList[1]] = true;
    currentTimeframe.classList.add('default-timeframe');

    renderData(((selectedTime.daily && "daily") || (selectedTime.weekly && "weekly") || (selectedTime.monthly && "monthly")));
});
