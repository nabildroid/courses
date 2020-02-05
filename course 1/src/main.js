module.exports.lorem="lorem2 ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";

/**
 * @param {string} str the lower string that will be converted to Upper Case
 * @returns {string} Upper Case string
 */
const upperStr=str=>{
    return str.toUpperCase();
}

let colors=["red","blue","yellow","green"];


module.exports.colors=colors.map(c=>`color:${c};`);
module.exports.upperStr=upperStr;