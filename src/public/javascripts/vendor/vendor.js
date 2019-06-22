
global.jQuery = require("./jquery-2-2-4-min");
let $ = global.jQuery;
window.$ = $;
// popper loaded from cdn
require("./bootstrap-custom-min");
require("./easing-min");

require("./hoverIntent"); // needed by superfish
require("./superfish-min.js"); // Indicates the presence of submenus by adding CSS-based arrows to relevant anchors
// require("./mn-accordion"); no accordion on index.html
// require("./jquery-magnific-popup-min"); //enlarges photo when clicked
const { owl_carousel } = require("./owl-carousel-min.js");
window.fn = owl_carousel;
require("./isotope-pkgd-min.js"); // for filtering, sorting. currently commented off for error. see note at the commented-off section
// require("./jquery-circlechart"); // draws circular charts. not needed
const { WOW } = require("./wow-min"); // wow requires  Animate.css; export default class WOW {...
window.WOW = WOW;


console.info("vendor loaded");



















// import $ from "./jquery-2-2-4-min";


//----------------------------- transfered from init.js -----------
/* import  $   from "./jquery-2-2-4-min";
import { WOW } from "./wow-min"; */

//--------------------------------------------------------
/* import * as bootstrap from "./bootstrap-custom-min";
import "./easing-min";
import "./hoverIntent";
import "./mn-accordion"; */

// import "./superfish-min";
// import "./jquery-magnific-popup-min";
// import "./jquery-circlechart";
//import "./wow-min";
//-----------------------
// import $ from "./jquery-2.2.4-min" 
//console.log($("body").length); 
/* const jq = $;
export jq; */

//export  { $, WOW, bootstrap } ;

//export const $ = jq ;