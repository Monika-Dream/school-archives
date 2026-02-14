;
(function () {
  System.register(['./index-legacy-682f0385.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.textContent = ".like_this[data-v-04884d12] {\n  background-color: #ffffff;\n  padding: 0 12px;\n}\n.like_this > dt[data-v-04884d12] {\n  height: 50px;\n  background: url(" + new URL('do_you_like.746cbfc7.png', module.meta.url).href + ") no-repeat left center;\n}\n.like_this > dd[data-v-04884d12] {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n.like_this > dd[data-v-04884d12]:nth-of-type(3n) {\n  margin-right: unset;\n}\n";
    document.head.appendChild(__vite_style__);
    var inject, onMounted, onActivated, onDeactivated, onUnmounted, _export_sfc, defineAsyncComponent, __vitePreload, reactive, openBlock, createElementBlock, Fragment, renderList, createVNode, unref, pushScopeId, popScopeId, createBaseVNode;
    return {
      setters: [module => {
        inject = module.i;
        onMounted = module.o;
        onActivated = module.g;
        onDeactivated = module.h;
        onUnmounted = module.j;
        _export_sfc = module._;
        defineAsyncComponent = module.k;
        __vitePreload = module.l;
        reactive = module.m;
        openBlock = module.b;
        createElementBlock = module.c;
        Fragment = module.F;
        renderList = module.n;
        createVNode = module.e;
        unref = module.u;
        pushScopeId = module.p;
        popScopeId = module.f;
        createBaseVNode = module.d;
      }],
      execute: function () {
        const CatPage = src => {
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
            }, 1000);
          });
          onDeactivated(() => {
            send_axios = false;
          });

          //创建历史图片记录
          let history_Img = JSON.parse(localStorage.getItem("CatImg")) || [];
          let map = new Map([
          //编写用户是否可以登陆操作
          ["Enter", async src => {
            if (history_Img.length > 108) return;
            let resultValue = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
              params: {
                limit: 9
              }
            });
            history_Img.push(...resultValue);
            resultValue.forEach(element => src.push(element));
          }]]);
          onUnmounted(() => {
            localStorage.setItem("CatImg", JSON.stringify(history_Img));
          });
          //监听底部是否出现在页面中[友善一点，毕竟是他人的接口，就不要那么疯狂的请求了]
          function listen_footer(Element) {
            const io = new IntersectionObserver(entries => {
              send_axios && entries[0].isIntersecting && map.get("Enter")(src);
            });
            io.observe(Element);
          }
        };
        const like_vue_vue_type_style_index_0_scoped_04884d12_lang = '';
        const _withScopeId = n => (pushScopeId("data-v-04884d12"), n = n(), popScopeId(), n);
        const _hoisted_1 = {
          class: "like_this"
        };
        const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createBaseVNode("dt", null, null, -1));
        const _sfc_main = {
          __name: 'like',
          setup(__props) {
            const Index_Rectangle = defineAsyncComponent(() => __vitePreload(() => module.import('./index-legacy-8ee6bb94.js'), false ? "__VITE_PRELOAD__" : void 0, module.meta.url));
            let src = reactive([]);
            CatPage(src);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("dl", _hoisted_1, [_hoisted_2, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(src), i => {
                return openBlock(), createElementBlock("dd", {
                  key: i.id
                }, [createVNode(unref(Index_Rectangle), {
                  image_src: i.url
                }, null, 8, ["image_src"])]);
              }), 128))]);
            };
          }
        };
        const like = exports('default', /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId', "data-v-04884d12"]]));
      }
    };
  });
})();
