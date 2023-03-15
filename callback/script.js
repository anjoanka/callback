// реалізувати колбек `eventHandler`

// так щоб кожних 3 секунди вивводилося

// event => 1
// event => 2
// event => 3
// event => 4


const eventHandler = cb => {
    let eventCount = 0;
    setInterval(() => {
        eventCount++;
        cb(eventCount);
    }, 3000);
};

eventHandler(event => {
    console.log('event => ', event);
});