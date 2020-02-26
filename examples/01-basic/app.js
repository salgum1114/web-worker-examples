const button = document.getElementById('post-button');
const result = document.getElementById('result');

let worker;

if (window.Worker) {
    worker = new Worker('worker.js');
} else {
    alert('Not supported Worker');
}

button.onclick = async function(e) {
    if (worker) {
        worker.postMessage('App: Posting message to Worker');
        worker.onmessage = function(e) {
            result.innerHTML = `App: Received message from Worker: ${e.data}`;
            whiteNoiseNode.disconnect();
            console.log('App: Received message from Worker', e);
        }
    }
}