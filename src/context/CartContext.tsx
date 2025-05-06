import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Animal } from '../types';
import { animals } from '../data/animals';

// Define the shape of a cart item
export interface CartItem extends Animal {
  quantity: number;
}

// Define the cart context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (animal: Animal, quantity?: number) => void;
  removeFromCart: (animalId: string) => void;
  updateQuantity: (animalId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  reduceStockAfterOrder: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (animal: Animal, quantity: number = 1) => {
    setCart(prevCart => {
      // Check if animal is already in cart
      const existingItemIndex = prevCart.findIndex(item => item.id === animal.id);
      
      if (existingItemIndex > -1) {
        // If exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        return updatedCart;
      } else {
        // If not, add new item
        return [...prevCart, { ...animal, quantity }];
      }
    });
  };

  const removeFromCart = (animalId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== animalId));
  };

  const updateQuantity = (animalId: string, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === animalId 
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const reduceStockAfterOrder = () => {
    // Reduce stock for each item in the cart
    cart.forEach(item => {
      const animalIndex = animals.findIndex(a => a.id === item.id);
      if (animalIndex !== -1) {
        animals[animalIndex].stock = Math.max(0, animals[animalIndex].stock - item.quantity);
      }
    });
    
    // Clear the cart after order
    clearCart();
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems,
      reduceStockAfterOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
