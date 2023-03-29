<template>
    <div id="save-plan" class="bag-block">
        <h4>儲蓄規劃</h4>
        <p class="txt-center">使用存錢的規劃金額，各分配 50%</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                    </div>
                    <div class="col-3 txt-center">
                        <span>預估金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>實際金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>差距金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <p>儲蓄</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getSaveBank }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ formatPropsSaveBank }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getLastSaveBank }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3 title">
                        <p>投資</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getInvestment }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ formatPropsInvest }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getLastInvestment }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney.js';

    export default {
        name: 'Plan',
        props: {
            propsSaveMoney: {
                type: Number,
                required: true
            },
            propsSaveBank: {
                type: Number,
                required: true
            },
            propsInvest: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                // 儲蓄規劃
                /// 儲蓄
                saveBank: 0,
                /// 投資
                investment: 0,

                // public js
                numberToMoney,
            }
        },
        computed: {
            getSaveBank() {
                const saveBank = this.propsSaveMoney * 0.5;
                this.saveBank = saveBank;
                return numberToMoney(saveBank);
            },
            formatPropsSaveBank() {
                return numberToMoney(this.propsSaveBank);
            },
            getLastSaveBank() {
                const lastSaveBank = this.saveBank - this.propsSaveBank;
                return numberToMoney(lastSaveBank);
            },
            getInvestment() {
                const investment = this.propsSaveMoney * 0.5;
                this.investment = investment;
                return numberToMoney(investment);
            },
            formatPropsInvest() {
                return numberToMoney(this.propsInvest);
            },
            getLastInvestment() {
                const lastInvestment = this.investment - this.propsInvest;
                return numberToMoney(lastInvestment);
            }
        }
    }
</script>

<style scoped lang="scss">
    #save-plan {
        background-color: #F6F6F6;
    }

    .title {
        p {
            margin-bottom: 0px;
        }
    }
</style>