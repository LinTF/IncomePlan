<template>
    <header></header>

    <main>
        <h1 class="txt-center">收入支出分析</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div id="income">
                        <h4>實際收入</h4>
                        <p class="txt-right">剩餘 {{ incomeTotal }} </p>
                        <hr />
                        <div class="income-item">
                            <div class="row">
                                <div class="col-4 title">
                                    <span>本薪</span>
                                </div>
                                <div class="col-8">
                                    <input type="text" v-model="income" @keyup="total" />
                                </div>
                            </div>
                        </div>
                        
                        <div class="income-item">
                            <div class="row">
                                <div class="col-4 title">
                                    <span>勞保</span>
                                </div>
                                <div class="col-8">
                                    <input type="text" v-model="laborInsurance" @keyup="total" />
                                </div>
                            </div>
                        </div>
                        <div class="income-item">
                            <div class="row">
                                <div class="col-4 title">
                                    <span>健保</span>
                                </div>
                                <div class="col-8">
                                    <input type="text" v-model="healthInsurance" @keyup="total" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id="outlay">
                        <h4>固定支出</h4>
                        <p class="txt-right">總支出 {{ outlayTotal }}</p>
                        <hr />
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
                <div class="col-md-6">
                    <div id="budget">
                        <h4>預算</h4>
                        <br />
                        <hr />
                        <div class="income-item">
                            <div class="row">
                                <div class="col-3 title">
                                </div>
                                <div class="col-3">
                                    <span class="txt-center">目標金額</span>
                                </div>
                                <div class="col-3">
                                    <span class="txt-center">已規劃金額</span>
                                </div>
                                <div class="col-3">
                                    <span class="txt-center">剩餘金額</span>
                                </div>
                            </div>
                        </div>
                        <div class="income-item">
                            <div class="row">
                                <div class="col-3 title">
                                    <span>存錢</span>
                                </div>
                                <div class="col-9">
                                    <p>{{ saveMpney }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="income-item">
                            <div class="row">
                                <div class="col-3 title">
                                    <span>風險</span>
                                </div>
                                <div class="col-9">
                                    <p>{{ risk }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="income-item">
                            <div class="row">
                                <div class="col-3 title">
                                    <span>住家</span>
                                </div>
                                <div class="col-9">
                                    <p>{{ house }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="income-item">
                            <div class="row">
                                <div class="col-3 title">
                                    <span>其他</span>
                                </div>
                                <div class="col-9">
                                    <p>{{ otherConsumption }}</p>
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

    export default {
        name: 'App',
        components: {
            footerBlock
        },
        data() {
            return {
                // 收入
                incomeTotal: 0,
                income: 0,
                laborInsurance: 0,
                healthInsurance: 0,

                // 支出
                outlayTotal: 0,
                lifeCost: 0,
                familyCost: 0,
                insuranceCost: 0,
                studentLoans: 0,
                telephoneCost: 0,
                otherCost: 0,
                transportationCost: 0,

                // 預算
                saveMpney: 0,
                risk: 0,
                house: 0,
                otherConsumption: 0
            }
        },
        computed: {
            total: function () {
                this.incomeTotal = parseInt(this.income) - parseInt(this.laborInsurance) - parseInt(this.healthInsurance)
                this.saveMpney = parseInt(this.income) * 0.3
                this.risk = parseInt(this.income) * 0.1
                this.house = parseInt(this.income) * 0.25
                this.otherConsumption = parseInt(this.income) * 0.35
            },
            outlay: function () {
                this.outlayTotal = parseInt(this.lifeCost) + parseInt(this.familyCost) + parseInt(this.insuranceCost) + parseInt(this.studentLoans) + parseInt(this.telephoneCost) + parseInt(this.otherCost) + parseInt(this.transportationCost)
            },
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
