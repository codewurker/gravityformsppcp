!function(){var n;window.GFPPCPEntryActions=null,n=jQuery,window.GFPPCPEntryActions=function(){var t=this;t.init=function(){t.handleButtonClick()},t.handleButtonClick=function(){n(".ppcp-payment-action").on("click",(function(){var n=jQuery("#ppcp_ajax_spinner"),t=jQuery(this);if("refund"===t.attr("data-api-action")&&!confirm(gform_ppcp_entry_strings.refund_confirmation))return!1;n.show(),t.prop("disabled",!0),jQuery.ajax({url:gform_ppcp_entry_strings.ajaxurl,method:"POST",data:{action:"gfppcp_payment_details_action",nonce:gform_ppcp_entry_strings.payment_details_action_nonce,entry_id:t.data("entry-id"),api_action:t.data("api-action")},success:function(n){"success"in n?n.success?window.location.reload():alert(n.data.message):alert(gform_ppcp_entry_strings.payment_details_action_error)},error:function(){alert(gform_ppcp_entry_strings.payment_details_action_error)},complete:function(){n.hide(),t.prop("disabled",!1)}})}))},t.init()},n(document).ready(window.GFPPCPEntryActions)}();
//# sourceMappingURL=entry_detail.js.map