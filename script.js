function validateForm(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Ganti dengan validasi yang sesuai dengan kebutuhan Anda
  if (username === "admin" && password === "admin123") {
    alert("Login berhasil!");
    // Redirect ke halaman landing page jika login berhasil
    window.location.href = "landing_page.html";
  } else {
    document.getElementById("error-msg").innerText = "Username atau password salah!";
  }
}

