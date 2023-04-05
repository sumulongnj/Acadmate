<script>

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

</style>