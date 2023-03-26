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
                        <input type="number" v-sync-directive="bankMoney" @keyup="saveAll" min="0" @input="bankMoney = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>基金</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="foundation" @keyup="saveAll" min="0" @input="foundation = $event.target.value" />
                    </div>
                </div>
            </div>
            
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>股票</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="stock" @keyup="saveAll" min="0" @input="stock = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>儲蓄險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="savings" @keyup="saveAll" min="0" @input="savings = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>其他</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="otherSave" @keyup="saveAll" min="0" @input="otherSave = $event.target.value" />
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

    const Sync = {
        beforeMount(el, binding) {
            el.value = binding.value;

            let tmp;

            el.addEventListener("focus", () => {   
                tmp = el.value;
                el.value = '';
            })

            el.addEventListener("blur", () => {
                if (el.value === '') {
                    el.value = tmp;
                }
            })
        },
    }

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
        directives: {
            "sync-directive": Sync
        }
    }
</script>

<style scoped lang="scss">
    #save-item {
        background-color: #f4f0e6;
    }
</style>