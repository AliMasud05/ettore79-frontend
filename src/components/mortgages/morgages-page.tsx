"use client";

import mortgages from "@/assets/banner/mortgages.png";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, TrendingUp, Clock, Star } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

// Sample mortgage data for the comparison table
const mortgageTableData = [
  {
    id: 1,
    bank: "Chase Bank",
    sector: "Bank",
    initial: "$100,000.00",
    initialValue: 100000,
    monthly: "$1,036.86",
    monthlyValue: 1036.86,
    incomeToQualify: "$20,724.09",
    incomeValue: 20724.09,
    totalPayable: "$240,656.33",
    totalValue: 240656.33,
    interestRate: "11.08%",
    interestValue: 11.08,
    apr: "13.20%",
    aprValue: 13.2,
    amortization: "View Table",
  },
  {
    id: 2,
    bank: "Chase Bank",
    sector: "Bank",
    initial: "$162,500.00",
    initialValue: 162500,
    monthly: "$1,041.96",
    monthlyValue: 1041.96,
    incomeToQualify: "$29,771.33",
    incomeValue: 29771.33,
    totalPayable: "$246,815.59",
    totalValue: 246815.59,
    interestRate: "11.75%",
    interestValue: 11.75,
    apr: "13.70%",
    aprValue: 13.7,
    amortization: "View Table",
  },
  {
    id: 3,
    bank: "Wells Fargo",
    sector: "Bank",
    initial: "$165,178.55",
    initialValue: 165178.55,
    monthly: "$1,152.40",
    monthlyValue: 1152.4,
    incomeToQualify: "$19,407.27",
    incomeValue: 19407.27,
    totalPayable: "$239,329.77",
    totalValue: 239329.77,
    interestRate: "13.00%",
    interestValue: 13.0,
    apr: "15.20%",
    aprValue: 15.2,
    amortization: "View Table",
  },
  {
    id: 4,
    bank: "Citibank",
    sector: "Bank",
    initial: "$166,178.55",
    initialValue: 166178.55,
    monthly: "$1,176.70",
    monthlyValue: 1176.7,
    incomeToQualify: "$19,849.09",
    incomeValue: 19849.09,
    totalPayable: "$251,630.09",
    totalValue: 251630.09,
    interestRate: "14.00%",
    interestValue: 14.0,
    apr: "16.20%",
    aprValue: 16.2,
    amortization: "View Table",
  },
  {
    id: 5,
    bank: "US Bank",
    sector: "Bank",
    initial: "$166,632.00",
    initialValue: 166632,
    monthly: "$1,117.54",
    monthlyValue: 1117.54,
    incomeToQualify: "$25,696.84",
    incomeValue: 25696.84,
    totalPayable: "$262,704.73",
    totalValue: 262704.73,
    interestRate: "12.00%",
    interestValue: 12.0,
    apr: "14.50%",
    aprValue: 14.5,
    amortization: "View Table",
  },
  {
    id: 6,
    bank: "US Bank",
    sector: "Bank",
    initial: "$170,000.00",
    initialValue: 170000,
    monthly: "$902.20",
    monthlyValue: 902.2,
    incomeToQualify: "$22,757.14",
    incomeValue: 22757.14,
    totalPayable: "$226,615.52",
    totalValue: 226615.52,
    interestRate: "10.50%",
    interestValue: 10.5,
    apr: "12.50%",
    aprValue: 12.5,
    amortization: "View Table",
  },
  {
    id: 7,
    bank: "TD Bank",
    sector: "Bank",
    initial: "$173,230.00",
    initialValue: 173230,
    monthly: "$1,063.88",
    monthlyValue: 1063.88,
    incomeToQualify: "$21,080.98",
    incomeValue: 21080.98,
    totalPayable: "$248,894.46",
    totalValue: 248894.46,
    interestRate: "11.18%",
    interestValue: 11.18,
    apr: "13.90%",
    aprValue: 13.9,
    amortization: "View Table",
  },
  {
    id: 8,
    bank: "Capital One",
    sector: "Bank",
    initial: "$173,480.00",
    initialValue: 173480,
    monthly: "$1,190.54",
    monthlyValue: 1190.54,
    incomeToQualify: "$27,254.02",
    incomeValue: 27254.02,
    totalPayable: "$282,368.35",
    totalValue: 282368.35,
    interestRate: "13.25%",
    interestValue: 13.25,
    apr: "15.90%",
    aprValue: 15.9,
    amortization: "View Table",
  },
];

function BankIcon({ bankName }: { bankName: string }) {
  const getIconColor = (name: string) => {
    switch (name.toLowerCase()) {
      case "chase bank":
        return "bg-blue-600";
      case "wells fargo":
        return "bg-red-600";
      case "citibank":
        return "bg-blue-500";
      case "us bank":
        return "bg-red-700";
      case "td bank":
        return "bg-green-600";
      case "capital one":
        return "bg-orange-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`w-8 h-8 rounded ${getIconColor(
        bankName
      )} flex items-center justify-center text-white text-xs font-bold`}
    >
      {bankName.charAt(0)}
    </div>
  );
}

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

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

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
      name: "Elena Rodriguez",
      company: "Home Loan Experts",
      rating: 4.8,
      reviews: 142,
      experience: 10,
      specialties: ["Refinancing", "Jumbo loans"],
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

  const filteredAndSortedData = useMemo(() => {
    const filtered = mortgageTableData.filter(
      (item) =>
        item.bank.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sector.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case "rate":
        filtered.sort((a, b) => a.interestValue - b.interestValue);
        break;
      case "monthly":
        filtered.sort((a, b) => a.monthlyValue - b.monthlyValue);
        break;
      case "total":
        filtered.sort((a, b) => a.totalValue - b.totalValue);
        break;
      case "apr":
        filtered.sort((a, b) => a.aprValue - b.aprValue);
        break;
      case "initial":
        filtered.sort((a, b) => a.initialValue - b.initialValue);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [searchTerm, sortBy]);

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
        <div
          className="relative z-10 flex items-center justify-center h-full
         text-center text-black px-4"
        >
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">
              Get Your Dream Home Mortgage
            </h1>
            <p className="text-xl mb-8">
              Connect with certified mortgage brokers and get pre-approved in
              minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600
               text-white px-8 py-6 text-sm"
              >
                Calculate Mortgage
              </Button>
              <Button
                variant="outline"
                className="bg-white text-gray-900 font-medium
                 hover:bg-gray-100 px-8  py-6 text-sm"
              >
                Find Mortgage Broker
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Mortgage Comparison
            </h1>
            <p className="text-gray-600">
              Compare mortgage rates and terms from leading financial
              institutions
            </p>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by bank or sector"
                className="pl-10 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 whitespace-nowrap">
                Sort by:
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rate">Interest Rate</SelectItem>
                  <SelectItem value="monthly">Monthly Payment</SelectItem>
                  <SelectItem value="total">Total Payable</SelectItem>
                  <SelectItem value="apr">APR</SelectItem>
                  <SelectItem value="initial">Initial Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mortgage Comparison Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-orange-200 text-gray-700 text-sm font-medium">
                    <th className="px-6 py-4 text-left">
                      <div>SECTOR</div>
                      <div className="text-xs font-normal text-gray-500">
                        INSTITUTION
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>INITIAL</div>
                      <div className="text-xs font-normal text-gray-500">
                        LOAN AMOUNT
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>MONTHLY</div>
                      <div className="text-xs font-normal text-gray-500">
                        PAYMENT
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>INCOME TO</div>
                      <div className="text-xs font-normal text-gray-500">
                        QUALIFY
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>TOTAL</div>
                      <div className="text-xs font-normal text-gray-500">
                        PAYABLE
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>INTEREST</div>
                      <div className="text-xs font-normal text-gray-500">
                        RATE
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>APR</div>
                      <div className="text-xs font-normal text-gray-500">
                        (Annual %)
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div>AMORTIZATION</div>
                      <div className="text-xs font-normal text-gray-500">
                        TABLE
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedData.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <BankIcon bankName={item.bank} />
                          <div>
                            <div className="text-xs text-gray-500 uppercase">
                              {item.sector}
                            </div>
                            <div className="font-medium text-gray-900">
                              {item.bank}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        {item.initial}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        {item.monthly}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        {item.incomeToQualify}
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        {item.totalPayable}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        {item.interestRate}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">
                        {item.apr}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs bg-transparent"
                        >
                          {item.amortization}
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {filteredAndSortedData.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-6 py-8 text-center text-gray-500"
                      >
                        No mortgage options found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600
                   text-white py-6"
                  >
                    Get Pre-Approved Now
                  </Button>
                </div>
              </Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div
                  className="text-center border-1 border-gray-300
             rounded-lg p-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                    <span className="text-3xl font-bold">8.5%</span>
                  </div>
                  <p className="text-gray-600">Avg. Interest Rate</p>
                </div>
                <div
                  className="text-center border-1 border-gray-300
             rounded-lg p-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-6 h-6 text-orange-500" />
                    <span className="text-3xl font-bold">15 days</span>
                  </div>
                  <p className="text-gray-600">Avg. Approval Time</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">👥</span>
                </div>
                <h2 className="text-2xl ">Featured Mortgage Brokers</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Connect with certified professionals in your area
              </p>

              <div className="space-y-6">
                {brokers.map((broker) => (
                  <Card key={broker.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                        <div className="text-gray-400 text-lg">👤</div>
                      </div>
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
                          <Button className="bg-[#FF924D] hover:bg-orange-600 text-white text-sm px-4 py-2">
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

              <Card className="mt-8 p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Get Pre-Approved Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Strengthen your offer and show sellers you&apos;re serious
                </p>
                <Button
                  className="bg-orange-500 hover:bg-orange-600
                 text-white px-8 py-6"
                >
                  Start Pre-Approval
                </Button>
              </Card>
              <div className="mt-16">
                <h2 className="text-2xl font-normal mb-8">
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
          </div>
        </div>
      </section>
    </div>
  );
}
