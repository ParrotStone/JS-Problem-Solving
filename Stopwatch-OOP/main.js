'use strict';


/*
    Problem Description:
    --------------------
    You should have a stopwatch object which can be started, stopped and resetted. U can get the duration off of it, with the duration added up on its previous values unless it's resetted. Handle the cases where the stopwatch might be started again/stopped again.
*/

function Stopwatch() {
    // Private members of the obj
    let started = false;
    let startTime = 0;
    let stopTime = 0;

    let duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });

    this.start = function () {
        if (started)
            throw new Error('Stopwatch already started!');

        started = true;
        startTime = Date.now();
    };

    this.stop = function () {
        if (!started)
            throw new Error('Stopwach already stopped!');

        started = false;
        stopTime = Date.now();
        duration += (stopTime - startTime) / 1000;
    };

    this.reset = function () {
        duration = 0;
        startTime = 0;
        stopTime = 0;
        started = false;
    }
};
