<template>
  <div>
    <div class="col-md-5 mx-auto mt-5">
      <div class="bg-white shadow rounded overflow-hidden">
        <div class="px-4 pt-0 pb-4 cover">
          <div class="p-3 media align-items-end profile-head">
            <div class="profile mr-3">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt="..."
                width="130"
                class="rounded mb-2 img-thumbnail"
              />
            </div>
            <div class="media-body pb-3 text-dark">
              <h4 class="mt-0 mb-0"> 
              <div>Williams</div>
              
              <div class='mb-2'>{{user}}</div>
              </h4>
              <p class="small mb-4"><i class="fas fa-map-marker-alt mr-2"></i>New York</p>
            </div>
            <div><a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
          </div>
        </div>
        <div class="bg-light p-4 d-flex justify-content-end text-center p-3">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">215</h5>
              <small class="text-muted"> <i class="fas fa-image mr-1"></i>Photos</small>
            </li>
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">745</h5>
              <small class="text-muted"> <i class="fas fa-user mr-1"></i>Followers</small>
            </li>
            <li class="list-inline-item">
              <h5 class="font-weight-bold mb-0 d-block">340</h5>
              <small class="text-muted"> <i class="fas fa-user mr-1"></i>Following</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "account",
  mounted() {
    this.auth = localStorage.auth;
    this.user = localStorage.user;
    if(!this.auth){
      this.$router.push({ name: "main" });
    }
  },
  data() {
    return {
      auth:false,
      user:null,
    };
  },
};
</script>
<style lang="scss">

</style>
