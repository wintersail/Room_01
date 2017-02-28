var exec = require("child_process").exec; 
function start() {
    console.log("You visit /star");
    return "Hello Start";
}

function upload() {
    console.log("You visit /upload");
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return "Hello upload";

}

exports.start = start;
exports.upload = upload;
