var saveBtn = $(".saveBtn");
var now = moment();
var time = now.hours();
//  + ':' + now.minutes() + ':' + now.seconds();
time = time + ((now.hour()) >= 12 ? 'pm' : 'am');
console.log(time);

saveBtn.on("click", function(){
    var textToSave = $(this).siblings().val()
    var hourToSave = $(this).parent().attr("id")
    localStorage.setItem(hourToSave, textToSave)
})

// load everything from local storage
$("#9 .textBox").val(localStorage.getItem("9"))
$("#10 .textBox").val(localStorage.getItem("10"))
$("#11 .textBox").val(localStorage.getItem("11"))
$("#12 .textBox").val(localStorage.getItem("12"))
$("#13 .textBox").val(localStorage.getItem("13"))
$("#14 .textBox").val(localStorage.getItem("14"))
$("#15 .textBox").val(localStorage.getItem("15"))
$("#16 .textBox").val(localStorage.getItem("16"))
$("17 .textBox").val(localStorage.getItem("17"))

$('#' + time).children().addClass('present')
var allHours = $('.hour').parent()
console.log(allHours)
allHours.each(function(key) {
    var hourLoop = parseInt($(this).attr('id'))
    var currentHour = parseInt(time.replace(/\D/g,''))
    console.log(hourLoop , currentHour)
  
    
    
    if (hourLoop < currentHour) {
        $(this).children().addClass("past");
      } 
      else if (hourLoop === currentHour) {
        $(this).children().removeClass("past");
        $(this).children().addClass("present");
      } 
      else {
        $(this).children().removeClass("past");
        $(this).children().removeClass("present");
        $(this).children().addClass("future");
      }
    
})  
