// Sample user objects
var users = [
	{ name: "Georgia", age: 25 },
	{ name: "Paula", age: 30 },
	{ name: "Louise", age: 40 },
	{ name: "Marta", age: 28 },
	{ name: "Fernando", age: 41 }
];


function addUserToPage(user) {
	// create a div element for the user
	var userElement = document.createElement("div");
	userElement.classList.add("user");
	userElement.classList.add("user-" + user.name);

	// add the user name
	var userName = document.createElement("h2");
	userName.classList.add("user-name");
	userName.textContent = user.name;
	userElement.appendChild(userName);

	var userAge = document.createElement("p");
	userAge.classList.add("user-age");
	userAge.textContent = "Age: " + user.age;
	userElement.appendChild(userAge);

	// add the user to the page
	var userListElement = document.querySelector("#userDisplay");
	userListElement.appendChild(userElement);
}

users.forEach(addUserToPage);





var searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
var searchValue = "";

// check what search term has been entered
function updateSearchValue() {
	// trim() removes any spaces before/after the input
	// toLowerCase() makes the entered text lowercase
	searchValue = searchInput.value.trim().toLowerCase();

	console.log("You searched for: " + searchValue);

	// show or hide // class created previously
	var userElements = document.querySelectorAll(".user");
	userElements.forEach(showOrHideUser);
}


function showOrHideUser(userElement) {
	// if no search value is set, show the user
	if (searchValue.length === 0) {
		userElement.classList.remove("hide");

		// if a search term has been set,
		// only display the user if its name matches the search term
	} else {

		// get the name of the user from its user-name element
		var userName = userElement.querySelector(".user-name").textContent.toLowerCase();
		if (userName.includes(searchValue)) {
			userElement.classList.remove("hide");
		} else {
			userElement.classList.add("hide");
		}
	}
}


//find the button will be clicked
let button1 = document.querySelector('.button1');

//create function which shows users more that 30 years old
function showUsersMoreThanThirty() {
	let ageTreshold = 30

	//filter users
	let filteredUsers = users.filter(function (user) {
		return user.age > ageTreshold;
	});

	// Display filtered users here
	let userDisplayArea = document.querySelector('.showUserByAge');

	userDisplayArea.innerHTML = ''; // Clear previous content

	filteredUsers.forEach(function (user) {
		//create div which hold filtered users
		let userDiv = document.createElement('div');
		userDiv.classList.add("userMoreThan30")
		//display users
		userDiv.textContent = user.name + " - " + user.age + " years old";
		userDisplayArea.appendChild(userDiv);
	});

}

button1.addEventListener("click", showUsersMoreThanThirty)


