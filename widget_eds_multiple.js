function lookingWidget (){

var chiltonTerms = ["chilton", "chiltons", "chilton's", "repair", "automobile", "car", "auto", "acura", "audi", "bmw", "buick", "cadillac", "chevrolet", "chevy", "dodge", "ford", "gmc", "honda", "hummer", "hyundai", "infiniti", "isuzu", "jaguar",  "jeep", "kia", "lexus", "lincoln", "mazda", "mercedes", "mercury", "mini", "mitsubishi", "nissan", "pontiac", "saab", "saturn", "scion", "subaru", "suzuki", "toyota", "volkswagen", "vw", "volvo" ];
var testTerms = ["act", "sat", "ap", "psat", "toefl", "hiset", "tasc", "gre", "clep", "entrance test", "practice exam", "lsat", "gmat", "mat", "mcat", "pcat", "nmsqt", "math", "reading", "spelling", "comprehension", "ged", "asvab", "compass", "accuplacer", "work keys", "u.s. citizenship", "writing", "computing skills", "tutorials", "grammar", "careers", "occupations", "allied health", "job search", "cdl", "ems", "real estate" ];
var genealogyTerms = ["genealogy", "ancestry", "family history", "ancestors", "portraits", "biography", "biographical"];
var hqTerms = ["genealogy", "ancestry", "census", "freedman's bank", "family history", "ancestors", "family histories", "city directories", "1850 slave schedules", "1860 slave schedules", "u.s. indian census roles", "mortality schedules", "agricultural schedules", "industrial schedules", "1890 veteran schedule", "ethnic", "maps"];
var galelfTerms = ["divorce", "bankruptcy", "landlord tenant", "real estate", "incorporation", "rental", "quit claim deeds", "lawyer referral", "attorney directory", "law digest", "power of attorney", "wills", "estates", "adoption", "name change", "probate", "garnishment", "trusts", "elder law", "criminal", "franchise", "franchises", "small business", "family law", "child custody", "guardianship", "leases", "name change", "workers compensation"];
var searchTerm = document.getElementById('searchString').value.toLowerCase();
var space = " ";
var searchArray = searchTerm.split(space); 
var showWidget = "";

	for (i = 0; i < searchArray.length; i++) {
		for (k = 0; k < chiltonTerms.length; k++){
			if (chiltonTerms[k] == searchArray[i]) {
				showWidget+= "a";
				break;
			}
		}
		for (m = 0; m < testTerms.length; m++){
			if (testTerms[m] == searchArray[i]) {
				showWidget+= "b";
				break;
			} 
		}		 		
		for (n = 0; n < genealogyTerms.length; n++){
			if (genealogyTerms[n] == searchArray[i]) {
				showWidget+= "c";
				break;
			}
		}
		for (p = 0; p < hqTerms.length; p++){
			if (hqTerms[p] == searchArray[i]) {
				showWidget+= "d";
				break;
			}
		}
		for (q = 0; q < galelfTerms.length; q++){
			if (galelfTerms[q] == searchArray[i]) {
				showWidget += "e";
				break;
			}
		}			
	};

console.log("first" + showWidget);

		for (i = 0; i < searchArray.length; i++) {
			for (k = 0; k < chiltonTerms.length; k++){
				if ((showWidget.indexOf("a") == -1) && (searchTerm.indexOf(chiltonTerms[k]) >= 0)) {
					showWidget += "a";
					break;
				}
			}
			for (m = 0; m < testTerms.length; m++){
				if ((showWidget.indexOf("b") == -1) && (searchTerm.indexOf(testTerms[m]) >= 0)) {
					showWidget += "b";
					break;
				}
			}
			for (n = 0; n < genealogyTerms.length; n++){
				if ((showWidget.indexOf("c") == -1) && (searchTerm.indexOf(genealogyTerms[n]) >= 0)) {
					showWidget += "c";
					break;
				}	
			}
			for (p = 0; p < hqTerms.length; p++){
				if ((showWidget.indexOf("d") == -1) && (searchTerm.indexOf(hqTerms[p]) >= 0)) {
					showWidget += "d";
					break;
				}
			}
			for (q = 0; q < galelfTerms.length; q++){
				if ((showWidget.indexOf("e") == -1) && (searchTerm.indexOf(galelfTerms[q]) >= 0)) {
					showWidget += "e";
					break;
				}
			}
		};

console.log(showWidget);
console.log(showWidget.length);
console.log(searchTerm);
console.log(searchTerm[i]);
	
	if(showWidget.length = 1){
		if(showWidget == "a"){
			resultdiv = '<div id="Looking_for_this"><h3 class="widgetHeader">Looking for <a href="http://galesupport.com/chilton_branding/splashPage.php?loc=lom_accessmich" target="_blank" title="The most authoritative automotive repair information available to car owners.">Chilton\'s car repair manuals</a>?</h3></div>'
			$j('#mainContentArea', window.parent.document).prepend(resultdiv);
		}		

		if(showWidget == "b"){
		resultdiv = '<div id="Looking_for_this"><h3 class="widgetHeader">Looking for <a href="http://galesupport.com/migeoipcheck/migeoipcheck-lxpress3.php?database=MAIN" target="_blank" title="Interactive online learning platform of academic and licensing/certification practice tests, including elementary level testing for math and reading.">LearningExpress Library</a>?</h3></div>';
		$j('#mainContentArea', window.parent.document).prepend(resultdiv);
		}
		
		if(showWidget == "c"){
		resultdiv = '<div id="Looking_for_this"><h3 class="widgetHeader">Looking for <a href="http://www.galesupport.com/migeoipcheck/migeoipcheck-gale.php?database=BGMI" target="_blank" title="Current, readily available reference sources, as well as the most important retrospective works that cover individuals, both living and deceased, from every field of activity and from all areas of the world."> Biography and Genealogy Master Index</a>?</h3></div>';
		$j('#mainContentArea', window.parent.document).prepend(resultdiv);
		}
		
		if(showWidget == "d"){
		resultdiv = '<div id="Looking_for_this"><h3 class="widgetHeader">Looking for <a href="http://www.galesupport.com/migeoipcheck/migeoipcheck-proq.php?database=HERITAGE" target="_blank" title="A comprehensive treasury of American genealogical sources rich in unique primary sources, local and family histories, and finding aids.">HeritageQuest Online</a>?</h3></div>';
		$j('#mainContentArea', window.parent.document).prepend(resultdiv);
		}
		
		if(showWidget == "e"){
		resultdiv = '<div id="Looking_for_this"><h3 class="widgetHeader">Looking for <a href="http://galesupport.com/legalforms_branding/splashPage.php?loc=lom_accessmich" target="_blank" title="Provides convenient, authoritative means for understanding common legal procedures through access to various legal forms.">Gale LegalForms</a>?</h3></div>';
		$j('#mainContentArea', window.parent.document).prepend(resultdiv);
		}
	};	

	if(showWidget.length > 1){
		resultdiv = '<div id="Looking_for_this"><h3 class="widgetHeader">Looking for this?</h3></div>'
		$j('#mainContentArea', window.parent.document).prepend(resultdiv);
		
		if(showWidget.indexOf("a") > -1){

		result1 = '<div id="db_record"><img src="http://search.mel.org/iii/encore/resources/gold/images/arrow.png" alt="arrow"><a href="http://galesupport.com/chilton_branding/splashPage.php?loc=lom_accessmich" target="_blank" title="The most authoritative automotive repair information available to car owners.">Chilton\'s car repair manuals</a>';	
		   
		$j('.widgetHeader').after(result1);
		}
	
		if(showWidget.indexOf("b") > -1){

		result2 = '<div id="db_record"><img src="http://search.mel.org/iii/encore/resources/gold/images/arrow.png" alt="arrow"><a href="http://galesupport.com/migeoipcheck/migeoipcheck-lxpress3.php?database=MAIN" target="_blank" title="Interactive online learning platform of academic and licensing/certification practice tests, including elementary level testing for math and reading.">LearningExpress Library</a>';	
  
		$j('.widgetHeader').after(result2);  
		}
		
		if(showWidget.indexOf("c") > -1){

		result3 = '<div id="db_record"><img src="http://search.mel.org/iii/encore/resources/gold/images/arrow.png" alt="arrow"><a href="http://www.galesupport.com/migeoipcheck/migeoipcheck-gale.php?database=BGMI" target="_blank" title="Current, readily available reference sources, as well as the most important retrospective works that cover individuals, both living and deceased, from every field of activity and from all areas of the world.">Biography and Genealogy Master Index</a>';	
  
		$j('.widgetHeader').after(result3);  
		}
		
		if(showWidget.indexOf("d") > -1){

		result4 = '<div id="db_record"><img src="http://search.mel.org/iii/encore/resources/gold/images/arrow.png" alt="arrow"><a href="http://www.galesupport.com/migeoipcheck/migeoipcheck-proq.php?database=HERITAGE" target="_blank" title="A comprehensive treasury of American genealogical sources—rich in unique primary sources, local and family histories, and finding aids.">HeritageQuest Online</a>';	
  
		$j('.widgetHeader').after(result4);  
		}
		
		if(showWidget.indexOf("e") > -1){

		result5 = '<div id="db_record"><img src="http://search.mel.org/iii/encore/resources/gold/images/arrow.png" alt="arrow"><a href="http://galesupport.com/legalforms_branding/splashPage.php?loc=lom_accessmich" target="_blank" title="Provides convenient, authoritative means for understanding common legal procedures through access to \“attorney forms\”.">Gale LegalForms</a>';	
  
		$j('.widgetHeader').after(result5);  
		}
	
	};


};
