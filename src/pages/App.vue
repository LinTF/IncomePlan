<template>
    <header></header>

    <main>
        <h1 class="txt-center">收入支出分析</h1>
        <div class="container">
            <div class="note-color">
                <ul>
                    <li style="background-color: #fbe8e3;">收入</li>
                    <li style="background-color: #e4efe7;">支出項</li>
                    <li style="background-color: #f4f0e6;">儲蓄項</li>
                    <li style="background-color: #F6F6F6;">規劃項</li>
                </ul>
            </div>
            <div class="row">
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div>
                        <incomeBlock 
                            @emitIncomeTotal="getIncomeTotal" 
                            @emitIncome="getIncome" 
                            @emitGovInsuranceTotal="getGovInsuranceTotal" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div>
                        <outlayBlock 
                            @emitHouseCost="getHouseCost" 
                            @emitOtherPlanCost="getOtherPlanCost" 
                            :propsInsuranceTotal="insuranceCost" 
                            :propsStudentLoans="loanTotal" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                    <div>
                        <insuranceBlock 
                            @emitInsuranceCost="getInsuranceCost" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6">
                    <div>
                        <studentLoanBlock 
                            @emitLoanTotal="getLoanTotal" />
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <saveBlock 
                        @emitSavePlanTotal="getSavePlanTotal" 
                        @emitSaveBank="getSaveBank" 
                        @emitInvest="getInvest" />
                </div>
                <div class="col-xl-5 col-lg-6">
                    <budgetBlock  
                        @emitSaveMoney="getSaveMoneyTotal" 
                        @emitLastSave="getLastSave" 
                        @emitLastInsurance="getLastInsurance"
                        @emitLastHouseCost="getLastHouseCost"
                        @emitLastOtherCost="getLastOtherCost"
                        :propsIncomeTotal="incomeTotal" 
                        :propsSaveTotal="savePlanTotal" 
                        :propsInsuranceTotal="insuranceCost" 
                        :propsHouseCost="houseCost" 
                        :propsOtherPlanCost="otherPlanCost" 
                        :propsIncome="income" 
                        :propsGovInsuranceTotal="govInsuranceTotal"  />
                </div>
                <div class="col-xl-4 col-lg-6">
                    <planBlock :propsSaveMoney="saveTotal" :propsSaveBank="saveBank" :propsInvest="invest" />
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <p v-if="income > 0 & Math.trunc(lastSave) > 0"><img src="@/assets/images/star.png"> 存款規劃：還有 ${{ numberToMoney(lastSave) }} 可規劃唷！</p>
                    <p v-if="income > 0 & Math.trunc(lastSave) < 0"><img src="@/assets/images/rating.png"> 存款規劃：多存了 ${{ numberToMoney(Math.abs(lastSave)) }} 很棒唷！</p>
                    <p v-else-if="income > 0 & Math.trunc(lastSave) === 0"><img src="@/assets/images/diamond.png"> 存款規劃：完美分配！</p>
                </div>
                <div>
                    <p v-if="income > 0 & Math.trunc(lastInsurance) > 0"><img src="@/assets/images/star.png"> 風險規劃：還有 ${{ numberToMoney(lastInsurance) }} 可規劃唷！</p>
                    <p v-if="income > 0 & Math.trunc(lastInsurance) < 0"><img src="@/assets/images/rating.png"> 風險規劃：多規劃了 ${{ numberToMoney(Math.abs(lastInsurance)) }} 很棒唷！</p>
                    <p v-else-if="income > 0 & Math.trunc(lastInsurance) === 0"><img src="@/assets/images/diamond.png"> 風險規劃：完美分配！</p>
                </div>
                <div>
                    <p v-if="income > 0 & Math.trunc(lastHouseCost) > 0"><img src="@/assets/images/star.png"> 住的規劃：還有 ${{ numberToMoney(lastHouseCost) }} 可規劃唷！</p>
                    <p v-if="income > 0 & Math.trunc(lastHouseCost) < 0"><img src="@/assets/images/warning.png"> 住的規劃：超出預算 ${{ numberToMoney(Math.abs(lastHouseCost)) }} ！</p>
                    <p v-else-if="income > 0 & Math.trunc(lastHouseCost) === 0"><img src="@/assets/images/diamond.png"> 住的規劃：完美分配！</p>
                </div>
                <div>
                    <p v-if="income > 0 & Math.trunc(lastOtherCost) > 0"><img src="@/assets/images/star.png"> 其他花費規劃：還有 ${{ numberToMoney(lastOtherCost) }} 可規劃唷！</p>
                    <p v-if="income > 0 & Math.trunc(lastOtherCost) < 0"><img src="@/assets/images/warning.png"> 其他花費規劃：超出預算 ${{ numberToMoney(Math.abs(lastOtherCost)) }} ！</p>
                    <p v-else-if="income > 0 & Math.trunc(lastOtherCost) === 0"><img src="@/assets/images/diamond.png"> 其他花費規劃：完美分配！</p>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <footerBlock />
    </footer>

    <!-- <a href="https://www.flaticon.com/free-icons/like" title="like icons">Like icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/diamond" title="diamond icons">Diamond icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/error" title="error icons">Error icons created by Vectors Market - Flaticon</a> -->
    <!-- <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Freepik - Flaticon</a> -->
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
    import { numberToMoney } from '@/assets/js/numberToMoney';

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
                govInsuranceTotal: 0,
                // 剩餘存款金額
                lastSave: 0,
                // 剩餘可規劃風險金額
                lastInsurance: 0,
                // 剩餘住的金額
                lastHouseCost: 0,
                // 剩餘其他金額
                lastOtherCost: 0,

                // public js
                numberToMoney
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
            },
            getLastSave(val) {
                this.lastSave = val;
            },
            getLastInsurance(val) {
                this.lastInsurance = val;
            },
            getLastHouseCost(val) {
                this.lastHouseCost = val;
            },
            getLastOtherCost(val) {
                this.lastOtherCost = val;
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

    .note-color {
        text-align: center;
        
        ul {
            display: inline-flex;

            li {
                width: 100px;
                height: 25px;
                text-align: center;
                margin: 10px;
            }
        }
    }

    img {
        width: 25px;
        margin-top: -7px;
    }
</style>
