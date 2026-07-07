function display(x)
{
    document.getElementById('cal').value+=x
}
function clearscreen()
{
    document.getElementById('cal').value=""
}
function calculation(){
    var x=document.getElementById('cal').value
    var y=eval(x)
    document.getElementById('cal').value=y
}
