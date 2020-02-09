<template>
    <!-- <panel-item :field="field" /> -->
    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
            <slot>
                <h4 class="font-normal text-80">
                    {{ label }}
                </h4>
            </slot>
        </div>
        <div class="w-3/4 py-4">
            <slot name="value">
                <p v-if="field.value" class="text-90">
                    <a :class="field.class ? field.class : 'no-underline dim text-primary font-bold'" :target="field.newTab ? '_blank' : ''" :href="field.href">{{ field.text }}</a>
                </p>
                <p v-else>&mdash;</p>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    computed: {
        label() {
            return this.fieldName || this.field.name
        },
    },
}
</script>
