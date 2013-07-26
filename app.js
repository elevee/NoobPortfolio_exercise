// Javascript

// #3
// alert("Hi");

// #5

// var response = prompt("Ayyo, what's yo name, girl!?!");

// console.log(response);

// #6

// var movie = prompt("Gimme a movie.");
// var time = prompt("Gimme a time.");
// console.log("Ay girl, I'm goin take you to "+ movie + " at " + time + " toNIGHT!");

// #7

// var password = prompt("Ay pretty lady, gimme yo PASSWORD right QUICK.");
  

//   while(password.length <= 10) {
//     password = prompt("Sorry, needs to be at least 10 characters.")
//     };

// console.log(password);

// #8

// var age = prompt("Ay girl, right quick, hit me wit yo age!");
// if (age > 21) {
//   alert("DAOM YOU OLD! Come right on in and drink your skin off.");
// }
// else if (age == 21) {
//   alert("Happy Birthday. You deserve it");
// }
// else if (age < 21 && age > 14) {
//   alert("YOU FINE! But not fine enough to drink.");
// }
// else {
//   alert("Go to bed.");
// }

// Semicolons are everywhere (vs Ruby) but this syntax wasn't much different. 
// Had to remember parentheses for the conditional statement.

// #9

// var groceries = ["cheese", "wine", "milk", "eggs"]

// for (var x=0; x < groceries.length; x++){
//   console.log("I need some " + groceries[x]);
// }

// alert("Done shoppin!");


// #10

// thisGuy = {name: "Eric", age: 28, gender: "male", hair: "dark brown", eyes: "hazel", sign: "Capricorn"};

// console.log("String manipulation. What a bear. Here we go. I'm " + thisGuy.name + ", and I'm a " + thisGuy.gender + " with " + 
// 	thisGuy.hair + " hair and " + thisGuy.eyes + " eyes. In case it matters, my sign is " + thisGuy.sign + ".");

//#11 // # Complete the next 4 methods together

// ***************INCOMPLETE

// def create_header(my_name)
//     # TODO: Create a h1 header with the person's name in it
//     # The input my_name is a string
//     # return the image tag as a string
//     # Note that you're printing the html code inside of a string
// end

// var create_header(my_name) = function(){
// 	console.log("<h1> " + my_name + " </h1>");
// 	return "<img>"; 
// };

// def create_image(image_file)
//     # TODO: Create an image tag with the image_file being the source
//     # The input image_file is a string
//     # return the image tag as a string
// end

// def create_paragraph(age, gender, job)
//     # TODO: Create a paragraph tag using the arguments age, gender, and job
//     # The input age is an integer and the inputs gender and job are strings
//     # return the tag as a string
// def create_profile(name, age, gender, job, image_file)
//     # TODO: By calling the above 3 methods, print out the person's profile information
// end




// #16 

// Select an h1 header
// $('h1')

// Select all the divs
// $('div')

// Select the first div
// $('div:first');

// Select the profile picture using it's class
// $('.profilepic')

// Select all nav-items using it's class
// $('.nav-item')

// Select an object using it's id
// $('#twitter-widget-0')

// Try 3 new types of selectors using this resource (JQuery Selectors)[http://www.w3schools.com/jquery/jquery_selectors.asp]
// Use .parent(), .children(), and .sibling() to grab elements near the one you've selected

// $('h1').parent();
// $('div').children();
// $('.nav').siblings();


// 17
// I'm tired of twitter. Use jQuery to select the twitter card and then hide it. (You can search how to hide an element using jQuery)
// $("#twitter-widget-0").hide();


// 18
// I actually don't like any of the .cards on this page. Hide them all!
// $('.card').hide();

// 19
// Wait, actually, I want the About Me section back. Make only that section reappear.
// $('.main').show();

// 20
// The About Me isn't too impressive... Replace the current text with something more informative. (using jQuery)
// $('.main').find("p").text("Ayyyoooooo I'm switchin this up right quick. Errbody in the square get a donut!");

// 21
// I forgot to add 1 last sentence to the About Me section! Without deleting the content that's already there, add on a sentence about how awesome your instructor is.
// $('.main').find("p").append("Teacher's awesome. Forgot his name, though.");

