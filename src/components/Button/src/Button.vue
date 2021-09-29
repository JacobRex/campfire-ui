<template>
  <button
    :class="[
      'Button',
      `Button--${variant}`
    ]"
    @click="emitClick()"
  >
    <!-- @slot default - Use for the Button's content. -->
    <slot />
  </button>
</template>

<script>
/**
 * Buttons are used to initiate actions by a user.
 */
export default {
  name: 'CButton',
  props: {
    /**
     * Sets the visual of the button.
     *
     * @values default, bold, muted, critical
     */
    variant: {
      type: String,
      default: 'normal',
      validator: (value) => ['bold', 'normal', 'muted', 'critical'].includes(value),
    }
  },
  methods: {
    emitClick() {
      /**
       * Emitted when the Button is clicked.
       */
      this.$emit('click');
    }
  }
}
</script>

<style scoped>

.Button {
  margin: 0; /* Remove vertical margin in Safari */
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  text-align: center;
  text-decoration: none; /* Removes underlines on <a> buttons */
  white-space: nowrap;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.Button--normal {
  color: black;
  border: 2px solid black;
}

.Button--bold {
  color: white;
  background: black;
  border: 2px solid black;
}

.Button--muted {
  color: black;
  background: #dedede;
  border: 2px solid #dedede;
}

.Button--critical {
  color: white;
  background: red;
  border: 2px solid red;
}
</style>