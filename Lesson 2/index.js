import EventEmitter from "events"

// Task 1
const eventEmitterA = new EventEmitter();

eventEmitterA.on('click', () => {
    console.log('Handler 1: Button clicked!');
});

eventEmitterA.on('click', () => {
    console.log('Handler 2: Button clicked!');
});

eventEmitterA.on('click', () => {
    console.log('Handler 3: Button clicked!');
});

eventEmitterA.emit('click');

// Task 2
const eventEmitterB = new EventEmitter();

const errorHandler1 = () => {
    console.log('Error Handler 1: An error occurred!');
};

const errorHandler2 = () => {
    console.log('Error Handler 2: An error occurred!');
};

eventEmitterB.on('error', errorHandler1);
eventEmitterB.on('error', errorHandler2);

eventEmitterB.removeListener('error', errorHandler1);

eventEmitterB.emit('error');

// Task 3
class Dice extends EventEmitter {
    roll() {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        this.emit('rolled', rollResult);
    }
}

const dice = new Dice();

dice.on('rolled', (result) => {
    console.log(`Rolled: ${result}`);
});

dice.roll();
dice.roll();
dice.roll();

// Task 4
class Logger extends EventEmitter {
    info(message) {
        this.emit('info', message);
    }

    warn(message) {
        this.emit('warn', message);
    }

    error(message) {
        this.emit('error', message);
    }
}

const logger = new Logger();

logger.on('info', (message) => {
    console.log(`Info: ${message}`);
});

logger.on('warn', (message) => {
    console.log(`Warning: ${message}`);
});

logger.on('error', (message) => {
    console.error(`Error: ${message}`);
});

logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
