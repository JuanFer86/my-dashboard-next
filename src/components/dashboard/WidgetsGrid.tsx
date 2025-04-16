"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const countCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${countCart}`}
        subtitle="Productos en el carrito de compras"
        label="Contador"
        icon={<IoCartOutline size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
