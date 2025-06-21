import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    cartItems: (state) => state.items,
    
    total: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    }
  },
  
  actions: {
    addToCart(product, quantity) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          name: product.name.split(' ').slice(0, -1).join(' '), // Remove the last word (e.g., "Headphones")
          price: product.price,
          image: product.image.mobile.slice(2),
          quantity: quantity
        })
      }
    },
    
    incrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
      }
    },
    
    decrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeItem(productId)
        }
      }
    },
    
    removeAll() {
      this.items = []
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    }
  }
}) 