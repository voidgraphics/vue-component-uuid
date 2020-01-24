# Vue Component UUID

This plugin simply adds a publicly accessible unique id to every component instance in your application.

This is intended to be used by people who wish they could use the private `_uid` property on their components, but can't, [as explained here](https://github.com/vuejs/vue/issues/5886#issuecomment-308625735).

## Installation

**NPM**
```
npm i vue-component-uuid
```

## Usage

```js
import Vue from 'vue';
import VueComponentUuid from 'vue-component-uuid';

Vue.use(VueComponentUuid);
```

```vue
<template>
	<div>
		{{ $uid }}
	</div>
</template>

<script>
export default {}
</script>
```