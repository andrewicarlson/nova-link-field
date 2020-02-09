<template>
    <a :class="field.class ? field.class : 'no-underline dim text-primary font-bold'" :target="field.newTab ? '_blank' : ''" :href="field.href">{{ field.text }}</a>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
