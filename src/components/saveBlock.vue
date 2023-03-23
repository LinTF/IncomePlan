<template>
    <div id="save-item" class="bag-block">
        <h4>儲蓄/投資</h4>
        <p class="txt-right">總儲蓄 ${{ numberToMoney(saveTotal) }} {{ $emit('emitSavePlanTotal', saveTotal) }}</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4">
                        <span class="title">項目</span>
                    </div>
                    <div class="col-8">
                        <span class="title">金額</span>
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

            {{ $emit('emitSaveBank', parseInt(judgeEmptyVal(saveInsurance)) + parseInt(judgeEmptyVal(savings)) + parseInt(judgeEmptyVal(bankMoney))) }}
            {{ $emit('emitInvest', parseInt(judgeEmptyVal(foundation))) }}
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/js/numberToMoney.js';
    import { judgeEmptyVal } from '@/js/judgeEmptyVal.js';

    export default {
        name: "SaveItems",
        data() {
            return {
                /// 儲蓄/投資
                // 總儲蓄
                saveTotal: 0,
                // 保險
                saveInsurance: 0,
                // 儲蓄險
                savings: 0,
                // 基金
                foundation: 0,
                // 活儲
                bankMoney: 0,

                // public js
                numberToMoney,
                judgeEmptyVal
            }
        },
        computed: {
            saveAll: function () {
                const saveInsurance = judgeEmptyVal(this.saveInsurance);
                const savings = judgeEmptyVal(this.savings);
                const foundation = judgeEmptyVal(this.foundation);
                const bankMoney = judgeEmptyVal(this.bankMoney);

                this.saveTotal = parseInt(saveInsurance) + parseInt(savings) + parseInt(foundation) + parseInt(bankMoney);
            }
        },
    }
</script>

<style scoped lang="scss">
    #save-item {
        background-color: #f4f0e6;
    }
</style>