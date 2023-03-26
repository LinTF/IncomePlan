<template>
    <div id="studen-loan" class="bag-block">
        <h4>學貸</h4>
        <p class="txt-right">總支出 ${{ numberToMoney(loanTotal) }} {{ $emit('emitLoanTotal', loanTotal) }}</p>
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
                        <input type="number" v-sync-directive="highSchool" @keyup="total" min="0" @input="highSchool = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>大學</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="university" @keyup="total" min="0" @input="university = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>碩士</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="master" @keyup="total" min="0" @input="master = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>博士</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="doctor" @keyup="total" min="0" @input="doctor = $event.target.value" />
                    </div>
                </div>
            </div>
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
        name: "StudentLoan",
        data() {
            return {
                loanTotal: 0,
                highSchool: 0,
                university: 0,
                master: 0,
                doctor: 0,

                // public js
                numberToMoney,
                judgeEmptyVal
            }
        },
        computed: {
            total() {
                const highSchool = judgeEmptyVal(this.highSchool);
                const university = judgeEmptyVal(this.university);
                const master = judgeEmptyVal(this.master);
                const doctor = judgeEmptyVal(this.doctor);

                this.loanTotal = parseInt(highSchool) + parseInt(university) + parseInt(master) + parseInt(doctor)
            }
        },
        directives: {
            "sync-directive": Sync
        }
    }
</script>

<style scoped lang="scss">
    #studen-loan {
        background-color: #e4efe7;
    }
</style>