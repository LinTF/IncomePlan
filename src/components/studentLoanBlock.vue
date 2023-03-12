<template>
    <div id="studen-loan">
        <h4>學貸</h4>
        <p class="txt-right">總支出 {{ loanTotal }}</p>
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
                        <input type="text" v-model="highSchool" @keyup="total" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>大學</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="university" @keyup="total" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentLoan",
        data() {
            return {
                loanTotal: 0,
                highSchool: 0,
                university: 0
            }
        },
        computed: {
            total() {
                this.loanTotal = parseInt(this.highSchool) + parseInt(this.university)

                if (isNaN(this.loanTotal)) {
                    this.loanTotal = 0
                }
            }
        }
    }
</script>

<style>

</style>