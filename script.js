document.addEventListener("DOMContentLoaded", function () {
  const fanForm = document.getElementById("fanForm");

  if (fanForm) {
    fanForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("fanName").value.trim();
      const legend = document.getElementById("favoriteLegend").value;
      const comments = document.getElementById("fanComments").value.trim();
      const message = document.getElementById("formMessage");

      if (name === "" || legend === "") {
        message.textContent = "Please enter your name and choose your favorite legend.";
        message.style.color = "red";
      } else {
        message.textContent =
          "Thanks, " + name + "! Your favorite Manchester United legend is " + legend + ". Glory Glory Man United!";
        message.style.color = "green";

        fanForm.reset();
      }
    });
  }
});

function showFanMessage() {
  const specialMessage = document.getElementById("specialMessage");

  specialMessage.textContent =
    "Manchester United is more than a club. It is history, passion, and tradition.";
}
