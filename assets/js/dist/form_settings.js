!function(){var t={784:function(){var t,e;t=jQuery,e={subscriptions:{getNoticeContainer:function(){return t("#gf-paypal-checkout-unsupported-payment-warning")},getUnsupportedPaymentMethodMarkup:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;if(e){var i='\t\t\t\t\t\t\n\t\t\t\t\t<div id="gf-paypal-checkout-unsupported-payment-warning" class="gform-alert gform-alert--notice gform-alert--inline" data-js="gform-alert">\n\t\t\t\t\t\t<span class="gform-alert__icon gform-icon gform-icon--circle-notice" aria-hidden="true"></span>\n\t\t\t\t\t\t<div class="gform-alert__message-wrap">\n\t\t\t\t\t\t\t<p class="gform-alert__message">'.concat(e,"</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t");return t&&(i='\t\t\t\t\t\t\n\t\t\t\t\t\t<div id="gf-paypal-checkout-unsupported-payment-warning" class="gform-settings__wrapper gform-alert__legacy">\n\t\t\t\t\t\t\t<div class="alert gforms_note_warning alert_yellow">\n\t\t\t\t\t\t\t\t<p>'.concat(e,"</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t")),i}}}},window.GFPayPalCheckoutUtils=e}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t,e,n;i(784),window.GFPPCPFeedSettings=null,t=jQuery,n=(e=gform_ppcp_form_settings_strings).form_data[Object.keys(e.form_data)[0]],window.GFPPCPFeedSettings={isLegacy:"true"===e.is_legacy,showNotice:"true"===n.show_notice,init:function(){this.prefix=this.isLegacy?"gaddon":"gform",this.fieldClassPrefix=this.isLegacy?"gaddon-setting-row-":"gform_setting_",this.fields=this.getFieldCache(),this.utils=window.GFPayPalCheckoutUtils,this.addEventListeners(),this.toggleTrialFields(),this.maybeDisplayInvalidPaymentMethodsNotice()},addEventListeners:function(){var t=window.GFPPCPFeedSettings;this.fields.setupFeeEnabled.on("change",(function(){t.toggleTrialFields()}))},getFieldCache:function(){var e={transactionType:t("#transactionType"),enabled:t("#trial_enabled"),recurringAmount:t("#recurringAmount"),price:t("#".concat(this.fieldClassPrefix,"trialPrice")),period:t("#".concat(this.fieldClassPrefix,"trialPeriod")),product:t("#trialPrice_product"),amount:t("#trialPrice_amount"),billingCycleUnit:t("#billingCycle_unit"),setupFeeEnabled:t("#setupfee_enabled")};return e.periodUnit=e.period.find("#trialPeriod_unit"),e.priceOptions=e.product.find("option"),e},toggleTrialFields:function(){var t=this.fields.product.val();this.fields.setupFeeEnabled.prop("checked")&&this.fields.enabled.prop("checked",!1),this.fields.enabled.prop("checked")?this.initTrialFields():(this.fields.price.hide(),this.fields.period.hide()),"enter_amount"===t?this.fields.amount.show():this.fields.amount.hide()},initTrialFields:function(){this.fields.price.show(),this.fields.period.show(),this.fields.product.show()},maybeShowAmountField:function(){"enter_amount"===this.fields.price.find("option:selected").val()?this.fields.amount.show():this.fields.amount.hide()},updateTrialPriceOptions:function(){var t=this.fields.recurringAmount.find("option:selected").val(),e=this.fields.product.find('option[value="'.concat(t,'"]'));this.fields.priceOptions.show(),e.length&&(e.hide(),this.fields.product.find("option:selected").val()===t&&this.fields.product.val("free_trial"))},maybeDisplayInvalidPaymentMethodsNotice:function(){var t=this.fields.transactionType.closest("div");"subscription"===this.fields.transactionType.val()&&this.showNotice?t.append(this.utils.subscriptions.getUnsupportedPaymentMethodMarkup(this.isLegacy,gform_ppcp_form_settings_strings.unsupported_payment_option_message)):t.find("#gf-paypal-checkout-unsupported-payment-warning").remove()}},t(document).ready((function(){window.GFPPCPFeedSettings.init()}))}()}();
//# sourceMappingURL=form_settings.js.map