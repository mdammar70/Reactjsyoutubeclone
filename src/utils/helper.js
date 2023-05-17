const indianNames = [
  "Aarav",
  "Aarya",
  "Aashna",
  "Advait",
  "Aishwarya",
  "Ananya",
  "Anjali",
  "Arjun",
  "Diya",
  "Eshaan",
  "Ishaan",
  "Jhanvi",
  "Kabir",
  "Kavya",
  "Krishna",
  "Maanvi",
  "Navya",
  "Rahul",
  "Ria",
  "Shreya",
];

export function generateRandomName() {
  return indianNames[Math.floor(Math.random() * indianNames.length)];
}

const messages = [
  "Hey 👋",
  "Sup?",
  "Game was wild 🤯",
  "New restaurant is bomb 🍔",
  "Latest episode was hilarious 😂",
  "Busy day today 😴",
  "Can't wait for the weekend 🎉",
  "Just got back from the gym 💪",
  "Feeling great today 🌞",
  "What's on your mind? 🤔",
  "Just had a cup of coffee ☕️",
  "Going to see a movie tonight 🎥",
  "Love this weather ☀️",
  "Need a vacation 🌴",
  "Pizza for dinner tonight 🍕",
  "Ready for bed 😴",
  "Hanging out with friends tonight 🍻",
  "Have a good day! 👍",
  "So tired today 😩",
  "What are you up to? 🤷‍♂️",
];

export function generateRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

