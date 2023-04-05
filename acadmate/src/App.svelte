<script>
	import Router, {location, link} from 'svelte-spa-router';
	import Dashboard from './pages/Dashboard.svelte';
	import MyCurriculum from './pages/MyCurriculum.svelte'; 
	import Grades from './pages/Grades.svelte'; 
	import GradeAlerts from './pages/GradeAlerts.svelte';
	import Requirements from './pages/Requirements.svelte'; 

	const routes = {
		'/': Dashboard,
		'/my-curriculum': MyCurriculum,
		'/grades': Grades,
		'/grade-alerts': GradeAlerts,
		'/requirements': Requirements
	}
</script>

<main>
	<button><a href="/">Dashboard</a></button>
	<button><a href="#/my-curriculum">My Curriculum</a></button>
	<button><a href="#/grades">Grades</a></button>
	<button><a href="#/grade-alerts">Grade Alerts</a></button>
	<button><a href="#/requirements">Requirements</a></button>
	<Router {routes} />
</main>

<style>
	
</style>