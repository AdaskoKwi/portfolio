import {trackMouse} from "./mouse.js";
import {createLight} from "./light.js";
import {disableOnHover} from "./hover.js";
import {dropdown} from "./dropdown.js";

createLight();
disableOnHover();
dropdown()

document.onmousemove = trackMouse;