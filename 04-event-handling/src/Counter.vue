<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const isEven = computed(()=> count.value % 2 === 0);
const emit = defineEmits(['increment'])
const handleClick = () => {
  count.value += 1
  //c.emit('increment', this.count)
  emit('increment', {
    count: count.value,
    isEven: isEven.value
  })
}
</script>

<template>
  <button @click="handleClick">Increment</button>
  {{ count }} {{ count ? isEven : '' }} 
</template>

<!--script>
/* Composition API
import { ref, computed } from 'vue'

export default {
  setup(p,c) {      
    const count = ref(0)
    const isEven = computed(()=> count.value % 2 === 0);
    const handleClick = () => {
      count.value += 1
      //c.emit('increment', this.count)
      c.emit('increment', {
        count: count.value,
        isEven: isEven.value
      })
      
    }
    return {
      count,
      isEven,
      handleClick
    };      
  }
};
*/ 

/* Options API
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
   isEven () {
     return this.count % 2 === 0
   }
  },
  methods: {
    handleClick() {
      this.count += 1
      //this.$emit('increment', this.count)
      this.$emit('increment', {
        count: this.count,
        isEven: this.isEven
      })
      
    }
  }
}*/
</script-->

  
