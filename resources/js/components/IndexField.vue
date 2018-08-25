<template>
    <a :target="field.newTab ? '_blank' : ''" :href="field.href">{{ field.text }}</a>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
