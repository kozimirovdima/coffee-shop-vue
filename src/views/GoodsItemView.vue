<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-0 offset-1">
            <img
              class="shop__girl"
              alt="coffee_item"
              :src="product.image"
              style="width: 100%"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <ul class="footer d-flex flex-wrap">
              <li class="footer__item">
                <a href="./index.html">
                  <img src="logo/Logo_black.svg" alt="logo" />
                </a>
              </li>
              <li class="footer__item">
                <a href="./coffeepage.html">Our coffee</a>
              </li>
              <li class="footer__item">
                <a href="./goodspage.html">For your pleasure</a>
              </li>
              <li class="footer__item">
                <a href="./contacts.html">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <img
          class="beanslogo"
          src="logo/Beans_logo_dark.svg"
          alt="Beans logo"
        />
      </div>
    </footer> -->
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  components: { NavBarComponent },
  data() {
    return {
      product: {
        id: 0,
        price: "",
        name: "",
        image: "",
        country: "",
        description: "",
      },
    };
  },
  mounted() {
    fetch(`http://localhost:3000/coffee/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
  },
  destroyed() {
    this.product = null;
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      return this.$store.getters["getProductById"](this.$route.params.id);
    },
  },
};
</script>
