import React from "react";
import { ListChecks, BarChart3, PieChart, Wallet, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Budget Lists",
    description: "Set and manage custom budget lists for different categories",
    icon: ListChecks,
  },
  {
    title: "Visual Graphs",
    description: "Analyze your spending with intuitive visual graphs",
    icon: BarChart3,
  },
  {
    title: "Expense Tracking",
    description: "Easily track and categorize your daily expenses",
    icon: ListChecks,
  },
  {
    title: "Spending Insights",
    description: "Get personalized insights on your spending habits",
    icon: PieChart,
    comingSoon: true,
  },
  {
    title: "Multi-Currency Support",
    description: "Manage and track expenses across multiple currencies",
    icon: Wallet,
    comingSoon: true,
  },
  {
    title: "Goal Setting",
    description:
      "Set financial goals and track your progress towards achieving them",
    icon: Target,
    comingSoon: true,
  },
];

function getBackgroundClass(index: number) {
  const classes = [
    "bg-blue-50 dark:bg-blue-900/20",
    "bg-green-50 dark:bg-green-900/20",
    "bg-yellow-50 dark:bg-yellow-900/20",
    "bg-purple-50 dark:bg-purple-900/20",
    "bg-pink-50 dark:bg-pink-900/20",
    "bg-indigo-50 dark:bg-indigo-900/20",
  ];
  return classes[index % classes.length];
}

function getIconBackgroundClass(index: number) {
  const classes = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  return classes[index % classes.length];
}

export default function FeaturesSection() {
  return (
    <section className="max-w-5xl w-full mx-auto px-4 py-16  flex flex-col justify-center">
      <h2 className="text-7xl lg:text-8xl font-extrabold text-center mb-12 md:text-8xl">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`
                p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out
                ${getBackgroundClass(index)}
                hover:shadow-xl hover:-translate-y-1
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-full ${getIconBackgroundClass(
                    index
                  )}`}
                >
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                {feature.comingSoon && (
                  <Badge variant="secondary" className="text-xs font-semibold">
                    Coming Soon
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
