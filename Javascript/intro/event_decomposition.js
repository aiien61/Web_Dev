function anotherAddEventListener(typeOfEvent, callback) {
    let eventThatHappened = {
        eventType: "press",
        key: "p",
        durationOfKeypress: 2
    }

    if (typeOfEvent === eventThatHappened.eventType) {
        callback(eventThatHappened);
    }
}

function makeCall(keyObject) {
    console.log(`Making call ...(${keyObject.durationOfKeypress}s)`)
}

anotherAddEventListener("press", makeCall);
anotherAddEventListener("down", makeCall);