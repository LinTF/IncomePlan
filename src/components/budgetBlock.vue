<template>
    <div id="budget" class="bag-block">
        <h4>預算</h4>
        <p class="txt-center">使用本薪收入 ${{ formatPropsIncome }} 做分配百分比，勞健保歸入其他花費</p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                    </div>
                    <div class="col-3 txt-center">
                        <span>目標金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>已規劃金額</span>
                    </div>
                    <div class="col-3 txt-center">
                        <span>剩餘金額</span>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">存錢（30%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">
                            ${{ getSaveMoney }}
                        </p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ formatPropsSaveTotal }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getLastSave }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">風險（10%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getRisk }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ formatInsuranceTotal }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getLastInsurance }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">住家（25%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getHouseCost }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ formatHouseCost }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getLastHouseCost }}</p>
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-3">
                        <p class="txt-center">其他（35%）</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getOtherConsumption }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getOtherCost }}</p>
                    </div>
                    <div class="col-3">
                        <p class="txt-center">${{ getLastOtherCost }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { numberToMoney } from '@/assets/js/numberToMoney';

    export default {
        name: "budgetBlock",
        props: {
            propsIncomeTotal: {
                type: Number,
                required: true
            },
            propsSaveTotal: {
                type: Number,
                required: true
            },
            propsInsuranceTotal: {
                type: Number,
                required: true
            },
            propsHouseCost: {
                type: Number,
                required: true
            },
            propsOtherPlanCost: {
                type: Number,
                required: true
            },
            propsIncome: {
                type: Number,
                required: true
            },
            propsGovInsuranceTotal: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                // 預算
                /// 存錢
                saveMoney: 0,
                /// 風險
                risk: 0,
                /// 住
                house: 0,
                /// 其他
                otherConsumption: 0,

                // public js
                numberToMoney,
            }
        },
        methods: {
            
        },
        computed: {
            formatPropsIncome() {
                return numberToMoney(this.propsIncome);
            },
            formatPropsSaveTotal() {
                return numberToMoney(this.propsSaveTotal);
            },
            formatInsuranceTotal() {
                return numberToMoney(this.propsInsuranceTotal);
            },
            formatHouseCost() {
                return numberToMoney(this.propsHouseCost);
            },
            getSaveMoney() {
                const saveMoney = this.propsIncome * 0.3

                this.saveMoney = saveMoney
                this.$emit('emitSaveMoney', saveMoney);

                return numberToMoney(saveMoney);
            },
            getLastSave() {
                const lastSave = this.saveMoney - this.propsSaveTotal;

                this.$emit('emitLastSave', lastSave);
                return numberToMoney(lastSave);
            },
            getRisk() {
                const risk = this.propsIncome * 0.1;
                this.risk = risk;
                return numberToMoney(risk);
            },
            getLastInsurance() {
                const lastInsurance = this.risk - this.propsInsuranceTotal;
                
                this.$emit('emitLastInsurance', lastInsurance);
                return numberToMoney(lastInsurance);
            },
            getHouseCost() {
                const house = this.propsIncome * 0.25;
                this.house = house;
                return numberToMoney(house);
            },
            getLastHouseCost() {
                const lastHouseCost = this.house - this.propsHouseCost;

                this.$emit('emitLastHouseCost', lastHouseCost);
                return numberToMoney(lastHouseCost);
            },
            getOtherConsumption() {
                const otherConsumption = this.propsIncome * 0.35;

                this.otherConsumption = otherConsumption
                return numberToMoney(otherConsumption);
            },
            getOtherCost() {
                const otherCost = this.propsOtherPlanCost + this.propsGovInsuranceTotal;
                return numberToMoney(otherCost);
            },
            getLastOtherCost() {
                const lastOtherCost = this.otherConsumption - this.propsOtherPlanCost - this.propsGovInsuranceTotal;

                this.$emit('emitLastOtherCost', lastOtherCost);
                return numberToMoney(lastOtherCost);
            },
        },
    }
</script>

<style scoped lang="scss">
    #budget {
        background-color: #F6F6F6;
    }
</style>