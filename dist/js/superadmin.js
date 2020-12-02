var usertype=sessionStorage.getItem("usertype");
if(usertype!='Super Admin' && (usertype!='' || usertype!=undefined))
{
    window.location.replace("../index.html");
}