var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,n,r){return e(r={path:n,exports:{},require:function(){return o()}},r.exports),r.exports}function t(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),n}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}export{r as a,o as b,e as c,t as d,n as g}