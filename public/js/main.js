document.addEventListener("DOMContentLoaded", () => {
  const ticketsInput = document.getElementById("tickets");
  const amountInput = document.getElementById("amount");
  const prizeSpan = document.getElementById("prizeAmount");
  const midDayPrizeSpan = document.getElementById("midDayPrizeAmount");
  const ticketError = document.getElementById("ticketError");
  const midDayAmountInput = document.getElementById("midDayAmount");

  const ticketsSold = parseInt(document.getElementById("ticketsSold")?.value || 0);
  const userTickets = parseInt(document.getElementById("userTickets")?.value || 0);

  if (ticketsInput) {
    ticketsInput.addEventListener("input", () => {
      let tickets = parseInt(ticketsInput.value) || 0;

      if (tickets > 5 || userTickets + tickets > 5 || ticketsSold + tickets > 80) {
        ticketError.classList.remove("d-none");
        ticketsInput.value = Math.min(5, 80 - ticketsSold);
      } else {
        ticketError.classList.add("d-none");
      }
    });
  }

  if (amountInput) {
    amountInput.addEventListener("input", () => {
      const amount = parseInt(amountInput.value) || 0;
      prizeSpan.innerText = (amount >= 1 && amount <= 100) ? amount * 70 : 0;
    });
  }

  if (midDayAmountInput) {
    midDayAmountInput.addEventListener("input", () => {
      const amount = parseInt(midDayAmountInput.value) || 0;
      midDayPrizeSpan.innerText = (amount >= 2 && amount <= 200) ? amount * 40 : 0;
    });
  }

  /* ----------------------------
     Number Selection Logic
  ----------------------------- */
  const form = document.getElementById('numberGameForm');
  const buttons = document.querySelectorAll('.number-btn');
  const hiddenInput = document.getElementById('chosenNumber'); // ✅ ADD THIS

  let selectedNumber = null;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      selectedNumber = btn.dataset.number;
      hiddenInput.value = selectedNumber; // ✅ IMPORTANT
    });
  });

  /* ----------------------------
     Prevent Submit if No Number
  ----------------------------- */
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!hiddenInput.value) {
        e.preventDefault();
        alert('Please select a number before placing your bet.');
      }
    });
  }

});