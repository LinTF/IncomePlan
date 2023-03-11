<template>
    <div id="save-item">
        <h4>儲蓄/投資</h4>
        <hr />
        <p class="txt-right">總儲蓄 {{ saveTotal }}</p>
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-6 title">
                        <span class="txt-center">項目</span>
                    </div>
                    <div class="col-6 title">
                        <span class="txt-center">金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>保險</span>
                    </div>
                    <div class="col-9">
                        <input type="text" v-model="saveInsurance" @keyup="saveAll" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>儲蓄險</span>
                    </div>
                    <div class="col-9">
                        <input type="text" v-model="savings" @keyup="saveAll" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>基金</span>
                    </div>
                    <div class="col-9">
                        <input type="text" v-model="foundation" @keyup="saveAll" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <span>活儲</span>
                    </div>
                    <div class="col-9">
                        <input type="text" v-model="bankMoney" @keyup="saveAll" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SaveItems",
        data() {
            return {
                // 儲蓄/投資
                /// 總儲蓄
                saveTotal: 0,
                /// 保險
                saveInsurance: 0,
                /// 儲蓄險
                savings: 0,
                /// 基金
                foundation: 0,
                /// 活儲
                bankMoney: 0,
            }
        },
        computed: {
            saveAll: function () {
                this.saveTotal = parseInt(this.saveInsurance) + parseInt(this.savings) + parseInt(this.foundation) + parseInt(this.bankMoney);

                if (isNaN(this.saveTotal)) {
                    this.saveTotal = 0
                }
            }
        },
    }
</script>

<style>

</style>