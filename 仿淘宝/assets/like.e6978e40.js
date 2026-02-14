import { i as inject, o as onMounted, g as onActivated, h as onDeactivated, j as onUnmounted, _ as _export_sfc, k as defineAsyncComponent, l as __vitePreload, m as reactive, b as openBlock, c as createElementBlock, F as Fragment, n as renderList, e as createVNode, u as unref, p as pushScopeId, f as popScopeId, d as createBaseVNode } from "./index.41551e47.js";
const CatPage = (src) => {
  const axios = inject("$axios");
  const footer = document.querySelector("#web_siteFooter");
  let send_axios = true;
  onMounted(() => {
    src.push(...history_Img);
    listen_footer(footer);
  });
  onActivated(() => {
    setTimeout(() => {
      send_axios = true;
    }, 1e3);
  });
  onDeactivated(() => {
    send_axios = false;
  });
  let history_Img = JSON.parse(localStorage.getItem("CatImg")) || [];
  let map = /* @__PURE__ */ new Map([
    [
      "Enter",
      async (src2) => {
        if (history_Img.length > 108)
          return;
        let resultValue = await axios.get(
          `https://api.thecatapi.com/v1/images/search`,
          {
            params: {
              limit: 9
            }
          }
        );
        history_Img.push(...resultValue);
        resultValue.forEach((element) => src2.push(element));
      }
    ]
  ]);
  onUnmounted(() => {
    localStorage.setItem("CatImg", JSON.stringify(history_Img));
  });
  function listen_footer(Element) {
    const io = new IntersectionObserver((entries) => {
      send_axios && entries[0].isIntersecting && map.get("Enter")(src);
    });
    io.observe(Element);
  }
};
const like_vue_vue_type_style_index_0_scoped_04884d12_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-04884d12"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "like_this" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("dt", null, null, -1));
const _sfc_main = {
  __name: "like",
  setup(__props) {
    const Index_Rectangle = defineAsyncComponent(() => __vitePreload(() => import("./index.ecb9f58c.js"), true ? ["./index.ecb9f58c.js","./index.41551e47.js","./index.8277df79.css","./index.8a6b630e.css"] : void 0, import.meta.url));
    let src = reactive([]);
    CatPage(src);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("dl", _hoisted_1, [
        _hoisted_2,
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(src), (i) => {
          return openBlock(), createElementBlock("dd", {
            key: i.id
          }, [
            createVNode(unref(Index_Rectangle), {
              image_src: i.url
            }, null, 8, ["image_src"])
          ]);
        }), 128))
      ]);
    };
  }
};
const like = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04884d12"]]);
export {
  like as default
};
