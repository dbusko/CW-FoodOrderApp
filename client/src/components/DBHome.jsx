import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { CChart } from "@coreui/react-chartjs";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const drinks = products?.filter((item) => item.product_category === "напої");
  const deserts = products?.filter(
    (item) => item.product_category === "десерти"
  );
  const fruits = products?.filter((item) => item.product_category === "фрукти");
  const meat = products?.filter((item) => item.product_category === "м'ясо");
  const fastFood = products?.filter((item) => item.product_category === "фаст-фуд");
  const soups = products?.filter(
    (item) => item.product_category === "супи"
  );
  const bread = products?.filter((item) => item.product_category === "випічка");
  const fish = products?.filter((item) => item.product_category === "риба");
  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Напої",
                  "Десерти",
                  "Фрукти",
                  "М'ясо",
                  "Фаст-фуд",
                  "Супи",
                  "Випічка",
                  "Риба",
                ],
                datasets: [
                  {
                    label: "Діаграма Меню",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      deserts?.length,
                      fruits?.length,
                      meat?.length,
                      fastFood?.length,
                      soups?.length,
                      bread?.length,
                      fish?.length,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  "Замовлено",
                  "Доставлено",
                  "Скасовано",
                  "Оплачено",
                  "Не Оплачено",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#51FF00",
                      "#00B6FF",
                      "#008BFF",
                      "#FFD100",
                      "#FF00FB",
                    ],
                    data: [40, 20, 80, 34, 54],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
