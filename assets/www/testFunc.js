function show_week_list()
{        	
    var html = [''];
	html.push('<br><br><table border="1">');
	for (i in myQues)
	{
		html.push('<tr><td>');
		html.push('<a href="#" class="btn large" onclick="alert(\'', i, '\');">', i,'</a><br>');
//		html.push(i);
		html.push('</td></td>');
	}
	html.push('</table>');
	document.getElementById("item_list").innerHTML = html.join('');
}

function show_ques_list(qAryName)
{
//	alert(myQues[qAryName].length);

	var qAry = myQues[qAryName];
    var html = [''];
	html.push('<br><br><table border="1">');
	for (var i=0; i < qAry.length; i++)
	{
		html.push('<tr><td>');
		alert(qAry[i][0]);
		html.push('<a href="#" class="btn large" onclick="alert(\'', qAry[i][4], '\');">', qAry[i][0],'</a><br>');
		html.push('</td></td>');
	}
	html.push('</table>');
	document.getElementById("item_list").innerHTML = html.join('');
}