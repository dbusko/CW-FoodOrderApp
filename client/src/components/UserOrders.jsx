import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { useSelector } from "react-redux";
import { getAllOrders } from "../api";
import { setOrders } from "../context/actions/ordersAction";
import { useDispatch } from "react-redux";
import { OrdersInfo } from "../components";

const UserOrders = () => {
  const orders = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
        setUserInfo(data.filter((item) => item.userId === user?.user_id));
      });
    } else {
      setUserInfo(orders.filter((data) => data.userId === user?.user_id));
    }
  }, [orders]);

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Header />
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        {userInfo?.length > 0 ? (
          <>
            {userInfo.map((item, i) => (
              <OrdersInfo key={i} index={i} data={item} admin={false} />
            ))}
          </>
        ) : (
          <>
            <h1 className="text-[72px] text-headingColor font-bold">No Data</h1>
          </>
        )}
      </div>
    </main>
  );
};

export default UserOrders;
