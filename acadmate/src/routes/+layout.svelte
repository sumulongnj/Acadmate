<script>
    import '../global.css';
	import { page } from "$app/stores";

	$: routeId = $page.route.id;

</script>
<main>
	<div class="topnav">
		<!-- Substitute links below with image elements. -->
		<a href="/">
			<img src="/logo_with_title.png" alt="logo" class="icon">
		</a>
		<a href="/" style="float: right">Settings</a>
		<a href="/" style="float: right">Profile</a>
	</div>
	<slot></slot>
</main>

<style>
	main {
		height: 100%;
	}
	/* Top Nagivation Bar */
	.topnav {
		height: 55px;
		width: 100%;
		background-color: #ac4949;
		overflow: hidden;
		position: relative;
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

	.icon {
		width: 145px;
		margin-left: 15px;
		margin-top: -7px;
	}

</style>