<template>
  <span
    :class="[
      $s.Label,
      $s[`variant__${variant}`],
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

<style module="s">
.Label {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
}

.variant__normal {
  color: black;
  background: #dedede;
}

.variant__bold {
  color: white;
  background: black;
}

.variant__positive {
  color: white;
  background: green;
  border: 2px solid green;
}

.variant__important {
  color: white;
  background: orange;
  border: 2px solid orange;
}

.variant__critical {
  color: white;
  background: red;
  border: 2px solid red;
}
</style>