function genQR()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrtext").value;
            var mysize=document.getElementById("size").value;
            if (mytext!==""){
                myimg.src=gapi+String(mysize)+"x"+String(mysize)+"&chl="+mytext;
            }
            else
            {
                alert("Please Enter Text");
            }
        }
function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown menu if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }