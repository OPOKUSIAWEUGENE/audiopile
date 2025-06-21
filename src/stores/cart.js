import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    cartItems: (state) => state.items,
    
    total: (state) => {
      return state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
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
          name: product.name,
          price: product.price,
          image: product.image,
          quantity
        })
      }
    },
    
    incrementQuantity(item) {
      const cartItem = this.items.find(i => i.id === item.id)
      if (cartItem) {
        cartItem.quantity++
      }
    },
    
    decrementQuantity(item) {
      const cartItem = this.items.find(i => i.id === item.id)
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--
        } else {
          this.items = this.items.filter(i => i.id !== item.id)
        }
      }
    },
    
    removeAll() {
      this.items = []
    }
  }
}) 