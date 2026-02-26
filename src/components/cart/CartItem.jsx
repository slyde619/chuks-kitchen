import { PiX } from "react-icons/pi";

const CartItem = ({
  image,
  name,
  customizations,
  quantity,
  price,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
      {/* Mobile Layout */}
      <div className="sm:hidden flex gap-3">
        <img
          src={image}
          alt={name}
          className="size-26 object-cover rounded-md shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-black leading-tight">{name}</h3>
          {customizations && (
            <p className="text-xs text-gray-500 mt-1">{customizations}</p>
          )}

          {/* Quantity Controls */}
          <div className="flex items-center justify-between gap-6 mt-2">
            <button
              onClick={onIncrease}
              className="w-7 h-7 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
            <span className="text-xl font-bold text-black">{quantity}</span>
            <button
              onClick={onDecrease}
              className="w-7 h-7 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
          </div>

          {/* Price and Close button */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-base font-bold text-primary">
              ₦{price.toLocaleString()}
            </span>
            <button
              onClick={onRemove}
              className="px-3 py-1.5 flex items-center justify-center bg-dark text-white rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors"
              aria-label="Remove item"
            >
              <PiX size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout  */}
      <div className="hidden sm:flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-md"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
          {customizations && (
            <p className="text-sm text-gray-600">{customizations}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onDecrease}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            aria-label="Decrease quantity"
          >
            <span className="text-lg font-semibold">−</span>
          </button>
          <span className="text-lg font-semibold text-black min-w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={onIncrease}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            aria-label="Increase quantity"
          >
            <span className="text-lg font-semibold">+</span>
          </button>
        </div>

        <div className="text-xl font-bold text-primary min-w-20 text-right">
          ₦{price.toLocaleString()}
        </div>

        <button
          onClick={onRemove}
          className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-md hover:bg-orange-600 transition-colors"
          aria-label="Remove item"
        >
          <span className="text-lg font-semibold">×</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
