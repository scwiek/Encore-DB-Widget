  <script type="text/javascript">
$j(document).ready(function(){

var chiltonTerms = ["chlton", "chltons"];
var countryTerms = ["AmErIcA", "bolivia"];
var searchTerm = document.getElementById('searchString').value.toLowerCase();
var space = " ";
var searchArray = searchTerm.split(space); 
var showWidget = 0;

for (i = 0; i < searchArray.length; i++) {
	for (k = 0; k < chiltonTerms.length; k++){
		if (chiltonTerms[k] == searchArray[i]) {
			showWidget=1;
			break;
		}
	}
	for (j = 0; j < countryTerms.length; j++){
		if (countryTerms[j] == searchArray[i]) {
			showWidget=2;
			break;
		}
	}		
};

if((document.URL.indexOf("/iii/encore/plus/") != -1) && showWidget == 1){

		resultdiv1 = '<div id="Placard_widget_hours">Looking for this?<br/><br/><a href="http://galesupport.com/chilton_branding/splashPage.php?loc=lom_accessmich"><img src="http://chilton.cengage.com/App_Themes/Neo/images/chiltonLibrary.png" /></a></div> ';	
	
		resultdiv1+='</div></div>';   
		$j('#mainContentArea', window.parent.document).prepend(resultdiv1);
		}		
 else if((document.URL.indexOf("/iii/encore/plus/") != -1) && showWidget == 2){
		
		resultdiv2 = '<div id="Placard_widget_hours">Looking for this?<br/><br/><p>CultureGrams</p></div> ';	
	
		resultdiv2+='</div></div>';   
		$j('#mainContentArea', window.parent.document).prepend(resultdiv2);  
		}
});
</script>