// 22
// In the previous exercise we selected the text in the About Me. Using that selector, insert another paragraph after this paragraph.
// $('.main').find("p").append("<p>I think I remembered it!...wait...nope.</p>");

// 23
// Twitter is starting to annoy me now... Instead of just hiding it, let's completely remove the twitter box.
// $("#twitter-widget-0").remove();

// 24
// Move the nav-item Blog to the bottom of the nav-item list. (This will require you to remove the element, save the removed element in a variable, insert the element after the 'Say Hello' item)
// var blogItem = $('.nav-items').children().first();
// blogItem.remove();
// $('.nav-items').append(blogItem)

// 25
// Clone the navbar and insert it after the About Me div.
// $('.nav-items').clone().insertAfter('.main')


// 26
// Change the width attribute of the profile picture.
// $('.profilepic').attr("width","100%");

// 27
// Show and hide are jQuery animations. You can have it perform the animation over a period of time. Have jQuery hide the twitter feed over 500ms
// $('#twitter-widget-0').hide(400);


// 28
// Find 3 more jQuery effects and use them
// $('#twitter-widget-0').fadeTo(500,0.5)
// $('#twitter-widget-0').fadeTo(500,0).delay(300).fadeTo(500,1);
// $('#twitter-widget-0').fadeOut(500);

// 32
// $(document).ready(function(){
// $('.main').click(function(){
// 	alert("Don't Touch Me.");
// 	});
// });

// 36
// $(document).ready(function(){
// $('.main').click(function(){
// 	$('<span>!</span>').appendTo('p');
// 	});
// });

// 37
// $(document).ready(function(){
// $('body').click(function(){
// 	$(this).addClass('bgchange');
// 	});
// });

// 38
// $('.main').click(function(){
// 	$(this).clone().insertAfter(this));
// 	});
// });

// 39
// $(document).ready(function(){
// 	$('.main').click(function(){
// 		$('body').click(function(){
// 		$('div').toggle();
// 		});
// 	});
// });

// 40

// Use 4 of these event handlers on this page: (events)[http://www.ryanjeffords.com/blog/entry/jquery-a-crash-course-for-beginners-part-3-handling-events-using-jquery]
// $(document).ready(function(){
// 	$(window).resize(function(){
// 		$('.main').append("<p>Yo this foo is resizing the window!!! Git him!</p>") 
// 	});
// });

// $(document).ready(function(){
// 	$('.main').dblclick(function(){
// 		$('p').hide()
// 	});
// });

// $(document).ready(function(){
// 	$('.main').mouseenter(function(){
// 		$(this).hide()
// 	});
// });

// $(document).ready(function(){
// 	$('.main').mouseover(function(){
// 		$('p').fadeOut()
// 	});
// });



// 41
// Create a form that takes an input of your email address and password.
// When you click the submit button (look up the submit event handler), validate the following:
// The email address and password are present
// Each are at least 8 characters
// The email has the @ sign and a period
// If the email address and password are not valid, insert a div at the top of the page that will contain a paragraph with an error text.
// Have the error text be descriptive about which error you ran into
// Style the error text to have a background color and a text color (of your choice)
// If everything is valid - have a similar div show up at the top.
// This message should say the user was successful and it should be formatted in a different manner than the error messages
// (Remember to prevent the submit button's default action)
// At this point, make sure you understand every line of code you wrote. Know how the data flow along with when each line of code is being executed. If you aren't sure, ask a neighbor or instructor.


// 		var hasError = false;
//         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

//         var emailaddressVal = $("#UserEmail").val();
//         if(emailaddressVal === '') {
//         	$("#UserEmail").after('<span class="error">Please enter your email address.</span>');
//             hasError = true;
//         }

//         else if(!emailReg.test(emailaddressVal)) {
//             $("#UserEmail").after('<span class="error">Enter a valid email address.</span>');
//             hasError = true;
// //         }
// 	});
// });



var emailEmpty = function(){
    $('.wrapper').after("<div><p>Yo, your email needs to be like, there.</p></div>")
};

