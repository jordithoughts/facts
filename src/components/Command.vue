<template>
  <div>
    <h1>Enter your command:</h1>
    <textarea v-model="cmd" cols=45 rows=1></textarea>
    <div>
      <span v-for="item in suggestions">
        {{item}}<br>
      </span>
    </div>
</template>

<script>
export default {
  name: 'Command',
  props: {
    
  },
  data(){
    return {
      cmd:""
    }
  },
  computed:{
    suggestions(){ 
      if(this.cmd!==""){
        return ['This is the first suggestion', 'This is the second suggestion']
      } else return ["no suggestions"];
    }
  },
  mounted(){

  }
}
</script>

/*
<style scoped>

</style>*/