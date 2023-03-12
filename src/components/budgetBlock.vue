<template>
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
                    <div class="col-3">
                        <span>存錢（30%）</span>
                    </div>
                    <div class="col-9">
                        <p>{{ saveMoney = incomeTotal * 0.3 }} {{ $emit('saveMoney', saveMoney = incomeTotal * 0.3) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>風險（10%）</span>
                    </div>
                    <div class="col-9">
                        <p>{{ risk = incomeTotal * 0.1 }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>住家（25%）</span>
                    </div>
                    <div class="col-9">
                        <p>{{ house = incomeTotal * 0.25 }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <span>其他（35%）</span>
                    </div>
                    <div class="col-9">
                        <p>{{ otherConsumption = incomeTotal * 0.35 }}</p>
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
            incomeTotal: {
                type: Number,
                required: true,
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
        },
        computed: {
            
        }
    }
</script>

<style>

</style>