<script setup>
import { ref, computed } from 'vue'

const numero1 = ref(0)
const numero2 = ref(0)
const operacao = ref('soma')

const resultado = computed(() => {
  const n1 = parseFloat(numero1.value) || 0
  const n2 = parseFloat(numero2.value) || 0

  switch (operacao.value) {
    case 'soma':
      return n1 + n2
    case 'subtracao':
      return n1 - n2
    case 'multiplicacao':
      return n1 * n2
    case 'divisao':
      return n2 !== 0 ? n1 / n2 : 'Erro (Divisão por zero)'
    default:
      return 0
  }
})
</script>

<template>
  <main class="container">
    <div class="card">
      <h1>Calculadora Aritmética</h1>
      <p class="subtitle">Desenvolvido em Vue.js</p>

      <div class="form-group">
        <label for="num1">Primeiro Número:</label>
        <input 
          id="num1" 
          type="number" 
          v-model.number="numero1" 
          placeholder="Digite o primeiro número" 
        />
      </div>

      <div class="form-group">
        <label for="num2">Segundo Número:</label>
        <input 
          id="num2" 
          type="number" 
          v-model.number="numero2" 
          placeholder="Digite o segundo número" 
        />
      </div>

      <div class="form-group">
        <label for="operacao">Operação:</label>
        <select id="operacao" v-model="operacao">
          <option value="soma">Adição (+)</option>
          <option value="subtracao">Subtração (-)</option>
          <option value="multiplicacao">Multiplicação (×)</option>
          <option value="divisao">Divisão (÷)</option>
        </select>
      </div>

      <div class="resultado-box">
        <h2>Resultado:</h2>
        <span class="valor-resultado">{{ resultado }}</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f6f8;
  font-family: Arial, sans-serif;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h1 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 5px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #444;
  font-size: 0.9rem;
}

input, select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

input:focus, select:focus {
  border-color: #42b883;
}

.resultado-box {
  margin-top: 25px;
  background: #e6f7ef;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #b7ebd0;
}

.resultado-box h2 {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.valor-resultado {
  font-size: 1.8rem;
  font-weight: bold;
  color: #42b883;
}
</style>