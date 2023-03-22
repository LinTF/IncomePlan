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
                        <p>{{ saveBank = parseInt(propsSaveMoney) * 0.5 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ propsSaveBank }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ saveBank - propsSaveBank }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>投資（50%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ investment = parseInt(propsSaveMoney) * 0.5 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ propsInvest }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ investment - propsInvest }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style>

</style>