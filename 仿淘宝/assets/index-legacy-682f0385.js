;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = "/**\n * Swiper 8.0.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: March 4, 2022\n */\n\n@font-face {\n  font-family: 'swiper-icons';\n  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d,\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n/* Preloader */\n:root {\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* a11y */\n.swiper .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active,\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev,\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-flip .swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n[data-v-f0017d37] .swiper-button-prev::after {\n  font-size: 16px;\n  color: white;\n  background: #6565657a;\n  padding: 8px 12px;\n  margin-left: -35px;\n  border-radius: 100%;\n}\n[data-v-f0017d37] .swiper-button-next::after {\n  font-size: 16px;\n  color: white;\n  background: #6565657a;\n  padding: 8px 12px;\n  margin-right: -30px;\n  border-radius: 100%;\n}\n.container[data-v-f0017d37] {\n  object-fit: cover;\n  min-height: 800px;\n}\n.container > .supermarket_container[data-v-f0017d37] {\n  width: 1183px;\n  background: #eae8eb;\n  margin: 0 auto;\n}\n.container > .supermarket_container > .supermarket[data-v-f0017d37] {\n  overflow: hidden;\n  border-radius: 25px;\n  height: 100%;\n}\n.container > .supermarket_container > .supermarket > .header[data-v-f0017d37] {\n  height: 130px;\n  background-color: #ffffff;\n  display: flex;\n}\n.container > .supermarket_container > .supermarket > .header > li[data-v-f0017d37] {\n  background-color: aqua;\n}\n.container > .supermarket_container > .supermarket > .header > li[data-v-f0017d37]:nth-of-type(1) {\n  flex: 1;\n  background: url(//gw.alicdn.com/imgextra/i3/O1CN01uRz3de23mzWofmPYX_!!6000000007299-2-tps-143-59.png) center no-repeat;\n}\n.container > .supermarket_container > .supermarket > .header > li[data-v-f0017d37]:nth-of-type(2) {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 3.2;\n  background-color: #ffffff;\n}\n.container > .supermarket_container > .supermarket > .header > li:nth-of-type(2) > input[data-v-f0017d37] {\n  border: 2px solid #ff5000;\n  width: 95%;\n  border-radius: 30px;\n  outline: 0;\n  padding-left: 10px;\n  font-size: 16px;\n  height: 30%;\n}\n.container > .supermarket_container > .supermarket > .header > li:nth-of-type(2) > ul[data-v-f0017d37] {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin-top: 5px;\n}\n.container > .supermarket_container > .supermarket > .header > li:nth-of-type(2) > ul > li[data-v-f0017d37] {\n  margin-right: 10px;\n}\n.container > .supermarket_container > .supermarket > .header > li[data-v-f0017d37]:nth-of-type(2)::after {\n  content: \"搜索\";\n  position: absolute;\n  top: 38px;\n  width: 70px;\n  height: 32px;\n  background: #ff6a00;\n  color: white;\n  display: flex;\n  right: 20px;\n  font-size: 16px;\n  border-radius: 30px;\n  align-items: center;\n  justify-content: center;\n}\n.container > .supermarket_container > .supermarket > .header > li[data-v-f0017d37]:nth-of-type(3) {\n  flex: 0.8;\n  background: url(\"" + new URL('扫码登陆.3c5b09e5.PNG', module.meta.url).href + "\") no-repeat center;\n}\n.container > .supermarket_container > .supermarket > nav[data-v-f0017d37] {\n  height: 400px;\n  background: #ffffff;\n  display: grid;\n  grid-template-areas: \"Classify   Nav              Nav             Nav\" \"Classify   Carousel_map     Carousel_map    Login\";\n}\n.container > .supermarket_container > .supermarket > nav > .Classify[data-v-f0017d37] {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container > .supermarket_container > .supermarket > nav > .Classify > dl[data-v-f0017d37] {\n  width: 270px;\n  padding: 20px;\n  box-sizing: border-box;\n  height: 368px;\n  background: #f7f9fa;\n  border-radius: 10px;\n  margin-left: 10px;\n}\n.container > .supermarket_container > .supermarket > nav > .Classify > dl > dt[data-v-f0017d37] {\n  font-size: 20px;\n  margin: -8px 0px 16px 0px;\n}\n.container > .supermarket_container > .supermarket > nav > .Classify > dl > dd[data-v-f0017d37] {\n  font-size: 16px;\n  margin: 10px 10px 0 0;\n}\n.container > .supermarket_container > .supermarket > nav > .Nav[data-v-f0017d37] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container > .supermarket_container > .supermarket > nav > .Nav > ul[data-v-f0017d37] {\n  background-color: #f7f9fa;\n  width: 880px;\n  margin-right: 10px;\n  display: flex;\n  padding: 0px 10px;\n  height: 40px;\n  border-radius: 10px;\n  justify-content: space-around;\n  font-size: 16px;\n  align-items: center;\n  box-sizing: border-box;\n}\n.container > .supermarket_container > .supermarket > nav > .Nav > ul > li[data-v-f0017d37]::after {\n  content: \"|\";\n  margin-left: 20px;\n}\n.container > .supermarket_container > .supermarket > nav > .Nav > ul > li[data-v-f0017d37]:last-child::after {\n  content: \"\";\n  margin-left: 0px;\n}\n.container > .supermarket_container > .supermarket > nav > .Carousel_map[data-v-f0017d37] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container > .supermarket_container > .supermarket > nav > .Carousel_map > div[data-v-f0017d37] {\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #0099ff;\n  width: 564px;\n  height: 315px;\n  background-color: beige;\n}\n.container > .supermarket_container > .supermarket > nav > .Login[data-v-f0017d37] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.container > .supermarket_container > .supermarket > nav > .Login > div[data-v-f0017d37] {\n  background: url(" + new URL('个人.a02cc3bd.png', module.meta.url).href + ") no-repeat center;\n  width: 316px;\n  height: 295px;\n}\n.swiper[data-v-f0017d37] {\n  width: 100%;\n  height: 100%;\n}\n.swiper-slide[data-v-f0017d37] {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  /* Center slide text vertically */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.swiper-slide img[data-v-f0017d37] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.nav[data-v-637ad174] {\n  height: 36px;\n  background-color: #f5f5f5;\n}\n.nav > ul[data-v-637ad174] {\n  height: 100%;\n  display: flex;\n  width: 1183px;\n  margin: 0 auto;\n  align-items: center;\n}\n.nav > ul > li[data-v-637ad174] {\n  font-size: 12px;\n  color: #272727;\n  margin-right: 20px;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.nav > ul > li[data-v-637ad174]:nth-of-type(6) {\n  flex: 3;\n}\n.nav > ul > li[data-v-637ad174]:nth-of-type(7) {\n  padding: 5px;\n  box-sizing: border-box;\n}\n.nav > ul > li[data-v-637ad174]:nth-of-type(7):hover {\n  background-color: white;\n}\n.nav > ul > li:nth-of-type(7):hover > div[data-v-637ad174] {\n  position: absolute;\n  display: flex !important;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  width: 85px;\n  height: 70px;\n  border: #eeeeee 1px solid;\n  border-top: 0;\n  background: #ffffff;\n  top: 35px;\n  left: -10px;\n  z-index: 1;\n}\n.nav > ul > li:nth-of-type(7):hover > div > span[data-v-637ad174] {\n  padding: 5px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.nav > ul > li:nth-of-type(7):hover > div > span[data-v-637ad174]:hover {\n  background-color: #f5f5f5;\n}\n.container[data-v-637ad174] {\n  margin: 0 auto;\n  background-color: #e1e7e9;\n}\n.container > .web_siteFooter[data-v-637ad174] {\n  height: 286px;\n  margin: 0 auto;\n  padding: 60px auto 0;\n  background: url(" + new URL('底部.70235386.png', module.meta.url).href + ") #ffffff no-repeat center;\n}\n/* 把我们所有标签的内外边距清零 */\nblockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {\n    margin: 0;\n    padding: 0\n}\n/* em 和 i 斜体的文字不倾斜 */\nem,\ni {\n    font-style: normal\n}\n/* 去掉li 的小圆点 */\nli {\n    list-style: none\n}\n\nimg {\n    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */\n    border: 0;\n    /* 取消图片底侧有空白缝隙的问题 */\n    vertical-align: middle\n}\n\nbutton {\n    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */\n    cursor: pointer\n}\n\na {\n    color: #666;\n    text-decoration: none\n}\n\na:hover {\n    color: #c81623\n}\n\nbutton,\ninput {\n    /* \"\\5B8B\\4F53\" 就是宋体的意思 这样浏览器兼容性比较好 */\n    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif\n}\n\nbody {\n    /* CSS3 抗锯齿形 让文字显示的更加清晰 */\n    -webkit-font-smoothing: antialiased;\n    background-color: #fff;\n    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, \"\\5B8B\\4F53\", sans-serif;\n    color: #666\n}\n\n.hide,\n.none {\n    display: none\n}\n/* 清除浮动 */\n.clearfix:after {\n    visibility: hidden;\n    clear: both;\n    display: block;\n    content: \".\";\n    height: 0\n}\n\n.clearfix {\n    *zoom: 1\n}";
    document.head.appendChild(__vite_style__);
    return {
      execute: function () {
        exports({
          a: resolveComponent,
          b: openBlock,
          c: createElementBlock,
          d: createBaseVNode,
          f: popScopeId,
          g: onActivated,
          h: onDeactivated,
          i: inject,
          k: defineAsyncComponent,
          m: reactive,
          n: renderList,
          p: pushScopeId,
          q: createBlock,
          r: ref,
          s: createCommentVNode,
          u: unref
        });
        false && function polyfill() {
          const relList = document.createElement('link').relList;
          if (relList && relList.supports && relList.supports('modulepreload')) {
            return;
          }
          for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
            processPreload(link);
          }
          new MutationObserver(mutations => {
            for (const mutation of mutations) {
              if (mutation.type !== 'childList') {
                continue;
              }
              for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload') processPreload(node);
              }
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(script) {
            const fetchOpts = {};
            if (script.integrity) fetchOpts.integrity = script.integrity;
            if (script.referrerpolicy) fetchOpts.referrerPolicy = script.referrerpolicy;
            if (script.crossorigin === 'use-credentials') fetchOpts.credentials = 'include';else if (script.crossorigin === 'anonymous') fetchOpts.credentials = 'omit';else fetchOpts.credentials = 'same-origin';
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep)
              // ep marker = processed
              return;
            link.ep = true;
            // prepopulate the load record
            const fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        function makeMap(str, expectsLowerCase) {
          const map = /* @__PURE__ */Object.create(null);
          const list = str.split(",");
          for (let i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
        }
        const EMPTY_OBJ = {};
        const EMPTY_ARR = [];
        const NOOP = () => {};
        const NO = () => false;
        const onRE = /^on[^a-z]/;
        const isOn = key => onRE.test(key);
        const isModelListener = key => key.startsWith("onUpdate:");
        const extend$1 = Object.assign;
        const remove = (arr, el) => {
          const i = arr.indexOf(el);
          if (i > -1) {
            arr.splice(i, 1);
          }
        };
        const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
        const hasOwn = (val, key) => hasOwnProperty$2.call(val, key);
        const isArray$2 = Array.isArray;
        const isMap = val => toTypeString(val) === "[object Map]";
        const isSet = val => toTypeString(val) === "[object Set]";
        const isRegExp$1 = val => toTypeString(val) === "[object RegExp]";
        const isFunction$1 = val => typeof val === "function";
        const isString$1 = val => typeof val === "string";
        const isSymbol = val => typeof val === "symbol";
        const isObject$1 = val => val !== null && typeof val === "object";
        const isPromise = val => {
          return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch);
        };
        const objectToString = Object.prototype.toString;
        const toTypeString = value => objectToString.call(value);
        const toRawType = value => {
          return toTypeString(value).slice(8, -1);
        };
        const isPlainObject$1 = val => toTypeString(val) === "[object Object]";
        const isIntegerKey = key => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
        const isReservedProp = /* @__PURE__ */makeMap(
        // the leading comma is intentional so empty string "" is also included
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
        const cacheStringFunction = fn => {
          const cache = /* @__PURE__ */Object.create(null);
          return str => {
            const hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        };
        const camelizeRE = /-(\w)/g;
        const camelize = cacheStringFunction(str => {
          return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
        });
        const hyphenateRE = /\B([A-Z])/g;
        const hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, "-$1").toLowerCase());
        const capitalize = cacheStringFunction(str => str.charAt(0).toUpperCase() + str.slice(1));
        const toHandlerKey = cacheStringFunction(str => str ? `on${capitalize(str)}` : ``);
        const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
        const invokeArrayFns = (fns, arg) => {
          for (let i = 0; i < fns.length; i++) {
            fns[i](arg);
          }
        };
        const def = (obj, key, value) => {
          Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: false,
            value
          });
        };
        const looseToNumber = val => {
          const n = parseFloat(val);
          return isNaN(n) ? val : n;
        };
        let _globalThis;
        const getGlobalThis = () => {
          return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
        };
        function normalizeStyle(value) {
          if (isArray$2(value)) {
            const res = {};
            for (let i = 0; i < value.length; i++) {
              const item = value[i];
              const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
              if (normalized) {
                for (const key in normalized) {
                  res[key] = normalized[key];
                }
              }
            }
            return res;
          } else if (isString$1(value)) {
            return value;
          } else if (isObject$1(value)) {
            return value;
          }
        }
        const listDelimiterRE = /;(?![^(]*\))/g;
        const propertyDelimiterRE = /:([^]+)/;
        const styleCommentRE = /\/\*[^]*?\*\//g;
        function parseStringStyle(cssText) {
          const ret = {};
          cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(item => {
            if (item) {
              const tmp = item.split(propertyDelimiterRE);
              tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return ret;
        }
        function normalizeClass(value) {
          let res = "";
          if (isString$1(value)) {
            res = value;
          } else if (isArray$2(value)) {
            for (let i = 0; i < value.length; i++) {
              const normalized = normalizeClass(value[i]);
              if (normalized) {
                res += normalized + " ";
              }
            }
          } else if (isObject$1(value)) {
            for (const name in value) {
              if (value[name]) {
                res += name + " ";
              }
            }
          }
          return res.trim();
        }
        const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
        const isSpecialBooleanAttr = /* @__PURE__ */makeMap(specialBooleanAttrs);
        function includeBooleanAttr(value) {
          return !!value || value === "";
        }
        const toDisplayString = exports('t', val => {
          return isString$1(val) ? val : val == null ? "" : isArray$2(val) || isObject$1(val) && (val.toString === objectToString || !isFunction$1(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
        });
        const replacer = (_key, val) => {
          if (val && val.__v_isRef) {
            return replacer(_key, val.value);
          } else if (isMap(val)) {
            return {
              [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
                entries[`${key} =>`] = val2;
                return entries;
              }, {})
            };
          } else if (isSet(val)) {
            return {
              [`Set(${val.size})`]: [...val.values()]
            };
          } else if (isObject$1(val) && !isArray$2(val) && !isPlainObject$1(val)) {
            return String(val);
          }
          return val;
        };
        let activeEffectScope;
        class EffectScope {
          constructor(detached = false) {
            this.detached = detached;
            /**
             * @internal
             */
            this._active = true;
            /**
             * @internal
             */
            this.effects = [];
            /**
             * @internal
             */
            this.cleanups = [];
            this.parent = activeEffectScope;
            if (!detached && activeEffectScope) {
              this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
            }
          }
          get active() {
            return this._active;
          }
          run(fn) {
            if (this._active) {
              const currentEffectScope = activeEffectScope;
              try {
                activeEffectScope = this;
                return fn();
              } finally {
                activeEffectScope = currentEffectScope;
              }
            }
          }
          /**
           * This should only be called on non-detached scopes
           * @internal
           */
          on() {
            activeEffectScope = this;
          }
          /**
           * This should only be called on non-detached scopes
           * @internal
           */
          off() {
            activeEffectScope = this.parent;
          }
          stop(fromParent) {
            if (this._active) {
              let i, l;
              for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].stop();
              }
              for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
              }
              if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                  this.scopes[i].stop(true);
                }
              }
              if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                  this.parent.scopes[this.index] = last;
                  last.index = this.index;
                }
              }
              this.parent = void 0;
              this._active = false;
            }
          }
        }
        function recordEffectScope(effect, scope = activeEffectScope) {
          if (scope && scope.active) {
            scope.effects.push(effect);
          }
        }
        function getCurrentScope() {
          return activeEffectScope;
        }
        const createDep = effects => {
          const dep = new Set(effects);
          dep.w = 0;
          dep.n = 0;
          return dep;
        };
        const wasTracked = dep => (dep.w & trackOpBit) > 0;
        const newTracked = dep => (dep.n & trackOpBit) > 0;
        const initDepMarkers = ({
          deps
        }) => {
          if (deps.length) {
            for (let i = 0; i < deps.length; i++) {
              deps[i].w |= trackOpBit;
            }
          }
        };
        const finalizeDepMarkers = effect => {
          const {
            deps
          } = effect;
          if (deps.length) {
            let ptr = 0;
            for (let i = 0; i < deps.length; i++) {
              const dep = deps[i];
              if (wasTracked(dep) && !newTracked(dep)) {
                dep.delete(effect);
              } else {
                deps[ptr++] = dep;
              }
              dep.w &= ~trackOpBit;
              dep.n &= ~trackOpBit;
            }
            deps.length = ptr;
          }
        };
        const targetMap = /* @__PURE__ */new WeakMap();
        let effectTrackDepth = 0;
        let trackOpBit = 1;
        const maxMarkerBits = 30;
        let activeEffect;
        const ITERATE_KEY = Symbol("");
        const MAP_KEY_ITERATE_KEY = Symbol("");
        class ReactiveEffect {
          constructor(fn, scheduler = null, scope) {
            this.fn = fn;
            this.scheduler = scheduler;
            this.active = true;
            this.deps = [];
            this.parent = void 0;
            recordEffectScope(this, scope);
          }
          run() {
            if (!this.active) {
              return this.fn();
            }
            let parent = activeEffect;
            let lastShouldTrack = shouldTrack;
            while (parent) {
              if (parent === this) {
                return;
              }
              parent = parent.parent;
            }
            try {
              this.parent = activeEffect;
              activeEffect = this;
              shouldTrack = true;
              trackOpBit = 1 << ++effectTrackDepth;
              if (effectTrackDepth <= maxMarkerBits) {
                initDepMarkers(this);
              } else {
                cleanupEffect(this);
              }
              return this.fn();
            } finally {
              if (effectTrackDepth <= maxMarkerBits) {
                finalizeDepMarkers(this);
              }
              trackOpBit = 1 << --effectTrackDepth;
              activeEffect = this.parent;
              shouldTrack = lastShouldTrack;
              this.parent = void 0;
              if (this.deferStop) {
                this.stop();
              }
            }
          }
          stop() {
            if (activeEffect === this) {
              this.deferStop = true;
            } else if (this.active) {
              cleanupEffect(this);
              if (this.onStop) {
                this.onStop();
              }
              this.active = false;
            }
          }
        }
        function cleanupEffect(effect2) {
          const {
            deps
          } = effect2;
          if (deps.length) {
            for (let i = 0; i < deps.length; i++) {
              deps[i].delete(effect2);
            }
            deps.length = 0;
          }
        }
        let shouldTrack = true;
        const trackStack = [];
        function pauseTracking() {
          trackStack.push(shouldTrack);
          shouldTrack = false;
        }
        function resetTracking() {
          const last = trackStack.pop();
          shouldTrack = last === void 0 ? true : last;
        }
        function track(target, type, key) {
          if (shouldTrack && activeEffect) {
            let depsMap = targetMap.get(target);
            if (!depsMap) {
              targetMap.set(target, depsMap = /* @__PURE__ */new Map());
            }
            let dep = depsMap.get(key);
            if (!dep) {
              depsMap.set(key, dep = createDep());
            }
            trackEffects(dep);
          }
        }
        function trackEffects(dep, debuggerEventExtraInfo) {
          let shouldTrack2 = false;
          if (effectTrackDepth <= maxMarkerBits) {
            if (!newTracked(dep)) {
              dep.n |= trackOpBit;
              shouldTrack2 = !wasTracked(dep);
            }
          } else {
            shouldTrack2 = !dep.has(activeEffect);
          }
          if (shouldTrack2) {
            dep.add(activeEffect);
            activeEffect.deps.push(dep);
          }
        }
        function trigger(target, type, key, newValue, oldValue, oldTarget) {
          const depsMap = targetMap.get(target);
          if (!depsMap) {
            return;
          }
          let deps = [];
          if (type === "clear") {
            deps = [...depsMap.values()];
          } else if (key === "length" && isArray$2(target)) {
            const newLength = Number(newValue);
            depsMap.forEach((dep, key2) => {
              if (key2 === "length" || key2 >= newLength) {
                deps.push(dep);
              }
            });
          } else {
            if (key !== void 0) {
              deps.push(depsMap.get(key));
            }
            switch (type) {
              case "add":
                if (!isArray$2(target)) {
                  deps.push(depsMap.get(ITERATE_KEY));
                  if (isMap(target)) {
                    deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                } else if (isIntegerKey(key)) {
                  deps.push(depsMap.get("length"));
                }
                break;
              case "delete":
                if (!isArray$2(target)) {
                  deps.push(depsMap.get(ITERATE_KEY));
                  if (isMap(target)) {
                    deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                }
                break;
              case "set":
                if (isMap(target)) {
                  deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
            }
          }
          if (deps.length === 1) {
            if (deps[0]) {
              {
                triggerEffects(deps[0]);
              }
            }
          } else {
            const effects = [];
            for (const dep of deps) {
              if (dep) {
                effects.push(...dep);
              }
            }
            {
              triggerEffects(createDep(effects));
            }
          }
        }
        function triggerEffects(dep, debuggerEventExtraInfo) {
          const effects = isArray$2(dep) ? dep : [...dep];
          for (const effect2 of effects) {
            if (effect2.computed) {
              triggerEffect(effect2);
            }
          }
          for (const effect2 of effects) {
            if (!effect2.computed) {
              triggerEffect(effect2);
            }
          }
        }
        function triggerEffect(effect2, debuggerEventExtraInfo) {
          if (effect2 !== activeEffect || effect2.allowRecurse) {
            if (effect2.scheduler) {
              effect2.scheduler();
            } else {
              effect2.run();
            }
          }
        }
        const isNonTrackableKeys = /* @__PURE__ */makeMap(`__proto__,__v_isRef,__isVue`);
        const builtInSymbols = new Set( /* @__PURE__ */Object.getOwnPropertyNames(Symbol).filter(key => key !== "arguments" && key !== "caller").map(key => Symbol[key]).filter(isSymbol));
        const get$1 = /* @__PURE__ */createGetter();
        const shallowGet = /* @__PURE__ */createGetter(false, true);
        const readonlyGet = /* @__PURE__ */createGetter(true);
        const arrayInstrumentations = /* @__PURE__ */createArrayInstrumentations();
        function createArrayInstrumentations() {
          const instrumentations = {};
          ["includes", "indexOf", "lastIndexOf"].forEach(key => {
            instrumentations[key] = function (...args) {
              const arr = toRaw(this);
              for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get", i + "");
              }
              const res = arr[key](...args);
              if (res === -1 || res === false) {
                return arr[key](...args.map(toRaw));
              } else {
                return res;
              }
            };
          });
          ["push", "pop", "shift", "unshift", "splice"].forEach(key => {
            instrumentations[key] = function (...args) {
              pauseTracking();
              const res = toRaw(this)[key].apply(this, args);
              resetTracking();
              return res;
            };
          });
          return instrumentations;
        }
        function hasOwnProperty$1(key) {
          const obj = toRaw(this);
          track(obj, "has", key);
          return obj.hasOwnProperty(key);
        }
        function createGetter(isReadonly2 = false, shallow = false) {
          return function get2(target, key, receiver) {
            if (key === "__v_isReactive") {
              return !isReadonly2;
            } else if (key === "__v_isReadonly") {
              return isReadonly2;
            } else if (key === "__v_isShallow") {
              return shallow;
            } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
              return target;
            }
            const targetIsArray = isArray$2(target);
            if (!isReadonly2) {
              if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
                return Reflect.get(arrayInstrumentations, key, receiver);
              }
              if (key === "hasOwnProperty") {
                return hasOwnProperty$1;
              }
            }
            const res = Reflect.get(target, key, receiver);
            if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
              return res;
            }
            if (!isReadonly2) {
              track(target, "get", key);
            }
            if (shallow) {
              return res;
            }
            if (isRef(res)) {
              return targetIsArray && isIntegerKey(key) ? res : res.value;
            }
            if (isObject$1(res)) {
              return isReadonly2 ? readonly(res) : reactive(res);
            }
            return res;
          };
        }
        const set$1 = /* @__PURE__ */createSetter();
        const shallowSet = /* @__PURE__ */createSetter(true);
        function createSetter(shallow = false) {
          return function set2(target, key, value, receiver) {
            let oldValue = target[key];
            if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
              return false;
            }
            if (!shallow) {
              if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
              }
              if (!isArray$2(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
              }
            }
            const hadKey = isArray$2(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
            const result = Reflect.set(target, key, value, receiver);
            if (target === toRaw(receiver)) {
              if (!hadKey) {
                trigger(target, "add", key, value);
              } else if (hasChanged(value, oldValue)) {
                trigger(target, "set", key, value);
              }
            }
            return result;
          };
        }
        function deleteProperty(target, key) {
          const hadKey = hasOwn(target, key);
          target[key];
          const result = Reflect.deleteProperty(target, key);
          if (result && hadKey) {
            trigger(target, "delete", key, void 0);
          }
          return result;
        }
        function has$1(target, key) {
          const result = Reflect.has(target, key);
          if (!isSymbol(key) || !builtInSymbols.has(key)) {
            track(target, "has", key);
          }
          return result;
        }
        function ownKeys(target) {
          track(target, "iterate", isArray$2(target) ? "length" : ITERATE_KEY);
          return Reflect.ownKeys(target);
        }
        const mutableHandlers = {
          get: get$1,
          set: set$1,
          deleteProperty,
          has: has$1,
          ownKeys
        };
        const readonlyHandlers = {
          get: readonlyGet,
          set(target, key) {
            return true;
          },
          deleteProperty(target, key) {
            return true;
          }
        };
        const shallowReactiveHandlers = /* @__PURE__ */extend$1({}, mutableHandlers, {
          get: shallowGet,
          set: shallowSet
        });
        const toShallow = value => value;
        const getProto = v => Reflect.getPrototypeOf(v);
        function get(target, key, isReadonly = false, isShallow = false) {
          target = target["__v_raw"];
          const rawTarget = toRaw(target);
          const rawKey = toRaw(key);
          if (!isReadonly) {
            if (key !== rawKey) {
              track(rawTarget, "get", key);
            }
            track(rawTarget, "get", rawKey);
          }
          const {
            has: has2
          } = getProto(rawTarget);
          const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
          if (has2.call(rawTarget, key)) {
            return wrap(target.get(key));
          } else if (has2.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
          } else if (target !== rawTarget) {
            target.get(key);
          }
        }
        function has(key, isReadonly = false) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const rawKey = toRaw(key);
          if (!isReadonly) {
            if (key !== rawKey) {
              track(rawTarget, "has", key);
            }
            track(rawTarget, "has", rawKey);
          }
          return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        }
        function size(target, isReadonly = false) {
          target = target["__v_raw"];
          !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
          return Reflect.get(target, "size", target);
        }
        function add(value) {
          value = toRaw(value);
          const target = toRaw(this);
          const proto = getProto(target);
          const hadKey = proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
          }
          return this;
        }
        function set(key, value) {
          value = toRaw(value);
          const target = toRaw(this);
          const {
            has: has2,
            get: get2
          } = getProto(target);
          let hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has2.call(target, key);
          }
          const oldValue = get2.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value);
          }
          return this;
        }
        function deleteEntry(key) {
          const target = toRaw(this);
          const {
            has: has2,
            get: get2
          } = getProto(target);
          let hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has2.call(target, key);
          }
          get2 ? get2.call(target, key) : void 0;
          const result = target.delete(key);
          if (hadKey) {
            trigger(target, "delete", key, void 0);
          }
          return result;
        }
        function clear() {
          const target = toRaw(this);
          const hadItems = target.size !== 0;
          const result = target.clear();
          if (hadItems) {
            trigger(target, "clear", void 0, void 0);
          }
          return result;
        }
        function createForEach(isReadonly, isShallow) {
          return function forEach(callback, thisArg) {
            const observed = this;
            const target = observed["__v_raw"];
            const rawTarget = toRaw(target);
            const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
            !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach((value, key) => {
              return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
          };
        }
        function createIterableMethod(method, isReadonly, isShallow) {
          return function (...args) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const targetIsMap = isMap(rawTarget);
            const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
            const isKeyOnly = method === "keys" && targetIsMap;
            const innerIterator = target[method](...args);
            const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
            !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
            return {
              // iterator protocol
              next() {
                const {
                  value,
                  done
                } = innerIterator.next();
                return done ? {
                  value,
                  done
                } : {
                  value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                  done
                };
              },
              // iterable protocol
              [Symbol.iterator]() {
                return this;
              }
            };
          };
        }
        function createReadonlyMethod(type) {
          return function (...args) {
            return type === "delete" ? false : this;
          };
        }
        function createInstrumentations() {
          const mutableInstrumentations2 = {
            get(key) {
              return get(this, key);
            },
            get size() {
              return size(this);
            },
            has,
            add,
            set,
            delete: deleteEntry,
            clear,
            forEach: createForEach(false, false)
          };
          const shallowInstrumentations2 = {
            get(key) {
              return get(this, key, false, true);
            },
            get size() {
              return size(this);
            },
            has,
            add,
            set,
            delete: deleteEntry,
            clear,
            forEach: createForEach(false, true)
          };
          const readonlyInstrumentations2 = {
            get(key) {
              return get(this, key, true);
            },
            get size() {
              return size(this, true);
            },
            has(key) {
              return has.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            delete: createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, false)
          };
          const shallowReadonlyInstrumentations2 = {
            get(key) {
              return get(this, key, true, true);
            },
            get size() {
              return size(this, true);
            },
            has(key) {
              return has.call(this, key, true);
            },
            add: createReadonlyMethod("add"),
            set: createReadonlyMethod("set"),
            delete: createReadonlyMethod("delete"),
            clear: createReadonlyMethod("clear"),
            forEach: createForEach(true, true)
          };
          const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
          iteratorMethods.forEach(method => {
            mutableInstrumentations2[method] = createIterableMethod(method, false, false);
            readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
            shallowInstrumentations2[method] = createIterableMethod(method, false, true);
            shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
          });
          return [mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2];
        }
        const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */createInstrumentations();
        function createInstrumentationGetter(isReadonly, shallow) {
          const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
          return (target, key, receiver) => {
            if (key === "__v_isReactive") {
              return !isReadonly;
            } else if (key === "__v_isReadonly") {
              return isReadonly;
            } else if (key === "__v_raw") {
              return target;
            }
            return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
          };
        }
        const mutableCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(false, false)
        };
        const shallowCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(false, true)
        };
        const readonlyCollectionHandlers = {
          get: /* @__PURE__ */createInstrumentationGetter(true, false)
        };
        const reactiveMap = /* @__PURE__ */new WeakMap();
        const shallowReactiveMap = /* @__PURE__ */new WeakMap();
        const readonlyMap = /* @__PURE__ */new WeakMap();
        const shallowReadonlyMap = /* @__PURE__ */new WeakMap();
        function targetTypeMap(rawType) {
          switch (rawType) {
            case "Object":
            case "Array":
              return 1 /* COMMON */;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
              return 2 /* COLLECTION */;
            default:
              return 0 /* INVALID */;
          }
        }

        function getTargetType(value) {
          return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */ : targetTypeMap(toRawType(value));
        }
        function reactive(target) {
          if (isReadonly(target)) {
            return target;
          }
          return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
        }
        function shallowReactive(target) {
          return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
        }
        function readonly(target) {
          return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
        }
        function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
          if (!isObject$1(target)) {
            return target;
          }
          if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
            return target;
          }
          const existingProxy = proxyMap.get(target);
          if (existingProxy) {
            return existingProxy;
          }
          const targetType = getTargetType(target);
          if (targetType === 0 /* INVALID */) {
            return target;
          }
          const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
          proxyMap.set(target, proxy);
          return proxy;
        }
        function isReactive(value) {
          if (isReadonly(value)) {
            return isReactive(value["__v_raw"]);
          }
          return !!(value && value["__v_isReactive"]);
        }
        function isReadonly(value) {
          return !!(value && value["__v_isReadonly"]);
        }
        function isShallow(value) {
          return !!(value && value["__v_isShallow"]);
        }
        function isProxy(value) {
          return isReactive(value) || isReadonly(value);
        }
        function toRaw(observed) {
          const raw = observed && observed["__v_raw"];
          return raw ? toRaw(raw) : observed;
        }
        function markRaw(value) {
          def(value, "__v_skip", true);
          return value;
        }
        const toReactive = value => isObject$1(value) ? reactive(value) : value;
        const toReadonly = value => isObject$1(value) ? readonly(value) : value;
        function trackRefValue(ref2) {
          if (shouldTrack && activeEffect) {
            ref2 = toRaw(ref2);
            {
              trackEffects(ref2.dep || (ref2.dep = createDep()));
            }
          }
        }
        function triggerRefValue(ref2, newVal) {
          ref2 = toRaw(ref2);
          const dep = ref2.dep;
          if (dep) {
            {
              triggerEffects(dep);
            }
          }
        }
        function isRef(r) {
          return !!(r && r.__v_isRef === true);
        }
        function ref(value) {
          return createRef(value, false);
        }
        function shallowRef(value) {
          return createRef(value, true);
        }
        function createRef(rawValue, shallow) {
          if (isRef(rawValue)) {
            return rawValue;
          }
          return new RefImpl(rawValue, shallow);
        }
        class RefImpl {
          constructor(value, __v_isShallow) {
            this.__v_isShallow = __v_isShallow;
            this.dep = void 0;
            this.__v_isRef = true;
            this._rawValue = __v_isShallow ? value : toRaw(value);
            this._value = __v_isShallow ? value : toReactive(value);
          }
          get value() {
            trackRefValue(this);
            return this._value;
          }
          set value(newVal) {
            const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
            newVal = useDirectValue ? newVal : toRaw(newVal);
            if (hasChanged(newVal, this._rawValue)) {
              this._rawValue = newVal;
              this._value = useDirectValue ? newVal : toReactive(newVal);
              triggerRefValue(this);
            }
          }
        }
        function unref(ref2) {
          return isRef(ref2) ? ref2.value : ref2;
        }
        const shallowUnwrapHandlers = {
          get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
          set: (target, key, value, receiver) => {
            const oldValue = target[key];
            if (isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            } else {
              return Reflect.set(target, key, value, receiver);
            }
          }
        };
        function proxyRefs(objectWithRefs) {
          return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
        }
        class ComputedRefImpl {
          constructor(getter, _setter, isReadonly, isSSR) {
            this._setter = _setter;
            this.dep = void 0;
            this.__v_isRef = true;
            this["__v_isReadonly"] = false;
            this._dirty = true;
            this.effect = new ReactiveEffect(getter, () => {
              if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
              }
            });
            this.effect.computed = this;
            this.effect.active = this._cacheable = !isSSR;
            this["__v_isReadonly"] = isReadonly;
          }
          get value() {
            const self = toRaw(this);
            trackRefValue(self);
            if (self._dirty || !self._cacheable) {
              self._dirty = false;
              self._value = self.effect.run();
            }
            return self._value;
          }
          set value(newValue) {
            this._setter(newValue);
          }
        }
        function computed$1(getterOrOptions, debugOptions, isSSR = false) {
          let getter;
          let setter;
          const onlyGetter = isFunction$1(getterOrOptions);
          if (onlyGetter) {
            getter = getterOrOptions;
            setter = NOOP;
          } else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
          }
          const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
          return cRef;
        }
        function warn(msg, ...args) {
          return;
        }
        function callWithErrorHandling(fn, instance, type, args) {
          let res;
          try {
            res = args ? fn(...args) : fn();
          } catch (err) {
            handleError(err, instance, type);
          }
          return res;
        }
        function callWithAsyncErrorHandling(fn, instance, type, args) {
          if (isFunction$1(fn)) {
            const res = callWithErrorHandling(fn, instance, type, args);
            if (res && isPromise(res)) {
              res.catch(err => {
                handleError(err, instance, type);
              });
            }
            return res;
          }
          const values = [];
          for (let i = 0; i < fn.length; i++) {
            values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
          }
          return values;
        }
        function handleError(err, instance, type, throwInDev = true) {
          const contextVNode = instance ? instance.vnode : null;
          if (instance) {
            let cur = instance.parent;
            const exposedInstance = instance.proxy;
            const errorInfo = type;
            while (cur) {
              const errorCapturedHooks = cur.ec;
              if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                  if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                    return;
                  }
                }
              }
              cur = cur.parent;
            }
            const appErrorHandler = instance.appContext.config.errorHandler;
            if (appErrorHandler) {
              callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
              return;
            }
          }
          logError(err, type, contextVNode, throwInDev);
        }
        function logError(err, type, contextVNode, throwInDev = true) {
          {
            console.error(err);
          }
        }
        let isFlushing = false;
        let isFlushPending = false;
        const queue = [];
        let flushIndex = 0;
        const pendingPostFlushCbs = [];
        let activePostFlushCbs = null;
        let postFlushIndex = 0;
        const resolvedPromise = /* @__PURE__ */Promise.resolve();
        let currentFlushPromise = null;
        function nextTick(fn) {
          const p = currentFlushPromise || resolvedPromise;
          return fn ? p.then(this ? fn.bind(this) : fn) : p;
        }
        function findInsertionIndex(id) {
          let start = flushIndex + 1;
          let end = queue.length;
          while (start < end) {
            const middle = start + end >>> 1;
            const middleJobId = getId(queue[middle]);
            middleJobId < id ? start = middle + 1 : end = middle;
          }
          return start;
        }
        function queueJob(job) {
          if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
            if (job.id == null) {
              queue.push(job);
            } else {
              queue.splice(findInsertionIndex(job.id), 0, job);
            }
            queueFlush();
          }
        }
        function queueFlush() {
          if (!isFlushing && !isFlushPending) {
            isFlushPending = true;
            currentFlushPromise = resolvedPromise.then(flushJobs);
          }
        }
        function invalidateJob(job) {
          const i = queue.indexOf(job);
          if (i > flushIndex) {
            queue.splice(i, 1);
          }
        }
        function queuePostFlushCb(cb) {
          if (!isArray$2(cb)) {
            if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
              pendingPostFlushCbs.push(cb);
            }
          } else {
            pendingPostFlushCbs.push(...cb);
          }
          queueFlush();
        }
        function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
          for (; i < queue.length; i++) {
            const cb = queue[i];
            if (cb && cb.pre) {
              queue.splice(i, 1);
              i--;
              cb();
            }
          }
        }
        function flushPostFlushCbs(seen) {
          if (pendingPostFlushCbs.length) {
            const deduped = [...new Set(pendingPostFlushCbs)];
            pendingPostFlushCbs.length = 0;
            if (activePostFlushCbs) {
              activePostFlushCbs.push(...deduped);
              return;
            }
            activePostFlushCbs = deduped;
            activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
            for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
              activePostFlushCbs[postFlushIndex]();
            }
            activePostFlushCbs = null;
            postFlushIndex = 0;
          }
        }
        const getId = job => job.id == null ? Infinity : job.id;
        const comparator = (a, b) => {
          const diff = getId(a) - getId(b);
          if (diff === 0) {
            if (a.pre && !b.pre) return -1;
            if (b.pre && !a.pre) return 1;
          }
          return diff;
        };
        function flushJobs(seen) {
          isFlushPending = false;
          isFlushing = true;
          queue.sort(comparator);
          const check = NOOP;
          try {
            for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
              const job = queue[flushIndex];
              if (job && job.active !== false) {
                if (!!("production" !== "production") && check(job)) ;
                callWithErrorHandling(job, null, 14);
              }
            }
          } finally {
            flushIndex = 0;
            queue.length = 0;
            flushPostFlushCbs();
            isFlushing = false;
            currentFlushPromise = null;
            if (queue.length || pendingPostFlushCbs.length) {
              flushJobs();
            }
          }
        }
        function emit(instance, event, ...rawArgs) {
          if (instance.isUnmounted) return;
          const props = instance.vnode.props || EMPTY_OBJ;
          let args = rawArgs;
          const isModelListener = event.startsWith("update:");
          const modelArg = isModelListener && event.slice(7);
          if (modelArg && modelArg in props) {
            const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
            const {
              number,
              trim
            } = props[modifiersKey] || EMPTY_OBJ;
            if (trim) {
              args = rawArgs.map(a => isString$1(a) ? a.trim() : a);
            }
            if (number) {
              args = rawArgs.map(looseToNumber);
            }
          }
          let handlerName;
          let handler = props[handlerName = toHandlerKey(event)] ||
          // also try camelCase event handler (#2249)
          props[handlerName = toHandlerKey(camelize(event))];
          if (!handler && isModelListener) {
            handler = props[handlerName = toHandlerKey(hyphenate(event))];
          }
          if (handler) {
            callWithAsyncErrorHandling(handler, instance, 6, args);
          }
          const onceHandler = props[handlerName + `Once`];
          if (onceHandler) {
            if (!instance.emitted) {
              instance.emitted = {};
            } else if (instance.emitted[handlerName]) {
              return;
            }
            instance.emitted[handlerName] = true;
            callWithAsyncErrorHandling(onceHandler, instance, 6, args);
          }
        }
        function normalizeEmitsOptions(comp, appContext, asMixin = false) {
          const cache = appContext.emitsCache;
          const cached = cache.get(comp);
          if (cached !== void 0) {
            return cached;
          }
          const raw = comp.emits;
          let normalized = {};
          let hasExtends = false;
          if (!isFunction$1(comp)) {
            const extendEmits = raw2 => {
              const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
              if (normalizedFromExtend) {
                hasExtends = true;
                extend$1(normalized, normalizedFromExtend);
              }
            };
            if (!asMixin && appContext.mixins.length) {
              appContext.mixins.forEach(extendEmits);
            }
            if (comp.extends) {
              extendEmits(comp.extends);
            }
            if (comp.mixins) {
              comp.mixins.forEach(extendEmits);
            }
          }
          if (!raw && !hasExtends) {
            if (isObject$1(comp)) {
              cache.set(comp, null);
            }
            return null;
          }
          if (isArray$2(raw)) {
            raw.forEach(key => normalized[key] = null);
          } else {
            extend$1(normalized, raw);
          }
          if (isObject$1(comp)) {
            cache.set(comp, normalized);
          }
          return normalized;
        }
        function isEmitListener(options, key) {
          if (!options || !isOn(key)) {
            return false;
          }
          key = key.slice(2).replace(/Once$/, "");
          return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
        }
        let currentRenderingInstance = null;
        let currentScopeId = null;
        function setCurrentRenderingInstance(instance) {
          const prev = currentRenderingInstance;
          currentRenderingInstance = instance;
          currentScopeId = instance && instance.type.__scopeId || null;
          return prev;
        }
        function pushScopeId(id) {
          currentScopeId = id;
        }
        function popScopeId() {
          currentScopeId = null;
        }
        function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
          if (!ctx) return fn;
          if (fn._n) {
            return fn;
          }
          const renderFnWithContext = (...args) => {
            if (renderFnWithContext._d) {
              setBlockTracking(-1);
            }
            const prevInstance = setCurrentRenderingInstance(ctx);
            let res;
            try {
              res = fn(...args);
            } finally {
              setCurrentRenderingInstance(prevInstance);
              if (renderFnWithContext._d) {
                setBlockTracking(1);
              }
            }
            return res;
          };
          renderFnWithContext._n = true;
          renderFnWithContext._c = true;
          renderFnWithContext._d = true;
          return renderFnWithContext;
        }
        function markAttrsAccessed() {}
        function renderComponentRoot(instance) {
          const {
            type: Component,
            vnode,
            proxy,
            withProxy,
            props,
            propsOptions: [propsOptions],
            slots,
            attrs,
            emit,
            render,
            renderCache,
            data,
            setupState,
            ctx,
            inheritAttrs
          } = instance;
          let result;
          let fallthroughAttrs;
          const prev = setCurrentRenderingInstance(instance);
          try {
            if (vnode.shapeFlag & 4) {
              const proxyToUse = withProxy || proxy;
              result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
              fallthroughAttrs = attrs;
            } else {
              const render2 = Component;
              if (!!("production" !== "production") && attrs === props) ;
              result = normalizeVNode(render2.length > 1 ? render2(props, !!("production" !== "production") ? {
                get attrs() {
                  markAttrsAccessed();
                  return attrs;
                },
                slots,
                emit
              } : {
                attrs,
                slots,
                emit
              }) : render2(props, null
              /* we know it doesn't need it */));

              fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
            }
          } catch (err) {
            blockStack.length = 0;
            handleError(err, instance, 1);
            result = createVNode(Comment);
          }
          let root = result;
          if (fallthroughAttrs && inheritAttrs !== false) {
            const keys = Object.keys(fallthroughAttrs);
            const {
              shapeFlag
            } = root;
            if (keys.length) {
              if (shapeFlag & (1 | 6)) {
                if (propsOptions && keys.some(isModelListener)) {
                  fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
              }
            }
          }
          if (vnode.dirs) {
            root = cloneVNode(root);
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
          }
          if (vnode.transition) {
            root.transition = vnode.transition;
          }
          {
            result = root;
          }
          setCurrentRenderingInstance(prev);
          return result;
        }
        const getFunctionalFallthrough = attrs => {
          let res;
          for (const key in attrs) {
            if (key === "class" || key === "style" || isOn(key)) {
              (res || (res = {}))[key] = attrs[key];
            }
          }
          return res;
        };
        const filterModelListeners = (attrs, props) => {
          const res = {};
          for (const key in attrs) {
            if (!isModelListener(key) || !(key.slice(9) in props)) {
              res[key] = attrs[key];
            }
          }
          return res;
        };
        function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
          const {
            props: prevProps,
            children: prevChildren,
            component
          } = prevVNode;
          const {
            props: nextProps,
            children: nextChildren,
            patchFlag
          } = nextVNode;
          const emits = component.emitsOptions;
          if (nextVNode.dirs || nextVNode.transition) {
            return true;
          }
          if (optimized && patchFlag >= 0) {
            if (patchFlag & 1024) {
              return true;
            }
            if (patchFlag & 16) {
              if (!prevProps) {
                return !!nextProps;
              }
              return hasPropsChanged(prevProps, nextProps, emits);
            } else if (patchFlag & 8) {
              const dynamicProps = nextVNode.dynamicProps;
              for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
                  return true;
                }
              }
            }
          } else {
            if (prevChildren || nextChildren) {
              if (!nextChildren || !nextChildren.$stable) {
                return true;
              }
            }
            if (prevProps === nextProps) {
              return false;
            }
            if (!prevProps) {
              return !!nextProps;
            }
            if (!nextProps) {
              return true;
            }
            return hasPropsChanged(prevProps, nextProps, emits);
          }
          return false;
        }
        function hasPropsChanged(prevProps, nextProps, emitsOptions) {
          const nextKeys = Object.keys(nextProps);
          if (nextKeys.length !== Object.keys(prevProps).length) {
            return true;
          }
          for (let i = 0; i < nextKeys.length; i++) {
            const key = nextKeys[i];
            if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
              return true;
            }
          }
          return false;
        }
        function updateHOCHostEl({
          vnode,
          parent
        }, el) {
          while (parent && parent.subTree === vnode) {
            (vnode = parent.vnode).el = el;
            parent = parent.parent;
          }
        }
        const isSuspense = type => type.__isSuspense;
        function queueEffectWithSuspense(fn, suspense) {
          if (suspense && suspense.pendingBranch) {
            if (isArray$2(fn)) {
              suspense.effects.push(...fn);
            } else {
              suspense.effects.push(fn);
            }
          } else {
            queuePostFlushCb(fn);
          }
        }
        const INITIAL_WATCHER_VALUE = {};
        function watch(source, cb, options) {
          return doWatch(source, cb, options);
        }
        function doWatch(source, cb, {
          immediate,
          deep,
          flush,
          onTrack,
          onTrigger
        } = EMPTY_OBJ) {
          var _a;
          const instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
          let getter;
          let forceTrigger = false;
          let isMultiSource = false;
          if (isRef(source)) {
            getter = () => source.value;
            forceTrigger = isShallow(source);
          } else if (isReactive(source)) {
            getter = () => source;
            deep = true;
          } else if (isArray$2(source)) {
            isMultiSource = true;
            forceTrigger = source.some(s => isReactive(s) || isShallow(s));
            getter = () => source.map(s => {
              if (isRef(s)) {
                return s.value;
              } else if (isReactive(s)) {
                return traverse(s);
              } else if (isFunction$1(s)) {
                return callWithErrorHandling(s, instance, 2);
              } else ;
            });
          } else if (isFunction$1(source)) {
            if (cb) {
              getter = () => callWithErrorHandling(source, instance, 2);
            } else {
              getter = () => {
                if (instance && instance.isUnmounted) {
                  return;
                }
                if (cleanup) {
                  cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
              };
            }
          } else {
            getter = NOOP;
          }
          if (cb && deep) {
            const baseGetter = getter;
            getter = () => traverse(baseGetter());
          }
          let cleanup;
          let onCleanup = fn => {
            cleanup = effect.onStop = () => {
              callWithErrorHandling(fn, instance, 4);
            };
          };
          let ssrCleanup;
          if (isInSSRComponentSetup) {
            onCleanup = NOOP;
            if (!cb) {
              getter();
            } else if (immediate) {
              callWithAsyncErrorHandling(cb, instance, 3, [getter(), isMultiSource ? [] : void 0, onCleanup]);
            }
            if (flush === "sync") {
              const ctx = useSSRContext();
              ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
            } else {
              return NOOP;
            }
          }
          let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
          const job = () => {
            if (!effect.active) {
              return;
            }
            if (cb) {
              const newValue = effect.run();
              if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
                if (cleanup) {
                  cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3, [newValue,
                // pass undefined as the old value when it's changed for the first time
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, onCleanup]);
                oldValue = newValue;
              }
            } else {
              effect.run();
            }
          };
          job.allowRecurse = !!cb;
          let scheduler;
          if (flush === "sync") {
            scheduler = job;
          } else if (flush === "post") {
            scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
          } else {
            job.pre = true;
            if (instance) job.id = instance.uid;
            scheduler = () => queueJob(job);
          }
          const effect = new ReactiveEffect(getter, scheduler);
          if (cb) {
            if (immediate) {
              job();
            } else {
              oldValue = effect.run();
            }
          } else if (flush === "post") {
            queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
          } else {
            effect.run();
          }
          const unwatch = () => {
            effect.stop();
            if (instance && instance.scope) {
              remove(instance.scope.effects, effect);
            }
          };
          if (ssrCleanup) ssrCleanup.push(unwatch);
          return unwatch;
        }
        function instanceWatch(source, value, options) {
          const publicThis = this.proxy;
          const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
          let cb;
          if (isFunction$1(value)) {
            cb = value;
          } else {
            cb = value.handler;
            options = value;
          }
          const cur = currentInstance;
          setCurrentInstance(this);
          const res = doWatch(getter, cb.bind(publicThis), options);
          if (cur) {
            setCurrentInstance(cur);
          } else {
            unsetCurrentInstance();
          }
          return res;
        }
        function createPathGetter(ctx, path) {
          const segments = path.split(".");
          return () => {
            let cur = ctx;
            for (let i = 0; i < segments.length && cur; i++) {
              cur = cur[segments[i]];
            }
            return cur;
          };
        }
        function traverse(value, seen) {
          if (!isObject$1(value) || value["__v_skip"]) {
            return value;
          }
          seen = seen || /* @__PURE__ */new Set();
          if (seen.has(value)) {
            return value;
          }
          seen.add(value);
          if (isRef(value)) {
            traverse(value.value, seen);
          } else if (isArray$2(value)) {
            for (let i = 0; i < value.length; i++) {
              traverse(value[i], seen);
            }
          } else if (isSet(value) || isMap(value)) {
            value.forEach(v => {
              traverse(v, seen);
            });
          } else if (isPlainObject$1(value)) {
            for (const key in value) {
              traverse(value[key], seen);
            }
          }
          return value;
        }
        function invokeDirectiveHook(vnode, prevVNode, instance, name) {
          const bindings = vnode.dirs;
          const oldBindings = prevVNode && prevVNode.dirs;
          for (let i = 0; i < bindings.length; i++) {
            const binding = bindings[i];
            if (oldBindings) {
              binding.oldValue = oldBindings[i].value;
            }
            let hook = binding.dir[name];
            if (hook) {
              pauseTracking();
              callWithAsyncErrorHandling(hook, instance, 8, [vnode.el, binding, vnode, prevVNode]);
              resetTracking();
            }
          }
        }
        const TransitionHookValidator = [Function, Array];
        const BaseTransitionPropsValidators = {
          mode: String,
          appear: Boolean,
          persisted: Boolean,
          // enter
          onBeforeEnter: TransitionHookValidator,
          onEnter: TransitionHookValidator,
          onAfterEnter: TransitionHookValidator,
          onEnterCancelled: TransitionHookValidator,
          // leave
          onBeforeLeave: TransitionHookValidator,
          onLeave: TransitionHookValidator,
          onAfterLeave: TransitionHookValidator,
          onLeaveCancelled: TransitionHookValidator,
          // appear
          onBeforeAppear: TransitionHookValidator,
          onAppear: TransitionHookValidator,
          onAfterAppear: TransitionHookValidator,
          onAppearCancelled: TransitionHookValidator
        };
        function setTransitionHooks(vnode, hooks) {
          if (vnode.shapeFlag & 6 && vnode.component) {
            setTransitionHooks(vnode.component.subTree, hooks);
          } else if (vnode.shapeFlag & 128) {
            vnode.ssContent.transition = hooks.clone(vnode.ssContent);
            vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
          } else {
            vnode.transition = hooks;
          }
        }
        function defineComponent(options, extraOptions) {
          return isFunction$1(options) ?
          // #8326: extend call and options.name access are considered side-effects
          // by Rollup, so we have to wrap it in a pure-annotated IIFE.
          /* @__PURE__ */
          (() => extend$1({
            name: options.name
          }, extraOptions, {
            setup: options
          }))() : options;
        }
        const isAsyncWrapper = i => !!i.type.__asyncLoader;
        function defineAsyncComponent(source) {
          if (isFunction$1(source)) {
            source = {
              loader: source
            };
          }
          const {
            loader,
            loadingComponent,
            errorComponent,
            delay = 200,
            timeout,
            // undefined = never times out
            suspensible = true,
            onError: userOnError
          } = source;
          let pendingRequest = null;
          let resolvedComp;
          let retries = 0;
          const retry = () => {
            retries++;
            pendingRequest = null;
            return load();
          };
          const load = () => {
            let thisRequest;
            return pendingRequest || (thisRequest = pendingRequest = loader().catch(err => {
              err = err instanceof Error ? err : new Error(String(err));
              if (userOnError) {
                return new Promise((resolve, reject) => {
                  const userRetry = () => resolve(retry());
                  const userFail = () => reject(err);
                  userOnError(err, userRetry, userFail, retries + 1);
                });
              } else {
                throw err;
              }
            }).then(comp => {
              if (thisRequest !== pendingRequest && pendingRequest) {
                return pendingRequest;
              }
              if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
                comp = comp.default;
              }
              resolvedComp = comp;
              return comp;
            }));
          };
          return defineComponent({
            name: "AsyncComponentWrapper",
            __asyncLoader: load,
            get __asyncResolved() {
              return resolvedComp;
            },
            setup() {
              const instance = currentInstance;
              if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
              }
              const onError = err => {
                pendingRequest = null;
                handleError(err, instance, 13, !errorComponent
                /* do not throw in dev if user provided error component */);
              };

              if (suspensible && instance.suspense || isInSSRComponentSetup) {
                return load().then(comp => {
                  return () => createInnerComp(comp, instance);
                }).catch(err => {
                  onError(err);
                  return () => errorComponent ? createVNode(errorComponent, {
                    error: err
                  }) : null;
                });
              }
              const loaded = ref(false);
              const error = ref();
              const delayed = ref(!!delay);
              if (delay) {
                setTimeout(() => {
                  delayed.value = false;
                }, delay);
              }
              if (timeout != null) {
                setTimeout(() => {
                  if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                  }
                }, timeout);
              }
              load().then(() => {
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                  queueJob(instance.parent.update);
                }
              }).catch(err => {
                onError(err);
                error.value = err;
              });
              return () => {
                if (loaded.value && resolvedComp) {
                  return createInnerComp(resolvedComp, instance);
                } else if (error.value && errorComponent) {
                  return createVNode(errorComponent, {
                    error: error.value
                  });
                } else if (loadingComponent && !delayed.value) {
                  return createVNode(loadingComponent);
                }
              };
            }
          });
        }
        function createInnerComp(comp, parent) {
          const {
            ref: ref2,
            props,
            children,
            ce
          } = parent.vnode;
          const vnode = createVNode(comp, props, children);
          vnode.ref = ref2;
          vnode.ce = ce;
          delete parent.vnode.ce;
          return vnode;
        }
        const isKeepAlive = vnode => vnode.type.__isKeepAlive;
        const KeepAliveImpl = {
          name: `KeepAlive`,
          // Marker for special handling inside the renderer. We are not using a ===
          // check directly on KeepAlive in the renderer, because importing it directly
          // would prevent it from being tree-shaken.
          __isKeepAlive: true,
          props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
          },
          setup(props, {
            slots
          }) {
            const instance = getCurrentInstance();
            const sharedContext = instance.ctx;
            if (!sharedContext.renderer) {
              return () => {
                const children = slots.default && slots.default();
                return children && children.length === 1 ? children[0] : children;
              };
            }
            const cache = /* @__PURE__ */new Map();
            const keys = /* @__PURE__ */new Set();
            let current = null;
            const parentSuspense = instance.suspense;
            const {
              renderer: {
                p: patch,
                m: move,
                um: _unmount,
                o: {
                  createElement
                }
              }
            } = sharedContext;
            const storageContainer = createElement("div");
            sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
              const instance2 = vnode.component;
              move(vnode, container, anchor, 0, parentSuspense);
              patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
              queuePostRenderEffect(() => {
                instance2.isDeactivated = false;
                if (instance2.a) {
                  invokeArrayFns(instance2.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                  invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                }
              }, parentSuspense);
            };
            sharedContext.deactivate = vnode => {
              const instance2 = vnode.component;
              move(vnode, storageContainer, null, 1, parentSuspense);
              queuePostRenderEffect(() => {
                if (instance2.da) {
                  invokeArrayFns(instance2.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                  invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                }
                instance2.isDeactivated = true;
              }, parentSuspense);
            };
            function unmount(vnode) {
              resetShapeFlag(vnode);
              _unmount(vnode, instance, parentSuspense, true);
            }
            function pruneCache(filter) {
              cache.forEach((vnode, key) => {
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) {
                  pruneCacheEntry(key);
                }
              });
            }
            function pruneCacheEntry(key) {
              const cached = cache.get(key);
              if (!current || !isSameVNodeType(cached, current)) {
                unmount(cached);
              } else if (current) {
                resetShapeFlag(current);
              }
              cache.delete(key);
              keys.delete(key);
            }
            watch(() => [props.include, props.exclude], ([include, exclude]) => {
              include && pruneCache(name => matches(include, name));
              exclude && pruneCache(name => !matches(exclude, name));
            },
            // prune post-render after `current` has been updated
            {
              flush: "post",
              deep: true
            });
            let pendingCacheKey = null;
            const cacheSubtree = () => {
              if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
              }
            };
            onMounted(cacheSubtree);
            onUpdated(cacheSubtree);
            onBeforeUnmount(() => {
              cache.forEach(cached => {
                const {
                  subTree,
                  suspense
                } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                  resetShapeFlag(vnode);
                  const da = vnode.component.da;
                  da && queuePostRenderEffect(da, suspense);
                  return;
                }
                unmount(cached);
              });
            });
            return () => {
              pendingCacheKey = null;
              if (!slots.default) {
                return null;
              }
              const children = slots.default();
              const rawVNode = children[0];
              if (children.length > 1) {
                current = null;
                return children;
              } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
              }
              let vnode = getInnerChild(rawVNode);
              const comp = vnode.type;
              const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
              const {
                include,
                exclude,
                max
              } = props;
              if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
              }
              const key = vnode.key == null ? comp : vnode.key;
              const cachedVNode = cache.get(key);
              if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128) {
                  rawVNode.ssContent = vnode;
                }
              }
              pendingCacheKey = key;
              if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                  setTransitionHooks(vnode, vnode.transition);
                }
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
              } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) {
                  pruneCacheEntry(keys.values().next().value);
                }
              }
              vnode.shapeFlag |= 256;
              current = vnode;
              return isSuspense(rawVNode.type) ? rawVNode : vnode;
            };
          }
        };
        const KeepAlive = KeepAliveImpl;
        function matches(pattern, name) {
          if (isArray$2(pattern)) {
            return pattern.some(p => matches(p, name));
          } else if (isString$1(pattern)) {
            return pattern.split(",").includes(name);
          } else if (isRegExp$1(pattern)) {
            return pattern.test(name);
          }
          return false;
        }
        function onActivated(hook, target) {
          registerKeepAliveHook(hook, "a", target);
        }
        function onDeactivated(hook, target) {
          registerKeepAliveHook(hook, "da", target);
        }
        function registerKeepAliveHook(hook, type, target = currentInstance) {
          const wrappedHook = hook.__wdc || (hook.__wdc = () => {
            let current = target;
            while (current) {
              if (current.isDeactivated) {
                return;
              }
              current = current.parent;
            }
            return hook();
          });
          injectHook(type, wrappedHook, target);
          if (target) {
            let current = target.parent;
            while (current && current.parent) {
              if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
              }
              current = current.parent;
            }
          }
        }
        function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
          const injected = injectHook(type, hook, keepAliveRoot, true
          /* prepend */);

          onUnmounted(() => {
            remove(keepAliveRoot[type], injected);
          }, target);
        }
        function resetShapeFlag(vnode) {
          vnode.shapeFlag &= ~256;
          vnode.shapeFlag &= ~512;
        }
        function getInnerChild(vnode) {
          return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
        }
        function injectHook(type, hook, target = currentInstance, prepend = false) {
          if (target) {
            const hooks = target[type] || (target[type] = []);
            const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
              if (target.isUnmounted) {
                return;
              }
              pauseTracking();
              setCurrentInstance(target);
              const res = callWithAsyncErrorHandling(hook, target, type, args);
              unsetCurrentInstance();
              resetTracking();
              return res;
            });
            if (prepend) {
              hooks.unshift(wrappedHook);
            } else {
              hooks.push(wrappedHook);
            }
            return wrappedHook;
          }
        }
        const createHook = lifecycle => (hook, target = currentInstance) =>
        // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
        const onBeforeMount = createHook("bm");
        const onMounted = exports('o', createHook("m"));
        const onBeforeUpdate = createHook("bu");
        const onUpdated = createHook("u");
        const onBeforeUnmount = createHook("bum");
        const onUnmounted = exports('j', createHook("um"));
        const onServerPrefetch = createHook("sp");
        const onRenderTriggered = createHook("rtg");
        const onRenderTracked = createHook("rtc");
        function onErrorCaptured(hook, target = currentInstance) {
          injectHook("ec", hook, target);
        }
        const COMPONENTS = "components";
        function resolveComponent(name, maybeSelfReference) {
          return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
        }
        const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
        function resolveDynamicComponent(component) {
          if (isString$1(component)) {
            return resolveAsset(COMPONENTS, component, false) || component;
          } else {
            return component || NULL_DYNAMIC_COMPONENT;
          }
        }
        function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
          const instance = currentRenderingInstance || currentInstance;
          if (instance) {
            const Component = instance.type;
            if (type === COMPONENTS) {
              const selfName = getComponentName(Component, false
              /* do not include inferred name to avoid breaking existing code */);

              if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
                return Component;
              }
            }
            const res =
            // local registration
            // check instance[type] first which is resolved for options API
            resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
            if (!res && maybeSelfReference) {
              return Component;
            }
            return res;
          }
        }
        function resolve(registry, name) {
          return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
        }
        function renderList(source, renderItem, cache, index) {
          let ret;
          const cached = cache && cache[index];
          if (isArray$2(source) || isString$1(source)) {
            ret = new Array(source.length);
            for (let i = 0, l = source.length; i < l; i++) {
              ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
            }
          } else if (typeof source === "number") {
            ret = new Array(source);
            for (let i = 0; i < source; i++) {
              ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
            }
          } else if (isObject$1(source)) {
            if (source[Symbol.iterator]) {
              ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
            } else {
              const keys = Object.keys(source);
              ret = new Array(keys.length);
              for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
              }
            }
          } else {
            ret = [];
          }
          if (cache) {
            cache[index] = ret;
          }
          return ret;
        }
        const getPublicInstance = i => {
          if (!i) return null;
          if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
          return getPublicInstance(i.parent);
        };
        const publicPropertiesMap =
        // Move PURE marker to new line to workaround compiler discarding it
        // due to type annotation
        /* @__PURE__ */
        extend$1( /* @__PURE__ */Object.create(null), {
          $: i => i,
          $el: i => i.vnode.el,
          $data: i => i.data,
          $props: i => i.props,
          $attrs: i => i.attrs,
          $slots: i => i.slots,
          $refs: i => i.refs,
          $parent: i => getPublicInstance(i.parent),
          $root: i => getPublicInstance(i.root),
          $emit: i => i.emit,
          $options: i => resolveMergedOptions(i),
          $forceUpdate: i => i.f || (i.f = () => queueJob(i.update)),
          $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
          $watch: i => instanceWatch.bind(i)
        });
        const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
        const PublicInstanceProxyHandlers = {
          get({
            _: instance
          }, key) {
            const {
              ctx,
              setupState,
              data,
              props,
              accessCache,
              type,
              appContext
            } = instance;
            let normalizedProps;
            if (key[0] !== "$") {
              const n = accessCache[key];
              if (n !== void 0) {
                switch (n) {
                  case 1 /* SETUP */:
                    return setupState[key];
                  case 2 /* DATA */:
                    return data[key];
                  case 4 /* CONTEXT */:
                    return ctx[key];
                  case 3 /* PROPS */:
                    return props[key];
                }
              } else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */;
                return setupState[key];
              } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */;
                return data[key];
              } else if (
              // only cache other properties when instance has declared (thus stable)
              // props
              (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */;
                return props[key];
              } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */;
                return ctx[key];
              } else if (shouldCacheAccess) {
                accessCache[key] = 0 /* OTHER */;
              }
            }

            const publicGetter = publicPropertiesMap[key];
            let cssModule, globalProperties;
            if (publicGetter) {
              if (key === "$attrs") {
                track(instance, "get", key);
              }
              return publicGetter(instance);
            } else if (
            // css module (injected by vue-loader)
            (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
              return cssModule;
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
              accessCache[key] = 4 /* CONTEXT */;
              return ctx[key];
            } else if (
            // global properties
            globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
              {
                return globalProperties[key];
              }
            } else ;
          },
          set({
            _: instance
          }, key, value) {
            const {
              data,
              setupState,
              ctx
            } = instance;
            if (hasSetupBinding(setupState, key)) {
              setupState[key] = value;
              return true;
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
              data[key] = value;
              return true;
            } else if (hasOwn(instance.props, key)) {
              return false;
            }
            if (key[0] === "$" && key.slice(1) in instance) {
              return false;
            } else {
              {
                ctx[key] = value;
              }
            }
            return true;
          },
          has({
            _: {
              data,
              setupState,
              accessCache,
              ctx,
              appContext,
              propsOptions
            }
          }, key) {
            let normalizedProps;
            return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
          },
          defineProperty(target, key, descriptor) {
            if (descriptor.get != null) {
              target._.accessCache[key] = 0;
            } else if (hasOwn(descriptor, "value")) {
              this.set(target, key, descriptor.value, null);
            }
            return Reflect.defineProperty(target, key, descriptor);
          }
        };
        function normalizePropsOrEmits(props) {
          return isArray$2(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
        }
        let shouldCacheAccess = true;
        function applyOptions(instance) {
          const options = resolveMergedOptions(instance);
          const publicThis = instance.proxy;
          const ctx = instance.ctx;
          shouldCacheAccess = false;
          if (options.beforeCreate) {
            callHook(options.beforeCreate, instance, "bc");
          }
          const {
            // state
            data: dataOptions,
            computed: computedOptions,
            methods,
            watch: watchOptions,
            provide: provideOptions,
            inject: injectOptions,
            // lifecycle
            created,
            beforeMount,
            mounted,
            beforeUpdate,
            updated,
            activated,
            deactivated,
            beforeDestroy,
            beforeUnmount,
            destroyed,
            unmounted,
            render,
            renderTracked,
            renderTriggered,
            errorCaptured,
            serverPrefetch,
            // public API
            expose,
            inheritAttrs,
            // assets
            components,
            directives,
            filters
          } = options;
          const checkDuplicateProperties = null;
          if (injectOptions) {
            resolveInjections(injectOptions, ctx, checkDuplicateProperties);
          }
          if (methods) {
            for (const key in methods) {
              const methodHandler = methods[key];
              if (isFunction$1(methodHandler)) {
                {
                  ctx[key] = methodHandler.bind(publicThis);
                }
              }
            }
          }
          if (dataOptions) {
            const data = dataOptions.call(publicThis, publicThis);
            if (!isObject$1(data)) ;else {
              instance.data = reactive(data);
            }
          }
          shouldCacheAccess = true;
          if (computedOptions) {
            for (const key in computedOptions) {
              const opt = computedOptions[key];
              const get = isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
              const set = !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : NOOP;
              const c = computed({
                get,
                set
              });
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => c.value = v
              });
            }
          }
          if (watchOptions) {
            for (const key in watchOptions) {
              createWatcher(watchOptions[key], ctx, publicThis, key);
            }
          }
          if (provideOptions) {
            const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
            Reflect.ownKeys(provides).forEach(key => {
              provide(key, provides[key]);
            });
          }
          if (created) {
            callHook(created, instance, "c");
          }
          function registerLifecycleHook(register, hook) {
            if (isArray$2(hook)) {
              hook.forEach(_hook => register(_hook.bind(publicThis)));
            } else if (hook) {
              register(hook.bind(publicThis));
            }
          }
          registerLifecycleHook(onBeforeMount, beforeMount);
          registerLifecycleHook(onMounted, mounted);
          registerLifecycleHook(onBeforeUpdate, beforeUpdate);
          registerLifecycleHook(onUpdated, updated);
          registerLifecycleHook(onActivated, activated);
          registerLifecycleHook(onDeactivated, deactivated);
          registerLifecycleHook(onErrorCaptured, errorCaptured);
          registerLifecycleHook(onRenderTracked, renderTracked);
          registerLifecycleHook(onRenderTriggered, renderTriggered);
          registerLifecycleHook(onBeforeUnmount, beforeUnmount);
          registerLifecycleHook(onUnmounted, unmounted);
          registerLifecycleHook(onServerPrefetch, serverPrefetch);
          if (isArray$2(expose)) {
            if (expose.length) {
              const exposed = instance.exposed || (instance.exposed = {});
              expose.forEach(key => {
                Object.defineProperty(exposed, key, {
                  get: () => publicThis[key],
                  set: val => publicThis[key] = val
                });
              });
            } else if (!instance.exposed) {
              instance.exposed = {};
            }
          }
          if (render && instance.render === NOOP) {
            instance.render = render;
          }
          if (inheritAttrs != null) {
            instance.inheritAttrs = inheritAttrs;
          }
          if (components) instance.components = components;
          if (directives) instance.directives = directives;
        }
        function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
          if (isArray$2(injectOptions)) {
            injectOptions = normalizeInject(injectOptions);
          }
          for (const key in injectOptions) {
            const opt = injectOptions[key];
            let injected;
            if (isObject$1(opt)) {
              if ("default" in opt) {
                injected = inject(opt.from || key, opt.default, true
                /* treat default function as factory */);
              } else {
                injected = inject(opt.from || key);
              }
            } else {
              injected = inject(opt);
            }
            if (isRef(injected)) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => injected.value,
                set: v => injected.value = v
              });
            } else {
              ctx[key] = injected;
            }
          }
        }
        function callHook(hook, instance, type) {
          callWithAsyncErrorHandling(isArray$2(hook) ? hook.map(h => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
        }
        function createWatcher(raw, ctx, publicThis, key) {
          const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
          if (isString$1(raw)) {
            const handler = ctx[raw];
            if (isFunction$1(handler)) {
              watch(getter, handler);
            }
          } else if (isFunction$1(raw)) {
            watch(getter, raw.bind(publicThis));
          } else if (isObject$1(raw)) {
            if (isArray$2(raw)) {
              raw.forEach(r => createWatcher(r, ctx, publicThis, key));
            } else {
              const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
              if (isFunction$1(handler)) {
                watch(getter, handler, raw);
              }
            }
          } else ;
        }
        function resolveMergedOptions(instance) {
          const base = instance.type;
          const {
            mixins,
            extends: extendsOptions
          } = base;
          const {
            mixins: globalMixins,
            optionsCache: cache,
            config: {
              optionMergeStrategies
            }
          } = instance.appContext;
          const cached = cache.get(base);
          let resolved;
          if (cached) {
            resolved = cached;
          } else if (!globalMixins.length && !mixins && !extendsOptions) {
            {
              resolved = base;
            }
          } else {
            resolved = {};
            if (globalMixins.length) {
              globalMixins.forEach(m => mergeOptions$1(resolved, m, optionMergeStrategies, true));
            }
            mergeOptions$1(resolved, base, optionMergeStrategies);
          }
          if (isObject$1(base)) {
            cache.set(base, resolved);
          }
          return resolved;
        }
        function mergeOptions$1(to, from, strats, asMixin = false) {
          const {
            mixins,
            extends: extendsOptions
          } = from;
          if (extendsOptions) {
            mergeOptions$1(to, extendsOptions, strats, true);
          }
          if (mixins) {
            mixins.forEach(m => mergeOptions$1(to, m, strats, true));
          }
          for (const key in from) {
            if (asMixin && key === "expose") ;else {
              const strat = internalOptionMergeStrats[key] || strats && strats[key];
              to[key] = strat ? strat(to[key], from[key]) : from[key];
            }
          }
          return to;
        }
        const internalOptionMergeStrats = {
          data: mergeDataFn,
          props: mergeEmitsOrPropsOptions,
          emits: mergeEmitsOrPropsOptions,
          // objects
          methods: mergeObjectOptions,
          computed: mergeObjectOptions,
          // lifecycle
          beforeCreate: mergeAsArray,
          created: mergeAsArray,
          beforeMount: mergeAsArray,
          mounted: mergeAsArray,
          beforeUpdate: mergeAsArray,
          updated: mergeAsArray,
          beforeDestroy: mergeAsArray,
          beforeUnmount: mergeAsArray,
          destroyed: mergeAsArray,
          unmounted: mergeAsArray,
          activated: mergeAsArray,
          deactivated: mergeAsArray,
          errorCaptured: mergeAsArray,
          serverPrefetch: mergeAsArray,
          // assets
          components: mergeObjectOptions,
          directives: mergeObjectOptions,
          // watch
          watch: mergeWatchOptions,
          // provide / inject
          provide: mergeDataFn,
          inject: mergeInject
        };
        function mergeDataFn(to, from) {
          if (!from) {
            return to;
          }
          if (!to) {
            return from;
          }
          return function mergedDataFn() {
            return extend$1(isFunction$1(to) ? to.call(this, this) : to, isFunction$1(from) ? from.call(this, this) : from);
          };
        }
        function mergeInject(to, from) {
          return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
        }
        function normalizeInject(raw) {
          if (isArray$2(raw)) {
            const res = {};
            for (let i = 0; i < raw.length; i++) {
              res[raw[i]] = raw[i];
            }
            return res;
          }
          return raw;
        }
        function mergeAsArray(to, from) {
          return to ? [...new Set([].concat(to, from))] : from;
        }
        function mergeObjectOptions(to, from) {
          return to ? extend$1( /* @__PURE__ */Object.create(null), to, from) : from;
        }
        function mergeEmitsOrPropsOptions(to, from) {
          if (to) {
            if (isArray$2(to) && isArray$2(from)) {
              return [... /* @__PURE__ */new Set([...to, ...from])];
            }
            return extend$1( /* @__PURE__ */Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
          } else {
            return from;
          }
        }
        function mergeWatchOptions(to, from) {
          if (!to) return from;
          if (!from) return to;
          const merged = extend$1( /* @__PURE__ */Object.create(null), to);
          for (const key in from) {
            merged[key] = mergeAsArray(to[key], from[key]);
          }
          return merged;
        }
        function createAppContext() {
          return {
            app: null,
            config: {
              isNativeTag: NO,
              performance: false,
              globalProperties: {},
              optionMergeStrategies: {},
              errorHandler: void 0,
              warnHandler: void 0,
              compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: /* @__PURE__ */Object.create(null),
            optionsCache: /* @__PURE__ */new WeakMap(),
            propsCache: /* @__PURE__ */new WeakMap(),
            emitsCache: /* @__PURE__ */new WeakMap()
          };
        }
        let uid$1 = 0;
        function createAppAPI(render, hydrate) {
          return function createApp(rootComponent, rootProps = null) {
            if (!isFunction$1(rootComponent)) {
              rootComponent = extend$1({}, rootComponent);
            }
            if (rootProps != null && !isObject$1(rootProps)) {
              rootProps = null;
            }
            const context = createAppContext();
            const installedPlugins = /* @__PURE__ */new Set();
            let isMounted = false;
            const app = context.app = {
              _uid: uid$1++,
              _component: rootComponent,
              _props: rootProps,
              _container: null,
              _context: context,
              _instance: null,
              version,
              get config() {
                return context.config;
              },
              set config(v) {},
              use(plugin, ...options) {
                if (installedPlugins.has(plugin)) ;else if (plugin && isFunction$1(plugin.install)) {
                  installedPlugins.add(plugin);
                  plugin.install(app, ...options);
                } else if (isFunction$1(plugin)) {
                  installedPlugins.add(plugin);
                  plugin(app, ...options);
                } else ;
                return app;
              },
              mixin(mixin) {
                {
                  if (!context.mixins.includes(mixin)) {
                    context.mixins.push(mixin);
                  }
                }
                return app;
              },
              component(name, component) {
                if (!component) {
                  return context.components[name];
                }
                context.components[name] = component;
                return app;
              },
              directive(name, directive) {
                if (!directive) {
                  return context.directives[name];
                }
                context.directives[name] = directive;
                return app;
              },
              mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                  const vnode = createVNode(rootComponent, rootProps);
                  vnode.appContext = context;
                  if (isHydrate && hydrate) {
                    hydrate(vnode, rootContainer);
                  } else {
                    render(vnode, rootContainer, isSVG);
                  }
                  isMounted = true;
                  app._container = rootContainer;
                  rootContainer.__vue_app__ = app;
                  return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
              },
              unmount() {
                if (isMounted) {
                  render(null, app._container);
                  delete app._container.__vue_app__;
                }
              },
              provide(key, value) {
                context.provides[key] = value;
                return app;
              },
              runWithContext(fn) {
                currentApp = app;
                try {
                  return fn();
                } finally {
                  currentApp = null;
                }
              }
            };
            return app;
          };
        }
        let currentApp = null;
        function provide(key, value) {
          if (!currentInstance) ;else {
            let provides = currentInstance.provides;
            const parentProvides = currentInstance.parent && currentInstance.parent.provides;
            if (parentProvides === provides) {
              provides = currentInstance.provides = Object.create(parentProvides);
            }
            provides[key] = value;
          }
        }
        function inject(key, defaultValue, treatDefaultAsFactory = false) {
          const instance = currentInstance || currentRenderingInstance;
          if (instance || currentApp) {
            const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
            if (provides && key in provides) {
              return provides[key];
            } else if (arguments.length > 1) {
              return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
            } else ;
          }
        }
        function initProps(instance, rawProps, isStateful, isSSR = false) {
          const props = {};
          const attrs = {};
          def(attrs, InternalObjectKey, 1);
          instance.propsDefaults = /* @__PURE__ */Object.create(null);
          setFullProps(instance, rawProps, props, attrs);
          for (const key in instance.propsOptions[0]) {
            if (!(key in props)) {
              props[key] = void 0;
            }
          }
          if (isStateful) {
            instance.props = isSSR ? props : shallowReactive(props);
          } else {
            if (!instance.type.props) {
              instance.props = attrs;
            } else {
              instance.props = props;
            }
          }
          instance.attrs = attrs;
        }
        function updateProps(instance, rawProps, rawPrevProps, optimized) {
          const {
            props,
            attrs,
            vnode: {
              patchFlag
            }
          } = instance;
          const rawCurrentProps = toRaw(props);
          const [options] = instance.propsOptions;
          let hasAttrsChanged = false;
          if (
          // always force full diff in dev
          // - #1942 if hmr is enabled with sfc component
          // - vite#872 non-sfc component used by sfc component
          (optimized || patchFlag > 0) && !(patchFlag & 16)) {
            if (patchFlag & 8) {
              const propsToUpdate = instance.vnode.dynamicProps;
              for (let i = 0; i < propsToUpdate.length; i++) {
                let key = propsToUpdate[i];
                if (isEmitListener(instance.emitsOptions, key)) {
                  continue;
                }
                const value = rawProps[key];
                if (options) {
                  if (hasOwn(attrs, key)) {
                    if (value !== attrs[key]) {
                      attrs[key] = value;
                      hasAttrsChanged = true;
                    }
                  } else {
                    const camelizedKey = camelize(key);
                    props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
                    /* isAbsent */);
                  }
                } else {
                  if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                  }
                }
              }
            }
          } else {
            if (setFullProps(instance, rawProps, props, attrs)) {
              hasAttrsChanged = true;
            }
            let kebabKey;
            for (const key in rawCurrentProps) {
              if (!rawProps ||
              // for camelCase
              !hasOwn(rawProps, key) && (
              // it's possible the original props was passed in as kebab-case
              // and converted to camelCase (#955)
              (kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
                if (options) {
                  if (rawPrevProps && (
                  // for camelCase
                  rawPrevProps[key] !== void 0 ||
                  // for kebab-case
                  rawPrevProps[kebabKey] !== void 0)) {
                    props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true
                    /* isAbsent */);
                  }
                } else {
                  delete props[key];
                }
              }
            }
            if (attrs !== rawCurrentProps) {
              for (const key in attrs) {
                if (!rawProps || !hasOwn(rawProps, key) && true) {
                  delete attrs[key];
                  hasAttrsChanged = true;
                }
              }
            }
          }
          if (hasAttrsChanged) {
            trigger(instance, "set", "$attrs");
          }
        }
        function setFullProps(instance, rawProps, props, attrs) {
          const [options, needCastKeys] = instance.propsOptions;
          let hasAttrsChanged = false;
          let rawCastValues;
          if (rawProps) {
            for (let key in rawProps) {
              if (isReservedProp(key)) {
                continue;
              }
              const value = rawProps[key];
              let camelKey;
              if (options && hasOwn(options, camelKey = camelize(key))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                  props[camelKey] = value;
                } else {
                  (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
              } else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              }
            }
          }
          if (needCastKeys) {
            const rawCurrentProps = toRaw(props);
            const castValues = rawCastValues || EMPTY_OBJ;
            for (let i = 0; i < needCastKeys.length; i++) {
              const key = needCastKeys[i];
              props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
            }
          }
          return hasAttrsChanged;
        }
        function resolvePropValue(options, props, key, value, instance, isAbsent) {
          const opt = options[key];
          if (opt != null) {
            const hasDefault = hasOwn(opt, "default");
            if (hasDefault && value === void 0) {
              const defaultValue = opt.default;
              if (opt.type !== Function && !opt.skipFactory && isFunction$1(defaultValue)) {
                const {
                  propsDefaults
                } = instance;
                if (key in propsDefaults) {
                  value = propsDefaults[key];
                } else {
                  setCurrentInstance(instance);
                  value = propsDefaults[key] = defaultValue.call(null, props);
                  unsetCurrentInstance();
                }
              } else {
                value = defaultValue;
              }
            }
            if (opt[0 /* shouldCast */]) {
              if (isAbsent && !hasDefault) {
                value = false;
              } else if (opt[1 /* shouldCastTrue */] && (value === "" || value === hyphenate(key))) {
                value = true;
              }
            }
          }
          return value;
        }
        function normalizePropsOptions(comp, appContext, asMixin = false) {
          const cache = appContext.propsCache;
          const cached = cache.get(comp);
          if (cached) {
            return cached;
          }
          const raw = comp.props;
          const normalized = {};
          const needCastKeys = [];
          let hasExtends = false;
          if (!isFunction$1(comp)) {
            const extendProps = raw2 => {
              hasExtends = true;
              const [props, keys] = normalizePropsOptions(raw2, appContext, true);
              extend$1(normalized, props);
              if (keys) needCastKeys.push(...keys);
            };
            if (!asMixin && appContext.mixins.length) {
              appContext.mixins.forEach(extendProps);
            }
            if (comp.extends) {
              extendProps(comp.extends);
            }
            if (comp.mixins) {
              comp.mixins.forEach(extendProps);
            }
          }
          if (!raw && !hasExtends) {
            if (isObject$1(comp)) {
              cache.set(comp, EMPTY_ARR);
            }
            return EMPTY_ARR;
          }
          if (isArray$2(raw)) {
            for (let i = 0; i < raw.length; i++) {
              const normalizedKey = camelize(raw[i]);
              if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
              }
            }
          } else if (raw) {
            for (const key in raw) {
              const normalizedKey = camelize(key);
              if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = isArray$2(opt) || isFunction$1(opt) ? {
                  type: opt
                } : extend$1({}, opt);
                if (prop) {
                  const booleanIndex = getTypeIndex(Boolean, prop.type);
                  const stringIndex = getTypeIndex(String, prop.type);
                  prop[0 /* shouldCast */] = booleanIndex > -1;
                  prop[1 /* shouldCastTrue */] = stringIndex < 0 || booleanIndex < stringIndex;
                  if (booleanIndex > -1 || hasOwn(prop, "default")) {
                    needCastKeys.push(normalizedKey);
                  }
                }
              }
            }
          }
          const res = [normalized, needCastKeys];
          if (isObject$1(comp)) {
            cache.set(comp, res);
          }
          return res;
        }
        function validatePropName(key) {
          if (key[0] !== "$") {
            return true;
          }
          return false;
        }
        function getType(ctor) {
          const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
          return match ? match[2] : ctor === null ? "null" : "";
        }
        function isSameType(a, b) {
          return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
          if (isArray$2(expectedTypes)) {
            return expectedTypes.findIndex(t => isSameType(t, type));
          } else if (isFunction$1(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          return -1;
        }
        const isInternalKey = key => key[0] === "_" || key === "$stable";
        const normalizeSlotValue = value => isArray$2(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
        const normalizeSlot$1 = (key, rawSlot, ctx) => {
          if (rawSlot._n) {
            return rawSlot;
          }
          const normalized = withCtx((...args) => {
            if (!!("production" !== "production") && currentInstance) ;
            return normalizeSlotValue(rawSlot(...args));
          }, ctx);
          normalized._c = false;
          return normalized;
        };
        const normalizeObjectSlots = (rawSlots, slots, instance) => {
          const ctx = rawSlots._ctx;
          for (const key in rawSlots) {
            if (isInternalKey(key)) continue;
            const value = rawSlots[key];
            if (isFunction$1(value)) {
              slots[key] = normalizeSlot$1(key, value, ctx);
            } else if (value != null) {
              const normalized = normalizeSlotValue(value);
              slots[key] = () => normalized;
            }
          }
        };
        const normalizeVNodeSlots = (instance, children) => {
          const normalized = normalizeSlotValue(children);
          instance.slots.default = () => normalized;
        };
        const initSlots = (instance, children) => {
          if (instance.vnode.shapeFlag & 32) {
            const type = children._;
            if (type) {
              instance.slots = toRaw(children);
              def(children, "_", type);
            } else {
              normalizeObjectSlots(children, instance.slots = {});
            }
          } else {
            instance.slots = {};
            if (children) {
              normalizeVNodeSlots(instance, children);
            }
          }
          def(instance.slots, InternalObjectKey, 1);
        };
        const updateSlots = (instance, children, optimized) => {
          const {
            vnode,
            slots
          } = instance;
          let needDeletionCheck = true;
          let deletionComparisonTarget = EMPTY_OBJ;
          if (vnode.shapeFlag & 32) {
            const type = children._;
            if (type) {
              if (optimized && type === 1) {
                needDeletionCheck = false;
              } else {
                extend$1(slots, children);
                if (!optimized && type === 1) {
                  delete slots._;
                }
              }
            } else {
              needDeletionCheck = !children.$stable;
              normalizeObjectSlots(children, slots);
            }
            deletionComparisonTarget = children;
          } else if (children) {
            normalizeVNodeSlots(instance, children);
            deletionComparisonTarget = {
              default: 1
            };
          }
          if (needDeletionCheck) {
            for (const key in slots) {
              if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
              }
            }
          }
        };
        function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
          if (isArray$2(rawRef)) {
            rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$2(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
            return;
          }
          if (isAsyncWrapper(vnode) && !isUnmount) {
            return;
          }
          const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
          const value = isUnmount ? null : refValue;
          const {
            i: owner,
            r: ref
          } = rawRef;
          const oldRef = oldRawRef && oldRawRef.r;
          const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
          const setupState = owner.setupState;
          if (oldRef != null && oldRef !== ref) {
            if (isString$1(oldRef)) {
              refs[oldRef] = null;
              if (hasOwn(setupState, oldRef)) {
                setupState[oldRef] = null;
              }
            } else if (isRef(oldRef)) {
              oldRef.value = null;
            }
          }
          if (isFunction$1(ref)) {
            callWithErrorHandling(ref, owner, 12, [value, refs]);
          } else {
            const _isString = isString$1(ref);
            const _isRef = isRef(ref);
            if (_isString || _isRef) {
              const doSet = () => {
                if (rawRef.f) {
                  const existing = _isString ? hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                  if (isUnmount) {
                    isArray$2(existing) && remove(existing, refValue);
                  } else {
                    if (!isArray$2(existing)) {
                      if (_isString) {
                        refs[ref] = [refValue];
                        if (hasOwn(setupState, ref)) {
                          setupState[ref] = refs[ref];
                        }
                      } else {
                        ref.value = [refValue];
                        if (rawRef.k) refs[rawRef.k] = ref.value;
                      }
                    } else if (!existing.includes(refValue)) {
                      existing.push(refValue);
                    }
                  }
                } else if (_isString) {
                  refs[ref] = value;
                  if (hasOwn(setupState, ref)) {
                    setupState[ref] = value;
                  }
                } else if (_isRef) {
                  ref.value = value;
                  if (rawRef.k) refs[rawRef.k] = value;
                } else ;
              };
              if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
              } else {
                doSet();
              }
            }
          }
        }
        const queuePostRenderEffect = queueEffectWithSuspense;
        function createRenderer(options) {
          return baseCreateRenderer(options);
        }
        function baseCreateRenderer(options, createHydrationFns) {
          const target = getGlobalThis();
          target.__VUE__ = true;
          const {
            insert: hostInsert,
            remove: hostRemove,
            patchProp: hostPatchProp,
            createElement: hostCreateElement,
            createText: hostCreateText,
            createComment: hostCreateComment,
            setText: hostSetText,
            setElementText: hostSetElementText,
            parentNode: hostParentNode,
            nextSibling: hostNextSibling,
            setScopeId: hostSetScopeId = NOOP,
            insertStaticContent: hostInsertStaticContent
          } = options;
          const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
            if (n1 === n2) {
              return;
            }
            if (n1 && !isSameVNodeType(n1, n2)) {
              anchor = getNextHostNode(n1);
              unmount(n1, parentComponent, parentSuspense, true);
              n1 = null;
            }
            if (n2.patchFlag === -2) {
              optimized = false;
              n2.dynamicChildren = null;
            }
            const {
              type,
              ref,
              shapeFlag
            } = n2;
            switch (type) {
              case Text:
                processText(n1, n2, container, anchor);
                break;
              case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
              case Static:
                if (n1 == null) {
                  mountStaticNode(n2, container, anchor, isSVG);
                }
                break;
              case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
              default:
                if (shapeFlag & 1) {
                  processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                  processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                } else if (shapeFlag & 64) {
                  type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                } else if (shapeFlag & 128) {
                  type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                } else ;
            }
            if (ref != null && parentComponent) {
              setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
            }
          };
          const processText = (n1, n2, container, anchor) => {
            if (n1 == null) {
              hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
            } else {
              const el = n2.el = n1.el;
              if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
              }
            }
          };
          const processCommentNode = (n1, n2, container, anchor) => {
            if (n1 == null) {
              hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
            } else {
              n2.el = n1.el;
            }
          };
          const mountStaticNode = (n2, container, anchor, isSVG) => {
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
          };
          const moveStaticNode = ({
            el,
            anchor
          }, container, nextSibling) => {
            let next;
            while (el && el !== anchor) {
              next = hostNextSibling(el);
              hostInsert(el, container, nextSibling);
              el = next;
            }
            hostInsert(anchor, container, nextSibling);
          };
          const removeStaticNode = ({
            el,
            anchor
          }) => {
            let next;
            while (el && el !== anchor) {
              next = hostNextSibling(el);
              hostRemove(el);
              el = next;
            }
            hostRemove(anchor);
          };
          const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            isSVG = isSVG || n2.type === "svg";
            if (n1 == null) {
              mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
          };
          const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            let el;
            let vnodeHook;
            const {
              type,
              props,
              shapeFlag,
              transition,
              dirs
            } = vnode;
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            if (shapeFlag & 8) {
              hostSetElementText(el, vnode.children);
            } else if (shapeFlag & 16) {
              mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
            if (props) {
              for (const key in props) {
                if (key !== "value" && !isReservedProp(key)) {
                  hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
              if ("value" in props) {
                hostPatchProp(el, "value", null, props.value);
              }
              if (vnodeHook = props.onVnodeBeforeMount) {
                invokeVNodeHook(vnodeHook, parentComponent, vnode);
              }
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            }
            const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
            if (needCallTransitionHooks) {
              transition.beforeEnter(el);
            }
            hostInsert(el, container, anchor);
            if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
              queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
              }, parentSuspense);
            }
          };
          const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
            if (scopeId) {
              hostSetScopeId(el, scopeId);
            }
            if (slotScopeIds) {
              for (let i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
              }
            }
            if (parentComponent) {
              let subTree = parentComponent.subTree;
              if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
              }
            }
          };
          const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
            for (let i = start; i < children.length; i++) {
              const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
              patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
          };
          const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            const el = n2.el = n1.el;
            let {
              patchFlag,
              dynamicChildren,
              dirs
            } = n2;
            patchFlag |= n1.patchFlag & 16;
            const oldProps = n1.props || EMPTY_OBJ;
            const newProps = n2.props || EMPTY_OBJ;
            let vnodeHook;
            parentComponent && toggleRecurse(parentComponent, false);
            if (vnodeHook = newProps.onVnodeBeforeUpdate) {
              invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            }
            if (dirs) {
              invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
            }
            parentComponent && toggleRecurse(parentComponent, true);
            const areChildrenSVG = isSVG && n2.type !== "foreignObject";
            if (dynamicChildren) {
              patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            } else if (!optimized) {
              patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
            }
            if (patchFlag > 0) {
              if (patchFlag & 16) {
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
              } else {
                if (patchFlag & 2) {
                  if (oldProps.class !== newProps.class) {
                    hostPatchProp(el, "class", null, newProps.class, isSVG);
                  }
                }
                if (patchFlag & 4) {
                  hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
                }
                if (patchFlag & 8) {
                  const propsToUpdate = n2.dynamicProps;
                  for (let i = 0; i < propsToUpdate.length; i++) {
                    const key = propsToUpdate[i];
                    const prev = oldProps[key];
                    const next = newProps[key];
                    if (next !== prev || key === "value") {
                      hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                  }
                }
              }
              if (patchFlag & 1) {
                if (n1.children !== n2.children) {
                  hostSetElementText(el, n2.children);
                }
              }
            } else if (!optimized && dynamicChildren == null) {
              patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
              queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
              }, parentSuspense);
            }
          };
          const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
            for (let i = 0; i < newChildren.length; i++) {
              const oldVNode = oldChildren[i];
              const newVNode = newChildren[i];
              const container =
              // oldVNode may be an errored async setup() component inside Suspense
              // which will not have a mounted element
              oldVNode.el && (
              // - In the case of a Fragment, we need to provide the actual parent
              // of the Fragment itself so it can move its children.
              oldVNode.type === Fragment ||
              // - In the case of different nodes, there is going to be a replacement
              // which also requires the correct parent container
              !isSameVNodeType(oldVNode, newVNode) ||
              // - In the case of a component, it could contain anything.
              oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) :
              // In other cases, the parent container is not actually used so we
              // just pass the block element here to avoid a DOM parentNode call.
              fallbackContainer;
              patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
            }
          };
          const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
            if (oldProps !== newProps) {
              if (oldProps !== EMPTY_OBJ) {
                for (const key in oldProps) {
                  if (!isReservedProp(key) && !(key in newProps)) {
                    hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                  }
                }
              }
              for (const key in newProps) {
                if (isReservedProp(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev && key !== "value") {
                  hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
              if ("value" in newProps) {
                hostPatchProp(el, "value", oldProps.value, newProps.value);
              }
            }
          };
          const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
            const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
            let {
              patchFlag,
              dynamicChildren,
              slotScopeIds: fragmentSlotScopeIds
            } = n2;
            if (fragmentSlotScopeIds) {
              slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
            }
            if (n1 == null) {
              hostInsert(fragmentStartAnchor, container, anchor);
              hostInsert(fragmentEndAnchor, container, anchor);
              mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              if (patchFlag > 0 && patchFlag & 64 && dynamicChildren &&
              // #2715 the previous fragment could've been a BAILed one as a result
              // of renderSlot() with no valid children
              n1.dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null || parentComponent && n2 === parentComponent.subTree) {
                  traverseStaticChildren(n1, n2, true
                  /* shallow */);
                }
              } else {
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              }
            }
          };
          const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            n2.slotScopeIds = slotScopeIds;
            if (n1 == null) {
              if (n2.shapeFlag & 512) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
              } else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
              }
            } else {
              updateComponent(n1, n2, optimized);
            }
          };
          const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
            const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
            if (isKeepAlive(initialVNode)) {
              instance.ctx.renderer = internals;
            }
            {
              setupComponent(instance);
            }
            if (instance.asyncDep) {
              parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
              if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
              }
              return;
            }
            setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
          };
          const updateComponent = (n1, n2, optimized) => {
            const instance = n2.component = n1.component;
            if (shouldUpdateComponent(n1, n2, optimized)) {
              if (instance.asyncDep && !instance.asyncResolved) {
                updateComponentPreRender(instance, n2, optimized);
                return;
              } else {
                instance.next = n2;
                invalidateJob(instance.update);
                instance.update();
              }
            } else {
              n2.el = n1.el;
              instance.vnode = n2;
            }
          };
          const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
            const componentUpdateFn = () => {
              if (!instance.isMounted) {
                let vnodeHook;
                const {
                  el,
                  props
                } = initialVNode;
                const {
                  bm,
                  m,
                  parent
                } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                if (bm) {
                  invokeArrayFns(bm);
                }
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
                  invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                  const hydrateSubTree = () => {
                    instance.subTree = renderComponentRoot(instance);
                    hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                  };
                  if (isAsyncWrapperVNode) {
                    initialVNode.type.__asyncLoader().then(
                    // note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    () => !instance.isUnmounted && hydrateSubTree());
                  } else {
                    hydrateSubTree();
                  }
                } else {
                  const subTree = instance.subTree = renderComponentRoot(instance);
                  patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                  initialVNode.el = subTree.el;
                }
                if (m) {
                  queuePostRenderEffect(m, parentSuspense);
                }
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                  const scopedInitialVNode = initialVNode;
                  queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
                  instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                }
                instance.isMounted = true;
                initialVNode = container = anchor = null;
              } else {
                let {
                  next,
                  bu,
                  u,
                  parent,
                  vnode
                } = instance;
                let originNext = next;
                let vnodeHook;
                toggleRecurse(instance, false);
                if (next) {
                  next.el = vnode.el;
                  updateComponentPreRender(instance, next, optimized);
                } else {
                  next = vnode;
                }
                if (bu) {
                  invokeArrayFns(bu);
                }
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
                  invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                toggleRecurse(instance, true);
                const nextTree = renderComponentRoot(instance);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                patch(prevTree, nextTree,
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el),
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                next.el = nextTree.el;
                if (originNext === null) {
                  updateHOCHostEl(instance, nextTree.el);
                }
                if (u) {
                  queuePostRenderEffect(u, parentSuspense);
                }
                if (vnodeHook = next.props && next.props.onVnodeUpdated) {
                  queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                }
              }
            };
            const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope
            // track it in component's effect scope
            );

            const update = instance.update = () => effect.run();
            update.id = instance.uid;
            toggleRecurse(instance, true);
            update();
          };
          const updateComponentPreRender = (instance, nextVNode, optimized) => {
            nextVNode.component = instance;
            const prevProps = instance.vnode.props;
            instance.vnode = nextVNode;
            instance.next = null;
            updateProps(instance, nextVNode.props, prevProps, optimized);
            updateSlots(instance, nextVNode.children, optimized);
            pauseTracking();
            flushPreFlushCbs();
            resetTracking();
          };
          const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
            const c1 = n1 && n1.children;
            const prevShapeFlag = n1 ? n1.shapeFlag : 0;
            const c2 = n2.children;
            const {
              patchFlag,
              shapeFlag
            } = n2;
            if (patchFlag > 0) {
              if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
              } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
              }
            }
            if (shapeFlag & 8) {
              if (prevShapeFlag & 16) {
                unmountChildren(c1, parentComponent, parentSuspense);
              }
              if (c2 !== c1) {
                hostSetElementText(container, c2);
              }
            } else {
              if (prevShapeFlag & 16) {
                if (shapeFlag & 16) {
                  patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                } else {
                  unmountChildren(c1, parentComponent, parentSuspense, true);
                }
              } else {
                if (prevShapeFlag & 8) {
                  hostSetElementText(container, "");
                }
                if (shapeFlag & 16) {
                  mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
              }
            }
          };
          const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            c1 = c1 || EMPTY_ARR;
            c2 = c2 || EMPTY_ARR;
            const oldLength = c1.length;
            const newLength = c2.length;
            const commonLength = Math.min(oldLength, newLength);
            let i;
            for (i = 0; i < commonLength; i++) {
              const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            if (oldLength > newLength) {
              unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
            } else {
              mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
            }
          };
          const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
            let i = 0;
            const l2 = c2.length;
            let e1 = c1.length - 1;
            let e2 = l2 - 1;
            while (i <= e1 && i <= e2) {
              const n1 = c1[i];
              const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else {
                break;
              }
              i++;
            }
            while (i <= e1 && i <= e2) {
              const n1 = c1[e1];
              const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
              if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              } else {
                break;
              }
              e1--;
              e2--;
            }
            if (i > e1) {
              if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                  patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  i++;
                }
              }
            } else if (i > e2) {
              while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
              }
            } else {
              const s1 = i;
              const s2 = i;
              const keyToNewIndexMap = /* @__PURE__ */new Map();
              for (i = s2; i <= e2; i++) {
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                  keyToNewIndexMap.set(nextChild.key, i);
                }
              }
              let j;
              let patched = 0;
              const toBePatched = e2 - s2 + 1;
              let moved = false;
              let maxNewIndexSoFar = 0;
              const newIndexToOldIndexMap = new Array(toBePatched);
              for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
              for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                  unmount(prevChild, parentComponent, parentSuspense, true);
                  continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                  newIndex = keyToNewIndexMap.get(prevChild.key);
                } else {
                  for (j = s2; j <= e2; j++) {
                    if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                      newIndex = j;
                      break;
                    }
                  }
                }
                if (newIndex === void 0) {
                  unmount(prevChild, parentComponent, parentSuspense, true);
                } else {
                  newIndexToOldIndexMap[newIndex - s2] = i + 1;
                  if (newIndex >= maxNewIndexSoFar) {
                    maxNewIndexSoFar = newIndex;
                  } else {
                    moved = true;
                  }
                  patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                  patched++;
                }
              }
              const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
              j = increasingNewIndexSequence.length - 1;
              for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                  patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                } else if (moved) {
                  if (j < 0 || i !== increasingNewIndexSequence[j]) {
                    move(nextChild, container, anchor, 2);
                  } else {
                    j--;
                  }
                }
              }
            }
          };
          const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
            const {
              el,
              type,
              transition,
              children,
              shapeFlag
            } = vnode;
            if (shapeFlag & 6) {
              move(vnode.component.subTree, container, anchor, moveType);
              return;
            }
            if (shapeFlag & 128) {
              vnode.suspense.move(container, anchor, moveType);
              return;
            }
            if (shapeFlag & 64) {
              type.move(vnode, container, anchor, internals);
              return;
            }
            if (type === Fragment) {
              hostInsert(el, container, anchor);
              for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
              }
              hostInsert(vnode.anchor, container, anchor);
              return;
            }
            if (type === Static) {
              moveStaticNode(vnode, container, anchor);
              return;
            }
            const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
            if (needTransition) {
              if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
              } else {
                const {
                  leave,
                  delayLeave,
                  afterLeave
                } = transition;
                const remove2 = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                  leave(el, () => {
                    remove2();
                    afterLeave && afterLeave();
                  });
                };
                if (delayLeave) {
                  delayLeave(el, remove2, performLeave);
                } else {
                  performLeave();
                }
              }
            } else {
              hostInsert(el, container, anchor);
            }
          };
          const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
            const {
              type,
              props,
              ref,
              children,
              dynamicChildren,
              shapeFlag,
              patchFlag,
              dirs
            } = vnode;
            if (ref != null) {
              setRef(ref, null, parentSuspense, vnode, true);
            }
            if (shapeFlag & 256) {
              parentComponent.ctx.deactivate(vnode);
              return;
            }
            const shouldInvokeDirs = shapeFlag & 1 && dirs;
            const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
            let vnodeHook;
            if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
              invokeVNodeHook(vnodeHook, parentComponent, vnode);
            }
            if (shapeFlag & 6) {
              unmountComponent(vnode.component, parentSuspense, doRemove);
            } else {
              if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
              }
              if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
              }
              if (shapeFlag & 64) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
              } else if (dynamicChildren && (
              // #1153: fast path should not be taken for non-stable (v-for) fragments
              type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
              } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
                unmountChildren(children, parentComponent, parentSuspense);
              }
              if (doRemove) {
                remove(vnode);
              }
            }
            if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
              queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
              }, parentSuspense);
            }
          };
          const remove = vnode => {
            const {
              type,
              el,
              anchor,
              transition
            } = vnode;
            if (type === Fragment) {
              {
                removeFragment(el, anchor);
              }
              return;
            }
            if (type === Static) {
              removeStaticNode(vnode);
              return;
            }
            const performRemove = () => {
              hostRemove(el);
              if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
              }
            };
            if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
              const {
                leave,
                delayLeave
              } = transition;
              const performLeave = () => leave(el, performRemove);
              if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
              } else {
                performLeave();
              }
            } else {
              performRemove();
            }
          };
          const removeFragment = (cur, end) => {
            let next;
            while (cur !== end) {
              next = hostNextSibling(cur);
              hostRemove(cur);
              cur = next;
            }
            hostRemove(end);
          };
          const unmountComponent = (instance, parentSuspense, doRemove) => {
            const {
              bum,
              scope,
              update,
              subTree,
              um
            } = instance;
            if (bum) {
              invokeArrayFns(bum);
            }
            scope.stop();
            if (update) {
              update.active = false;
              unmount(subTree, instance, parentSuspense, doRemove);
            }
            if (um) {
              queuePostRenderEffect(um, parentSuspense);
            }
            queuePostRenderEffect(() => {
              instance.isUnmounted = true;
            }, parentSuspense);
            if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
              parentSuspense.deps--;
              if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
              }
            }
          };
          const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
            for (let i = start; i < children.length; i++) {
              unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
            }
          };
          const getNextHostNode = vnode => {
            if (vnode.shapeFlag & 6) {
              return getNextHostNode(vnode.component.subTree);
            }
            if (vnode.shapeFlag & 128) {
              return vnode.suspense.next();
            }
            return hostNextSibling(vnode.anchor || vnode.el);
          };
          const render = (vnode, container, isSVG) => {
            if (vnode == null) {
              if (container._vnode) {
                unmount(container._vnode, null, null, true);
              }
            } else {
              patch(container._vnode || null, vnode, container, null, null, null, isSVG);
            }
            flushPreFlushCbs();
            flushPostFlushCbs();
            container._vnode = vnode;
          };
          const internals = {
            p: patch,
            um: unmount,
            m: move,
            r: remove,
            mt: mountComponent,
            mc: mountChildren,
            pc: patchChildren,
            pbc: patchBlockChildren,
            n: getNextHostNode,
            o: options
          };
          let hydrate;
          let hydrateNode;
          if (createHydrationFns) {
            [hydrate, hydrateNode] = createHydrationFns(internals);
          }
          return {
            render,
            hydrate,
            createApp: createAppAPI(render, hydrate)
          };
        }
        function toggleRecurse({
          effect,
          update
        }, allowed) {
          effect.allowRecurse = update.allowRecurse = allowed;
        }
        function traverseStaticChildren(n1, n2, shallow = false) {
          const ch1 = n1.children;
          const ch2 = n2.children;
          if (isArray$2(ch1) && isArray$2(ch2)) {
            for (let i = 0; i < ch1.length; i++) {
              const c1 = ch1[i];
              let c2 = ch2[i];
              if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                  c2 = ch2[i] = cloneIfMounted(ch2[i]);
                  c2.el = c1.el;
                }
                if (!shallow) traverseStaticChildren(c1, c2);
              }
              if (c2.type === Text) {
                c2.el = c1.el;
              }
            }
          }
        }
        function getSequence(arr) {
          const p = arr.slice();
          const result = [0];
          let i, j, u, v, c;
          const len = arr.length;
          for (i = 0; i < len; i++) {
            const arrI = arr[i];
            if (arrI !== 0) {
              j = result[result.length - 1];
              if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
              }
              u = 0;
              v = result.length - 1;
              while (u < v) {
                c = u + v >> 1;
                if (arr[result[c]] < arrI) {
                  u = c + 1;
                } else {
                  v = c;
                }
              }
              if (arrI < arr[result[u]]) {
                if (u > 0) {
                  p[i] = result[u - 1];
                }
                result[u] = i;
              }
            }
          }
          u = result.length;
          v = result[u - 1];
          while (u-- > 0) {
            result[u] = v;
            v = p[v];
          }
          return result;
        }
        const isTeleport = type => type.__isTeleport;
        const Fragment = exports('F', Symbol.for("v-fgt"));
        const Text = Symbol.for("v-txt");
        const Comment = Symbol.for("v-cmt");
        const Static = Symbol.for("v-stc");
        const blockStack = [];
        let currentBlock = null;
        function openBlock(disableTracking = false) {
          blockStack.push(currentBlock = disableTracking ? null : []);
        }
        function closeBlock() {
          blockStack.pop();
          currentBlock = blockStack[blockStack.length - 1] || null;
        }
        let isBlockTreeEnabled = 1;
        function setBlockTracking(value) {
          isBlockTreeEnabled += value;
        }
        function setupBlock(vnode) {
          vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
          closeBlock();
          if (isBlockTreeEnabled > 0 && currentBlock) {
            currentBlock.push(vnode);
          }
          return vnode;
        }
        function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
          return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true
          /* isBlock */));
        }

        function createBlock(type, props, children, patchFlag, dynamicProps) {
          return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true
          /* isBlock: prevent a block from tracking itself */));
        }

        function isVNode(value) {
          return value ? value.__v_isVNode === true : false;
        }
        function isSameVNodeType(n1, n2) {
          return n1.type === n2.type && n1.key === n2.key;
        }
        const InternalObjectKey = `__vInternal`;
        const normalizeKey = ({
          key
        }) => key != null ? key : null;
        const normalizeRef = ({
          ref,
          ref_key,
          ref_for
        }) => {
          if (typeof ref === "number") {
            ref = "" + ref;
          }
          return ref != null ? isString$1(ref) || isRef(ref) || isFunction$1(ref) ? {
            i: currentRenderingInstance,
            r: ref,
            k: ref_key,
            f: !!ref_for
          } : ref : null;
        };
        function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
          const vnode = {
            __v_isVNode: true,
            __v_skip: true,
            type,
            props,
            key: props && normalizeKey(props),
            ref: props && normalizeRef(props),
            scopeId: currentScopeId,
            slotScopeIds: null,
            children,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag,
            patchFlag,
            dynamicProps,
            dynamicChildren: null,
            appContext: null,
            ctx: currentRenderingInstance
          };
          if (needFullChildrenNormalization) {
            normalizeChildren(vnode, children);
            if (shapeFlag & 128) {
              type.normalize(vnode);
            }
          } else if (children) {
            vnode.shapeFlag |= isString$1(children) ? 8 : 16;
          }
          if (isBlockTreeEnabled > 0 &&
          // avoid a block node from tracking itself
          !isBlockNode &&
          // has current parent block
          currentBlock && (
          // presence of a patch flag indicates this node needs patching on updates.
          // component nodes also should always be patched, because even if the
          // component doesn't need to update, it needs to persist the instance on to
          // the next vnode so that it can be properly unmounted later.
          vnode.patchFlag > 0 || shapeFlag & 6) &&
          // the EVENTS flag is only for hydration and if it is the only flag, the
          // vnode should not be considered dynamic due to handler caching.
          vnode.patchFlag !== 32) {
            currentBlock.push(vnode);
          }
          return vnode;
        }
        const createVNode = exports('e', _createVNode);
        function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
          if (!type || type === NULL_DYNAMIC_COMPONENT) {
            type = Comment;
          }
          if (isVNode(type)) {
            const cloned = cloneVNode(type, props, true
            /* mergeRef: true */);

            if (children) {
              normalizeChildren(cloned, children);
            }
            if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
              if (cloned.shapeFlag & 6) {
                currentBlock[currentBlock.indexOf(type)] = cloned;
              } else {
                currentBlock.push(cloned);
              }
            }
            cloned.patchFlag |= -2;
            return cloned;
          }
          if (isClassComponent(type)) {
            type = type.__vccOpts;
          }
          if (props) {
            props = guardReactiveProps(props);
            let {
              class: klass,
              style
            } = props;
            if (klass && !isString$1(klass)) {
              props.class = normalizeClass(klass);
            }
            if (isObject$1(style)) {
              if (isProxy(style) && !isArray$2(style)) {
                style = extend$1({}, style);
              }
              props.style = normalizeStyle(style);
            }
          }
          const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction$1(type) ? 2 : 0;
          return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
        }
        function guardReactiveProps(props) {
          if (!props) return null;
          return isProxy(props) || InternalObjectKey in props ? extend$1({}, props) : props;
        }
        function cloneVNode(vnode, extraProps, mergeRef = false) {
          const {
            props,
            ref,
            patchFlag,
            children
          } = vnode;
          const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
          const cloned = {
            __v_isVNode: true,
            __v_skip: true,
            type: vnode.type,
            props: mergedProps,
            key: mergedProps && normalizeKey(mergedProps),
            ref: extraProps && extraProps.ref ?
            // #2078 in the case of <component :is="vnode" ref="extra"/>
            // if the vnode itself already has a ref, cloneVNode will need to merge
            // the refs so the single vnode can be set on multiple refs
            mergeRef && ref ? isArray$2(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
            scopeId: vnode.scopeId,
            slotScopeIds: vnode.slotScopeIds,
            children: children,
            target: vnode.target,
            targetAnchor: vnode.targetAnchor,
            staticCount: vnode.staticCount,
            shapeFlag: vnode.shapeFlag,
            // if the vnode is cloned with extra props, we can no longer assume its
            // existing patch flag to be reliable and need to add the FULL_PROPS flag.
            // note: preserve flag for fragments since they use the flag for children
            // fast paths only.
            patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
            dynamicProps: vnode.dynamicProps,
            dynamicChildren: vnode.dynamicChildren,
            appContext: vnode.appContext,
            dirs: vnode.dirs,
            transition: vnode.transition,
            // These should technically only be non-null on mounted VNodes. However,
            // they *should* be copied for kept-alive vnodes. So we just always copy
            // them since them being non-null during a mount doesn't affect the logic as
            // they will simply be overwritten.
            component: vnode.component,
            suspense: vnode.suspense,
            ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
            ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
            el: vnode.el,
            anchor: vnode.anchor,
            ctx: vnode.ctx,
            ce: vnode.ce
          };
          return cloned;
        }
        function createTextVNode(text = " ", flag = 0) {
          return createVNode(Text, null, text, flag);
        }
        function createCommentVNode(text = "", asBlock = false) {
          return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
        }
        function normalizeVNode(child) {
          if (child == null || typeof child === "boolean") {
            return createVNode(Comment);
          } else if (isArray$2(child)) {
            return createVNode(Fragment, null,
            // #3666, avoid reference pollution when reusing vnode
            child.slice());
          } else if (typeof child === "object") {
            return cloneIfMounted(child);
          } else {
            return createVNode(Text, null, String(child));
          }
        }
        function cloneIfMounted(child) {
          return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
        }
        function normalizeChildren(vnode, children) {
          let type = 0;
          const {
            shapeFlag
          } = vnode;
          if (children == null) {
            children = null;
          } else if (isArray$2(children)) {
            type = 16;
          } else if (typeof children === "object") {
            if (shapeFlag & (1 | 64)) {
              const slot = children.default;
              if (slot) {
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
              }
              return;
            } else {
              type = 32;
              const slotFlag = children._;
              if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
              } else if (slotFlag === 3 && currentRenderingInstance) {
                if (currentRenderingInstance.slots._ === 1) {
                  children._ = 1;
                } else {
                  children._ = 2;
                  vnode.patchFlag |= 1024;
                }
              }
            }
          } else if (isFunction$1(children)) {
            children = {
              default: children,
              _ctx: currentRenderingInstance
            };
            type = 32;
          } else {
            children = String(children);
            if (shapeFlag & 64) {
              type = 16;
              children = [createTextVNode(children)];
            } else {
              type = 8;
            }
          }
          vnode.children = children;
          vnode.shapeFlag |= type;
        }
        function mergeProps(...args) {
          const ret = {};
          for (let i = 0; i < args.length; i++) {
            const toMerge = args[i];
            for (const key in toMerge) {
              if (key === "class") {
                if (ret.class !== toMerge.class) {
                  ret.class = normalizeClass([ret.class, toMerge.class]);
                }
              } else if (key === "style") {
                ret.style = normalizeStyle([ret.style, toMerge.style]);
              } else if (isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !(isArray$2(existing) && existing.includes(incoming))) {
                  ret[key] = existing ? [].concat(existing, incoming) : incoming;
                }
              } else if (key !== "") {
                ret[key] = toMerge[key];
              }
            }
          }
          return ret;
        }
        function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
          callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
        }
        const emptyAppContext = createAppContext();
        let uid = 0;
        function createComponentInstance(vnode, parent, suspense) {
          const type = vnode.type;
          const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
          const instance = {
            uid: uid++,
            vnode,
            type,
            parent,
            appContext,
            root: null,
            // to be immediately set
            next: null,
            subTree: null,
            // will be set synchronously right after creation
            effect: null,
            update: null,
            // will be set synchronously right after creation
            scope: new EffectScope(true
            /* detached */),

            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: parent ? parent.provides : Object.create(appContext.provides),
            accessCache: null,
            renderCache: [],
            // local resolved assets
            components: null,
            directives: null,
            // resolved props and emits options
            propsOptions: normalizePropsOptions(type, appContext),
            emitsOptions: normalizeEmitsOptions(type, appContext),
            // emit
            emit: null,
            // to be set immediately
            emitted: null,
            // props default value
            propsDefaults: EMPTY_OBJ,
            // inheritAttrs
            inheritAttrs: type.inheritAttrs,
            // state
            ctx: EMPTY_OBJ,
            data: EMPTY_OBJ,
            props: EMPTY_OBJ,
            attrs: EMPTY_OBJ,
            slots: EMPTY_OBJ,
            refs: EMPTY_OBJ,
            setupState: EMPTY_OBJ,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            // suspense related
            suspense,
            suspenseId: suspense ? suspense.pendingId : 0,
            asyncDep: null,
            asyncResolved: false,
            // lifecycle hooks
            // not using enums here because it results in computed properties
            isMounted: false,
            isUnmounted: false,
            isDeactivated: false,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
          };
          {
            instance.ctx = {
              _: instance
            };
          }
          instance.root = parent ? parent.root : instance;
          instance.emit = emit.bind(null, instance);
          if (vnode.ce) {
            vnode.ce(instance);
          }
          return instance;
        }
        let currentInstance = null;
        const getCurrentInstance = () => currentInstance || currentRenderingInstance;
        let internalSetCurrentInstance;
        let globalCurrentInstanceSetters;
        let settersKey = "__VUE_INSTANCE_SETTERS__";
        {
          if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
            globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
          }
          globalCurrentInstanceSetters.push(i => currentInstance = i);
          internalSetCurrentInstance = instance => {
            if (globalCurrentInstanceSetters.length > 1) {
              globalCurrentInstanceSetters.forEach(s => s(instance));
            } else {
              globalCurrentInstanceSetters[0](instance);
            }
          };
        }
        const setCurrentInstance = instance => {
          internalSetCurrentInstance(instance);
          instance.scope.on();
        };
        const unsetCurrentInstance = () => {
          currentInstance && currentInstance.scope.off();
          internalSetCurrentInstance(null);
        };
        function isStatefulComponent(instance) {
          return instance.vnode.shapeFlag & 4;
        }
        let isInSSRComponentSetup = false;
        function setupComponent(instance, isSSR = false) {
          isInSSRComponentSetup = isSSR;
          const {
            props,
            children
          } = instance.vnode;
          const isStateful = isStatefulComponent(instance);
          initProps(instance, props, isStateful, isSSR);
          initSlots(instance, children);
          const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
          isInSSRComponentSetup = false;
          return setupResult;
        }
        function setupStatefulComponent(instance, isSSR) {
          const Component = instance.type;
          instance.accessCache = /* @__PURE__ */Object.create(null);
          instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
          const {
            setup
          } = Component;
          if (setup) {
            const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
            setCurrentInstance(instance);
            pauseTracking();
            const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
            resetTracking();
            unsetCurrentInstance();
            if (isPromise(setupResult)) {
              setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
              if (isSSR) {
                return setupResult.then(resolvedResult => {
                  handleSetupResult(instance, resolvedResult, isSSR);
                }).catch(e => {
                  handleError(e, instance, 0);
                });
              } else {
                instance.asyncDep = setupResult;
              }
            } else {
              handleSetupResult(instance, setupResult, isSSR);
            }
          } else {
            finishComponentSetup(instance, isSSR);
          }
        }
        function handleSetupResult(instance, setupResult, isSSR) {
          if (isFunction$1(setupResult)) {
            if (instance.type.__ssrInlineRender) {
              instance.ssrRender = setupResult;
            } else {
              instance.render = setupResult;
            }
          } else if (isObject$1(setupResult)) {
            instance.setupState = proxyRefs(setupResult);
          } else ;
          finishComponentSetup(instance, isSSR);
        }
        let compile;
        function finishComponentSetup(instance, isSSR, skipOptions) {
          const Component = instance.type;
          if (!instance.render) {
            if (!isSSR && compile && !Component.render) {
              const template = Component.template || resolveMergedOptions(instance).template;
              if (template) {
                const {
                  isCustomElement,
                  compilerOptions
                } = instance.appContext.config;
                const {
                  delimiters,
                  compilerOptions: componentCompilerOptions
                } = Component;
                const finalCompilerOptions = extend$1(extend$1({
                  isCustomElement,
                  delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
              }
            }
            instance.render = Component.render || NOOP;
          }
          {
            setCurrentInstance(instance);
            pauseTracking();
            applyOptions(instance);
            resetTracking();
            unsetCurrentInstance();
          }
        }
        function getAttrsProxy(instance) {
          return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
            get(target, key) {
              track(instance, "get", "$attrs");
              return target[key];
            }
          }));
        }
        function createSetupContext(instance) {
          const expose = exposed => {
            instance.exposed = exposed || {};
          };
          {
            return {
              get attrs() {
                return getAttrsProxy(instance);
              },
              slots: instance.slots,
              emit: instance.emit,
              expose
            };
          }
        }
        function getExposeProxy(instance) {
          if (instance.exposed) {
            return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
              get(target, key) {
                if (key in target) {
                  return target[key];
                } else if (key in publicPropertiesMap) {
                  return publicPropertiesMap[key](instance);
                }
              },
              has(target, key) {
                return key in target || key in publicPropertiesMap;
              }
            }));
          }
        }
        function getComponentName(Component, includeInferred = true) {
          return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
        }
        function isClassComponent(value) {
          return isFunction$1(value) && "__vccOpts" in value;
        }
        const computed = (getterOrOptions, debugOptions) => {
          return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
        };
        function h(type, propsOrChildren, children) {
          const l = arguments.length;
          if (l === 2) {
            if (isObject$1(propsOrChildren) && !isArray$2(propsOrChildren)) {
              if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
              }
              return createVNode(type, propsOrChildren);
            } else {
              return createVNode(type, null, propsOrChildren);
            }
          } else {
            if (l > 3) {
              children = Array.prototype.slice.call(arguments, 2);
            } else if (l === 3 && isVNode(children)) {
              children = [children];
            }
            return createVNode(type, propsOrChildren, children);
          }
        }
        const ssrContextKey = Symbol.for("v-scx");
        const useSSRContext = () => {
          {
            const ctx = inject(ssrContextKey);
            return ctx;
          }
        };
        const version = "3.3.4";
        const svgNS = "http://www.w3.org/2000/svg";
        const doc = typeof document !== "undefined" ? document : null;
        const templateContainer = doc && /* @__PURE__ */doc.createElement("template");
        const nodeOps = {
          insert: (child, parent, anchor) => {
            parent.insertBefore(child, anchor || null);
          },
          remove: child => {
            const parent = child.parentNode;
            if (parent) {
              parent.removeChild(child);
            }
          },
          createElement: (tag, isSVG, is, props) => {
            const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
              is
            } : void 0);
            if (tag === "select" && props && props.multiple != null) {
              el.setAttribute("multiple", props.multiple);
            }
            return el;
          },
          createText: text => doc.createTextNode(text),
          createComment: text => doc.createComment(text),
          setText: (node, text) => {
            node.nodeValue = text;
          },
          setElementText: (el, text) => {
            el.textContent = text;
          },
          parentNode: node => node.parentNode,
          nextSibling: node => node.nextSibling,
          querySelector: selector => doc.querySelector(selector),
          setScopeId(el, id) {
            el.setAttribute(id, "");
          },
          // __UNSAFE__
          // Reason: innerHTML.
          // Static content here can only come from compiled templates.
          // As long as the user only uses trusted templates, this is safe.
          insertStaticContent(content, parent, anchor, isSVG, start, end) {
            const before = anchor ? anchor.previousSibling : parent.lastChild;
            if (start && (start === end || start.nextSibling)) {
              while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling)) break;
              }
            } else {
              templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
              const template = templateContainer.content;
              if (isSVG) {
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                  template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
              }
              parent.insertBefore(template, anchor);
            }
            return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild];
          }
        };
        function patchClass(el, value, isSVG) {
          const transitionClasses = el._vtc;
          if (transitionClasses) {
            value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
          }
          if (value == null) {
            el.removeAttribute("class");
          } else if (isSVG) {
            el.setAttribute("class", value);
          } else {
            el.className = value;
          }
        }
        function patchStyle(el, prev, next) {
          const style = el.style;
          const isCssString = isString$1(next);
          if (next && !isCssString) {
            if (prev && !isString$1(prev)) {
              for (const key in prev) {
                if (next[key] == null) {
                  setStyle(style, key, "");
                }
              }
            }
            for (const key in next) {
              setStyle(style, key, next[key]);
            }
          } else {
            const currentDisplay = style.display;
            if (isCssString) {
              if (prev !== next) {
                style.cssText = next;
              }
            } else if (prev) {
              el.removeAttribute("style");
            }
            if ("_vod" in el) {
              style.display = currentDisplay;
            }
          }
        }
        const importantRE = /\s*!important$/;
        function setStyle(style, name, val) {
          if (isArray$2(val)) {
            val.forEach(v => setStyle(style, name, v));
          } else {
            if (val == null) val = "";
            if (name.startsWith("--")) {
              style.setProperty(name, val);
            } else {
              const prefixed = autoPrefix(style, name);
              if (importantRE.test(val)) {
                style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
              } else {
                style[prefixed] = val;
              }
            }
          }
        }
        const prefixes = ["Webkit", "Moz", "ms"];
        const prefixCache = {};
        function autoPrefix(style, rawName) {
          const cached = prefixCache[rawName];
          if (cached) {
            return cached;
          }
          let name = camelize(rawName);
          if (name !== "filter" && name in style) {
            return prefixCache[rawName] = name;
          }
          name = capitalize(name);
          for (let i = 0; i < prefixes.length; i++) {
            const prefixed = prefixes[i] + name;
            if (prefixed in style) {
              return prefixCache[rawName] = prefixed;
            }
          }
          return rawName;
        }
        const xlinkNS = "http://www.w3.org/1999/xlink";
        function patchAttr(el, key, value, isSVG, instance) {
          if (isSVG && key.startsWith("xlink:")) {
            if (value == null) {
              el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            const isBoolean = isSpecialBooleanAttr(key);
            if (value == null || isBoolean && !includeBooleanAttr(value)) {
              el.removeAttribute(key);
            } else {
              el.setAttribute(key, isBoolean ? "" : value);
            }
          }
        }
        function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
          if (key === "innerHTML" || key === "textContent") {
            if (prevChildren) {
              unmountChildren(prevChildren, parentComponent, parentSuspense);
            }
            el[key] = value == null ? "" : value;
            return;
          }
          const tag = el.tagName;
          if (key === "value" && tag !== "PROGRESS" &&
          // custom elements may use _value internally
          !tag.includes("-")) {
            el._value = value;
            const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
            const newValue = value == null ? "" : value;
            if (oldValue !== newValue) {
              el.value = newValue;
            }
            if (value == null) {
              el.removeAttribute(key);
            }
            return;
          }
          let needRemove = false;
          if (value === "" || value == null) {
            const type = typeof el[key];
            if (type === "boolean") {
              value = includeBooleanAttr(value);
            } else if (value == null && type === "string") {
              value = "";
              needRemove = true;
            } else if (type === "number") {
              value = 0;
              needRemove = true;
            }
          }
          try {
            el[key] = value;
          } catch (e) {}
          needRemove && el.removeAttribute(key);
        }
        function addEventListener(el, event, handler, options) {
          el.addEventListener(event, handler, options);
        }
        function removeEventListener(el, event, handler, options) {
          el.removeEventListener(event, handler, options);
        }
        function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
          const invokers = el._vei || (el._vei = {});
          const existingInvoker = invokers[rawName];
          if (nextValue && existingInvoker) {
            existingInvoker.value = nextValue;
          } else {
            const [name, options] = parseName(rawName);
            if (nextValue) {
              const invoker = invokers[rawName] = createInvoker(nextValue, instance);
              addEventListener(el, name, invoker, options);
            } else if (existingInvoker) {
              removeEventListener(el, name, existingInvoker, options);
              invokers[rawName] = void 0;
            }
          }
        }
        const optionsModifierRE = /(?:Once|Passive|Capture)$/;
        function parseName(name) {
          let options;
          if (optionsModifierRE.test(name)) {
            options = {};
            let m;
            while (m = name.match(optionsModifierRE)) {
              name = name.slice(0, name.length - m[0].length);
              options[m[0].toLowerCase()] = true;
            }
          }
          const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
          return [event, options];
        }
        let cachedNow = 0;
        const p = /* @__PURE__ */Promise.resolve();
        const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
        function createInvoker(initialValue, instance) {
          const invoker = e => {
            if (!e._vts) {
              e._vts = Date.now();
            } else if (e._vts <= invoker.attached) {
              return;
            }
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
          };
          invoker.value = initialValue;
          invoker.attached = getNow();
          return invoker;
        }
        function patchStopImmediatePropagation(e, value) {
          if (isArray$2(value)) {
            const originalStop = e.stopImmediatePropagation;
            e.stopImmediatePropagation = () => {
              originalStop.call(e);
              e._stopped = true;
            };
            return value.map(fn => e2 => !e2._stopped && fn && fn(e2));
          } else {
            return value;
          }
        }
        const nativeOnRE = /^on[a-z]/;
        const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
          if (key === "class") {
            patchClass(el, nextValue, isSVG);
          } else if (key === "style") {
            patchStyle(el, prevValue, nextValue);
          } else if (isOn(key)) {
            if (!isModelListener(key)) {
              patchEvent(el, key, prevValue, nextValue, parentComponent);
            }
          } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
            patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
          } else {
            if (key === "true-value") {
              el._trueValue = nextValue;
            } else if (key === "false-value") {
              el._falseValue = nextValue;
            }
            patchAttr(el, key, nextValue, isSVG);
          }
        };
        function shouldSetAsProp(el, key, value, isSVG) {
          if (isSVG) {
            if (key === "innerHTML" || key === "textContent") {
              return true;
            }
            if (key in el && nativeOnRE.test(key) && isFunction$1(value)) {
              return true;
            }
            return false;
          }
          if (key === "spellcheck" || key === "draggable" || key === "translate") {
            return false;
          }
          if (key === "form") {
            return false;
          }
          if (key === "list" && el.tagName === "INPUT") {
            return false;
          }
          if (key === "type" && el.tagName === "TEXTAREA") {
            return false;
          }
          if (nativeOnRE.test(key) && isString$1(value)) {
            return false;
          }
          return key in el;
        }
        const DOMTransitionPropsValidators = {
          name: String,
          type: String,
          css: {
            type: Boolean,
            default: true
          },
          duration: [String, Number, Object],
          enterFromClass: String,
          enterActiveClass: String,
          enterToClass: String,
          appearFromClass: String,
          appearActiveClass: String,
          appearToClass: String,
          leaveFromClass: String,
          leaveActiveClass: String,
          leaveToClass: String
        };
        /* @__PURE__ */
        extend$1({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
        const rendererOptions = /* @__PURE__ */extend$1({
          patchProp
        }, nodeOps);
        let renderer;
        function ensureRenderer() {
          return renderer || (renderer = createRenderer(rendererOptions));
        }
        const createApp = (...args) => {
          const app = ensureRenderer().createApp(...args);
          const {
            mount
          } = app;
          app.mount = containerOrSelector => {
            const container = normalizeContainer(containerOrSelector);
            if (!container) return;
            const component = app._component;
            if (!isFunction$1(component) && !component.render && !component.template) {
              component.template = container.innerHTML;
            }
            container.innerHTML = "";
            const proxy = mount(container, false, container instanceof SVGElement);
            if (container instanceof Element) {
              container.removeAttribute("v-cloak");
              container.setAttribute("data-v-app", "");
            }
            return proxy;
          };
          return app;
        };
        function normalizeContainer(container) {
          if (isString$1(container)) {
            const res = document.querySelector(container);
            return res;
          }
          return container;
        }
        const scriptRel = 'modulepreload';
        const assetsURL = function (dep, importerUrl) {
          return new URL(dep, importerUrl).href;
        };
        const seen = {};
        const __vitePreload = exports('l', function preload(baseModule, deps, importerUrl) {
          // @ts-ignore
          if (!false || !deps || deps.length === 0) {
            return baseModule();
          }
          const links = document.getElementsByTagName('link');
          return Promise.all(deps.map(dep => {
            // @ts-ignore
            dep = assetsURL(dep, importerUrl);
            // @ts-ignore
            if (dep in seen) return;
            // @ts-ignore
            seen[dep] = true;
            const isCss = dep.endsWith('.css');
            const cssSelector = isCss ? '[rel="stylesheet"]' : '';
            const isBaseRelative = !!importerUrl;
            // check if the file is already preloaded by SSR markup
            if (isBaseRelative) {
              // When isBaseRelative is true then we have `importerUrl` and `dep` is
              // already converted to an absolute URL by the `assetsURL` function
              for (let i = links.length - 1; i >= 0; i--) {
                const link = links[i];
                // The `links[i].href` is an absolute URL thanks to browser doing the work
                // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                if (link.href === dep && (!isCss || link.rel === 'stylesheet')) {
                  return;
                }
              }
            } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
              return;
            }
            // @ts-ignore
            const link = document.createElement('link');
            // @ts-ignore
            link.rel = isCss ? 'stylesheet' : scriptRel;
            if (!isCss) {
              link.as = 'script';
              link.crossOrigin = '';
            }
            link.href = dep;
            // @ts-ignore
            document.head.appendChild(link);
            if (isCss) {
              return new Promise((res, rej) => {
                link.addEventListener('load', res);
                link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
              });
            }
          })).then(() => baseModule());
        });

        /*!
          * vue-router v4.2.2
          * (c) 2023 Eduardo San Martin Morote
          * @license MIT
          */

        const isBrowser = typeof window !== 'undefined';
        function isESModule(obj) {
          return obj.__esModule || obj[Symbol.toStringTag] === 'Module';
        }
        const assign = Object.assign;
        function applyToParams(fn, params) {
          const newParams = {};
          for (const key in params) {
            const value = params[key];
            newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
          }
          return newParams;
        }
        const noop$1 = () => {};
        /**
         * Typesafe alternative to Array.isArray
         * https://github.com/microsoft/TypeScript/pull/48228
         */
        const isArray$1 = Array.isArray;
        const TRAILING_SLASH_RE = /\/$/;
        const removeTrailingSlash = path => path.replace(TRAILING_SLASH_RE, '');
        /**
         * Transforms a URI into a normalized history location
         *
         * @param parseQuery
         * @param location - URI to normalize
         * @param currentLocation - current absolute location. Allows resolving relative
         * paths. Must start with `/`. Defaults to `/`
         * @returns a normalized history location
         */
        function parseURL(parseQuery, location, currentLocation = '/') {
          let path,
            query = {},
            searchString = '',
            hash = '';
          // Could use URL and URLSearchParams but IE 11 doesn't support it
          // TODO: move to new URL()
          const hashPos = location.indexOf('#');
          let searchPos = location.indexOf('?');
          // the hash appears before the search, so it's not part of the search string
          if (hashPos < searchPos && hashPos >= 0) {
            searchPos = -1;
          }
          if (searchPos > -1) {
            path = location.slice(0, searchPos);
            searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
            query = parseQuery(searchString);
          }
          if (hashPos > -1) {
            path = path || location.slice(0, hashPos);
            // keep the # character
            hash = location.slice(hashPos, location.length);
          }
          // no search and no query
          path = resolveRelativePath(path != null ? path : location, currentLocation);
          // empty path means a relative query or hash `?foo=f`, `#thing`
          return {
            fullPath: path + (searchString && '?') + searchString + hash,
            path,
            query,
            hash
          };
        }
        /**
         * Stringifies a URL object
         *
         * @param stringifyQuery
         * @param location
         */
        function stringifyURL(stringifyQuery, location) {
          const query = location.query ? stringifyQuery(location.query) : '';
          return location.path + (query && '?') + query + (location.hash || '');
        }
        /**
         * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
         *
         * @param pathname - location.pathname
         * @param base - base to strip off
         */
        function stripBase(pathname, base) {
          // no base or base is not found at the beginning
          if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
          return pathname.slice(base.length) || '/';
        }
        /**
         * Checks if two RouteLocation are equal. This means that both locations are
         * pointing towards the same {@link RouteRecord} and that all `params`, `query`
         * parameters and `hash` are the same
         *
         * @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
         * @param a - first {@link RouteLocation}
         * @param b - second {@link RouteLocation}
         */
        function isSameRouteLocation(stringifyQuery, a, b) {
          const aLastIndex = a.matched.length - 1;
          const bLastIndex = b.matched.length - 1;
          return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
        }
        /**
         * Check if two `RouteRecords` are equal. Takes into account aliases: they are
         * considered equal to the `RouteRecord` they are aliasing.
         *
         * @param a - first {@link RouteRecord}
         * @param b - second {@link RouteRecord}
         */
        function isSameRouteRecord(a, b) {
          // since the original record has an undefined value for aliasOf
          // but all aliases point to the original record, this will always compare
          // the original record
          return (a.aliasOf || a) === (b.aliasOf || b);
        }
        function isSameRouteLocationParams(a, b) {
          if (Object.keys(a).length !== Object.keys(b).length) return false;
          for (const key in a) {
            if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
          }
          return true;
        }
        function isSameRouteLocationParamsValue(a, b) {
          return isArray$1(a) ? isEquivalentArray(a, b) : isArray$1(b) ? isEquivalentArray(b, a) : a === b;
        }
        /**
         * Check if two arrays are the same or if an array with one single entry is the
         * same as another primitive value. Used to check query and parameters
         *
         * @param a - array of values
         * @param b - array of values or a single value
         */
        function isEquivalentArray(a, b) {
          return isArray$1(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
        }
        /**
         * Resolves a relative path that starts with `.`.
         *
         * @param to - path location we are resolving
         * @param from - currentLocation.path, should start with `/`
         */
        function resolveRelativePath(to, from) {
          if (to.startsWith('/')) return to;
          if (!to) return from;
          const fromSegments = from.split('/');
          const toSegments = to.split('/');
          const lastToSegment = toSegments[toSegments.length - 1];
          // make . and ./ the same (../ === .., ../../ === ../..)
          // this is the same behavior as new URL()
          if (lastToSegment === '..' || lastToSegment === '.') {
            toSegments.push('');
          }
          let position = fromSegments.length - 1;
          let toPosition;
          let segment;
          for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
            segment = toSegments[toPosition];
            // we stay on the same position
            if (segment === '.') continue;
            // go up in the from array
            if (segment === '..') {
              // we can't go below zero, but we still need to increment toPosition
              if (position > 1) position--;
              // continue
            }
            // we reached a non-relative path, we stop here
            else break;
          }
          return fromSegments.slice(0, position).join('/') + '/' + toSegments
          // ensure we use at least the last element in the toSegments
          .slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join('/');
        }
        var NavigationType;
        (function (NavigationType) {
          NavigationType["pop"] = "pop";
          NavigationType["push"] = "push";
        })(NavigationType || (NavigationType = {}));
        var NavigationDirection;
        (function (NavigationDirection) {
          NavigationDirection["back"] = "back";
          NavigationDirection["forward"] = "forward";
          NavigationDirection["unknown"] = "";
        })(NavigationDirection || (NavigationDirection = {}));
        // Generic utils
        /**
         * Normalizes a base by removing any trailing slash and reading the base tag if
         * present.
         *
         * @param base - base to normalize
         */
        function normalizeBase(base) {
          if (!base) {
            if (isBrowser) {
              // respect <base> tag
              const baseEl = document.querySelector('base');
              base = baseEl && baseEl.getAttribute('href') || '/';
              // strip full URL origin
              base = base.replace(/^\w+:\/\/[^\/]+/, '');
            } else {
              base = '/';
            }
          }
          // ensure leading slash when it was removed by the regex above avoid leading
          // slash with hash because the file could be read from the disk like file://
          // and the leading slash would cause problems
          if (base[0] !== '/' && base[0] !== '#') base = '/' + base;
          // remove the trailing slash so all other method can just do `base + fullPath`
          // to build an href
          return removeTrailingSlash(base);
        }
        // remove any character before the hash
        const BEFORE_HASH_RE = /^[^#]+#/;
        function createHref(base, location) {
          return base.replace(BEFORE_HASH_RE, '#') + location;
        }
        function getElementPosition(el, offset) {
          const docRect = document.documentElement.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          return {
            behavior: offset.behavior,
            left: elRect.left - docRect.left - (offset.left || 0),
            top: elRect.top - docRect.top - (offset.top || 0)
          };
        }
        const computeScrollPosition = () => ({
          left: window.pageXOffset,
          top: window.pageYOffset
        });
        function scrollToPosition(position) {
          let scrollToOptions;
          if ('el' in position) {
            const positionEl = position.el;
            const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
            const el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
            if (!el) {
              return;
            }
            scrollToOptions = getElementPosition(el, position);
          } else {
            scrollToOptions = position;
          }
          if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
            window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
          }
        }
        function getScrollKey(path, delta) {
          const position = history.state ? history.state.position - delta : -1;
          return position + path;
        }
        const scrollPositions = new Map();
        function saveScrollPosition(key, scrollPosition) {
          scrollPositions.set(key, scrollPosition);
        }
        function getSavedScrollPosition(key) {
          const scroll = scrollPositions.get(key);
          // consume it so it's not used again
          scrollPositions.delete(key);
          return scroll;
        }
        // TODO: RFC about how to save scroll position
        /**
         * ScrollBehavior instance used by the router to compute and restore the scroll
         * position when navigating.
         */
        // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
        //   // returns a scroll position that can be saved in history
        //   compute(): ScrollPositionEntry
        //   // can take an extended ScrollPositionEntry
        //   scroll(position: ScrollPosition): void
        // }
        // export const scrollHandler: ScrollHandler<ScrollPosition> = {
        //   compute: computeScroll,
        //   scroll: scrollToPosition,
        // }

        let createBaseLocation = () => location.protocol + '//' + location.host;
        /**
         * Creates a normalized history location from a window.location object
         * @param base - The base path
         * @param location - The window.location object
         */
        function createCurrentLocation(base, location) {
          const {
            pathname,
            search,
            hash
          } = location;
          // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
          const hashPos = base.indexOf('#');
          if (hashPos > -1) {
            let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
            let pathFromHash = hash.slice(slicePos);
            // prepend the starting slash to hash so the url starts with /#
            if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
            return stripBase(pathFromHash, '');
          }
          const path = stripBase(pathname, base);
          return path + search + hash;
        }
        function useHistoryListeners(base, historyState, currentLocation, replace) {
          let listeners = [];
          let teardowns = [];
          // TODO: should it be a stack? a Dict. Check if the popstate listener
          // can trigger twice
          let pauseState = null;
          const popStateHandler = ({
            state
          }) => {
            const to = createCurrentLocation(base, location);
            const from = currentLocation.value;
            const fromState = historyState.value;
            let delta = 0;
            if (state) {
              currentLocation.value = to;
              historyState.value = state;
              // ignore the popstate and reset the pauseState
              if (pauseState && pauseState === from) {
                pauseState = null;
                return;
              }
              delta = fromState ? state.position - fromState.position : 0;
            } else {
              replace(to);
            }
            // console.log({ deltaFromCurrent })
            // Here we could also revert the navigation by calling history.go(-delta)
            // this listener will have to be adapted to not trigger again and to wait for the url
            // to be updated before triggering the listeners. Some kind of validation function would also
            // need to be passed to the listeners so the navigation can be accepted
            // call all listeners
            listeners.forEach(listener => {
              listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
              });
            });
          };
          function pauseListeners() {
            pauseState = currentLocation.value;
          }
          function listen(callback) {
            // set up the listener and prepare teardown callbacks
            listeners.push(callback);
            const teardown = () => {
              const index = listeners.indexOf(callback);
              if (index > -1) listeners.splice(index, 1);
            };
            teardowns.push(teardown);
            return teardown;
          }
          function beforeUnloadListener() {
            const {
              history
            } = window;
            if (!history.state) return;
            history.replaceState(assign({}, history.state, {
              scroll: computeScrollPosition()
            }), '');
          }
          function destroy() {
            for (const teardown of teardowns) teardown();
            teardowns = [];
            window.removeEventListener('popstate', popStateHandler);
            window.removeEventListener('beforeunload', beforeUnloadListener);
          }
          // set up the listeners and prepare teardown callbacks
          window.addEventListener('popstate', popStateHandler);
          // TODO: could we use 'pagehide' or 'visibilitychange' instead?
          // https://developer.chrome.com/blog/page-lifecycle-api/
          window.addEventListener('beforeunload', beforeUnloadListener, {
            passive: true
          });
          return {
            pauseListeners,
            listen,
            destroy
          };
        }
        /**
         * Creates a state object
         */
        function buildState(back, current, forward, replaced = false, computeScroll = false) {
          return {
            back,
            current,
            forward,
            replaced,
            position: window.history.length,
            scroll: computeScroll ? computeScrollPosition() : null
          };
        }
        function useHistoryStateNavigation(base) {
          const {
            history,
            location
          } = window;
          // private variables
          const currentLocation = {
            value: createCurrentLocation(base, location)
          };
          const historyState = {
            value: history.state
          };
          // build current history entry as this is a fresh navigation
          if (!historyState.value) {
            changeLocation(currentLocation.value, {
              back: null,
              current: currentLocation.value,
              forward: null,
              // the length is off by one, we need to decrease it
              position: history.length - 1,
              replaced: true,
              // don't add a scroll as the user may have an anchor, and we want
              // scrollBehavior to be triggered without a saved position
              scroll: null
            }, true);
          }
          function changeLocation(to, state, replace) {
            /**
             * if a base tag is provided, and we are on a normal domain, we have to
             * respect the provided `base` attribute because pushState() will use it and
             * potentially erase anything before the `#` like at
             * https://github.com/vuejs/router/issues/685 where a base of
             * `/folder/#` but a base of `/` would erase the `/folder/` section. If
             * there is no host, the `<base>` tag makes no sense and if there isn't a
             * base tag we can just use everything after the `#`.
             */
            const hashIndex = base.indexOf('#');
            const url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
            try {
              // BROWSER QUIRK
              // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
              history[replace ? 'replaceState' : 'pushState'](state, '', url);
              historyState.value = state;
            } catch (err) {
              {
                console.error(err);
              }
              // Force the navigation, this also resets the call count
              location[replace ? 'replace' : 'assign'](url);
            }
          }
          function replace(to, data) {
            const state = assign({}, history.state, buildState(historyState.value.back,
            // keep back and forward entries but override current position
            to, historyState.value.forward, true), data, {
              position: historyState.value.position
            });
            changeLocation(to, state, true);
            currentLocation.value = to;
          }
          function push(to, data) {
            // Add to current entry the information of where we are going
            // as well as saving the current position
            const currentState = assign({},
            // use current history state to gracefully handle a wrong call to
            // history.replaceState
            // https://github.com/vuejs/router/issues/366
            historyState.value, history.state, {
              forward: to,
              scroll: computeScrollPosition()
            });
            changeLocation(currentState.current, currentState, true);
            const state = assign({}, buildState(currentLocation.value, to, null), {
              position: currentState.position + 1
            }, data);
            changeLocation(to, state, false);
            currentLocation.value = to;
          }
          return {
            location: currentLocation,
            state: historyState,
            push,
            replace
          };
        }
        /**
         * Creates an HTML5 history. Most common history for single page applications.
         *
         * @param base -
         */
        function createWebHistory(base) {
          base = normalizeBase(base);
          const historyNavigation = useHistoryStateNavigation(base);
          const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
          function go(delta, triggerListeners = true) {
            if (!triggerListeners) historyListeners.pauseListeners();
            history.go(delta);
          }
          const routerHistory = assign({
            // it's overridden right after
            location: '',
            base,
            go,
            createHref: createHref.bind(null, base)
          }, historyNavigation, historyListeners);
          Object.defineProperty(routerHistory, 'location', {
            enumerable: true,
            get: () => historyNavigation.location.value
          });
          Object.defineProperty(routerHistory, 'state', {
            enumerable: true,
            get: () => historyNavigation.state.value
          });
          return routerHistory;
        }

        /**
         * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
         * handle any URL is not possible.
         *
         * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
         * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
         * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
         * after the `#`).
         *
         * @example
         * ```js
         * // at https://example.com/folder
         * createWebHashHistory() // gives a url of `https://example.com/folder#`
         * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
         * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
         * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
         * // you should avoid doing this because it changes the original url and breaks copying urls
         * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
         *
         * // at file:///usr/etc/folder/index.html
         * // for locations with no `host`, the base is ignored
         * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
         * ```
         */
        function createWebHashHistory(base) {
          // Make sure this implementation is fine in terms of encoding, specially for IE11
          // for `file://`, directly use the pathname and ignore the base
          // location.pathname contains an initial `/` even at the root: `https://example.com`
          base = location.host ? base || location.pathname + location.search : '';
          // allow the user to provide a `#` in the middle: `/base/#/app`
          if (!base.includes('#')) base += '#';
          return createWebHistory(base);
        }
        function isRouteLocation(route) {
          return typeof route === 'string' || route && typeof route === 'object';
        }
        function isRouteName(name) {
          return typeof name === 'string' || typeof name === 'symbol';
        }

        /**
         * Initial route location where the router is. Can be used in navigation guards
         * to differentiate the initial navigation.
         *
         * @example
         * ```js
         * import { START_LOCATION } from 'vue-router'
         *
         * router.beforeEach((to, from) => {
         *   if (from === START_LOCATION) {
         *     // initial navigation
         *   }
         * })
         * ```
         */
        const START_LOCATION_NORMALIZED = {
          path: '/',
          name: undefined,
          params: {},
          query: {},
          hash: '',
          fullPath: '/',
          matched: [],
          meta: {},
          redirectedFrom: undefined
        };
        const NavigationFailureSymbol = Symbol('');
        /**
         * Enumeration with all possible types for navigation failures. Can be passed to
         * {@link isNavigationFailure} to check for specific failures.
         */
        var NavigationFailureType;
        (function (NavigationFailureType) {
          /**
           * An aborted navigation is a navigation that failed because a navigation
           * guard returned `false` or called `next(false)`
           */
          NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
          /**
           * A cancelled navigation is a navigation that failed because a more recent
           * navigation finished started (not necessarily finished).
           */
          NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
          /**
           * A duplicated navigation is a navigation that failed because it was
           * initiated while already being at the exact same location.
           */
          NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
        })(NavigationFailureType || (NavigationFailureType = {}));
        function createRouterError(type, params) {
          // keep full error messages in cjs versions
          {
            return assign(new Error(), {
              type,
              [NavigationFailureSymbol]: true
            }, params);
          }
        }
        function isNavigationFailure(error, type) {
          return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
        }

        // default pattern for a param: non-greedy everything but /
        const BASE_PARAM_PATTERN = '[^/]+?';
        const BASE_PATH_PARSER_OPTIONS = {
          sensitive: false,
          strict: false,
          start: true,
          end: true
        };
        // Special Regex characters that must be escaped in static tokens
        const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
        /**
         * Creates a path parser from an array of Segments (a segment is an array of Tokens)
         *
         * @param segments - array of segments returned by tokenizePath
         * @param extraOptions - optional options for the regexp
         * @returns a PathParser
         */
        function tokensToParser(segments, extraOptions) {
          const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
          // the amount of scores is the same as the length of segments except for the root segment "/"
          const score = [];
          // the regexp as a string
          let pattern = options.start ? '^' : '';
          // extracted keys
          const keys = [];
          for (const segment of segments) {
            // the root segment needs special treatment
            const segmentScores = segment.length ? [] : [90 /* PathScore.Root */];
            // allow trailing slash
            if (options.strict && !segment.length) pattern += '/';
            for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
              const token = segment[tokenIndex];
              // resets the score if we are inside a sub-segment /:a-other-:b
              let subSegmentScore = 40 /* PathScore.Segment */ + (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */ : 0);
              if (token.type === 0 /* TokenType.Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* PathScore.Static */;
              } else if (token.type === 1 /* TokenType.Param */) {
                const {
                  value,
                  repeatable,
                  optional,
                  regexp
                } = token;
                keys.push({
                  name: value,
                  repeatable,
                  optional
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                  subSegmentScore += 10 /* PathScore.BonusCustomRegExp */;
                  // make sure the regexp is valid before using it
                  try {
                    new RegExp(`(${re})`);
                  } catch (err) {
                    throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
                  }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) subPattern =
                // avoid an optional / if there are more segments e.g. /:p?-static
                // or /:p?-:p2
                optional && segment.length < 2 ? `(?:/${subPattern})` : '/' + subPattern;
                if (optional) subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* PathScore.Dynamic */;
                if (optional) subSegmentScore += -8 /* PathScore.BonusOptional */;
                if (repeatable) subSegmentScore += -20 /* PathScore.BonusRepeatable */;
                if (re === '.*') subSegmentScore += -50 /* PathScore.BonusWildcard */;
              }

              segmentScores.push(subSegmentScore);
            }
            // an empty array like /home/ -> [[{home}], []]
            // if (!segment.length) pattern += '/'
            score.push(segmentScores);
          }
          // only apply the strict bonus to the last score
          if (options.strict && options.end) {
            const i = score.length - 1;
            score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */;
          }
          // TODO: dev only warn double trailing slash
          if (!options.strict) pattern += '/?';
          if (options.end) pattern += '$';
          // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
          else if (options.strict) pattern += '(?:/|$)';
          const re = new RegExp(pattern, options.sensitive ? '' : 'i');
          function parse(path) {
            const match = path.match(re);
            const params = {};
            if (!match) return null;
            for (let i = 1; i < match.length; i++) {
              const value = match[i] || '';
              const key = keys[i - 1];
              params[key.name] = value && key.repeatable ? value.split('/') : value;
            }
            return params;
          }
          function stringify(params) {
            let path = '';
            // for optional parameters to allow to be empty
            let avoidDuplicatedSlash = false;
            for (const segment of segments) {
              if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
              avoidDuplicatedSlash = false;
              for (const token of segment) {
                if (token.type === 0 /* TokenType.Static */) {
                  path += token.value;
                } else if (token.type === 1 /* TokenType.Param */) {
                  const {
                    value,
                    repeatable,
                    optional
                  } = token;
                  const param = value in params ? params[value] : '';
                  if (isArray$1(param) && !repeatable) {
                    throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                  }
                  const text = isArray$1(param) ? param.join('/') : param;
                  if (!text) {
                    if (optional) {
                      // if we have more than one optional param like /:a?-static we don't need to care about the optional param
                      if (segment.length < 2) {
                        // remove the last slash as we could be at the end
                        if (path.endsWith('/')) path = path.slice(0, -1);
                        // do not append a slash on the next iteration
                        else avoidDuplicatedSlash = true;
                      }
                    } else throw new Error(`Missing required param "${value}"`);
                  }
                  path += text;
                }
              }
            }
            // avoid empty path when we have multiple optional params
            return path || '/';
          }
          return {
            re,
            score,
            keys,
            parse,
            stringify
          };
        }
        /**
         * Compares an array of numbers as used in PathParser.score and returns a
         * number. This function can be used to `sort` an array
         *
         * @param a - first array of numbers
         * @param b - second array of numbers
         * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
         * should be sorted first
         */
        function compareScoreArray(a, b) {
          let i = 0;
          while (i < a.length && i < b.length) {
            const diff = b[i] - a[i];
            // only keep going if diff === 0
            if (diff) return diff;
            i++;
          }
          // if the last subsegment was Static, the shorter segments should be sorted first
          // otherwise sort the longest segment first
          if (a.length < b.length) {
            return a.length === 1 && a[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */ ? -1 : 1;
          } else if (a.length > b.length) {
            return b.length === 1 && b[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */ ? 1 : -1;
          }
          return 0;
        }
        /**
         * Compare function that can be used with `sort` to sort an array of PathParser
         *
         * @param a - first PathParser
         * @param b - second PathParser
         * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
         */
        function comparePathParserScore(a, b) {
          let i = 0;
          const aScore = a.score;
          const bScore = b.score;
          while (i < aScore.length && i < bScore.length) {
            const comp = compareScoreArray(aScore[i], bScore[i]);
            // do not return if both are equal
            if (comp) return comp;
            i++;
          }
          if (Math.abs(bScore.length - aScore.length) === 1) {
            if (isLastScoreNegative(aScore)) return 1;
            if (isLastScoreNegative(bScore)) return -1;
          }
          // if a and b share the same score entries but b has more, sort b first
          return bScore.length - aScore.length;
          // this is the ternary version
          // return aScore.length < bScore.length
          //   ? 1
          //   : aScore.length > bScore.length
          //   ? -1
          //   : 0
        }
        /**
         * This allows detecting splats at the end of a path: /home/:id(.*)*
         *
         * @param score - score to check
         * @returns true if the last entry is negative
         */
        function isLastScoreNegative(score) {
          const last = score[score.length - 1];
          return score.length > 0 && last[last.length - 1] < 0;
        }
        const ROOT_TOKEN = {
          type: 0 /* TokenType.Static */,
          value: ''
        };
        const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
        // After some profiling, the cache seems to be unnecessary because tokenizePath
        // (the slowest part of adding a route) is very fast
        // const tokenCache = new Map<string, Token[][]>()
        function tokenizePath(path) {
          if (!path) return [[]];
          if (path === '/') return [[ROOT_TOKEN]];
          if (!path.startsWith('/')) {
            throw new Error(`Invalid path "${path}"`);
          }
          // if (tokenCache.has(path)) return tokenCache.get(path)!
          function crash(message) {
            throw new Error(`ERR (${state})/"${buffer}": ${message}`);
          }
          let state = 0 /* TokenizerState.Static */;
          let previousState = state;
          const tokens = [];
          // the segment will always be valid because we get into the initial state
          // with the leading /
          let segment;
          function finalizeSegment() {
            if (segment) tokens.push(segment);
            segment = [];
          }
          // index on the path
          let i = 0;
          // char at index
          let char;
          // buffer of the value read
          let buffer = '';
          // custom regexp for a param
          let customRe = '';
          function consumeBuffer() {
            if (!buffer) return;
            if (state === 0 /* TokenizerState.Static */) {
              segment.push({
                type: 0 /* TokenType.Static */,
                value: buffer
              });
            } else if (state === 1 /* TokenizerState.Param */ || state === 2 /* TokenizerState.ParamRegExp */ || state === 3 /* TokenizerState.ParamRegExpEnd */) {
              if (segment.length > 1 && (char === '*' || char === '+')) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
              segment.push({
                type: 1 /* TokenType.Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?'
              });
            } else {
              crash('Invalid state to consume buffer');
            }
            buffer = '';
          }
          function addCharToBuffer() {
            buffer += char;
          }
          while (i < path.length) {
            char = path[i++];
            if (char === '\\' && state !== 2 /* TokenizerState.ParamRegExp */) {
              previousState = state;
              state = 4 /* TokenizerState.EscapeNext */;
              continue;
            }
            switch (state) {
              case 0 /* TokenizerState.Static */:
                if (char === '/') {
                  if (buffer) {
                    consumeBuffer();
                  }
                  finalizeSegment();
                } else if (char === ':') {
                  consumeBuffer();
                  state = 1 /* TokenizerState.Param */;
                } else {
                  addCharToBuffer();
                }
                break;
              case 4 /* TokenizerState.EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
              case 1 /* TokenizerState.Param */:
                if (char === '(') {
                  state = 2 /* TokenizerState.ParamRegExp */;
                } else if (VALID_PARAM_RE.test(char)) {
                  addCharToBuffer();
                } else {
                  consumeBuffer();
                  state = 0 /* TokenizerState.Static */;
                  // go back one character if we were not modifying
                  if (char !== '*' && char !== '?' && char !== '+') i--;
                }
                break;
              case 2 /* TokenizerState.ParamRegExp */:
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ')') {
                  // handle the escaped )
                  if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;else state = 3 /* TokenizerState.ParamRegExpEnd */;
                } else {
                  customRe += char;
                }
                break;
              case 3 /* TokenizerState.ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* TokenizerState.Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+') i--;
                customRe = '';
                break;
              default:
                crash('Unknown state');
                break;
            }
          }
          if (state === 2 /* TokenizerState.ParamRegExp */) crash(`Unfinished custom RegExp for param "${buffer}"`);
          consumeBuffer();
          finalizeSegment();
          // tokenCache.set(path, tokens)
          return tokens;
        }
        function createRouteRecordMatcher(record, parent, options) {
          const parser = tokensToParser(tokenizePath(record.path), options);
          const matcher = assign(parser, {
            record,
            parent,
            // these needs to be populated by the parent
            children: [],
            alias: []
          });
          if (parent) {
            // both are aliases or both are not aliases
            // we don't want to mix them because the order is used when
            // passing originalRecord in Matcher.addRoute
            if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
          }
          return matcher;
        }

        /**
         * Creates a Router Matcher.
         *
         * @internal
         * @param routes - array of initial routes
         * @param globalOptions - global route options
         */
        function createRouterMatcher(routes, globalOptions) {
          // normalized ordered array of matchers
          const matchers = [];
          const matcherMap = new Map();
          globalOptions = mergeOptions({
            strict: false,
            end: true,
            sensitive: false
          }, globalOptions);
          function getRecordMatcher(name) {
            return matcherMap.get(name);
          }
          function addRoute(record, parent, originalRecord) {
            // used later on to remove by name
            const isRootAdd = !originalRecord;
            const mainNormalizedRecord = normalizeRouteRecord(record);
            // we might be the child of an alias
            mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
            const options = mergeOptions(globalOptions, record);
            // generate an array of records to correctly handle aliases
            const normalizedRecords = [mainNormalizedRecord];
            if ('alias' in record) {
              const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
              for (const alias of aliases) {
                normalizedRecords.push(assign({}, mainNormalizedRecord, {
                  // this allows us to hold a copy of the `components` option
                  // so that async components cache is hold on the original record
                  components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
                  path: alias,
                  // we might be the child of an alias
                  aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
                  // the aliases are always of the same kind as the original since they
                  // are defined on the same record
                }));
              }
            }

            let matcher;
            let originalMatcher;
            for (const normalizedRecord of normalizedRecords) {
              const {
                path
              } = normalizedRecord;
              // Build up the path for nested routes if the child isn't an absolute
              // route. Only add the / delimiter if the child path isn't empty and if the
              // parent path doesn't have a trailing slash
              if (parent && path[0] !== '/') {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
              }
              // create the object beforehand, so it can be passed to children
              matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
              // if we are an alias we must tell the original record that we exist,
              // so we can be removed
              if (originalRecord) {
                originalRecord.alias.push(matcher);
              } else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
              }
              if (mainNormalizedRecord.children) {
                const children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                  addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
              }
              // if there was no original record, then the first one was not an alias and all
              // other aliases (if any) need to reference this record when adding children
              originalRecord = originalRecord || matcher;
              // TODO: add normalized records for more flexibility
              // if (parent && isAliasRecord(originalRecord)) {
              //   parent.children.push(originalRecord)
              // }
              // Avoid adding a record that doesn't display anything. This allows passing through records without a component to
              // not be reached and pass through the catch all route
              if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
                insertMatcher(matcher);
              }
            }
            return originalMatcher ? () => {
              // since other matchers are aliases, they should be removed by the original matcher
              removeRoute(originalMatcher);
            } : noop$1;
          }
          function removeRoute(matcherRef) {
            if (isRouteName(matcherRef)) {
              const matcher = matcherMap.get(matcherRef);
              if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
              }
            } else {
              const index = matchers.indexOf(matcherRef);
              if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
              }
            }
          }
          function getRoutes() {
            return matchers;
          }
          function insertMatcher(matcher) {
            let i = 0;
            while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (
            // Adding children with empty path should still appear before the parent
            // https://github.com/vuejs/router/issues/1124
            matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i]))) i++;
            matchers.splice(i, 0, matcher);
            // only add the original record to the name map
            if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
          }
          function resolve(location, currentLocation) {
            let matcher;
            let params = {};
            let path;
            let name;
            if ('name' in location && location.name) {
              matcher = matcherMap.get(location.name);
              if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
                location
              });
              name = matcher.record.name;
              params = assign(
              // paramsFromLocation is a new object
              paramsFromLocation(currentLocation.params,
              // only keep params that exist in the resolved location
              // TODO: only keep optional params coming from a parent record
              matcher.keys.filter(k => !k.optional).map(k => k.name)),
              // discard any existing params in the current location that do not exist here
              // #1497 this ensures better active/exact matching
              location.params && paramsFromLocation(location.params, matcher.keys.map(k => k.name)));
              // throws if cannot be stringified
              path = matcher.stringify(params);
            } else if ('path' in location) {
              // no need to resolve the path with the matcher as it was provided
              // this also allows the user to control the encoding
              path = location.path;
              matcher = matchers.find(m => m.re.test(path));
              // matcher should have a value after the loop
              if (matcher) {
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
              }
              // location is a relative path
            } else {
              // match by name or path of current route
              matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(m => m.re.test(currentLocation.path));
              if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
                location,
                currentLocation
              });
              name = matcher.record.name;
              // since we are navigating to the same location, we don't need to pick the
              // params like when `name` is provided
              params = assign({}, currentLocation.params, location.params);
              path = matcher.stringify(params);
            }
            const matched = [];
            let parentMatcher = matcher;
            while (parentMatcher) {
              // reversed order so parents are at the beginning
              matched.unshift(parentMatcher.record);
              parentMatcher = parentMatcher.parent;
            }
            return {
              name,
              path,
              params,
              matched,
              meta: mergeMetaFields(matched)
            };
          }
          // add initial routes
          routes.forEach(route => addRoute(route));
          return {
            addRoute,
            resolve,
            removeRoute,
            getRoutes,
            getRecordMatcher
          };
        }
        function paramsFromLocation(params, keys) {
          const newParams = {};
          for (const key of keys) {
            if (key in params) newParams[key] = params[key];
          }
          return newParams;
        }
        /**
         * Normalizes a RouteRecordRaw. Creates a copy
         *
         * @param record
         * @returns the normalized version
         */
        function normalizeRouteRecord(record) {
          return {
            path: record.path,
            redirect: record.redirect,
            name: record.name,
            meta: record.meta || {},
            aliasOf: undefined,
            beforeEnter: record.beforeEnter,
            props: normalizeRecordProps(record),
            children: record.children || [],
            instances: {},
            leaveGuards: new Set(),
            updateGuards: new Set(),
            enterCallbacks: {},
            components: 'components' in record ? record.components || null : record.component && {
              default: record.component
            }
          };
        }
        /**
         * Normalize the optional `props` in a record to always be an object similar to
         * components. Also accept a boolean for components.
         * @param record
         */
        function normalizeRecordProps(record) {
          const propsObject = {};
          // props does not exist on redirect records, but we can set false directly
          const props = record.props || false;
          if ('component' in record) {
            propsObject.default = props;
          } else {
            // NOTE: we could also allow a function to be applied to every component.
            // Would need user feedback for use cases
            for (const name in record.components) propsObject[name] = typeof props === 'boolean' ? props : props[name];
          }
          return propsObject;
        }
        /**
         * Checks if a record or any of its parent is an alias
         * @param record
         */
        function isAliasRecord(record) {
          while (record) {
            if (record.record.aliasOf) return true;
            record = record.parent;
          }
          return false;
        }
        /**
         * Merge meta fields of an array of records
         *
         * @param matched - array of matched records
         */
        function mergeMetaFields(matched) {
          return matched.reduce((meta, record) => assign(meta, record.meta), {});
        }
        function mergeOptions(defaults, partialOptions) {
          const options = {};
          for (const key in defaults) {
            options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
          }
          return options;
        }
        function isRecordChildOf(record, parent) {
          return parent.children.some(child => child === record || isRecordChildOf(record, child));
        }

        /**
         * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
         * < > `
         *
         * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
         * defines some extra characters to be encoded. Most browsers do not encode them
         * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
         * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
         * plus `-._~`. This extra safety should be applied to query by patching the
         * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
         * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
         * into a `/` if directly typed in. The _backtick_ (`````) should also be
         * encoded everywhere because some browsers like FF encode it when directly
         * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
         */
        // const EXTRA_RESERVED_RE = /[!'()*]/g
        // const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
        const HASH_RE = /#/g; // %23
        const AMPERSAND_RE = /&/g; // %26
        const SLASH_RE = /\//g; // %2F
        const EQUAL_RE = /=/g; // %3D
        const IM_RE = /\?/g; // %3F
        const PLUS_RE = /\+/g; // %2B
        /**
         * NOTE: It's not clear to me if we should encode the + symbol in queries, it
         * seems to be less flexible than not doing so and I can't find out the legacy
         * systems requiring this for regular requests like text/html. In the standard,
         * the encoding of the plus character is only mentioned for
         * application/x-www-form-urlencoded
         * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
         * leave the plus character as is in queries. To be more flexible, we allow the
         * plus character on the query, but it can also be manually encoded by the user.
         *
         * Resources:
         * - https://url.spec.whatwg.org/#urlencoded-parsing
         * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
         */
        const ENC_BRACKET_OPEN_RE = /%5B/g; // [
        const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
        const ENC_CARET_RE = /%5E/g; // ^
        const ENC_BACKTICK_RE = /%60/g; // `
        const ENC_CURLY_OPEN_RE = /%7B/g; // {
        const ENC_PIPE_RE = /%7C/g; // |
        const ENC_CURLY_CLOSE_RE = /%7D/g; // }
        const ENC_SPACE_RE = /%20/g; // }
        /**
         * Encode characters that need to be encoded on the path, search and hash
         * sections of the URL.
         *
         * @internal
         * @param text - string to encode
         * @returns encoded string
         */
        function commonEncode(text) {
          return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
        }
        /**
         * Encode characters that need to be encoded on the hash section of the URL.
         *
         * @param text - string to encode
         * @returns encoded string
         */
        function encodeHash(text) {
          return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
        }
        /**
         * Encode characters that need to be encoded query values on the query
         * section of the URL.
         *
         * @param text - string to encode
         * @returns encoded string
         */
        function encodeQueryValue(text) {
          return commonEncode(text)
          // Encode the space as +, encode the + to differentiate it from the space
          .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
        }
        /**
         * Like `encodeQueryValue` but also encodes the `=` character.
         *
         * @param text - string to encode
         */
        function encodeQueryKey(text) {
          return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
        }
        /**
         * Encode characters that need to be encoded on the path section of the URL.
         *
         * @param text - string to encode
         * @returns encoded string
         */
        function encodePath(text) {
          return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
        }
        /**
         * Encode characters that need to be encoded on the path section of the URL as a
         * param. This function encodes everything {@link encodePath} does plus the
         * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
         * string instead.
         *
         * @param text - string to encode
         * @returns encoded string
         */
        function encodeParam(text) {
          return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
        }
        /**
         * Decode text using `decodeURIComponent`. Returns the original text if it
         * fails.
         *
         * @param text - string to decode
         * @returns decoded string
         */
        function decode(text) {
          try {
            return decodeURIComponent('' + text);
          } catch (err) {}
          return '' + text;
        }

        /**
         * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
         * version with the leading `?` and without Should work as URLSearchParams
          * @internal
         *
         * @param search - search string to parse
         * @returns a query object
         */
        function parseQuery(search) {
          const query = {};
          // avoid creating an object with an empty key and empty value
          // because of split('&')
          if (search === '' || search === '?') return query;
          const hasLeadingIM = search[0] === '?';
          const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
          for (let i = 0; i < searchParams.length; ++i) {
            // pre decode the + into space
            const searchParam = searchParams[i].replace(PLUS_RE, ' ');
            // allow the = character
            const eqPos = searchParam.indexOf('=');
            const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
            const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
            if (key in query) {
              // an extra variable for ts types
              let currentValue = query[key];
              if (!isArray$1(currentValue)) {
                currentValue = query[key] = [currentValue];
              }
              currentValue.push(value);
            } else {
              query[key] = value;
            }
          }
          return query;
        }
        /**
         * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
         * doesn't prepend a `?`
         *
         * @internal
         *
         * @param query - query object to stringify
         * @returns string version of the query without the leading `?`
         */
        function stringifyQuery(query) {
          let search = '';
          for (let key in query) {
            const value = query[key];
            key = encodeQueryKey(key);
            if (value == null) {
              // only null adds the value
              if (value !== undefined) {
                search += (search.length ? '&' : '') + key;
              }
              continue;
            }
            // keep null values
            const values = isArray$1(value) ? value.map(v => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
            values.forEach(value => {
              // skip undefined values in arrays as if they were not present
              // smaller code than using filter
              if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null) search += '=' + value;
              }
            });
          }
          return search;
        }
        /**
         * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
         * numbers into strings, removing keys with an undefined value and replacing
         * undefined with null in arrays
         *
         * @param query - query object to normalize
         * @returns a normalized query object
         */
        function normalizeQuery(query) {
          const normalizedQuery = {};
          for (const key in query) {
            const value = query[key];
            if (value !== undefined) {
              normalizedQuery[key] = isArray$1(value) ? value.map(v => v == null ? null : '' + v) : value == null ? value : '' + value;
            }
          }
          return normalizedQuery;
        }

        /**
         * RouteRecord being rendered by the closest ancestor Router View. Used for
         * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
         * Location Matched
         *
         * @internal
         */
        const matchedRouteKey = Symbol('');
        /**
         * Allows overriding the router view depth to control which component in
         * `matched` is rendered. rvd stands for Router View Depth
         *
         * @internal
         */
        const viewDepthKey = Symbol('');
        /**
         * Allows overriding the router instance returned by `useRouter` in tests. r
         * stands for router
         *
         * @internal
         */
        const routerKey = Symbol('');
        /**
         * Allows overriding the current route returned by `useRoute` in tests. rl
         * stands for route location
         *
         * @internal
         */
        const routeLocationKey = Symbol('');
        /**
         * Allows overriding the current route used by router-view. Internally this is
         * used when the `route` prop is passed.
         *
         * @internal
         */
        const routerViewLocationKey = Symbol('');

        /**
         * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
         */
        function useCallbacks() {
          let handlers = [];
          function add(handler) {
            handlers.push(handler);
            return () => {
              const i = handlers.indexOf(handler);
              if (i > -1) handlers.splice(i, 1);
            };
          }
          function reset() {
            handlers = [];
          }
          return {
            add,
            list: () => handlers,
            reset
          };
        }
        function guardToPromiseFn(guard, to, from, record, name) {
          // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
          const enterCallbackArray = record && (
          // name is defined if record is because of the function overload
          record.enterCallbacks[name] = record.enterCallbacks[name] || []);
          return () => new Promise((resolve, reject) => {
            const next = valid => {
              if (valid === false) {
                reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */, {
                  from,
                  to
                }));
              } else if (valid instanceof Error) {
                reject(valid);
              } else if (isRouteLocation(valid)) {
                reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */, {
                  from: to,
                  to: valid
                }));
              } else {
                if (enterCallbackArray &&
                // since enterCallbackArray is truthy, both record and name also are
                record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') {
                  enterCallbackArray.push(valid);
                }
                resolve();
              }
            };
            // wrapping with Promise.resolve allows it to work with both async and sync guards
            const guardReturn = guard.call(record && record.instances[name], to, from, next);
            let guardCall = Promise.resolve(guardReturn);
            if (guard.length < 3) guardCall = guardCall.then(next);
            guardCall.catch(err => reject(err));
          });
        }
        function extractComponentsGuards(matched, guardType, to, from) {
          const guards = [];
          for (const record of matched) {
            for (const name in record.components) {
              let rawComponent = record.components[name];
              // skip update and leave guards if the route component is not mounted
              if (guardType !== 'beforeRouteEnter' && !record.instances[name]) continue;
              if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
              } else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                guards.push(() => componentPromise.then(resolved => {
                  if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                  const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                  // replace the function with the resolved component
                  // cannot be null or undefined because we went into the for loop
                  record.components[name] = resolvedComponent;
                  // __vccOpts is added by vue-class-component and contain the regular options
                  const options = resolvedComponent.__vccOpts || resolvedComponent;
                  const guard = options[guardType];
                  return guard && guardToPromiseFn(guard, to, from, record, name)();
                }));
              }
            }
          }
          return guards;
        }
        /**
         * Allows differentiating lazy components from functional components and vue-class-component
         * @internal
         *
         * @param component
         */
        function isRouteComponent(component) {
          return typeof component === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
        }

        // TODO: we could allow currentRoute as a prop to expose `isActive` and
        // `isExactActive` behavior should go through an RFC
        function useLink(props) {
          const router = inject(routerKey);
          const currentRoute = inject(routeLocationKey);
          const route = computed(() => router.resolve(unref(props.to)));
          const activeRecordIndex = computed(() => {
            const {
              matched
            } = route.value;
            const {
              length
            } = matched;
            const routeMatched = matched[length - 1];
            const currentMatched = currentRoute.matched;
            if (!routeMatched || !currentMatched.length) return -1;
            const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
            if (index > -1) return index;
            // possible parent record
            const parentRecordPath = getOriginalPath(matched[length - 2]);
            return (
              // we are dealing with nested routes
              length > 1 &&
              // if the parent and matched route have the same path, this link is
              // referring to the empty child. Or we currently are on a different
              // child of the same parent
              getOriginalPath(routeMatched) === parentRecordPath &&
              // avoid comparing the child with its parent
              currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
            );
          });
          const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
          const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
          function navigate(e = {}) {
            if (guardEvent(e)) {
              return router[unref(props.replace) ? 'replace' : 'push'](unref(props.to)
              // avoid uncaught errors are they are logged anyway
              ).catch(noop$1);
            }
            return Promise.resolve();
          }
          /**
           * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
           */
          return {
            route,
            href: computed(() => route.value.href),
            isActive,
            isExactActive,
            navigate
          };
        }
        const RouterLinkImpl = /*#__PURE__*/defineComponent({
          name: 'RouterLink',
          compatConfig: {
            MODE: 3
          },
          props: {
            to: {
              type: [String, Object],
              required: true
            },
            replace: Boolean,
            activeClass: String,
            // inactiveClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
              type: String,
              default: 'page'
            }
          },
          useLink,
          setup(props, {
            slots
          }) {
            const link = reactive(useLink(props));
            const {
              options
            } = inject(routerKey);
            const elClass = computed(() => ({
              [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
              // [getLinkClass(
              //   props.inactiveClass,
              //   options.linkInactiveClass,
              //   'router-link-inactive'
              // )]: !link.isExactActive,
              [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive
            }));
            return () => {
              const children = slots.default && slots.default(link);
              return props.custom ? children : h('a', {
                'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
                href: link.href,
                // this would override user added attrs but Vue will still add
                // the listener, so we end up triggering both
                onClick: link.navigate,
                class: elClass.value
              }, children);
            };
          }
        });
        // export the public type for h/tsx inference
        // also to avoid inline import() in generated d.ts files
        /**
         * Component to render a link that triggers a navigation on click.
         */
        const RouterLink = RouterLinkImpl;
        function guardEvent(e) {
          // don't redirect with control keys
          if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
          // don't redirect when preventDefault called
          if (e.defaultPrevented) return;
          // don't redirect on right click
          if (e.button !== undefined && e.button !== 0) return;
          // don't redirect if `target="_blank"`
          // @ts-expect-error getAttribute does exist
          if (e.currentTarget && e.currentTarget.getAttribute) {
            // @ts-expect-error getAttribute exists
            const target = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(target)) return;
          }
          // this may be a Weex event which doesn't have this method
          if (e.preventDefault) e.preventDefault();
          return true;
        }
        function includesParams(outer, inner) {
          for (const key in inner) {
            const innerValue = inner[key];
            const outerValue = outer[key];
            if (typeof innerValue === 'string') {
              if (innerValue !== outerValue) return false;
            } else {
              if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
            }
          }
          return true;
        }
        /**
         * Get the original path value of a record by following its aliasOf
         * @param record
         */
        function getOriginalPath(record) {
          return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
        }
        /**
         * Utility class to get the active class based on defaults.
         * @param propClass
         * @param globalClass
         * @param defaultClass
         */
        const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
        const RouterViewImpl = /*#__PURE__*/defineComponent({
          name: 'RouterView',
          // #674 we manually inherit them
          inheritAttrs: false,
          props: {
            name: {
              type: String,
              default: 'default'
            },
            route: Object
          },
          // Better compat for @vue/compat users
          // https://github.com/vuejs/router/issues/1315
          compatConfig: {
            MODE: 3
          },
          setup(props, {
            attrs,
            slots
          }) {
            const injectedRoute = inject(routerViewLocationKey);
            const routeToDisplay = computed(() => props.route || injectedRoute.value);
            const injectedDepth = inject(viewDepthKey, 0);
            // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
            // that are used to reuse the `path` property
            const depth = computed(() => {
              let initialDepth = unref(injectedDepth);
              const {
                matched
              } = routeToDisplay.value;
              let matchedRoute;
              while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
                initialDepth++;
              }
              return initialDepth;
            });
            const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
            provide(viewDepthKey, computed(() => depth.value + 1));
            provide(matchedRouteKey, matchedRouteRef);
            provide(routerViewLocationKey, routeToDisplay);
            const viewRef = ref();
            // watch at the same time the component instance, the route record we are
            // rendering, and the name
            watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
              // copy reused instances
              if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name, so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                  if (!to.leaveGuards.size) {
                    to.leaveGuards = from.leaveGuards;
                  }
                  if (!to.updateGuards.size) {
                    to.updateGuards = from.updateGuards;
                  }
                }
              }
              // trigger beforeRouteEnter next callbacks
              if (instance && to && (
              // if there is no instance but to and from are the same this might be
              // the first visit
              !from || !isSameRouteRecord(to, from) || !oldInstance)) {
                (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
              }
            }, {
              flush: 'post'
            });
            return () => {
              const route = routeToDisplay.value;
              // we need the value at the time we render because when we unmount, we
              // navigated to a different location so the value is different
              const currentName = props.name;
              const matchedRoute = matchedRouteRef.value;
              const ViewComponent = matchedRoute && matchedRoute.components[currentName];
              if (!ViewComponent) {
                return normalizeSlot(slots.default, {
                  Component: ViewComponent,
                  route
                });
              }
              // props from route configuration
              const routePropsOption = matchedRoute.props[currentName];
              const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;
              const onVnodeUnmounted = vnode => {
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) {
                  matchedRoute.instances[currentName] = null;
                }
              };
              const component = h(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef
              }));
              return (
                // pass the vnode to the slot as a prop.
                // h and <component :is="..."> both accept vnodes
                normalizeSlot(slots.default, {
                  Component: component,
                  route
                }) || component
              );
            };
          }
        });
        function normalizeSlot(slot, data) {
          if (!slot) return null;
          const slotContent = slot(data);
          return slotContent.length === 1 ? slotContent[0] : slotContent;
        }
        // export the public type for h/tsx inference
        // also to avoid inline import() in generated d.ts files
        /**
         * Component to display the current route the user is at.
         */
        const RouterView = RouterViewImpl;

        /**
         * Creates a Router instance that can be used by a Vue app.
         *
         * @param options - {@link RouterOptions}
         */
        function createRouter(options) {
          const matcher = createRouterMatcher(options.routes, options);
          const parseQuery$1 = options.parseQuery || parseQuery;
          const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
          const routerHistory = options.history;
          const beforeGuards = useCallbacks();
          const beforeResolveGuards = useCallbacks();
          const afterGuards = useCallbacks();
          const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
          let pendingLocation = START_LOCATION_NORMALIZED;
          // leave the scrollRestoration if no scrollBehavior is provided
          if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
          const encodeParams = applyToParams.bind(null, encodeParam);
          const decodeParams =
          // @ts-expect-error: intentionally avoid the type check
          applyToParams.bind(null, decode);
          function addRoute(parentOrRoute, route) {
            let parent;
            let record;
            if (isRouteName(parentOrRoute)) {
              parent = matcher.getRecordMatcher(parentOrRoute);
              record = route;
            } else {
              record = parentOrRoute;
            }
            return matcher.addRoute(record, parent);
          }
          function removeRoute(name) {
            const recordMatcher = matcher.getRecordMatcher(name);
            if (recordMatcher) {
              matcher.removeRoute(recordMatcher);
            }
          }
          function getRoutes() {
            return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
          }
          function hasRoute(name) {
            return !!matcher.getRecordMatcher(name);
          }
          function resolve(rawLocation, currentLocation) {
            // const objectLocation = routerLocationAsObject(rawLocation)
            // we create a copy to modify it later
            currentLocation = assign({}, currentLocation || currentRoute.value);
            if (typeof rawLocation === 'string') {
              const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
              const matchedRoute = matcher.resolve({
                path: locationNormalized.path
              }, currentLocation);
              const href = routerHistory.createHref(locationNormalized.fullPath);
              // locationNormalized is always a new object
              return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href
              });
            }
            let matcherLocation;
            // path could be relative in object as well
            if ('path' in rawLocation) {
              matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
              });
            } else {
              // remove any nullish param
              const targetParams = assign({}, rawLocation.params);
              for (const key in targetParams) {
                if (targetParams[key] == null) {
                  delete targetParams[key];
                }
              }
              // pass encoded values to the matcher, so it can produce encoded path and fullPath
              matcherLocation = assign({}, rawLocation, {
                params: encodeParams(targetParams)
              });
              // current location params are decoded, we need to encode them in case the
              // matcher merges the params
              currentLocation.params = encodeParams(currentLocation.params);
            }
            const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
            const hash = rawLocation.hash || '';
            // the matcher might have merged current location params, so
            // we need to run the decoding again
            matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
            const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
              hash: encodeHash(hash),
              path: matchedRoute.path
            }));
            const href = routerHistory.createHref(fullPath);
            return assign({
              fullPath,
              // keep the hash encoded so fullPath is effectively path + encodedQuery +
              // hash
              hash,
              query:
              // if the user is using a custom query lib like qs, we might have
              // nested objects, so we keep the query as is, meaning it can contain
              // numbers at `$route.query`, but at the point, the user will have to
              // use their own type anyway.
              // https://github.com/vuejs/router/issues/328#issuecomment-649481567
              stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
            }, matchedRoute, {
              redirectedFrom: undefined,
              href
            });
          }
          function locationAsObject(to) {
            return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
          }
          function checkCanceledNavigation(to, from) {
            if (pendingLocation !== to) {
              return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */, {
                from,
                to
              });
            }
          }
          function push(to) {
            return pushWithRedirect(to);
          }
          function replace(to) {
            return push(assign(locationAsObject(to), {
              replace: true
            }));
          }
          function handleRedirectRecord(to) {
            const lastMatched = to.matched[to.matched.length - 1];
            if (lastMatched && lastMatched.redirect) {
              const {
                redirect
              } = lastMatched;
              let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
              if (typeof newTargetLocation === 'string') {
                newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) :
                // force empty params
                {
                  path: newTargetLocation
                };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
              }
              return assign({
                query: to.query,
                hash: to.hash,
                // avoid transferring params if the redirect has a path
                params: 'path' in newTargetLocation ? {} : to.params
              }, newTargetLocation);
            }
          }
          function pushWithRedirect(to, redirectedFrom) {
            const targetLocation = pendingLocation = resolve(to);
            const from = currentRoute.value;
            const data = to.state;
            const force = to.force;
            // to could be a string where `replace` is a function
            const replace = to.replace === true;
            const shouldRedirect = handleRedirectRecord(targetLocation);
            if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
              state: typeof shouldRedirect === 'object' ? assign({}, data, shouldRedirect.state) : data,
              force,
              replace
            }),
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
            // if it was a redirect we already called `pushWithRedirect` above
            const toLocation = targetLocation;
            toLocation.redirectedFrom = redirectedFrom;
            let failure;
            if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
              failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */, {
                to: toLocation,
                from
              });
              // trigger scroll to allow scrolling to the same anchor
              handleScroll(from, from,
              // this is a push, the only way for it to be triggered from a
              // history.listen is with a redirect, which makes it become a push
              true,
              // This cannot be the first navigation because the initial location
              // cannot be manually navigated to
              false);
            }
            return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch(error => isNavigationFailure(error) ?
            // navigation redirects still mark the router as ready
            isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */) ? error : markAsReady(error) // also returns the error
            :
            // reject any unknown error
            triggerError(error, toLocation, from)).then(failure => {
              if (failure) {
                if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
                  return pushWithRedirect(
                  // keep options
                  assign({
                    // preserve an existing replacement but allow the redirect to override it
                    replace
                  }, locationAsObject(failure.to), {
                    state: typeof failure.to === 'object' ? assign({}, data, failure.to.state) : data,
                    force
                  }),
                  // preserve the original redirectedFrom if any
                  redirectedFrom || toLocation);
                }
              } else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
              }
              triggerAfterEach(toLocation, from, failure);
              return failure;
            });
          }
          /**
           * Helper to reject and skip all navigation guards if a new navigation happened
           * @param to
           * @param from
           */
          function checkCanceledNavigationAndReject(to, from) {
            const error = checkCanceledNavigation(to, from);
            return error ? Promise.reject(error) : Promise.resolve();
          }
          function runWithContext(fn) {
            const app = installedApps.values().next().value;
            // support Vue < 3.3
            return app && typeof app.runWithContext === 'function' ? app.runWithContext(fn) : fn();
          }
          // TODO: refactor the whole before guards by internally using router.beforeEach
          function navigate(to, from) {
            let guards;
            const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
            // all components here have been resolved once because we are leaving
            guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
            // leavingRecords is already reversed
            for (const record of leavingRecords) {
              record.leaveGuards.forEach(guard => {
                guards.push(guardToPromiseFn(guard, to, from));
              });
            }
            const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeRouteLeave guards
            return runGuardQueue(guards).then(() => {
              // check global guards beforeEach
              guards = [];
              for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
              }
              guards.push(canceledNavigationCheck);
              return runGuardQueue(guards);
            }).then(() => {
              // check in components beforeRouteUpdate
              guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
              for (const record of updatingRecords) {
                record.updateGuards.forEach(guard => {
                  guards.push(guardToPromiseFn(guard, to, from));
                });
              }
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
            }).then(() => {
              // check the route beforeEnter
              guards = [];
              for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && !from.matched.includes(record)) {
                  if (isArray$1(record.beforeEnter)) {
                    for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
                  } else {
                    guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                  }
                }
              }
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
            }).then(() => {
              // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
              // clear existing enterCallbacks, these are added by extractComponentsGuards
              to.matched.forEach(record => record.enterCallbacks = {});
              // check in-component beforeRouteEnter
              guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
            }).then(() => {
              // check global guards beforeResolve
              guards = [];
              for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
              }
              guards.push(canceledNavigationCheck);
              return runGuardQueue(guards);
            })
            // catch any navigation canceled
            .catch(err => isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */) ? err : Promise.reject(err));
          }
          function triggerAfterEach(to, from, failure) {
            // navigation is confirmed, call afterGuards
            // TODO: wrap with error handlers
            for (const guard of afterGuards.list()) {
              runWithContext(() => guard(to, from, failure));
            }
          }
          /**
           * - Cleans up any navigation guards
           * - Changes the url if necessary
           * - Calls the scrollBehavior
           */
          function finalizeNavigation(toLocation, from, isPush, replace, data) {
            // a more recent navigation took place
            const error = checkCanceledNavigation(toLocation, from);
            if (error) return error;
            // only consider as push if it's not the first navigation
            const isFirstNavigation = from === START_LOCATION_NORMALIZED;
            const state = !isBrowser ? {} : history.state;
            // change URL only if the user did a push/replace and if it's not the initial navigation because
            // it's just reflecting the url
            if (isPush) {
              // on the initial navigation, we want to reuse the scroll position from
              // history state if it exists
              if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
                scroll: isFirstNavigation && state && state.scroll
              }, data));else routerHistory.push(toLocation.fullPath, data);
            }
            // accept current navigation
            currentRoute.value = toLocation;
            handleScroll(toLocation, from, isPush, isFirstNavigation);
            markAsReady();
          }
          let removeHistoryListener;
          // attach listener to history to trigger navigations
          function setupListeners() {
            // avoid setting up listeners twice due to an invalid first navigation
            if (removeHistoryListener) return;
            removeHistoryListener = routerHistory.listen((to, _from, info) => {
              if (!router.listening) return;
              // cannot be a redirect route because it was in history
              const toLocation = resolve(to);
              // due to dynamic routing, and to hash history with manual navigation
              // (manually changing the url or calling history.hash = '#/somewhere'),
              // there could be a redirect record in history
              const shouldRedirect = handleRedirectRecord(toLocation);
              if (shouldRedirect) {
                pushWithRedirect(assign(shouldRedirect, {
                  replace: true
                }), toLocation).catch(noop$1);
                return;
              }
              pendingLocation = toLocation;
              const from = currentRoute.value;
              // TODO: should be moved to web history?
              if (isBrowser) {
                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
              }
              navigate(toLocation, from).catch(error => {
                if (isNavigationFailure(error, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                  return error;
                }
                if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
                  // Here we could call if (info.delta) routerHistory.go(-info.delta,
                  // false) but this is bug prone as we have no way to wait the
                  // navigation to be finished before calling pushWithRedirect. Using
                  // a setTimeout of 16ms seems to work but there is no guarantee for
                  // it to work on every browser. So instead we do not restore the
                  // history entry and trigger a new navigation as requested by the
                  // navigation guard.
                  // the error is already handled by router.push we just want to avoid
                  // logging the error
                  pushWithRedirect(error.to, toLocation
                  // avoid an uncaught rejection, let push call triggerError
                  ).then(failure => {
                    // manual change in hash history #916 ending up in the URL not
                    // changing, but it was changed by the manual url change, so we
                    // need to manually change it ourselves
                    if (isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */) && !info.delta && info.type === NavigationType.pop) {
                      routerHistory.go(-1, false);
                    }
                  }).catch(noop$1);
                  // avoid the then branch
                  return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta) {
                  routerHistory.go(-info.delta, false);
                }
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
              }).then(failure => {
                failure = failure || finalizeNavigation(
                // after navigation, all matched components are resolved
                toLocation, from, false);
                // revert the navigation
                if (failure) {
                  if (info.delta &&
                  // a new navigation has been triggered, so we do not want to revert, that will change the current history
                  // entry while a different route is displayed
                  !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                    routerHistory.go(-info.delta, false);
                  } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */)) {
                    // manual change in hash history #916
                    // it's like a push but lacks the information of the direction
                    routerHistory.go(-1, false);
                  }
                }
                triggerAfterEach(toLocation, from, failure);
              }).catch(noop$1);
            });
          }
          // Initialization and Errors
          let readyHandlers = useCallbacks();
          let errorHandlers = useCallbacks();
          let ready;
          /**
           * Trigger errorHandlers added via onError and throws the error as well
           *
           * @param error - error to throw
           * @param to - location we were navigating to when the error happened
           * @param from - location we were navigating from when the error happened
           * @returns the error as a rejected promise
           */
          function triggerError(error, to, from) {
            markAsReady(error);
            const list = errorHandlers.list();
            if (list.length) {
              list.forEach(handler => handler(error, to, from));
            } else {
              console.error(error);
            }
            return Promise.reject(error);
          }
          function isReady() {
            if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
            return new Promise((resolve, reject) => {
              readyHandlers.add([resolve, reject]);
            });
          }
          function markAsReady(err) {
            if (!ready) {
              // still not ready if an error happened
              ready = !err;
              setupListeners();
              readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
              readyHandlers.reset();
            }
            return err;
          }
          // Scroll behavior
          function handleScroll(to, from, isPush, isFirstNavigation) {
            const {
              scrollBehavior
            } = options;
            if (!isBrowser || !scrollBehavior) return Promise.resolve();
            const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
            return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then(position => position && scrollToPosition(position)).catch(err => triggerError(err, to, from));
          }
          const go = delta => routerHistory.go(delta);
          let started;
          const installedApps = new Set();
          const router = {
            currentRoute,
            listening: true,
            addRoute,
            removeRoute,
            hasRoute,
            getRoutes,
            resolve,
            options,
            push,
            replace,
            go,
            back: () => go(-1),
            forward: () => go(1),
            beforeEach: beforeGuards.add,
            beforeResolve: beforeResolveGuards.add,
            afterEach: afterGuards.add,
            onError: errorHandlers.add,
            isReady,
            install(app) {
              const router = this;
              app.component('RouterLink', RouterLink);
              app.component('RouterView', RouterView);
              app.config.globalProperties.$router = router;
              Object.defineProperty(app.config.globalProperties, '$route', {
                enumerable: true,
                get: () => unref(currentRoute)
              });
              // this initial navigation is only necessary on client, on server it doesn't
              // make sense because it will create an extra unnecessary navigation and could
              // lead to problems
              if (isBrowser &&
              // used for the initial navigation client side to avoid pushing
              // multiple times when the router is used in multiple apps
              !started && currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch(err => {});
              }
              const reactiveRoute = {};
              for (const key in START_LOCATION_NORMALIZED) {
                // @ts-expect-error: the key matches
                reactiveRoute[key] = computed(() => currentRoute.value[key]);
              }
              app.provide(routerKey, router);
              app.provide(routeLocationKey, reactive(reactiveRoute));
              app.provide(routerViewLocationKey, currentRoute);
              const unmountApp = app.unmount;
              installedApps.add(app);
              app.unmount = function () {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                  // invalidate the current navigation
                  pendingLocation = START_LOCATION_NORMALIZED;
                  removeHistoryListener && removeHistoryListener();
                  removeHistoryListener = null;
                  currentRoute.value = START_LOCATION_NORMALIZED;
                  started = false;
                  ready = false;
                }
                unmountApp();
              };
            }
          };
          // TODO: type this as NavigationGuardReturn or similar instead of any
          function runGuardQueue(guards) {
            return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
          }
          return router;
        }
        function extractChangingRecords(to, from) {
          const leavingRecords = [];
          const updatingRecords = [];
          const enteringRecords = [];
          const len = Math.max(from.matched.length, to.matched.length);
          for (let i = 0; i < len; i++) {
            const recordFrom = from.matched[i];
            if (recordFrom) {
              if (to.matched.find(record => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
            }
            const recordTo = to.matched[i];
            if (recordTo) {
              // the type doesn't matter because we are comparing per reference
              if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
                enteringRecords.push(recordTo);
              }
            }
          }
          return [leavingRecords, updatingRecords, enteringRecords];
        }
        const swiperBundle = '';

        /**
         * Swiper 8.0.7
         * Most modern mobile touch slider and framework with hardware accelerated transitions
         * https://swiperjs.com
         *
         * Copyright 2014-2022 Vladimir Kharlampidi
         *
         * Released under the MIT License
         *
         * Released on: March 4, 2022
         */

        (function (global, factory) {
          typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
        })(globalThis, function () {
          /**
           * SSR Window 4.0.2
           * Better handling for window object in SSR environment
           * https://github.com/nolimits4web/ssr-window
           *
           * Copyright 2021, Vladimir Kharlampidi
           *
           * Licensed under MIT
           *
           * Released on: December 13, 2021
           */

          /* eslint-disable no-param-reassign */
          function isObject$1(obj) {
            return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
          }
          function extend$1(target, src) {
            if (target === void 0) {
              target = {};
            }
            if (src === void 0) {
              src = {};
            }
            Object.keys(src).forEach(key => {
              if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
                extend$1(target[key], src[key]);
              }
            });
          }
          const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
              blur() {},
              nodeName: ''
            },
            querySelector() {
              return null;
            },
            querySelectorAll() {
              return [];
            },
            getElementById() {
              return null;
            },
            createEvent() {
              return {
                initEvent() {}
              };
            },
            createElement() {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                  return [];
                }
              };
            },
            createElementNS() {
              return {};
            },
            importNode() {
              return null;
            },
            location: {
              hash: '',
              host: '',
              hostname: '',
              href: '',
              origin: '',
              pathname: '',
              protocol: '',
              search: ''
            }
          };
          function getDocument() {
            const doc = typeof document !== 'undefined' ? document : {};
            extend$1(doc, ssrDocument);
            return doc;
          }
          const ssrWindow = {
            document: ssrDocument,
            navigator: {
              userAgent: ''
            },
            location: {
              hash: '',
              host: '',
              hostname: '',
              href: '',
              origin: '',
              pathname: '',
              protocol: '',
              search: ''
            },
            history: {
              replaceState() {},
              pushState() {},
              go() {},
              back() {}
            },
            CustomEvent: function CustomEvent() {
              return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
              return {
                getPropertyValue() {
                  return '';
                }
              };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
              return {};
            },
            requestAnimationFrame(callback) {
              if (typeof setTimeout === 'undefined') {
                callback();
                return null;
              }
              return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
              if (typeof setTimeout === 'undefined') {
                return;
              }
              clearTimeout(id);
            }
          };
          function getWindow() {
            const win = typeof window !== 'undefined' ? window : {};
            extend$1(win, ssrWindow);
            return win;
          }

          /**
           * Dom7 4.0.4
           * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
           * https://framework7.io/docs/dom7.html
           *
           * Copyright 2022, Vladimir Kharlampidi
           *
           * Licensed under MIT
           *
           * Released on: January 11, 2022
           */
          /* eslint-disable no-proto */

          function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, '__proto__', {
              get() {
                return proto;
              },
              set(value) {
                proto.__proto__ = value;
              }
            });
          }
          class Dom7 extends Array {
            constructor(items) {
              if (typeof items === 'number') {
                super(items);
              } else {
                super(...(items || []));
                makeReactive(this);
              }
            }
          }
          function arrayFlat(arr) {
            if (arr === void 0) {
              arr = [];
            }
            const res = [];
            arr.forEach(el => {
              if (Array.isArray(el)) {
                res.push(...arrayFlat(el));
              } else {
                res.push(el);
              }
            });
            return res;
          }
          function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
          }
          function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) {
              if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
            }
            return uniqueArray;
          }
          function qsa(selector, context) {
            if (typeof selector !== 'string') {
              return [selector];
            }
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) {
              a.push(res[i]);
            }
            return a;
          }
          function $(selector, context) {
            const window = getWindow();
            const document = getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) {
              return selector;
            }
            if (!selector) {
              return new Dom7(arr);
            }
            if (typeof selector === 'string') {
              const html = selector.trim();
              if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                let toCreate = 'div';
                if (html.indexOf('<li') === 0) toCreate = 'ul';
                if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                if (html.indexOf('<tbody') === 0) toCreate = 'table';
                if (html.indexOf('<option') === 0) toCreate = 'select';
                const tempParent = document.createElement(toCreate);
                tempParent.innerHTML = html;
                for (let i = 0; i < tempParent.childNodes.length; i += 1) {
                  arr.push(tempParent.childNodes[i]);
                }
              } else {
                arr = qsa(selector.trim(), context || document);
              } // arr = qsa(selector, document);
            } else if (selector.nodeType || selector === window || selector === document) {
              arr.push(selector);
            } else if (Array.isArray(selector)) {
              if (selector instanceof Dom7) return selector;
              arr = selector;
            }
            return new Dom7(arrayUnique(arr));
          }
          $.fn = Dom7.prototype; // eslint-disable-next-line

          function addClass() {
            for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
              classes[_key] = arguments[_key];
            }
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            this.forEach(el => {
              el.classList.add(...classNames);
            });
            return this;
          }
          function removeClass() {
            for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              classes[_key2] = arguments[_key2];
            }
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            this.forEach(el => {
              el.classList.remove(...classNames);
            });
            return this;
          }
          function toggleClass() {
            for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              classes[_key3] = arguments[_key3];
            }
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            this.forEach(el => {
              classNames.forEach(className => {
                el.classList.toggle(className);
              });
            });
          }
          function hasClass() {
            for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              classes[_key4] = arguments[_key4];
            }
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            return arrayFilter(this, el => {
              return classNames.filter(className => el.classList.contains(className)).length > 0;
            }).length > 0;
          }
          function attr(attrs, value) {
            if (arguments.length === 1 && typeof attrs === 'string') {
              // Get attr
              if (this[0]) return this[0].getAttribute(attrs);
              return undefined;
            } // Set attrs

            for (let i = 0; i < this.length; i += 1) {
              if (arguments.length === 2) {
                // String
                this[i].setAttribute(attrs, value);
              } else {
                // Object
                for (const attrName in attrs) {
                  this[i][attrName] = attrs[attrName];
                  this[i].setAttribute(attrName, attrs[attrName]);
                }
              }
            }
            return this;
          }
          function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) {
              this[i].removeAttribute(attr);
            }
            return this;
          }
          function transform(transform) {
            for (let i = 0; i < this.length; i += 1) {
              this[i].style.transform = transform;
            }
            return this;
          }
          function transition$1(duration) {
            for (let i = 0; i < this.length; i += 1) {
              this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
            }
            return this;
          }
          function on() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            let [eventType, targetSelector, listener, capture] = args;
            if (typeof args[1] === 'function') {
              [eventType, listener, capture] = args;
              targetSelector = undefined;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
              const target = e.target;
              if (!target) return;
              const eventData = e.target.dom7EventData || [];
              if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
              }
              if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
                const parents = $(target).parents(); // eslint-disable-line

                for (let k = 0; k < parents.length; k += 1) {
                  if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
              }
            }
            function handleEvent(e) {
              const eventData = e && e.target ? e.target.dom7EventData || [] : [];
              if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
              }
              listener.apply(this, eventData);
            }
            const events = eventType.split(' ');
            let j;
            for (let i = 0; i < this.length; i += 1) {
              const el = this[i];
              if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                  const event = events[j];
                  if (!el.dom7Listeners) el.dom7Listeners = {};
                  if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                  el.dom7Listeners[event].push({
                    listener,
                    proxyListener: handleEvent
                  });
                  el.addEventListener(event, handleEvent, capture);
                }
              } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                  const event = events[j];
                  if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                  if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                  el.dom7LiveListeners[event].push({
                    listener,
                    proxyListener: handleLiveEvent
                  });
                  el.addEventListener(event, handleLiveEvent, capture);
                }
              }
            }
            return this;
          }
          function off() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }
            let [eventType, targetSelector, listener, capture] = args;
            if (typeof args[1] === 'function') {
              [eventType, listener, capture] = args;
              targetSelector = undefined;
            }
            if (!capture) capture = false;
            const events = eventType.split(' ');
            for (let i = 0; i < events.length; i += 1) {
              const event = events[i];
              for (let j = 0; j < this.length; j += 1) {
                const el = this[j];
                let handlers;
                if (!targetSelector && el.dom7Listeners) {
                  handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                  handlers = el.dom7LiveListeners[event];
                }
                if (handlers && handlers.length) {
                  for (let k = handlers.length - 1; k >= 0; k -= 1) {
                    const handler = handlers[k];
                    if (listener && handler.listener === listener) {
                      el.removeEventListener(event, handler.proxyListener, capture);
                      handlers.splice(k, 1);
                    } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                      el.removeEventListener(event, handler.proxyListener, capture);
                      handlers.splice(k, 1);
                    } else if (!listener) {
                      el.removeEventListener(event, handler.proxyListener, capture);
                      handlers.splice(k, 1);
                    }
                  }
                }
              }
            }
            return this;
          }
          function trigger() {
            const window = getWindow();
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }
            const events = args[0].split(' ');
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
              const event = events[i];
              for (let j = 0; j < this.length; j += 1) {
                const el = this[j];
                if (window.CustomEvent) {
                  const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                  });
                  el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
                  el.dispatchEvent(evt);
                  el.dom7EventData = [];
                  delete el.dom7EventData;
                }
              }
            }
            return this;
          }
          function transitionEnd$1(callback) {
            const dom = this;
            function fireCallBack(e) {
              if (e.target !== this) return;
              callback.call(this, e);
              dom.off('transitionend', fireCallBack);
            }
            if (callback) {
              dom.on('transitionend', fireCallBack);
            }
            return this;
          }
          function outerWidth(includeMargins) {
            if (this.length > 0) {
              if (includeMargins) {
                const styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
              }
              return this[0].offsetWidth;
            }
            return null;
          }
          function outerHeight(includeMargins) {
            if (this.length > 0) {
              if (includeMargins) {
                const styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
              }
              return this[0].offsetHeight;
            }
            return null;
          }
          function offset() {
            if (this.length > 0) {
              const window = getWindow();
              const document = getDocument();
              const el = this[0];
              const box = el.getBoundingClientRect();
              const body = document.body;
              const clientTop = el.clientTop || body.clientTop || 0;
              const clientLeft = el.clientLeft || body.clientLeft || 0;
              const scrollTop = el === window ? window.scrollY : el.scrollTop;
              const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
              return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
              };
            }
            return null;
          }
          function styles() {
            const window = getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
          }
          function css(props, value) {
            const window = getWindow();
            let i;
            if (arguments.length === 1) {
              if (typeof props === 'string') {
                // .css('width')
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
              } else {
                // .css({ width: '100px' })
                for (i = 0; i < this.length; i += 1) {
                  for (const prop in props) {
                    this[i].style[prop] = props[prop];
                  }
                }
                return this;
              }
            }
            if (arguments.length === 2 && typeof props === 'string') {
              // .css('width', '100px')
              for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
              }
              return this;
            }
            return this;
          }
          function each(callback) {
            if (!callback) return this;
            this.forEach((el, index) => {
              callback.apply(el, [el, index]);
            });
            return this;
          }
          function filter(callback) {
            const result = arrayFilter(this, callback);
            return $(result);
          }
          function html(html) {
            if (typeof html === 'undefined') {
              return this[0] ? this[0].innerHTML : null;
            }
            for (let i = 0; i < this.length; i += 1) {
              this[i].innerHTML = html;
            }
            return this;
          }
          function text(text) {
            if (typeof text === 'undefined') {
              return this[0] ? this[0].textContent.trim() : null;
            }
            for (let i = 0; i < this.length; i += 1) {
              this[i].textContent = text;
            }
            return this;
          }
          function is(selector) {
            const window = getWindow();
            const document = getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || typeof selector === 'undefined') return false;
            if (typeof selector === 'string') {
              if (el.matches) return el.matches(selector);
              if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
              if (el.msMatchesSelector) return el.msMatchesSelector(selector);
              compareWith = $(selector);
              for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
              }
              return false;
            }
            if (selector === document) {
              return el === document;
            }
            if (selector === window) {
              return el === window;
            }
            if (selector.nodeType || selector instanceof Dom7) {
              compareWith = selector.nodeType ? [selector] : selector;
              for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
              }
              return false;
            }
            return false;
          }
          function index() {
            let child = this[0];
            let i;
            if (child) {
              i = 0; // eslint-disable-next-line

              while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
              }
              return i;
            }
            return undefined;
          }
          function eq(index) {
            if (typeof index === 'undefined') return this;
            const length = this.length;
            if (index > length - 1) {
              return $([]);
            }
            if (index < 0) {
              const returnIndex = length + index;
              if (returnIndex < 0) return $([]);
              return $([this[returnIndex]]);
            }
            return $([this[index]]);
          }
          function append() {
            let newChild;
            const document = getDocument();
            for (let k = 0; k < arguments.length; k += 1) {
              newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
              for (let i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                  const tempDiv = document.createElement('div');
                  tempDiv.innerHTML = newChild;
                  while (tempDiv.firstChild) {
                    this[i].appendChild(tempDiv.firstChild);
                  }
                } else if (newChild instanceof Dom7) {
                  for (let j = 0; j < newChild.length; j += 1) {
                    this[i].appendChild(newChild[j]);
                  }
                } else {
                  this[i].appendChild(newChild);
                }
              }
            }
            return this;
          }
          function prepend(newChild) {
            const document = getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) {
              if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                  this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
              } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                  this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
              } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
              }
            }
            return this;
          }
          function next(selector) {
            if (this.length > 0) {
              if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                  return $([this[0].nextElementSibling]);
                }
                return $([]);
              }
              if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
              return $([]);
            }
            return $([]);
          }
          function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return $([]);
            while (el.nextElementSibling) {
              const next = el.nextElementSibling; // eslint-disable-line

              if (selector) {
                if ($(next).is(selector)) nextEls.push(next);
              } else nextEls.push(next);
              el = next;
            }
            return $(nextEls);
          }
          function prev(selector) {
            if (this.length > 0) {
              const el = this[0];
              if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                  return $([el.previousElementSibling]);
                }
                return $([]);
              }
              if (el.previousElementSibling) return $([el.previousElementSibling]);
              return $([]);
            }
            return $([]);
          }
          function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return $([]);
            while (el.previousElementSibling) {
              const prev = el.previousElementSibling; // eslint-disable-line

              if (selector) {
                if ($(prev).is(selector)) prevEls.push(prev);
              } else prevEls.push(prev);
              el = prev;
            }
            return $(prevEls);
          }
          function parent(selector) {
            const parents = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
              if (this[i].parentNode !== null) {
                if (selector) {
                  if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                } else {
                  parents.push(this[i].parentNode);
                }
              }
            }
            return $(parents);
          }
          function parents(selector) {
            const parents = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
              let parent = this[i].parentNode; // eslint-disable-line

              while (parent) {
                if (selector) {
                  if ($(parent).is(selector)) parents.push(parent);
                } else {
                  parents.push(parent);
                }
                parent = parent.parentNode;
              }
            }
            return $(parents);
          }
          function closest(selector) {
            let closest = this; // eslint-disable-line

            if (typeof selector === 'undefined') {
              return $([]);
            }
            if (!closest.is(selector)) {
              closest = closest.parents(selector).eq(0);
            }
            return closest;
          }
          function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
              const found = this[i].querySelectorAll(selector);
              for (let j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
              }
            }
            return $(foundElements);
          }
          function children(selector) {
            const children = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
              const childNodes = this[i].children;
              for (let j = 0; j < childNodes.length; j += 1) {
                if (!selector || $(childNodes[j]).is(selector)) {
                  children.push(childNodes[j]);
                }
              }
            }
            return $(children);
          }
          function remove() {
            for (let i = 0; i < this.length; i += 1) {
              if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            }
            return this;
          }
          const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition: transition$1,
            on,
            off,
            trigger,
            transitionEnd: transitionEnd$1,
            outerWidth,
            outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
          };
          Object.keys(Methods).forEach(methodName => {
            Object.defineProperty($.fn, methodName, {
              value: Methods[methodName],
              writable: true
            });
          });
          function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach(key => {
              try {
                object[key] = null;
              } catch (e) {// no getter for object
              }
              try {
                delete object[key];
              } catch (e) {// something got wrong
              }
            });
          }
          function nextTick(callback, delay) {
            if (delay === void 0) {
              delay = 0;
            }
            return setTimeout(callback, delay);
          }
          function now() {
            return Date.now();
          }
          function getComputedStyle$1(el) {
            const window = getWindow();
            let style;
            if (window.getComputedStyle) {
              style = window.getComputedStyle(el, null);
            }
            if (!style && el.currentStyle) {
              style = el.currentStyle;
            }
            if (!style) {
              style = el.style;
            }
            return style;
          }
          function getTranslate(el, axis) {
            if (axis === void 0) {
              axis = 'x';
            }
            const window = getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = getComputedStyle$1(el);
            if (window.WebKitCSSMatrix) {
              curTransform = curStyle.transform || curStyle.webkitTransform;
              if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
              } // Some old versions of Webkit choke when 'none' is passed; pass
              // empty string instead in this case

              transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
              transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
              matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
              // Latest Chrome and webkits Fix
              if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
              else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
              else curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
              // Latest Chrome and webkits Fix
              if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
              else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
              else curTransform = parseFloat(matrix[5]);
            }
            return curTransform || 0;
          }
          function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
          }
          function isNode(node) {
            // eslint-disable-next-line
            if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
              return node instanceof HTMLElement;
            }
            return node && (node.nodeType === 1 || node.nodeType === 11);
          }
          function extend() {
            const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
            const noExtend = ['__proto__', 'constructor', 'prototype'];
            for (let i = 1; i < arguments.length; i += 1) {
              const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
              if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                  const nextKey = keysArray[nextIndex];
                  const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                  if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                      if (nextSource[nextKey].__swiper__) {
                        to[nextKey] = nextSource[nextKey];
                      } else {
                        extend(to[nextKey], nextSource[nextKey]);
                      }
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                      to[nextKey] = {};
                      if (nextSource[nextKey].__swiper__) {
                        to[nextKey] = nextSource[nextKey];
                      } else {
                        extend(to[nextKey], nextSource[nextKey]);
                      }
                    } else {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }
            }
            return to;
          }
          function setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
          }
          function animateCSSModeScroll(_ref) {
            let {
              swiper,
              targetPosition,
              side
            } = _ref;
            const window = getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = 'none';
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? 'next' : 'prev';
            const isOutOfBound = (current, target) => {
              return dir === 'next' && current >= target || dir === 'prev' && current <= target;
            };
            const animate = () => {
              time = new Date().getTime();
              if (startTime === null) {
                startTime = time;
              }
              const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
              const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
              let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
              if (isOutOfBound(currentPosition, targetPosition)) {
                currentPosition = targetPosition;
              }
              swiper.wrapperEl.scrollTo({
                [side]: currentPosition
              });
              if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.scrollSnapType = '';
                setTimeout(() => {
                  swiper.wrapperEl.style.overflow = '';
                  swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                  });
                });
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
              }
              swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
          }
          let support;
          function calcSupport() {
            const window = getWindow();
            const document = getDocument();
            return {
              smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
              touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
              passiveListener: function checkPassiveListener() {
                let supportsPassive = false;
                try {
                  const opts = Object.defineProperty({}, 'passive', {
                    // eslint-disable-next-line
                    get() {
                      supportsPassive = true;
                    }
                  });
                  window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {// No support
                }
                return supportsPassive;
              }(),
              gestures: function checkGestures() {
                return 'ongesturestart' in window;
              }()
            };
          }
          function getSupport() {
            if (!support) {
              support = calcSupport();
            }
            return support;
          }
          let deviceCached;
          function calcDevice(_temp) {
            let {
              userAgent
            } = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
              ios: false,
              android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === 'Win32';
            let macos = platform === 'MacIntel'; // iPadOs 13 fix

            const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
              ipad = ua.match(/(Version)\/([\d.]+)/);
              if (!ipad) ipad = [0, 1, '13_0_0'];
              macos = false;
            } // Android

            if (android && !windows) {
              device.os = 'android';
              device.android = true;
            }
            if (ipad || iphone || ipod) {
              device.os = 'ios';
              device.ios = true;
            } // Export object

            return device;
          }
          function getDevice(overrides) {
            if (overrides === void 0) {
              overrides = {};
            }
            if (!deviceCached) {
              deviceCached = calcDevice(overrides);
            }
            return deviceCached;
          }
          let browser;
          function calcBrowser() {
            const window = getWindow();
            function isSafari() {
              const ua = window.navigator.userAgent.toLowerCase();
              return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
            }
            return {
              isSafari: isSafari(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
          }
          function getBrowser() {
            if (!browser) {
              browser = calcBrowser();
            }
            return browser;
          }
          function Resize(_ref) {
            let {
              swiper,
              on,
              emit
            } = _ref;
            const window = getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              emit('beforeResize');
              emit('resize');
            };
            const createObserver = () => {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              observer = new ResizeObserver(entries => {
                animationFrame = window.requestAnimationFrame(() => {
                  const {
                    width,
                    height
                  } = swiper;
                  let newWidth = width;
                  let newHeight = height;
                  entries.forEach(_ref2 => {
                    let {
                      contentBoxSize,
                      contentRect,
                      target
                    } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                  });
                  if (newWidth !== width || newHeight !== height) {
                    resizeHandler();
                  }
                });
              });
              observer.observe(swiper.el);
            };
            const removeObserver = () => {
              if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
              }
              if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
              }
            };
            const orientationChangeHandler = () => {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              emit('orientationchange');
            };
            on('init', () => {
              if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
                createObserver();
                return;
              }
              window.addEventListener('resize', resizeHandler);
              window.addEventListener('orientationchange', orientationChangeHandler);
            });
            on('destroy', () => {
              removeObserver();
              window.removeEventListener('resize', resizeHandler);
              window.removeEventListener('orientationchange', orientationChangeHandler);
            });
          }
          function Observer(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            const observers = [];
            const window = getWindow();
            const attach = function (target, options) {
              if (options === void 0) {
                options = {};
              }
              const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
              const observer = new ObserverFunc(mutations => {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (mutations.length === 1) {
                  emit('observerUpdate', mutations[0]);
                  return;
                }
                const observerUpdate = function observerUpdate() {
                  emit('observerUpdate', mutations[0]);
                };
                if (window.requestAnimationFrame) {
                  window.requestAnimationFrame(observerUpdate);
                } else {
                  window.setTimeout(observerUpdate, 0);
                }
              });
              observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
              });
              observers.push(observer);
            };
            const init = () => {
              if (!swiper.params.observer) return;
              if (swiper.params.observeParents) {
                const containerParents = swiper.$el.parents();
                for (let i = 0; i < containerParents.length; i += 1) {
                  attach(containerParents[i]);
                }
              } // Observe container

              attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
              }); // Observe wrapper

              attach(swiper.$wrapperEl[0], {
                attributes: false
              });
            };
            const destroy = () => {
              observers.forEach(observer => {
                observer.disconnect();
              });
              observers.splice(0, observers.length);
            };
            extendParams({
              observer: false,
              observeParents: false,
              observeSlideChildren: false
            });
            on('init', init);
            on('destroy', destroy);
          }

          /* eslint-disable no-underscore-dangle */
          var eventsEmitter = {
            on(events, handler, priority) {
              const self = this;
              if (typeof handler !== 'function') return self;
              const method = priority ? 'unshift' : 'push';
              events.split(' ').forEach(event => {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
              });
              return self;
            },
            once(events, handler, priority) {
              const self = this;
              if (typeof handler !== 'function') return self;
              function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) {
                  delete onceHandler.__emitterProxy;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                handler.apply(self, args);
              }
              onceHandler.__emitterProxy = handler;
              return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
              const self = this;
              if (typeof handler !== 'function') return self;
              const method = priority ? 'unshift' : 'push';
              if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
              }
              return self;
            },
            offAny(handler) {
              const self = this;
              if (!self.eventsAnyListeners) return self;
              const index = self.eventsAnyListeners.indexOf(handler);
              if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
              }
              return self;
            },
            off(events, handler) {
              const self = this;
              if (!self.eventsListeners) return self;
              events.split(' ').forEach(event => {
                if (typeof handler === 'undefined') {
                  self.eventsListeners[event] = [];
                } else if (self.eventsListeners[event]) {
                  self.eventsListeners[event].forEach((eventHandler, index) => {
                    if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                      self.eventsListeners[event].splice(index, 1);
                    }
                  });
                }
              });
              return self;
            },
            emit() {
              const self = this;
              if (!self.eventsListeners) return self;
              let events;
              let data;
              let context;
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
              } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
              }
              data.unshift(context);
              const eventsArray = Array.isArray(events) ? events : events.split(' ');
              eventsArray.forEach(event => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                  self.eventsAnyListeners.forEach(eventHandler => {
                    eventHandler.apply(context, [event, ...data]);
                  });
                }
                if (self.eventsListeners && self.eventsListeners[event]) {
                  self.eventsListeners[event].forEach(eventHandler => {
                    eventHandler.apply(context, data);
                  });
                }
              });
              return self;
            }
          };
          function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
              width = swiper.params.width;
            } else {
              width = $el[0].clientWidth;
            }
            if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
              height = swiper.params.height;
            } else {
              height = $el[0].clientHeight;
            }
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
              return;
            } // Subtract paddings

            width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
            height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
              width,
              height,
              size: swiper.isHorizontal() ? width : height
            });
          }
          function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
              if (swiper.isHorizontal()) {
                return property;
              } // prettier-ignore

              return {
                'width': 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                'marginRight': 'marginBottom'
              }[property];
            }
            function getDirectionPropertyValue(node, label) {
              return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {
              $wrapperEl,
              size: swiperSize,
              rtlTranslate: rtl,
              wrongRTL
            } = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === 'function') {
              offsetBefore = params.slidesOffsetBefore.call(swiper);
            }
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === 'function') {
              offsetAfter = params.slidesOffsetAfter.call(swiper);
            }
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === 'undefined') {
              return;
            }
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
              spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
            }
            swiper.virtualSize = -spaceBetween; // reset margins

            if (rtl) slides.css({
              marginLeft: '',
              marginBottom: '',
              marginTop: ''
            });else slides.css({
              marginRight: '',
              marginBottom: '',
              marginTop: ''
            }); // reset cssMode offsets

            if (params.centeredSlides && params.cssMode) {
              setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
              setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) {
              swiper.grid.initSlides(slidesLength);
            } // Calc slides

            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
              return typeof params.breakpoints[key].slidesPerView !== 'undefined';
            }).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
              slideSize = 0;
              const slide = slides.eq(i);
              if (gridEnabled) {
                swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
              }
              if (slide.css('display') === 'none') continue; // eslint-disable-line

              if (params.slidesPerView === 'auto') {
                if (shouldResetSlideSize) {
                  slides[i].style[getDirectionLabel('width')] = ``;
                }
                const slideStyles = getComputedStyle(slide[0]);
                const currentTransform = slide[0].style.transform;
                const currentWebKitTransform = slide[0].style.webkitTransform;
                if (currentTransform) {
                  slide[0].style.transform = 'none';
                }
                if (currentWebKitTransform) {
                  slide[0].style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                  slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                } else {
                  // eslint-disable-next-line
                  const width = getDirectionPropertyValue(slideStyles, 'width');
                  const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                  const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                  const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                  const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                  const boxSizing = slideStyles.getPropertyValue('box-sizing');
                  if (boxSizing && boxSizing === 'border-box') {
                    slideSize = width + marginLeft + marginRight;
                  } else {
                    const {
                      clientWidth,
                      offsetWidth
                    } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                  }
                }
                if (currentTransform) {
                  slide[0].style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                  slide[0].style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) slideSize = Math.floor(slideSize);
              } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) {
                  slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
                }
              }
              if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
              }
              slidesSizesGrid.push(slideSize);
              if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
              } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
              }
              swiper.virtualSize += slideSize + spaceBetween;
              prevSlideSize = slideSize;
              index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
              $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
              });
            }
            if (params.setWrapperSize) {
              $wrapperEl.css({
                [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
              });
            }
            if (gridEnabled) {
              swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            } // Remove last grid elements depending on width

            if (!params.centeredSlides) {
              const newSlidesGrid = [];
              for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                  newSlidesGrid.push(slidesGridItem);
                }
              }
              snapGrid = newSlidesGrid;
              if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
              }
            }
            if (snapGrid.length === 0) snapGrid = [0];
            if (params.spaceBetween !== 0) {
              const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
              slides.filter((_, slideIndex) => {
                if (!params.cssMode) return true;
                if (slideIndex === slides.length - 1) {
                  return false;
                }
                return true;
              }).css({
                [key]: `${spaceBetween}px`
              });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
              let allSlidesSize = 0;
              slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
              });
              allSlidesSize -= params.spaceBetween;
              const maxSnap = allSlidesSize - swiperSize;
              snapGrid = snapGrid.map(snap => {
                if (snap < 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
              });
            }
            if (params.centerInsufficientSlides) {
              let allSlidesSize = 0;
              slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
              });
              allSlidesSize -= params.spaceBetween;
              if (allSlidesSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach((snap, snapIndex) => {
                  snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach((snap, snapIndex) => {
                  slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
              }
            }
            Object.assign(swiper, {
              slides,
              snapGrid,
              slidesGrid,
              slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
              setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
              setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
              const addToSnapGrid = -swiper.snapGrid[0];
              const addToSlidesGrid = -swiper.slidesGrid[0];
              swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
              swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
            }
            if (slidesLength !== previousSlidesLength) {
              swiper.emit('slidesLengthChange');
            }
            if (snapGrid.length !== previousSnapGridLength) {
              if (swiper.params.watchOverflow) swiper.checkOverflow();
              swiper.emit('snapGridLengthChange');
            }
            if (slidesGrid.length !== previousSlidesGridLength) {
              swiper.emit('slidesGridLengthChange');
            }
            if (params.watchSlidesProgress) {
              swiper.updateSlidesOffset();
            }
            if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
              const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
              const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
              if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
              } else if (hasClassBackfaceClassAdded) {
                swiper.$el.removeClass(backFaceHiddenClass);
              }
            }
          }
          function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === 'number') {
              swiper.setTransition(speed);
            } else if (speed === true) {
              swiper.setTransition(swiper.params.speed);
            }
            const getSlideByIndex = index => {
              if (isVirtual) {
                return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
              }
              return swiper.slides.eq(index)[0];
            }; // Find slides currently in view

            if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
              if (swiper.params.centeredSlides) {
                swiper.visibleSlides.each(slide => {
                  activeSlides.push(slide);
                });
              } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                  const index = swiper.activeIndex + i;
                  if (index > swiper.slides.length && !isVirtual) break;
                  activeSlides.push(getSlideByIndex(index));
                }
              }
            } else {
              activeSlides.push(getSlideByIndex(swiper.activeIndex));
            } // Find new height from highest slide in view

            for (i = 0; i < activeSlides.length; i += 1) {
              if (typeof activeSlides[i] !== 'undefined') {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
              }
            } // Update Height

            if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
          }
          function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) {
              slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
            }
          }
          function updateSlidesProgress(translate) {
            if (translate === void 0) {
              translate = this && this.translate || 0;
            }
            const swiper = this;
            const params = swiper.params;
            const {
              slides,
              rtlTranslate: rtl,
              snapGrid
            } = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate; // Visible Slides

            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
              const slide = slides[i];
              let slideOffset = slide.swiperSlideOffset;
              if (params.cssMode && params.centeredSlides) {
                slideOffset -= slides[0].swiperSlideOffset;
              }
              const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
              const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
              const slideBefore = -(offsetCenter - slideOffset);
              const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
              const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
              if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
                slides.eq(i).addClass(params.slideVisibleClass);
              }
              slide.progress = rtl ? -slideProgress : slideProgress;
              slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = $(swiper.visibleSlides);
          }
          function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === 'undefined') {
              const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

              translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {
              progress,
              isBeginning,
              isEnd
            } = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
              progress = 0;
              isBeginning = true;
              isEnd = true;
            } else {
              progress = (translate - swiper.minTranslate()) / translatesDiff;
              isBeginning = progress <= 0;
              isEnd = progress >= 1;
            }
            Object.assign(swiper, {
              progress,
              isBeginning,
              isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) {
              swiper.emit('reachBeginning toEdge');
            }
            if (isEnd && !wasEnd) {
              swiper.emit('reachEnd toEdge');
            }
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
              swiper.emit('fromEdge');
            }
            swiper.emit('progress', progress);
          }
          function updateSlidesClasses() {
            const swiper = this;
            const {
              slides,
              params,
              $wrapperEl,
              activeIndex,
              realIndex
            } = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) {
              activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
            } else {
              activeSlide = slides.eq(activeIndex);
            } // Active classes

            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) {
              // Duplicate to all looped slides
              if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
              } else {
                $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
              }
            } // Next Slide

            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && nextSlide.length === 0) {
              nextSlide = slides.eq(0);
              nextSlide.addClass(params.slideNextClass);
            } // Prev Slide

            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && prevSlide.length === 0) {
              prevSlide = slides.eq(-1);
              prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
              // Duplicate to all looped slides
              if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
              } else {
                $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
              }
              if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
              } else {
                $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
              }
            }
            swiper.emitSlidesClasses();
          }
          function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {
              slidesGrid,
              snapGrid,
              params,
              activeIndex: previousIndex,
              realIndex: previousRealIndex,
              snapIndex: previousSnapIndex
            } = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if (typeof activeIndex === 'undefined') {
              for (let i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                  if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                    activeIndex = i;
                  } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                    activeIndex = i + 1;
                  }
                } else if (translate >= slidesGrid[i]) {
                  activeIndex = i;
                }
              } // Normalize slideIndex

              if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
              }
            }
            if (snapGrid.indexOf(translate) >= 0) {
              snapIndex = snapGrid.indexOf(translate);
            } else {
              const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
              snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
              if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
              }
              return;
            } // Get real index

            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
            Object.assign(swiper, {
              snapIndex,
              realIndex,
              previousIndex,
              activeIndex
            });
            swiper.emit('activeIndexChange');
            swiper.emit('snapIndexChange');
            if (previousRealIndex !== realIndex) {
              swiper.emit('realIndexChange');
            }
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
              swiper.emit('slideChange');
            }
          }
          function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = $(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) {
              for (let i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) {
                  slideFound = true;
                  slideIndex = i;
                  break;
                }
              }
            }
            if (slide && slideFound) {
              swiper.clickedSlide = slide;
              if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
              } else {
                swiper.clickedIndex = slideIndex;
              }
            } else {
              swiper.clickedSlide = undefined;
              swiper.clickedIndex = undefined;
              return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
              swiper.slideToClickedSlide();
            }
          }
          var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
          };
          function getSwiperTranslate(axis) {
            if (axis === void 0) {
              axis = this.isHorizontal() ? 'x' : 'y';
            }
            const swiper = this;
            const {
              params,
              rtlTranslate: rtl,
              translate,
              $wrapperEl
            } = swiper;
            if (params.virtualTranslate) {
              return rtl ? -translate : translate;
            }
            if (params.cssMode) {
              return translate;
            }
            let currentTranslate = getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
          }
          function setTranslate(translate, byController) {
            const swiper = this;
            const {
              rtlTranslate: rtl,
              params,
              $wrapperEl,
              wrapperEl,
              progress
            } = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) {
              x = rtl ? -translate : translate;
            } else {
              y = translate;
            }
            if (params.roundLengths) {
              x = Math.floor(x);
              y = Math.floor(y);
            }
            if (params.cssMode) {
              wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
            } else if (!params.virtualTranslate) {
              $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) {
              newProgress = 0;
            } else {
              newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            }
            if (newProgress !== progress) {
              swiper.updateProgress(translate);
            }
            swiper.emit('setTranslate', swiper.translate, byController);
          }
          function minTranslate() {
            return -this.snapGrid[0];
          }
          function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
          }
          function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) {
              translate = 0;
            }
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            if (translateBounds === void 0) {
              translateBounds = true;
            }
            const swiper = this;
            const {
              params,
              wrapperEl
            } = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) {
              return false;
            }
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
              const isH = swiper.isHorizontal();
              if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
              } else {
                if (!swiper.support.smoothScroll) {
                  animateCSSModeScroll({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                  });
                  return true;
                }
                wrapperEl.scrollTo({
                  [isH ? 'left' : 'top']: -newTranslate,
                  behavior: 'smooth'
                });
              }
              return true;
            }
            if (speed === 0) {
              swiper.setTransition(0);
              swiper.setTranslate(newTranslate);
              if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
              }
            } else {
              swiper.setTransition(speed);
              swiper.setTranslate(newTranslate);
              if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
              }
              if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) {
                  swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.onTranslateToWrapperTransitionEnd = null;
                    delete swiper.onTranslateToWrapperTransitionEnd;
                    if (runCallbacks) {
                      swiper.emit('transitionEnd');
                    }
                  };
                }
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              }
            }
            return true;
          }
          var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
          };
          function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
              swiper.$wrapperEl.transition(duration);
            }
            swiper.emit('setTransition', duration, byController);
          }
          function transitionEmit(_ref) {
            let {
              swiper,
              runCallbacks,
              direction,
              step
            } = _ref;
            const {
              activeIndex,
              previousIndex
            } = swiper;
            let dir = direction;
            if (!dir) {
              if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
            }
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
              if (dir === 'reset') {
                swiper.emit(`slideResetTransition${step}`);
                return;
              }
              swiper.emit(`slideChangeTransition${step}`);
              if (dir === 'next') {
                swiper.emit(`slideNextTransition${step}`);
              } else {
                swiper.emit(`slidePrevTransition${step}`);
              }
            }
          }
          function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            const swiper = this;
            const {
              params
            } = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) {
              swiper.updateAutoHeight();
            }
            transitionEmit({
              swiper,
              runCallbacks,
              direction,
              step: 'Start'
            });
          }
          function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            const swiper = this;
            const {
              params
            } = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
              swiper,
              runCallbacks,
              direction,
              step: 'End'
            });
          }
          var transition = {
            setTransition,
            transitionStart,
            transitionEnd
          };
          function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) {
              index = 0;
            }
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            if (typeof index !== 'number' && typeof index !== 'string') {
              throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            }
            if (typeof index === 'string') {
              /**
               * The `index` argument converted from `string` to `number`.
               * @type {number}
               */
              const indexAsNumber = parseInt(index, 10);
              /**
               * Determines whether the `index` argument is a valid `number`
               * after being converted from the `string` type.
               * @type {boolean}
               */

              const isValidNumber = isFinite(indexAsNumber);
              if (!isValidNumber) {
                throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
              } // Knowing that the converted `index` is a valid number,
              // we can update the original argument's value.

              index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {
              params,
              snapGrid,
              slidesGrid,
              previousIndex,
              activeIndex,
              rtlTranslate: rtl,
              wrapperEl,
              enabled
            } = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
              return false;
            }
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
              swiper.emit('beforeSlideChangeStart');
            }
            const translate = -snapGrid[snapIndex]; // Update progress

            swiper.updateProgress(translate); // Normalize slideIndex

            if (params.normalizeSlideIndex) {
              for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                  if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                    slideIndex = i;
                  } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                    slideIndex = i + 1;
                  }
                } else if (normalizedTranslate >= normalizedGrid) {
                  slideIndex = i;
                }
              }
            } // Directions locks

            if (swiper.initialized && slideIndex !== activeIndex) {
              if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
              }
              if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) return false;
              }
            }
            let direction;
            if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
              swiper.updateActiveIndex(slideIndex); // Update Height

              if (params.autoHeight) {
                swiper.updateAutoHeight();
              }
              swiper.updateSlidesClasses();
              if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
              }
              if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
              }
              return false;
            }
            if (params.cssMode) {
              const isH = swiper.isHorizontal();
              const t = rtl ? translate : -translate;
              if (speed === 0) {
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                if (isVirtual) {
                  swiper.wrapperEl.style.scrollSnapType = 'none';
                  swiper._immediateVirtual = true;
                }
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                if (isVirtual) {
                  requestAnimationFrame(() => {
                    swiper.wrapperEl.style.scrollSnapType = '';
                    swiper._swiperImmediateVirtual = false;
                  });
                }
              } else {
                if (!swiper.support.smoothScroll) {
                  animateCSSModeScroll({
                    swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                  });
                  return true;
                }
                wrapperEl.scrollTo({
                  [isH ? 'left' : 'top']: t,
                  behavior: 'smooth'
                });
              }
              return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) {
              swiper.transitionEnd(runCallbacks, direction);
            } else if (!swiper.animating) {
              swiper.animating = true;
              if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                  if (!swiper || swiper.destroyed) return;
                  if (e.target !== this) return;
                  swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                  swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                  swiper.onSlideToWrapperTransitionEnd = null;
                  delete swiper.onSlideToWrapperTransitionEnd;
                  swiper.transitionEnd(runCallbacks, direction);
                };
              }
              swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
          }
          function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) {
              index = 0;
            }
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) {
              newIndex += swiper.loopedSlides;
            }
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
          }

          /* eslint no-unused-vars: "off" */
          function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            const swiper = this;
            const {
              animating,
              enabled,
              params
            } = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
              perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
            }
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
              if (animating && params.loopPreventsSlide) return false;
              swiper.loopFix(); // eslint-disable-next-line

              swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) {
              return swiper.slideTo(0, speed, runCallbacks, internal);
            }
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
          }

          /* eslint no-unused-vars: "off" */
          function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            const swiper = this;
            const {
              params,
              animating,
              snapGrid,
              slidesGrid,
              rtlTranslate,
              enabled
            } = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
              if (animating && params.loopPreventsSlide) return false;
              swiper.loopFix(); // eslint-disable-next-line

              swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
              if (val < 0) return -Math.floor(Math.abs(val));
              return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map(val => normalize(val));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === 'undefined' && params.cssMode) {
              let prevSnapIndex;
              snapGrid.forEach((snap, snapIndex) => {
                if (normalizedTranslate >= snap) {
                  // prevSnap = snap;
                  prevSnapIndex = snapIndex;
                }
              });
              if (typeof prevSnapIndex !== 'undefined') {
                prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
              }
            }
            let prevIndex = 0;
            if (typeof prevSnap !== 'undefined') {
              prevIndex = slidesGrid.indexOf(prevSnap);
              if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
              if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                prevIndex = Math.max(prevIndex, 0);
              }
            }
            if (params.rewind && swiper.isBeginning) {
              const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
              return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
          }

          /* eslint no-unused-vars: "off" */
          function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
          }

          /* eslint no-unused-vars: "off" */
          function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) {
              speed = this.params.speed;
            }
            if (runCallbacks === void 0) {
              runCallbacks = true;
            }
            if (threshold === void 0) {
              threshold = 0.5;
            }
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
              // The current translate is on or after the current snap index, so the choice
              // is between the current index and the one after it.
              const currentSnap = swiper.snapGrid[snapIndex];
              const nextSnap = swiper.snapGrid[snapIndex + 1];
              if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
              }
            } else {
              // The current translate is before the current snap index, so the choice
              // is between the current index and the one before it.
              const prevSnap = swiper.snapGrid[snapIndex - 1];
              const currentSnap = swiper.snapGrid[snapIndex];
              if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
              }
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
          }
          function slideToClickedSlide() {
            const swiper = this;
            const {
              params,
              $wrapperEl
            } = swiper;
            const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
              if (swiper.animating) return;
              realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
              if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                  swiper.loopFix();
                  slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                  nextTick(() => {
                    swiper.slideTo(slideToIndex);
                  });
                } else {
                  swiper.slideTo(slideToIndex);
                }
              } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                nextTick(() => {
                  swiper.slideTo(slideToIndex);
                });
              } else {
                swiper.slideTo(slideToIndex);
              }
            } else {
              swiper.slideTo(slideToIndex);
            }
          }
          var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
          };
          function loopCreate() {
            const swiper = this;
            const document = getDocument();
            const {
              params,
              $wrapperEl
            } = swiper; // Remove duplicated slides

            const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
              const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
              if (blankSlidesNum !== params.slidesPerGroup) {
                for (let i = 0; i < blankSlidesNum; i += 1) {
                  const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                  $selector.append(blankNode);
                }
                slides = $selector.children(`.${params.slideClass}`);
              }
            }
            if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) {
              swiper.loopedSlides = slides.length;
            }
            const prependSlides = [];
            const appendSlides = [];
            slides.each((el, index) => {
              const slide = $(el);
              if (index < swiper.loopedSlides) {
                appendSlides.push(el);
              }
              if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                prependSlides.push(el);
              }
              slide.attr('data-swiper-slide-index', index);
            });
            for (let i = 0; i < appendSlides.length; i += 1) {
              $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            }
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
              $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            }
          }
          function loopFix() {
            const swiper = this;
            swiper.emit('beforeLoopFix');
            const {
              activeIndex,
              slides,
              loopedSlides,
              allowSlidePrev,
              allowSlideNext,
              snapGrid,
              rtlTranslate: rtl
            } = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

            if (activeIndex < loopedSlides) {
              newIndex = slides.length - loopedSlides * 3 + activeIndex;
              newIndex += loopedSlides;
              const slideChanged = swiper.slideTo(newIndex, 0, false, true);
              if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
              }
            } else if (activeIndex >= slides.length - loopedSlides) {
              // Fix For Positive Oversliding
              newIndex = -slides.length + activeIndex + loopedSlides;
              newIndex += loopedSlides;
              const slideChanged = swiper.slideTo(newIndex, 0, false, true);
              if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
              }
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
          }
          function loopDestroy() {
            const swiper = this;
            const {
              $wrapperEl,
              params,
              slides
            } = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr('data-swiper-slide-index');
          }
          var loop = {
            loopCreate,
            loopFix,
            loopDestroy
          };
          function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
            el.style.cursor = 'move';
            el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            el.style.cursor = moving ? 'grabbing' : 'grab';
          }
          function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
              return;
            }
            swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
          }
          var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
          };
          function closestElement(selector, base) {
            if (base === void 0) {
              base = this;
            }
            function __closestFrom(el) {
              if (!el || el === getDocument() || el === getWindow()) return null;
              if (el.assignedSlot) el = el.assignedSlot;
              const found = el.closest(selector);
              return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
          }
          function onTouchStart(event) {
            const swiper = this;
            const document = getDocument();
            const window = getWindow();
            const data = swiper.touchEventsData;
            const {
              params,
              touches,
              enabled
            } = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) {
              return;
            }
            if (!swiper.animating && params.cssMode && params.loop) {
              swiper.loopFix();
            }
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = $(e.target);
            if (params.touchEventsTarget === 'wrapper') {
              if (!$targetEl.closest(swiper.wrapperEl).length) return;
            }
            data.isTouchEvent = e.type === 'touchstart';
            if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
            if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return; // change target el for shadow root component

            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
              $targetEl = $(event.path[0]);
            }
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
              swiper.allowClick = true;
              return;
            }
            if (params.swipeHandler) {
              if (!$targetEl.closest(params.swipeHandler)[0]) return;
            }
            touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
              if (edgeSwipeDetection === 'prevent') {
                event.preventDefault();
              } else {
                return;
              }
            }
            Object.assign(data, {
              isTouched: true,
              isMoved: false,
              allowTouchCallbacks: true,
              isScrolling: undefined,
              startMoving: undefined
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = undefined;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if (e.type !== 'touchstart') {
              let preventDefault = true;
              if ($targetEl.is(data.focusableElements)) {
                preventDefault = false;
                if ($targetEl[0].nodeName === 'SELECT') {
                  data.isTouched = false;
                }
              }
              if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
                document.activeElement.blur();
              }
              const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
              if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
                e.preventDefault();
              }
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
              swiper.freeMode.onTouchStart();
            }
            swiper.emit('touchStart', e);
          }
          function onTouchMove(event) {
            const document = getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {
              params,
              touches,
              rtlTranslate: rtl,
              enabled
            } = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
              if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
              }
              return;
            }
            if (data.isTouchEvent && e.type !== 'touchmove') return;
            const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
            const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
              touches.startX = pageX;
              touches.startY = pageY;
              return;
            }
            if (!swiper.allowTouchMove) {
              if (!$(e.target).is(data.focusableElements)) {
                swiper.allowClick = false;
              }
              if (data.isTouched) {
                Object.assign(touches, {
                  startX: pageX,
                  startY: pageY,
                  currentX: pageX,
                  currentY: pageY
                });
                data.touchStartTime = now();
              }
              return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
              if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                  data.isTouched = false;
                  data.isMoved = false;
                  return;
                }
              } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
              }
            }
            if (data.isTouchEvent && document.activeElement) {
              if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
              }
            }
            if (data.allowTouchCallbacks) {
              swiper.emit('touchMove', e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === 'undefined') {
              let touchAngle;
              if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
              } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                  touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                  data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
              }
            }
            if (data.isScrolling) {
              swiper.emit('touchMoveOpposite', e);
            }
            if (typeof data.startMoving === 'undefined') {
              if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
              }
            }
            if (data.isScrolling) {
              data.isTouched = false;
              return;
            }
            if (!data.startMoving) {
              return;
            }
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) {
              e.preventDefault();
            }
            if (params.touchMoveStopPropagation && !params.nested) {
              e.stopPropagation();
            }
            if (!data.isMoved) {
              if (params.loop && !params.cssMode) {
                swiper.loopFix();
              }
              data.startTranslate = swiper.getTranslate();
              swiper.setTransition(0);
              if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
              }
              data.allowMomentumBounce = false; // Grab Cursor

              if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
              }
              swiper.emit('sliderFirstMove', e);
            }
            swiper.emit('sliderMove', e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) {
              resistanceRatio = 0;
            }
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
              disableParentSwiper = false;
              if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
              disableParentSwiper = false;
              if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) {
              e.preventedByNestedSwiper = true;
            } // Directions locks

            if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
              data.currentTranslate = data.startTranslate;
            }
            if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
              data.currentTranslate = data.startTranslate;
            }
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
              data.currentTranslate = data.startTranslate;
            } // Threshold

            if (params.threshold > 0) {
              if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                  data.allowThresholdMove = true;
                  touches.startX = touches.currentX;
                  touches.startY = touches.currentY;
                  data.currentTranslate = data.startTranslate;
                  touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                  return;
                }
              } else {
                data.currentTranslate = data.startTranslate;
                return;
              }
            }
            if (!params.followFinger || params.cssMode) return; // Update active index in free mode

            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
              swiper.freeMode.onTouchMove();
            } // Update progress

            swiper.updateProgress(data.currentTranslate); // Update translate

            swiper.setTranslate(data.currentTranslate);
          }
          function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {
              params,
              touches,
              rtlTranslate: rtl,
              slidesGrid,
              enabled
            } = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) {
              swiper.emit('touchEnd', e);
            }
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
              if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
              }
              data.isMoved = false;
              data.startMoving = false;
              return;
            } // Return Grab Cursor

            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
              swiper.setGrabCursor(false);
            } // Time diff

            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

            if (swiper.allowClick) {
              const pathTree = e.path || e.composedPath && e.composedPath();
              swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
              swiper.emit('tap click', e);
              if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
              }
            }
            data.lastClickTime = now();
            nextTick(() => {
              if (!swiper.destroyed) swiper.allowClick = true;
            });
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
              data.isTouched = false;
              data.isMoved = false;
              data.startMoving = false;
              return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) {
              currentPos = rtl ? swiper.translate : -swiper.translate;
            } else {
              currentPos = -data.currentTranslate;
            }
            if (params.cssMode) {
              return;
            }
            if (swiper.params.freeMode && params.freeMode.enabled) {
              swiper.freeMode.onTouchEnd({
                currentPos
              });
              return;
            } // Find current slide

            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
              const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
              if (typeof slidesGrid[i + increment] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                  stopIndex = i;
                  groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
              } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
              }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) {
              if (swiper.isBeginning) {
                rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
              } else if (swiper.isEnd) {
                rewindFirstIndex = 0;
              }
            } // Find current slide size

            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
              // Long touches
              if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
              }
              if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
              }
              if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) {
                  swiper.slideTo(stopIndex + increment);
                } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                  swiper.slideTo(rewindLastIndex);
                } else {
                  swiper.slideTo(stopIndex);
                }
              }
            } else {
              // Short swipes
              if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
              }
              const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
              if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                  swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                }
                if (swiper.swipeDirection === 'prev') {
                  swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                }
              } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
              } else {
                swiper.slideTo(stopIndex);
              }
            }
          }
          function onResize() {
            const swiper = this;
            const {
              params,
              el
            } = swiper;
            if (el && el.offsetWidth === 0) return; // Breakpoints

            if (params.breakpoints) {
              swiper.setBreakpoint();
            } // Save locks

            const {
              allowSlideNext,
              allowSlidePrev,
              snapGrid
            } = swiper; // Disable locks on resize

            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
              swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
              swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
              swiper.autoplay.run();
            } // Return locks after resize

            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
              swiper.checkOverflow();
            }
          }
          function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
              if (swiper.params.preventClicks) e.preventDefault();
              if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
              }
            }
          }
          function onScroll() {
            const swiper = this;
            const {
              wrapperEl,
              rtlTranslate,
              enabled
            } = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) {
              swiper.translate = -wrapperEl.scrollLeft;
            } else {
              swiper.translate = -wrapperEl.scrollTop;
            } // eslint-disable-next-line

            if (swiper.translate === -0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) {
              newProgress = 0;
            } else {
              newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            }
            if (newProgress !== swiper.progress) {
              swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            }
            swiper.emit('setTranslate', swiper.translate, false);
          }
          let dummyEventAttached = false;
          function dummyEventListener() {}
          const events = (swiper, method) => {
            const document = getDocument();
            const {
              params,
              touchEvents,
              el,
              wrapperEl,
              device,
              support
            } = swiper;
            const capture = !!params.nested;
            const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            const swiperMethod = method; // Touch Events

            if (!support.touch) {
              el[domMethod](touchEvents.start, swiper.onTouchStart, false);
              document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
              document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
              const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
              el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                passive: false,
                capture
              } : capture);
              el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
              if (touchEvents.cancel) {
                el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
              }
            } // Prevent Links Clicks

            if (params.preventClicks || params.preventClicksPropagation) {
              el[domMethod]('click', swiper.onClick, true);
            }
            if (params.cssMode) {
              wrapperEl[domMethod]('scroll', swiper.onScroll);
            } // Resize handler

            if (params.updateOnWindowResize) {
              swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
            } else {
              swiper[swiperMethod]('observerUpdate', onResize, true);
            }
          };
          function attachEvents() {
            const swiper = this;
            const document = getDocument();
            const {
              params,
              support
            } = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) {
              swiper.onScroll = onScroll.bind(swiper);
            }
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
              document.addEventListener('touchstart', dummyEventListener);
              dummyEventAttached = true;
            }
            events(swiper, 'on');
          }
          function detachEvents() {
            const swiper = this;
            events(swiper, 'off');
          }
          var events$1 = {
            attachEvents,
            detachEvents
          };
          const isGridEnabled = (swiper, params) => {
            return swiper.grid && params.grid && params.grid.rows > 1;
          };
          function setBreakpoint() {
            const swiper = this;
            const {
              activeIndex,
              initialized,
              loopedSlides = 0,
              params,
              $el
            } = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
              $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
              swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
              $el.addClass(`${params.containerModifierClass}grid`);
              if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
                $el.addClass(`${params.containerModifierClass}grid-column`);
              }
              swiper.emitContainerClasses();
            }
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) {
              swiper.changeDirection();
            }
            extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
              allowTouchMove: swiper.params.allowTouchMove,
              allowSlideNext: swiper.params.allowSlideNext,
              allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) {
              swiper.disable();
            } else if (!wasEnabled && isEnabled) {
              swiper.enable();
            }
            swiper.currentBreakpoint = breakpoint;
            swiper.emit('_beforeBreakpoint', breakpointParams);
            if (needsReLoop && initialized) {
              swiper.loopDestroy();
              swiper.loopCreate();
              swiper.updateSlides();
              swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit('breakpoint', breakpointParams);
          }
          function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) {
              base = 'window';
            }
            if (!breakpoints || base === 'container' && !containerEl) return undefined;
            let breakpoint = false;
            const window = getWindow();
            const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map(point => {
              if (typeof point === 'string' && point.indexOf('@') === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                  value,
                  point
                };
              }
              return {
                value: point,
                point
              };
            });
            points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
            for (let i = 0; i < points.length; i += 1) {
              const {
                point,
                value
              } = points[i];
              if (base === 'window') {
                if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                  breakpoint = point;
                }
              } else if (value <= containerEl.clientWidth) {
                breakpoint = point;
              }
            }
            return breakpoint || 'max';
          }
          var breakpoints = {
            setBreakpoint,
            getBreakpoint
          };
          function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach(item => {
              if (typeof item === 'object') {
                Object.keys(item).forEach(classNames => {
                  if (item[classNames]) {
                    resultClasses.push(prefix + classNames);
                  }
                });
              } else if (typeof item === 'string') {
                resultClasses.push(prefix + item);
              }
            });
            return resultClasses;
          }
          function addClasses() {
            const swiper = this;
            const {
              classNames,
              params,
              rtl,
              $el,
              device,
              support
            } = swiper; // prettier-ignore

            const suffixes = prepareClasses(['initialized', params.direction, {
              'pointer-events': !support.touch
            }, {
              'free-mode': swiper.params.freeMode && params.freeMode.enabled
            }, {
              'autoheight': params.autoHeight
            }, {
              'rtl': rtl
            }, {
              'grid': params.grid && params.grid.rows > 1
            }, {
              'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
            }, {
              'android': device.android
            }, {
              'ios': device.ios
            }, {
              'css-mode': params.cssMode
            }, {
              'centered': params.cssMode && params.centeredSlides
            }], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([...classNames].join(' '));
            swiper.emitContainerClasses();
          }
          function removeClasses() {
            const swiper = this;
            const {
              $el,
              classNames
            } = swiper;
            $el.removeClass(classNames.join(' '));
            swiper.emitContainerClasses();
          }
          var classes = {
            addClasses,
            removeClasses
          };
          function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = getWindow();
            let image;
            function onReady() {
              if (callback) callback();
            }
            const isPicture = $(imageEl).parent('picture')[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) {
              if (src) {
                image = new window.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) {
                  image.sizes = sizes;
                }
                if (srcset) {
                  image.srcset = srcset;
                }
                if (src) {
                  image.src = src;
                }
              } else {
                onReady();
              }
            } else {
              // image already loaded...
              onReady();
            }
          }
          function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find('img');
            function onReady() {
              if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
              if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
              if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) swiper.update();
                swiper.emit('imagesReady');
              }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
              const imageEl = swiper.imagesToLoad[i];
              swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
            }
          }
          var images = {
            loadImage,
            preloadImages
          };
          function checkOverflow() {
            const swiper = this;
            const {
              isLocked: wasLocked,
              params
            } = swiper;
            const {
              slidesOffsetBefore
            } = params;
            if (slidesOffsetBefore) {
              const lastSlideIndex = swiper.slides.length - 1;
              const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
              swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else {
              swiper.isLocked = swiper.snapGrid.length === 1;
            }
            if (params.allowSlideNext === true) {
              swiper.allowSlideNext = !swiper.isLocked;
            }
            if (params.allowSlidePrev === true) {
              swiper.allowSlidePrev = !swiper.isLocked;
            }
            if (wasLocked && wasLocked !== swiper.isLocked) {
              swiper.isEnd = false;
            }
            if (wasLocked !== swiper.isLocked) {
              swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
            }
          }
          var checkOverflow$1 = {
            checkOverflow
          };
          var defaults = {
            init: true,
            direction: 'horizontal',
            touchEventsTarget: 'wrapper',
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: 'input, select, option, textarea, button, video, label',
            // Overrides
            width: null,
            height: null,
            //
            preventInteractionOnTransition: false,
            // ssr
            userAgent: null,
            url: null,
            // To support iOS's swipe-to-go-back gesture (when being used in-app).
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide',
            // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            // Breakpoints
            breakpoints: undefined,
            breakpointsBase: 'window',
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            // in px
            slidesOffsetAfter: 0,
            // in px
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            // Disable swiper and hide navigation when container not overflow
            watchOverflow: true,
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Progress
            watchSlidesProgress: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            // rewind
            rewind: false,
            // Swiping/no swiping
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            // '.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            // Passive Listeners
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            // NS
            containerModifierClass: 'swiper-',
            // NEW
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            // Callbacks
            runCallbacksOnInit: true,
            // Internals
            _emitClasses: false
          };
          function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
              if (obj === void 0) {
                obj = {};
              }
              const moduleParamName = Object.keys(obj)[0];
              const moduleParams = obj[moduleParamName];
              if (typeof moduleParams !== 'object' || moduleParams === null) {
                extend(allModulesParams, obj);
                return;
              }
              if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
                params[moduleParamName] = {
                  auto: true
                };
              }
              if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                extend(allModulesParams, obj);
                return;
              }
              if (params[moduleParamName] === true) {
                params[moduleParamName] = {
                  enabled: true
                };
              }
              if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                params[moduleParamName].enabled = true;
              }
              if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
              };
              extend(allModulesParams, obj);
            };
          }

          /* eslint no-param-reassign: "off" */
          const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes,
            images
          };
          const extendedDefaults = {};
          class Swiper {
            constructor() {
              let el;
              let params;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
                params = args[0];
              } else {
                [el, params] = args;
              }
              if (!params) params = {};
              params = extend({}, params);
              if (el && !params.el) params.el = el;
              if (params.el && $(params.el).length > 1) {
                const swipers = [];
                $(params.el).each(containerEl => {
                  const newParams = extend({}, params, {
                    el: containerEl
                  });
                  swipers.push(new Swiper(newParams));
                });
                return swipers;
              } // Swiper Instance

              const swiper = this;
              swiper.__swiper__ = true;
              swiper.support = getSupport();
              swiper.device = getDevice({
                userAgent: params.userAgent
              });
              swiper.browser = getBrowser();
              swiper.eventsListeners = {};
              swiper.eventsAnyListeners = [];
              swiper.modules = [...swiper.__modules__];
              if (params.modules && Array.isArray(params.modules)) {
                swiper.modules.push(...params.modules);
              }
              const allModulesParams = {};
              swiper.modules.forEach(mod => {
                mod({
                  swiper,
                  extendParams: moduleExtendParams(params, allModulesParams),
                  on: swiper.on.bind(swiper),
                  once: swiper.once.bind(swiper),
                  off: swiper.off.bind(swiper),
                  emit: swiper.emit.bind(swiper)
                });
              }); // Extend defaults with modules params

              const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

              swiper.params = extend({}, swiperParams, extendedDefaults, params);
              swiper.originalParams = extend({}, swiper.params);
              swiper.passedParams = extend({}, params); // add event listeners

              if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(eventName => {
                  swiper.on(eventName, swiper.params.on[eventName]);
                });
              }
              if (swiper.params && swiper.params.onAny) {
                swiper.onAny(swiper.params.onAny);
              } // Save Dom lib

              swiper.$ = $; // Extend Swiper

              Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                // Classes
                classNames: [],
                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal() {
                  return swiper.params.direction === 'horizontal';
                },
                isVertical() {
                  return swiper.params.direction === 'vertical';
                },
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEvents: function touchEvents() {
                  const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                  const desktop = ['pointerdown', 'pointermove', 'pointerup'];
                  swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                  };
                  swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                  };
                  return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }(),
                touchEventsData: {
                  isTouched: undefined,
                  isMoved: undefined,
                  allowTouchCallbacks: undefined,
                  touchStartTime: undefined,
                  isScrolling: undefined,
                  currentTranslate: undefined,
                  startTranslate: undefined,
                  allowThresholdMove: undefined,
                  // Form elements to match
                  focusableElements: swiper.params.focusableElements,
                  // Last click time
                  lastClickTime: now(),
                  clickTimeout: undefined,
                  // Velocities
                  velocities: [],
                  allowMomentumBounce: undefined,
                  isTouchEvent: undefined,
                  startMoving: undefined
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
              });
              swiper.emit('_swiper'); // Init

              if (swiper.params.init) {
                swiper.init();
              } // Return app instance

              return swiper;
            }
            enable() {
              const swiper = this;
              if (swiper.enabled) return;
              swiper.enabled = true;
              if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
              }
              swiper.emit('enable');
            }
            disable() {
              const swiper = this;
              if (!swiper.enabled) return;
              swiper.enabled = false;
              if (swiper.params.grabCursor) {
                swiper.unsetGrabCursor();
              }
              swiper.emit('disable');
            }
            setProgress(progress, speed) {
              const swiper = this;
              progress = Math.min(Math.max(progress, 0), 1);
              const min = swiper.minTranslate();
              const max = swiper.maxTranslate();
              const current = (max - min) * progress + min;
              swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
              const swiper = this;
              if (!swiper.params._emitClasses || !swiper.el) return;
              const cls = swiper.el.className.split(' ').filter(className => {
                return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
              });
              swiper.emit('_containerClasses', cls.join(' '));
            }
            getSlideClasses(slideEl) {
              const swiper = this;
              return slideEl.className.split(' ').filter(className => {
                return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
              }).join(' ');
            }
            emitSlidesClasses() {
              const swiper = this;
              if (!swiper.params._emitClasses || !swiper.el) return;
              const updates = [];
              swiper.slides.each(slideEl => {
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                  slideEl,
                  classNames
                });
                swiper.emit('_slideClass', slideEl, classNames);
              });
              swiper.emit('_slideClasses', updates);
            }
            slidesPerViewDynamic(view, exact) {
              if (view === void 0) {
                view = 'current';
              }
              if (exact === void 0) {
                exact = false;
              }
              const swiper = this;
              const {
                params,
                slides,
                slidesGrid,
                slidesSizesGrid,
                size: swiperSize,
                activeIndex
              } = swiper;
              let spv = 1;
              if (params.centeredSlides) {
                let slideSize = slides[activeIndex].swiperSlideSize;
                let breakLoop;
                for (let i = activeIndex + 1; i < slides.length; i += 1) {
                  if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                  }
                }
                for (let i = activeIndex - 1; i >= 0; i -= 1) {
                  if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize) breakLoop = true;
                  }
                }
              } else {
                // eslint-disable-next-line
                if (view === 'current') {
                  for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) {
                      spv += 1;
                    }
                  }
                } else {
                  // previous
                  for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) {
                      spv += 1;
                    }
                  }
                }
              }
              return spv;
            }
            update() {
              const swiper = this;
              if (!swiper || swiper.destroyed) return;
              const {
                snapGrid,
                params
              } = swiper; // Breakpoints

              if (params.breakpoints) {
                swiper.setBreakpoint();
              }
              swiper.updateSize();
              swiper.updateSlides();
              swiper.updateProgress();
              swiper.updateSlidesClasses();
              function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
              }
              let translated;
              if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                setTranslate();
                if (swiper.params.autoHeight) {
                  swiper.updateAutoHeight();
                }
              } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                  translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                  translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                  setTranslate();
                }
              }
              if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
              }
              swiper.emit('update');
            }
            changeDirection(newDirection, needUpdate) {
              if (needUpdate === void 0) {
                needUpdate = true;
              }
              const swiper = this;
              const currentDirection = swiper.params.direction;
              if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
              }
              if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
              }
              swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
              swiper.emitContainerClasses();
              swiper.params.direction = newDirection;
              swiper.slides.each(slideEl => {
                if (newDirection === 'vertical') {
                  slideEl.style.width = '';
                } else {
                  slideEl.style.height = '';
                }
              });
              swiper.emit('changeDirection');
              if (needUpdate) swiper.update();
              return swiper;
            }
            mount(el) {
              const swiper = this;
              if (swiper.mounted) return true; // Find el

              const $el = $(el || swiper.params.el);
              el = $el[0];
              if (!el) {
                return false;
              }
              el.swiper = swiper;
              const getWrapperSelector = () => {
                return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
              };
              const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                  const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

                  res.children = options => $el.children(options);
                  return res;
                }
                return $el.children(getWrapperSelector());
              }; // Find Wrapper

              let $wrapperEl = getWrapper();
              if ($wrapperEl.length === 0 && swiper.params.createElements) {
                const document = getDocument();
                const wrapper = document.createElement('div');
                $wrapperEl = $(wrapper);
                wrapper.className = swiper.params.wrapperClass;
                $el.append(wrapper);
                $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
                  $wrapperEl.append(slideEl);
                });
              }
              Object.assign(swiper, {
                $el,
                el,
                $wrapperEl,
                wrapperEl: $wrapperEl[0],
                mounted: true,
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box'
              });
              return true;
            }
            init(el) {
              const swiper = this;
              if (swiper.initialized) return swiper;
              const mounted = swiper.mount(el);
              if (mounted === false) return swiper;
              swiper.emit('beforeInit'); // Set breakpoint

              if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
              } // Add Classes

              swiper.addClasses(); // Create loop

              if (swiper.params.loop) {
                swiper.loopCreate();
              } // Update size

              swiper.updateSize(); // Update slides

              swiper.updateSlides();
              if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
              } // Set Grab Cursor

              if (swiper.params.grabCursor && swiper.enabled) {
                swiper.setGrabCursor();
              }
              if (swiper.params.preloadImages) {
                swiper.preloadImages();
              } // Slide To Initial Slide

              if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
              } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
              } // Attach events

              swiper.attachEvents(); // Init Flag

              swiper.initialized = true; // Emit

              swiper.emit('init');
              swiper.emit('afterInit');
              return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
              if (deleteInstance === void 0) {
                deleteInstance = true;
              }
              if (cleanStyles === void 0) {
                cleanStyles = true;
              }
              const swiper = this;
              const {
                params,
                $el,
                $wrapperEl,
                slides
              } = swiper;
              if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
              }
              swiper.emit('beforeDestroy'); // Init Flag

              swiper.initialized = false; // Detach events

              swiper.detachEvents(); // Destroy loop

              if (params.loop) {
                swiper.loopDestroy();
              } // Cleanup styles

              if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');
                if (slides && slides.length) {
                  slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
                }
              }
              swiper.emit('destroy'); // Detach emitter events

              Object.keys(swiper.eventsListeners).forEach(eventName => {
                swiper.off(eventName);
              });
              if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                deleteProps(swiper);
              }
              swiper.destroyed = true;
              return null;
            }
            static extendDefaults(newDefaults) {
              extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
              return extendedDefaults;
            }
            static get defaults() {
              return defaults;
            }
            static installModule(mod) {
              if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
              const modules = Swiper.prototype.__modules__;
              if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
                modules.push(mod);
              }
            }
            static use(module) {
              if (Array.isArray(module)) {
                module.forEach(m => Swiper.installModule(m));
                return Swiper;
              }
              Swiper.installModule(module);
              return Swiper;
            }
          }
          Object.keys(prototypes).forEach(prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
              Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            });
          });
          Swiper.use([Resize, Observer]);
          function Virtual(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            extendParams({
              virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
              }
            });
            let cssModeTimeout;
            swiper.virtual = {
              cache: {},
              from: undefined,
              to: undefined,
              slides: [],
              offset: 0,
              slidesGrid: []
            };
            function renderSlide(slide, index) {
              const params = swiper.params.virtual;
              if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
              }
              const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
              if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
              if (params.cache) swiper.virtual.cache[index] = $slideEl;
              return $slideEl;
            }
            function update(force) {
              const {
                slidesPerView,
                slidesPerGroup,
                centeredSlides
              } = swiper.params;
              const {
                addSlidesBefore,
                addSlidesAfter
              } = swiper.params.virtual;
              const {
                from: previousFrom,
                to: previousTo,
                slides,
                slidesGrid: previousSlidesGrid,
                offset: previousOffset
              } = swiper.virtual;
              if (!swiper.params.cssMode) {
                swiper.updateActiveIndex();
              }
              const activeIndex = swiper.activeIndex || 0;
              let offsetProp;
              if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
              let slidesAfter;
              let slidesBefore;
              if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
              } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = slidesPerGroup + addSlidesBefore;
              }
              const from = Math.max((activeIndex || 0) - slidesBefore, 0);
              const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
              const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
              Object.assign(swiper.virtual, {
                from,
                to,
                offset,
                slidesGrid: swiper.slidesGrid
              });
              function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) {
                  swiper.lazy.load();
                }
                emit('virtualUpdate');
              }
              if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                  swiper.slides.css(offsetProp, `${offset}px`);
                }
                swiper.updateProgress();
                emit('virtualUpdate');
                return;
              }
              if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                  offset,
                  from,
                  to,
                  slides: function getSlides() {
                    const slidesToRender = [];
                    for (let i = from; i <= to; i += 1) {
                      slidesToRender.push(slides[i]);
                    }
                    return slidesToRender;
                  }()
                });
                if (swiper.params.virtual.renderExternalUpdate) {
                  onRendered();
                } else {
                  emit('virtualUpdate');
                }
                return;
              }
              const prependIndexes = [];
              const appendIndexes = [];
              if (force) {
                swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
              } else {
                for (let i = previousFrom; i <= previousTo; i += 1) {
                  if (i < from || i > to) {
                    swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                  }
                }
              }
              for (let i = 0; i < slides.length; i += 1) {
                if (i >= from && i <= to) {
                  if (typeof previousTo === 'undefined' || force) {
                    appendIndexes.push(i);
                  } else {
                    if (i > previousTo) appendIndexes.push(i);
                    if (i < previousFrom) prependIndexes.push(i);
                  }
                }
              }
              appendIndexes.forEach(index => {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
              });
              prependIndexes.sort((a, b) => b - a).forEach(index => {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
              });
              swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
              onRendered();
            }
            function appendSlide(slides) {
              if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                  if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
              } else {
                swiper.virtual.slides.push(slides);
              }
              update(true);
            }
            function prependSlide(slides) {
              const activeIndex = swiper.activeIndex;
              let newActiveIndex = activeIndex + 1;
              let numberOfNewSlides = 1;
              if (Array.isArray(slides)) {
                for (let i = 0; i < slides.length; i += 1) {
                  if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
              } else {
                swiper.virtual.slides.unshift(slides);
              }
              if (swiper.params.virtual.cache) {
                const cache = swiper.virtual.cache;
                const newCache = {};
                Object.keys(cache).forEach(cachedIndex => {
                  const $cachedEl = cache[cachedIndex];
                  const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                  if (cachedElIndex) {
                    $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                  }
                  newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                });
                swiper.virtual.cache = newCache;
              }
              update(true);
              swiper.slideTo(newActiveIndex, 0);
            }
            function removeSlide(slidesIndexes) {
              if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
              let activeIndex = swiper.activeIndex;
              if (Array.isArray(slidesIndexes)) {
                for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                  swiper.virtual.slides.splice(slidesIndexes[i], 1);
                  if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes[i]];
                  }
                  if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                  activeIndex = Math.max(activeIndex, 0);
                }
              } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (swiper.params.virtual.cache) {
                  delete swiper.virtual.cache[slidesIndexes];
                }
                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
              }
              update(true);
              swiper.slideTo(activeIndex, 0);
            }
            function removeAllSlides() {
              swiper.virtual.slides = [];
              if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
              }
              update(true);
              swiper.slideTo(0, 0);
            }
            on('beforeInit', () => {
              if (!swiper.params.virtual.enabled) return;
              swiper.virtual.slides = swiper.params.virtual.slides;
              swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
              swiper.params.watchSlidesProgress = true;
              swiper.originalParams.watchSlidesProgress = true;
              if (!swiper.params.initialSlide) {
                update();
              }
            });
            on('setTranslate', () => {
              if (!swiper.params.virtual.enabled) return;
              if (swiper.params.cssMode && !swiper._immediateVirtual) {
                clearTimeout(cssModeTimeout);
                cssModeTimeout = setTimeout(() => {
                  update();
                }, 100);
              } else {
                update();
              }
            });
            on('init update resize', () => {
              if (!swiper.params.virtual.enabled) return;
              if (swiper.params.cssMode) {
                setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
              }
            });
            Object.assign(swiper.virtual, {
              appendSlide,
              prependSlide,
              removeSlide,
              removeAllSlides,
              update
            });
          }

          /* eslint-disable consistent-return */
          function Keyboard(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            const document = getDocument();
            const window = getWindow();
            swiper.keyboard = {
              enabled: false
            };
            extendParams({
              keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
              }
            });
            function handle(event) {
              if (!swiper.enabled) return;
              const {
                rtlTranslate: rtl
              } = swiper;
              let e = event;
              if (e.originalEvent) e = e.originalEvent; // jquery fix

              const kc = e.keyCode || e.charCode;
              const pageUpDown = swiper.params.keyboard.pageUpDown;
              const isPageUp = pageUpDown && kc === 33;
              const isPageDown = pageUpDown && kc === 34;
              const isArrowLeft = kc === 37;
              const isArrowRight = kc === 39;
              const isArrowUp = kc === 38;
              const isArrowDown = kc === 40; // Directions locks

              if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
              }
              if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
              }
              if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
              }
              if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
              }
              if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                let inView = false; // Check that swiper should be inside of visible area of window

                if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
                  return undefined;
                }
                const $el = swiper.$el;
                const swiperWidth = $el[0].clientWidth;
                const swiperHeight = $el[0].clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const swiperOffset = swiper.$el.offset();
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                  const point = swiperCoord[i];
                  if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                    inView = true;
                  }
                }
                if (!inView) return undefined;
              }
              if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                  if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
              } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                  if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
              }
              emit('keyPress', kc);
              return undefined;
            }
            function enable() {
              if (swiper.keyboard.enabled) return;
              $(document).on('keydown', handle);
              swiper.keyboard.enabled = true;
            }
            function disable() {
              if (!swiper.keyboard.enabled) return;
              $(document).off('keydown', handle);
              swiper.keyboard.enabled = false;
            }
            on('init', () => {
              if (swiper.params.keyboard.enabled) {
                enable();
              }
            });
            on('destroy', () => {
              if (swiper.keyboard.enabled) {
                disable();
              }
            });
            Object.assign(swiper.keyboard, {
              enable,
              disable
            });
          }

          /* eslint-disable consistent-return */
          function Mousewheel(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            const window = getWindow();
            extendParams({
              mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null
              }
            });
            swiper.mousewheel = {
              enabled: false
            };
            let timeout;
            let lastScrollTime = now();
            let lastEventBeforeSnap;
            const recentWheelEvents = [];
            function normalize(e) {
              // Reasonable defaults
              const PIXEL_STEP = 10;
              const LINE_HEIGHT = 40;
              const PAGE_HEIGHT = 800;
              let sX = 0;
              let sY = 0; // spinX, spinY

              let pX = 0;
              let pY = 0; // pixelX, pixelY
              // Legacy

              if ('detail' in e) {
                sY = e.detail;
              }
              if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
              }
              if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
              }
              if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
              } // side scrolling on FF with DOMMouseScroll

              if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
              }
              pX = sX * PIXEL_STEP;
              pY = sY * PIXEL_STEP;
              if ('deltaY' in e) {
                pY = e.deltaY;
              }
              if ('deltaX' in e) {
                pX = e.deltaX;
              }
              if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
              }
              if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                  // delta in LINE units
                  pX *= LINE_HEIGHT;
                  pY *= LINE_HEIGHT;
                } else {
                  // delta in PAGE units
                  pX *= PAGE_HEIGHT;
                  pY *= PAGE_HEIGHT;
                }
              } // Fall-back if spin cannot be determined

              if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
              }
              if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
              }
              return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
              };
            }
            function handleMouseEnter() {
              if (!swiper.enabled) return;
              swiper.mouseEntered = true;
            }
            function handleMouseLeave() {
              if (!swiper.enabled) return;
              swiper.mouseEntered = false;
            }
            function animateSlider(newEvent) {
              if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
                // Prevent if delta of wheel scroll delta is below configured threshold
                return false;
              }
              if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
                // Prevent if time between scrolls is below configured threshold
                return false;
              } // If the movement is NOT big enough and
              // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
              //   Don't go any further (avoid insignificant scroll movement).

              if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
                // Return false as a default
                return true;
              } // If user is scrolling towards the end:
              //   If the slider hasn't hit the latest slide or
              //   if the slider is a loop and
              //   if the slider isn't moving right now:
              //     Go to next slide and
              //     emit a scroll event.
              // Else (the user is scrolling towards the beginning) and
              // if the slider hasn't hit the first slide or
              // if the slider is a loop and
              // if the slider isn't moving right now:
              //   Go to prev slide and
              //   emit a scroll event.

              if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                  swiper.slideNext();
                  emit('scroll', newEvent.raw);
                }
              } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                emit('scroll', newEvent.raw);
              } // If you got here is because an animation has been triggered so store the current time

              lastScrollTime = new window.Date().getTime(); // Return false as a default

              return false;
            }
            function releaseScroll(newEvent) {
              const params = swiper.params.mousewheel;
              if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                  // Return true to animate scroll on edges
                  return true;
                }
              } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
              }
              return false;
            }
            function handle(event) {
              let e = event;
              let disableParentSwiper = true;
              if (!swiper.enabled) return;
              const params = swiper.params.mousewheel;
              if (swiper.params.cssMode) {
                e.preventDefault();
              }
              let target = swiper.$el;
              if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
              }
              if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
              if (e.originalEvent) e = e.originalEvent; // jquery fix

              let delta = 0;
              const rtlFactor = swiper.rtlTranslate ? -1 : 1;
              const data = normalize(e);
              if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                  if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
              } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
              }
              if (delta === 0) return true;
              if (params.invert) delta = -delta; // Get the scroll positions

              let positions = swiper.getTranslate() + delta * params.sensitivity;
              if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
              if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
              //     the disableParentSwiper will be true.
              // When loop is false:
              //     if the scroll positions is not on edge,
              //     then the disableParentSwiper will be true.
              //     if the scroll on edge positions,
              //     then the disableParentSwiper will be false.

              disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
              if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
              if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                // Register the new event in a variable which stores the relevant data
                const newEvent = {
                  time: now(),
                  delta: Math.abs(delta),
                  direction: Math.sign(delta),
                  raw: event
                }; // Keep the most recent events

                if (recentWheelEvents.length >= 2) {
                  recentWheelEvents.shift(); // only store the last N events
                }

                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.

                if (prevEvent) {
                  if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                    animateSlider(newEvent);
                  }
                } else {
                  animateSlider(newEvent);
                } // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.

                if (releaseScroll(newEvent)) {
                  return true;
                }
              } else {
                // Freemode or scrollContainer:
                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                const newEvent = {
                  time: now(),
                  delta: Math.abs(delta),
                  direction: Math.sign(delta)
                };
                const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                if (!ignoreWheelEvents) {
                  lastEventBeforeSnap = undefined;
                  if (swiper.params.loop) {
                    swiper.loopFix();
                  }
                  let position = swiper.getTranslate() + delta * params.sensitivity;
                  const wasBeginning = swiper.isBeginning;
                  const wasEnd = swiper.isEnd;
                  if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                  if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                  swiper.setTransition(0);
                  swiper.setTranslate(position);
                  swiper.updateProgress();
                  swiper.updateActiveIndex();
                  swiper.updateSlidesClasses();
                  if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                    swiper.updateSlidesClasses();
                  }
                  if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) {
                      recentWheelEvents.shift(); // only store the last N events
                    }

                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                      // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                      recentWheelEvents.splice(0);
                    } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                      // We're at the end of the deceleration of a momentum scroll, so there's no need
                      // to wait for more events. Snap ASAP on the next tick.
                      // Also, because there's some remaining momentum we'll bias the snap in the
                      // direction of the ongoing scroll because it's better UX for the scroll to snap
                      // in the same direction as the scroll instead of reversing to snap.  Therefore,
                      // if it's already scrolled more than 20% in the current direction, keep going.
                      const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                      lastEventBeforeSnap = newEvent;
                      recentWheelEvents.splice(0);
                      timeout = nextTick(() => {
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                      }, 0); // no delay; move on next tick
                    }

                    if (!timeout) {
                      // if we get here, then we haven't detected the end of a momentum scroll, so
                      // we'll consider a scroll "complete" when there haven't been any wheel events
                      // for 500ms.
                      timeout = nextTick(() => {
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                      }, 500);
                    }
                  } // Emit event

                  if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

                  if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

                  if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                }
              }
              if (e.preventDefault) e.preventDefault();else e.returnValue = false;
              return false;
            }
            function events(method) {
              let target = swiper.$el;
              if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
              }
              target[method]('mouseenter', handleMouseEnter);
              target[method]('mouseleave', handleMouseLeave);
              target[method]('wheel', handle);
            }
            function enable() {
              if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener('wheel', handle);
                return true;
              }
              if (swiper.mousewheel.enabled) return false;
              events('on');
              swiper.mousewheel.enabled = true;
              return true;
            }
            function disable() {
              if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, handle);
                return true;
              }
              if (!swiper.mousewheel.enabled) return false;
              events('off');
              swiper.mousewheel.enabled = false;
              return true;
            }
            on('init', () => {
              if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                disable();
              }
              if (swiper.params.mousewheel.enabled) enable();
            });
            on('destroy', () => {
              if (swiper.params.cssMode) {
                enable();
              }
              if (swiper.mousewheel.enabled) disable();
            });
            Object.assign(swiper.mousewheel, {
              enable,
              disable
            });
          }
          function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = getDocument();
            if (swiper.params.createElements) {
              Object.keys(checkProps).forEach(key => {
                if (!params[key] && params.auto === true) {
                  let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                  if (!element) {
                    element = document.createElement('div');
                    element.className = checkProps[key];
                    swiper.$el.append(element);
                  }
                  params[key] = element;
                  originalParams[key] = element;
                }
              });
            }
            return params;
          }
          function Navigation(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            extendParams({
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock'
              }
            });
            swiper.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null
            };
            function getEl(el) {
              let $el;
              if (el) {
                $el = $(el);
                if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
                  $el = swiper.$el.find(el);
                }
              }
              return $el;
            }
            function toggleEl($el, disabled) {
              const params = swiper.params.navigation;
              if ($el && $el.length > 0) {
                $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
                if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) {
                  $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                }
              }
            }
            function update() {
              // Update Navigation Buttons
              if (swiper.params.loop) return;
              const {
                $nextEl,
                $prevEl
              } = swiper.navigation;
              toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
              toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
              e.preventDefault();
              if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
              swiper.slidePrev();
            }
            function onNextClick(e) {
              e.preventDefault();
              if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
              swiper.slideNext();
            }
            function init() {
              const params = swiper.params.navigation;
              swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev'
              });
              if (!(params.nextEl || params.prevEl)) return;
              const $nextEl = getEl(params.nextEl);
              const $prevEl = getEl(params.prevEl);
              if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', onNextClick);
              }
              if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', onPrevClick);
              }
              Object.assign(swiper.navigation, {
                $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl,
                prevEl: $prevEl && $prevEl[0]
              });
              if (!swiper.enabled) {
                if ($nextEl) $nextEl.addClass(params.lockClass);
                if ($prevEl) $prevEl.addClass(params.lockClass);
              }
            }
            function destroy() {
              const {
                $nextEl,
                $prevEl
              } = swiper.navigation;
              if ($nextEl && $nextEl.length) {
                $nextEl.off('click', onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
              }
              if ($prevEl && $prevEl.length) {
                $prevEl.off('click', onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
              }
            }
            on('init', () => {
              init();
              update();
            });
            on('toEdge fromEdge lock unlock', () => {
              update();
            });
            on('destroy', () => {
              destroy();
            });
            on('enable disable', () => {
              const {
                $nextEl,
                $prevEl
              } = swiper.navigation;
              if ($nextEl) {
                $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
              }
              if ($prevEl) {
                $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
              }
            });
            on('click', (_s, e) => {
              const {
                $nextEl,
                $prevEl
              } = swiper.navigation;
              const targetEl = e.target;
              if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                let isHidden;
                if ($nextEl) {
                  isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                } else if ($prevEl) {
                  isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                }
                if (isHidden === true) {
                  emit('navigationShow');
                } else {
                  emit('navigationHide');
                }
                if ($nextEl) {
                  $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
                if ($prevEl) {
                  $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
              }
            });
            Object.assign(swiper.navigation, {
              update,
              init,
              destroy
            });
          }
          function classesToSelector(classes) {
            if (classes === void 0) {
              classes = '';
            }
            return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
            .replace(/ /g, '.')}`;
          }
          function Pagination(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            const pfx = 'swiper-pagination';
            extendParams({
              pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: number => number,
                formatFractionTotal: number => number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`
              }
            });
            swiper.pagination = {
              el: null,
              $el: null,
              bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
              return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
            }
            function setSideBullets($bulletEl, position) {
              const {
                bulletActiveClass
              } = swiper.params.pagination;
              $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
              // Render || Update Pagination bullets/items
              const rtl = swiper.rtl;
              const params = swiper.params.pagination;
              if (isPaginationDisabled()) return;
              const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
              const $el = swiper.pagination.$el; // Current/Total

              let current;
              const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
              if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                  current -= slidesLength - swiper.loopedSlides * 2;
                }
                if (current > total - 1) current -= total;
                if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
              } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
              } else {
                current = swiper.activeIndex || 0;
              } // Types

              if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                  bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                  $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                  if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                      dynamicBulletIndex = params.dynamicMainBullets - 1;
                    } else if (dynamicBulletIndex < 0) {
                      dynamicBulletIndex = 0;
                    }
                  }
                  firstIndex = Math.max(current - dynamicBulletIndex, 0);
                  lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                  midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));
                if ($el.length > 1) {
                  bullets.each(bullet => {
                    const $bullet = $(bullet);
                    const bulletIndex = $bullet.index();
                    if (bulletIndex === current) {
                      $bullet.addClass(params.bulletActiveClass);
                    }
                    if (params.dynamicBullets) {
                      if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                        $bullet.addClass(`${params.bulletActiveClass}-main`);
                      }
                      if (bulletIndex === firstIndex) {
                        setSideBullets($bullet, 'prev');
                      }
                      if (bulletIndex === lastIndex) {
                        setSideBullets($bullet, 'next');
                      }
                    }
                  });
                } else {
                  const $bullet = bullets.eq(current);
                  const bulletIndex = $bullet.index();
                  $bullet.addClass(params.bulletActiveClass);
                  if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for (let i = firstIndex; i <= lastIndex; i += 1) {
                      bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    }
                    if (swiper.params.loop) {
                      if (bulletIndex >= bullets.length) {
                        for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                          bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                        }
                        bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                      } else {
                        setSideBullets($firstDisplayedBullet, 'prev');
                        setSideBullets($lastDisplayedBullet, 'next');
                      }
                    } else {
                      setSideBullets($firstDisplayedBullet, 'prev');
                      setSideBullets($lastDisplayedBullet, 'next');
                    }
                  }
                }
                if (params.dynamicBullets) {
                  const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                  const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                  const offsetProp = rtl ? 'right' : 'left';
                  bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
                }
              }
              if (params.type === 'fraction') {
                $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
              }
              if (params.type === 'progressbar') {
                let progressbarDirection;
                if (params.progressbarOpposite) {
                  progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                  progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                  scaleX = scale;
                } else {
                  scaleY = scale;
                }
                $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
              }
              if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                emit('paginationRender', $el[0]);
              } else {
                emit('paginationUpdate', $el[0]);
              }
              if (swiper.params.watchOverflow && swiper.enabled) {
                $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
              }
            }
            function render() {
              // Render Container
              const params = swiper.params.pagination;
              if (isPaginationDisabled()) return;
              const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
              const $el = swiper.pagination.$el;
              let paginationHTML = '';
              if (params.type === 'bullets') {
                let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
                  numberOfBullets = slidesLength;
                }
                for (let i = 0; i < numberOfBullets; i += 1) {
                  if (params.renderBullet) {
                    paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                  } else {
                    paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                  }
                }
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
              }
              if (params.type === 'fraction') {
                if (params.renderFraction) {
                  paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                  paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
                }
                $el.html(paginationHTML);
              }
              if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                  paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                  paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                }
                $el.html(paginationHTML);
              }
              if (params.type !== 'custom') {
                emit('paginationRender', swiper.pagination.$el[0]);
              }
            }
            function init() {
              swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: 'swiper-pagination'
              });
              const params = swiper.params.pagination;
              if (!params.el) return;
              let $el = $(params.el);
              if ($el.length === 0) return;
              if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

                if ($el.length > 1) {
                  $el = $el.filter(el => {
                    if ($(el).parents('.swiper')[0] !== swiper.el) return false;
                    return true;
                  });
                }
              }
              if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
              }
              $el.addClass(params.modifierClass + params.type);
              $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
              if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                  params.dynamicMainBullets = 1;
                }
              }
              if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
              }
              if (params.clickable) {
                $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
                  e.preventDefault();
                  let index = $(this).index() * swiper.params.slidesPerGroup;
                  if (swiper.params.loop) index += swiper.loopedSlides;
                  swiper.slideTo(index);
                });
              }
              Object.assign(swiper.pagination, {
                $el,
                el: $el[0]
              });
              if (!swiper.enabled) {
                $el.addClass(params.lockClass);
              }
            }
            function destroy() {
              const params = swiper.params.pagination;
              if (isPaginationDisabled()) return;
              const $el = swiper.pagination.$el;
              $el.removeClass(params.hiddenClass);
              $el.removeClass(params.modifierClass + params.type);
              $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
              if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
              if (params.clickable) {
                $el.off('click', classesToSelector(params.bulletClass));
              }
            }
            on('init', () => {
              init();
              render();
              update();
            });
            on('activeIndexChange', () => {
              if (swiper.params.loop) {
                update();
              } else if (typeof swiper.snapIndex === 'undefined') {
                update();
              }
            });
            on('snapIndexChange', () => {
              if (!swiper.params.loop) {
                update();
              }
            });
            on('slidesLengthChange', () => {
              if (swiper.params.loop) {
                render();
                update();
              }
            });
            on('snapGridLengthChange', () => {
              if (!swiper.params.loop) {
                render();
                update();
              }
            });
            on('destroy', () => {
              destroy();
            });
            on('enable disable', () => {
              const {
                $el
              } = swiper.pagination;
              if ($el) {
                $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
              }
            });
            on('lock unlock', () => {
              update();
            });
            on('click', (_s, e) => {
              const targetEl = e.target;
              const {
                $el
              } = swiper.pagination;
              if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                if (isHidden === true) {
                  emit('paginationShow');
                } else {
                  emit('paginationHide');
                }
                $el.toggleClass(swiper.params.pagination.hiddenClass);
              }
            });
            Object.assign(swiper.pagination, {
              render,
              update,
              init,
              destroy
            });
          }
          function Scrollbar(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            const document = getDocument();
            let isTouched = false;
            let timeout = null;
            let dragTimeout = null;
            let dragStartPos;
            let dragSize;
            let trackSize;
            let divider;
            extendParams({
              scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag'
              }
            });
            swiper.scrollbar = {
              el: null,
              dragEl: null,
              $el: null,
              $dragEl: null
            };
            function setTranslate() {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              const {
                scrollbar,
                rtlTranslate: rtl,
                progress
              } = swiper;
              const {
                $dragEl,
                $el
              } = scrollbar;
              const params = swiper.params.scrollbar;
              let newSize = dragSize;
              let newPos = (trackSize - dragSize) * progress;
              if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                  newSize = dragSize - newPos;
                  newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                  newSize = trackSize + newPos;
                }
              } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
              } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
              }
              if (swiper.isHorizontal()) {
                $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
                $dragEl[0].style.width = `${newSize}px`;
              } else {
                $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
                $dragEl[0].style.height = `${newSize}px`;
              }
              if (params.hide) {
                clearTimeout(timeout);
                $el[0].style.opacity = 1;
                timeout = setTimeout(() => {
                  $el[0].style.opacity = 0;
                  $el.transition(400);
                }, 1000);
              }
            }
            function setTransition(duration) {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              swiper.scrollbar.$dragEl.transition(duration);
            }
            function updateSize() {
              if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
              const {
                scrollbar
              } = swiper;
              const {
                $dragEl,
                $el
              } = scrollbar;
              $dragEl[0].style.width = '';
              $dragEl[0].style.height = '';
              trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
              divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
              if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
              } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
              }
              if (swiper.isHorizontal()) {
                $dragEl[0].style.width = `${dragSize}px`;
              } else {
                $dragEl[0].style.height = `${dragSize}px`;
              }
              if (divider >= 1) {
                $el[0].style.display = 'none';
              } else {
                $el[0].style.display = '';
              }
              if (swiper.params.scrollbar.hide) {
                $el[0].style.opacity = 0;
              }
              if (swiper.params.watchOverflow && swiper.enabled) {
                scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
              }
            }
            function getPointerPosition(e) {
              if (swiper.isHorizontal()) {
                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
              }
              return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
            }
            function setDragPosition(e) {
              const {
                scrollbar,
                rtlTranslate: rtl
              } = swiper;
              const {
                $el
              } = scrollbar;
              let positionRatio;
              positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
              positionRatio = Math.max(Math.min(positionRatio, 1), 0);
              if (rtl) {
                positionRatio = 1 - positionRatio;
              }
              const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
              swiper.updateProgress(position);
              swiper.setTranslate(position);
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
            function onDragStart(e) {
              const params = swiper.params.scrollbar;
              const {
                scrollbar,
                $wrapperEl
              } = swiper;
              const {
                $el,
                $dragEl
              } = scrollbar;
              isTouched = true;
              dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
              e.preventDefault();
              e.stopPropagation();
              $wrapperEl.transition(100);
              $dragEl.transition(100);
              setDragPosition(e);
              clearTimeout(dragTimeout);
              $el.transition(0);
              if (params.hide) {
                $el.css('opacity', 1);
              }
              if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', 'none');
              }
              emit('scrollbarDragStart', e);
            }
            function onDragMove(e) {
              const {
                scrollbar,
                $wrapperEl
              } = swiper;
              const {
                $el,
                $dragEl
              } = scrollbar;
              if (!isTouched) return;
              if (e.preventDefault) e.preventDefault();else e.returnValue = false;
              setDragPosition(e);
              $wrapperEl.transition(0);
              $el.transition(0);
              $dragEl.transition(0);
              emit('scrollbarDragMove', e);
            }
            function onDragEnd(e) {
              const params = swiper.params.scrollbar;
              const {
                scrollbar,
                $wrapperEl
              } = swiper;
              const {
                $el
              } = scrollbar;
              if (!isTouched) return;
              isTouched = false;
              if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', '');
                $wrapperEl.transition('');
              }
              if (params.hide) {
                clearTimeout(dragTimeout);
                dragTimeout = nextTick(() => {
                  $el.css('opacity', 0);
                  $el.transition(400);
                }, 1000);
              }
              emit('scrollbarDragEnd', e);
              if (params.snapOnRelease) {
                swiper.slideToClosest();
              }
            }
            function events(method) {
              const {
                scrollbar,
                touchEventsTouch,
                touchEventsDesktop,
                params,
                support
              } = swiper;
              const $el = scrollbar.$el;
              const target = $el[0];
              const activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
              } : false;
              const passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              if (!target) return;
              const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
              if (!support.touch) {
                target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
                document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
                document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
              } else {
                target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
                target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
                target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
              }
            }
            function enableDraggable() {
              if (!swiper.params.scrollbar.el) return;
              events('on');
            }
            function disableDraggable() {
              if (!swiper.params.scrollbar.el) return;
              events('off');
            }
            function init() {
              const {
                scrollbar,
                $el: $swiperEl
              } = swiper;
              swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                el: 'swiper-scrollbar'
              });
              const params = swiper.params.scrollbar;
              if (!params.el) return;
              let $el = $(params.el);
              if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
              }
              let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
              if ($dragEl.length === 0) {
                $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
                $el.append($dragEl);
              }
              Object.assign(scrollbar, {
                $el,
                el: $el[0],
                $dragEl,
                dragEl: $dragEl[0]
              });
              if (params.draggable) {
                enableDraggable();
              }
              if ($el) {
                $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
              }
            }
            function destroy() {
              disableDraggable();
            }
            on('init', () => {
              init();
              updateSize();
              setTranslate();
            });
            on('update resize observerUpdate lock unlock', () => {
              updateSize();
            });
            on('setTranslate', () => {
              setTranslate();
            });
            on('setTransition', (_s, duration) => {
              setTransition(duration);
            });
            on('enable disable', () => {
              const {
                $el
              } = swiper.scrollbar;
              if ($el) {
                $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
              }
            });
            on('destroy', () => {
              destroy();
            });
            Object.assign(swiper.scrollbar, {
              updateSize,
              setTranslate,
              init,
              destroy
            });
          }
          function Parallax(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              parallax: {
                enabled: false
              }
            });
            const setTransform = (el, progress) => {
              const {
                rtl
              } = swiper;
              const $el = $(el);
              const rtlFactor = rtl ? -1 : 1;
              const p = $el.attr('data-swiper-parallax') || '0';
              let x = $el.attr('data-swiper-parallax-x');
              let y = $el.attr('data-swiper-parallax-y');
              const scale = $el.attr('data-swiper-parallax-scale');
              const opacity = $el.attr('data-swiper-parallax-opacity');
              if (x || y) {
                x = x || '0';
                y = y || '0';
              } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
              } else {
                y = p;
                x = '0';
              }
              if (x.indexOf('%') >= 0) {
                x = `${parseInt(x, 10) * progress * rtlFactor}%`;
              } else {
                x = `${x * progress * rtlFactor}px`;
              }
              if (y.indexOf('%') >= 0) {
                y = `${parseInt(y, 10) * progress}%`;
              } else {
                y = `${y * progress}px`;
              }
              if (typeof opacity !== 'undefined' && opacity !== null) {
                const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                $el[0].style.opacity = currentOpacity;
              }
              if (typeof scale === 'undefined' || scale === null) {
                $el.transform(`translate3d(${x}, ${y}, 0px)`);
              } else {
                const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
              }
            };
            const setTranslate = () => {
              const {
                $el,
                slides,
                progress,
                snapGrid
              } = swiper;
              $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
                setTransform(el, progress);
              });
              slides.each((slideEl, slideIndex) => {
                let slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                  slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
                  setTransform(el, slideProgress);
                });
              });
            };
            const setTransition = function (duration) {
              if (duration === void 0) {
                duration = swiper.params.speed;
              }
              const {
                $el
              } = swiper;
              $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
                const $parallaxEl = $(parallaxEl);
                let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                $parallaxEl.transition(parallaxDuration);
              });
            };
            on('beforeInit', () => {
              if (!swiper.params.parallax.enabled) return;
              swiper.params.watchSlidesProgress = true;
              swiper.originalParams.watchSlidesProgress = true;
            });
            on('init', () => {
              if (!swiper.params.parallax.enabled) return;
              setTranslate();
            });
            on('setTranslate', () => {
              if (!swiper.params.parallax.enabled) return;
              setTranslate();
            });
            on('setTransition', (_swiper, duration) => {
              if (!swiper.params.parallax.enabled) return;
              setTransition(duration);
            });
          }
          function Zoom(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            const window = getWindow();
            extendParams({
              zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
              }
            });
            swiper.zoom = {
              enabled: false
            };
            let currentScale = 1;
            let isScaling = false;
            let gesturesEnabled;
            let fakeGestureTouched;
            let fakeGestureMoved;
            const gesture = {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            };
            const image = {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            };
            const velocity = {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            };
            let scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
              get() {
                return scale;
              },
              set(value) {
                if (scale !== value) {
                  const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                  const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                  emit('zoomChange', value, imageEl, slideEl);
                }
                scale = value;
              }
            });
            function getDistanceBetweenTouches(e) {
              if (e.targetTouches.length < 2) return 1;
              const x1 = e.targetTouches[0].pageX;
              const y1 = e.targetTouches[0].pageY;
              const x2 = e.targetTouches[1].pageX;
              const y2 = e.targetTouches[1].pageY;
              const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
              return distance;
            } // Events

            function onGestureStart(e) {
              const support = swiper.support;
              const params = swiper.params.zoom;
              fakeGestureTouched = false;
              fakeGestureMoved = false;
              if (!support.gestures) {
                if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                  return;
                }
                fakeGestureTouched = true;
                gesture.scaleStart = getDistanceBetweenTouches(e);
              }
              if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
                if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                  gesture.$imageEl = undefined;
                  return;
                }
              }
              if (gesture.$imageEl) {
                gesture.$imageEl.transition(0);
              }
              isScaling = true;
            }
            function onGestureChange(e) {
              const support = swiper.support;
              const params = swiper.params.zoom;
              const zoom = swiper.zoom;
              if (!support.gestures) {
                if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                  return;
                }
                fakeGestureMoved = true;
                gesture.scaleMove = getDistanceBetweenTouches(e);
              }
              if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                if (e.type === 'gesturechange') onGestureStart(e);
                return;
              }
              if (support.gestures) {
                zoom.scale = e.scale * currentScale;
              } else {
                zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
              }
              if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
              }
              if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
              }
              gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            }
            function onGestureEnd(e) {
              const device = swiper.device;
              const support = swiper.support;
              const params = swiper.params.zoom;
              const zoom = swiper.zoom;
              if (!support.gestures) {
                if (!fakeGestureTouched || !fakeGestureMoved) {
                  return;
                }
                if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
                  return;
                }
                fakeGestureTouched = false;
                fakeGestureMoved = false;
              }
              if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
              zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
              gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
              currentScale = zoom.scale;
              isScaling = false;
              if (zoom.scale === 1) gesture.$slideEl = undefined;
            }
            function onTouchStart(e) {
              const device = swiper.device;
              if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
              if (image.isTouched) return;
              if (device.android && e.cancelable) e.preventDefault();
              image.isTouched = true;
              image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
              image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            }
            function onTouchMove(e) {
              const zoom = swiper.zoom;
              if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
              swiper.allowClick = false;
              if (!image.isTouched || !gesture.$slideEl) return;
              if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
              } // Define if we need image drag

              const scaledWidth = image.width * zoom.scale;
              const scaledHeight = image.height * zoom.scale;
              if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
              image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
              image.maxX = -image.minX;
              image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
              image.maxY = -image.minY;
              image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
              image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
              if (!image.isMoved && !isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                  image.isTouched = false;
                  return;
                }
                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                  image.isTouched = false;
                  return;
                }
              }
              if (e.cancelable) {
                e.preventDefault();
              }
              e.stopPropagation();
              image.isMoved = true;
              image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
              image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
              if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
              }
              if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
              }
              if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
              }
              if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
              } // Velocity

              if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
              if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
              if (!velocity.prevTime) velocity.prevTime = Date.now();
              velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
              velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
              if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
              if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
              velocity.prevPositionX = image.touchesCurrent.x;
              velocity.prevPositionY = image.touchesCurrent.y;
              velocity.prevTime = Date.now();
              gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            }
            function onTouchEnd() {
              const zoom = swiper.zoom;
              if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
              if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
              }
              image.isTouched = false;
              image.isMoved = false;
              let momentumDurationX = 300;
              let momentumDurationY = 300;
              const momentumDistanceX = velocity.x * momentumDurationX;
              const newPositionX = image.currentX + momentumDistanceX;
              const momentumDistanceY = velocity.y * momentumDurationY;
              const newPositionY = image.currentY + momentumDistanceY; // Fix duration

              if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
              if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
              const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
              image.currentX = newPositionX;
              image.currentY = newPositionY; // Define if we need image drag

              const scaledWidth = image.width * zoom.scale;
              const scaledHeight = image.height * zoom.scale;
              image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
              image.maxX = -image.minX;
              image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
              image.maxY = -image.minY;
              image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
              image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
              gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            }
            function onTransitionEnd() {
              const zoom = swiper.zoom;
              if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                if (gesture.$imageEl) {
                  gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                }
                if (gesture.$imageWrapEl) {
                  gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                }
                zoom.scale = 1;
                currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
              }
            }
            function zoomIn(e) {
              const zoom = swiper.zoom;
              const params = swiper.params.zoom;
              if (!gesture.$slideEl) {
                if (e && e.target) {
                  gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
                }
                if (!gesture.$slideEl) {
                  if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                  } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                  }
                }
                gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
              }
              if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
              if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.touchAction = 'none';
              }
              gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
              let touchX;
              let touchY;
              let offsetX;
              let offsetY;
              let diffX;
              let diffY;
              let translateX;
              let translateY;
              let imageWidth;
              let imageHeight;
              let scaledWidth;
              let scaledHeight;
              let translateMinX;
              let translateMinY;
              let translateMaxX;
              let translateMaxY;
              let slideWidth;
              let slideHeight;
              if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
              } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
              }
              zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
              currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
              if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left + window.scrollX;
                offsetY = gesture.$slideEl.offset().top + window.scrollY;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) {
                  translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                  translateX = translateMaxX;
                }
                if (translateY < translateMinY) {
                  translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                  translateY = translateMaxY;
                }
              } else {
                translateX = 0;
                translateY = 0;
              }
              gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
              gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            }
            function zoomOut() {
              const zoom = swiper.zoom;
              const params = swiper.params.zoom;
              if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                  gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                } else {
                  gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }
                gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
              }
              if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
              if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.style.touchAction = '';
              }
              zoom.scale = 1;
              currentScale = 1;
              gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
              gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
              gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
              gesture.$slideEl = undefined;
            } // Toggle Zoom

            function zoomToggle(e) {
              const zoom = swiper.zoom;
              if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoomOut();
              } else {
                // Zoom In
                zoomIn(e);
              }
            }
            function getListeners() {
              const support = swiper.support;
              const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              const activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
              } : true;
              return {
                passiveListener,
                activeListenerWithCapture
              };
            }
            function getSlideSelector() {
              return `.${swiper.params.slideClass}`;
            }
            function toggleGestures(method) {
              const {
                passiveListener
              } = getListeners();
              const slideSelector = getSlideSelector();
              swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
              swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
              swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
            }
            function enableGestures() {
              if (gesturesEnabled) return;
              gesturesEnabled = true;
              toggleGestures('on');
            }
            function disableGestures() {
              if (!gesturesEnabled) return;
              gesturesEnabled = false;
              toggleGestures('off');
            } // Attach/Detach Events

            function enable() {
              const zoom = swiper.zoom;
              if (zoom.enabled) return;
              zoom.enabled = true;
              const support = swiper.support;
              const {
                passiveListener,
                activeListenerWithCapture
              } = getListeners();
              const slideSelector = getSlideSelector(); // Scale image

              if (support.gestures) {
                swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
              } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                if (swiper.touchEvents.cancel) {
                  swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                }
              } // Move image

              swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
            }
            function disable() {
              const zoom = swiper.zoom;
              if (!zoom.enabled) return;
              const support = swiper.support;
              zoom.enabled = false;
              const {
                passiveListener,
                activeListenerWithCapture
              } = getListeners();
              const slideSelector = getSlideSelector(); // Scale image

              if (support.gestures) {
                swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
              } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                if (swiper.touchEvents.cancel) {
                  swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                }
              } // Move image

              swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
            }
            on('init', () => {
              if (swiper.params.zoom.enabled) {
                enable();
              }
            });
            on('destroy', () => {
              disable();
            });
            on('touchStart', (_s, e) => {
              if (!swiper.zoom.enabled) return;
              onTouchStart(e);
            });
            on('touchEnd', (_s, e) => {
              if (!swiper.zoom.enabled) return;
              onTouchEnd();
            });
            on('doubleTap', (_s, e) => {
              if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                zoomToggle(e);
              }
            });
            on('transitionEnd', () => {
              if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                onTransitionEnd();
              }
            });
            on('slideChange', () => {
              if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                onTransitionEnd();
              }
            });
            Object.assign(swiper.zoom, {
              enable,
              disable,
              in: zoomIn,
              out: zoomOut,
              toggle: zoomToggle
            });
          }
          function Lazy(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            extendParams({
              lazy: {
                checkInView: false,
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                scrollingElement: '',
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader'
              }
            });
            swiper.lazy = {};
            let scrollHandlerAttached = false;
            let initialImageLoaded = false;
            function loadInSlide(index, loadInDuplicate) {
              if (loadInDuplicate === void 0) {
                loadInDuplicate = true;
              }
              const params = swiper.params.lazy;
              if (typeof index === 'undefined') return;
              if (swiper.slides.length === 0) return;
              const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
              const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
              const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
              if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images.push($slideEl[0]);
              }
              if ($images.length === 0) return;
              $images.each(imageEl => {
                const $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                const background = $imageEl.attr('data-background');
                const src = $imageEl.attr('data-src');
                const srcset = $imageEl.attr('data-srcset');
                const sizes = $imageEl.attr('data-sizes');
                const $pictureEl = $imageEl.parent('picture');
                swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
                  if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                  if (background) {
                    $imageEl.css('background-image', `url("${background}")`);
                    $imageEl.removeAttr('data-background');
                  } else {
                    if (srcset) {
                      $imageEl.attr('srcset', srcset);
                      $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                      $imageEl.attr('sizes', sizes);
                      $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) {
                      $pictureEl.children('source').each(sourceEl => {
                        const $source = $(sourceEl);
                        if ($source.attr('data-srcset')) {
                          $source.attr('srcset', $source.attr('data-srcset'));
                          $source.removeAttr('data-srcset');
                        }
                      });
                    }
                    if (src) {
                      $imageEl.attr('src', src);
                      $imageEl.removeAttr('data-src');
                    }
                  }
                  $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                  $slideEl.find(`.${params.preloaderClass}`).remove();
                  if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                      const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                      loadInSlide(originalSlide.index(), false);
                    } else {
                      const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                      loadInSlide(duplicatedSlide.index(), false);
                    }
                  }
                  emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                  if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                  }
                });
                emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
              });
            }
            function load() {
              const {
                $wrapperEl,
                params: swiperParams,
                slides,
                activeIndex
              } = swiper;
              const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
              const params = swiperParams.lazy;
              let slidesPerView = swiperParams.slidesPerView;
              if (slidesPerView === 'auto') {
                slidesPerView = 0;
              }
              function slideExist(index) {
                if (isVirtual) {
                  if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
                    return true;
                  }
                } else if (slides[index]) return true;
                return false;
              }
              function slideIndex(slideEl) {
                if (isVirtual) {
                  return $(slideEl).attr('data-swiper-slide-index');
                }
                return $(slideEl).index();
              }
              if (!initialImageLoaded) initialImageLoaded = true;
              if (swiper.params.watchSlidesProgress) {
                $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
                  const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                  loadInSlide(index);
                });
              } else if (slidesPerView > 1) {
                for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                  if (slideExist(i)) loadInSlide(i);
                }
              } else {
                loadInSlide(activeIndex);
              }
              if (params.loadPrevNext) {
                if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                  const amount = params.loadPrevNextAmount;
                  const spv = slidesPerView;
                  const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                  const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

                  for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
                    if (slideExist(i)) loadInSlide(i);
                  } // Prev Slides

                  for (let i = minIndex; i < activeIndex; i += 1) {
                    if (slideExist(i)) loadInSlide(i);
                  }
                } else {
                  const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                  if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                  const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                  if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                }
              }
            }
            function checkInViewOnLoad() {
              const window = getWindow();
              if (!swiper || swiper.destroyed) return;
              const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
              const isWindow = $scrollElement[0] === window;
              const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
              const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
              const swiperOffset = swiper.$el.offset();
              const {
                rtlTranslate: rtl
              } = swiper;
              let inView = false;
              if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
              const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
              for (let i = 0; i < swiperCoord.length; i += 1) {
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                  if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                  inView = true;
                }
              }
              const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
              } : false;
              if (inView) {
                load();
                $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
              } else if (!scrollHandlerAttached) {
                scrollHandlerAttached = true;
                $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
              }
            }
            on('beforeInit', () => {
              if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                swiper.params.preloadImages = false;
              }
            });
            on('init', () => {
              if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.checkInView) {
                  checkInViewOnLoad();
                } else {
                  load();
                }
              }
            });
            on('scroll', () => {
              if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
                load();
              }
            });
            on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
              if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.checkInView) {
                  checkInViewOnLoad();
                } else {
                  load();
                }
              }
            });
            on('transitionStart', () => {
              if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                  if (swiper.params.lazy.checkInView) {
                    checkInViewOnLoad();
                  } else {
                    load();
                  }
                }
              }
            });
            on('transitionEnd', () => {
              if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                if (swiper.params.lazy.checkInView) {
                  checkInViewOnLoad();
                } else {
                  load();
                }
              }
            });
            on('slideChange', () => {
              const {
                lazy,
                cssMode,
                watchSlidesProgress,
                touchReleaseOnEdges,
                resistanceRatio
              } = swiper.params;
              if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
                load();
              }
            });
            Object.assign(swiper.lazy, {
              load,
              loadInSlide
            });
          }

          /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
          function Controller(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'
              }
            });

            swiper.controller = {
              control: undefined
            };
            function LinearSpline(x, y) {
              const binarySearch = function search() {
                let maxIndex;
                let minIndex;
                let guess;
                return (array, val) => {
                  minIndex = -1;
                  maxIndex = array.length;
                  while (maxIndex - minIndex > 1) {
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) {
                      minIndex = guess;
                    } else {
                      maxIndex = guess;
                    }
                  }
                  return maxIndex;
                };
              }();
              this.x = x;
              this.y = y;
              this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
              // (x1,y1) is the known point before given value,
              // (x3,y3) is the known point after given value.

              let i1;
              let i3;
              this.interpolate = function interpolate(x2) {
                if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
              };
              return this;
            } // xxx: for now i will just save one spline function to to

            function getInterpolateFunction(c) {
              if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
              }
            }
            function setTranslate(_t, byController) {
              const controlled = swiper.controller.control;
              let multiplier;
              let controlledTranslate;
              const Swiper = swiper.constructor;
              function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                  getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                  // but it did not work out

                  controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                  multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                  controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }
                if (swiper.params.controller.inverse) {
                  controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
              }
              if (Array.isArray(controlled)) {
                for (let i = 0; i < controlled.length; i += 1) {
                  if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                    setControlledTranslate(controlled[i]);
                  }
                }
              } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
              }
            }
            function setTransition(duration, byController) {
              const Swiper = swiper.constructor;
              const controlled = swiper.controller.control;
              let i;
              function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                  c.transitionStart();
                  if (c.params.autoHeight) {
                    nextTick(() => {
                      c.updateAutoHeight();
                    });
                  }
                  c.$wrapperEl.transitionEnd(() => {
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === 'slide') {
                      c.loopFix();
                    }
                    c.transitionEnd();
                  });
                }
              }
              if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                  if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                    setControlledTransition(controlled[i]);
                  }
                }
              } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
              }
            }
            function removeSpline() {
              if (!swiper.controller.control) return;
              if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
              }
            }
            on('beforeInit', () => {
              swiper.controller.control = swiper.params.controller.control;
            });
            on('update', () => {
              removeSpline();
            });
            on('resize', () => {
              removeSpline();
            });
            on('observerUpdate', () => {
              removeSpline();
            });
            on('setTranslate', (_s, translate, byController) => {
              if (!swiper.controller.control) return;
              swiper.controller.setTranslate(translate, byController);
            });
            on('setTransition', (_s, duration, byController) => {
              if (!swiper.controller.control) return;
              swiper.controller.setTransition(duration, byController);
            });
            Object.assign(swiper.controller, {
              setTranslate,
              setTransition
            });
          }
          function A11y(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group'
              }
            });
            let liveRegion = null;
            function notify(message) {
              const notification = liveRegion;
              if (notification.length === 0) return;
              notification.html('');
              notification.html(message);
            }
            function getRandomNumber(size) {
              if (size === void 0) {
                size = 16;
              }
              const randomChar = () => Math.round(16 * Math.random()).toString(16);
              return 'x'.repeat(size).replace(/x/g, randomChar);
            }
            function makeElFocusable($el) {
              $el.attr('tabIndex', '0');
            }
            function makeElNotFocusable($el) {
              $el.attr('tabIndex', '-1');
            }
            function addElRole($el, role) {
              $el.attr('role', role);
            }
            function addElRoleDescription($el, description) {
              $el.attr('aria-roledescription', description);
            }
            function addElControls($el, controls) {
              $el.attr('aria-controls', controls);
            }
            function addElLabel($el, label) {
              $el.attr('aria-label', label);
            }
            function addElId($el, id) {
              $el.attr('id', id);
            }
            function addElLive($el, live) {
              $el.attr('aria-live', live);
            }
            function disableEl($el) {
              $el.attr('aria-disabled', true);
            }
            function enableEl($el) {
              $el.attr('aria-disabled', false);
            }
            function onEnterOrSpaceKey(e) {
              if (e.keyCode !== 13 && e.keyCode !== 32) return;
              const params = swiper.params.a11y;
              const $targetEl = $(e.target);
              if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                  swiper.slideNext();
                }
                if (swiper.isEnd) {
                  notify(params.lastSlideMessage);
                } else {
                  notify(params.nextSlideMessage);
                }
              }
              if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                  swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                  notify(params.firstSlideMessage);
                } else {
                  notify(params.prevSlideMessage);
                }
              }
              if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
                $targetEl[0].click();
              }
            }
            function updateNavigation() {
              if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
              const {
                $nextEl,
                $prevEl
              } = swiper.navigation;
              if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                  disableEl($prevEl);
                  makeElNotFocusable($prevEl);
                } else {
                  enableEl($prevEl);
                  makeElFocusable($prevEl);
                }
              }
              if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                  disableEl($nextEl);
                  makeElNotFocusable($nextEl);
                } else {
                  enableEl($nextEl);
                  makeElFocusable($nextEl);
                }
              }
            }
            function hasPagination() {
              return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
            }
            function hasClickablePagination() {
              return hasPagination() && swiper.params.pagination.clickable;
            }
            function updatePagination() {
              const params = swiper.params.a11y;
              if (!hasPagination()) return;
              swiper.pagination.bullets.each(bulletEl => {
                const $bulletEl = $(bulletEl);
                if (swiper.params.pagination.clickable) {
                  makeElFocusable($bulletEl);
                  if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, 'button');
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                  }
                }
                if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
                  $bulletEl.attr('aria-current', 'true');
                } else {
                  $bulletEl.removeAttr('aria-current');
                }
              });
            }
            const initNavEl = ($el, wrapperId, message) => {
              makeElFocusable($el);
              if ($el[0].tagName !== 'BUTTON') {
                addElRole($el, 'button');
                $el.on('keydown', onEnterOrSpaceKey);
              }
              addElLabel($el, message);
              addElControls($el, wrapperId);
            };
            const handleFocus = e => {
              const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
              if (!slideEl || !swiper.slides.includes(slideEl)) return;
              const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
              const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
              if (isActive || isVisible) return;
              swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
            };
            function init() {
              const params = swiper.params.a11y;
              swiper.$el.append(liveRegion); // Container

              const $containerEl = swiper.$el;
              if (params.containerRoleDescriptionMessage) {
                addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
              }
              if (params.containerMessage) {
                addElLabel($containerEl, params.containerMessage);
              } // Wrapper

              const $wrapperEl = swiper.$wrapperEl;
              const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
              const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
              addElId($wrapperEl, wrapperId);
              addElLive($wrapperEl, live); // Slide

              if (params.itemRoleDescriptionMessage) {
                addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
              }
              addElRole($(swiper.slides), params.slideRole);
              const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
              swiper.slides.each((slideEl, index) => {
                const $slideEl = $(slideEl);
                const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
                const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                addElLabel($slideEl, ariaLabelMessage);
              }); // Navigation

              let $nextEl;
              let $prevEl;
              if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
              }
              if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
              }
              if ($nextEl && $nextEl.length) {
                initNavEl($nextEl, wrapperId, params.nextSlideMessage);
              }
              if ($prevEl && $prevEl.length) {
                initNavEl($prevEl, wrapperId, params.prevSlideMessage);
              } // Pagination

              if (hasClickablePagination()) {
                swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
              } // Tab focus

              swiper.$el.on('focus', handleFocus, true);
            }
            function destroy() {
              if (liveRegion && liveRegion.length > 0) liveRegion.remove();
              let $nextEl;
              let $prevEl;
              if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
              }
              if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
              }
              if ($nextEl) {
                $nextEl.off('keydown', onEnterOrSpaceKey);
              }
              if ($prevEl) {
                $prevEl.off('keydown', onEnterOrSpaceKey);
              } // Pagination

              if (hasClickablePagination()) {
                swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
              } // Tab focus

              swiper.$el.off('focus', handleFocus, true);
            }
            on('beforeInit', () => {
              liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            });
            on('afterInit', () => {
              if (!swiper.params.a11y.enabled) return;
              init();
            });
            on('fromEdge toEdge afterInit lock unlock', () => {
              if (!swiper.params.a11y.enabled) return;
              updateNavigation();
            });
            on('paginationUpdate', () => {
              if (!swiper.params.a11y.enabled) return;
              updatePagination();
            });
            on('destroy', () => {
              if (!swiper.params.a11y.enabled) return;
              destroy();
            });
          }
          function History(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              history: {
                enabled: false,
                root: '',
                replaceState: false,
                key: 'slides'
              }
            });
            let initialized = false;
            let paths = {};
            const slugify = text => {
              return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
            };
            const getPathValues = urlOverride => {
              const window = getWindow();
              let location;
              if (urlOverride) {
                location = new URL(urlOverride);
              } else {
                location = window.location;
              }
              const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
              const total = pathArray.length;
              const key = pathArray[total - 2];
              const value = pathArray[total - 1];
              return {
                key,
                value
              };
            };
            const setHistory = (key, index) => {
              const window = getWindow();
              if (!initialized || !swiper.params.history.enabled) return;
              let location;
              if (swiper.params.url) {
                location = new URL(swiper.params.url);
              } else {
                location = window.location;
              }
              const slide = swiper.slides.eq(index);
              let value = slugify(slide.attr('data-history'));
              if (swiper.params.history.root.length > 0) {
                let root = swiper.params.history.root;
                if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                value = `${root}/${key}/${value}`;
              } else if (!location.pathname.includes(key)) {
                value = `${key}/${value}`;
              }
              const currentState = window.history.state;
              if (currentState && currentState.value === value) {
                return;
              }
              if (swiper.params.history.replaceState) {
                window.history.replaceState({
                  value
                }, null, value);
              } else {
                window.history.pushState({
                  value
                }, null, value);
              }
            };
            const scrollToSlide = (speed, value, runCallbacks) => {
              if (value) {
                for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                  const slide = swiper.slides.eq(i);
                  const slideHistory = slugify(slide.attr('data-history'));
                  if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, runCallbacks);
                  }
                }
              } else {
                swiper.slideTo(0, speed, runCallbacks);
              }
            };
            const setHistoryPopState = () => {
              paths = getPathValues(swiper.params.url);
              scrollToSlide(swiper.params.speed, swiper.paths.value, false);
            };
            const init = () => {
              const window = getWindow();
              if (!swiper.params.history) return;
              if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
              }
              initialized = true;
              paths = getPathValues(swiper.params.url);
              if (!paths.key && !paths.value) return;
              scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
              if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', setHistoryPopState);
              }
            };
            const destroy = () => {
              const window = getWindow();
              if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', setHistoryPopState);
              }
            };
            on('init', () => {
              if (swiper.params.history.enabled) {
                init();
              }
            });
            on('destroy', () => {
              if (swiper.params.history.enabled) {
                destroy();
              }
            });
            on('transitionEnd _freeModeNoMomentumRelease', () => {
              if (initialized) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
              }
            });
            on('slideChange', () => {
              if (initialized && swiper.params.cssMode) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
              }
            });
          }
          function HashNavigation(_ref) {
            let {
              swiper,
              extendParams,
              emit,
              on
            } = _ref;
            let initialized = false;
            const document = getDocument();
            const window = getWindow();
            extendParams({
              hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false
              }
            });
            const onHashChange = () => {
              emit('hashChange');
              const newHash = document.location.hash.replace('#', '');
              const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
              if (newHash !== activeSlideHash) {
                const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
                if (typeof newIndex === 'undefined') return;
                swiper.slideTo(newIndex);
              }
            };
            const setHash = () => {
              if (!initialized || !swiper.params.hashNavigation.enabled) return;
              if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
                emit('hashSet');
              } else {
                const slide = swiper.slides.eq(swiper.activeIndex);
                const hash = slide.attr('data-hash') || slide.attr('data-history');
                document.location.hash = hash || '';
                emit('hashSet');
              }
            };
            const init = () => {
              if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
              initialized = true;
              const hash = document.location.hash.replace('#', '');
              if (hash) {
                const speed = 0;
                for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                  const slide = swiper.slides.eq(i);
                  const slideHash = slide.attr('data-hash') || slide.attr('data-history');
                  if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                  }
                }
              }
              if (swiper.params.hashNavigation.watchState) {
                $(window).on('hashchange', onHashChange);
              }
            };
            const destroy = () => {
              if (swiper.params.hashNavigation.watchState) {
                $(window).off('hashchange', onHashChange);
              }
            };
            on('init', () => {
              if (swiper.params.hashNavigation.enabled) {
                init();
              }
            });
            on('destroy', () => {
              if (swiper.params.hashNavigation.enabled) {
                destroy();
              }
            });
            on('transitionEnd _freeModeNoMomentumRelease', () => {
              if (initialized) {
                setHash();
              }
            });
            on('slideChange', () => {
              if (initialized && swiper.params.cssMode) {
                setHash();
              }
            });
          }

          /* eslint no-underscore-dangle: "off" */
          function Autoplay(_ref) {
            let {
              swiper,
              extendParams,
              on,
              emit
            } = _ref;
            let timeout;
            swiper.autoplay = {
              running: false,
              paused: false
            };
            extendParams({
              autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
              }
            });
            function run() {
              const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
              let delay = swiper.params.autoplay.delay;
              if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
              }
              clearTimeout(timeout);
              timeout = nextTick(() => {
                let autoplayResult;
                if (swiper.params.autoplay.reverseDirection) {
                  if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                  } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                  } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit('autoplay');
                  } else {
                    stop();
                  }
                } else if (swiper.params.loop) {
                  swiper.loopFix();
                  autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                  emit('autoplay');
                } else if (!swiper.isEnd) {
                  autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                  emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                  autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                  emit('autoplay');
                } else {
                  stop();
                }
                if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
                  run();
                }
              }, delay);
            }
            function start() {
              if (typeof timeout !== 'undefined') return false;
              if (swiper.autoplay.running) return false;
              swiper.autoplay.running = true;
              emit('autoplayStart');
              run();
              return true;
            }
            function stop() {
              if (!swiper.autoplay.running) return false;
              if (typeof timeout === 'undefined') return false;
              if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
              }
              swiper.autoplay.running = false;
              emit('autoplayStop');
              return true;
            }
            function pause(speed) {
              if (!swiper.autoplay.running) return;
              if (swiper.autoplay.paused) return;
              if (timeout) clearTimeout(timeout);
              swiper.autoplay.paused = true;
              if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                run();
              } else {
                ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                  swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                });
              }
            }
            function onVisibilityChange() {
              const document = getDocument();
              if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                pause();
              }
              if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                run();
                swiper.autoplay.paused = false;
              }
            }
            function onTransitionEnd(e) {
              if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
              if (e.target !== swiper.$wrapperEl[0]) return;
              ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
              });
              swiper.autoplay.paused = false;
              if (!swiper.autoplay.running) {
                stop();
              } else {
                run();
              }
            }
            function onMouseEnter() {
              if (swiper.params.autoplay.disableOnInteraction) {
                stop();
              } else {
                emit('autoplayPause');
                pause();
              }
              ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
              });
            }
            function onMouseLeave() {
              if (swiper.params.autoplay.disableOnInteraction) {
                return;
              }
              swiper.autoplay.paused = false;
              emit('autoplayResume');
              run();
            }
            function attachMouseEvents() {
              if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.$el.on('mouseenter', onMouseEnter);
                swiper.$el.on('mouseleave', onMouseLeave);
              }
            }
            function detachMouseEvents() {
              swiper.$el.off('mouseenter', onMouseEnter);
              swiper.$el.off('mouseleave', onMouseLeave);
            }
            on('init', () => {
              if (swiper.params.autoplay.enabled) {
                start();
                const document = getDocument();
                document.addEventListener('visibilitychange', onVisibilityChange);
                attachMouseEvents();
              }
            });
            on('beforeTransitionStart', (_s, speed, internal) => {
              if (swiper.autoplay.running) {
                if (internal || !swiper.params.autoplay.disableOnInteraction) {
                  swiper.autoplay.pause(speed);
                } else {
                  stop();
                }
              }
            });
            on('sliderFirstMove', () => {
              if (swiper.autoplay.running) {
                if (swiper.params.autoplay.disableOnInteraction) {
                  stop();
                } else {
                  pause();
                }
              }
            });
            on('touchEnd', () => {
              if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
                run();
              }
            });
            on('destroy', () => {
              detachMouseEvents();
              if (swiper.autoplay.running) {
                stop();
              }
              const document = getDocument();
              document.removeEventListener('visibilitychange', onVisibilityChange);
            });
            Object.assign(swiper.autoplay, {
              pause,
              run,
              start,
              stop
            });
          }
          function Thumb(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-thumbs'
              }
            });
            let initialized = false;
            let swiperCreated = false;
            swiper.thumbs = {
              swiper: null
            };
            function onThumbClick() {
              const thumbsSwiper = swiper.thumbs.swiper;
              if (!thumbsSwiper) return;
              const clickedIndex = thumbsSwiper.clickedIndex;
              const clickedSlide = thumbsSwiper.clickedSlide;
              if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
              if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
              let slideToIndex;
              if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
              } else {
                slideToIndex = clickedIndex;
              }
              if (swiper.params.loop) {
                let currentIndex = swiper.activeIndex;
                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                  swiper.loopFix(); // eslint-disable-next-line

                  swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                  currentIndex = swiper.activeIndex;
                }
                const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
              }
              swiper.slideTo(slideToIndex);
            }
            function init() {
              const {
                thumbs: thumbsParams
              } = swiper.params;
              if (initialized) return false;
              initialized = true;
              const SwiperClass = swiper.constructor;
              if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Object.assign(swiper.thumbs.swiper.originalParams, {
                  watchSlidesProgress: true,
                  slideToClickedSlide: false
                });
                Object.assign(swiper.thumbs.swiper.params, {
                  watchSlidesProgress: true,
                  slideToClickedSlide: false
                });
              } else if (isObject(thumbsParams.swiper)) {
                const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                Object.assign(thumbsSwiperParams, {
                  watchSlidesProgress: true,
                  slideToClickedSlide: false
                });
                swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                swiperCreated = true;
              }
              swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
              swiper.thumbs.swiper.on('tap', onThumbClick);
              return true;
            }
            function update(initial) {
              const thumbsSwiper = swiper.thumbs.swiper;
              if (!thumbsSwiper) return;
              const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
              const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
              const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
              if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                let currentThumbsIndex = thumbsSwiper.activeIndex;
                let newThumbsIndex;
                let direction;
                if (thumbsSwiper.params.loop) {
                  if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line

                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                  } // Find actual thumbs index to slide to

                  const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                  const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                  if (typeof prevThumbsIndex === 'undefined') {
                    newThumbsIndex = nextThumbsIndex;
                  } else if (typeof nextThumbsIndex === 'undefined') {
                    newThumbsIndex = prevThumbsIndex;
                  } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                    newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                  } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                    newThumbsIndex = nextThumbsIndex;
                  } else {
                    newThumbsIndex = prevThumbsIndex;
                  }
                  direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                  newThumbsIndex = swiper.realIndex;
                  direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }
                if (useOffset) {
                  newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                  if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) {
                      newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    } else {
                      newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                    }
                  } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                  thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
              } // Activate thumbs

              let thumbsToActivate = 1;
              const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
              if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
              }
              if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
              }
              thumbsToActivate = Math.floor(thumbsToActivate);
              thumbsSwiper.slides.removeClass(thumbActiveClass);
              if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                  thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
                }
              } else {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                  thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
                }
              }
            }
            on('beforeInit', () => {
              const {
                thumbs
              } = swiper.params;
              if (!thumbs || !thumbs.swiper) return;
              init();
              update(true);
            });
            on('slideChange update resize observerUpdate', () => {
              if (!swiper.thumbs.swiper) return;
              update();
            });
            on('setTransition', (_s, duration) => {
              const thumbsSwiper = swiper.thumbs.swiper;
              if (!thumbsSwiper) return;
              thumbsSwiper.setTransition(duration);
            });
            on('beforeDestroy', () => {
              const thumbsSwiper = swiper.thumbs.swiper;
              if (!thumbsSwiper) return;
              if (swiperCreated && thumbsSwiper) {
                thumbsSwiper.destroy();
              }
            });
            Object.assign(swiper.thumbs, {
              init,
              update
            });
          }
          function freeMode(_ref) {
            let {
              swiper,
              extendParams,
              emit,
              once
            } = _ref;
            extendParams({
              freeMode: {
                enabled: false,
                momentum: true,
                momentumRatio: 1,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
                minimumVelocity: 0.02
              }
            });
            function onTouchStart() {
              const translate = swiper.getTranslate();
              swiper.setTranslate(translate);
              swiper.setTransition(0);
              swiper.touchEventsData.velocities.length = 0;
              swiper.freeMode.onTouchEnd({
                currentPos: swiper.rtl ? swiper.translate : -swiper.translate
              });
            }
            function onTouchMove() {
              const {
                touchEventsData: data,
                touches
              } = swiper; // Velocity

              if (data.velocities.length === 0) {
                data.velocities.push({
                  position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                  time: data.touchStartTime
                });
              }
              data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
              });
            }
            function onTouchEnd(_ref2) {
              let {
                currentPos
              } = _ref2;
              const {
                params,
                $wrapperEl,
                rtlTranslate: rtl,
                snapGrid,
                touchEventsData: data
              } = swiper; // Time diff

              const touchEndTime = now();
              const timeDiff = touchEndTime - data.touchStartTime;
              if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
              }
              if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                  swiper.slideTo(snapGrid.length - 1);
                } else {
                  swiper.slideTo(swiper.slides.length - 1);
                }
                return;
              }
              if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                  const lastMoveEvent = data.velocities.pop();
                  const velocityEvent = data.velocities.pop();
                  const distance = lastMoveEvent.position - velocityEvent.position;
                  const time = lastMoveEvent.time - velocityEvent.time;
                  swiper.velocity = distance / time;
                  swiper.velocity /= 2;
                  if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                    swiper.velocity = 0;
                  } // this implies that the user stopped moving a finger then released.
                  // There would be no events with distance zero, so the last event is stale.

                  if (time > 150 || now() - lastMoveEvent.time > 300) {
                    swiper.velocity = 0;
                  }
                } else {
                  swiper.velocity = 0;
                }
                swiper.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let momentumDuration = 1000 * params.freeMode.momentumRatio;
                const momentumDistance = swiper.velocity * momentumDuration;
                let newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                let doBounce = false;
                let afterBouncePosition;
                const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                let needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                  if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                      newPosition = swiper.maxTranslate() - bounceAmount;
                    }
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                  } else {
                    newPosition = swiper.maxTranslate();
                  }
                  if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                  if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) {
                      newPosition = swiper.minTranslate() + bounceAmount;
                    }
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                  } else {
                    newPosition = swiper.minTranslate();
                  }
                  if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeMode.sticky) {
                  let nextSlide;
                  for (let j = 0; j < snapGrid.length; j += 1) {
                    if (snapGrid[j] > -newPosition) {
                      nextSlide = j;
                      break;
                    }
                  }
                  if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                    newPosition = snapGrid[nextSlide];
                  } else {
                    newPosition = snapGrid[nextSlide - 1];
                  }
                  newPosition = -newPosition;
                }
                if (needsLoopFix) {
                  once('transitionEnd', () => {
                    swiper.loopFix();
                  });
                } // Fix duration

                if (swiper.velocity !== 0) {
                  if (rtl) {
                    momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                  } else {
                    momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                  }
                  if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) {
                      momentumDuration = params.speed;
                    } else if (moveDistance < 2 * currentSlideSize) {
                      momentumDuration = params.speed * 1.5;
                    } else {
                      momentumDuration = params.speed * 2.5;
                    }
                  }
                } else if (params.freeMode.sticky) {
                  swiper.slideToClosest();
                  return;
                }
                if (params.freeMode.momentumBounce && doBounce) {
                  swiper.updateProgress(afterBouncePosition);
                  swiper.setTransition(momentumDuration);
                  swiper.setTranslate(newPosition);
                  swiper.transitionStart(true, swiper.swipeDirection);
                  swiper.animating = true;
                  $wrapperEl.transitionEnd(() => {
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(() => {
                      swiper.setTranslate(afterBouncePosition);
                      $wrapperEl.transitionEnd(() => {
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                      });
                    }, 0);
                  });
                } else if (swiper.velocity) {
                  emit('_freeModeNoMomentumRelease');
                  swiper.updateProgress(newPosition);
                  swiper.setTransition(momentumDuration);
                  swiper.setTranslate(newPosition);
                  swiper.transitionStart(true, swiper.swipeDirection);
                  if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(() => {
                      if (!swiper || swiper.destroyed) return;
                      swiper.transitionEnd();
                    });
                  }
                } else {
                  swiper.updateProgress(newPosition);
                }
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
              } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
              } else if (params.freeMode) {
                emit('_freeModeNoMomentumRelease');
              }
              if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
              }
            }
            Object.assign(swiper, {
              freeMode: {
                onTouchStart,
                onTouchMove,
                onTouchEnd
              }
            });
          }
          function Grid(_ref) {
            let {
              swiper,
              extendParams
            } = _ref;
            extendParams({
              grid: {
                rows: 1,
                fill: 'column'
              }
            });
            let slidesNumberEvenToRows;
            let slidesPerRow;
            let numFullColumns;
            const initSlides = slidesLength => {
              const {
                slidesPerView
              } = swiper.params;
              const {
                rows,
                fill
              } = swiper.params.grid;
              slidesPerRow = slidesNumberEvenToRows / rows;
              numFullColumns = Math.floor(slidesLength / rows);
              if (Math.floor(slidesLength / rows) === slidesLength / rows) {
                slidesNumberEvenToRows = slidesLength;
              } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
              }
              if (slidesPerView !== 'auto' && fill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
              }
            };
            const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
              const {
                slidesPerGroup,
                spaceBetween
              } = swiper.params;
              const {
                rows,
                fill
              } = swiper.params.grid; // Set slides order

              let newSlideOrderIndex;
              let column;
              let row;
              if (fill === 'row' && slidesPerGroup > 1) {
                const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                row = Math.floor(slideIndexInGroup / columnsInGroup);
                column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                slide.css({
                  '-webkit-order': newSlideOrderIndex,
                  order: newSlideOrderIndex
                });
              } else if (fill === 'column') {
                column = Math.floor(i / rows);
                row = i - column * rows;
                if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                  row += 1;
                  if (row >= rows) {
                    row = 0;
                    column += 1;
                  }
                }
              } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
              }
              slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
            };
            const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
              const {
                spaceBetween,
                centeredSlides,
                roundLengths
              } = swiper.params;
              const {
                rows
              } = swiper.params.grid;
              swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
              swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
              swiper.$wrapperEl.css({
                [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
              });
              if (centeredSlides) {
                snapGrid.splice(0, snapGrid.length);
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                  let slidesGridItem = snapGrid[i];
                  if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                  if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid.push(...newSlidesGrid);
              }
            };
            swiper.grid = {
              initSlides,
              updateSlide,
              updateWrapperSize
            };
          }
          function appendSlide(slides) {
            const swiper = this;
            const {
              $wrapperEl,
              params
            } = swiper;
            if (params.loop) {
              swiper.loopDestroy();
            }
            if (typeof slides === 'object' && 'length' in slides) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.append(slides[i]);
              }
            } else {
              $wrapperEl.append(slides);
            }
            if (params.loop) {
              swiper.loopCreate();
            }
            if (!params.observer) {
              swiper.update();
            }
          }
          function prependSlide(slides) {
            const swiper = this;
            const {
              params,
              $wrapperEl,
              activeIndex
            } = swiper;
            if (params.loop) {
              swiper.loopDestroy();
            }
            let newActiveIndex = activeIndex + 1;
            if (typeof slides === 'object' && 'length' in slides) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.prepend(slides[i]);
              }
              newActiveIndex = activeIndex + slides.length;
            } else {
              $wrapperEl.prepend(slides);
            }
            if (params.loop) {
              swiper.loopCreate();
            }
            if (!params.observer) {
              swiper.update();
            }
            swiper.slideTo(newActiveIndex, 0, false);
          }
          function addSlide(index, slides) {
            const swiper = this;
            const {
              $wrapperEl,
              params,
              activeIndex
            } = swiper;
            let activeIndexBuffer = activeIndex;
            if (params.loop) {
              activeIndexBuffer -= swiper.loopedSlides;
              swiper.loopDestroy();
              swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
            }
            const baseLength = swiper.slides.length;
            if (index <= 0) {
              swiper.prependSlide(slides);
              return;
            }
            if (index >= baseLength) {
              swiper.appendSlide(slides);
              return;
            }
            let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
            const slidesBuffer = [];
            for (let i = baseLength - 1; i >= index; i -= 1) {
              const currentSlide = swiper.slides.eq(i);
              currentSlide.remove();
              slidesBuffer.unshift(currentSlide);
            }
            if (typeof slides === 'object' && 'length' in slides) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.append(slides[i]);
              }
              newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
            } else {
              $wrapperEl.append(slides);
            }
            for (let i = 0; i < slidesBuffer.length; i += 1) {
              $wrapperEl.append(slidesBuffer[i]);
            }
            if (params.loop) {
              swiper.loopCreate();
            }
            if (!params.observer) {
              swiper.update();
            }
            if (params.loop) {
              swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
            } else {
              swiper.slideTo(newActiveIndex, 0, false);
            }
          }
          function removeSlide(slidesIndexes) {
            const swiper = this;
            const {
              params,
              $wrapperEl,
              activeIndex
            } = swiper;
            let activeIndexBuffer = activeIndex;
            if (params.loop) {
              activeIndexBuffer -= swiper.loopedSlides;
              swiper.loopDestroy();
              swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
            }
            let newActiveIndex = activeIndexBuffer;
            let indexToRemove;
            if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
              for (let i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
              }
              newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
              indexToRemove = slidesIndexes;
              if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
              if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
              newActiveIndex = Math.max(newActiveIndex, 0);
            }
            if (params.loop) {
              swiper.loopCreate();
            }
            if (!params.observer) {
              swiper.update();
            }
            if (params.loop) {
              swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
            } else {
              swiper.slideTo(newActiveIndex, 0, false);
            }
          }
          function removeAllSlides() {
            const swiper = this;
            const slidesIndexes = [];
            for (let i = 0; i < swiper.slides.length; i += 1) {
              slidesIndexes.push(i);
            }
            swiper.removeSlide(slidesIndexes);
          }
          function Manipulation(_ref) {
            let {
              swiper
            } = _ref;
            Object.assign(swiper, {
              appendSlide: appendSlide.bind(swiper),
              prependSlide: prependSlide.bind(swiper),
              addSlide: addSlide.bind(swiper),
              removeSlide: removeSlide.bind(swiper),
              removeAllSlides: removeAllSlides.bind(swiper)
            });
          }
          function effectInit(params) {
            const {
              effect,
              swiper,
              on,
              setTranslate,
              setTransition,
              overwriteParams,
              perspective
            } = params;
            on('beforeInit', () => {
              if (swiper.params.effect !== effect) return;
              swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
              if (perspective && perspective()) {
                swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
              }
              const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
              Object.assign(swiper.params, overwriteParamsResult);
              Object.assign(swiper.originalParams, overwriteParamsResult);
            });
            on('setTranslate', () => {
              if (swiper.params.effect !== effect) return;
              setTranslate();
            });
            on('setTransition', (_s, duration) => {
              if (swiper.params.effect !== effect) return;
              setTransition(duration);
            });
            let requireUpdateOnVirtual;
            on('virtualUpdate', () => {
              if (!swiper.slides.length) {
                requireUpdateOnVirtual = true;
              }
              requestAnimationFrame(() => {
                if (requireUpdateOnVirtual && swiper.slides.length) {
                  setTranslate();
                  requireUpdateOnVirtual = false;
                }
              });
            });
          }
          function effectTarget(effectParams, $slideEl) {
            if (effectParams.transformEl) {
              return $slideEl.find(effectParams.transformEl).css({
                'backface-visibility': 'hidden',
                '-webkit-backface-visibility': 'hidden'
              });
            }
            return $slideEl;
          }
          function effectVirtualTransitionEnd(_ref) {
            let {
              swiper,
              duration,
              transformEl,
              allSlides
            } = _ref;
            const {
              slides,
              activeIndex,
              $wrapperEl
            } = swiper;
            if (swiper.params.virtualTranslate && duration !== 0) {
              let eventTriggered = false;
              let $transitionEndTarget;
              if (allSlides) {
                $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
              } else {
                $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
              }
              $transitionEndTarget.transitionEnd(() => {
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                for (let i = 0; i < triggerEvents.length; i += 1) {
                  $wrapperEl.trigger(triggerEvents[i]);
                }
              });
            }
          }
          function EffectFade(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              fadeEffect: {
                crossFade: false,
                transformEl: null
              }
            });
            const setTranslate = () => {
              const {
                slides
              } = swiper;
              const params = swiper.params.fadeEffect;
              for (let i = 0; i < slides.length; i += 1) {
                const $slideEl = swiper.slides.eq(i);
                const offset = $slideEl[0].swiperSlideOffset;
                let tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                }
                const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.css({
                  opacity: slideOpacity
                }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
              }
            };
            const setTransition = duration => {
              const {
                transformEl
              } = swiper.params.fadeEffect;
              const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
              $transitionElements.transition(duration);
              effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl,
                allSlides: true
              });
            };
            effectInit({
              effect: 'fade',
              swiper,
              on,
              setTranslate,
              setTransition,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
              })
            });
          }
          function EffectCube(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
              }
            });
            const setTranslate = () => {
              const {
                $el,
                $wrapperEl,
                slides,
                width: swiperWidth,
                height: swiperHeight,
                rtlTranslate: rtl,
                size: swiperSize,
                browser
              } = swiper;
              const params = swiper.params.cubeEffect;
              const isHorizontal = swiper.isHorizontal();
              const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
              let wrapperRotate = 0;
              let $cubeShadowEl;
              if (params.shadow) {
                if (isHorizontal) {
                  $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                  if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                  }
                  $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                  });
                } else {
                  $cubeShadowEl = $el.find('.swiper-cube-shadow');
                  if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                  }
                }
              }
              for (let i = 0; i < slides.length; i += 1) {
                const $slideEl = slides.eq(i);
                let slideIndex = i;
                if (isVirtual) {
                  slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);
                if (rtl) {
                  slideAngle = -slideAngle;
                  round = Math.floor(-slideAngle / 360);
                }
                const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;
                if (slideIndex % 4 === 0) {
                  tx = -round * 4 * swiperSize;
                  tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                  tx = 0;
                  tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                  tx = swiperSize + round * 4 * swiperSize;
                  tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                  tx = -swiperSize;
                  tz = 3 * swiperSize + swiperSize * 4 * round;
                }
                if (rtl) {
                  tx = -tx;
                }
                if (!isHorizontal) {
                  ty = tx;
                  tx = 0;
                }
                const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                if (progress <= 1 && progress > -1) {
                  wrapperRotate = slideIndex * 90 + progress * 90;
                  if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }
                $slideEl.transform(transform);
                if (params.slideShadows) {
                  // Set shadows
                  let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                  let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                  if (shadowBefore.length === 0) {
                    shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                    $slideEl.append(shadowBefore);
                  }
                  if (shadowAfter.length === 0) {
                    shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                    $slideEl.append(shadowAfter);
                  }
                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
              }
              $wrapperEl.css({
                '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                'transform-origin': `50% 50% -${swiperSize / 2}px`
              });
              if (params.shadow) {
                if (isHorizontal) {
                  $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                } else {
                  const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                  const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                  const scale1 = params.shadowScale;
                  const scale2 = params.shadowScale / multiplier;
                  const offset = params.shadowOffset;
                  $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                }
              }
              const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
              $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
            };
            const setTransition = duration => {
              const {
                $el,
                slides
              } = swiper;
              slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
              }
            };
            effectInit({
              effect: 'cube',
              swiper,
              on,
              setTranslate,
              setTransition,
              perspective: () => true,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
              })
            });
          }
          function createShadow(params, $slideEl, side) {
            const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
            const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
            let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
            if (!$shadowEl.length) {
              $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
              $shadowContainer.append($shadowEl);
            }
            return $shadowEl;
          }
          function EffectFlip(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              flipEffect: {
                slideShadows: true,
                limitRotation: true,
                transformEl: null
              }
            });
            const setTranslate = () => {
              const {
                slides,
                rtlTranslate: rtl
              } = swiper;
              const params = swiper.params.flipEffect;
              for (let i = 0; i < slides.length; i += 1) {
                const $slideEl = slides.eq(i);
                let progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) {
                  progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }
                const offset = $slideEl[0].swiperSlideOffset;
                const rotate = -180 * progress;
                let rotateY = rotate;
                let rotateX = 0;
                let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                  rotateX = -rotateY;
                  rotateY = 0;
                } else if (rtl) {
                  rotateY = -rotateY;
                }
                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (params.slideShadows) {
                  // Set shadows
                  let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                  let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                  if (shadowBefore.length === 0) {
                    shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                  }
                  if (shadowAfter.length === 0) {
                    shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                  }
                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
                const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(transform);
              }
            };
            const setTransition = duration => {
              const {
                transformEl
              } = swiper.params.flipEffect;
              const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
              $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl
              });
            };
            effectInit({
              effect: 'flip',
              swiper,
              on,
              setTranslate,
              setTransition,
              perspective: () => true,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
              })
            });
          }
          function EffectCoverflow(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true,
                transformEl: null
              }
            });
            const setTranslate = () => {
              const {
                width: swiperWidth,
                height: swiperHeight,
                slides,
                slidesSizesGrid
              } = swiper;
              const params = swiper.params.coverflowEffect;
              const isHorizontal = swiper.isHorizontal();
              const transform = swiper.translate;
              const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
              const rotate = isHorizontal ? params.rotate : -params.rotate;
              const translate = params.depth; // Each slide offset from center

              for (let i = 0, length = slides.length; i < length; i += 1) {
                const $slideEl = slides.eq(i);
                const slideSize = slidesSizesGrid[i];
                const slideOffset = $slideEl[0].swiperSlideOffset;
                const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                let translateZ = -translate * Math.abs(offsetMultiplier);
                let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                  stretch = parseFloat(params.stretch) / 100 * slideSize;
                }
                let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                  // Set shadows
                  let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                  let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                  if ($shadowBeforeEl.length === 0) {
                    $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
                  }
                  if ($shadowAfterEl.length === 0) {
                    $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                  }
                  if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                  if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
              }
            };
            const setTransition = duration => {
              const {
                transformEl
              } = swiper.params.coverflowEffect;
              const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
              $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            };
            effectInit({
              effect: 'coverflow',
              swiper,
              on,
              setTranslate,
              setTransition,
              perspective: () => true,
              overwriteParams: () => ({
                watchSlidesProgress: true
              })
            });
          }
          function EffectCreative(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: false,
                progressMultiplier: 1,
                perspective: true,
                prev: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1
                },
                next: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1
                }
              }
            });
            const getTranslateValue = value => {
              if (typeof value === 'string') return value;
              return `${value}px`;
            };
            const setTranslate = () => {
              const {
                slides,
                $wrapperEl,
                slidesSizesGrid
              } = swiper;
              const params = swiper.params.creativeEffect;
              const {
                progressMultiplier: multiplier
              } = params;
              const isCenteredSlides = swiper.params.centeredSlides;
              if (isCenteredSlides) {
                const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
              }
              for (let i = 0; i < slides.length; i += 1) {
                const $slideEl = slides.eq(i);
                const slideProgress = $slideEl[0].progress;
                const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
                let originalProgress = progress;
                if (!isCenteredSlides) {
                  originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
                }
                const offset = $slideEl[0].swiperSlideOffset;
                const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
                const r = [0, 0, 0];
                let custom = false;
                if (!swiper.isHorizontal()) {
                  t[1] = t[0];
                  t[0] = 0;
                }
                let data = {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  scale: 1,
                  opacity: 1
                };
                if (progress < 0) {
                  data = params.next;
                  custom = true;
                } else if (progress > 0) {
                  data = params.prev;
                  custom = true;
                } // set translate

                t.forEach((value, index) => {
                  t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                }); // set rotates

                r.forEach((value, index) => {
                  r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                });
                $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const translateString = t.join(', ');
                const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

                if (custom && data.shadow || !custom) {
                  let $shadowEl = $slideEl.children('.swiper-slide-shadow');
                  if ($shadowEl.length === 0 && data.shadow) {
                    $shadowEl = createShadow(params, $slideEl);
                  }
                  if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                  }
                }
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(transform).css({
                  opacity: opacityString
                });
                if (data.origin) {
                  $targetEl.css('transform-origin', data.origin);
                }
              }
            };
            const setTransition = duration => {
              const {
                transformEl
              } = swiper.params.creativeEffect;
              const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
              $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
              effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl,
                allSlides: true
              });
            };
            effectInit({
              effect: 'creative',
              swiper,
              on,
              setTranslate,
              setTransition,
              perspective: () => swiper.params.creativeEffect.perspective,
              overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
              })
            });
          }
          function EffectCards(_ref) {
            let {
              swiper,
              extendParams,
              on
            } = _ref;
            extendParams({
              cardsEffect: {
                slideShadows: true,
                transformEl: null
              }
            });
            const setTranslate = () => {
              const {
                slides,
                activeIndex
              } = swiper;
              const params = swiper.params.cardsEffect;
              const {
                startTranslate,
                isTouched
              } = swiper.touchEventsData;
              const currentTranslate = swiper.translate;
              for (let i = 0; i < slides.length; i += 1) {
                const $slideEl = slides.eq(i);
                const slideProgress = $slideEl[0].progress;
                const progress = Math.min(Math.max(slideProgress, -4), 4);
                let offset = $slideEl[0].swiperSlideOffset;
                if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                  swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
                }
                if (swiper.params.centeredSlides && swiper.params.cssMode) {
                  offset -= slides[0].swiperSlideOffset;
                }
                let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let tY = 0;
                const tZ = -100 * Math.abs(progress);
                let scale = 1;
                let rotate = -2 * progress;
                let tXAdd = 8 - Math.abs(progress) * 0.75;
                const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                if (isSwipeToNext || isSwipeToPrev) {
                  const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                  rotate += -28 * progress * subProgress;
                  scale += -0.5 * subProgress;
                  tXAdd += 96 * subProgress;
                  tY = `${-25 * subProgress * Math.abs(progress)}%`;
                }
                if (progress < 0) {
                  // next
                  tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
                } else if (progress > 0) {
                  // prev
                  tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
                } else {
                  tX = `${tX}px`;
                }
                if (!swiper.isHorizontal()) {
                  const prevY = tY;
                  tY = tX;
                  tX = prevY;
                }
                const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;
                if (params.slideShadows) {
                  // Set shadows
                  let $shadowEl = $slideEl.find('.swiper-slide-shadow');
                  if ($shadowEl.length === 0) {
                    $shadowEl = createShadow(params, $slideEl);
                  }
                  if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                }
                $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const $targetEl = effectTarget(params, $slideEl);
                $targetEl.transform(transform);
              }
            };
            const setTransition = duration => {
              const {
                transformEl
              } = swiper.params.cardsEffect;
              const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
              $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
              effectVirtualTransitionEnd({
                swiper,
                duration,
                transformEl
              });
            };
            effectInit({
              effect: 'cards',
              swiper,
              on,
              setTranslate,
              setTransition,
              perspective: () => true,
              overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
              })
            });
          }

          // Swiper Class
          const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
          Swiper.use(modules);
          return Swiper;
        });
        const index_vue_vue_type_style_index_0_scoped_f0017d37_lang = '';
        const _export_sfc = exports('_', (sfc, props) => {
          const target = sfc.__vccOpts || sfc;
          for (const [key, val] of props) {
            target[key] = val;
          }
          return target;
        });
        const _withScopeId$1 = n => (pushScopeId("data-v-f0017d37"), n = n(), popScopeId(), n);
        const _hoisted_1$1 = {
          class: "container"
        };
        const _hoisted_2$1 = {
          class: "supermarket_container"
        };
        const _hoisted_3$1 = {
          class: "supermarket"
        };
        const _hoisted_4$1 = {
          class: "header"
        };
        const _hoisted_5$1 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("li", null, null, -1));
        const _hoisted_6$1 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("input", {
          type: "text"
        }, null, -1));
        const _hoisted_7$1 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("li", null, null, -1));
        const _hoisted_8$1 = {
          class: "Classify",
          style: {
            "grid-area": "Classify"
          }
        };
        const _hoisted_9$1 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("dt", null, "分类", -1));
        const _hoisted_10$1 = {
          class: "Nav",
          style: {
            "grid-area": "Nav"
          }
        };
        const _hoisted_11$1 = {
          class: "Carousel_map",
          style: {
            "grid-area": "Carousel_map"
          }
        };
        const _hoisted_12 = {
          key: 0,
          class: "swiper mySwiper"
        };
        const _hoisted_13 = {
          class: "swiper-wrapper"
        };
        const _hoisted_14 = ["src"];
        const _hoisted_15 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", {
          class: "swiper-button-next"
        }, null, -1));
        const _hoisted_16 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", {
          class: "swiper-button-prev"
        }, null, -1));
        const _hoisted_17 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", {
          class: "swiper-pagination"
        }, null, -1));
        const _hoisted_18 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", {
          class: "Login",
          style: {
            "grid-area": "Login"
          }
        }, [/*#__PURE__*/createBaseVNode("div")], -1));
        const _sfc_main$1 = {
          __name: 'index',
          setup(__props) {
            const Like = defineAsyncComponent(() => __vitePreload(() => module.import('./like-legacy-ec108808.js'), false ? "__VITE_PRELOAD__" : void 0, module.meta.url));
            let iskeep = ref(true);
            onActivated(() => {
              iskeep.value = true;
              nextTick(() => {
                new Swiper(".mySwiper", {
                  spaceBetween: 30,
                  loop: true,
                  centeredSlides: true,
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                  },
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  }
                });
              });
            });
            onDeactivated(() => {
              iskeep.value = false;
            });
            let Search_data = ["四件套", "时尚女鞋", "短裤", "半身裙", "男士外套", "行车记录仪", "新款男鞋", "耳机", "时尚女包", "沙发"];
            let Classify_data = ["女装 / 内衣 / 奢品", "女鞋 / 男鞋 / 箱包", "美妆 / 饰品 / 洗护", "男装 / 运动 / 百货", "手机 / 数码 / 企业礼品", "家装 / 电器 / 车品", "食品 / 生鲜 / 母婴", "医药 / 保健 / 进口"];
            let Grouping_data = ["天猫", "聚划算", "天猫超市", "司法拍卖", "飞猪旅行", "天天特卖", "极有家", "淘宝直播"];
            let Image_data = ["https://pic2.zhimg.com/v2-c7f0f185e5f702d993d6ec23c34ed059_r.jpg", "https://tse2-mm.cn.bing.net/th/id/OIP-C.bszCsnAt8O85l6TMRjgixAHaEo?pid=ImgDet&rs=1", "https://pica.zhimg.com/v2-d7349a14333c2b7312e83112e29ff4ef_r.jpg", "https://img.3dmgame.com/uploads/images/news/20181227/1545898284_509495.jpg", "https://img.3dmgame.com/uploads/images/news/20220323/1648017489_319800.png", "https://image.api.playstation.com/vulcan/img/rnd/202107/1418/3xIQlFWEBEUNrbSOpbUxu7Pd.png"];
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("ul", _hoisted_4$1, [_hoisted_5$1, createBaseVNode("li", null, [_hoisted_6$1, createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Search_data), (i, item) => {
                return openBlock(), createElementBlock("li", {
                  key: item
                }, toDisplayString(i), 1);
              }), 128))])]), _hoisted_7$1]), createBaseVNode("nav", null, [createBaseVNode("div", _hoisted_8$1, [createBaseVNode("dl", null, [_hoisted_9$1, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(Classify_data), (i, index) => {
                return openBlock(), createElementBlock("dd", {
                  key: index
                }, toDisplayString(i), 1);
              }), 128))])]), createBaseVNode("div", _hoisted_10$1, [createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Grouping_data), (i, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index
                }, toDisplayString(i), 1);
              }), 128))])]), createBaseVNode("div", _hoisted_11$1, [createBaseVNode("div", null, [unref(iskeep) ? (openBlock(), createElementBlock("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Image_data), (i, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "swiper-slide",
                  key: index
                }, [createBaseVNode("img", {
                  src: i,
                  loading: "lazy"
                }, null, 8, _hoisted_14)]);
              }), 128))]), _hoisted_15, _hoisted_16, _hoisted_17])) : createCommentVNode("", true)])]), _hoisted_18]), createVNode(unref(Like))])])]);
            };
          }
        };
        const Index_page = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId', "data-v-f0017d37"]]);
        const routes = [{
          path: '/',
          name: 'Root',
          component: Index_page,
          meta: {
            isKeepAlive: true
          }
        }, {
          path: '/login',
          name: 'Login',
          component: () => __vitePreload(() => module.import('./index-legacy-8051710b.js'), false ? "__VITE_PRELOAD__" : void 0, module.meta.url),
          meta: {
            StopShowLogin: true
          }
        }, {
          path: '/customer',
          name: 'Customer',
          component: () => __vitePreload(() => module.import('./index-legacy-c8162aa5.js'), false ? "__VITE_PRELOAD__" : void 0, module.meta.url)
        }];
        const router = createRouter({
          history: createWebHashHistory(),
          routes
        });
        const App_vue_vue_type_style_index_0_scoped_637ad174_lang = '';
        const _sfc_main = {};
        const _withScopeId = n => (pushScopeId("data-v-637ad174"), n = n(), popScopeId(), n);
        const _hoisted_1 = {
          class: "container"
        };
        const _hoisted_2 = {
          key: 0,
          class: "nav"
        };
        const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, "中国大陆", -1));
        const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, "手机逛淘宝", -1));
        const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, "网页无障碍", -1));
        const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, null, -1));
        const _hoisted_7 = {
          style: {
            "display": "none"
          }
        };
        const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, "商品分类免费开店", -1));
        const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, "|", -1));
        const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("li", null, "千牛卖家中心", -1));
        const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("footer", {
          class: "web_siteFooter",
          id: "web_siteFooter"
        }, null, -1));
        function _sfc_render(_ctx, _cache) {
          const _component_router_link = resolveComponent("router-link");
          const _component_router_view = resolveComponent("router-view");
          return openBlock(), createElementBlock("div", _hoisted_1, [!_ctx.$route.meta.StopShowLogin ? (openBlock(), createElementBlock("nav", _hoisted_2, [createBaseVNode("ul", null, [_hoisted_3, createBaseVNode("li", null, [createVNode(_component_router_link, {
            to: {
              name: 'Login'
            }
          }, {
            default: withCtx(() => [createTextVNode("亲，请登录")]),
            _: 1
          })]), createBaseVNode("li", null, [createVNode(_component_router_link, {
            to: {
              name: 'Login'
            }
          }, {
            default: withCtx(() => [createTextVNode("免费注册")]),
            _: 1
          })]), _hoisted_4, _hoisted_5, _hoisted_6, createBaseVNode("li", null, [createTextVNode(" 我的淘宝 "), createBaseVNode("div", _hoisted_7, [createBaseVNode("span", null, [createVNode(_component_router_link, {
            to: {
              name: 'Login'
            }
          }, {
            default: withCtx(() => [createTextVNode("已买到的宝贝")]),
            _: 1
          })]), createBaseVNode("span", null, [createVNode(_component_router_link, {
            to: {
              name: 'Login'
            }
          }, {
            default: withCtx(() => [createTextVNode("我的足迹")]),
            _: 1
          })])])]), createBaseVNode("li", null, [createVNode(_component_router_link, {
            to: {
              name: 'Login'
            }
          }, {
            default: withCtx(() => [createTextVNode("购物车")]),
            _: 1
          })]), createBaseVNode("li", null, [createVNode(_component_router_link, {
            to: {
              name: 'Login'
            }
          }, {
            default: withCtx(() => [createTextVNode("收藏夹")]),
            _: 1
          })]), _hoisted_8, _hoisted_9, _hoisted_10, createBaseVNode("li", null, [createVNode(_component_router_link, {
            to: {
              name: 'Customer'
            }
          }, {
            default: withCtx(() => [createTextVNode("联系客服")]),
            _: 1
          })])])])) : createCommentVNode("", true), createVNode(_component_router_view, null, {
            default: withCtx(({
              Component
            }) => [(openBlock(), createBlock(KeepAlive, null, [_ctx.$route.meta.isKeepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
              key: 0
            })) : createCommentVNode("", true)], 1024)), !_ctx.$route.meta.isKeepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
              key: 0
            })) : createCommentVNode("", true)]),
            _: 1
          }), _hoisted_11]);
        }
        const App = /*#__PURE__*/_export_sfc(_sfc_main, [['render', _sfc_render], ['__scopeId', "data-v-637ad174"]]);
        const __css___ = '';
        function bind(fn, thisArg) {
          return function wrap() {
            return fn.apply(thisArg, arguments);
          };
        }

        // utils is a library of generic helper functions non-specific to axios

        const {
          toString
        } = Object.prototype;
        const {
          getPrototypeOf
        } = Object;
        const kindOf = (cache => thing => {
          const str = toString.call(thing);
          return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));
        const kindOfTest = type => {
          type = type.toLowerCase();
          return thing => kindOf(thing) === type;
        };
        const typeOfTest = type => thing => typeof thing === type;

        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         *
         * @returns {boolean} True if value is an Array, otherwise false
         */
        const {
          isArray
        } = Array;

        /**
         * Determine if a value is undefined
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if the value is undefined, otherwise false
         */
        const isUndefined = typeOfTest('undefined');

        /**
         * Determine if a value is a Buffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Buffer, otherwise false
         */
        function isBuffer(val) {
          return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
        }

        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */
        const isArrayBuffer = kindOfTest('ArrayBuffer');

        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */
        function isArrayBufferView(val) {
          let result;
          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
          } else {
            result = val && val.buffer && isArrayBuffer(val.buffer);
          }
          return result;
        }

        /**
         * Determine if a value is a String
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a String, otherwise false
         */
        const isString = typeOfTest('string');

        /**
         * Determine if a value is a Function
         *
         * @param {*} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */
        const isFunction = typeOfTest('function');

        /**
         * Determine if a value is a Number
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Number, otherwise false
         */
        const isNumber = typeOfTest('number');

        /**
         * Determine if a value is an Object
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an Object, otherwise false
         */
        const isObject = thing => thing !== null && typeof thing === 'object';

        /**
         * Determine if a value is a Boolean
         *
         * @param {*} thing The value to test
         * @returns {boolean} True if value is a Boolean, otherwise false
         */
        const isBoolean = thing => thing === true || thing === false;

        /**
         * Determine if a value is a plain Object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a plain Object, otherwise false
         */
        const isPlainObject = val => {
          if (kindOf(val) !== 'object') {
            return false;
          }
          const prototype = getPrototypeOf(val);
          return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
        };

        /**
         * Determine if a value is a Date
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Date, otherwise false
         */
        const isDate = kindOfTest('Date');

        /**
         * Determine if a value is a File
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */
        const isFile = kindOfTest('File');

        /**
         * Determine if a value is a Blob
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Blob, otherwise false
         */
        const isBlob = kindOfTest('Blob');

        /**
         * Determine if a value is a FileList
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */
        const isFileList = kindOfTest('FileList');

        /**
         * Determine if a value is a Stream
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Stream, otherwise false
         */
        const isStream = val => isObject(val) && isFunction(val.pipe);

        /**
         * Determine if a value is a FormData
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an FormData, otherwise false
         */
        const isFormData = thing => {
          let kind;
          return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
          // detect form-data instance
          kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
        };

        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */
        const isURLSearchParams = kindOfTest('URLSearchParams');

        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         *
         * @returns {String} The String freed of excess whitespace
         */
        const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

        /**
         * Iterate over an Array or an Object invoking a function for each item.
         *
         * If `obj` is an Array callback will be called passing
         * the value, index, and complete array for each item.
         *
         * If 'obj' is an Object callback will be called passing
         * the value, key, and complete object for each property.
         *
         * @param {Object|Array} obj The object to iterate
         * @param {Function} fn The callback to invoke for each item
         *
         * @param {Boolean} [allOwnKeys = false]
         * @returns {any}
         */
        function forEach(obj, fn, {
          allOwnKeys = false
        } = {}) {
          // Don't bother if no value provided
          if (obj === null || typeof obj === 'undefined') {
            return;
          }
          let i;
          let l;

          // Force an array if not already something iterable
          if (typeof obj !== 'object') {
            /*eslint no-param-reassign:0*/
            obj = [obj];
          }
          if (isArray(obj)) {
            // Iterate over array values
            for (i = 0, l = obj.length; i < l; i++) {
              fn.call(null, obj[i], i, obj);
            }
          } else {
            // Iterate over object keys
            const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
              key = keys[i];
              fn.call(null, obj[key], key, obj);
            }
          }
        }
        function findKey(obj, key) {
          key = key.toLowerCase();
          const keys = Object.keys(obj);
          let i = keys.length;
          let _key;
          while (i-- > 0) {
            _key = keys[i];
            if (key === _key.toLowerCase()) {
              return _key;
            }
          }
          return null;
        }
        const _global = (() => {
          /*eslint no-undef:0*/
          if (typeof globalThis !== "undefined") return globalThis;
          return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
        })();
        const isContextDefined = context => !isUndefined(context) && context !== _global;

        /**
         * Accepts varargs expecting each argument to be an object, then
         * immutably merges the properties of each object and returns result.
         *
         * When multiple objects contain the same key the later object in
         * the arguments list will take precedence.
         *
         * Example:
         *
         * ```js
         * var result = merge({foo: 123}, {foo: 456});
         * console.log(result.foo); // outputs 456
         * ```
         *
         * @param {Object} obj1 Object to merge
         *
         * @returns {Object} Result of all merge properties
         */
        function merge( /* obj1, obj2, obj3, ... */
        ) {
          const {
            caseless
          } = isContextDefined(this) && this || {};
          const result = {};
          const assignValue = (val, key) => {
            const targetKey = caseless && findKey(result, key) || key;
            if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
              result[targetKey] = merge(result[targetKey], val);
            } else if (isPlainObject(val)) {
              result[targetKey] = merge({}, val);
            } else if (isArray(val)) {
              result[targetKey] = val.slice();
            } else {
              result[targetKey] = val;
            }
          };
          for (let i = 0, l = arguments.length; i < l; i++) {
            arguments[i] && forEach(arguments[i], assignValue);
          }
          return result;
        }

        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         *
         * @param {Boolean} [allOwnKeys]
         * @returns {Object} The resulting value of object a
         */
        const extend = (a, b, thisArg, {
          allOwnKeys
        } = {}) => {
          forEach(b, (val, key) => {
            if (thisArg && isFunction(val)) {
              a[key] = bind(val, thisArg);
            } else {
              a[key] = val;
            }
          }, {
            allOwnKeys
          });
          return a;
        };

        /**
         * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
         *
         * @param {string} content with BOM
         *
         * @returns {string} content value without BOM
         */
        const stripBOM = content => {
          if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
          }
          return content;
        };

        /**
         * Inherit the prototype methods from one constructor into another
         * @param {function} constructor
         * @param {function} superConstructor
         * @param {object} [props]
         * @param {object} [descriptors]
         *
         * @returns {void}
         */
        const inherits = (constructor, superConstructor, props, descriptors) => {
          constructor.prototype = Object.create(superConstructor.prototype, descriptors);
          constructor.prototype.constructor = constructor;
          Object.defineProperty(constructor, 'super', {
            value: superConstructor.prototype
          });
          props && Object.assign(constructor.prototype, props);
        };

        /**
         * Resolve object with deep prototype chain to a flat object
         * @param {Object} sourceObj source object
         * @param {Object} [destObj]
         * @param {Function|Boolean} [filter]
         * @param {Function} [propFilter]
         *
         * @returns {Object}
         */
        const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
          let props;
          let i;
          let prop;
          const merged = {};
          destObj = destObj || {};
          // eslint-disable-next-line no-eq-null,eqeqeq
          if (sourceObj == null) return destObj;
          do {
            props = Object.getOwnPropertyNames(sourceObj);
            i = props.length;
            while (i-- > 0) {
              prop = props[i];
              if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
              }
            }
            sourceObj = filter !== false && getPrototypeOf(sourceObj);
          } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
          return destObj;
        };

        /**
         * Determines whether a string ends with the characters of a specified string
         *
         * @param {String} str
         * @param {String} searchString
         * @param {Number} [position= 0]
         *
         * @returns {boolean}
         */
        const endsWith = (str, searchString, position) => {
          str = String(str);
          if (position === undefined || position > str.length) {
            position = str.length;
          }
          position -= searchString.length;
          const lastIndex = str.indexOf(searchString, position);
          return lastIndex !== -1 && lastIndex === position;
        };

        /**
         * Returns new array from array like object or null if failed
         *
         * @param {*} [thing]
         *
         * @returns {?Array}
         */
        const toArray = thing => {
          if (!thing) return null;
          if (isArray(thing)) return thing;
          let i = thing.length;
          if (!isNumber(i)) return null;
          const arr = new Array(i);
          while (i-- > 0) {
            arr[i] = thing[i];
          }
          return arr;
        };

        /**
         * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
         * thing passed in is an instance of Uint8Array
         *
         * @param {TypedArray}
         *
         * @returns {Array}
         */
        // eslint-disable-next-line func-names
        const isTypedArray = (TypedArray => {
          // eslint-disable-next-line func-names
          return thing => {
            return TypedArray && thing instanceof TypedArray;
          };
        })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

        /**
         * For each entry in the object, call the function with the key and value.
         *
         * @param {Object<any, any>} obj - The object to iterate over.
         * @param {Function} fn - The function to call for each entry.
         *
         * @returns {void}
         */
        const forEachEntry = (obj, fn) => {
          const generator = obj && obj[Symbol.iterator];
          const iterator = generator.call(obj);
          let result;
          while ((result = iterator.next()) && !result.done) {
            const pair = result.value;
            fn.call(obj, pair[0], pair[1]);
          }
        };

        /**
         * It takes a regular expression and a string, and returns an array of all the matches
         *
         * @param {string} regExp - The regular expression to match against.
         * @param {string} str - The string to search.
         *
         * @returns {Array<boolean>}
         */
        const matchAll = (regExp, str) => {
          let matches;
          const arr = [];
          while ((matches = regExp.exec(str)) !== null) {
            arr.push(matches);
          }
          return arr;
        };

        /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
        const isHTMLForm = kindOfTest('HTMLFormElement');
        const toCamelCase = str => {
          return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          });
        };

        /* Creating a function that will check if an object has a property. */
        const hasOwnProperty = (({
          hasOwnProperty
        }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

        /**
         * Determine if a value is a RegExp object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a RegExp object, otherwise false
         */
        const isRegExp = kindOfTest('RegExp');
        const reduceDescriptors = (obj, reducer) => {
          const descriptors = Object.getOwnPropertyDescriptors(obj);
          const reducedDescriptors = {};
          forEach(descriptors, (descriptor, name) => {
            if (reducer(descriptor, name, obj) !== false) {
              reducedDescriptors[name] = descriptor;
            }
          });
          Object.defineProperties(obj, reducedDescriptors);
        };

        /**
         * Makes all methods read-only
         * @param {Object} obj
         */

        const freezeMethods = obj => {
          reduceDescriptors(obj, (descriptor, name) => {
            // skip restricted props in strict mode
            if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
              return false;
            }
            const value = obj[name];
            if (!isFunction(value)) return;
            descriptor.enumerable = false;
            if ('writable' in descriptor) {
              descriptor.writable = false;
              return;
            }
            if (!descriptor.set) {
              descriptor.set = () => {
                throw Error('Can not rewrite read-only method \'' + name + '\'');
              };
            }
          });
        };
        const toObjectSet = (arrayOrString, delimiter) => {
          const obj = {};
          const define = arr => {
            arr.forEach(value => {
              obj[value] = true;
            });
          };
          isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
          return obj;
        };
        const noop = () => {};
        const toFiniteNumber = (value, defaultValue) => {
          value = +value;
          return Number.isFinite(value) ? value : defaultValue;
        };
        const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
        const DIGIT = '0123456789';
        const ALPHABET = {
          DIGIT,
          ALPHA,
          ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
        };
        const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
          let str = '';
          const {
            length
          } = alphabet;
          while (size--) {
            str += alphabet[Math.random() * length | 0];
          }
          return str;
        };

        /**
         * If the thing is a FormData object, return true, otherwise return false.
         *
         * @param {unknown} thing - The thing to check.
         *
         * @returns {boolean}
         */
        function isSpecCompliantForm(thing) {
          return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
        }
        const toJSONObject = obj => {
          const stack = new Array(10);
          const visit = (source, i) => {
            if (isObject(source)) {
              if (stack.indexOf(source) >= 0) {
                return;
              }
              if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key) => {
                  const reducedValue = visit(value, i + 1);
                  !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
              }
            }
            return source;
          };
          return visit(obj, 0);
        };
        const isAsyncFn = kindOfTest('AsyncFunction');
        const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
        const utils = {
          isArray,
          isArrayBuffer,
          isBuffer,
          isFormData,
          isArrayBufferView,
          isString,
          isNumber,
          isBoolean,
          isObject,
          isPlainObject,
          isUndefined,
          isDate,
          isFile,
          isBlob,
          isRegExp,
          isFunction,
          isStream,
          isURLSearchParams,
          isTypedArray,
          isFileList,
          forEach,
          merge,
          extend,
          trim,
          stripBOM,
          inherits,
          toFlatObject,
          kindOf,
          kindOfTest,
          endsWith,
          toArray,
          forEachEntry,
          matchAll,
          isHTMLForm,
          hasOwnProperty,
          hasOwnProp: hasOwnProperty,
          // an alias to avoid ESLint no-prototype-builtins detection
          reduceDescriptors,
          freezeMethods,
          toObjectSet,
          toCamelCase,
          noop,
          toFiniteNumber,
          findKey,
          global: _global,
          isContextDefined,
          ALPHABET,
          generateString,
          isSpecCompliantForm,
          toJSONObject,
          isAsyncFn,
          isThenable
        };

        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [config] The config.
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         *
         * @returns {Error} The created error.
         */
        function AxiosError(message, code, config, request, response) {
          Error.call(this);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          } else {
            this.stack = new Error().stack;
          }
          this.message = message;
          this.name = 'AxiosError';
          code && (this.code = code);
          config && (this.config = config);
          request && (this.request = request);
          response && (this.response = response);
        }
        utils.inherits(AxiosError, Error, {
          toJSON: function toJSON() {
            return {
              // Standard
              message: this.message,
              name: this.name,
              // Microsoft
              description: this.description,
              number: this.number,
              // Mozilla
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              // Axios
              config: utils.toJSONObject(this.config),
              code: this.code,
              status: this.response && this.response.status ? this.response.status : null
            };
          }
        });
        const prototype$1 = AxiosError.prototype;
        const descriptors = {};
        ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
        // eslint-disable-next-line func-names
        ].forEach(code => {
          descriptors[code] = {
            value: code
          };
        });
        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(prototype$1, 'isAxiosError', {
          value: true
        });

        // eslint-disable-next-line func-names
        AxiosError.from = (error, code, config, request, response, customProps) => {
          const axiosError = Object.create(prototype$1);
          utils.toFlatObject(error, axiosError, function filter(obj) {
            return obj !== Error.prototype;
          }, prop => {
            return prop !== 'isAxiosError';
          });
          AxiosError.call(axiosError, error.message, code, config, request, response);
          axiosError.cause = error;
          axiosError.name = error.name;
          customProps && Object.assign(axiosError, customProps);
          return axiosError;
        };

        // eslint-disable-next-line strict
        const httpAdapter = null;

        /**
         * Determines if the given thing is a array or js object.
         *
         * @param {string} thing - The object or array to be visited.
         *
         * @returns {boolean}
         */
        function isVisitable(thing) {
          return utils.isPlainObject(thing) || utils.isArray(thing);
        }

        /**
         * It removes the brackets from the end of a string
         *
         * @param {string} key - The key of the parameter.
         *
         * @returns {string} the key without the brackets.
         */
        function removeBrackets(key) {
          return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
        }

        /**
         * It takes a path, a key, and a boolean, and returns a string
         *
         * @param {string} path - The path to the current key.
         * @param {string} key - The key of the current object being iterated over.
         * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
         *
         * @returns {string} The path to the current key.
         */
        function renderKey(path, key, dots) {
          if (!path) return key;
          return path.concat(key).map(function each(token, i) {
            // eslint-disable-next-line no-param-reassign
            token = removeBrackets(token);
            return !dots && i ? '[' + token + ']' : token;
          }).join(dots ? '.' : '');
        }

        /**
         * If the array is an array and none of its elements are visitable, then it's a flat array.
         *
         * @param {Array<any>} arr - The array to check
         *
         * @returns {boolean}
         */
        function isFlatArray(arr) {
          return utils.isArray(arr) && !arr.some(isVisitable);
        }
        const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
          return /^is[A-Z]/.test(prop);
        });

        /**
         * Convert a data object to FormData
         *
         * @param {Object} obj
         * @param {?Object} [formData]
         * @param {?Object} [options]
         * @param {Function} [options.visitor]
         * @param {Boolean} [options.metaTokens = true]
         * @param {Boolean} [options.dots = false]
         * @param {?Boolean} [options.indexes = false]
         *
         * @returns {Object}
         **/

        /**
         * It converts an object into a FormData object
         *
         * @param {Object<any, any>} obj - The object to convert to form data.
         * @param {string} formData - The FormData object to append to.
         * @param {Object<string, any>} options
         *
         * @returns
         */
        function toFormData(obj, formData, options) {
          if (!utils.isObject(obj)) {
            throw new TypeError('target must be an object');
          }

          // eslint-disable-next-line no-param-reassign
          formData = formData || new FormData();

          // eslint-disable-next-line no-param-reassign
          options = utils.toFlatObject(options, {
            metaTokens: true,
            dots: false,
            indexes: false
          }, false, function defined(option, source) {
            // eslint-disable-next-line no-eq-null,eqeqeq
            return !utils.isUndefined(source[option]);
          });
          const metaTokens = options.metaTokens;
          // eslint-disable-next-line no-use-before-define
          const visitor = options.visitor || defaultVisitor;
          const dots = options.dots;
          const indexes = options.indexes;
          const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
          const useBlob = _Blob && utils.isSpecCompliantForm(formData);
          if (!utils.isFunction(visitor)) {
            throw new TypeError('visitor must be a function');
          }
          function convertValue(value) {
            if (value === null) return '';
            if (utils.isDate(value)) {
              return value.toISOString();
            }
            if (!useBlob && utils.isBlob(value)) {
              throw new AxiosError('Blob is not supported. Use a Buffer instead.');
            }
            if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
              return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
            }
            return value;
          }

          /**
           * Default visitor.
           *
           * @param {*} value
           * @param {String|Number} key
           * @param {Array<String|Number>} path
           * @this {FormData}
           *
           * @returns {boolean} return true to visit the each prop of the value recursively
           */
          function defaultVisitor(value, key, path) {
            let arr = value;
            if (value && !path && typeof value === 'object') {
              if (utils.endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
              } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                  !(utils.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
              }
            }
            if (isVisitable(value)) {
              return true;
            }
            formData.append(renderKey(path, key, dots), convertValue(value));
            return false;
          }
          const stack = [];
          const exposedHelpers = Object.assign(predicates, {
            defaultVisitor,
            convertValue,
            isVisitable
          });
          function build(value, path) {
            if (utils.isUndefined(value)) return;
            if (stack.indexOf(value) !== -1) {
              throw Error('Circular reference detected in ' + path.join('.'));
            }
            stack.push(value);
            utils.forEach(value, function each(el, key) {
              const result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
              if (result === true) {
                build(el, path ? path.concat(key) : [key]);
              }
            });
            stack.pop();
          }
          if (!utils.isObject(obj)) {
            throw new TypeError('data must be an object');
          }
          build(obj);
          return formData;
        }

        /**
         * It encodes a string by replacing all characters that are not in the unreserved set with
         * their percent-encoded equivalents
         *
         * @param {string} str - The string to encode.
         *
         * @returns {string} The encoded string.
         */
        function encode$1(str) {
          const charMap = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
          };
          return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
            return charMap[match];
          });
        }

        /**
         * It takes a params object and converts it to a FormData object
         *
         * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
         * @param {Object<string, any>} options - The options object passed to the Axios constructor.
         *
         * @returns {void}
         */
        function AxiosURLSearchParams(params, options) {
          this._pairs = [];
          params && toFormData(params, this, options);
        }
        const prototype = AxiosURLSearchParams.prototype;
        prototype.append = function append(name, value) {
          this._pairs.push([name, value]);
        };
        prototype.toString = function toString(encoder) {
          const _encode = encoder ? function (value) {
            return encoder.call(this, value, encode$1);
          } : encode$1;
          return this._pairs.map(function each(pair) {
            return _encode(pair[0]) + '=' + _encode(pair[1]);
          }, '').join('&');
        };

        /**
         * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
         * URI encoded counterparts
         *
         * @param {string} val The value to be encoded.
         *
         * @returns {string} The encoded value.
         */
        function encode(val) {
          return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        }

        /**
         * Build a URL by appending params to the end
         *
         * @param {string} url The base of the url (e.g., http://www.google.com)
         * @param {object} [params] The params to be appended
         * @param {?object} options
         *
         * @returns {string} The formatted url
         */
        function buildURL(url, params, options) {
          /*eslint no-param-reassign:0*/
          if (!params) {
            return url;
          }
          const _encode = options && options.encode || encode;
          const serializeFn = options && options.serialize;
          let serializedParams;
          if (serializeFn) {
            serializedParams = serializeFn(params, options);
          } else {
            serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
          }
          if (serializedParams) {
            const hashmarkIndex = url.indexOf("#");
            if (hashmarkIndex !== -1) {
              url = url.slice(0, hashmarkIndex);
            }
            url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
          }
          return url;
        }
        class InterceptorManager {
          constructor() {
            this.handlers = [];
          }

          /**
           * Add a new interceptor to the stack
           *
           * @param {Function} fulfilled The function to handle `then` for a `Promise`
           * @param {Function} rejected The function to handle `reject` for a `Promise`
           *
           * @return {Number} An ID used to remove interceptor later
           */
          use(fulfilled, rejected, options) {
            this.handlers.push({
              fulfilled,
              rejected,
              synchronous: options ? options.synchronous : false,
              runWhen: options ? options.runWhen : null
            });
            return this.handlers.length - 1;
          }

          /**
           * Remove an interceptor from the stack
           *
           * @param {Number} id The ID that was returned by `use`
           *
           * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
           */
          eject(id) {
            if (this.handlers[id]) {
              this.handlers[id] = null;
            }
          }

          /**
           * Clear all interceptors from the stack
           *
           * @returns {void}
           */
          clear() {
            if (this.handlers) {
              this.handlers = [];
            }
          }

          /**
           * Iterate over all the registered interceptors
           *
           * This method is particularly useful for skipping over any
           * interceptors that may have become `null` calling `eject`.
           *
           * @param {Function} fn The function to call for each interceptor
           *
           * @returns {void}
           */
          forEach(fn) {
            utils.forEach(this.handlers, function forEachHandler(h) {
              if (h !== null) {
                fn(h);
              }
            });
          }
        }
        const InterceptorManager$1 = InterceptorManager;
        const transitionalDefaults = {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        };
        const URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;
        const FormData$1 = typeof FormData !== 'undefined' ? FormData : null;
        const Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

        /**
         * Determine if we're running in a standard browser environment
         *
         * This allows axios to run in a web worker, and react-native.
         * Both environments support XMLHttpRequest, but not fully standard globals.
         *
         * web workers:
         *  typeof window -> undefined
         *  typeof document -> undefined
         *
         * react-native:
         *  navigator.product -> 'ReactNative'
         * nativescript
         *  navigator.product -> 'NativeScript' or 'NS'
         *
         * @returns {boolean}
         */
        const isStandardBrowserEnv = (() => {
          let product;
          if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
            return false;
          }
          return typeof window !== 'undefined' && typeof document !== 'undefined';
        })();

        /**
         * Determine if we're running in a standard browser webWorker environment
         *
         * Although the `isStandardBrowserEnv` method indicates that
         * `allows axios to run in a web worker`, the WebWorker will still be
         * filtered out due to its judgment standard
         * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
         * This leads to a problem when axios post `FormData` in webWorker
         */
        const isStandardBrowserWebWorkerEnv = (() => {
          return typeof WorkerGlobalScope !== 'undefined' &&
          // eslint-disable-next-line no-undef
          self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
        })();
        const platform = {
          isBrowser: true,
          classes: {
            URLSearchParams: URLSearchParams$1,
            FormData: FormData$1,
            Blob: Blob$1
          },
          isStandardBrowserEnv,
          isStandardBrowserWebWorkerEnv,
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
        };
        function toURLEncodedForm(data, options) {
          return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
            visitor: function (value, key, path, helpers) {
              if (platform.isNode && utils.isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
              }
              return helpers.defaultVisitor.apply(this, arguments);
            }
          }, options));
        }

        /**
         * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
         *
         * @param {string} name - The name of the property to get.
         *
         * @returns An array of strings.
         */
        function parsePropPath(name) {
          // foo[x][y][z]
          // foo.x.y.z
          // foo-x-y-z
          // foo x y z
          return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
            return match[0] === '[]' ? '' : match[1] || match[0];
          });
        }

        /**
         * Convert an array to an object.
         *
         * @param {Array<any>} arr - The array to convert to an object.
         *
         * @returns An object with the same keys and values as the array.
         */
        function arrayToObject(arr) {
          const obj = {};
          const keys = Object.keys(arr);
          let i;
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            obj[key] = arr[key];
          }
          return obj;
        }

        /**
         * It takes a FormData object and returns a JavaScript object
         *
         * @param {string} formData The FormData object to convert to JSON.
         *
         * @returns {Object<string, any> | null} The converted object.
         */
        function formDataToJSON(formData) {
          function buildPath(path, value, target, index) {
            let name = path[index++];
            const isNumericKey = Number.isFinite(+name);
            const isLast = index >= path.length;
            name = !name && utils.isArray(target) ? target.length : name;
            if (isLast) {
              if (utils.hasOwnProp(target, name)) {
                target[name] = [target[name], value];
              } else {
                target[name] = value;
              }
              return !isNumericKey;
            }
            if (!target[name] || !utils.isObject(target[name])) {
              target[name] = [];
            }
            const result = buildPath(path, value, target[name], index);
            if (result && utils.isArray(target[name])) {
              target[name] = arrayToObject(target[name]);
            }
            return !isNumericKey;
          }
          if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
            const obj = {};
            utils.forEachEntry(formData, (name, value) => {
              buildPath(parsePropPath(name), value, obj, 0);
            });
            return obj;
          }
          return null;
        }
        const DEFAULT_CONTENT_TYPE = {
          'Content-Type': undefined
        };

        /**
         * It takes a string, tries to parse it, and if it fails, it returns the stringified version
         * of the input
         *
         * @param {any} rawValue - The value to be stringified.
         * @param {Function} parser - A function that parses a string into a JavaScript object.
         * @param {Function} encoder - A function that takes a value and returns a string.
         *
         * @returns {string} A stringified version of the rawValue.
         */
        function stringifySafely(rawValue, parser, encoder) {
          if (utils.isString(rawValue)) {
            try {
              (parser || JSON.parse)(rawValue);
              return utils.trim(rawValue);
            } catch (e) {
              if (e.name !== 'SyntaxError') {
                throw e;
              }
            }
          }
          return (encoder || JSON.stringify)(rawValue);
        }
        const defaults = {
          transitional: transitionalDefaults,
          adapter: ['xhr', 'http'],
          transformRequest: [function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = utils.isObject(data);
            if (isObjectPayload && utils.isHTMLForm(data)) {
              data = new FormData(data);
            }
            const isFormData = utils.isFormData(data);
            if (isFormData) {
              if (!hasJSONContentType) {
                return data;
              }
              return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
            }
            if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
              return data;
            }
            if (utils.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
              headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
              return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
              if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                return toURLEncodedForm(data, this.formSerializer).toString();
              }
              if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                const _FormData = this.env && this.env.FormData;
                return toFormData(isFileList ? {
                  'files[]': data
                } : data, _FormData && new _FormData(), this.formSerializer);
              }
            }
            if (isObjectPayload || hasJSONContentType) {
              headers.setContentType('application/json', false);
              return stringifySafely(data);
            }
            return data;
          }],
          transformResponse: [function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
              const silentJSONParsing = transitional && transitional.silentJSONParsing;
              const strictJSONParsing = !silentJSONParsing && JSONRequested;
              try {
                return JSON.parse(data);
              } catch (e) {
                if (strictJSONParsing) {
                  if (e.name === 'SyntaxError') {
                    throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                  }
                  throw e;
                }
              }
            }
            return data;
          }],
          /**
           * A timeout in milliseconds to abort a request. If set to 0 (default) a
           * timeout is not created.
           */
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: platform.classes.FormData,
            Blob: platform.classes.Blob
          },
          validateStatus: function validateStatus(status) {
            return status >= 200 && status < 300;
          },
          headers: {
            common: {
              'Accept': 'application/json, text/plain, */*'
            }
          }
        };
        utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
          defaults.headers[method] = {};
        });
        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        });
        const defaults$1 = defaults;

        // RawAxiosHeaders whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers
        const ignoreDuplicateOf = utils.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

        /**
         * Parse headers into an object
         *
         * ```
         * Date: Wed, 27 Aug 2014 08:58:49 GMT
         * Content-Type: application/json
         * Connection: keep-alive
         * Transfer-Encoding: chunked
         * ```
         *
         * @param {String} rawHeaders Headers needing to be parsed
         *
         * @returns {Object} Headers parsed into an object
         */
        const parseHeaders = rawHeaders => {
          const parsed = {};
          let key;
          let val;
          let i;
          rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
            i = line.indexOf(':');
            key = line.substring(0, i).trim().toLowerCase();
            val = line.substring(i + 1).trim();
            if (!key || parsed[key] && ignoreDuplicateOf[key]) {
              return;
            }
            if (key === 'set-cookie') {
              if (parsed[key]) {
                parsed[key].push(val);
              } else {
                parsed[key] = [val];
              }
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          });
          return parsed;
        };
        const $internals = Symbol('internals');
        function normalizeHeader(header) {
          return header && String(header).trim().toLowerCase();
        }
        function normalizeValue(value) {
          if (value === false || value == null) {
            return value;
          }
          return utils.isArray(value) ? value.map(normalizeValue) : String(value);
        }
        function parseTokens(str) {
          const tokens = Object.create(null);
          const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let match;
          while (match = tokensRE.exec(str)) {
            tokens[match[1]] = match[2];
          }
          return tokens;
        }
        const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
        function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
          if (utils.isFunction(filter)) {
            return filter.call(this, value, header);
          }
          if (isHeaderNameFilter) {
            value = header;
          }
          if (!utils.isString(value)) return;
          if (utils.isString(filter)) {
            return value.indexOf(filter) !== -1;
          }
          if (utils.isRegExp(filter)) {
            return filter.test(value);
          }
        }
        function formatHeader(header) {
          return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
            return char.toUpperCase() + str;
          });
        }
        function buildAccessors(obj, header) {
          const accessorName = utils.toCamelCase(' ' + header);
          ['get', 'set', 'has'].forEach(methodName => {
            Object.defineProperty(obj, methodName + accessorName, {
              value: function (arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
              },
              configurable: true
            });
          });
        }
        class AxiosHeaders {
          constructor(headers) {
            headers && this.set(headers);
          }
          set(header, valueOrRewrite, rewrite) {
            const self = this;
            function setHeader(_value, _header, _rewrite) {
              const lHeader = normalizeHeader(_header);
              if (!lHeader) {
                throw new Error('header name must be a non-empty string');
              }
              const key = utils.findKey(self, lHeader);
              if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
                self[key || _header] = normalizeValue(_value);
              }
            }
            const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
            if (utils.isPlainObject(header) || header instanceof this.constructor) {
              setHeaders(header, valueOrRewrite);
            } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
              setHeaders(parseHeaders(header), valueOrRewrite);
            } else {
              header != null && setHeader(valueOrRewrite, header, rewrite);
            }
            return this;
          }
          get(header, parser) {
            header = normalizeHeader(header);
            if (header) {
              const key = utils.findKey(this, header);
              if (key) {
                const value = this[key];
                if (!parser) {
                  return value;
                }
                if (parser === true) {
                  return parseTokens(value);
                }
                if (utils.isFunction(parser)) {
                  return parser.call(this, value, key);
                }
                if (utils.isRegExp(parser)) {
                  return parser.exec(value);
                }
                throw new TypeError('parser must be boolean|regexp|function');
              }
            }
          }
          has(header, matcher) {
            header = normalizeHeader(header);
            if (header) {
              const key = utils.findKey(this, header);
              return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
            }
            return false;
          }
          delete(header, matcher) {
            const self = this;
            let deleted = false;
            function deleteHeader(_header) {
              _header = normalizeHeader(_header);
              if (_header) {
                const key = utils.findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                  delete self[key];
                  deleted = true;
                }
              }
            }
            if (utils.isArray(header)) {
              header.forEach(deleteHeader);
            } else {
              deleteHeader(header);
            }
            return deleted;
          }
          clear(matcher) {
            const keys = Object.keys(this);
            let i = keys.length;
            let deleted = false;
            while (i--) {
              const key = keys[i];
              if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
              }
            }
            return deleted;
          }
          normalize(format) {
            const self = this;
            const headers = {};
            utils.forEach(this, (value, header) => {
              const key = utils.findKey(headers, header);
              if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
              }
              const normalized = format ? formatHeader(header) : String(header).trim();
              if (normalized !== header) {
                delete self[header];
              }
              self[normalized] = normalizeValue(value);
              headers[normalized] = true;
            });
            return this;
          }
          concat(...targets) {
            return this.constructor.concat(this, ...targets);
          }
          toJSON(asStrings) {
            const obj = Object.create(null);
            utils.forEach(this, (value, header) => {
              value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
            });
            return obj;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
          }
          get [Symbol.toStringTag]() {
            return 'AxiosHeaders';
          }
          static from(thing) {
            return thing instanceof this ? thing : new this(thing);
          }
          static concat(first, ...targets) {
            const computed = new this(first);
            targets.forEach(target => computed.set(target));
            return computed;
          }
          static accessor(header) {
            const internals = this[$internals] = this[$internals] = {
              accessors: {}
            };
            const accessors = internals.accessors;
            const prototype = this.prototype;
            function defineAccessor(_header) {
              const lHeader = normalizeHeader(_header);
              if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
              }
            }
            utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
            return this;
          }
        }
        AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
        utils.freezeMethods(AxiosHeaders.prototype);
        utils.freezeMethods(AxiosHeaders);
        const AxiosHeaders$1 = AxiosHeaders;

        /**
         * Transform the data for a request or a response
         *
         * @param {Array|Function} fns A single function or Array of functions
         * @param {?Object} response The response object
         *
         * @returns {*} The resulting transformed data
         */
        function transformData(fns, response) {
          const config = this || defaults$1;
          const context = response || config;
          const headers = AxiosHeaders$1.from(context.headers);
          let data = context.data;
          utils.forEach(fns, function transform(fn) {
            data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
          });
          headers.normalize();
          return data;
        }
        function isCancel(value) {
          return !!(value && value.__CANCEL__);
        }

        /**
         * A `CanceledError` is an object that is thrown when an operation is canceled.
         *
         * @param {string=} message The message.
         * @param {Object=} config The config.
         * @param {Object=} request The request.
         *
         * @returns {CanceledError} The created error.
         */
        function CanceledError(message, config, request) {
          // eslint-disable-next-line no-eq-null,eqeqeq
          AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
          this.name = 'CanceledError';
        }
        utils.inherits(CanceledError, AxiosError, {
          __CANCEL__: true
        });

        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         *
         * @returns {object} The response.
         */
        function settle(resolve, reject, response) {
          const validateStatus = response.config.validateStatus;
          if (!response.status || !validateStatus || validateStatus(response.status)) {
            resolve(response);
          } else {
            reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
          }
        }
        const cookies = platform.isStandardBrowserEnv ?
        // Standard browser envs support document.cookie
        function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              const cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push('path=' + path);
              }
              if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
              }
              if (secure === true) {
                cookie.push('secure');
              }
              document.cookie = cookie.join('; ');
            },
            read: function read(name) {
              const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        }() :
        // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null;
            },
            remove: function remove() {}
          };
        }();

        /**
         * Determines whether the specified URL is absolute
         *
         * @param {string} url The URL to test
         *
         * @returns {boolean} True if the specified URL is absolute, otherwise false
         */
        function isAbsoluteURL(url) {
          // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
          // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
          // by any combination of letters, digits, plus, period, or hyphen.
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        }

        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         *
         * @returns {string} The combined URL
         */
        function combineURLs(baseURL, relativeURL) {
          return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        }

        /**
         * Creates a new URL by combining the baseURL with the requestedURL,
         * only when the requestedURL is not already an absolute URL.
         * If the requestURL is absolute, this function returns the requestedURL untouched.
         *
         * @param {string} baseURL The base URL
         * @param {string} requestedURL Absolute or relative URL to combine
         *
         * @returns {string} The combined full path
         */
        function buildFullPath(baseURL, requestedURL) {
          if (baseURL && !isAbsoluteURL(requestedURL)) {
            return combineURLs(baseURL, requestedURL);
          }
          return requestedURL;
        }
        const isURLSameOrigin = platform.isStandardBrowserEnv ?
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement('a');
          let originURL;

          /**
          * Parse a URL to discover it's components
          *
          * @param {String} url The URL to be parsed
          * @returns {Object}
          */
          function resolveURL(url) {
            let href = url;
            if (msie) {
              // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute('href', href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);

          /**
          * Determine if a URL shares the same origin as the current location
          *
          * @param {String} requestURL The URL to test
          * @returns {boolean} True if URL shares the same origin, otherwise false
          */
          return function isURLSameOrigin(requestURL) {
            const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }() :
        // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }();
        function parseProtocol(url) {
          const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
          return match && match[1] || '';
        }

        /**
         * Calculate data maxRate
         * @param {Number} [samplesCount= 10]
         * @param {Number} [min= 1000]
         * @returns {Function}
         */
        function speedometer(samplesCount, min) {
          samplesCount = samplesCount || 10;
          const bytes = new Array(samplesCount);
          const timestamps = new Array(samplesCount);
          let head = 0;
          let tail = 0;
          let firstSampleTS;
          min = min !== undefined ? min : 1000;
          return function push(chunkLength) {
            const now = Date.now();
            const startedAt = timestamps[tail];
            if (!firstSampleTS) {
              firstSampleTS = now;
            }
            bytes[head] = chunkLength;
            timestamps[head] = now;
            let i = tail;
            let bytesCount = 0;
            while (i !== head) {
              bytesCount += bytes[i++];
              i = i % samplesCount;
            }
            head = (head + 1) % samplesCount;
            if (head === tail) {
              tail = (tail + 1) % samplesCount;
            }
            if (now - firstSampleTS < min) {
              return;
            }
            const passed = startedAt && now - startedAt;
            return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
          };
        }
        function progressEventReducer(listener, isDownloadStream) {
          let bytesNotified = 0;
          const _speedometer = speedometer(50, 250);
          return e => {
            const loaded = e.loaded;
            const total = e.lengthComputable ? e.total : undefined;
            const progressBytes = loaded - bytesNotified;
            const rate = _speedometer(progressBytes);
            const inRange = loaded <= total;
            bytesNotified = loaded;
            const data = {
              loaded,
              total,
              progress: total ? loaded / total : undefined,
              bytes: progressBytes,
              rate: rate ? rate : undefined,
              estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
              event: e
            };
            data[isDownloadStream ? 'download' : 'upload'] = true;
            listener(data);
          };
        }
        const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
        const xhrAdapter = isXHRAdapterSupported && function (config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            let requestData = config.data;
            const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
            const responseType = config.responseType;
            let onCanceled;
            function done() {
              if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
              }
              if (config.signal) {
                config.signal.removeEventListener('abort', onCanceled);
              }
            }
            if (utils.isFormData(requestData)) {
              if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
                requestHeaders.setContentType(false); // Let the browser set it
              } else {
                requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
              }
            }

            let request = new XMLHttpRequest();

            // HTTP basic authentication
            if (config.auth) {
              const username = config.auth.username || '';
              const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
              requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
            }
            const fullPath = buildFullPath(config.baseURL, config.url);
            request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

            // Set the request timeout in MS
            request.timeout = config.timeout;
            function onloadend() {
              if (!request) {
                return;
              }
              // Prepare the response
              const responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
              const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
              const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
              };
              settle(function _resolve(value) {
                resolve(value);
                done();
              }, function _reject(err) {
                reject(err);
                done();
              }, response);

              // Clean up request
              request = null;
            }
            if ('onloadend' in request) {
              // Use onloadend if available
              request.onloadend = onloadend;
            } else {
              // Listen for ready state to emulate onloadend
              request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                  return;
                }

                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                  return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
              };
            }

            // Handle browser request cancellation (as opposed to a manual cancellation)
            request.onabort = function handleAbort() {
              if (!request) {
                return;
              }
              reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

              // Clean up request
              request = null;
            };

            // Handle low level network errors
            request.onerror = function handleError() {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

              // Clean up request
              request = null;
            };

            // Handle timeout
            request.ontimeout = function handleTimeout() {
              let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
              const transitional = config.transitional || transitionalDefaults;
              if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
              }
              reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

              // Clean up request
              request = null;
            };

            // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.
            if (platform.isStandardBrowserEnv) {
              // Add xsrf header
              const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
              if (xsrfValue) {
                requestHeaders.set(config.xsrfHeaderName, xsrfValue);
              }
            }

            // Remove Content-Type if data is undefined
            requestData === undefined && requestHeaders.setContentType(null);

            // Add headers to the request
            if ('setRequestHeader' in request) {
              utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
              });
            }

            // Add withCredentials to request if needed
            if (!utils.isUndefined(config.withCredentials)) {
              request.withCredentials = !!config.withCredentials;
            }

            // Add responseType to request if needed
            if (responseType && responseType !== 'json') {
              request.responseType = config.responseType;
            }

            // Handle progress if needed
            if (typeof config.onDownloadProgress === 'function') {
              request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
            }

            // Not all browsers support upload events
            if (typeof config.onUploadProgress === 'function' && request.upload) {
              request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
            }
            if (config.cancelToken || config.signal) {
              // Handle cancellation
              // eslint-disable-next-line func-names
              onCanceled = cancel => {
                if (!request) {
                  return;
                }
                reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
                request.abort();
                request = null;
              };
              config.cancelToken && config.cancelToken.subscribe(onCanceled);
              if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
              }
            }
            const protocol = parseProtocol(fullPath);
            if (protocol && platform.protocols.indexOf(protocol) === -1) {
              reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
              return;
            }

            // Send the request
            request.send(requestData || null);
          });
        };
        const knownAdapters = {
          http: httpAdapter,
          xhr: xhrAdapter
        };
        utils.forEach(knownAdapters, (fn, value) => {
          if (fn) {
            try {
              Object.defineProperty(fn, 'name', {
                value
              });
            } catch (e) {
              // eslint-disable-next-line no-empty
            }
            Object.defineProperty(fn, 'adapterName', {
              value
            });
          }
        });
        const adapters = {
          getAdapter: adapters => {
            adapters = utils.isArray(adapters) ? adapters : [adapters];
            const {
              length
            } = adapters;
            let nameOrAdapter;
            let adapter;
            for (let i = 0; i < length; i++) {
              nameOrAdapter = adapters[i];
              if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
                break;
              }
            }
            if (!adapter) {
              if (adapter === false) {
                throw new AxiosError(`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
              }
              throw new Error(utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
            }
            if (!utils.isFunction(adapter)) {
              throw new TypeError('adapter is not a function');
            }
            return adapter;
          },
          adapters: knownAdapters
        };

        /**
         * Throws a `CanceledError` if cancellation has been requested.
         *
         * @param {Object} config The config that is to be used for the request
         *
         * @returns {void}
         */
        function throwIfCancellationRequested(config) {
          if (config.cancelToken) {
            config.cancelToken.throwIfRequested();
          }
          if (config.signal && config.signal.aborted) {
            throw new CanceledError(null, config);
          }
        }

        /**
         * Dispatch a request to the server using the configured adapter.
         *
         * @param {object} config The config that is to be used for the request
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        function dispatchRequest(config) {
          throwIfCancellationRequested(config);
          config.headers = AxiosHeaders$1.from(config.headers);

          // Transform request data
          config.data = transformData.call(config, config.transformRequest);
          if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
            config.headers.setContentType('application/x-www-form-urlencoded', false);
          }
          const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
          return adapter(config).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config);

            // Transform response data
            response.data = transformData.call(config, config.transformResponse, response);
            response.headers = AxiosHeaders$1.from(response.headers);
            return response;
          }, function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config);

              // Transform response data
              if (reason && reason.response) {
                reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
              }
            }
            return Promise.reject(reason);
          });
        }
        const headersToObject = thing => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

        /**
         * Config-specific merge-function which creates a new config-object
         * by merging two configuration objects together.
         *
         * @param {Object} config1
         * @param {Object} config2
         *
         * @returns {Object} New object resulting from merging config2 to config1
         */
        function mergeConfig(config1, config2) {
          // eslint-disable-next-line no-param-reassign
          config2 = config2 || {};
          const config = {};
          function getMergedValue(target, source, caseless) {
            if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
              return utils.merge.call({
                caseless
              }, target, source);
            } else if (utils.isPlainObject(source)) {
              return utils.merge({}, source);
            } else if (utils.isArray(source)) {
              return source.slice();
            }
            return source;
          }

          // eslint-disable-next-line consistent-return
          function mergeDeepProperties(a, b, caseless) {
            if (!utils.isUndefined(b)) {
              return getMergedValue(a, b, caseless);
            } else if (!utils.isUndefined(a)) {
              return getMergedValue(undefined, a, caseless);
            }
          }

          // eslint-disable-next-line consistent-return
          function valueFromConfig2(a, b) {
            if (!utils.isUndefined(b)) {
              return getMergedValue(undefined, b);
            }
          }

          // eslint-disable-next-line consistent-return
          function defaultToConfig2(a, b) {
            if (!utils.isUndefined(b)) {
              return getMergedValue(undefined, b);
            } else if (!utils.isUndefined(a)) {
              return getMergedValue(undefined, a);
            }
          }

          // eslint-disable-next-line consistent-return
          function mergeDirectKeys(a, b, prop) {
            if (prop in config2) {
              return getMergedValue(a, b);
            } else if (prop in config1) {
              return getMergedValue(undefined, a);
            }
          }
          const mergeMap = {
            url: valueFromConfig2,
            method: valueFromConfig2,
            data: valueFromConfig2,
            baseURL: defaultToConfig2,
            transformRequest: defaultToConfig2,
            transformResponse: defaultToConfig2,
            paramsSerializer: defaultToConfig2,
            timeout: defaultToConfig2,
            timeoutMessage: defaultToConfig2,
            withCredentials: defaultToConfig2,
            adapter: defaultToConfig2,
            responseType: defaultToConfig2,
            xsrfCookieName: defaultToConfig2,
            xsrfHeaderName: defaultToConfig2,
            onUploadProgress: defaultToConfig2,
            onDownloadProgress: defaultToConfig2,
            decompress: defaultToConfig2,
            maxContentLength: defaultToConfig2,
            maxBodyLength: defaultToConfig2,
            beforeRedirect: defaultToConfig2,
            transport: defaultToConfig2,
            httpAgent: defaultToConfig2,
            httpsAgent: defaultToConfig2,
            cancelToken: defaultToConfig2,
            socketPath: defaultToConfig2,
            responseEncoding: defaultToConfig2,
            validateStatus: mergeDirectKeys,
            headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
          };
          utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
            const merge = mergeMap[prop] || mergeDeepProperties;
            const configValue = merge(config1[prop], config2[prop], prop);
            utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
          });
          return config;
        }
        const VERSION = "1.4.0";
        const validators$1 = {};

        // eslint-disable-next-line func-names
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
          validators$1[type] = function validator(thing) {
            return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
          };
        });
        const deprecatedWarnings = {};

        /**
         * Transitional option validator
         *
         * @param {function|boolean?} validator - set to false if the transitional option has been removed
         * @param {string?} version - deprecated version / removed since version
         * @param {string?} message - some message with additional info
         *
         * @returns {function}
         */
        validators$1.transitional = function transitional(validator, version, message) {
          function formatMessage(opt, desc) {
            return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
          }

          // eslint-disable-next-line func-names
          return (value, opt, opts) => {
            if (validator === false) {
              throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
            }
            if (version && !deprecatedWarnings[opt]) {
              deprecatedWarnings[opt] = true;
              // eslint-disable-next-line no-console
              console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
            }
            return validator ? validator(value, opt, opts) : true;
          };
        };

        /**
         * Assert object's properties type
         *
         * @param {object} options
         * @param {object} schema
         * @param {boolean?} allowUnknown
         *
         * @returns {object}
         */

        function assertOptions(options, schema, allowUnknown) {
          if (typeof options !== 'object') {
            throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
          }
          const keys = Object.keys(options);
          let i = keys.length;
          while (i-- > 0) {
            const opt = keys[i];
            const validator = schema[opt];
            if (validator) {
              const value = options[opt];
              const result = value === undefined || validator(value, opt, options);
              if (result !== true) {
                throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
              }
              continue;
            }
            if (allowUnknown !== true) {
              throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
            }
          }
        }
        const validator = {
          assertOptions,
          validators: validators$1
        };
        const validators = validator.validators;

        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         *
         * @return {Axios} A new instance of Axios
         */
        class Axios {
          constructor(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
              request: new InterceptorManager$1(),
              response: new InterceptorManager$1()
            };
          }

          /**
           * Dispatch a request
           *
           * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
           * @param {?Object} config
           *
           * @returns {Promise} The Promise to be fulfilled
           */
          request(configOrUrl, config) {
            /*eslint no-param-reassign:0*/
            // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof configOrUrl === 'string') {
              config = config || {};
              config.url = configOrUrl;
            } else {
              config = configOrUrl || {};
            }
            config = mergeConfig(this.defaults, config);
            const {
              transitional,
              paramsSerializer,
              headers
            } = config;
            if (transitional !== undefined) {
              validator.assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
              }, false);
            }
            if (paramsSerializer != null) {
              if (utils.isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                  serialize: paramsSerializer
                };
              } else {
                validator.assertOptions(paramsSerializer, {
                  encode: validators.function,
                  serialize: validators.function
                }, true);
              }
            }

            // Set config.method
            config.method = (config.method || this.defaults.method || 'get').toLowerCase();
            let contextHeaders;

            // Flatten headers
            contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
            contextHeaders && utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
              delete headers[method];
            });
            config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

            // filter out skipped interceptors
            const requestInterceptorChain = [];
            let synchronousRequestInterceptors = true;
            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
              if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                return;
              }
              synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
              requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
            const responseInterceptorChain = [];
            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
              responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
            });
            let promise;
            let i = 0;
            let len;
            if (!synchronousRequestInterceptors) {
              const chain = [dispatchRequest.bind(this), undefined];
              chain.unshift.apply(chain, requestInterceptorChain);
              chain.push.apply(chain, responseInterceptorChain);
              len = chain.length;
              promise = Promise.resolve(config);
              while (i < len) {
                promise = promise.then(chain[i++], chain[i++]);
              }
              return promise;
            }
            len = requestInterceptorChain.length;
            let newConfig = config;
            i = 0;
            while (i < len) {
              const onFulfilled = requestInterceptorChain[i++];
              const onRejected = requestInterceptorChain[i++];
              try {
                newConfig = onFulfilled(newConfig);
              } catch (error) {
                onRejected.call(this, error);
                break;
              }
            }
            try {
              promise = dispatchRequest.call(this, newConfig);
            } catch (error) {
              return Promise.reject(error);
            }
            i = 0;
            len = responseInterceptorChain.length;
            while (i < len) {
              promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
            }
            return promise;
          }
          getUri(config) {
            config = mergeConfig(this.defaults, config);
            const fullPath = buildFullPath(config.baseURL, config.url);
            return buildURL(fullPath, config.params, config.paramsSerializer);
          }
        }

        // Provide aliases for supported request methods
        utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              url,
              data: (config || {}).data
            }));
          };
        });
        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          /*eslint func-names:0*/

          function generateHTTPMethod(isForm) {
            return function httpMethod(url, data, config) {
              return this.request(mergeConfig(config || {}, {
                method,
                headers: isForm ? {
                  'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
              }));
            };
          }
          Axios.prototype[method] = generateHTTPMethod();
          Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
        });
        const Axios$1 = Axios;

        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @param {Function} executor The executor function.
         *
         * @returns {CancelToken}
         */
        class CancelToken {
          constructor(executor) {
            if (typeof executor !== 'function') {
              throw new TypeError('executor must be a function.');
            }
            let resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
              resolvePromise = resolve;
            });
            const token = this;

            // eslint-disable-next-line func-names
            this.promise.then(cancel => {
              if (!token._listeners) return;
              let i = token._listeners.length;
              while (i-- > 0) {
                token._listeners[i](cancel);
              }
              token._listeners = null;
            });

            // eslint-disable-next-line func-names
            this.promise.then = onfulfilled => {
              let _resolve;
              // eslint-disable-next-line func-names
              const promise = new Promise(resolve => {
                token.subscribe(resolve);
                _resolve = resolve;
              }).then(onfulfilled);
              promise.cancel = function reject() {
                token.unsubscribe(_resolve);
              };
              return promise;
            };
            executor(function cancel(message, config, request) {
              if (token.reason) {
                // Cancellation has already been requested
                return;
              }
              token.reason = new CanceledError(message, config, request);
              resolvePromise(token.reason);
            });
          }

          /**
           * Throws a `CanceledError` if cancellation has been requested.
           */
          throwIfRequested() {
            if (this.reason) {
              throw this.reason;
            }
          }

          /**
           * Subscribe to the cancel signal
           */

          subscribe(listener) {
            if (this.reason) {
              listener(this.reason);
              return;
            }
            if (this._listeners) {
              this._listeners.push(listener);
            } else {
              this._listeners = [listener];
            }
          }

          /**
           * Unsubscribe from the cancel signal
           */

          unsubscribe(listener) {
            if (!this._listeners) {
              return;
            }
            const index = this._listeners.indexOf(listener);
            if (index !== -1) {
              this._listeners.splice(index, 1);
            }
          }

          /**
           * Returns an object that contains a new `CancelToken` and a function that, when called,
           * cancels the `CancelToken`.
           */
          static source() {
            let cancel;
            const token = new CancelToken(function executor(c) {
              cancel = c;
            });
            return {
              token,
              cancel
            };
          }
        }
        const CancelToken$1 = CancelToken;

        /**
         * Syntactic sugar for invoking a function and expanding an array for arguments.
         *
         * Common use case would be to use `Function.prototype.apply`.
         *
         *  ```js
         *  function f(x, y, z) {}
         *  var args = [1, 2, 3];
         *  f.apply(null, args);
         *  ```
         *
         * With `spread` this example can be re-written.
         *
         *  ```js
         *  spread(function(x, y, z) {})([1, 2, 3]);
         *  ```
         *
         * @param {Function} callback
         *
         * @returns {Function}
         */
        function spread(callback) {
          return function wrap(arr) {
            return callback.apply(null, arr);
          };
        }

        /**
         * Determines whether the payload is an error thrown by Axios
         *
         * @param {*} payload The value to test
         *
         * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
         */
        function isAxiosError(payload) {
          return utils.isObject(payload) && payload.isAxiosError === true;
        }
        const HttpStatusCode = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511
        };
        Object.entries(HttpStatusCode).forEach(([key, value]) => {
          HttpStatusCode[value] = key;
        });
        const HttpStatusCode$1 = HttpStatusCode;

        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         *
         * @returns {Axios} A new instance of Axios
         */
        function createInstance(defaultConfig) {
          const context = new Axios$1(defaultConfig);
          const instance = bind(Axios$1.prototype.request, context);

          // Copy axios.prototype to instance
          utils.extend(instance, Axios$1.prototype, context, {
            allOwnKeys: true
          });

          // Copy context to instance
          utils.extend(instance, context, null, {
            allOwnKeys: true
          });

          // Factory for creating new instances
          instance.create = function create(instanceConfig) {
            return createInstance(mergeConfig(defaultConfig, instanceConfig));
          };
          return instance;
        }

        // Create the default instance to be exported
        const axios = createInstance(defaults$1);

        // Expose Axios class to allow class inheritance
        axios.Axios = Axios$1;

        // Expose Cancel & CancelToken
        axios.CanceledError = CanceledError;
        axios.CancelToken = CancelToken$1;
        axios.isCancel = isCancel;
        axios.VERSION = VERSION;
        axios.toFormData = toFormData;

        // Expose AxiosError class
        axios.AxiosError = AxiosError;

        // alias for CanceledError for backward compatibility
        axios.Cancel = axios.CanceledError;

        // Expose all/spread
        axios.all = function all(promises) {
          return Promise.all(promises);
        };
        axios.spread = spread;

        // Expose isAxiosError
        axios.isAxiosError = isAxiosError;

        // Expose mergeConfig
        axios.mergeConfig = mergeConfig;
        axios.AxiosHeaders = AxiosHeaders$1;
        axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
        axios.HttpStatusCode = HttpStatusCode$1;
        axios.default = axios;

        // this module should only have a default export
        const axios$1 = axios;
        const MyAxios = axios$1.create({
          method: 'get',
          // 所有的请求地址前缀部分
          timeout: 50000,
          // 请求超时时间毫秒
          headers: {
            // 设置后端需要的传参类型
            'Content-Type': 'application/json'
          }
        });

        // 添加请求拦截器
        MyAxios.interceptors.request.use(function (config) {
          config.url += "/"; //加一个 / 不然我写的难受
          return config;
        }, function (error) {
          // 对请求错误做些什么
          console.log(error);
          return Promise.reject(error);
        });

        // 添加响应拦截器
        MyAxios.interceptors.response.use(async function (response) {
          // 2xx 范围内的状态码都会触发该函数。

          const dataAxios = response.data; //只要了 data 全部内容在 response

          return dataAxios;
        }, function (error) {
          // 超出 2xx 范围的状态码都会触发该函数。
          console.log(error);
          return Promise.reject(error);
        });
        const app = createApp(App);
        app.use(router);
        app.provide('$axios', MyAxios);
        app.mount('#app');
      }
    };
  });
})();
