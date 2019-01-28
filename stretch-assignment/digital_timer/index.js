function DigitalTimer(config) {
    this.config = config;
    this.elapsedMs = 0;

    this.init = function() {
        this.interval = setInterval(this.main, this.config.interval);
    };
    this.parseMs = function(ms) {
        
    };
    this.main = function() {

    };
    this.stop = function() {
        clearInterval(this.interval);
    };
}

const app = new DigitalTimer({
    intervalMs: 30,
    timeEl: document.querySelector('body > div.digits'),
    secondTens: document.getElementById('secondTens'), 
    secondOnes: document.getElementById('secondOnes'), 
    msHundreds: document.getElementById('msHundreds'), 
    msTens: document.getElementById('msTens')
})