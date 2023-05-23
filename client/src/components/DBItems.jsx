import React from "react";
import { DataTable } from "../components";
import { HiCurrencyRupee } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../api";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";

const DBItems = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Зображення",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Назва",
            field: "product_name",
          },
          {
            title: "Категорія",
            field: "product_category",
          },
          {
            title: "Ціна",
            field: "product_price",
            render: (rowData) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center">
                {/* <HiCurrencyRupee className="text-red-400" />{" "} */}
                <span className="text-red-400">₴</span>
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="Асортимент Продукції"
        actions={[
          {
            icon: "edit",
            tooltip: "Редагувати",
            onClick: (event, rowData) => {
              alert("Ви збираєтесь редагувати " + rowData.productId);
            },
          },
          {
            icon: "delete",
            tooltip: "Видалити",
            onClick: (event, rowData) => {
              if (
                window.confirm("Ви впевнені, що хочите видалити цей продукт?")
              ) {
                deleteProduct(rowData.productId).then((res) => {
                  dispatch(alertSuccess("Продукт Видалено!"));
                  setInterval(() => {
                    dispatch(alertNULL());
                  }, 3000);
                  getAllProducts().then((data) => {
                    dispatch(setAllProducts(data));
                  });
                });
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
