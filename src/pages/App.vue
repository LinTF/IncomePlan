<template>
    <header></header>

    <main>
        <h1 class="txt-center">收入支出分析</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div id="income">
                        <h3>實際收入</h3>
                        <p class="txt-right">剩餘 {{ incomeTotal }} </p>
                        <hr />
                        <p>本薪 <input type="text" v-model="income" @keyup="total" /></p>
                        <p>勞保 <input type="text" v-model="laborInsurance" @keyup="total" /></p>
                        <p>健保 <input type="text" v-model="healthInsurance" @keyup="total" /></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div id="outlay">
                        <h3>固定支出</h3>
                        <p class="txt-right">總支出 {{  }}</p>
                        <hr />
                        <p>生活費 <input type="text" /></p>
                        <p>孝親費 <input type="text" /></p>
                        <p>保險 <input type="text" /></p>
                        <p>學貸 <input type="text" /></p>
                        <p>電話費 <input type="text" /></p>
                        <p>其他花費 <input type="text" /></p>
                        <p>交通費 <input type="text" /></p>
                    </div>
                </div>
                <div class="col-md-3">
                    
                </div>
                <div class="col-md-3">
                    
                </div>
            </div>
        </div>
    </main>

    <footer>
        <footerBlock />
    </footer>
</template>

<script>
    import footerBlock from '@/components/footerBolck.vue'

    export default {
        name: 'App',
        components: {
            footerBlock
        },
        data() {
            return {
                income: 0,
                laborInsurance: 0,
                healthInsurance: 0,
                incomeTotal: 0,
            }
        },
        computed: {
            total: function () {
                this.incomeTotal = parseInt(this.income) - parseInt(this.laborInsurance) - parseInt(this.healthInsurance)
            }
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        margin-top: 20px;
    }
</style>
