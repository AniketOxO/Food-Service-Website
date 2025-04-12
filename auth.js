document.addEventListener("DOMContentLoaded", () => {
  const switchToSignUp = document.getElementById("switchToSignUp");
  const switchToSignIn = document.getElementById("switchToSignIn");
  const signInContainer = document.querySelector(".sign-in-container");
  const signUpContainer = document.querySelector(".sign-up-container");

  // Toggle between Sign In and Sign Up forms
  switchToSignUp.addEventListener("click", () => {
    signInContainer.classList.add("hidden");
    signUpContainer.classList.remove("hidden");
  });

  switchToSignIn.addEventListener("click", () => {
    signUpContainer.classList.add("hidden");
    signInContainer.classList.remove("hidden");
  });

  // Sign In Logic
  const signInForm = document.getElementById("signInForm");
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    // Placeholder authentication logic
    if (localStorage.getItem(email) === password) {
      alert("Sign In Successful!");
      window.location.href = "index.html"; // Redirect to homepage
    } else {
      alert("Invalid Email or Password!");
    }
  });

  // Sign Up Logic
  const signUpForm = document.getElementById("signUpForm");
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    // Save user data to localStorage
    if (!localStorage.getItem(email)) {
      localStorage.setItem(email, password);
      alert(`Welcome, ${name}! Your account has been created.`);
      window.location.href = "index.html"; // Redirect to homepage
    } else {
      alert("Email already exists. Please Sign In.");
    }
  });
});




// Sign In Logic
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  if (localStorage.getItem(email) === password) {
    localStorage.setItem("currentUser", email.split("@")[0]); // Store username
    alert("Sign In Successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid Email or Password!");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter");
  const productItems = document.querySelectorAll(".product-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons and add to the clicked one
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter products based on the category
      const filter = button.getAttribute("data-filter");
      productItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
