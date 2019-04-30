<template>
    <div class="container bounceInRight animated">
        <v-progress-linear
        color="#50E3C2"
        height="5"
        value="100"
        ></v-progress-linear>
        <v-carousel hide-controls height="196">
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        <div class="title-section">
            <h2 class="product-title pull-left">The Monster Burrito</h2>
            <span class="product-price">$7.89</span>
        </div>
        <div class="product-des">
            <p>
                Mouth-wathering monster burrito stuffed with protein of your choice (al pastor, beef, chorizo, chicken, shrimp), beans, rice, cheese.
            </p>
        </div>
        <div class="action">
            <v-btn round color="success" id="vegan" dark>
                <svg height="18px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="18px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M423.4,358c-43.8-6.7-47.1-13.1-47.1-13.1c9-54.1-18.9-122.6-64.6-159.7c-60.7-49.3-153.1-13.5-225-88.5   c-16.8-17.5-7,196.3,83,277.3c65.8,59.2,143.3,41,164.6,31.3c19.3-8.8,32.8-24.9,32.8-24.9c35.1,10.8,52.5,10.2,52.5,10.2   C431.9,392.1,438.1,360.2,423.4,358z M343.2,361.6c-115.3-34.1-202-153.8-202-153.8s76.1,89.8,210.2,133.5   C351.6,348.1,347.6,357.8,343.2,361.6z"/></g></svg>
                vegan
            </v-btn>
            <v-btn round color="success" dark>
                <v-icon dark right>block</v-icon>
                dairy-free
            </v-btn>
        </div>
        <v-divider></v-divider>
        <div class="drop-down" @click="openMenu">
            <span>Choose Protein</span>
            <div>
                Al Pastor(+ $0.00)
            </div>
            <span class="chevron right"></span>
        </div>
        <v-divider></v-divider>
        <div class="reviews-box">
            <div class="title-section">
                <h2>Reviews</h2>
                <a href="javascript:void(0);" @click="showAllMostPopular('reviews')">{{ isShowAllMostPopular.reviews ? 'Less' : 'See all' }}</a>
            </div>

            <div id="review-list" :class="[isShowAllMostPopular.reviews ? 'show-all' : 'show-less']">
                <FanTip v-for="(tip, i) in fan_tips"
                :key="i"
                :tip_avatar="tip.avatar"
                :tip_text="tip.text"
                />
            </div>
        </div>
        <div class="most-popular-box">
            <div class="title-section">
                <h2>You Might Also Like</h2>
                <a href="javascript:void(0);" @click="showAllMostPopular('products')">{{ isShowAllMostPopular.products ? 'Less' : 'See all' }}</a>
            </div>

            <div :class="[isShowAllMostPopular.products ? 'product-list-all' : 'product-list']">
                <Product v-for="(product, i) in starter_products" 
                :key="i" 
                :product_image="product.image"
                :product_title="product.title"
                :product_price="product.price"
                :product_description="product.description"
                />
            </div>
        </div>
        <br>
        <div class="footer">
            <v-layout row>
                <v-flex xs4>
                    <div class="qty">
                        <div class="value-button" id="decrease" @click="qty_change('minus')" value="Decrease Value">-</div>
                        <input type="number" id="number" min="1" :value="[qty_value]" />
                        <div class="value-button" id="increase" @click="qty_change('plus')" value="Increase Value">+</div>
                    </div>
                </v-flex>
                <v-flex xs8>
                    <v-btn round color="success" dark>ADD $7.89</v-btn>
                </v-flex>
            </v-layout>
        </div>
        <div class="dropdown-menu hide" id="choose-protein">
             <p class="text-center"><strong>Choose Protein</strong></p>
             <div class="dropdown-item">
                <div class="item-title"><b>Chicken</b></div>
                <div class="item-price">+ $0.00</div>
                <v-checkbox v-model="checkbox1"></v-checkbox>
             </div>
             <v-divider></v-divider>
             <div class="dropdown-item">
                <div class="item-title"><b>Al Pastor</b></div>
                <div class="item-price">+ $0.00</div>
                <v-checkbox v-model="checkbox2"></v-checkbox>
             </div>
             <v-divider></v-divider>
             <div class="dropdown-item">
                <div class="item-title"><b>Steak</b></div>
                <div class="item-price">+ $0.00</div>
                <v-checkbox v-model="checkbox3"></v-checkbox>
             </div>
             <v-divider></v-divider>
             <div class="dropdown-item">
                <div class="item-title"><b>Shrimp</b></div>
                <div class="item-price">+ $0.00</div>
                <v-checkbox v-model="checkbox4"></v-checkbox>
             </div>
            <div class="dropdown-action">
                <v-btn round color="default" id="vegan" dark>
                    continue
                </v-btn>
            </div>
        </div>
        <div class="cover hide" @click="hideMenu"></div>
    </div>
</template>

<script>
import Product from '../Product'
import FanTip from '../FanTip'

