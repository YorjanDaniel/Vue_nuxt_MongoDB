<template>
  <div>
    <h1>Notas</h1>

    <form @submit.prevent="agregarNota">
      <input v-model="form.title" placeholder="Título" required />
      <input v-model="form.content" placeholder="Contenido" required />
      <button type="submit">Agregar Nota</button>
    </form>

    <ul>
      <li v-for="nota in notas" :key="nota._id">
        <strong>{{ nota.title }}</strong>: {{ nota.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const notas = ref([])
const form = ref({ title: '', content: '' })

const { data } = await useFetch('/api/notas')
notas.value = data.value?.notas || []

const agregarNota = async () => {
  await $fetch('/api/notas', {
    method: 'POST',
    body: form.value
  })

 
  const { data: nuevasNotas } = await useFetch('/api/notas')
  notas.value = nuevasNotas.value?.notas || []

  form.value = { title: '', content: '' } 
}
</script>
