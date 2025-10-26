import { Truck, Shield, Clock, Award, Users, Package } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Package,
      title: 'Premium Materials',
      description: 'Extensive range of high-grade construction materials sourced from certified suppliers and tested to exceed industry standards.',
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      description: 'Reliable logistics network ensuring on-time delivery to project sites across the country with flexible scheduling options.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and comprehensive testing protocols to guarantee material performance and durability.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Efficient order processing and inventory management enabling quick response times for urgent project requirements.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated technical advisors and customer service team providing guidance on material selection and application.',
    },
    {
      icon: Award,
      title: 'Industry Certified',
      description: 'Full compliance with international building codes and standards, backed by ISO certifications and industry accreditations.',
    },
  ];

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Capabilities
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From specification to delivery, we provide end-to-end solutions that keep your projects on schedule and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200 border border-slate-200"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white mb-5">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-800 rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to discuss your project requirements?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our technical team is ready to help you select the right materials and develop a delivery plan that works for your timeline.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-100 transition-colors duration-200"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
