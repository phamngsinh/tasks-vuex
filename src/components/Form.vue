<template>
    <div>
        <label for="flavor">Favorite ice cream flavor?</label>
        <input type="flavor" @input="changed">
    </div>
</template>

<script>

export default {
  name: 'Form',
  methods:{
      changed:function(event){
            this.$store.commit('change',event.target.value)
      }
  }
}
</script>
