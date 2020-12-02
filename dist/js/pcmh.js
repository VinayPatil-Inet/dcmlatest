var usertype=sessionStorage.getItem("usertype");
if(usertype!='PCMH' && (usertype!='' || usertype!=undefined))
{
    window.location.replace("../index.html");
}