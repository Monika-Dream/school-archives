import { _ as _export_sfc, r as ref, o as onMounted, a as resolveComponent, b as openBlock, c as createElementBlock, d as createBaseVNode, e as createVNode, p as pushScopeId, f as popScopeId } from "./index.41551e47.js";
const power1 = "" + new URL("\u7701\u529B0.303d558c.png", import.meta.url).href;
const power2 = "" + new URL("\u7701\u529B1.189b8fe3.png", import.meta.url).href;
const index_vue_vue_type_style_index_0_scoped_e77a3d4d_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-e77a3d4d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "background" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: power1,
  style: { "width": "1px", "aspect-ratio": "1/1", "opacity": "0", "pointer-events": "none" }
}, null, -1));
const _hoisted_4 = [
  _hoisted_3
];
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let login_rectangle = ref(null);
    const ChangeBackground = (num) => {
      num ? login_rectangle.value.style.background = `url(${power1}) no-repeat center` : login_rectangle.value.style.background = `url(${power2}) no-repeat center`;
      login_rectangle.value.style.backgroundSize = "cover";
    };
    onMounted(() => {
      ChangeBackground(1);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("nav", null, [
          createVNode(_component_router_link, { to: { name: "Root" } })
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: "login_rectangle",
            ref_key: "login_rectangle",
            ref: login_rectangle
          }, [
            createBaseVNode("button", {
              class: "password_login",
              onClick: _cache[0] || (_cache[0] = () => ChangeBackground(1))
            }),
            createBaseVNode("button", {
              class: "sms_login",
              onClick: _cache[1] || (_cache[1] = () => ChangeBackground(0))
            }, _hoisted_4)
          ], 512)
        ])
      ]);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e77a3d4d"]]);
export {
  index as default
};
