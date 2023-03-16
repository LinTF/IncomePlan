<template>
    <div id="outlay">
        <h4>固定支出</h4>
        <p class="txt-right">總支出 {{ outlayTotal + this.insuranceTotal + this.studentLoans }}</p>
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
                        <input type="number" v-model="lifeCost" @keyup="outlay" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>孝親費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="familyCost" @keyup="outlay" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>保險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="this.insuranceTotal" disabled="disabled" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>學貸</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="this.studentLoans" disabled="disabled" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>電話費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="telephoneCost" @keyup="outlay" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>交通費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="transportationCost" @keyup="outlay" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>房貸(房租)</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="houseCost" @keyup="outlay" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>其他花費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="otherCost" @keyup="outlay" min="0" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "outlayBlock",
        props: {
            /// 保險
            insuranceTotal: {
                type: Number,
                required: true
            },
            /// 學貸
            studentLoans: {
                type: Number,
                required: true
            }
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
                /// 電話費
                telephoneCost: 0,
                /// 其他花費
                otherCost: 0,
                /// 交通費
                transportationCost: 0,
                /// 住宿
                houseCost: 0
            }
        },
        computed: {
            outlay: function () {
                const emptyVal = ''
                const lifeCost = this.lifeCost === emptyVal ? 0 : this.lifeCost;
                const familyCost = this.familyCost === emptyVal ? 0 : this.familyCost;
                const telephoneCost = this.telephoneCost === emptyVal ? 0 : this.telephoneCost;
                const otherCost = this.otherCost === emptyVal ? 0 : this.otherCost;
                const transportationCost = this.transportationCost === emptyVal ? 0 : this.transportationCost;
                const houseCost = this.houseCost === emptyVal ? 0 : this.houseCost;

                this.outlayTotal = parseInt(lifeCost) + parseInt(familyCost) + parseInt(telephoneCost) + parseInt(houseCost) + parseInt(otherCost) + parseInt(transportationCost);
            },
        }
    }
</script>

<style>

</style>