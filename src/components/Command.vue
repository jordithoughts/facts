template>
  <div>
    <h1>Enter your command: {{msg}}</h1>
</template>

<script>
export default {
  name: 'Command',
  props: {
    msg: String
  }
}
</script>

/*
<style scoped>

</style>*/