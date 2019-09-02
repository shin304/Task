<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8>
  <title></title>
	<meta charset="utf-8" />
</head>
<body>
  <div id="call"></div>
  <script type="text/javascript">
      window.onload = function () {
        target = document.getElementById("call");
        target.innerHTML = "Hello";
        target.style.fontSize = "24px";
        target = document.getElementsByClassName("call2");
        console.log(target);
        target[0].innerHTML = "Hello";
        target[0].style.fontSize = "24px";
      }
    </script>
</body>
</html>