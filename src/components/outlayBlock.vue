<template>
    <div id="outlay">
        <h4>固定支出</h4>
        <p class="txt-right">總支出 ${{ numberToMoney(outlayTotal + this.propsInsuranceTotal + this.propsStudentLoans) }}</p>
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
                        <input type="number" v-model="this.propsInsuranceTotal" disabled="disabled" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>學貸</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="this.propsStudentLoans" disabled="disabled" min="0" />
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
                        {{ $emit('emitHouseCost', parseInt(judgeEmptyVal(houseCost))) }}
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
            {{ $emit('emitOtherPlanCost', otherPlanCost = parseInt(judgeEmptyVal(lifeCost)) + parseInt(judgeEmptyVal(familyCost)) + parseInt(judgeEmptyVal(telephoneCost)) + parseInt(judgeEmptyVal(transportationCost)) + parseInt(judgeEmptyVal(otherCost)) + parseInt(judgeEmptyVal(propsStudentLoans))) }}
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/js/numberToMoney.js';
    import { judgeEmptyVal } from '@/js/judgeEmptyVal.js';

    export default {
        name: "outlayBlock",
        props: {
            /// 保險
            propsInsuranceTotal: {
                type: Number,
                required: true
            },
            /// 學貸
            propsStudentLoans: {
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
                /// 交通費
                transportationCost: 0,
                /// 住宿
                houseCost: 0,
                /// 其他花費
                otherCost: 0,
                /// 排除存款、保險、住宿，剩餘的費用
                otherPlanCost: 0,

                // public js
                numberToMoney,
                judgeEmptyVal
            }
        },
        computed: {
            outlay() {
                const lifeCost = judgeEmptyVal(this.lifeCost);
                const familyCost = judgeEmptyVal(this.familyCost);
                const telephoneCost = judgeEmptyVal(this.telephoneCost);
                const otherCost = judgeEmptyVal(this.otherCost);
                const transportationCost = judgeEmptyVal(this.transportationCost);
                const houseCost = judgeEmptyVal(this.houseCost);

                this.outlayTotal = parseInt(lifeCost) + parseInt(familyCost) + parseInt(telephoneCost) + parseInt(houseCost) + parseInt(otherCost) + parseInt(transportationCost);
            },
        }
    }
</script>

<style>

</style>