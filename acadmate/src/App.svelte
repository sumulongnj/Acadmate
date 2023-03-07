<script>
	export let name;
</script>

<main>
	<div class="topnav">
		<!-- Substitute links below with image elements. -->
		<a href="Acadmate">Acadmate</a>
		<a href="Settings" style="float: right">Settings</a>
		<a href="Profile" style="float: right">Profile</a>
	</div>
	<div class="sidenav">
		<ul>
			<li><a href="Dashboard">Dashboard</a></li>
			<li><a href="My-Curriculum">My Curriculum</a></li>
			<li><a href="Grades">Grade Alerts</a></li>
			<li><a href="Requirements">Requirements</a></li>
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
		padding: 0;
		width: 200px;
	}
	.sidenav li a {
		display: block;
		color: #898989;
		padding: 8px 16px;
		text-decoration: none;
	}
	.sidenav li a:hover {
		background-color: #ac4949;
		color: white;
	}
</style>