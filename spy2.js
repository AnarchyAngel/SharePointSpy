	function setup(){
  var urls = new Array(
	'/_catalogs/masterpage/Forms/AllItems.aspx',
	'/_catalogs/wp/Forms/AllItems.aspx',
	'/_catalogs/wt/Forms/Common.aspx',
	'/_layouts/1033/IMAGES',
	'/_layouts/aclinv.aspx',
	'/_layouts/addrole.aspx',
	'/_layouts/AdminRecycleBin.aspx',
	'/_layouts/AreaNavigationSettings.aspx',
	'/_Layouts/AreaTemplateSettings.aspx',
	'/_Layouts/AreaWelcomePage.aspx',
	'/_layouts/associatedgroups.aspx',
	'/_layouts/bpcf.aspx',
	'/_Layouts/ChangeSiteMasterPage.aspx',
	'/_layouts/create.aspx',
	'/_layouts/editgrp.aspx',
	'/_layouts/editprms.aspx',
	'/_layouts/groups.aspx',
	//'/_layouts/help.aspx', //added back after move to new tab
	'/_layouts/images/',
	'/_layouts/listedit.aspx',
	'/_layouts/ManageFeatures.aspx',
	'/_layouts/ManageFeatures.aspx?Scope=Site',
	'/_layouts/mcontent.aspx',
	'/_layouts/mngctype.aspx',
	'/_layouts/mngfield.aspx',
	'/_layouts/mngsiteadmin.aspx',
	'/_layouts/mngsubwebs.aspx',
	'/_layouts/mngsubwebs.aspx?view=sites',
	'/_layouts/mobile/mbllists.aspx',
	'/_layouts/MyInfo.aspx',
	'/_layouts/MyPage.aspx',
	'/_layouts/MyTasks.aspx',
	'/_layouts/navoptions.aspx',
	'/_layouts/NewDwp.aspx',
	'/_layouts/newgrp.aspx',
	'/_layouts/newsbweb.aspx',
	'/_layouts/PageSettings.aspx',
	'/_layouts/people.aspx',
	'/_layouts/people.aspx?MembershipGroupId=0',
	'/_layouts/permsetup.aspx',
	'/_layouts/picker.aspx',
	'/_layouts/policy.aspx',
	'/_layouts/policyconfig.aspx',
	'/_layouts/policycts.aspx',
	'/_layouts/Policylist.aspx',
	'/_layouts/prjsetng.aspx',
	'/_layouts/quiklnch.aspx',
	'/_layouts/recyclebin.aspx',
	'/_Layouts/RedirectPage.aspx?Target={SiteCollectionUrl}_catalogs/masterpage',
	'/_layouts/role.aspx',
	'/_layouts/settings.aspx',
	'/_layouts/SiteDirectorySettings.aspx',
	'/_layouts/sitemanager.aspx',
	'/_Layouts/SiteManager.aspx?lro=all',
	'/_layouts/spcf.aspx',
	'/_layouts/storman.aspx',
	'/_layouts/themeweb.aspx',
	'/_layouts/topnav.aspx',
	'/_layouts/user.aspx',
	//'/_layouts/userdisp.aspx', //readded
	//'/_layouts/userdisp.aspx?ID=1', //readded
	'/_layouts/useredit.aspx',
	'/_layouts/useredit.aspx?ID=1&Source=%2F%5Flayouts%2Fpeople%2Easpx',
	'/_layouts/viewgrouppermissions.aspx',
	'/_layouts/viewlsts.aspx',
	'/_layouts/vsubwebs.aspx',
	'/_layouts/WPPrevw.aspx?ID=247',
	'/_layouts/wrkmng.aspx',
	'/_vti_bin/Admin.asmx',
	'/_vti_bin/alerts.asmx',
	'/_vti_bin/dspsts.asmx',
	'/_vti_bin/forms.asmx',
	'/_vti_bin/Lists.asmx',
	'/_vti_bin/people.asmx',
	'/_vti_bin/Permissions.asmx',
	'/_vti_bin/search.asmx',
	'/_vti_bin/UserGroup.asmx',
	'/_vti_bin/versions.asmx',
	'/_vti_bin/Views.asmx',
	'/_vti_bin/webpartpages.asmx',
	'/_vti_bin/webs.asmx',
	'/_vti_bin/spsdisco.aspx',
	'/_vti_bin/AreaService.asmx',
	'/_vti_bin/BusinessDataCatalog.asmx',
	'/_vti_bin/ExcelService.asmx',
	'/_vti_bin/SharepointEmailWS.asmx',
	'/_vti_bin/spscrawl.asmx',
	'/_vti_bin/spsearch.asmx',
	'/_vti_bin/UserProfileService.asmx',
	'/_vti_bin/WebPartPages.asmx',
	'/default.aspx',
	'/Forms/DispForm.aspx',
	'/Forms/DispForm.aspx?ID=1',
	'/Forms/EditForm.aspx',
	'/Forms/EditForm.aspx?ID=1',
	'/Forms/Forms/AllItems.aspx',
	'/Forms/MyItems.aspx',
	'/Forms/NewForm.aspx',
	'/Pages/default.aspx',
	'/Pages/Forms/AllItems.aspx',
	'/shared documents/forms/allitems.aspx'
  );

  var target = document.getElementById("target").value;
  document.getElementById("output").innerHTML="";
  document.getElementById("scan").disabled = true;
  document.getElementById("search").disabled = true;
  document.getElementById("cookie").disabled = true;
  document.getElementById("about").disabled = true;
  document.getElementById("sitesearch").disabled = true;
  document.getElementById("status").innerHTML="Running...<BR>";
  setTimeout(function(){run(target, urls);}, 4);
}

