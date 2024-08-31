<script setup lang="ts">
import { data as todos } from "#loaders/todos.data.ts"
</script>

# Data Loader Example

Here's an example listing todos from JSONPlaceholder:

<pre v-for="todo in todos.slice(0, 10)">
{{ todo }}
</pre>
