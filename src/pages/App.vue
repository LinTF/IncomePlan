<template>
    <header></header>

    <main>
        <h1 class="txt-center">收入支出分析</h1>
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div class="cell">
                        <incomeBlock @emitIncomeTotal="getIncomeTotal" @emitIncome="getIncome" @emitGovInsuranceTotal="getGovInsuranceTotal" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div class="cell">
                        <outlayBlock @emitHouseCost="getHouseCost" @emitOtherPlanCost="getOtherPlanCost" :propsInsuranceTotal="insuranceCost" :propsStudentLoans="loanTotal" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div class="cell">
                        <insuranceBlock @emitInsuranceCost="getInsuranceCost" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <div class="cell">
                        <studentLoanBlock @emitLoanTotal="getLoanTotal" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <saveBlock @emitSavePlanTotal="getSavePlanTotal" @emitSaveBank="getSaveBank" @emitInvest="getInvest" />
                </div>
                <div class="col-xl-5 col-lg-6">
                    <budgetBlock  @emitSaveMoney="getSaveMoneyTotal" :propsIncomeTotal="incomeTotal" :propsSaveTotal="savePlanTotal" :propsInsuranceTotal="insuranceCost" :propsHouseCost="houseCost" :propsOtherPlanCost="otherPlanCost" :propsIncome="income" :propsGovInsuranceTotal="govInsuranceTotal" />
                </div>
                <div class="col-xl-4 col-lg-6">
                    <planBlock :propsSaveMoney="saveTotal" :propsSaveBank="saveBank" :propsInvest="invest" />
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
                incomeTotal: 0,
                // 存錢總額（30%）
                saveTotal: 0,
                // 保險支出總額
                insuranceCost: 0,
                // 學貸繳費金額
                loanTotal: 0,
                // 存錢計畫總額
                savePlanTotal: 0,
                // 住宿費用
                houseCost: 0,
                // 其他花費分配總額
                otherPlanCost: 0,
                // 儲蓄
                saveBank: 0,
                // 投資
                invest: 0,
                // 本薪
                income: 0,
                // 勞保與健保的組合
                govInsuranceTotal: 0
            }
        },
        computed: {

        },
        methods: {
            // 傳入budgetBlock > props:incomeTotal(總收入)
            getIncomeTotal(val) {
                this.incomeTotal = val;
            },
            // 傳入budgetBlock > props:houseCost(住宿費用)
            getHouseCost(val) {
                this.houseCost = val;
            },
            // 傳入budgetBlock > props:getOtherPlanCost(其他花費總額)
            getOtherPlanCost(val) {
                this.otherPlanCost = val;
            },
            // 傳入outlayBlock > props:insuranceTotal(保險支出總金額)
            getInsuranceCost(val) {
                this.insuranceCost = val;
            },
            // 傳入outlayBlock > props:studentLoans(學貸總金額)
            getLoanTotal(val) {
                this.loanTotal = val;
            },
            // 傳入budgetBlock > props:saveTotal(存款計劃總金額)
            getSavePlanTotal(val) {
                this.savePlanTotal = val;
            },
            // 傳入planBlock > props:getSaveBank(儲蓄總額)
            getSaveBank(val) {
                this.saveBank = val;
            },
            // 傳入planBlock > props:getInvest(投資總額)
            getInvest(val) {
                this.invest = val;
            },
            // 傳入planBlock > props:saveMoney(總存錢金額)
            getSaveMoneyTotal(val) {
                this.saveTotal = val;
            },
            getIncome(val) {
                this.income = val;
            },
            getGovInsuranceTotal(val) {
                this.govInsuranceTotal = val;
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
        font-size: 32px;
        color: #204969;
    }
</style>
