<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">

        <h1>Smagic39.CoM</h1>
        <Form />
        <Display />
      </div>
    </div>

  </div>
</template>

<script>
  import Form from './components/Form'
  import Display from './components/Display'

  export default {
    name: 'App',
    components: {
      Form,
      Display
    }
  }

</script>
