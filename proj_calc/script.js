function insert(num)
{
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}
function clean()
{
    document.getElementById('result').innerHTML = "";
}
function back()
{
    let resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    let resultado = document.getElementById('result').innerHTML;
    if(resultado)
        {
            document.getElementById('result').innerHTML = eval(resultado);
        }
}