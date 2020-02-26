const play = document.getElementById('play');
const stop = document.getElementById('stop');

let whiteNoiseNode;

play.onclick = async () => {
    const audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule('processor.js');
    audioContext.audio
    whiteNoiseNode = new AudioWorkletNode(audioContext, 'processor');
    whiteNoiseNode.connect(audioContext.destination);
    whiteNoiseNode.port.onmessage = (e) => {
        console.log('App: Received message from Processor', e);
    }
    whiteNoiseNode.port.postMessage('App: Posting message to Processor');
}

stop.onclick = () => {
    if (whiteNoiseNode) {
        whiteNoiseNode.disconnect();
    }
}
