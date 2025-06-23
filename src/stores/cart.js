import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isCartOpen: false
  }),
  
  getters: {
    cartItems: (state) => state.items,
    
    total: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    }
  },
  
  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({
          id: product.id,
          name: product.name.split(' ').slice(0, -1).join(' '), // Remove the last word (usually "Headphones", "Speaker", etc.)
          price: product.price,
          image: product.image.mobile.slice(2), // Remove './' from the start
          quantity
        })
      }
      this.isCartOpen = true
    },
    
    incrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
      }
    },
    
    decrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      } else if (item) {
        this.items = this.items.filter(i => i.id !== productId)
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
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },

    closeCart() {
      this.isCartOpen = false
    }
  }
}) 