var saveBtn = $(".saveBtn");
var now = moment();
var time = now.hour()
//  + ':' + now.minutes() + ':' + now.seconds();
time = time + ((now.hour()) >= 12 ? ' PM' : ' AM');
console.log(time);

saveBtn.on("click", function(){
    var textToSave = $(this).siblings().val()
    var hourToSave = $(this).parent().attr("id")
    localStorage.setItem(hourToSave, textToSave)
})

// load everything from local storage
$("#9am .textBox").val(localStorage.getItem("9am"))
$("#10am .textBox").val(localStorage.getItem("10am"))
$("#11am .textBox").val(localStorage.getItem("11am"))
$("#12pm .textBox").val(localStorage.getItem("12pm"))
$("#1pm .textBox").val(localStorage.getItem("1pm"))
$("#2pm .textBox").val(localStorage.getItem("2pm"))
$("#3pm .textBox").val(localStorage.getItem("3pm"))
$("#4pm .textBox").val(localStorage.getItem("4pm"))
$("#5pm .textBox").val(localStorage.getItem("5pm"))

var objDate = new Date();
    var hours = objDate.getHours();
    if(hours >= 9 && hours <= 17){
        $(".hour").addClass("present");
    }
    else if(hours < 9){
        $(".hour").addClass("past");
    }
    else{
        $(".hour").addClass("future");
    }