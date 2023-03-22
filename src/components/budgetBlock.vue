<template>
    <div id="budget">
        <h4>預算</h4>
        <br />
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
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
                    <div class="col-3">
                        <span>存錢（30%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ saveMoney = propsIncomeTotal * 0.3 }} {{ $emit('emitSaveMoney', saveMoney = propsIncomeTotal * 0.3) }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ propsSaveTotal }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ saveMoney - propsSaveTotal }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>風險（10%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ risk = propsIncomeTotal * 0.1 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ propsInsuranceTotal }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ risk - propsInsuranceTotal }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>住家（25%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ house = propsIncomeTotal * 0.25 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ propsHouseCost }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ house - propsHouseCost }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>其他（35%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ otherConsumption = propsIncomeTotal * 0.35 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ propsOtherPlanCost }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ otherConsumption - propsOtherPlanCost }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style>

</style>