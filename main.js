var language = "C/C++";
var installer = "HDD/SSD";

var sum_1 = document.getElementById("language");
var sum_2 = document.getElementById("installing");


function cpp_c(){
  sum_1.innerHTML = "C/C++";
  language = "C/C++";
}

function js(){
  sum_1.innerHTML = "Java Script";
  language = "js";
}

function hdd(){
  sum_2.innerHTML = "Hard Disk / Solid Strate Drive";
  installer = "HDD/SSD";
}

function server(){
  sum_2.innerHTML = "Servers";
  installer = "https";
}


function install(){
  if (language === "C/C++"){
    if (installer === "HDD/SSD"){
      document.getElementById("install").innerHTML = "<a href='gws_7_launcher.zip' id='install_a'>Downloading OS...</a>";
      setTimeout(function(){
        document.getElementById("install_a").click();
      }, 1000);
      setTimeout(function() {
        document.getElementById("install").innerHTML = " ";
      }, 2000);
      
      setTimeout(function() {
        alert("Unable to install GWS 5 on your disk your current os is stopping the file download and download/gws_5_launcher.zip not found . please select Java Script and Servers for install the gws 5");
      }, 2000);
    }
    else {
      alert("Please select Hard Disk and Solid Strate Drive because C/C++ can't boot on Servers");
    }
  }
  
  if (installer === "HDD/SSD"){
    if (language === "C/C++"){
      
    }
    else {
      alert("Please select C/C++ because Java Script can't boot and extract zip archeives due to be a high level language");
    }
  }
  
  
  if (language === "js"){
    if (installer === "https"){
      window.open("upd.html");
    }
    else {
      alert("Please select Servers because Java Script can't boot os from your hard drive");
    }
  }
  
}