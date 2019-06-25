$(document).ready(function() {
    //store audio element for music page
    var audioElement = document.createElement('audio');
    
    $("#myButton").addClass("buttonDisabled");
    //Controls button styling on input form
    $("input").change(function(){
        var isValid = validateInputs();
        if(isValid)  { 
            $("#myButton").removeClass("buttonDisabled");
            $("#myButton").addClass("buttonEnabled");
            
        }
        else {
            $("#myButton").removeClass("buttonEnabled");
            $("#myButton").addClass("buttonDisabled");
        }
      });
      $("tr").click( function () {
        var id = $(this).attr('id');
        autoFillForm(id);
      });
      $("#frontPageButton").click( function () {
        window.location.href = "file:///C:/Users/klabo/OneDrive/Documents/BUMETCS601/VS%20Code%20Projects/Assignment/Final%20Term%20Project/registration.html";
      });
      $("#people").change(function() {
          if($("#type").val() == "Group") {
            $("#cost").val(45 * $("#people").val()); 
          }
      });
      //reset # of people field to 1 for individuals
      $("#type").change(function() {
        if($("#type").val() == "Individual") {
            $("#people").val(1); 
          }
      });
      //display image with audio file
      $("li[id=sortableListLi]").click(function() {
        var test = $(this).text();
        var audioFile = $(this).data("audio");
        var imageFile = $(this).data("image");
        displayImage(audioFile,imageFile);
        
      });
      //when puppies page is loaded display first page
      $("#slideshow-container").ready(function() {
        showSlides(7);
      });

      $("#playmusic").mouseenter(function(){
        var audioFile = $("#displayedImage").data("audio");
        audioElement.setAttribute('src', audioFile);
        audioElement.play();
      });
      $("#playmusic").mouseleave(function(){
        audioElement.pause();
      });
      

});

// Make music list sortable
$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );

//modify dom element on 
function displayImage (audioFile, imageFile) {
    var htmlText = '<img class="paddingTopBottom" height="250" width="250" id="displayedImage" ' + 'data-audio="' + audioFile + '"' +  'src="images/' + imageFile + '"/>';
    $("#playmusic").html(htmlText);

}

function validateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
  {
    return (true)
  }
    return (false)
}

//calculate cost field
function autoFillForm(id) {
    if(id == "slI") {
        $("#type").val("Individual");
        $("#cost").val(60);
    }
    if(id == "slG") {
        $("#type").val("Group");
        $("#cost").val(45 * $("#people").val());
        
    }
    if(id == "tlI") {
        $("#type").val("Individual");
        $("#cost").val(40);
    }
    if(id == "tlG") {
        $("#type").val("Group");
        $("#cost").val(35 * $("#people").val());
    }

}



function validateForm() {
    var isValid = validateInputs();
    if(isValid)  { 
        return true;
    } else {
        return false;
    }
    
    
}

function validateName (input) {
    if(document.getElementById(input).value.length > 0) {
        return true;
    }
    return false;

}

function validateInputs () {
    var validFirstname = validateName("firstName");
    var validLastname = validateName("lastName");
    
    var validEmail = validateEmail(document.getElementById("email").value);
    if(validEmail && validFirstname && validLastname) {
        return true;
    }
    return false;
}


// function playAudio() {
// //   var audioFile = $("#displayedImage").data("audio");
// //   currentAudio1 = new Audio(audioFile);
//   audioElement.play();
// }


// // function pauseAudio() {
// //     currentAudio.pause();
// // }

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


function chaseMouse() {
    $(document).mousemove(function(e){
        $("#image").stop().animate({left:e.pageX, top:e.pageY});
    });
}


