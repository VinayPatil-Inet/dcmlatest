var usertype=sessionStorage.getItem("usertype");
if(usertype!='Admin' && (usertype!='' || usertype!=undefined))
{
    window.location.replace("../index.html");
}