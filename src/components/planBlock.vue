<template>
    <div id="save-plan" class="bag-block">
        <h4>儲蓄規劃</h4>
        <p class="txt-center">使用存錢的規劃金額，各分配 50%</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                    </div>
                    <div class="col-3 txt-center">
                        <span>預估金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>實際金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>差距金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <p>儲蓄</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(saveBank = propsSaveMoney * 0.5) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsSaveBank) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(saveBank - propsSaveBank) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <p>投資</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(investment = propsSaveMoney * 0.5) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(propsInvest) }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ numberToMoney(investment - propsInvest) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney.js';

    export default {
        name: 'Plan',
        props: {
            propsSaveMoney: {
                type: Number,
                required: true
            },
            propsSaveBank: {
                type: Number,
                required: true
            },
            propsInvest: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                // 儲蓄規劃
                /// 儲蓄
                saveBank: 0,
                /// 投資
                investment: 0,

                // public js
                numberToMoney,
            }
        }
    }
</script>

<style scoped lang="scss">
    #save-plan {
        background-color: #F6F6F6;
    }

    .title {
        p {
            margin-bottom: 0px;
        }
    }
</style>