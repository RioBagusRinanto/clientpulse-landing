import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out ClientPulse",
    features: [
      "Up to 2 clients",
      "Basic messaging",
      "Email notifications",
      "Standard support",
      "Basic analytics"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "Everything you need to scale your business",
    features: [
      "Unlimited clients",
      "Advanced messaging & threads",
      "Automated status updates",
      "Team collaboration",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "API access"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "primary",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For larger teams and advanced needs",
    features: [
      "Everything in Professional",
      "Advanced team management",
      "Custom integrations",
      "White-label solution",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom security controls",
      "Advanced reporting"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl border-2 p-8 ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:opacity-100`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center pb-8">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="mt-2 text-base text-gray-600">
                  {plan.description}
                </p>
              </div>
              
              <div className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  plan.buttonVariant === 'primary' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};