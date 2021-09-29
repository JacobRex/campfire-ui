## Default
In its simplest form, a label is a gray box displaying some text.
```vue
<template>
  <c-label>Label</c-label>
</template>

<script>
import { CLabel } from '@campfire-ui/components/Label';
export default {
  components: { CLabel },
};
</script>
```

## Variants
You can use the `variant` prop to set the visual style of the label for different purposes.
```vue
<template>
  <div>
    <c-label>
      Default
    </c-label>
    <c-label variant="bold">
      Bold
    </c-label>
    <c-label variant="positive">
      Positive
    </c-label>
    <c-label variant="important">
      Important
    </c-label>
    <c-label variant="critical">
      Critical
    </c-label>
  </div>
</template>

<script>
import { CLabel } from '@campfire-ui/components/Label';
export default {
  components: { CLabel },
};
</script>
```

| Variant | Purpose |
| ------- | ------- |
| Normal | Used where a label doesn’t apply to a specific use-case. |
| Bold | Used to accent status where the default label does not allow for visual distinction. |
| Positive | Used to indicate a positive, matched, or successful status. |
| Important | Used to indicate a closeout, warning, or other time sensitive status. |
| Critical | Used to indicate a sale, something that needs to be fixed, or requires immediate attention. |