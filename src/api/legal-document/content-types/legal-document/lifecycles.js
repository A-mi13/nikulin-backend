module.exports = {
  async beforeCreate(event) {
    const { data } = event.params
    
    // Автоматически устанавливаем дату обновления
    if (!data.lastUpdated) {
      data.lastUpdated = new Date()
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params
    
    // Обновляем дату при каждом изменении
    data.lastUpdated = new Date()
  }
}
