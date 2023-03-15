<script>
    // import '../+layout.svelte';
    import Layout from '../+layout.svelte';
	import { page } from "$app/stores";

	$: routeId = $page.route.id;

</script>
<main>
	<div class="sidenav">
		<ul>
			<li>
				<a href="/" class="btn inactive">
					<img src="/dashboard.svg" alt="dash" class="icon">
					Dashboard
				</a>
			</li>
			<li>
				<a href="/MyCurriculum" class="btn inactive">
					<img src="/curriculum.svg" alt="curriculum" class="icon">
					My Curriculum
				</a>
			</li>
			<li>
				<a href="/Grades" class="btn inactive">
					<img src="/grade.svg" alt="grade" class="icon">
					Grades
				</a>
			</li>
			<li>
				<a href="/GradeAlerts" class="btn active">
					<img src="/alert.svg" alt="alert" class="icon current">
					Grade Alerts
				</a>
			</li>
			<li>
				<a href="/Requirements" class="btn inactive">
					<img src="/requirement.svg" alt="requirement" class="icon">
					Requirements
				</a>
			</li>
		</ul>
	</div>

	<slot></slot>
</main>

<style>
	/* Side Navigation Bar*/
	.sidenav {
		height: 100%;
		width: 240px;
		top: 0;
		left: 0;
		background-color: #ffffff;
		overflow-x: hidden;
		padding-top: 60px;
		position: fixed;
		font-weight: 600;
		margin-top: 5px;
		font-size: 15px;
	}
	
	.sidenav ul {
		list-style-type: none;
		margin: 0;
		margin-left: 25px;
		padding: 0;
		width: 190px;
	}
	.sidenav li a {
		display: block;
		padding: 12px 20px;
		text-decoration: none;
		margin-top: 15px;
		margin-bottom: 10px;
		border-radius: 10px;
		/* color: #898989; */
	}
	.icon {
		width: 18px;
		padding: 0px 10px 0px 8px;
		float:left;
		margin-top:1px;
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
	.sidenav li a:hover img, .current {
		filter: brightness(200%);
	}
</style>