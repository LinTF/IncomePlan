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
                        <span>活儲</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="bankMoney" @keyup="saveAll" min="0" />
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
                        <span>股票</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="stock" @keyup="saveAll" min="0" />
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
                        <span>其他</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="otherSave" @keyup="saveAll" min="0" />
                    </div>
                </div>
            </div>

            {{ $emit('emitSaveBank', parseInt(judgeEmptyVal(otherSave)) + parseInt(judgeEmptyVal(savings)) + parseInt(judgeEmptyVal(bankMoney))) }}
            {{ $emit('emitInvest', parseInt(judgeEmptyVal(foundation)) + parseInt(judgeEmptyVal(stock))) }}
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney.js';
    import { judgeEmptyVal } from '@/assets/js/judgeEmptyVal.js';

    export default {
        name: "SaveItems",
        data() {
            return {
                /// 儲蓄/投資
                // 總儲蓄
                saveTotal: 0,
                // 保險
                otherSave: 0,
                // 儲蓄險
                savings: 0,
                // 基金
                foundation: 0,
                // 活儲
                bankMoney: 0,
                // 股票
                stock: 0,

                // public js
                numberToMoney,
                judgeEmptyVal
            }
        },
        computed: {
            saveAll: function () {
                const otherSave = judgeEmptyVal(this.otherSave);
                const savings = judgeEmptyVal(this.savings);
                const foundation = judgeEmptyVal(this.foundation);
                const bankMoney = judgeEmptyVal(this.bankMoney);
                const stock = judgeEmptyVal(this.stock);

                this.saveTotal = parseInt(otherSave) + parseInt(savings) + parseInt(foundation) + parseInt(bankMoney) + parseInt(stock);
            }
        },
    }
</script>

<style scoped lang="scss">
    #save-item {
        background-color: #f4f0e6;
    }
</style>