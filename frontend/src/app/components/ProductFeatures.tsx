import { Truck, Shield, RefreshCcw } from "lucide-react";

export function ProductFeatures() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Truck className="w-6 h-6 text-[#FF0808]" />
        <div>
          <p className="font-semibold">Free Shipping</p>
          <p className="text-sm text-gray-600">On orders over $100</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="w-6 h-6 text-[#FF0808]" />
        <div>
          <p className="font-semibold">Secure Payment</p>
          <p className="text-sm text-gray-600">100% secure transactions</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <RefreshCcw className="w-6 h-6 text-[#FF0808]" />
        <div>
          <p className="font-semibold">30-Day Returns</p>
          <p className="text-sm text-gray-600">Easy return policy</p>
        </div>
      </div>
    </div>
  );
}
