// gpm integration
/*jshint esversion: 6 */
const path = require("path");

module.exports = (Franz) => {
    function Main() {
        try {
            let nowPlaying = getNowPlaying();

            // let styles = path.join(__dirname, "css/custom-style.css");

            // Franz.injectCSS(styles);

            Franz.setBadge(1);
        } catch (error) {
            console.log(error);
        }
    }

    function getNowPlaying() {
        return (document.getElementById("currently-playing-title").firstChild.data + " - " + document.getElementById("player-artist").firstChild.data);
    }

    Franz.loop(Main);
};