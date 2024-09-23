
<script setup>

  
import { VDataTable}  from '../../node_modules/vuetify/lib/components/VDataTable'
  const items = [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
    // ... more items
  ]
</script> 

<template>
  <main>
    <v-data-table :items="items"></v-data-table>
 </main>
</template>
