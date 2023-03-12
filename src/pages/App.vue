<template>
    <header></header>

    <main>
        <h1 class="txt-center">收入支出分析</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <incomeBlock @incomeTotalKeyup="incomeTotal" />
                </div>
                <div class="col-md-3">
                    <outlayBlock />
                </div>
                <div class="col-md-6">
                    <budgetBlock :incomeTotal=income @saveMoney="saveMoneyTotal" />
                </div>
                <div class="col-md-6">
                    <planBlock :saveMoney=saveTotal />
                </div>
                <div class="col-md-6">
                    <saveBlock />
                </div>
                <div class="col-md-6">
                    <insuranceBlock />
                </div>
            </div>
        </div>
    </main>

    <footer>
        <footerBlock />
    </footer>
</template>

<script>
    import footerBlock from '@/components/footerBolck.vue'
    import incomeBlock from '@/components/incomeBlock.vue'
    import outlayBlock from '@/components/outlayBlock.vue'
    import budgetBlock from '@/components/budgetBlock.vue'
    import planBlock from '@/components/planBlock.vue'
    import saveBlock from '@/components/saveBlock.vue'
    import insuranceBlock from '@/components/insuranceBlock.vue'

    export default {
        name: 'App',
        components: {
            footerBlock,
            incomeBlock,
            outlayBlock,
            budgetBlock,
            planBlock,
            saveBlock,
            insuranceBlock
        },
        data() {
            return {
                // 實際收入
                income: 0,
                // 存錢總額（30%）
                saveTotal: 0,
            }
        },
        computed: {

        },
        methods: {
            // 傳入budgetBlock > props:incomeTotal(總收入)
            incomeTotal(incomeTotal) {
                this.income = incomeTotal
            },

            // 傳入planBlock > props:saveMoney(總存錢金額)
            saveMoneyTotal(saveMoneyTotal) {
                this.saveTotal = saveMoneyTotal
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
