// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.port.onmessage = (e) => {
            console.log('Processor: Received message', e);
        }
        this.port.postMessage('Processor: Posting message');
    }
    process (inputs, outputs, parameters) {
        const output = outputs[0];
        output.forEach(channel => {
            for (let i = 0; i < channel.length; i++) {
                channel[i] = Math.random() * 2 - 1;
            }
        });
        return true;
    }
}
  
registerProcessor('processor', WhiteNoiseProcessor);