function showSiteSearch(){
  document.getElementById("status").innerHTML="";
  var base = document.getElementById("target").value;
  //var purl = base.split("/", 4);
  //var url = purl[0]+"//"+purl[2];
  var url = base;
  var out = "Base URL: "+url;
  out += "<BR>Files:<BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Asql' target='about:blank'>*.sql</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Abak' target='about:blank'>*.bak</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Aold' target='about:blank'>*.old</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Ainc' target='about:blank'>*.inc</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Aini' target='about:blank'>*.ini</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Abat' target='about:blank'>*.bat</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Aphp' target='about:blank'>*.php</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Ash' target='about:blank'>*.sh</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Aconf' target='about:blank'>*.conf</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=filetype%3Aconfig' target='about:blank'>*.config</a><BR>";
  out += "Misc. searches:<BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=pass%20OR%20pw%20OR%20passed%20%20OR%20PASSWD%20OR%20passwd%20OR%20password%20OR%20hash%20OR%20HASH' target='about:blank'>Passwords</a><BR>";
  out += "<a href='"+url+"/_layouts/OSSSearchResults.aspx?k=admin%20OR%20root%20OR%20ADM%20OR%20LOC%20OR%20administrator%20OR%20ADMIN%20OR%20Admin%20OR%20Administrator%20OR%20ROOT%20OR%20Root' target='about:blank'>Admin accounts</a><BR>";
  document.getElementById("output").innerHTML=out;
}

function showSearch(){
  document.getElementById("status").innerHTML="";
  var base = document.getElementById("target").value;
  var purl = base.split("/", 4);
  var url = purl[0]+"//"+purl[2];
  var out = "Files:<BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Asql' target='about:blank'>*.sql</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Abak' target='about:blank'>*.bak</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Aold' target='about:blank'>*.old</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Ainc' target='about:blank'>*.inc</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Aini' target='about:blank'>*.ini</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Abat' target='about:blank'>*.bat</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Aphp' target='about:blank'>*.php</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Ash' target='about:blank'>*.sh</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Aconf' target='about:blank'>*.conf</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=filetype%3Aconfig' target='about:blank'>*.config</a><BR>";
  out += "Misc. searches:<BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=pass%20OR%20pw%20OR%20passed%20%20OR%20PASSWD%20OR%20passwd%20OR%20password%20OR%20hash%20OR%20HASH' target='about:blank'>Passwords</a><BR>";
  out += "<a href='"+url+"/search/Pages/results.aspx?k=admin%20OR%20root%20OR%20ADM%20OR%20LOC%20OR%20administrator%20OR%20ADMIN%20OR%20Admin%20OR%20Administrator%20OR%20ROOT%20OR%20Root' target='about:blank'>Admin accounts</a><BR>";
  document.getElementById("output").innerHTML=out;
}

