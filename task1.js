function fun()
{
    var hor = document.getElementById("hor").value;
    var ver = document.getElementById("ver").value;
    document.getElementById("container").style.backgroundPosition=`${hor}px ${ver}px`
}