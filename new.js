const new_one = () => console.log("Arrow function");

function call_new_one()
{
new_one();
}
function call_call()
{
call_new_one();
}
call_call();