function showAbout(){
  var msg = "SharePointSpy by Adam Espitia\r";
  msg += "http://aahideaway.blogspot.com\r";
  msg += "@anarchyang31\r\r";
  msg += "Version 1.5\r";
  alert(msg);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cookie').addEventListener('click', setCookie);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('scan').addEventListener('click', setup);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search').addEventListener('click', showSearch);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sitesearch').addEventListener('click', showSiteSearch);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('about').addEventListener('click', showAbout);
});


function anon(url){ 
 fetch(url, {
    // credentials: 'omit', // this is the default value
    cache: 'no-store',
 }).then(function(response) {
    // TODO: Handle the response.
    // https://fetch.spec.whatwg.org/#response-class
    // https://fetch.spec.whatwg.org/#body
    return response.text();
 }).catch(function(er) {
    alert(er);
    return "404";
 });
}


// Put last used tab URL in target input field.
// TODO: strip last / from url
function loadTar(){
 var urlTar = location.search.split('target=')[1];
 document.getElementById("target").value=urlTar;
}

function setCookie(){
 var url = document.getElementById("target").value;
 chrome.cookies.remove({ url: url, name: "WSS_KeepSessionAuthenticated"});
 chrome.cookies.remove({ url: url, name: "__utmc"});
 var cookie = prompt("Enter cookie string:","{8320514b-5e32-47ea-ae41-6f0f91dafff4}");
 if(cookie){
  chrome.cookies.set({ url: url, name: "WSS_KeepSessionAuthenticated", value: cookie, path: "/"});
  chrome.cookies.set({ url: url, name: "__utmc", value: cookie, path: "/"});
  document.getElementById("cookiestatus").innerHTML="Cookie set as "+cookie;
  //chrome.cookies.get({ url: url, name: "WSS_KeepSessionAuthenticated"}, function(cookie){alert(cookie.value);});
 }
}

function con(url){
  //alert(document.getElementById("target").checked);
  if(document.getElementById("anon").checked)
  {
   var intMsg=anon(url);
   return intMsg;
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, false);
  //alert(xmlhttp.responseText);
  xmlhttp.send();
  return Array(xmlhttp.responseText, xmlhttp.status);
}

function run(tar, urls){
  //document.getElementById("output").innerHTML="Running...<BR>";
  var out = document.getElementById("output").innerHTML;
  for(i=0; i < urls.length; i++){
    url = tar+urls[i];
    //con(url);
    var res = con(url);
    var title = new String();
    try {
      var prr = res[0].split("<title>");
      var prr2 = prr[1].split("</title>");
      if(prr2[0].indexOf("Error") == -1 && prr2[0].indexOf("Access required") == -1){
        title = "OK";
        var rawres = "<font color='red'><font size='3'><B>[ "+title+" ] - "+urls[i]+" - </b><a href='"+url+"' target='about:blank'>Link</a></font></font>";
      }else{
        title = prr2[0];
        var rawres = "<font color='green'><font size='3'><B>[ "+title+" ] - "+urls[i]+" - </b><a href='"+url+"' target='about:blank'>Link</a></font></font>";
      }
    }
    catch(err) {
      //alert(err);
      if(!res){
        title = "401/403";
        var rawres = "<font color='brown'><font size='3'><B>[ "+title+" ] - "+urls[i]+" - </b><a href='"+url+"' target='about:blank'>Link</a></font></font>";
      }else{
	title = "404 NOT FOUND";
	var rawres = "<font color='brown'><font size='3'><B>[ "+title+" ] - "+urls[i]+" - </b><a href='"+url+"' target='about:blank'>Link</a></font></font>";
      }
    }
    out = out+rawres+"<BR>";
    document.getElementById("output").innerHTML=out;
  }
  document.getElementById("status").innerHTML="Done.";
  document.getElementById("scan").disabled = false;
  document.getElementById("cookie").disabled = false;
  document.getElementById("search").disabled = false;
  document.getElementById("sitesearch").disabled = false;
  document.getElementById("about").disabled = false;
}

document.onload = loadTar();
