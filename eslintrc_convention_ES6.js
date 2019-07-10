module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "window": true,
    "document": true,
    "TouchEvent": true,
    "AjaxRequest": true,
    "SelectJs": true,
    "_TOKEN": true,
    "_PAGEURL": true,
    "_PAGETITLE": true,
    "_MODULE": true,
    "_ID": true,
    "_USEREMAIL": true,
    "_LOGGED_IN": true,
    '_LOCALISATION': true,
    "JsDatePicker" : true,
    "FormulaireTools": true,
    "google": true,
    "InfoBox": true,
    "Interval": true,
    "Image": true,
    "CanvasCaptcha": true,
    "requestAnimationFrame" : true,
    'MarkerWithLabel': true,
    'Parallax': true,
    'FormData': true,
    'IntersectionObserver': true,
    '_MAPDATA': true,
    'Headers': true,
    'Request': true,
    'AbortController': true,
    'fetch': true,
    'Element': true
  },
  "rules": {
    "no-param-reassign": 0,
    "max-len": [
      2,
      {
        code: 2000,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true
      }
    ],
    "no-new": 0,
    "func-names": 0,
    "no-use-before-define": [
      "error", 
      { "classes": false }
    ]
  }
};