<script>
    export let showPopup = false;
    export let showConfirm = false;
</script>
  
{#if showPopup || showConfirm}
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
      background: rgba(0,0,0,0.7);
    }
    .popup{
      padding: 1px 20px 20px 40px;
      border-radius: 40px;
      margin: 10% auto;
      width: max-content;
      max-width: 300px;
      text-align: left;
      background: white;
      z-index: 5;
    }
  </style>
  