// Create function
function breakChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = '&#xf0c1;';

    setTimeout(function() {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";

    setTimeout(function(){
        battery.innerHTML = "&#xf243;";
    }, 1000);

    setTimeout(function(){
        battery.innerHTML = "&#xf242;";
    }, 2000);

    setTimeout(function(){
        battery.innerHTML = "&#xf241;";
    }, 3000);

    setTimeout(function(){
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

function fillHourglass() {
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf251;";

    setTimeout(function(){
        hourglass.innerHTML = "&#xf252;";
    }, 1000);

    setTimeout(function(){
        hourglass.innerHTML = "&#xf253;";
    }, 2000);
}

// Call function
breakChain();
chargeBattery();
fillHourglass();

// Animate every 2 seconds
setInterval(breakChain, 2000);
setInterval(chargeBattery, 5000);
setInterval(fillHourglass, 3000);
