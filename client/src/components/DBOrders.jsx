import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../api";
import { setOrders } from "../context/actions/ordersAction";
import { OrdersInfo } from "../components";

const DBOrders = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
      });
    }
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full gap-4">
      {orders ? (
        <>
          {orders.map((item, i) => (
            <OrdersInfo key={i} index={i} data={item} admin={true} />
          ))}
        </>
      ) : (
        <>
          <h1 className="text-[72px] text-headingColor font-bold">Інформація відсутня...</h1>
        </>
      )}
    </div>
  );
};

export default DBOrders;
