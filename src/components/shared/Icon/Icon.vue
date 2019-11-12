<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{iconName}}</title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    viewBox: {
      type: String,
      default: "0 0 18 18"
    }
  }
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}

.icon {
  width: 2rem;
  height: auto;
}
.action {
  cursor: pointer;
  fill: #888;
}
.action:hover {
  fill: #3c3c3c;
}
.action.disabled {
  opacity: 0.2;
  cursor: default;
}
.blue-highlight:hover {
  fill: #0864c7;
}
.blue-highlight.disabled {
  fill: #545251;
}
</style>