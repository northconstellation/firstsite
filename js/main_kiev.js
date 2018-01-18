// cookie for timer
var myDate = new Date();
function returnEndDate(d,h,m){
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}
if($.cookie("pm4")){
	var dateEnd = $.cookie("pm4");
}else{
	var dateEnd = returnEndDate(5,0,0);
	$.cookie("pm4", dateEnd, {expires: 3});
};

// alert(window.screen.availWidth);