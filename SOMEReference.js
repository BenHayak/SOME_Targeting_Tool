var aElement = document.activeElement;
if (aElement !== document.body) {
  var d=aElement,t="";
  var getId=function(id) { return /^[A-Za-z0-9._]+$/g.test(id) ? d.id : "" }
  stopAt=getId(d.id)
  while (d != document.body) {
    if (stopAt) break;
    if (d.previousElementSibling == null) { 
      d=d.parentElement;
      stopAt=getId(d.id)
      t=".firstElementChild"+t
    }
    else { 
      d = d.previousElementSibling;
      stopAt=getId(d.id)
      t=".nextElementSibling"+t
    } 
  }
  t=stopAt ? stopAt+t : "document.body"+t

  console.log("%c[!] Same Origin Method Execution%c \nYou're welcome to use SOME PoC Generator at: http://www.SOMEAttack.com/Playground/SOMEGenerator",'font-weight: bold;','');
  console.log("%c[+] Target URL:\n%c" + document.location.href,'font-weight: bold;','');
  console.log("%c[+] Target Reference:\n%c"+ t,'font-weight: bold;','');
  window.prompt("[!] Same Origin Method Execution Target Reference \n[!] Copy to clipboard: Ctrl+C, Enter", t);

}
else { console.log("Error targeting, The extension only supports active elements")}
