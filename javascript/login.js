document.getElementById("login-button").addEventListener("click", () => {
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  const pinInput = document.getElementById("input-pin");
  const pinNumber = pinInput.value;
  console.log(pinNumber);
  if (contactNumber == "01234567890" && pinNumber == "1234") {
    // alert('login success')
    window.location.assign("/homepage.html");
  } else {
    // alert ("login failed")
  }
});
