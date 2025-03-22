import React from 'react';
import { Truck, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Same Day Delivery',
    description: 'Order before 2 PM for same-day delivery'
  },
  {
    icon: Clock,
    title: 'Fresh Guarantee',
    description: '100% fresh products or money back'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Multiple secure payment options'
  }
];

const DeliveryBanner = () => {
  return (
    <section className="bg-emerald-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center space-x-4">
              <feature.icon className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;