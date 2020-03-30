function confirm()
{
  let bor_r= document.getElementById("bdR").value;
  let bor_b= document.getElementById("bdB").value;
  let bor_g= document.getElementById("bdG").value;
  let bor_w= document.getElementById("bdW").value;
  let bor= document.getElementById("border");
  bor.style.border= "solid";
  bor.style.borderWidth= bor_w+"px";
  bor.style.borderColor= "rgb("+bor_r+","+bor_g+","+bor_b+")";
  let bg_r= document.getElementById("bgR").value;
  let bg_b= document.getElementById("bgB").value;
  let bg_g= document.getElementById("bgG").value;
  bor.style.backgroundColor= "rgb("+bg_r+","+bg_g+","+bg_b+")";
}
