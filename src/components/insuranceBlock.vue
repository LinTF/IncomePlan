<template>
    <div id="insurance-item">
        <h4>保險支出</h4>
        <p class="txt-right">總金額 {{ insuranceTotal }} </p>
        <hr />
        <div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>壽險</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="lifeInsurance" @keyup="total" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>產險</span>
                    </div>
                    <div class="col-8">
                        <input type="text" v-model="propertyInsurance" @keyup="total" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                this.insuranceTotal = parseInt(this.lifeInsurance) + parseInt(this.propertyInsurance);

                if (isNaN(this.insuranceTotal)) {
                    this.insuranceTotal = 0
                }
            }
        }
    }
</script>

<style>

</style>