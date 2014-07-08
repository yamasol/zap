$(function(){

	toplistbox = $('#top-list-box');

	$(window).resize(function(event) {
		toplistbox.css('display', 'none');
	});

	$('.list-icon').toggle(function() {
		toplistbox.css('display', 'block');
		return false;
	}, function() {
		toplistbox.css('display', 'none');
		return false;
	});

	$('.list-item').click(function(event) {
		toplistbox.css('display', 'none');
		return false;
	});
	







});