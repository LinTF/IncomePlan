<template>
    <div id="budget" class="bag-block">
        <h4>預算</h4>
        <p class="txt-center">使用本薪收入做分配百分比，勞健保歸入其他花費</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                    </div>
                    <div class="col-3 txt-center">
                        <span>目標金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>已規劃金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>剩餘金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span class="txt-center">存錢（30%）</span>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">
                            {{ $emit('emitSaveMoney', saveMoney = propsIncome * 0.3) }}
                            ${{ numberToMoney(saveMoney) }} 
                        </p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsSaveTotal) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(saveMoney - propsSaveTotal) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>風險（10%）</span>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(risk = propsIncome * 0.1) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsInsuranceTotal) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(risk - propsInsuranceTotal) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>住家（25%）</span>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(house = propsIncome * 0.25) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsHouseCost) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(house - propsHouseCost) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>其他（35%）</span>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(otherConsumption = propsIncome * 0.35) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsOtherPlanCost + propsGovInsuranceTotal) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(otherConsumption - propsOtherPlanCost - propsGovInsuranceTotal) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/js/numberToMoney.js';

    export default {
        name: "budgetBlock",
        props: {
            propsIncomeTotal: {
                type: Number,
                required: true
            },
            propsSaveTotal: {
                type: Number,
                required: true
            },
            propsInsuranceTotal: {
                type: Number,
                required: true
            },
            propsHouseCost: {
                type: Number,
                required: true
            },
            propsOtherPlanCost: {
                type: Number,
                required: true
            },
            propsIncome: {
                type: Number,
                required: true
            },
            propsGovInsuranceTotal: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                // 預算
                /// 存錢
                saveMoney: 0,
                /// 風險
                risk: 0,
                /// 住
                house: 0,
                /// 其他
                otherConsumption: 0,

                // public js
                numberToMoney,
            }
        }
    }
</script>

<style scoped lang="scss">
    #budget {
        background-color: #F6F6F6;
    }
</style>