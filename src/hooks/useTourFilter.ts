import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useTourFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialFilters = {
    price: searchParams.get("price") || "",
    locationFrom: searchParams.get("locationFrom") || "",
    locationTo: searchParams.get("locationTo") || "",
    departureDate: searchParams.get("departureDate") || "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleUpdateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilter = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  const handleResetFilter = () => {
    setFilters({
      price: "",
      locationFrom: "",
      locationTo: "",
      departureDate: "",
    });

    router.push(pathname, { scroll: false });
  };

  return { filters, handleUpdateFilter, handleApplyFilter, handleResetFilter };
};
