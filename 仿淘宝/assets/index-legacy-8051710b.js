;
(function () {
  System.register(['./index-legacy-682f0385.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = ".container[data-v-e77a3d4d] {\n  background: white;\n}\nnav[data-v-e77a3d4d] {\n  width: 1205px;\n  height: 88px;\n  background: url(" + new URL('登录注册头部.ae243211.png', module.meta.url).href + ") no-repeat center;\n  margin: 0 auto;\n}\nnav > a[data-v-e77a3d4d] {\n  width: 100px;\n  height: 100px;\n  display: inline-block;\n}\nnav[data-v-e77a3d4d]::after {\n  content: \"\";\n  position: absolute;\n  height: 100vh;\n  background: #ffffff;\n  left: 0;\n  right: 0;\n  z-index: -1;\n}\n.background[data-v-e77a3d4d] {\n  background-image: url(https://gw.alicdn.com/imgextra/i3/O1CN01iyYdem1GQd1yGgA0a_!!6000000000617-0-tps-2500-600.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  height: 60vh;\n}\n.background > .login_rectangle[data-v-e77a3d4d] {\n  position: relative;\n  width: 19vw;\n  padding: 25px 25px 23px;\n  right: -19vw;\n  aspect-ratio: 1/1;\n  top: 12vh;\n  background: #fff;\n  box-sizing: border-box;\n  margin: 0 auto;\n  background-color: hsla(0, 0%, 100%, 0.9);\n  transition: all 0.2s;\n}\n.background > .login_rectangle > .password_login[data-v-e77a3d4d] {\n  width: 3.6vw;\n  height: 3vh;\n  opacity: 0;\n  position: absolute;\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  left: 1.2vw;\n  top: 3.2vh;\n}\n.background > .login_rectangle > .sms_login[data-v-e77a3d4d] {\n  width: 3.6vw;\n  height: 3vh;\n  opacity: 0;\n  cursor: pointer;\n  position: absolute;\n  padding: 0;\n  border: 0;\n  left: 5.32vw;\n  top: 3.2vh;\n}\n";
    document.head.appendChild(__vite_style__);
    var _export_sfc, ref, onMounted, resolveComponent, openBlock, createElementBlock, createBaseVNode, createVNode, pushScopeId, popScopeId;
    return {
      setters: [module => {
        _export_sfc = module._;
        ref = module.r;
        onMounted = module.o;
        resolveComponent = module.a;
        openBlock = module.b;
        createElementBlock = module.c;
        createBaseVNode = module.d;
        createVNode = module.e;
        pushScopeId = module.p;
        popScopeId = module.f;
      }],
      execute: function () {
        const power1 = "" + new URL('省力0.303d558c.png', module.meta.url).href + "";
        const power2 = "" + new URL('省力1.189b8fe3.png', module.meta.url).href + "";
        const index_vue_vue_type_style_index_0_scoped_e77a3d4d_lang = '';
        const _withScopeId = n => (pushScopeId("data-v-e77a3d4d"), n = n(), popScopeId(), n);
        const _hoisted_1 = {
          class: "container"
        };
        const _hoisted_2 = {
          class: "background"
        };
        const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("img", {
          src: power1,
          style: {
            "width": "1px",
            "aspect-ratio": "1/1",
            "opacity": "0",
            "pointer-events": "none"
          }
        }, null, -1));
        const _hoisted_4 = [_hoisted_3];
        const _sfc_main = {
          __name: 'index',
          setup(__props) {
            let login_rectangle = ref(null);
            const ChangeBackground = num => {
              num ? login_rectangle.value.style.background = `url(${power1}) no-repeat center` : login_rectangle.value.style.background = `url(${power2}) no-repeat center`;
              login_rectangle.value.style.backgroundSize = "cover";
            };
            onMounted(() => {
              ChangeBackground(1);
            });
            return (_ctx, _cache) => {
              const _component_router_link = resolveComponent("router-link");
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("nav", null, [createVNode(_component_router_link, {
                to: {
                  name: 'Root'
                }
              })]), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", {
                class: "login_rectangle",
                ref_key: "login_rectangle",
                ref: login_rectangle
              }, [createBaseVNode("button", {
                class: "password_login",
                onClick: _cache[0] || (_cache[0] = () => ChangeBackground(1))
              }), createBaseVNode("button", {
                class: "sms_login",
                onClick: _cache[1] || (_cache[1] = () => ChangeBackground(0))
              }, _hoisted_4)], 512)])]);
            };
          }
        };
        const index = exports('default', /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId', "data-v-e77a3d4d"]]));
      }
    };
  });
})();
