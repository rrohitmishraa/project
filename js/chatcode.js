var index = 0;

var questions=[
		["What's Your First name?"],
		["What's Your Last name?"],
		["Your Email Address?"],
		["Your Roll Number?"],
		["Your Institute name?"],
		["Your Date of Birth?"],
		["Enter Your password."],
		["Re-enter Your password." ],
		"We're all setup. You can now log into your account." 
		];

var answer = [];

var placeholders = [
			"First Name",
			"Last Name",
			"Email",
			"Roll Number",
			"Institute Name",
			"Date of Birth (YYYY-MM-DD)",
			"Password",
			"Confirm Password"
];

function askQuestion(i) {
	if(typeof(questions[index]) == 'undefined') {

	}
    else {
		setTimeout(function() {
			$(".chatbox").append('<div id="bot-chat"> <img class="botimg" src="img/a.png"><br><br><br>' +
				'<span class="bot_message"> ' + questions[i] + '</span> </div>');

			if(index < 8) {
				$("#input").prop("placeholder", placeholders[i]);
			} else {
				$("#input").prop("placeholder", "Thank You for using taukit.");
				$("#input").prop("disabled", true);
				$(".button").text("CONFIRM");

			}

			$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
	
		},300);
	}
 }
	 
askQuestion(index);

document.querySelector("#input").addEventListener('keypress', function(e) {
	var key = e.keycode || e.which;
	if (key==13) {
		send();	
	}
});



function send() {
	var btn_txt = document.getElementById("button").textContent;

	if(btn_txt == "SEND") {
		var input;
	    var i = document.getElementById("input").value;

	    if(i != "") {
			if(index == 6 || index == 7) {
				input = "Password is hidden for Security Purpose.";
				answer[index] = i;
		    } else {
				input = i;
				answer[index] = i;
		    }

			
			$(".chatbox").append('<div id="umsg-area"> <div id="user-chat">' +
				'<img class="userimg" src="img/stu.png"><br><br><Br>' +
				'</div> <div id="a"> </div>' +
				'<div class="user_message">' +
				input +
				'</div> <div>');


			$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
			index++;
			askQuestion(index);
			$("input").val('');
			$("input").focus();	
		} else {
			alert("Please fill the details.");
		}
	} else {

		$.redirect(
			url: "chat.php", {
			method: "post",
			data: {ans: JSON.stringify(answer) },
		})

	}
}