# Audiopile - Premium Audio E-commerce Store

![Audiopile Logo](src/assets/shared/desktop/logo.svg)

Audiopile is a modern e-commerce platform specializing in high-end audio equipment. Built with Vue.js, this application offers a seamless shopping experience for premium headphones, speakers, and earphones.

## 🌟 Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Dynamic Product Catalog**: Browse through categories of premium audio equipment
- **Shopping Cart**: 
  - Real-time cart updates
  - Persistent cart data across sessions
  - Interactive quantity controls
  - Cart summary with total calculation
- **Checkout Process**:
  - Comprehensive form validation
  - Multiple payment methods (e-Money and Cash on Delivery)
  - Order confirmation with detailed summary
- **Product Details**:
  - High-quality product images
  - Detailed product descriptions
  - Related product recommendations
- **Category Navigation**: Easy navigation between product categories
- **Modern UI Components**:
  - Interactive modals
  - Toast notifications
  - Responsive navigation menu
  - Featured product showcases

## 🛠️ Technologies Used

- **Vue.js 3**: Frontend framework
- **Vue Router**: For seamless navigation
- **Pinia**: State management
- **Local Storage**: For cart persistence
- **Modern CSS**: Including Grid and Flexbox for layouts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OPOKUSIAWEUGENE/audiopile.git
```

2. Navigate to the project directory:
```bash
cd audiopile
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run serve
```

5. Open your browser and visit:
```
http://localhost:8080
```

## 📁 Project Structure

```
audiopile/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable Vue components
│   ├── views/           # Page components
│   ├── stores/          # Pinia store modules
│   ├── router/          # Vue Router configuration
│   └── App.vue          # Root component
├── public/              # Public static files
└── package.json         # Project dependencies and scripts
```

## 🎯 Key Components

- **HeaderSection**: Main navigation and cart access
- **CategoryCards**: Display product categories
- **ProductCard**: Reusable product display component
- **CartMenu**: Interactive shopping cart interface
- **CheckoutPage**: Form handling and order processing
- **OrderConfirmationModal**: Order success feedback

## 💻 Development

### Available Scripts

- `npm run serve`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Lint and fix files

### Customization

See [Configuration Reference](https://cli.vuejs.org/config/) for Vue CLI configuration options.

## 📱 Responsive Design

The application is fully responsive with three main breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Form Validation

The checkout form includes validation for:
- Name
- Email address
- Phone number
- Shipping address
- Payment details

## 🎨 Design Features

- Modern, clean interface
- Consistent color scheme
- Responsive images for different device sizes
- Interactive UI elements
- Smooth transitions and animations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from premium audio equipment retailers
- Vue.js community for excellent documentation and resources
- All contributors who have helped shape this project

---

Built with ❤️ using Vue.js
