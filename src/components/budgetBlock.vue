<template>
    <div id="budget" class="bag-block">
        <h4>預算</h4>
        <p class="txt-center">使用本薪收入 ${{ numberToMoney(propsIncome) }} 做分配百分比，勞健保歸入其他花費</p>
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
                        <p class="txt-center">存錢（30%）</p>
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
                        {{ $emit('emitLastSave', lastSave = saveMoney - propsSaveTotal) }}
                        <p class="txt-center">${{ numberToMoney(lastSave) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">風險（10%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(risk = propsIncome * 0.1) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsInsuranceTotal) }}</p>
                    </div>
                    <div class="col-3">
                        {{ $emit('emitLastInsurance', lastInsurance = risk - propsInsuranceTotal) }}
                        <p class="txt-center">${{ numberToMoney(lastInsurance) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">住家（25%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(house = propsIncome * 0.25) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsHouseCost) }}</p>
                    </div>
                    <div class="col-3">
                        {{ $emit('emitLastHouseCost', lastHouseCost = house - propsHouseCost) }}
                        <p class="txt-center">${{ numberToMoney(lastHouseCost) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">其他（35%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(otherConsumption = propsIncome * 0.35) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsOtherPlanCost + propsGovInsuranceTotal) }}</p>
                    </div>
                    <div class="col-3">
                        {{ $emit('emitLastOtherCost', lastOtherCost = otherConsumption - propsOtherPlanCost - propsGovInsuranceTotal) }}
                        <p class="txt-center">${{ numberToMoney(lastOtherCost) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney';

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