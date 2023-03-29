<template>
    <div id="footer">
        {{ copyright }}
    </div>
</template>

<script>
    export default {
        name: 'FooterBlock',
        data() {
            return {
                copyright: '© 2023 Ting Fang Lin',
            }
        }
    };
</script>

<style scoped lang="scss">
    $black-color: #171717;
    $white-color: #f3f3f3;

    #footer {
        background-color: $black-color;
        text-align: center;
        color: $white-color;
    }
</style>