var saveBtn = $(".saveBtn");

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