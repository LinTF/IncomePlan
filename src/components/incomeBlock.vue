<template>
    <div id="income" class="bag-block">
        <h4>實際收入</h4>
        <p class="txt-right">實領 ${{ formattedIncomeTotal }} </p>
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
                        <input type="number" v-sync-directive="income" min="0" @keyup="updateIncomeTotal" @input="income = $event.target.value" />
                    </div>
                </div>
            </div>
            
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>勞保</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="labourInsurance" min="0" @keyup="updateIncomeTotal" @input="labourInsurance = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>健保</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="healthInsurance" min="0" @keyup="updateIncomeTotal" @input="healthInsurance = $event.target.value"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney.js';
    import { isEmpty } from '@/assets/js/isEmpty.js';

    const InputSyncDirective = {
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
        name: 'incomeBlock',
        data() {
            return {
                // 收入
                /// 實際收入
                incomeTotal: 0,
                /// 本薪
                income: 0,
                /// 勞保
                labourInsurance: 0,
                /// 健保
                healthInsurance: 0,

                // public js
                numberToMoney,
                isEmpty,
            }
        },
        methods: {
            updateIncomeTotal() {
                const income = isEmpty(this.income);
                const labourInsurance = isEmpty(this.labourInsurance);
                const healthInsurance = isEmpty(this.healthInsurance);
                
                // 計算
                this.incomeTotal = parseInt(income) - parseInt(labourInsurance) - parseInt(healthInsurance);

                // 拋出實際收入數值
                this.$emit('emitIncomeTotal', parseInt(this.incomeTotal));
                this.$emit('emitIncome', parseInt(income));
                this.$emit('emitGovInsuranceTotal', parseInt(labourInsurance) + parseInt(healthInsurance));
            },
        },
        computed: {
            formattedIncomeTotal() {
                return numberToMoney(this.incomeTotal);
            }
        },
        directives: {
            "sync-directive": InputSyncDirective
        }
    }

</script>

<style scoped lang="scss">
    #income {
        background-color: #fbe8e3;
    }
</style>