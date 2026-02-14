;
(function () {
  System.register(['./index-legacy-682f0385.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = ".container[data-v-2fc45b01] {\n  width: 370px;\n  height: 172px;\n  background: #f7f9fa;\n  padding: 12px;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  border-radius: 20px;\n  justify-content: center;\n  transition: all 0.4s;\n  position: relative;\n}\n.container > a[data-v-2fc45b01] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.container[data-v-2fc45b01]:hover {\n  background-color: #fff;\n  border: 1px solid #ff915e;\n  box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);\n}\n.container > img[data-v-2fc45b01] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.container > ul[data-v-2fc45b01] {\n  height: 150px;\n  padding: 10px;\n  box-sizing: border-box;\n  position: relative;\n}\n.container > ul > li[data-v-2fc45b01] {\n  font-size: 16px;\n}\n.container > ul > li[data-v-2fc45b01]:nth-of-type(1) {\n  width: 180px;\n  height: 50px;\n  overflow: hidden;\n}\n.container > ul > li[data-v-2fc45b01]:nth-of-type(2) {\n  position: absolute;\n  top: 60px;\n  border: 1px solid;\n  color: #ff5000;\n  padding: 0px 3px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.container > ul > li[data-v-2fc45b01]:nth-of-type(3) {\n  color: #ff5000;\n  position: absolute;\n  bottom: 12px;\n  font-size: 20px;\n}\n.container > ul > li[data-v-2fc45b01]:nth-of-type(3)::first-letter {\n  font-size: 14px;\n  margin-right: 3px;\n}\n";
    document.head.appendChild(__vite_style__);
    var _export_sfc, defineAsyncComponent, __vitePreload, ref, resolveComponent, openBlock, createElementBlock, createBaseVNode, createBlock, unref, createCommentVNode, toDisplayString, createVNode;
    return {
      setters: [module => {
        _export_sfc = module._;
        defineAsyncComponent = module.k;
        __vitePreload = module.l;
        ref = module.r;
        resolveComponent = module.a;
        openBlock = module.b;
        createElementBlock = module.c;
        createBaseVNode = module.d;
        createBlock = module.q;
        unref = module.u;
        createCommentVNode = module.s;
        toDisplayString = module.t;
        createVNode = module.e;
      }],
      execute: function () {
        const index_vue_vue_type_style_index_0_scoped_2fc45b01_lang = '';
        const _hoisted_1 = ["src"];
        const _sfc_main = {
          __name: 'index',
          props: {
            image_src: String
          },
          setup(__props) {
            const Loading = defineAsyncComponent(() => __vitePreload(() => module.import('./index-legacy-f580d05c.js'), false ? "__VITE_PRELOAD__" : void 0, module.meta.url));
            const loading = ref(true);
            const container = ref(null);
            const Image_load = () => {
              loading.value = false;
            };
            return (_ctx, _cache) => {
              const _component_router_link = resolveComponent("router-link");
              return openBlock(), createElementBlock("div", {
                class: "container",
                ref_key: "container",
                ref: container
              }, [createBaseVNode("img", {
                src: __props.image_src,
                loading: "lazy",
                onLoad: Image_load
              }, null, 40, _hoisted_1), loading.value ? (openBlock(), createBlock(unref(Loading), {
                key: 0
              })) : createCommentVNode("", true), createBaseVNode("ul", null, [createBaseVNode("li", null, toDisplayString(parseInt(Math.random() * 2) ? "一只不知道什么品种却在网店上的猫咪" : "一坨 猫猫猫猫猫猫猫猫猫猫猫猫猫猫"), 1), createBaseVNode("li", null, toDisplayString(["包邮到家", "3 折优惠卷", "第二只半价", "一滩猫", "618优惠", "附送全套工具"][parseInt(Math.random() * 6)]), 1), createBaseVNode("li", null, "¥" + toDisplayString(parseInt(Math.random() * 1000)), 1)]), createVNode(_component_router_link, {
                to: {
                  name: 'Login'
                }
              })], 512);
            };
          }
        };
        const index = exports('default', /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId', "data-v-2fc45b01"]]));
      }
    };
  });
})();
