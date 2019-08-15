<template>
  <div>
    <button type="button" class="btn btn-primary" @click="login">
    Open modal
  </button>
  <div class="modal fade" ref="mymodal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
        <!-- Modal Header -->
        
        
        <!-- Modal body -->
        <div class="modal-body">
          <!-- height="500" width="300" -->
          <center>
            <iframe id="cas-iframe" height="500" width="300" frameBorder="0"
            src="https://cas.lu.se/cas/login?service=https%3a%2f%2fperson2.sol.lu.se%2fJohanDahl%2fcastest%2fok.html"></iframe>
          </center>
        </div>
        
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log(this.$refs.mymodal)
      this.$refs.mymodal.modal("show");
    }
  }
}
</script>
