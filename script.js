// import DATA from './data.json' assert {type: 'json'};

const DATA = [
    {
      "title": "Work",
      "icon": "./images/icon-work.svg",
      "backgroundColor": "hsl(15, 100%, 70%)", 
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "icon": "./images/icon-play.svg",
      "backgroundColor": "hsl(195, 74%, 62%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "icon": "./images/icon-study.svg",
      "backgroundColor": "hsl(348, 100%, 68%)",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "icon": "./images/icon-exercise.svg",
      "backgroundColor": "hsl(145, 58%, 55%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "icon": "./images/icon-social.svg",
      "backgroundColor": "hsl(264, 64%, 52%)",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "icon": "./images/icon-self-care.svg",
      "backgroundColor": "hsl(43, 84%, 65%)",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

renderData("weekly");

function renderData(filter) {
    const activityContent = document.getElementById("activity-content");

    DATA.forEach(obj => {
        const activityCard = activityContent.querySelector(`.${obj.title.toLowerCase().split(' ').join('-')}`);
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
