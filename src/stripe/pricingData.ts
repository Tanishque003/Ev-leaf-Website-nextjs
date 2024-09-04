import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 50 * 100, // Adjusted price for Basic plan
    nickname: "Basic",
    offers: [
      "1 User",
      "Basic Power Solutions",
      "Limited Service Coverage",
      "1 Year Warranty",
      "Use on 1 Project",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 100 * 100, // Adjusted price for Premium plan
    nickname: "Standard",
    offers: [
      "3 Users",
      "Standard Power Solutions",
      "Extended Service Coverage",
      "2 Years Warranty",
      "Use on 2 Projects",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 200 * 100, // Adjusted price for Business plan
    nickname: "Premium",
    offers: [
      "5 Users",
      "Premium Power Solutions",
      "Comprehensive Service Coverage",
      "3 Years Warranty",
      "Use on Unlimited Projects",
    ],
  },
];