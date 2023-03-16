<template>
    <div id="save-item">
        <h4>儲蓄/投資</h4>
        <p class="txt-right">總儲蓄 {{ saveTotal }} {{ $emit('passSavePlanTotal', saveTotal) }}</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4">
                        <span class="txt-center">項目</span>
                    </div>
                    <div class="col-8">
                        <span class="txt-center">金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>保險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="saveInsurance" @keyup="saveAll" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>儲蓄險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="savings" @keyup="saveAll" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>基金</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="foundation" @keyup="saveAll" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>活儲</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="bankMoney" @keyup="saveAll" min="0" />
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
                const empty = '';
                const saveInsurance = this.saveInsurance === empty ? 0 : this.saveInsurance;
                const savings = this.savings === empty ? 0 : this.savings;
                const foundation = this.foundation === empty ? 0 : this.foundation;
                const bankMoney = this.bankMoney === empty ? 0 : this.bankMoney;

                this.saveTotal = parseInt(saveInsurance) + parseInt(savings) + parseInt(foundation) + parseInt(bankMoney);
            }
        },
    }
</script>

<style>

</style>