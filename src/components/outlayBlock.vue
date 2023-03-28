<template>
    <div id="outlay" class="bag-block">
        <h4>固定支出</h4>
        <p class="txt-right">總支出 ${{ formatOutlayTotal }}</p>
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
                        <span>生活費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="lifeCost" @keyup="outlay" min="0" @input="lifeCost = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>孝親費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="familyCost" @keyup="outlay" min="0" @input="familyCost = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>保險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="this.propsInsuranceTotal" disabled="disabled" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>學貸</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="this.propsStudentLoans" disabled="disabled" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>電話費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="telephoneCost" @keyup="outlay" min="0" @input="telephoneCost = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>交通費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="transportationCost" @keyup="outlay" min="0" @input="transportationCost = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>房貸</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="houseCost" @keyup="outlay" min="0" @input="houseCost = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>其他花費</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="otherCost" @keyup="outlay" min="0" @input="otherCost = $event.target.value" />
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
        name: "outlayBlock",
        props: {
            /// 保險
            propsInsuranceTotal: {
                type: Number,
                required: true
            },
            /// 學貸
            propsStudentLoans: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                // 支出
                /// 總支出
                outlayTotal: 0,
                /// 生活費
                lifeCost: 0,
                /// 孝親費
                familyCost: 0,
                /// 電話費
                telephoneCost: 0,
                /// 交通費
                transportationCost: 0,
                /// 住宿
                houseCost: 0,
                /// 其他花費
                otherCost: 0,
                /// 排除存款、保險、住宿，剩餘的費用
                otherPlanCost: 0,
                // public js
                numberToMoney,
                isEmpty
            }
        },
        methods: {
            outlay() {
                const lifeCost = isEmpty(this.lifeCost);
                const familyCost = isEmpty(this.familyCost);
                const telephoneCost = isEmpty(this.telephoneCost);
                const otherCost = isEmpty(this.otherCost);
                const transportationCost = isEmpty(this.transportationCost);
                const houseCost = isEmpty(this.houseCost);

                // 計算全部金額
                this.outlayTotal = parseInt(lifeCost) + parseInt(familyCost) + parseInt(telephoneCost) + parseInt(houseCost) + parseInt(otherCost) + parseInt(transportationCost);

                // 掏出房貸與其他預算的金額
                this.$emit('emitHouseCost', parseInt(houseCost));
                this.$emit('emitOtherPlanCost', this.otherPlanCost = parseInt(lifeCost) + parseInt(familyCost) + parseInt(telephoneCost) + parseInt(transportationCost) + parseInt(otherCost) + parseInt( this.propsStudentLoans));
            },
        },
        computed: {
            formatOutlayTotal() {
                return numberToMoney(this.outlayTotal + this.propsInsuranceTotal + this.propsStudentLoans);
            }
        },
        directives: {
            "sync-directive": InputSyncDirective
        }
    }
</script>

<style scoped lang="scss">
    #outlay {
        background-color: #e4efe7;
    }
</style>