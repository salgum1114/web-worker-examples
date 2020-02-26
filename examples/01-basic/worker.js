let count = 0;

self.onmessage = function(e) {
    console.log('Worker: Received message from app.js', e);
    this.postMessage(count++);
}

self.onerror = function(e) {
    console.log('Worker: Error worker', e);
}

// const beep = (function () {
//     var ctxClass = window.audioContext || window.AudioContext || window.AudioContext || window.webkitAudioContext
//     var ctx = new ctxClass();
//     return function (duration, type, finishedCallback) {

//         duration = +duration;

//         // Only 0-4 are valid types.
//         type = (type % 5) || 0;

//         if (typeof finishedCallback != "function") {
//             finishedCallback = function () {};
//         }

//         var osc = ctx.createOscillator();

//         osc.type = type;
//         //osc.type = "sine";

//         osc.connect(ctx.destination);
//         if (osc.noteOn) osc.noteOn(0);
//         if (osc.start) osc.start();

//         setTimeout(function () {
//             if (osc.noteOff) osc.noteOff(0);
//             if (osc.stop) osc.stop();
//             finishedCallback();
//         }, duration);

//     };
// })();
