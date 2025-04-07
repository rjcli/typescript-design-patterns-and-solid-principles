const now = new Date();

// Get the current year, month and date.
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

const formatWithLeadingZero = (val: number) => {
  return val < 10 ? `0${val}` : val;
};

console.log(
  `Today is ${currentYear}-${formatWithLeadingZero(currentMonth)}-${formatWithLeadingZero(currentDate)}.`,
);

// Format the current date using the built-in toLocaleDateString method
const formattedDate = now.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

console.log(`Today is ${formattedDate}.`);

// Calculate the number of days until my next birthday.
const myBirthday: Date = new Date(currentYear, 11, 31);

const milliSecondsPerDay = 24 * 60 * 60 * 1000;
const daysUntilMyBirthday = Math.ceil(
  (myBirthday.getTime() - now.getTime()) / milliSecondsPerDay,
);

console.log(`There are ${daysUntilMyBirthday} days until my next birthday.`);
