$("button").click(function() {
    var message1=$(".name").val();
    var message2=$(".number").val();
    var message3=$(".type").val();
    var message2=parseInt(message2)*1092;
$("p").text("By the year 2040," +message1+" will have eaten "+message2+" "+message3+" cookies.");
});
