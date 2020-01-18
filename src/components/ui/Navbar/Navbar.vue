<template>
  <header>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <nav>
      <NavbarMenu></NavbarMenu>
    </nav>
  </header>
</template>

<script>
import NavbarMenu from "@/components/ui/NavbarMenu";
export default {
  components: { NavbarMenu }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
  position: absolute;
}
.nav-toggle {
  display: none;
}
nav {
  margin: $small;
}
@media only screen and (max-width: 768px) {
  header {
    text-align: right;
    position: relative;
  }
  .nav-toggle-label {
    margin-top: $xsmall;
    margin-right: $xxsmall;
    span {
      margin: $xxsmall;
      &,
      &::before,
      &::after {
        display: inline-block;
        background: $secondary-color;
        height: 2px;
        width: $medium;
        border-radius: $xxsmall;
        position: relative;
      }

      &::before {
        bottom: 7px;
      }
      &::after {
        top: 7px;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        right: 0;
      }
    }
  }
  .nav-toggle {
    &:checked ~ nav {
      transform: scale(1, 1);
      position: relative;
    }
  }
  nav {
    transform: scale(1, 0);
    margin: 0;
    position: absolute;
    transform-origin: top;
    transition: transform 450ms ease-in-out;
    transition: position 450ms ease-in-out;
  }
}
</style>
<style lang="scss">
@media only screen and (max-width: 768px) {
  .nav-toggle:checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 150ms;
  }
}
</style>