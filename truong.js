<!DOCTYPE html>
<html>
<body>

<h2 id="greeting">Xin chào!</h2>
<button onclick="changeGreeting()">Nhấn tôi</button>

<script>
function changeGreeting() {
  document.getElementById("greeting").innerText = "Chào mừng bạn đến với JavaScript!";
}
</script>

</body>
</html>
