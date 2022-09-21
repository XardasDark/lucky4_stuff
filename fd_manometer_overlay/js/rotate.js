var r = 90;
var halted = 'run'
//document.getElementById("pointer").setAttribute("style","transform:rotate(-90deg)");
function start() {
    if (halted == 'stop') {
        return
    } else {
        if (r >= -122) {
            console.log(r)
            document.getElementById("pointer").setAttribute("style", "transform:rotate(" + r + "deg)");
            r -= 1;

            setTimeout('start()', 1800);
        }
    }
}

window.onload = (event) => {
    document.getElementById("pointer").setAttribute("style", "transform:rotate(-122deg)");
  };

function continued() {
    console.log("Returned")
    halted='run'
    start()
}

function stop() {
    console.log("Stopped")
    halted='stop'
}

function reset() {
    console.log("Reset")
    r = 90;
    halted='run'
    document.getElementById("pointer").setAttribute("style", "transform:rotate(90deg)");
}