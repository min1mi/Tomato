var  mno
var no
var tno
$.getJSON('/auth/userinfo.json', function(result) {
	console.log(result)
	mno = result.data.no
	console.log(result.data.no)
	no = 0
	try {
			no = location.href.split('?')[1].split('=')[1]
	} catch (err) {
		console.log(no)

	}
  generateTemplate();
	getData();

})
function generateTemplate() {
  $.getJSON('/trainer/detail.json', {no}, function(result) {
    // console.log(result)
    var templateFn = Handlebars.compile($('#detail-template').text())
    var generatedHTML = templateFn(result.data)
    var container = $('#detail-container')
    var html = container.html()
    container.html(html + generatedHTML)
    console.log(result)
		tno = result.data.no
    switch (result.data.spono){
      case "1" :
      $('.t-spono').text('요가')
      break;
      case "2" :
      $('.t-spono').text('헬스')
      break;
      case "3" :
      $('.t-spono').text('스피닝')
      break;
      case "4" :
      $('.t-spono').text('필라테스')
      break;
      default :
      console.log("선택하세요")
    }
		return tno;
  })
}
function getData() {
	$.getJSON('/schedule/detail.json', {no}, function(result) {

		console.log(result.data.weeklist.day+result.data.weeklist.time)

		var bookNo = result.data.weeklist.day+result.data.weeklist.time,
				weeklist = result.data.weeklist
				console.log(weeklist.length)
		for (var week of weeklist) {
			console.log(week.day)
			console.log(week.time)
			bookNo = week.day+week.time
			$('td[data-bookno=' + bookNo + ']').addClass('ok')
		}


	})
}

jQuery(document).ready(function($){

$(".pro-t-Btn").click(function(){
$(".t-t-table").slideToggle(400);
});
})

$('.pro-add-Btn').on('click', function() {

	console.log(mno)
	console.log(tno)


})
