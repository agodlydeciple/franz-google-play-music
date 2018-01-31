// gpm integration
/*jshint esversion: 6 */
module.exports = (Franz) => {
    function getMessages() {
        try {
            let direct = 0;
            let indirect = 0;
            let FranzData = (document.querySelector("#FranzMessages") === null ? false : document.querySelector("#FranzMessages").dataset);
            if (FranzData !== false) {
                direct = FranzData.direct;
                indirect = FranzData.indirect;
            }

            Franz.setBadge(direct, indirect);
        } catch (error) {
            console.log(error);
        }
    }

    Franz.loop(getMessages);
};