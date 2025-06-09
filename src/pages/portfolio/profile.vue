<template>
  <div class="profile-page" style="background-color: #E6FBFA;">
    <Navbar />

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow" style="background-color: #ffffff; border-left: 8px solid #0357AF;">
            <div class="card-body text-center">
              <img
                src="@/assets/profile/photo.jpg"
                alt="Profile"
                class="rounded-circle mb-3 border"
                style="border: 4px solid #0180CC;"
                width="150"
                height="150"
              />
              <h3 class="card-title" style="color: #0357AF;">Aeron Jamil C. Roxas</h3>
              <p class="text-muted" style="color: #0180CC;">4th Year Computer Engineering Student</p>

              <p class="mt-3" style="color: #333;">
                A graduate of Computer Engineering Technology from PUP Institute of Technology, now in the ladderized program to earn his Bachelor's Degree in Computer Engineering.
              </p>

              <hr style="border-color: #74CEF7;" />

              <div class="row text-start px-3">
                <div class="col-md-6 mb-3">
                  <h6 style="color: #0357AF;">Email</h6>
                  <ul>
                  <li>roxasaeron@outlook.com</li>
                  <li>aeronjamilcroxas@iskolarngbayan.pup.edu.ph</li>
                  </ul>
                </div>
                <div class="col-md-6 mb-3">
                  <h6 style="color: #0357AF;">Location</h6>
                  <p>Metro Manila, Philippines</p>
                </div>
              </div>

              <div class="row text-start px-3">
                <div class="col-md-6 mb-3">
                  <h6 style="color: #0357AF;">Social Media</h6>
                  <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  </ul>
                </div>
              </div>

              <div class="mt-4">
                <a href="#" class="btn text-white me-2" style="background-color: #E4815A; border: none;">
                  Contact
                </a>
                <a href="#" class="btn" style="background-color: #74CEF7; color: #0357AF; border: none;">
                  Portfolio
                </a>
              </div>
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
    name: 'ProfilePage',
    components: {
        Navbar,
        Footer,
    }
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  flex: 1;
}
</style>
