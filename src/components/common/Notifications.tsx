import React from 'react';
import { useCart } from '../../context/CartContext';
import { X } from 'lucide-react';

const Notifications: React.FC = () => {
  const { notifications, removeNotification } = useCart();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-zinc-900 border border-gold-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fadeIn"
        >
          <p className="text-sm">{notification.message}</p>
          <button
            onClick={() => removeNotification(notification.id)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;