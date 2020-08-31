// JavaScript Document
var MM_contentVersion = 6;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
var words = navigator.plugins["Shockwave Flash"].description.split(" ");
for (var i = 0; i < words.length; ++i)
{
if (isNaN(parseInt(words[i])))
continue;
var MM_PluginVersion = words[i]; 
}
var MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
&& (navigator.appVersion.indexOf("Win") != -1)) {
document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n'); //FS hide this from IE4.5 Mac by splitting the tag
document.write('on error resume next \n');
document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
document.write('</SCR' + 'IPT\> \n');
}
if ( MM_FlashCanPlay ) {
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="950" height="340">'); 
document.write('<param name="movie" value="/images/top.swf" />'); 
document.write('<param name="wmode" value="transparent">'); 
document.write('<param name="quality" value="high" />'); 
document.write('<embed src="/images/top.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="950" height="340" wmode="transparent"></embed>'); 
document.write('</object>');
}else{
document.write('<img src="./images/mainphoto.jpg" alt="夢にすべての可能性を" />');
}// JavaScript Document