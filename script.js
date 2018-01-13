$('#search').keyup(function(){
var searchField = $('#search').val();
var myExp = new RegExp(searchField, 'i');
$.getJSON('test.json', function(data){

$.each(data, function(key, val){
if(val.title.search(myExp) != -1) {
output +='<a href="' + val.url + 'target="_blank">' + val.title + '</a>';
}
});
$('#update').html(output);
});
});