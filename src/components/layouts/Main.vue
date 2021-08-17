<template>
    <main class="main">        
        <div class="main__top">
        </div>
        <div class="main__content">
            <div class="main__content-left">
                <slot></slot>
            </div>
            <div class="main__content-right">
                <img src="@/assets/img/section.png" alt="">
                <h2>A legendary cap set that feels like new</h2>
                <p>
                    Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.Using the "Insert" panel on the right, drag and drop 
                    the Abandoned Cart element onto the page below.
                </p>
                <base-button>
                    Register now
                </base-button>
            </div>
        </div>
    </main>
</template>

<script>

</script>
<style scoped>
    .main {
        flex: auto;
        display: flex;
        flex-direction: column;
    }
    .main__top {
        background: #FFFFFF;
        box-shadow: 0px 5px 10px rgba(37, 42, 50, 0.1);
        height: 70px;
        position: relative;
    }
    .main__content {
        flex: auto;
        display: flex;
    }
    .main__content-left {
        flex: 0 0 45%;
        background-color: #F5F5FC;
    }
    .main__content-right {
        flex: 0 0 55%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px 44px;
        position: relative;
        background-color: #FFFFFF;
    }
    .main__content-right img {
        width: 100%;
    }
    .main__content-right h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #252A32;
        margin: 30px 0;
    }
    .main__content-right p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #97AACD;
        margin: 0;
    }
    .main__content-right .btn {
        outline: none;
        border: 0;
        padding: 10px 30px;
        background-color: #4368E0;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 145%;
        display: flex;
        align-items: flex-end;
        text-align: center;
        color: #F6F9FE;
        margin-top: 30px;
    }
</style>