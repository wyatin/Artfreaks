

$(document).ready(function(){
 
});
function showOrHide(zap) {
	if (document.getElementById) {
	var abra = document.getElementById(zap).style;
	
    if (abra.display == "block") 
	{
		$("#menulink").hide(1200);
	} 
	else 
	{
		$("#menulink").show(1200);
	}
	 
	return false;
  } else {
  return true;
 }
}