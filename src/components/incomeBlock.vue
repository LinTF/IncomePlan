<template>
    <div id="income">
        <h4>實際收入</h4>
        <p class="txt-right">剩餘 {{ incomeTotal }} </p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>本薪</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="income" @keyup="total" />
                    </div>
                </div>
            </div>
            
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>勞保</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="laborInsurance" @keyup="total" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>健保</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="healthInsurance" @keyup="total" />
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
                this.incomeTotal = parseInt(this.income) - parseInt(this.laborInsurance) - parseInt(this.healthInsurance);
                
                // 輸入的欄位為空時的判斷，為了不要讓實際收入=NaN
                if (isNaN(this.incomeTotal)) {
                    this.incomeTotal = 0
                }
                
                // 拋出實際收入數值
                this.$emit('incomeTotalKeyup', this.incomeTotal);
            },
        }
    }

</script>

<style>

</style>