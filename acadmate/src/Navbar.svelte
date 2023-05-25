<script>
	// import { page } from "$app/stores";


    import Router, {location, link} from 'svelte-spa-router';
	import Dashboard from './pages/Dashboard.svelte';
	import MyCurriculum from './pages/MyCurriculum.svelte'; 
	import Grades from './pages/Grades.svelte'; 
	import GradeAlerts from './pages/GradeAlerts.svelte';
	import Requirements from './pages/Requirements.svelte'; 
    import Semester from './pages/my-curriculum/Semester.svelte';
	import HowToUse from './pages/HowToUse.svelte';

    const routes = {
		'/': Dashboard,
		'/my-curriculum': MyCurriculum,
		'/grades': Grades,
		'/grade-alerts': GradeAlerts,
		'/requirements': Requirements,
		'/my-curriculum/semester': Semester,
		'/how-to-use': HowToUse
	}

	const links = [
		{
			href: "/",
			icon: "./images/dashboard.svg",
			text: "Dashboard",
			id: "/(dashboard)"
		},
		{
			href: "#/my-curriculum",
			icon: "./images/curriculum.svg",
			text: "My Curriculum",
			id: "/my-curriculum"
		},
		{
			href: "#/grades",
			icon: "./images/grade.svg",
			text: "Grades",
			id: "/grades"
		},
		{
			href: "#/grade-alerts",
			icon: "./images/alert.svg",
			text: "Grade Alerts",
			id: "/grade-alerts"
		},
		{
			href: "#/requirements",
			icon: "./images/requirement.svg",
			text: "Requirements",
			id: "/requirements"
		}
	];
</script>
<main>
	<div class="topnav">
		<!-- Substitute links below with image elements. -->
		<a href="/">
			<img src="./images/logo_with_title.png" alt="logo" class="logo">
		</a>
		<a href="#/how-to-use" style="float: right">How To Use</a>
	</div>
	
	<div class="sidenav">
		<ul>
		  {#each links as link}
			<li>
			  <a href={link.href}
            
                class = "inactive">
				<img src={link.icon} alt={link.text} class="icon">
				{link.text}
			  </a>
			</li>
		  {/each}
		</ul>
	  </div>
	<slot></slot>
    <Router {routes} />
</main>

<style>
	/* Top Nagivation Bar */
	.topnav {
		height: 55px;
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
		padding: 15px 16px;
		text-decoration: none;
		font-size: 17px;
	}
	.logo {
		width: 145px;
		margin-left: 15px;
		margin-top: -7px;
	}
</style>