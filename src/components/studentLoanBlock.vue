<template>
    <div id="studen-loan">
        <h4>學貸</h4>
        <p class="txt-right">總支出 ${{ numberToMoney(loanTotal) }} {{ $emit('emitLoanTota', loanTotal) }}</p>
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
                        <span>高中</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="highSchool" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>大學</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="university" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/js/numberToMoney.js';
    import { judgeEmptyVal } from '@/js/judgeEmptyVal.js';

    export default {
        name: "StudentLoan",
        data() {
            return {
                loanTotal: 0,
                highSchool: 0,
                university: 0,

                // public js
                numberToMoney,
                judgeEmptyVal
            }
        },
        computed: {
            total() {
                const highSchool = judgeEmptyVal(this.highSchool);
                const university = judgeEmptyVal(this.university);

                this.loanTotal = parseInt(highSchool) + parseInt(university)
            }
        }
    }
</script>

<style>

</style>