function DigitalTimer(config) {
    this.config = config;
    this.elapsedMs = 0;

    this.init = () => {
        this.interval = setInterval(this.main, this.config.intervalMs);
    };
    
    this.updateDisplay = () => {
        const timeString = this.elapsedMs.toString().padStart(5, '0');
        
        this.config.secondTens.textContent = timeString.charAt(0);
        this.config.secondOnes.textContent = timeString.charAt(1);
        this.config.msHundreds.textContent = timeString.charAt(2);
        this.config.msTens.textContent = timeString.charAt(3);
    };

    this.main = () => {
        this.elapsedMs += this.config.intervalMs;

        const stopCondition = this.elapsedMs >= this.config.stopMs + 1;

        if (stopCondition) {
            this.stop();
        } else {
            this.updateDisplay(this.elapsedMs);
        }
    };
    
    this.stop = () => {
        this.config.timeEl.style.color = 'red';
        clearInterval(this.interval);
    };
}

const timer = new DigitalTimer({
    intervalMs: 10,
    stopMs: 10000,
    timeEl: document.querySelector('body > div.digits'),
    secondTens: document.getElementById('secondTens'), 
    secondOnes: document.getElementById('secondOnes'), 
    msHundreds: document.getElementById('msHundreds'), 
    msTens: document.getElementById('msTens')
})

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
    timer.init();
})