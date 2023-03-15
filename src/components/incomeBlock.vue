<template>
    <div id="income">
        <h4>實際收入</h4>
        <p class="txt-right">剩餘 {{ incomeTotal }} </p>
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
            }
        },
        computed: {
            total: function () {
                const emptyVal = '';
                const income = this.income === emptyVal ? 0 : this.income;
                const laborInsurance = this.laborInsurance === emptyVal ? 0 : this.laborInsurance;
                const healthInsurance = this.healthInsurance === emptyVal ? 0 : this.healthInsurance;

                this.incomeTotal = parseInt(income) - parseInt(laborInsurance) - parseInt(healthInsurance);

                // 拋出實際收入數值
                this.$emit('incomeTotalKeyup', this.incomeTotal);
            },
        }
    }

</script>

<style>

</style>