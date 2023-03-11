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
                    <budgetBlock :incomeTotal=income />
                </div>
                <div class="col-md-6">
                    <div id="save-plan">
                        <h4>儲蓄規劃</h4>
                        <hr />
                        <p><br /></p>
                        <div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                    </div>
                                    <div class="col-3">
                                        <span class="txt-center">預估金額</span>
                                    </div>
                                    <div class="col-3">
                                        <span class="txt-center">實際金額</span>
                                    </div>
                                    <div class="col-3">
                                        <span class="txt-center">差距金額</span>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>儲蓄（50%）</span>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ saveBank }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>投資（50%）</span>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ investment }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="save-plan">
                        <h4>儲蓄/投資</h4>
                        <hr />
                        <p class="txt-right">總儲蓄 {{ saveTotal }}</p>
                        <div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-6 title">
                                        <span class="txt-center">項目</span>
                                    </div>
                                    <div class="col-6 title">
                                        <span class="txt-center">金額</span>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>保險</span>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" v-model="saveInsurance" @keyup="saveAll" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>儲蓄險</span>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" v-model="savings" @keyup="saveAll" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>基金</span>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" v-model="foundation" @keyup="saveAll" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>活儲</span>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" v-model="bankMoney" @keyup="saveAll" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

    export default {
        name: 'App',
        components: {
            footerBlock,
            incomeBlock,
            outlayBlock,
            budgetBlock
        },
        data() {
            return {
                // 儲蓄規劃
                /// 儲蓄
                saveBank: 0,
                /// 投資
                investment: 0,

                // 儲蓄/投資
                /// 總儲蓄
                saveTotal: 0,
                /// 保險
                saveInsurance: 0,
                /// 儲蓄險
                savings: 0,
                /// 基金
                foundation: 0,
                /// 活儲
                bankMoney: 0,

                income: 0
            }
        },
        computed: {
            total: function () {
                this.saveBank = parseInt(this.saveMoney) * 0.5
                this.investment = parseInt(this.saveMoney) * 0.5
            },
            saveAll: function () {
                this.saveTotal = parseInt(this.saveInsurance) + parseInt(this.savings) + parseInt(this.foundation) + parseInt(this.bankMoney)
            }
        },
        methods: {
            // 傳入budgetBlock > props:incomeTotal(總收入)
            incomeTotal(incomeTotal) {
                this.income = incomeTotal
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
