!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=148)}({0:function(t,e){t.exports=jQuery},148:function(t,e,o){"use strict";(function(t){var e=o(149),n=document.createEvent("Event"),i=0;n.initEvent("et_fb_before_disabling_bfb",!0,!0);var a,r=t("#et_pb_layout").addClass("et-drag-disabled");function s(){a&&clearTimeout(a),a=setTimeout((function(){var e=t("#et_pb_layout"),o=t("#et-fb-app"),n=t(".et_pb_toggle_builder_wrapper.et_pb_builder_is_used"),i=t("#et_pb_toggle_builder"),a=t("#et_pb_fb_cta"),r=t(".et-fb-button-group--responsive-mode"),s=t(".et-fb-button-group--builder-mode"),_=t(".et-fb-page-settings-bar__column--right"),l=(n.outerWidth()||0)-(parseFloat(i.outerWidth()||0)+parseFloat(a.outerWidth()||0)+parseFloat(a.css("marginLeft")))+((r.length&&r.is(":visible")?r.outerWidth():0)+(s.length&&s.is(":visible")?s.outerWidth()+10:0)+(_.length?_.outerWidth():0))<=30;e.toggleClass("et_pb_layout--compact",l),o.toggleClass("et-fb-app--compact",l)}),50)}function _(e){t("#title").prop("required")&&t("#title").removeProp("required"),e.hasClass("disabled")?i<=20?(i++,setTimeout((function(){_(e)}),1e3)):t(".et-bfb-page-preloading").remove():e.trigger("click")}function l(e){void 0!==window.tinyMCE&&window.tinyMCE.get("content")&&!window.tinyMCE.get("content").isHidden()?window.tinyMCE.get("content").setContent(e,{format:"html"}):t("#content").val(e)}t(window).on("et_fb_init_app_after",(function(){r.removeClass("et-drag-disabled")})),t(window).on("load",(function(){setTimeout((function(){var e=t("#et_pb_toggle_builder"),o=t("#et_pb_fb_cta");t(".et_pb_toggle_builder_wrapper").css("opacity",""),e.addClass("et_pb_ready"),e.hasClass("et_pb_builder_is_used")&&o.addClass("et_pb_ready")}),250);var e=function(){t(this).find(".postbox").removeClass("first-visible"),t(this).is("#normal-sortables")&&t(this).find(".postbox:visible").first().addClass("first-visible")};t(".meta-box-sortables").sortable("option","update",e),t("#screen-options-wrap").on("change",".hide-postbox-tog",(function(){t(".meta-box-sortables").each(e)})),t(".handle-order-higher, .handle-order-lower").on("click",(function(){t(".meta-box-sortables").each(e)})),t(".meta-box-sortables").on("sortstart",(function(){t("body").addClass("et-bfb--metabox-dragged")})),t(".meta-box-sortables").on("sortstop",(function(){t("body").removeClass("et-bfb--metabox-dragged"),window.dispatchEvent(new CustomEvent("ETBFBMetaboxSortStopped",{}))}))})),t(window).on("et_fb_disabling_bfb_confirmed",(function(){var e=t("#et_pb_old_content"),o=t("#et_pb_use_builder"),n=t("#minor-publishing-actions #save-post").length>0?t("#minor-publishing-actions #save-post"):t("#publishing-action #publish");l(e.val()),e.val(""),o.val("off"),_(n)})),t(window).on("et_fb_init_app_after resize et_fb_toolbar_change",s),t(e.top_window).on("et-preview-animation-complete et-bfb-modal-snapped",s),t("#et_pb_toggle_builder").on("click",(function(e){e.preventDefault();var o=t(this),i=t("#et_pb_use_builder"),a=function(){var e;e=void 0!==window.tinyMCE&&window.tinyMCE.get("content")&&!window.tinyMCE.get("content").isHidden()?window.tinyMCE.get("content").getContent():t("#content").val();return e.trim()}(),r=t("#minor-publishing-actions #save-post").length>0?t("#minor-publishing-actions #save-post"):t("#publishing-action #publish"),s=t("#et_pb_old_content"),d=t("#titlediv #title").length>0?t("#titlediv #title").val():"";if(o.hasClass("et_pb_builder_is_used"))window.dispatchEvent(n);else if(i.val("on"),""!==a&&(s.val(a),a.indexOf("[et_pb_section")<0&&"skip"!==et_bfb_options.skip_default_content_adding&&(a='[et_pb_section][et_pb_row][et_pb_column type="'.concat(et_bfb_options.default_initial_column_type,'"][').concat(et_bfb_options.default_initial_text_module,"]").concat(a,"[/").concat(et_bfb_options.default_initial_text_module,"][/et_pb_column][/et_pb_row][/et_pb_section]")),l(a)),t("body").append('<div class="et-bfb-page-preloading"></div>'),""!==a||""!==d)_(r);else{var b=t("#post_ID").length>0?t("#post_ID").val():0;t.ajax({type:"POST",url:et_bfb_options.ajaxurl,data:{action:"et_builder_activate_bfb_auto_draft",et_enable_bfb_nonce:et_bfb_options.et_enable_bfb_nonce,et_post_id:b},complete:function(){_(r)}})}}))}).call(this,o(0))},149:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.is_iframe=e.top_window=void 0;var n=window;e.top_window=n;var i,a=!1;e.is_iframe=a;try{i=!!window.top.document&&window.top}catch(t){i=!1}i&&i.__Cypress__?window.parent===i?(e.top_window=n=window,e.is_iframe=a=!1):(e.top_window=n=window.parent,e.is_iframe=a=!0):i&&(e.top_window=n=i,e.is_iframe=a=i!==window.self)}});