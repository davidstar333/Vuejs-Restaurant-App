<template>
  <div class="container">
    <v-progress-linear
      color="#50E3C2"
      height="5"
      value="100"
    ></v-progress-linear>

      <div class="profile-box">
        <v-img
          :src="require('../../assets/home_top_bg.png')"
          gradient="to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,1)"
        >
          <label class="point-label">413 pts</label>
          <v-layout align-center row fill-height class="profile-info">
            <v-avatar color="#d8d8d8" class="profile-avatar">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>

            <v-layout column>
              <div class="main-title">Jack's Bomb Ass Burritos</div>
              <div class="sub-title">Hell's Kitchen</div>
            </v-layout>         

          </v-layout>
        </v-img>

        <div class="skip-box">
          <p>
            Skip the Line and Instantly Order Through Your Phone
            <a class="btn-close" href="javascript:void(0);"> 
              <v-icon>close</v-icon>
            </a>
          </p>
        </div>
      </div>

      <div class="search-box">
          <v-icon>search</v-icon>
          <input type="text" placeholder="Search" />
      </div>

      <div class="most-popular-box">
        <div class="title-section">
            <h2>Most Popular</h2>
            <a href="javascript:void(0);" v-on:click="showAllMostPopular()">{{ isShowAllMostPopular ? 'Less' : 'See all' }}</a>
        </div>

        <div :class="[isShowAllMostPopular ? 'product-list-all' : 'product-list']">
            <Product v-for="(product, i) in products" 
            :key="i" 
            :product_image="product.image"
            :product_title="product.title"
            :product_price="product.price"
            :product_description="product.description"
            />
        </div>
      </div>

      <div class="fan-tips-box">
        <div class="title-section">
          <h2>Fan Tips <img style="margin-left: 10px;" width="15px" src="../../assets/certificate_check.png"/></h2>
        </div>

        <div class="product-list">
          <FanTip v-for="(tip, i) in fan_tips"
          :key="i"
          :tip_avatar="tip.avatar"
          :tip_text="tip.text"
          />
        </div>
      </div>

      <div class="most-popular-box">
          <div class="title-section">
            <h2>Starters</h2>
          </div>

          <div class="product-list-all">
            
                <Product v-for="(product, i) in starter_products" 
                :key="i" 
                :product_image="product.image"
                :product_title="product.title"
                :product_price="product.price"
                :product_description="product.description"
                />
            
          </div>
      </div>
  </div>
</template>

<script>
  import Product from '../Product'
  import FanTip from '../FanTip'

  export default {
    name: 'Home',
    components: {
      Product,
      FanTip
    },
    methods: {
      showAllMostPopular: function () {
        this.isShowAllMostPopular = !this.isShowAllMostPopular;
      }
    },
    data: () => ({
      isShowAllMostPopular: false,
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
      products: [
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
      ]
    })
  }
</script>

<style>
  .v-progress-linear {
    margin: 0px;
  }

  .point-label {
    color: white;
    background-color: #50E3C2;
    position: absolute;
    right: 10px;
    top: 5px;
    border-radius: 20px;
    padding: 2px 8px;
    font-family: "CircularStd-Medium";
  }

  .profile-info {
    padding: 0px 10px;
  }

  .profile-info .profile-avatar {
    margin-right: 10px;
  }

  .profile-info .main-title {
    color: white;
    font-family: "CircularStd-Bold";
    font-size: 18px;
  }

  .profile-info .sub-title {
    font-family: "CircularStd-Medium";
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    margin-top: -3px;
  }

  .profile-box {
    position: relative;
  }

  .skip-box {
    bottom: 0px;
    position: absolute;
    text-align: center;
    background-color: white;
    z-index: 2;
  }

  .skip-box p {
    border: 1px solid #212121;
    color: #212121;
    font-family: "CircularStd-Bold";
    font-size: 13px;
    padding: 5px 60px;
    margin: 10px;
    text-transform: uppercase;
    border-radius: 10px;
    position: relative;
  }

  .skip-box .btn-close {
    position: absolute;
    right: 3px;
    top: 3px;
    color: #212121;
  }

  .skip-box .btn-close i {
    color: #212121;
    font-size: 20px;
  }

  .search-box {
    margin: 0px 10px;
    background-color: #F2F2F2;
    border-radius: 5px;
    padding: 10px;
    display: flex;
  }

  .search-box i {
    color: #A5A5A5;
  }

  .search-box input {
    font-family: "CircularStd-Medium";
    font-size: 14px;
    color: #A5A5A5;
  }

  .most-popular-box {
    margin-top: 10px;
  }

  .title-section {
    display: flex;
    padding: 0px 10px;
    align-items: center;
    justify-content: space-between;
  }

  .title-section .category-title {
    font-family: "CircularStd-Bold";
    font-size: 17px;
    color: #242424;
  }

  .title-section a {
    color: #50E3C2;
    text-decoration: none;
    font-size: 14px;
    font-family: "CircularStd-Medium";    
  }

  .product-list {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
    display: flex;
    overflow-x: auto;
  }

  .product-list-all {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
    display: grid;

    grid-template-columns: calc( 50% - 10px ) calc( 50% - 10px );
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .product-list-all .product-container {
    margin-right: 0px;
    width: 100%
  }

  .fan-tips-box {
    margin-top: 10px;
  }
</style>
