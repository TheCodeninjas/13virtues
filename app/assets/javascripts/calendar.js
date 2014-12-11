window.onload = function(){
		g_globalObject = new JsDatePick({
			useMode:1,
			isStripped:true,
			target:"cal",
			limitToToday:true,
			cellColorScheme:"beige",
			/*selectedDate{
				day:5,
				month:12,
				year:2014,
			},
			/*yearsRange:[1978,2020],
			limitToToday:false,
			cellColorScheme:"beige",
			dateFormat:"%m-%d-%Y",
			imgPath:"img/",
			weekStartDay:1*/
		});		
		
		g_globalObject.setOnSelectedDelegate(function(){
			var obj = g_globalObject.getSelectedDay();
			var day = obj.day
			if (day.length < 2) {
				day = "0"+day
			}
			var date = obj.year+"-"+obj.month+"-"+day
			window.location.href = "/classrooms/"+classroom+"/virtueentries/editall/"+date;
		});
};
