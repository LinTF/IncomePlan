<template>
    <div id="income" class="bag-block">
        <h4>實際收入</h4>
        <p class="txt-right">實領 ${{ numberToMoney(incomeTotal) }} </p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span class="txt-center">項目</span>
                    </div>
                    <div class="col-8 title">
                        <span class="txt-center">金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>本薪</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="income" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
            
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>勞保</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="laborInsurance" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>健保</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="healthInsurance" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney.js';
    import { judgeEmptyVal } from '@/assets/js/judgeEmptyVal.js';

    export default {
        name: 'incomeBlock',
        components: {
            
        },
        data() {
            return {
                // 收入
                /// 實際收入
                incomeTotal: 0,
                /// 本薪
                income: 0,
                /// 勞保
                laborInsurance: 0,
                /// 健保
                healthInsurance: 0,

                // public js
                numberToMoney,
                judgeEmptyVal
            }
        },
        computed: {
            total: function () {
                const income = judgeEmptyVal(this.income);
                const laborInsurance = judgeEmptyVal(this.laborInsurance);
                const healthInsurance = judgeEmptyVal(this.healthInsurance);
                
                this.incomeTotal = parseInt(income) - parseInt(laborInsurance) - parseInt(healthInsurance);

                // 拋出實際收入數值
                this.$emit('emitIncomeTotal', parseInt(this.incomeTotal));
                this.$emit('emitIncome', parseInt(income));
                this.$emit('emitGovInsuranceTotal', parseInt(laborInsurance) + parseInt(healthInsurance));
            },
        }
    }

</script>

<style scoped lang="scss">
    #income {
        background-color: #fbe8e3;
    }
</style>