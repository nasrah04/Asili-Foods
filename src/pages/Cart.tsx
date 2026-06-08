import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-8 text-orange-500 pt-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p>{item.price} TZS</p>
              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-800"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-8">
            Total: {total} TZS
          </h2>
        </>
      )}

    </section>
  );
}