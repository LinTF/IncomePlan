<template>
    <div id="insurance-item" class="bag-block">
        <h4>保險支出</h4>
        <p class="txt-right">總金額 ${{ numberToMoney(insuranceTotal) }} {{ $emit('emitInsuranceCost', parseInt(insuranceTotal)) }} </p>
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
                        <input type="number" v-sync-directive="lifeInsurance" @keyup="total" min="0" @input="lifeInsurance = $event.target.value" />
                    </div>
                </div>
            </div>
            <div class="income-item">
                <div class="row">
                    <div class="col-4 title">
                        <span>產險</span>
                    </div>
                    <div class="col-8">
                        <input type="number" v-sync-directive="propertyInsurance" @keyup="total" min="0" @input="propertyInsurance = $event.target.value" />
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
        name: 'Insurance',
        data() {
            return {
                insuranceTotal: 0,
                lifeInsurance: 0,
                propertyInsurance: 0,

                // public js
                numberToMoney,
                isEmpty
            }
        },
        computed: {
            total() {
                const lifeInsurance = isEmpty(this.lifeInsurance);
                const propertyInsurance = isEmpty(this.propertyInsurance);

                this.insuranceTotal = parseInt(lifeInsurance) + parseInt(propertyInsurance);
            }
        },
        directives: {
            "sync-directive": InputSyncDirective
        }
    }
</script>

<style scoped lang="scss">
    #insurance-item {
        background-color: #e4efe7;
    }
</style>