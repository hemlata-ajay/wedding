jQuery((function(t){function a(){t("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />')}String.prototype.getDecimals||(String.prototype.getDecimals=function(){var t=(""+this).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}),t(document).on("updated_wc_div",(function(){a()})),t(document).on("click",".plus, .minus",(function(){var a=t(this).closest(".quantity").find(".qty"),e=parseFloat(a.val()),n=parseFloat(a.attr("max")),i=parseFloat(a.attr("min")),s=a.attr("step");e&&""!==e&&"NaN"!==e||(e=0),""!==n&&"NaN"!==n||(n=""),""!==i&&"NaN"!==i||(i=0),"any"!==s&&""!==s&&void 0!==s&&"NaN"!==parseFloat(s)||(s=1),t(this).is(".plus")?n&&e>=n?a.val(n):a.val((e+parseFloat(s)).toFixed(s.getDecimals())):i&&e<=i?a.val(i):e>0&&a.val((e-parseFloat(s)).toFixed(s.getDecimals())),a.trigger("change")})),a()}));