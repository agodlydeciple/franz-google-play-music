// gpm integration
/*jshint esversion: 6 */
const path = require("path");

module.exports = (Franz) => {
    function Main() {
        try {
            let nowPlaying = getNowPlaying();
            let playingStatus;
            let styles = path.join(__dirname, "css/custom-style.css");
            let hardStyle = 

            Franz.injectCSS(styles);

            //> playingStatus = 1 --> music is playing
            //> playingStatus = 2 --> music is paused
            //> playingStatus = 0 --> music is stopped
            if (document.getElementById("player-bar-play-pause") !== null) {
                if (document.getElementById("player-bar-play-pause").getAttribute("title") === "Pause") {
                    playingStatus = 1;
                } else {
                    playingStatus = 2;
                }
            } else {
                playingStatus = 0;
            }

            //> used for development, only broadcast the nowPlaying variable once.
            if (nowPlaying !== wasPlaying) {
                console.log(nowPlaying);
                wasPlaying = nowPlaying;
            }

            Franz.setBadge(playingStatus);
        } catch (error) {
            console.log(error);
        }
    }

    function getNowPlaying() {
        let rv;
        if ((document.getElementById("currently-playing-title") !== null) && (document.getElementById("player-artist") !== null)) {
            rv = document.getElementById("currently-playing-title").firstChild.data + " - " + document.getElementById("player-artist").firstChild.data;
        } else {
            rv = "Nothing Playing";
        }

        return rv;
    }

    let wasPlaying;
    Franz.loop(Main);
};