<template>
  <div class="showcase-page" style="background-color: #E6FBFA;">
    <Navbar />

    <div class="container py-5">
      <h2 class="text-center mb-5" style="color: #0357AF;">Some of My Works and Achievements</h2>

      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="(item, index) in showcaseItems" :key="index">
          <div class="card h-100 shadow-sm border-0" :style="{ borderTop: '6px solid ' + item.color }">
            <img :src="item.image" class="card-img-top" alt="Project preview" />
            <div class="card-body">
              <h5 class="card-title" :style="{ color: item.color }">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'ShowcasePage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      showcaseItems: [
        {
          title: 'CpE Fair 2024: Overall Champion',
          description: 'As Section Head of Sector 7, we managed to take the championship of last year\'s CpE Fair',
          image: 'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/490146269_1121448273327553_4310896221168774618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHi4hi9EWfWtPBCY7aWM3mM4E3yZhV1m5_gTfJmFXWbnw0QBFMHurGBYbO0ubRGs4oVkj5Qrz2tTfQvuOwQ8wVC&_nc_ohc=td8ctaCCuBgQ7kNvwFe9qU7&_nc_oc=AdkjLlqUo0sz7bVRSUDH6HRdYPLPGKicMzSHlSApYWvktwxEqwm3nvW_5PUthRiQOaq8PhHnHbfPJc8NcuCV8jkQ&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=ICgQU9wl7nw1cmCml8QCsg&oh=00_AfPkjxZPXNcJtSFkBCnW7NQOhr4g16ixrn5EmYBxb0izEA&oe=684C3961',
          color: '#0357AF',
        },
        {
          title: 'Start Up 2025: Event Head',
          description: 'Became the Event Head of a 3-day Seminar and Workshop event here in PUP',
          image: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/503813978_122123467502835434_5434288457317586675_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHByeNicfBYfiv0ljwWaVE87PVL_oucPXDs9Uv-i5w9cBhXHBwRBOs6nuYjfIiev0XTITcKNL7h9rmUSRZxjeoN&_nc_ohc=_cPbtbx-5z0Q7kNvwGuW_Ca&_nc_oc=AdlIJ8YMaBaB1oKCU4yWwPMtEJxCIE73B6uI6IejVC0pVNpB1N3MKvTISRdcwMiPas_fnWP7Xn6kQIeGr9qleYhs&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=Txfg333h6AFlwFf7cOP4Vg&oh=00_AfPqqZTt0QI_MiYuKeiTwg3NFTqIdYSEj5VJMjoVk4PZmA&oe=684C29CF',
          color: '#0180CC',
        },
        {
          title: 'SHS Robotics Special Awardee',
          description: 'Became one of the two Best in Robotics awardees of my Senior High School batch in St. Paul University Manila',
          image: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/104358215_3050118461710746_1908820738918790403_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFM-W09eSAQAUVuNYIaBMbsZn87qiSmZVFmfzuqJKZlUXD-oxn8oXJ8Glxxp9Ktpiv-1MGoDE_CCST9V3En_dCP&_nc_ohc=5gcMtTtE8DwQ7kNvwH5SXuE&_nc_oc=AdksNTjNq_jFlREy4hJH6SzIyL37QqbV-XsejBkpAuDXng-_tDfGwlIZTlidrIqgA8DJnNsDvmp-dTQmKr5D4NaA&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=KwYo0G7jiFw9aMEA0pBXFg&oh=00_AfNIVUCIiLeLPXZZQnhV357XobOdg6JD4YdCDWJmPvcAzQ&oe=686DE62F',
          color: '#74CEF7',
        },
        {
          title: 'Pet Connect Caloocan: Project Lead',
          description: 'Created a Web and Mobile app that aimed to facilitate animal adoption in Caloocan',
          image: 'https://imgur.com/AgvoPXd.png',
          color: '#9BE8F0',
        },
        {
          title: 'Social Media Manager',
          description: 'Became the Social Media Manager of Barangay 135 of Pasay City until 2022. Responsible for Desiging art, captions, and post scheduling',
          image: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/473648886_592478280094895_8962094156545206988_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHCmP3wbcYGAm4FV2UHusZuiibTqp0ZdkyKJtOqnRl2TIkbs_D-_MfMbc1v77ZJVFwkRvhvYEyx18zie-yMwdUG&_nc_ohc=Hq_vlRouV7UQ7kNvwFHH-N1&_nc_oc=AdlP_nRk67sEsU_gAV4jG4yd2h8oqovanyq9rBNULXN84E0xs_Zn4Mz5Kg2T60Tm_AU5FLr73-_MzJuGe9sz0OWq&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=mh24fYd1Oa57vYtr4YwgIQ&oh=00_AfPelmQLNQqNueVUIlhp8o-9fgP9kBo053A2WRAvISjHQw&oe=684C36AA',
          color: '#E4815A',
        },
        {
          title: 'MS Office Specialist for Excel',
          description: 'Became a Certified Specialist for Microsoft Office. Scored Top 3 in the Certification exam',
          image: 'https://imgur.com/ESUeezI.png',
          color: '#0357AF',
        },
      ],
    };
  },
};
</script>

<style scoped>
.showcase-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

/* Add hover animation for cards */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
