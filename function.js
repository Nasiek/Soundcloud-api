//"https://connect.soundcloud.com/sdk/sdk-3.3.0.js"


var initialize = function initialize() {
    SC.initialize({
            client_id: f665fc458615b821cdf1a26b6d1657f6
        }

    )
};

function search() {
    SC.get('/tracks/124861366').then(function(response) {
        player.play();
        console.log(response);
    })
};



var play = SC.stream('/tracks/124861366').then(function(player) {
    player.play();
});