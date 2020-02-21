<template>
<div>
     <svg >
        <use :xlink:href="iconName" :class="svgClass" v-on="$listeners"/>
    </svg>
    <button @click="clicksss">asdf </button>
</div>
</template>
<script>
export default {
    name: "SvgIcon",
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ""
        }
    },
    mounted(){
    },
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`;
        },
        svgClass() {
            if (this.className) {
                return "svg-icon " + this.className;
            } else {
                return "svg-icon";
            }
        }
    },
    methods: {
        clicksss(){
        }
    }
};
</script>
<style scoped>

</style>