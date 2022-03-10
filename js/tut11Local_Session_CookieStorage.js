console.log("Learning local storage");
localStorage.setItem('Name', 'shilpa');
localStorage.setItem('address', 'Pune');

//localStorage.clear();  //to ckear local storage
localStorage.getItem('Name');
localStorage.removeItem('Name');

//set array in local storage
let vegArr = ['bhendi', 'ginger', 'lauki'];
localStorage.setItem('Vegies', vegArr);
//we cannot able to retrieve array as is from localstorage, as it stroes as string
//This can be solves using JSON. JSON.stringify to convert to array
//Json.parse to get back json object
localStorage.setItem('vegiesJson', JSON.stringify(vegArr));

//JSON parse will return proper array, where we can iterate using foreach or push data into it
console.log(JSON.parse(localStorage.getItem('vegiesJson')));


//Another thing is session storage: Session storage data gets destoroyed after closing browser
//whereas localstorage data remains forever, it do not have nay expiry
sessionStorage.setItem('School', 'snbp');
sessionStorage.setItem('Address','Rahatani');
//similar to local strage we can save array usinh JSON 

//Setting cookie: Cookies let you store user information in web pages.
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //How to get cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //Check is cookie is present
  function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }