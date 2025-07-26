"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { CheckCircle, Clock, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import profile from "@/assets/agent/Image (8).png";
import mortgages from "@/assets/banner/mortgages.png";


interface MortgageData {
  loanAmount: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
}

export function MortgagePage() {
  const [mortgageData, setMortgageData] = useState<MortgageData>({
    loanAmount: 200000,
    downPayment: 100000,
    interestRate: 8,
    loanTerm: 5,
  });

  const calculateMonthlyPayment = () => {
    const principal = mortgageData.loanAmount - mortgageData.downPayment;
    const monthlyRate = mortgageData.interestRate / 100 / 12;
    const numberOfPayments = mortgageData.loanTerm * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment;
  };

  const calculateTotalInterest = () => {
    const monthlyPayment = calculateMonthlyPayment();
    const totalPayments = monthlyPayment * mortgageData.loanTerm * 12;
    const principal = mortgageData.loanAmount - mortgageData.downPayment;
    return totalPayments - principal;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(0)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num}`;
  };

  const brokers = [
    {
      id: 1,
      name: "Carlos Mendoza",
      company: "MortgagePro Mexico",
      rating: 4.9,
      reviews: 186,
      experience: 12,
      specialties: ["First-time buyers", "Investment properties"],
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      company: "MortgagePro Mexico",
      rating: 4.9,
      reviews: 186,
      experience: 12,
      specialties: ["First-time buyers", "Investment properties"],
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  const loanOptions = [
    {
      title: "Fixed Rate Mortgage",
      description: "Stable payments throughout the loan term",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      title: "Variable Rate Mortgage",
      description: "Rate changes with market conditions",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      title: "Government Backed Loans",
      description: "INFONAVIT and FOVISSSTE programs",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      title: "Commercial Mortgages",
      description: "For investment and commercial properties",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-100">
        <Image
          src={mortgages.src}
          alt="Modern living room with mortgage consultation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Dream Home Mortgage
            </h1>
            <p className="text-xl mb-8">
              Connect with certified mortgage brokers and get pre-approved in
              minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Calculate Mortgage
              </Button>
              <Button
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
              >
                Find Mortgage Broker
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Mortgage Calculator */}
            <div>
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <h2 className="text-xl font-semibold">Mortgage Calculator</h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Calculate your monthly payments and see what you can afford
                </p>

                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-medium">Loan Amount</label>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>$200K</span>
                        <span className="font-medium">
                          {formatNumber(mortgageData.loanAmount)}
                        </span>
                        <span>$20M</span>
                      </div>
                    </div>
                    <Slider
                      value={[mortgageData.loanAmount]}
                      onValueChange={(value) =>
                        setMortgageData((prev) => ({
                          ...prev,
                          loanAmount: value[0],
                        }))
                      }
                      max={20000000}
                      min={200000}
                      step={10000}
                      className="w-full"
                    />
                  </div>

                  {/* Down Payment */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-medium">Down Payment</label>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>$100K</span>
                        <span className="font-medium">
                          {formatNumber(mortgageData.downPayment)}
                        </span>
                        <span>$5M</span>
                      </div>
                    </div>
                    <Slider
                      value={[mortgageData.downPayment]}
                      onValueChange={(value) =>
                        setMortgageData((prev) => ({
                          ...prev,
                          downPayment: value[0],
                        }))
                      }
                      max={5000000}
                      min={100000}
                      step={5000}
                      className="w-full"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-medium">Interest Rate (%)</label>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>5%</span>
                        <span className="font-medium">
                          {mortgageData.interestRate}%
                        </span>
                        <span>15%</span>
                      </div>
                    </div>
                    <Slider
                      value={[mortgageData.interestRate]}
                      onValueChange={(value) =>
                        setMortgageData((prev) => ({
                          ...prev,
                          interestRate: value[0],
                        }))
                      }
                      max={15}
                      min={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  {/* Loan Term */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="font-medium">Loan Term (Years)</label>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>5 years</span>
                        <span className="font-medium">
                          {mortgageData.loanTerm} years
                        </span>
                        <span>30 years</span>
                      </div>
                    </div>
                    <Slider
                      value={[mortgageData.loanTerm]}
                      onValueChange={(value) =>
                        setMortgageData((prev) => ({
                          ...prev,
                          loanTerm: value[0],
                        }))
                      }
                      max={30}
                      min={5}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Calculation Results */}
                  <Card className="bg-gray-50 p-6">
                    <h3 className="font-semibold mb-4">Calculation Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Payment</span>
                        <span className="font-bold text-xl text-orange-500">
                          {formatCurrency(calculateMonthlyPayment())}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Interest</span>
                        <span className="font-semibold">
                          {formatCurrency(calculateTotalInterest())}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    Get Pre-Approved Now
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Side - Featured Brokers */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">👥</span>
                </div>
                <h2 className="text-xl font-semibold">
                  Featured Mortgage Brokers
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Connect with certified professionals in your area
              </p>

              <div className="space-y-6">
                {brokers.map((broker) => (
                  <Card key={broker.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src={profile.src}
                        alt="Agent"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{broker.name}</h3>
                          <span className="text-blue-500">✓</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {broker.company}
                        </p>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {broker.rating}
                            </span>
                            <span className="text-sm text-gray-600">
                              ({broker.reviews})
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">
                            {broker.experience} years
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {broker.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2">
                            View Profile
                          </Button>
                          <Button
                            variant="outline"
                            className="text-sm px-4 py-2 bg-transparent"
                          >
                            Bank Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="link" className="text-orange-500">
                    View All Brokers
                  </Button>
                </div>
              </div>

              {/* Pre-Approval Section */}
              <Card className="mt-8 p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Get Pre-Approved Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Strengthen your offer and show sellers you&apos;re serious
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Start Pre-Approval
                </Button>
              </Card>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <span className="text-3xl font-bold">8.5%</span>
              </div>
              <p className="text-gray-600">Avg. Interest Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-orange-500" />
                <span className="text-3xl font-bold">15 days</span>
              </div>
              <p className="text-gray-600">Avg. Approval Time</p>
            </div>
          </div>

          {/* Loan Options */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Discover your loan options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loanOptions.map((option, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  {option.icon}
                  <div>
                    <h3 className="font-semibold mb-1">{option.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
