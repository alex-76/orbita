import _ from "lodash";
import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "../components/VHome.vue";
import Post from "../components/Post/VPost.vue";
import Page from "../components/Page/VPage.vue";
import Shop from "../components/WC/Shop/VShop.vue";
import Product from "../components/WC/SingleProduct/VSingleProduct.vue";
import Cart from "../components/WC/Cart/VCart.vue";
import Checkout from "../components/WC/Checkout/VCheckout.vue";
import NotFoundComponent from "../components/VNotFoundComponent.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/:pageSlug",
      name: "Page",
      component: Page,
      props: true
    },
    {
      path: "/:postSlug",
      name: "Post",
      component: Post,
      props: true
    },
    {
      path: "/:shopSlug",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/:productSlug/:productID",
      name: "Product",
      component: Product,
      props: true
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ],
  mode: "history",
  base: "",

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.afterEach((to, from) => {
  // Add a body class specific to the route we're viewing
  let body = document.querySelector("body");
  let bodyClasses = body.className.split(" ");

  //console.log(bodyClasses);

  if (bodyClasses.length > 0) {
    const newBodyClasses = bodyClasses.filter(theClass =>
      theClass.startsWith("vue--page--")
    );
    //console.log(newBodyClasses);
  }

  const slug = _.isEmpty(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;

  //console.log(slug);

  body.classList.add("vue--page--" + slug);
});

export default router;
