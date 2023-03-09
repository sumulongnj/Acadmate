<script>
    // import '../+layout.svelte';
    import Layout from '../+layout.svelte';
	import { page } from "$app/stores";

	$: routeId = $page.route.id;

</script>
<main>
	<div class="sidenav">
		<ul>
			<li><a href="/" class="btn inactive">Dashboard</a></li>
			<li><a href="/MyCurriculum" class="btn inactive">My Curriculum</a></li>
			<li><a href="/Grades" class="btn inactive">Grades</a></li>
			<li><a href="/GradeAlerts" class="btn inactive">Grade Alerts</a></li>
			<li><a href="/Requirements" class="btn active">Requirements</a></li>
		</ul>
	</div>
    
	<slot></slot>
</main>

<style>
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