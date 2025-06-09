<template>
  <div class="contact-page" style="background-color: #E6FBFA;">
    <Navbar />

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow" style="background-color: #ffffff; border-left: 8px solid #0357AF;">
            <div class="card-body">
              <h3 class="card-title mb-4 text-center" style="color: #0357AF;">Get in Touch with Me!</h3>

              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label" for="name" style="color: #0357AF;">Name</label>
                  <input type="text" id="name" v-model="form.name" class="form-control" required />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="email" style="color: #0357AF;">Email</label>
                  <input type="email" id="email" v-model="form.email" class="form-control" required />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="message" style="color: #0357AF;">Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    class="form-control"
                    required
                  ></textarea>
                </div>

                <div class="text-center mt-4">
                  <button type="submit" class="btn text-white" style="background-color: #E4815A;">
                    Send Message
                  </button>
                </div>

                <p v-if="submitted" class="text-success mt-3 text-center">Message sent! 🚀</p>
              </form>
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
  name: 'ContactPage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      // Simulated form submission
      console.log('Form submitted:', this.form);
      this.submitted = true;
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
