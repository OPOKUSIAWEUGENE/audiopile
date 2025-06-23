import { defineStore } from 'pinia'

// Load initial state from localStorage
const loadStateFromStorage = () => {
  try {
    const savedItems = localStorage.getItem('cartItems')
    const savedIsCartOpen = localStorage.getItem('isCartOpen')
    return {
      items: savedItems ? JSON.parse(savedItems) : [],
      isCartOpen: savedIsCartOpen ? JSON.parse(savedIsCartOpen) : false
    }
  } catch (error) {
    console.error('Error loading cart state from localStorage:', error)
    return {
      items: [],
      isCartOpen: false
    }
  }
}

export const useCartStore = defineStore('cart', {
  state: () => loadStateFromStorage(),
  
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
    saveStateToStorage() {
      try {
        localStorage.setItem('cartItems', JSON.stringify(this.items))
        localStorage.setItem('isCartOpen', JSON.stringify(this.isCartOpen))
      } catch (error) {
        console.error('Error saving cart state to localStorage:', error)
      }
    },

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
      this.saveStateToStorage()
    },
    
    incrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
        this.saveStateToStorage()
      }
    },
    
    decrementQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      } else if (item) {
        this.items = this.items.filter(i => i.id !== productId)
      }
      this.saveStateToStorage()
    },
    
    removeAll() {
      this.items = []
      this.saveStateToStorage()
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
        this.saveStateToStorage()
      }
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen
      this.saveStateToStorage()
    },

    closeCart() {
      this.isCartOpen = false
      this.saveStateToStorage()
    }
  }
}) 