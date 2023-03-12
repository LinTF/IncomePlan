<template>
    <div id="outlay">
        <h4>固定支出</h4>
        <p class="txt-right">總支出 {{ outlayTotal }}</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span class="txt-center">項目</span>
                    </div>
                    <div class="col-8 title">
                        <span class="txt-center">金額</span>
                    </div>
                </div>
            </div>
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
                        <span>交通費</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="transportationCost" @keyup="outlay" />
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "outlayBlock",
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
            }
        },
        computed: {
            outlay: function () {
                this.outlayTotal = parseInt(this.lifeCost) + parseInt(this.familyCost) + parseInt(this.insuranceCost) + parseInt(this.studentLoans) + parseInt(this.telephoneCost) + parseInt(this.otherCost) + parseInt(this.transportationCost)

                if (isNaN(this.outlayTotal)) {
                    this.outlayTotal = 0
                }
            },
        }
    }
</script>

<style>

</style>