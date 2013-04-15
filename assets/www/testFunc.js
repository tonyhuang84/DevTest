function show_week_list()
{        	
    var html = [''];
	html.push('<br><br><table border="1">');
	for (i in myQues)
	{
		html.push('<tr><td>');
		html.push('<a href="#" class="btn large" onclick="alert(\'', i, '\');">', i,'</a><br>');
//				html.push(i);
//				alert(i);
		html.push('</td></td>');
	}
	html.push('</table>');
	document.getElementById("week_list").innerHTML = html.join('');
}