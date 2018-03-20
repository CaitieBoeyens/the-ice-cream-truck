<template>
  <div class="sidebar">
      <div class="tab">
          <h3>Summary</h3>
      </div>
      <div class="sidebar-content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang=scss scoped>
@import "../assets/styles/variables.scss";

#sidebar {
    background-color: $light-pink;
    position: fixed;
    top: 40px;
    left: 0;
    transition-duration: 0.3s;
}
#sidebar-content {
    position: fixed;
    top: 40px;
    left: -250px;
    transition-duration: 0.5s;
}
#sidebar:hover {
    left: 250px;
}
#sidebar:hover #sidebar-content {
    left: 0;
}

.tab {
    transform: rotate(90deg);
}
</style>
