;// bundle: page___65528fa0be17c62cb682eecc9fc61c63_m
;// files: common/deviceMeta.js, AbuseReport/AbuseReportDispatcher.js

;// common/deviceMeta.js
var Roblox=Roblox||{};Roblox.DeviceMeta=function(){var t=document.querySelector('meta[name="device-meta"]');if(t===null){console.debug("Error loading device information from meta tag - please check if meta tag is present");return}var n=t.dataset||{},i={android:"android",ios:"ios",xbox:"xbox",uwp:"uwp",amazon:"amazon",win32:"win32",universalapp:"universalApp",unknown:"unknown"},r={computer:"computer",tablet:"tablet",phone:"phone",console:"console"};return function(){return{deviceType:r[n.deviceType]||"",appType:i[n.appType]||"",isInApp:n.isInApp==="true",isDesktop:n.isDesktop==="true",isPhone:n.isPhone==="true",isTablet:n.isTablet==="true",isConsole:n.isConsole==="true",isAndroidApp:n.isAndroidApp==="true",isIosApp:n.isIosApp==="true",isUWPApp:n.isUwpApp==="true",isXboxApp:n.isXboxApp==="true",isAmazonApp:n.isAmazonApp==="true",isWin32App:n.isWin32App==="true",isStudio:n.isStudio==="true",isIosDevice:n.isIosDevice==="true",isAndroidDevice:n.isAndroidDevice==="true",isUniversalApp:n.isUniversalApp==="true"}}}();

;// AbuseReport/AbuseReportDispatcher.js
var Roblox=Roblox||{};Roblox.AbuseReportDispatcher=function(){var i=!1,n=function(n,t){n=n.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)"),i=r.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},r=function(t){var i,o;if(typeof t!="string")return!1;t=t.toLowerCase();var s=t.split("?"),f=s[0],r,u=Roblox.AbuseReportPVMeta,h=Roblox.DeviceMeta();if(u.inApp=h.isInApp,f&&typeof f=="string"&&(r=f.split("abusereport/")[1]),r&&(i={actionName:r,id:n("id",t),redirectUrl:n("redirecturl",t)},n("conversationid",t)&&(i.conversationId=n("conversationid",t)),n("partyguid",t)&&(i.partyGuid=n("partyguid",t)),i.id&&i.redirectUrl)){var c=$.param(i),e="abusereport/embedded/"+r+"?"+c,l=Roblox.Endpoints.getAbsoluteUrl("/"+e);u.inApp?u.inAppEnabled?(o={urlPath:e,feature:"Abuse Report"},console.debug("Calling navigateToFeature for Hybrid Overlay"),Roblox.Hybrid.Navigation.navigateToFeature(o,function(n){console.debug("navigateToFeature ---- status:"+n)})):window.location.href=t:window.location.href=u.phoneEnabled?l:t}},t=function(n){n.preventDefault();var t=$(this).attr("href");t&&r(t)},u=function(){if(!i){$(".abuse-report-modal").click(t);$(".messages-container").on("click",".abuse-report-modal",t);$("#AjaxCommentsContainer").on("click",".abuse-report-modal",t);$("#item-context-menu").on("click",".abuse-report-modal",t);$(".GroupWallPane").on("click",".abuse-report-modal",t);$(".group-details-container").on("click",".abuse-report-modal",t);i=!0}};return{triggerUrlAction:r,initialize:u}}(),$(document).ready(function(){Roblox.AbuseReportDispatcher.initialize()});

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('page');