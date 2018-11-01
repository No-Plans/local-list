
$(document).ready(function(){

	$.get('list.csv', function(data) {

		// start the table	
		html = 	'<table id="">'
		
		// header
		html += '<thead><tr>'
		html += '<th class="one asc" data-sort="string-ins"><span>Title</span></th>'
		html += '<th class="two asc" data-sort="int"><span>Year</span></th>'
		html += '<th class="three asc" data-sort="string-ins"><span>Creator</span></th></tr>'
		html += '</thead>';

		// split into lines
		var rows = data.split("\n");

		// parse lines
		rows.forEach( function getvalues(ourrow) {

		// start a table row
		html += '<tr>';

		// split line into columns

		var columns = ourrow.split(",");
			
		html += '<td class="one">' + columns[0] + '</td>';
		html += '<td class="two">' + columns[1] + '</td>';
		html += '<td class="three">' + columns[2] + '</td>';

		// close row
		html += '</tr>';		
		})
		// close table
		html += '</table>';

		// insert into div
		$('main').append(html);
		
		// apply sorting script
		$('table').stupidtable();
	});
});

// asc/desc
$(document).on('click','.th',function() {
	$(this).removeClass('asc').addClass('desc');
});

// open info
$(document).on('click','.button',function() {
	$('.info').addClass('open');
});
// close info
$(document).on('click','.close',function() {
	$('.info').removeClass('open');
});
