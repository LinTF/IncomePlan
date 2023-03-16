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
                        <p>{{ saveBank = parseInt(saveMoney) * 0.5 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ getSaveBank }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ saveBank - getSaveBank }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>投資（50%）</span>
                    </div>
                    <div class="col-3">
                        <p>{{ investment = parseInt(saveMoney) * 0.5 }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ getInvest }}</p>
                    </div>
                    <div class="col-3">
                        <p>{{ investment - getInvest }}</p>
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
            saveMoney: {
                type: Number,
                required: true
            },
            getSaveBank: {
                type: Number,
                required: true
            },
            getInvest: {
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