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
                    <div id="outlay">
                        <h4>固定支出</h4>
                        <p class="txt-right">總支出 {{ outlayTotal }}</p>
                        <hr />
                        <div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>生活費</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="lifeCost" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>孝親費</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="familyCost" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>保險</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="insuranceCost" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>學貸</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="studentLoans" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>電話費</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="telephoneCost" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>其他花費</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="otherCost" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-4 title">
                                        <span>交通費</span>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" v-model="transportationCost" @keyup="outlay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="budget">
                        <h4>預算</h4>
                        <br />
                        <hr />
                        <div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                    </div>
                                    <div class="col-3 title">
                                        <span class="txt-center">目標金額</span>
                                    </div>
                                    <div class="col-3 title">
                                        <span class="txt-center">已規劃金額</span>
                                    </div>
                                    <div class="col-3 title">
                                        <span class="txt-center">剩餘金額</span>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>存錢（30%）</span>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ saveMoney }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>風險（10%）</span>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ risk }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>住家（25%）</span>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ house }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="income-item">
                                <div class="row">
                                    <div class="col-3 title">
                                        <span>其他（35%）</span>
                                    </div>
                                    <div class="col-9">
                                        <p>{{ otherConsumption }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

    export default {
        name: 'App',
        components: {
            footerBlock,
            incomeBlock
        },
        data() {
            return {
                // 支出
                /// 總支出
                outlayTotal: 0,
                /// 生活費
                lifeCost: 0,
                /// 孝親費
                familyCost: 0,
                /// 保險
                insuranceCost: 0,
                /// 學貸
                studentLoans: 0,
                /// 電話費
                telephoneCost: 0,
                /// 其他花費
                otherCost: 0,
                /// 交通費
                transportationCost: 0,

                // 預算
                /// 存錢
                saveMoney: 0,
                /// 風險
                risk: 0,
                /// 住
                house: 0,
                /// 其他
                otherConsumption: 0,

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
            }
        },
        computed: {
            total: function () {
                this.risk = parseInt(this.income) * 0.1
                this.house = parseInt(this.income) * 0.25
                this.otherConsumption = parseInt(this.income) * 0.35
                this.saveBank = parseInt(this.saveMoney) * 0.5
                this.investment = parseInt(this.saveMoney) * 0.5
            },
            outlay: function () {
                this.outlayTotal = parseInt(this.lifeCost) + parseInt(this.familyCost) + parseInt(this.insuranceCost) + parseInt(this.studentLoans) + parseInt(this.telephoneCost) + parseInt(this.otherCost) + parseInt(this.transportationCost)
            },
            saveAll: function () {
                this.saveTotal = parseInt(this.saveInsurance) + parseInt(this.savings) + parseInt(this.foundation) + parseInt(this.bankMoney)
            }
        },
        methods: {
            incomeTotal(incomeTotal) {
                this.saveMoney = parseInt(incomeTotal) * 0.3
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
