// Write your code in this file!
// const currentUser = "Grace Hopper";
// let welcomeMessage = "Welcome to Flatbook,";
// welcomeMessage = "Welcome to Flatbook, ${currentUser}";
// welcomeMessage = "welcome to flatbook, Grace Hopper!";

// let excitedWelcomeMessage = "WELCOME TO FLATBOOK,";
// excitedWelcomeMessage = "WELCOME TO FLATBOOK, GARCE HOPPER";
// excitedWelcomeMessage = "WELACOME TO FLATBOOK, GRACE HOPPER!";

// let shortGreeting = "Welcome,";
// shortGreeting = "Welcome, Grace";
// shortGreeting = "Welcome, Grace!";

const currentUser = "Grace Hopper";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
