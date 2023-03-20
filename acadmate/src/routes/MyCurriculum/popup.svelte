<script>
    export let showPopup = false;
</script>
  
{#if showPopup}
  <div class="backdrop" on:click|self>
    <div class="popup">
      <slot></slot>
    </div>
  </div>
{/if}
  
  <style>
    .backdrop{
      width: 100%;
      height: 100%;
      position: fixed;
    }
    .popup{
      padding: 50px;
      border-radius: 40px;
      max-width: 300px;
      margin: 10% auto;
      text-align: left;
      background: white;
      z-index: 5;
    }
  </style>
  