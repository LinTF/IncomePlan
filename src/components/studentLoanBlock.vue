<template>
    <div id="studen-loan" class="bag-block">
        <h4>學貸</h4>
        <p class="txt-right">總支出 ${{ formatLoanTotal }}</p>
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
                isEmpty
            }
        },
        methods: {
            total() {
                const highSchool = isEmpty(this.highSchool);
                const university = isEmpty(this.university);
                const master = isEmpty(this.master);
                const doctor = isEmpty(this.doctor);

                this.loanTotal = parseInt(highSchool) + parseInt(university) + parseInt(master) + parseInt(doctor);

                // 拋出學貸總金額
                this.$emit('emitLoanTotal', this.loanTotal);
            }
        },
        computed: {
            formatLoanTotal() {
                return numberToMoney(this.loanTotal);
            }
        },
        directives: {
            "sync-directive": InputSyncDirective
        }
    }
</script>

<style scoped lang="scss">
    #studen-loan {
        background-color: #e4efe7;
    }
</style>