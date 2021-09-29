## Default
In its simplest form, a Button is a bordered box displaying some text.
```vue
<template>
  <c-button>button</c-button>
</template>

<script>
import { Cbutton } from '@campfire-ui/components/button';
export default {
  components: { Cbutton },
};
</script>
```

## Variants
You can use the `variant` prop to set the visual style of the button for different purposes.
```vue
<template>
  <div>
    <c-button>
      Default
    </c-button>
    <c-button variant="bold">
      Bold
    </c-button>
    <c-button variant="muted">
      Muted
    </c-button>
    <c-button variant="critical">
      Critical
    </c-button>
  </div>
</template>

<script>
import { Cbutton } from '@campfire-ui/components/button';
export default {
  components: { Cbutton },
};
</script>
```