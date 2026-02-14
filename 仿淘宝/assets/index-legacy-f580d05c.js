;
(function () {
  System.register(['./index-legacy-682f0385.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = ".com_box[data-v-2c1fb6ca] {\n  position: absolute;\n  left: 70px;\n}\n.loading[data-v-2c1fb6ca],\n.loading > div[data-v-2c1fb6ca] {\n  position: relative;\n  box-sizing: border-box;\n}\n.loading[data-v-2c1fb6ca] {\n  display: block;\n  font-size: 0;\n  color: #000;\n}\n.loading.la-dark[data-v-2c1fb6ca] {\n  color: #333;\n}\n.loading > div[data-v-2c1fb6ca] {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor;\n}\n.loading[data-v-2c1fb6ca] {\n  width: 32px;\n  height: 32px;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(1) {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  width: 60%;\n  height: 60%;\n  background: #aaa;\n  border-radius: 100%;\n  transform: translate(-50%, -50%);\n  animation: ball-atom-shrink 4.5s infinite linear;\n}\n.loading > div[data-v-2c1fb6ca]:not(:nth-child(1)) {\n  position: absolute;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  background: none;\n  animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);\n}\n.loading > div[data-v-2c1fb6ca]:not(:nth-child(1)):before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  margin-left: -5px;\n  content: \"\";\n  background: currentColor;\n  border-radius: 50%;\n  opacity: 0.75;\n  animation: ball-atom-position-2c1fb6ca 1.5s 0s infinite ease, ball-atom-size 1.5s 0s infinite ease;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(2) {\n  animation-delay: 0.75s;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(2):before {\n  animation-delay: 0s, -1.125s;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(3) {\n  transform: rotate(120deg);\n  animation-delay: -0.25s;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(3):before {\n  animation-delay: -1s, -0.75s;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(4) {\n  transform: rotate(240deg);\n  animation-delay: 0.25s;\n}\n.loading > div[data-v-2c1fb6ca]:nth-child(4):before {\n  animation-delay: -0.5s, -0.125s;\n}\n@keyframes ball-atom-position-2c1fb6ca {\n50% {\n    top: 100%;\n    left: 100%;\n}\n}\n";
    document.head.appendChild(__vite_style__);
    var _export_sfc, openBlock, createElementBlock, pushScopeId, popScopeId, createBaseVNode;
    return {
      setters: [module => {
        _export_sfc = module._;
        openBlock = module.b;
        createElementBlock = module.c;
        pushScopeId = module.p;
        popScopeId = module.f;
        createBaseVNode = module.d;
      }],
      execute: function () {
        const index_vue_vue_type_style_index_0_scoped_2c1fb6ca_lang = '';
        const _sfc_main = {};
        const _withScopeId = n => (pushScopeId("data-v-2c1fb6ca"), n = n(), popScopeId(), n);
        const _hoisted_1 = {
          class: "com_box"
        };
        const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("div", {
          class: "loading"
        }, [/*#__PURE__*/createBaseVNode("div"), /*#__PURE__*/createBaseVNode("div"), /*#__PURE__*/createBaseVNode("div"), /*#__PURE__*/createBaseVNode("div")], -1));
        const _hoisted_3 = [_hoisted_2];
        function _sfc_render(_ctx, _cache) {
          return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
        }
        const index = exports('default', /*#__PURE__*/_export_sfc(_sfc_main, [['render', _sfc_render], ['__scopeId', "data-v-2c1fb6ca"]]));
      }
    };
  });
})();
