import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quality: string;
  quantity: number;
}

interface Notification {
  id: number;
  message: string;
}

interface CartContextType {
  items: CartItem[];
  notifications: Notification[];
  products: any;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
  removeNotification: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined | any>(undefined);

// Load cart items from localStorage
const loadCartItems = (): CartItem[] => {
  const savedItems = localStorage.getItem('cartItems');
  return savedItems ? JSON.parse(savedItems) : [];
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCartItems);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const [products, setProducts] = useState({productsList: [], category: ''});

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.name === item.name && i.quality === item.quality
      );

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === existingItem.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
    
    // Add notification
    const notification = {
      id: Date.now(),
      message: `${item.name} (${item.quality}) added to cart`,
    };
    setNotifications((prev) => [...prev, notification]);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      removeNotification(notification.id);
    }, 3000);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cartItems');
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      products,
      setProducts,
      notifications,
      addItem, 
      removeItem, 
      updateQuantity,
      clearCart, 
      getCartTotal, 
      getItemCount,
      removeNotification
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}