//JavaScript 1 - Responsiveness of Nav bar/Menu bar in all pages
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //Javascript 2 - To validate the form in terms of first name and last name
  function validateform()
  {
    var x = document.forms["myform"]["firstname"].value;
    var y = document.forms["myform"]["lastname"].value;

    if(x == null || x == "")
    {
      alert("First Name can't be blank");
      return false;
    }
    else if(y == null || y == "")
    {
      alert("Last Name can't be blank");
      return false;
    }
  }

          //JavaScript 3 - To create an image carousel on Page CyberPunk 2077
          /*Creating an Image Carousel when fades and change images */
            var image_array = ["988021.jpg", "Sis2.jpg", "Dragon.png", "Metro Attack.jpg"];
            var image_path = "Images/";

            var counter = 0;

            function rotator()
            {
               
               path = image_path + image_array[counter];
          
                counter = counter + 1;
                
                if(counter == image_array.length-1)
                {
                    counter = 0;
                }
                console.log("Here!!");

                setTimeout(rotator, 5000);
                transition(path);
            }
            
            function transition(path)
            {
                $('#carousel').fadeOut(500,function()
                {
                    $('#carousel').attr("src", path).stop().fadeIn(700); //fade in the new content to the div
                });
            }


            //JavaScript 4 - To create an image rotator for Page Assassisn Creed 
            /*Creating an Image Rotator*/
            var pict_array = ["Assassins Creed Edited 2.jpg", "Assassins Creed Edited.png"];
            var counter = 0;

            function rotatePics()
            {
                document.getElementById("rotator").src="Images/" + pict_array[counter];
                /*alert(pict_array[counter]);*/
                counter++;
                setTimeout(rotatePics, 5000);
                if(counter == pict_array.length) {counter = 0;}
            }

    
                      
              

