/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config ){
    var hour = 0;
    var skill = 800;
    var noSkill = 1300;

    if (knowsProgramming) {
        hour = skill / config[focus];
    } else {
        hour = noSkill / config[focus];
    }

    return(Math.ceil(hour));
};
