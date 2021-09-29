<template>
  <span
    :class="[
      'Label',
      `Label--${variant}`,
    ]"
    @click="emitClick"
  >
    <!-- @slot default - Use for the label's content. -->
    <slot />
  </span>
</template>

<script>
/**
 * Labels are used to indicate status or classification of information.
 */
export default {
  name: 'CLabel',

  props: {
    /**
     * Sets the visual of the label.
     *
     * @values normal, bold, positive, important, critical
     */
    kind: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'bold', 'positive', 'important', 'critical'].includes(value),
    },
  },

  methods: {
    emitClick() {
      /**
       * Emitted when the label is clicked.
       */
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.Label {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
}

.Label--normal {
  color: black;
  background: #dedede;
}

.Label--bold {
  color: white;
  background: black;
}

.Label--positive {
  color: white;
  background: green;
  border: 2px solid green;
}

.Label--important {
  color: white;
  background: orange;
  border: 2px solid orange;
}

.Label--critical {
  color: white;
  background: red;
  border: 2px solid red;
}
</style>