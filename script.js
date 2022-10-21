import DATA from './data.json' assert {type: 'json'};

const activityContent = document.getElementById("activity-content");

const selectedTime = {
    daily: false,
    weekly: true,
    monthly: false
}

function renderData(filter) {
    
    DATA.forEach(obj => {
        const activityCard = document.createElement('section');
        activityCard.classList.add('card', 'activity-card', `${obj.title.toLowerCase().split(' ').join('-')}`);
        activityCard.style.backgroundColor = obj.backgroundColor;
        activityCard.style.backgroundImage = `url("${obj.icon}")`;
        activityCard.innerHTML = `
        <div class="activity-info">
            <div class="activity flex-row">
            <span class="activity-type">${obj.title}</span>
            <img src="./images/icon-ellipsis.svg" type="image/svg+xml" class="ellipsis-icon">
        </div>
        <div class="duration flex-row">
            <span class="current-duration">${obj.timeframes[filter].current}hrs</span>
            <span class="previous-duration">Last ${filter === 'daily' ?"day" : filter.substring(0, filter.length - 2)} - ${obj.timeframes[filter].previous}hrs</span>
        </div>
        </div>
        `;
        
        activityContent.append(activityCard)
    });
}

renderData("weekly");

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
