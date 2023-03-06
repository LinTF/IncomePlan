<template>
    <header></header>

    <main>
        <h1 class="txt-center">收入支出分析</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div id="income">
                        <h3>實際收入</h3>
                        <p class="txt-right">剩餘 {{ incomeTotal }} </p>
                        <hr />
                        <p>本薪 <input type="text" v-model="income" @keyup="total" /></p>
                        <p>勞保 <input type="text" v-model="laborInsurance" @keyup="total" /></p>
                        <p>健保 <input type="text" v-model="healthInsurance" @keyup="total" /></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id="outlay">
                        <h3>固定支出</h3>
                        <p class="txt-right">總支出 {{ outlayTotal }}</p>
                        <hr />
                        <p>生活費 <input type="text" v-model="lifeCost" @keyup="outlay" /></p>
                        <p>孝親費 <input type="text" v-model="familyCost" @keyup="outlay" /></p>
                        <p>保險 <input type="text" v-model="insuranceCost" @keyup="outlay" /></p>
                        <p>學貸 <input type="text" v-model="studentLoans" @keyup="outlay" /></p>
                        <p>電話費 <input type="text" v-model="telephoneCost" @keyup="outlay" /></p>
                        <p>其他花費 <input type="text" v-model="otherCost" @keyup="outlay" /></p>
                        <p>交通費 <input type="text" v-model="transportationCost" @keyup="outlay" /></p>
                    </div>
                </div>
                <div class="col-md-3">
                    
                </div>
                <div class="col-md-3">
                    
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
            }
        },
        computed: {
            total: function () {
                this.incomeTotal = parseInt(this.income) - parseInt(this.laborInsurance) - parseInt(this.healthInsurance)
            },
            outlay: function () {
                this.outlayTotal = parseInt(this.lifeCost) + parseInt(this.familyCost) + parseInt(this.insuranceCost) + parseInt(this.studentLoans) + parseInt(this.telephoneCost) + parseInt(this.otherCost) + parseInt(this.transportationCost)
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
