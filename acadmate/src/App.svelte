<script>
	var header = document.getElementById("myDIV");
	var btns = document.getElementsByClassName("btn");
	
</script>

<main>
	<div class="topnav">
		<!-- Substitute links below with image elements. -->
		<a href="/">Acadmate</a>
		<a href="Settings" style="float: right">Settings</a>
		<a href="Profile" style="float: right">Profile</a>
	</div>
	<div class="sidenav">
		<ul>
			<li><a href="/" class="btn active">Dashboard</a></li>
			<li><a href="/" class="btn inactive">My Curriculum</a></li>
			<li><a href="/" class="btn inactive">Grade Alerts</a></li>
			<li><a href="/" class="btn inactive">Requirements</a></li>
		</ul>
	</div>
</main>

<style>
	main {
		height: 100%;
	}
	/* Top Nagivation Bar */
	.topnav {
		height: 50px;
		width: 100%;
		background-color: #ac4949;
		overflow: hidden;
		position: fixed;
		z-index: 1;
		box-shadow: 0px 5px 10px lightgray;
	}
	.topnav a {
		float: left;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}

	/* Side Navigation Bar*/
	.sidenav {
		height: 100%;
		width: 200px;
		top: 0;
		left: 0;
		background-color: #ffffff;
		overflow-x: hidden;
		padding-top: 60px;
		position: fixed;
		font-weight: 600;
	}
	
	.sidenav ul {
		list-style-type: none;
		margin: 0;
		margin-left: 25px;
		padding: 0;
		width: 150px;
	}
	.sidenav li a {
		display: block;
		padding: 8px 16px;
		text-decoration: none;
		margin-top: 10px;
		margin-bottom: 10px;
		border-radius: 10px;
		/* color: #898989; */
	}
	.btn:hover {
		background-color: #ac4949;
		color: white;
	}
	.active {
		background-color: #ac4949;
		color: white;
	}

	.inactive {
		background-color: #ffffff;
		color: #898989;
	}
</style>