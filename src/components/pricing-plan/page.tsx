import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PricingPage() {
  const plans = [
    {
      name: "Basic plan",
      price: "$10/mth",
      billing: "Billed annually",
      popular: false,
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      buttonStyle: "dark",
    },
    {
      name: "Business plan",
      price: "$20/mth",
      billing: "Billed annually",
      popular: true,
      features: [
        "200+ integrations",
        "Advanced reporting and analytics",
        "Up to 20 individual users",
        "40GB individual data each user",
        "Priority chat and email support",
      ],
      buttonStyle: "orange",
    },
    {
      name: "Enterprise plan",
      price: "$40/mth",
      billing: "Billed annually",
      popular: false,
      features: [
        "Advanced custom fields",
        "Audit log and data history",
        "Unlimited individual users",
        "Unlimited individual data",
        "Personalized/priority service",
      ],
      buttonStyle: "dark",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="bg-white px-4 py-1 rounded-full text-sm text-blue-600 font-medium border border-blue-200 shadow-sm">
                      Most popular
                    </div>
                    {/* Arrow pointing down */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-600"></div>
                    </div>
                  </div>
                </div>
              )}

              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-2 border-blue-500 shadow-lg relative"
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                <CardContent className="p-8">
                  {/* Price and Plan Name */}
                  <div className="text-center mb-8">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {plan.name}
                    </div>
                    <div className="text-sm text-gray-600">{plan.billing}</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Get Started Button */}
                  <Button
                    className={`w-full py-3 font-medium ${
                      plan.buttonStyle === "orange"
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get started
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
