var saveBtn = $(".saveBtn");

saveBtn.on("click", function(){
    var textToSave = $(this).siblings().val()
    var hourToSave = $(this).parent().attr("id")
    localStorage.setItem(hourToSave, textToSave)
})

// load everything from local storage
$("#9am .textBox").val(localStorage.getItem("9am"))
$("#10am .textBox").val(localStorage.getItem("10am"))