const STARTING_DATA = {
  kakapo: {
    maxAdults: 10,
    maxChildren: 30,
    currentAdults: 5,
    currentChildren: 6,
  },
  kereru: {
    maxAdults: 10,
    maxChildren: 30,
    currentAdults: 5,
    currentChildren: 6,
  },
  pukeko: {
    maxAdults: 10,
    maxChildren: 30,
    currentAdults: 5,
    currentChildren: 6,
  },
};

const bookingHistory = [];

const returnDayOfWeek = (day) => {
  return new Date(day).toString().split(" ")[0];
};

const handleBookingSubmit = () => {
  let userDay = returnDayOfWeek(document.getElementById("bookingDay").value);
  let userChoiceChalet = document.getElementById("chalet").value;
  let numOfAdults = document.getElementById("adults").value;
  let numOfChildren = document.getElementById("children").value;

  if (
    STARTING_DATA[userChoiceChalet].currentAdults + parseInt(numOfAdults) >
    STARTING_DATA[userChoiceChalet].maxAdults
  ) {
    return alert("Can not book more than the max number of adults");
  }

  if (
    STARTING_DATA[userChoiceChalet].currentChildren + parseInt(numOfChildren) >
    STARTING_DATA[userChoiceChalet].maxChildren
  ) {
    return alert("Can not book more than the max number of children");
  }

  if (userDay === "Sat" || userDay === "Sun") {
    return alert("You can not chose a day on the weekend.");
  }

  alert("success");

  bookingHistory.push([numOfAdults, numOfChildren, userChoiceChalet]);
};
document
  .getElementById("Main__Book__Form")
  .addEventListener("submit", handleBookingSubmit);
