<template>
  <div class="creative-page" style="background-color: #E6FBFA;">
    <Navbar />

    <div class="container py-5">
      <h2 class="text-center mb-5" style="color: #0357AF;">More Facts about Me!</h2>

      <div class="row g-4">
        <div
          class="col-md-6"
          v-for="(entry, index) in slambook"
          :key="index"
        >
          <div
            class="card shadow border-0 h-100"
            :style="{ backgroundColor: entry.bgColor, color: entry.textColor }"
          >
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ entry.title }}</h5>
              <p class="card-text">{{ entry.content }}</p>
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
  name: 'CreativePage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      slambook: [
        {
          title: 'Nickname',
          content: 'Some people call me by my name, Aeron, while family members call me just Ae. Friends call me Dani which is a whole lot of story for another day.',
          bgColor: '#74CEF7',
          textColor: '#0357AF',
        },
        {
          title: 'Hobbies',
          content: 'I sing, I write, I cook, I do a lot of binge watching especially on rainy days',
          bgColor: '#9BE8F0',
          textColor: '#0357AF',
        },
        {
          title: 'Likes',
          content: 'Rain, croissants, green results in running code, smell of old books, cooking',
          bgColor: '#E6FBFA',
          textColor: '#0357AF',
        },
        {
          title: 'Dislikes',
          content: 'Bugs in code, loud chewing, cold coffee, and elevators',
          bgColor: '#E4815A',
          textColor: '#fff',
        },
        {
          title: 'Dream Destination',
          content: 'Paris, France 🥐',
          bgColor: '#0180CC',
          textColor: '#fff',
        },
        {
          title: 'Favorite Quote',
          content: '"And when my time is up, have I done enough? Will they tell my story?" 🎶 - by Elizabeth Schuyler Hamilton from the Broadway Musical "Hamilton"',
          bgColor: '#0357AF',
          textColor: '#fff',
        },
      ],
    };
  },
};
</script>

<style scoped>
.creative-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.card {
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
