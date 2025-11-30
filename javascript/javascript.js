
let correctLogin = false;
let correctPassword = false;
let cancelledLogin = false;
const username = "Admin";
const password = "Password"

while (!correctLogin && !cancelledLogin) {

  let enteredUsername = prompt("Enter Userneme: ")

  if (enteredUsername === null) {
    cancelledLogin = true;
    alert("Cancelled");
  }

  else if (enteredUsername === username) {
    while(!correctPassword && !cancelledLogin) {

      let enteredPassword = prompt("Enter Password: ")

      if (enteredPassword === null) {
        cancelledLogin = true;
        alert("Cancelled");
      }
      else if (enteredPassword === password) {
        correctLogin = true;
        correctPassword = true;
        alert("Welcome!");
      }
      else {
        alert("Wrong Password");
      }
    }
  }

  else {
    alert("Wrong Username");
  }
}

// const randomString = `The revolution will 
// not be televised.`;
// alert(randomString);

// const badString = randomString;
// alert(badString);

// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// alert(single);
// alert(double);
// alert(backtick);

// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);


// const bigmouth = 'I\'ve got no right to take my place…';
// alert(bigmouth);

// let firstName = "John";
// let surname = "Doe";
// alert(firstName + " " + surname)

// let age = 11;
// alert(age);

// age = 54;
// alert(age);

// const pi = 3.14;

// alert(pi);

// alert((3 + 2) - 76 * (1 + 1));

// alert(23 + 97);
// alert(23 + 97 + 12 + 42 + 93 + 174);
// alert((4 + 6 + 9) / 77);

// let a = 10;
// alert(a);

// a = 25;
// alert(a);

// let b = 7 * a;
// alert(b);

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;

// alert(percentage)