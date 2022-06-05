//Function that change light to dark mode and saved to local storage
let theme = localStorage.getItem("data-theme");

const checkbox = document.getElementById("switch");

const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  console.log("I give you dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
  console.log("I give you light");
};

if (theme === "dark") {
  changeThemeToDark();
}

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

//Functions that stored valued from localstorage

function userNameInput() {
  var Name = document.getElementById("name").value;
  var result = document.getElementById("result");

  result.textContent = "Hello, " + "" + Name + "👋";

  window.localStorage.setItem("Name", Name);
  console.log(Name);
}
submitButton.addEventListener("click", userNameInput);

//Functions that removes the stored valued from localstorage

function deletInput() {
  window.localStorage.removeItem("Name");
  location.reload();
}
deleteButton.addEventListener("click", deletInput);

// function that saved stored value from local storage on page load
window.onload = function () {
  let Name;
  let result;

  if (window.localStorage.getItem("Name") == null) {
    Name = "";
    result = "";
  } else {
    Name = window.localStorage.getItem("Name");
    result = document.getElementById("result");
    result.textContent = "Hello, " + "" + Name + "👋";
  }

  btn1();
};
