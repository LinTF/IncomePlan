<template>
    <div id="insurance-item">
        <h4>保險支出</h4>
        <p class="txt-right">總金額 {{ insuranceTotal }} {{ $emit('emitInsuranceCost', insuranceTotal) }} </p>
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
                        <span>壽險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="lifeInsurance" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>產險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-model="propertyInsurance" @keyup="total" min="0" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isEmptyStatement } from '@babel/types'

    export default {
        name: 'Insurance',
        data() {
            return {
                insuranceTotal: 0,
                lifeInsurance: 0,
                propertyInsurance: 0
            }
        },
        computed: {
            total() {
                const emptyVal = '';
                const lifeInsurance = this.lifeInsurance === emptyVal ? 0 : this.lifeInsurance;
                const propertyInsurance = this.propertyInsurance === emptyVal ? 0 : this.propertyInsurance;

                this.insuranceTotal = parseInt(lifeInsurance) + parseInt(propertyInsurance);
            }
        }
    }
</script>

<style>

</style>