export default {
    name: 'SubMenu',
    components: {
        Product,
        FanTip
    },
    mounted: function() {

    },
    data () {
        return {
            items: [
                {
                    src: require('../../assets/home_top_bg.png')
                },
                {
                    src: require('../../assets/home_top_bg.png')
                },
                {
                    src: require('../../assets/home_top_bg.png')
                },
                {
                    src: require('../../assets/home_top_bg.png')
                }
            ],
            isShowAllMostPopular: {
                reviews: false,
                products: false
            },
            fan_tips: [
                {
                avatar: require('../../assets/avatar_1.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_2.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_3.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_4.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_5.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_6.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_7.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                },
                {
                avatar: require('../../assets/avatar_8.jpg'),
                text: "I usually get the XL Burrito with extra meat on it, with a side of Savage Sauce, mmm!"
                }
            ],
            starter_products: [
                {
                image: require('../../assets/Asaparagus_Tomato_295x.jpg'),
                title: 'Chocolate Pancake',
                price: '$8',
                description: 'Chocolate lovers rejoice. Cocoa, chocolate chips and powdered sugar make this a breakfast to wake up for.',
                },
                {
                image: require('../../assets/baconegg_autoxauto_5c049c72e2885-png-keep-ratio_295x.png'),
                title: 'Bacon Mushroom Egg Souffle',
                price: '$5',
                description: 'This bacon and mushroom egg soufflé makes a real morning treat, paired with Swiss cheese.',
                },
                {
                image: require('../../assets/Black_Pepper_Chicken_295x.jpg'),
                title: 'Goat Cheese & Pepper Souffle',
                price: '$10',
                description: 'Creamy goat cheese is paired with roasted red pepper in this egg souffle.',
                },
                {
                image: require('../../assets/blue_cheese_autoxauto_5c2f1eb16b1c9-jpeg-keep-ratio_295x.jpeg'),
                title: 'Broccoli Cheese Souffle',
                price: '$11',
                description: 'A classic comforting broccoli and cheese egg souffle. Packed in a convenient to-go container.',
                },
                {
                image: require('../../assets/Blueberry_295x.jpg'),
                title: 'Blueberry Muffin',
                price: '$5',
                description: 'The perfect muffin to take away the winter blues, made from scratch and filled with blueberries.',
                },
                {
                image: require('../../assets/blueberry2_295x.jpg'),
                title: 'Blueberry Pancake',
                price: '$14',
                description: 'Delicious blueberry pancake served with whipped butter & keto maple syrup.',
                },
                {
                image: require('../../assets/Chicken_Gumbo1_295x.jpg'),
                title: 'Chicken Poblano Burger',
                price: '$20.5',
                description: 'This chicken burger is full of flavor and a cheesy pepperjack kick.',
                },
                {
                image: require('../../assets/Chimmichurri_Pork_295x.jpg'),
                title: 'Black Pepper Chicken',
                price: '$14',
                description: 'Black pepper chicken with crisp vegetables served with amazing cauli and egg fried rice.',
                },
                {
                image: require('../../assets/Decadent-Broccoli-Souffle_exps48882_HC2847498D05_22_5b_RMS-696x696_autoxauto_5c11d2d57cd60-jpg-keep-ratio_295x.jpeg'),
                title: 'Blue Cheese Burger',
                price: '$10',
                description: 'This over the top blue cheese and beef burger doesn\'t need an introduction. A cheesy beef patty, blue cheese dressing stacked on our very own dinner roll and topped with crispy bacon!',
                },
                {
                image: require('../../assets/goatcheese_autoxauto_5c049c9f9d333-png-keep-ratio_295x.png'),
                title: 'Pepperoni Pizza',
                price: '$20',
                description: 'Classic combination of cheese and pepperoni pizza.',
                },
                {
                image: require('../../assets/shrimppizza_295x.png'),
                title: 'Shrimp Alfredo Pizza',
                price: '$18',
                description: 'This delicious white pizza is topped with garlic butter shrimp on a bed of rich alfredo sauce and sweet red peppers.',
                }
            ],
            qty_value: 1
        }
    },
    created: function() {
        
    },
    methods: {
        openMenu() {
            $("#choose-protein").slideToggle('fast');
            $(".cover").show();
        },
        hideMenu() {
            $("#choose-protein").slideToggle('fast');
            $(".cover").hide();
        },
        showAllMostPopular: function (value) {
            if( value == "reviews" ) {
                this.isShowAllMostPopular.reviews = !this.isShowAllMostPopular.reviews
            }
            else {
                this.isShowAllMostPopular.products = !this.isShowAllMostPopular.products
            }
        },
        qty_change(param) {
            if(param == "plus") {
                this.qty_value++
            }
            else {
                if(this.qty_value > 1) {
                    this.qty_value--
                }
                else {
                    this.qty_value = 1;
                }
            }
        }
    },
}
</script>

<style>
    #choose-protein {
        position: fixed;
        bottom: 0;
        z-index: 30;
        background-color: #fff;
        width: 375px;
        border-top: 1px solid #ccc;
    }
    .dropdown-menu {
        padding: 10px;
    }
    .dropdown-menu .dropdown-item {
        position: relative;
        padding: 5px 0;
    }
    .dropdown-menu .v-input--checkbox {
        position: absolute;
        right: 0;
        top: -10px;
    }
    .dropdown-action button {
        width: 96%;
    }
    .text-center {
        text-align: center;
    }
    .v-progress-linear {
        margin: 0px;
    }
    .profile-box {
        position: relative;
    }
    .title-section {
        margin-top: 20px;
    }
    .title-section .product-title {
        font-family: 'CircularStd-Bold';
    }
    span.product-price {
        font-family: "CircularStd-Bold";
        font-size: 15px;
        color: #50e3c2;
        font-weight: bold;
    }
    .product-des {
        font-family: 'CircularStd-Book';
        font-size: 14px;
        margin: 10px;
        color: #333;
    }
    .action .v-icon--right {
        margin-left: 0;
        margin-right: 5px;
    }
    .action {
        margin-bottom: 10px;
    }
    .action button {
        text-transform: lowercase;
        height: 25px;
        font-weight: 300;
        font-size: 12px;
        padding: 0;
    }
    .action button .v-btn__content {
        padding: 0;
        margin: 0;
    }
    .action button .v-icon {
        font-size: 1rem;
    }
    .action button#vegan {
        min-width: auto;
        padding: 0 10px 0 7px;
        margin-right: 0;
    }
    .action svg {
        fill: #fff;
    }
    .v-carousel__controls {
        background: rgba(0,0,0,0);
    }
    .v-item-group.theme--dark .v-btn .v-btn__content .v-icon {
        font-size: 12px !important;
    }
    .v-item-group.theme--dark button {
        width: 15px;
        height: 15px;
    }
    .v-carousel__controls__item {
        margin: 0 0 !important;
    }
    .v-carousel__controls .v-btn--active {
        color: #fff !important;
    }
    .drop-down {
        font-size: 14px;
        padding: 5px 10px;
        font-family: 'CircularStd-Book';
        position: relative;
    }
    .drop-down .chevron {
        position: absolute;
        right: 15px;
        top: 20px;
        font-size: 25px;
    }
    /* div.drop-down:after {
        content: '\003e';
        position: absolute;
        right: 10px;;
        top: 20px;
    } */
    .drop-down span {
        font-weight: bold;
    }
    .drop-down select {
        width: 100%;
        height: 30px;
        padding: 0;
    }
    .reviews-box {
        margin-right: 8px;
    }
    #review-list {
        padding: 10px;
    }
    .show-less {
        max-height: 145px;
        overflow: hidden;
    }
    .show-all {
        max-height: 100%;
        overflow: none;
    }
    #review-list .tip-container {
        width: 100%;
        margin-top: 5px;
        margin-right: 20px !important;
    }
    .tip-container img {
        border-radius: 50%;
    }
    .footer button {
        width: 92%;
    }
    .qty {
        width: 92%;
        margin: 0 auto;
        text-align: center;
        height: 36px;
        padding-top: 6.5px;
    }
    .value-button {
        display: inline-block;
        border: 1px solid #ddd;
        margin: 0px;
        width: 38px;
        height: 36px;
        text-align: center;
        vertical-align: middle;
        line-height: 36px;
        background: #eee;
        font-weight: bold;
        color: #333;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-top: -4px;
        position: relative;
        z-index: 1;
    }
    .value-button:hover {
        cursor: pointer;
    }
    .qty #decrease {
        margin-right: -4px;
        border-radius: 50% 0 0 50%;
    }
    .qty #increase {
        margin-left: -4px;
        border-radius: 0 50% 50% 0;
    }
    .qty #input-wrap {
        margin: 0px;
        padding: 0px;
    }
    input#number {
        text-align: center;
        border: none;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        background-color: #eee;
        margin: 0px;
        width: 38px;
        height: 36px;
        color: #000;
        font-size: 1.2rem;
        position: relative;
        z-index: 2;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    #increase {
        border-left: none;
    }
    #decrease {
        border-right: none;
    }
    .chevron::before {
        border-style: solid;
        border-width: 0.05em 0.05em 0 0;
        content: '';
        display: inline-block;
        height: 0.45em;
        left: 0.15em;
        position: relative;
        top: 0.15em;
        transform: rotate(-45deg);
        vertical-align: top;
        width: 0.45em;
        border-color: #333;
    }
    .chevron.right:before {
        left: 0;
        transform: rotate(45deg);
    }

    .chevron.bottom:before {
        top: 0;
        transform: rotate(135deg);
    }

    .chevron.left:before {
        left: 0.25em;
        transform: rotate(-135deg);
    }
</style>