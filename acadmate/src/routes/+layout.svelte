<script>
    import '../global.css';
	import { page } from "$app/stores";

	const links = [
		{
			href: "/",
			icon: "/dashboard.svg",
			text: "Dashboard",
			id: "/(Dashboard)"
		},
		{
			href: "/MyCurriculum",
			icon: "/curriculum.svg",
			text: "My Curriculum",
			id: "/MyCurriculum"
		},
		{
			href: "/Grades",
			icon: "/grade.svg",
			text: "Grades",
			id: "/Grades"
		},
		{
			href: "/GradeAlerts",
			icon: "/alert.svg",
			text: "Grade Alerts",
			id: "/GradeAlerts"
		},
		{
			href: "/Requirements",
			icon: "/requirement.svg",
			text: "Requirements",
			id: "/Requirements"
		}
	];
</script>
<main>
	<div class="topnav">
		<!-- Substitute links below with image elements. -->
		<a href="/">
			<img src="/logo_with_title.png" alt="logo" class="logo">
		</a>
		<a href="/" style="float: right">Settings</a>
		<a href="/" style="float: right">Profile</a>
	</div>
	
	<div class="sidenav">
		<ul>
		  {#each links as link}
			<li>
			  <a href={link.href}
				 class:active={$page.route.id === link.id}
				 class:inactive={$page.route.id !== link.id}>
				<img src={link.icon} alt={link.text} class="icon">
				{link.text}
			  </a>
			</li>
		  {/each}
		</ul>
	  </div>
	<slot></slot>
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
		box-shadow: 0px 5px 10px lightgray;
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