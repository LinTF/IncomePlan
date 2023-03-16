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
                    <outlayBlock :insuranceTotal=insuranceCost :studentLoans=loanTota />
                </div>
                <div class="col-md-3">
                    <insuranceBlock @passInsuranceCost="getInsuranceCost" />
                </div>
                <div class="col-md-3">
                    <studentLoanBlock @passLoanTota="getLoanTotal" />
                </div>
                <div class="col-md-3">
                    <saveBlock @passSavePlanTotal="getSavePlanTotal" />
                </div>
                <div class="col-md-5">
                    <budgetBlock :incomeTotal=income @saveMoney="saveMoneyTotal" :saveTotal="savePlanTotal" :insuranceTotal=insuranceCost />
                </div>
                <div class="col-md-4">
                    <planBlock :saveMoney=saveTotal />
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
    import studentLoanBlock from '@/components/studentLoanBlock.vue'

    export default {
        name: 'App',
        components: {
            footerBlock,
            incomeBlock,
            outlayBlock,
            budgetBlock,
            planBlock,
            saveBlock,
            insuranceBlock,
            studentLoanBlock
        },
        data() {
            return {
                // 實際收入
                income: 0,
                // 存錢總額（30%）
                saveTotal: 0,
                // 保險支出總額
                insuranceCost: 0,
                // 學貸繳費金額
                loanTota: 0,
                // 存錢計畫總額
                savePlanTotal: 0
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
            },
            // 傳入outlayBlock > props:insuranceTotal(保險支出總金額)
            getInsuranceCost(insuranceCost) {
                this.insuranceCost = insuranceCost
            },
            // 傳入outlayBlock > props:studentLoans(學貸總金額)
            getLoanTotal(loanTota) {
                this.loanTota = loanTota
            },
            // 傳入budgetBlock > props:saveTotal(存款計劃總金額)
            getSavePlanTotal(savePlanTotal) {
                this.savePlanTotal = savePlanTotal
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
