import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartItemQuantity = useSelector(getTotalCartQuantity);
  const totalCartItemPrice = useSelector(getTotalCartPrice);

  if (!totalCartItemQuantity) return null;

  return (
    <div className="md:text-baseb flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartItemQuantity}</span>
        <span>{formatCurrency(totalCartItemPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
