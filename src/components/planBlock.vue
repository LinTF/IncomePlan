<template>
    <div id="save-plan">
        <h4>儲蓄規劃</h4>
        <p><br /></p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                    </div>
                    <div class="col-3">
                        <span class="txt-center">預估金額</span>
                    </div>
                    <div class="col-3">
                        <span class="txt-center">實際金額</span>
                    </div>
                    <div class="col-3">
                        <span class="txt-center">差距金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>儲蓄（50%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ numberToMoney(saveBank = propsSaveMoney * 0.5) }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ numberToMoney(propsSaveBank) }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ numberToMoney(saveBank - propsSaveBank) }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>投資（50%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ numberToMoney(investment = propsSaveMoney * 0.5) }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ numberToMoney(propsInvest) }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ numberToMoney(investment - propsInvest) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/js/numberToMoney.js';

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

<style>

</style>