<html>
<head>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container text-center">
<h2>Make your URL shoppable with magic</h2>
  <div class="form-group">
    <label for="exampleInputEmail1">You're website's URL:</label>
    <input type="url" class="form-control" id="shoppableUrl" placeholder="Enter URL" ONCHANGE="document.getElementById('demoFrame').src = 'http://' + location.hostname + '/magic/demo/pr/index.php?demo_url=' + this.value">
  </div>
</div>
<iframe id="demoFrame" src='/magic/demo/pr/index.php?demo_url=http://www.google.com' width="100%" height="100%"></iframe>
</body>
</html>