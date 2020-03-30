function validate()
{
  if(!areEqual() && lessThan())
  {
    alert("The passwords entered don't match!\nPassword must have 8 or more characters!");
  }
  else if(!areEqual() && !lessThan())
  {
    alert("The passwords entered don't match!");
  }
  else if(areEqual() && lessThan())
  {
    alert("Password must have 8 or more characters!");
  }
  else
  {
    alert("Password validated");
  }
}

function areEqual()
{
  return (document.getElementById("password1").value == document.getElementById("password2").value)
}

function lessThan()
{
  return (document.getElementById("password1").value.length < 8)
}
