// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers, tasks, operations are recorded from here
myFile.runContents()


function shouldContinue() {
    // check if the event loop should continue
    // Check one: any pending events? setTimeout, setInterval, setImmediate
    // Check two: any pending OS tasks? Like server listening for connections
    // Check three: any pending running operations? like fs.readFile
    return penddingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes in one tick
while (shouldContinue()) {
    
    // 1) Node looks at pendingTimers and sees if any functions are ready to be called    
    // setTimeout, setInterval
    
    // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
    
    // 3) Pause execution. Continue when...
    //    - a new pendingOSTask is done
    //    - a new pendingOperation is done
    //    - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events

} // one tick

// exit back to terminal