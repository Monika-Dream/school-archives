import { _ as _export_sfc, k as defineAsyncComponent, l as __vitePreload, r as ref, a as resolveComponent, b as openBlock, c as createElementBlock, d as createBaseVNode, q as createBlock, u as unref, s as createCommentVNode, t as toDisplayString, e as createVNode } from "./index.41551e47.js";
const index_vue_vue_type_style_index_0_scoped_2fc45b01_lang = "";
const _hoisted_1 = ["src"];
const _sfc_main = {
  __name: "index",
  props: {
    image_src: String
  },
  setup(__props) {
    const Loading = defineAsyncComponent(() => __vitePreload(() => import("./index.722c8f03.js"), true ? ["./index.722c8f03.js","./index.41551e47.js","./index.8277df79.css","./index.cd400c7b.css"] : void 0, import.meta.url));
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
      }, [
        createBaseVNode("img", {
          src: __props.image_src,
          loading: "lazy",
          onLoad: Image_load
        }, null, 40, _hoisted_1),
        loading.value ? (openBlock(), createBlock(unref(Loading), { key: 0 })) : createCommentVNode("", true),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, toDisplayString(parseInt(Math.random() * 2) ? "\u4E00\u53EA\u4E0D\u77E5\u9053\u4EC0\u4E48\u54C1\u79CD\u5374\u5728\u7F51\u5E97\u4E0A\u7684\u732B\u54AA" : "\u4E00\u5768 \u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B\u732B"), 1),
          createBaseVNode("li", null, toDisplayString(["\u5305\u90AE\u5230\u5BB6", "3 \u6298\u4F18\u60E0\u5377", "\u7B2C\u4E8C\u53EA\u534A\u4EF7", "\u4E00\u6EE9\u732B", "618\u4F18\u60E0", "\u9644\u9001\u5168\u5957\u5DE5\u5177"][parseInt(Math.random() * 6)]), 1),
          createBaseVNode("li", null, "\xA5" + toDisplayString(parseInt(Math.random() * 1e3)), 1)
        ]),
        createVNode(_component_router_link, { to: { name: "Login" } })
      ], 512);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fc45b01"]]);
export {
  index as default
};