var passwordEmpty = function(){
    $('.wrapper').after("<div><p>Yo, your password needs to be like, there.</p></div>")
};

// Each are at least 8 characters
$(document).ready(function(){
    // When you click the submit button (look up the submit event handler), validate the following:
    $('#btn-submit').click(function(event){
    	
        event.preventDefault();
    	
        var emailInput = $('#UserEmail').val();
    	var passwordInput = $("#UserPassword").val();

        // Remove any previous errors
        // var errors  = false
        $('.error').remove();
        
        $(this).nextUntil(':not(br)').remove();
        
        // The email address and password are present
    	if (emailInput == "") {
    		// errors == true;
            $('#UserEmail').after("<br /><span class='error'>Yo, your email has to be like, there.</span>");
    	}
        if (passwordInput == "") {
            // errors? == true;
            $('#btn-submit').after("<br /><span class='error'>Yo, your password has to be like, there.</span>");
        }

        // Each are at least 8 characters
        if (emailInput.length < 8) {
     //        errors? == true;
    		$('#UserEmail').after("<br /><span class='error'>Email needs to be at least 8 characters long</span>");
    	}
        if (passwordInput.length < 8) {
     //        errors? == true;
            $('#btn-submit').after("<br /><span class='error'>Password needs to be at least 8 characters long</span>");
        }

        // The email has the @ sign and a period
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (!emailReg.test(emailInput)) {
            $('#UserEmail').after("<br /><span class='error'>Email needs to be an ACTUAL F'N EMAIL!</span>");
        }
        if ($('.error').size() == 0) {
            $('#btn-submit').after("<br /><span class='success'>We good.</span>")
        }

// If everything is valid - have a similar div show up at the top.
// This message should say the user was successful and it should be formatted in a different manner than the error messages
// (Remember to prevent the submit button's default action)
// At this point, make sure you understand every line of code you wrote. Know how the data flow along with when each line of code is being executed. If you aren't sure, ask a neighbor or instructor.

    	
        // else if ( ($emailInput.indexOf('@') == -1) || ($emailInput.indexOf('.') === -1)
    	// 	) {
    	// 	var message = "not a valid email address- must include '@ and '.' symbols "
    	// errorMessage(message);
    	// }

    	// if ( $passwordInput == "") {
    	// 	var message = "Password needs to be at least 8 characters long";
    	// 	errorMessage(message);
    	// };

    	// if (!($emailInput == "") && !($emailInput.length < 8 && !($emailInput.indexOf('@') === -1) || 
    	// 	($emailInput.indexOf('.') === -1)) && !($passwordInput == "") && !($passwordInput.length < 8) ) {
    	// 	var message = "Success! All is good"; 
    	// 	successMessage(message);
    	// }
    });
});



//Home Cooked example
// $(document).ready(function(){
//     // $('div#error_message').hide();
//     $('#btn-submit').click(function(){
//         $('div#error_message').empty();
//         event.preventDefault();
//         if (document.getElementById("email").value == "") {
//             $('div#error_message').show().append("- Enter your email address")
//     });
// });








// With REGEX example from another site
// $(document).ready(function(){
//     $('#btn-submit').click(function() { 
//         $(".error").hide();
//         var hasError = false;
//         

//         var emailaddressVal = $("#UserEmail").val();
//         if(emailaddressVal == '') {
//             $("#UserEmail").after('<span class="error">Please enter your email address.</span>');
//             hasError = true;
//         }

//         else if(!emailReg.test(emailaddressVal)) {
//             $("#UserEmail").after('<span class="error">Enter a valid email address.</span>');
//             hasError = true;
//         }
// 	});
// });





// CODE REVIEW: Make sure your code is indented and legible. Break your code down into functions that have sensible names.
// 42
// Help other students accomplish what you've done!

// 43
// You've accomplished some pretty cool things. This may seem like small code, but you can chain these things together to make your portfolio look slick!

// ... on that note... Let's make your portfolio look slick by adding some JS/jQuery. You can finally do all the cool animations and such you wanted to the first week of class.


