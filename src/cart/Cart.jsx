import React, { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";
import CartItem from "../cart/CartItem";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeItem,
    removeAllItem,
    updateQuantity,
    getItems,
    calculateTotal,
    formatMoney,
  } = useData();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const [isProcessing, setIsProcessing] = useState(false);

  // ดึงข้อมูลตะกร้าครั้งแรก
  useEffect(() => {
    getItems();
  }, []);

  // จัดการผลลัพธ์การชำระเงิน
  useEffect(() => {
    const handlePaymentResult = async () => {
      if (isProcessing || !success) return;

      try {
        setIsProcessing(true);
        if (success === 'true') {
          await removeAllItem();
          navigate('/cart', { replace: true });
        } else if (success === 'false') {
          navigate('/cart', { replace: true });
        }
      } catch (error) {
        console.error('Error handling payment result:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    handlePaymentResult();
  }, [success, removeAllItem, navigate, isProcessing]);

  // ฟังก์ชันเลือกสินค้าทั้งหมด
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // เมื่อ checkbox "Select All" ถูกเช็ค, เลือกรายการทั้งหมด
      const selected = Object.keys(cart); // เก็บ ID ของทุกๆ รายการใน cart
      setSelectedItems(selected); // อัปเดต selectedItems ให้เลือกทั้งหมด
    } else {
      // เมื่อ checkbox "Select All" ถูกยกเลิก, รีเซ็ต selectedItems
      setSelectedItems([]);
    }
  };

  // ฟังก์ชันเลือกสินค้ารายการ
  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // เช็คว่าไอเ���มถูกเลือกหรือไม่
  const isChecked = (id) => selectedItems.includes(id);

  // คำนวณยอดรวมทุกครั้งที่ cart เปลี่ยนแปลง
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  // ดำนวณยอดรวม
  const { total } = calculateTotal(); // ดึงข้อมูลยอดรวมจาก calculateTotal

  return (
    <section className="mt-3 antialiased lg:flex lg:justify-center mx-auto ">
      <div className="max-w-screen-xl lg:w-2/4 px-4 2xl:px-0 space-y-2 lg:mr-2 mb-10">
        <div className="w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <h2 className="flex justify-center items-center my-5 lg:my-8 font-bold text-3xl text-shadow">
            MY CART
          </h2>
          <div className="space-y-2">
            {/* ปุ่มลบทั้งหมด */}
            <div className="flex justify-between items-center rounded-lg border py-2 px-4 border-gray-200 bg-white shadow-md">
              <h1 className="font-semibold ml-2">Delete All</h1>
              <i
                className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer"
                onClick={() => setIsModalOpen(true)} // เปิด modal เมื่อคลิก
              ></i>
            </div>
            {/* แสดงรายการในตะกร้า */}
            {Object.values(cart).length > 0 ? (
              Object.entries(cart).map(([id, item]) =>
                item ? (
                  <CartItem
                    key={id}
                    item={item}
                    removeItem={removeItem}
                    updateQuantity={updateQuantity}
                    isChecked={isChecked(id)}
                    onSelectItem={() => handleSelectItem(id)}
                    productId={id}
                  />
                ) : null
              )
            ) : (
              <div className="flex justify-center items-center text-gray-500">
                <i className="fa-solid fa-cart-plus text-2xl mr-2"></i>
                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ส่วนสรุปการสั่งซื้อ */}
      <div className="mt-4 max-w-4xl lg:max-w-80 flex-1 space-y-4 lg:mt-[6.25rem] lg:sticky">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6 ">
          <p className="text-xl font-semibold text-gray-900">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Subtotal
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ฿{total && total > 0 ? formatMoney(total.toFixed(2)) : "0.00"}
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Shipping Fee
                </dt>
                <dd className="text-base font-medium text-gray-900">฿ 0</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-green-600">
                ฿
                {total && !isNaN(total) && total > 0
                  ? formatMoney(total.toFixed(2))
                  : "0.00"}
              </dd>
            </dl>
          </div>
          {/* ปุ่ม Checkout */}
          <Link to={Object.keys(cart).length > 0 ? "/checkout" : "#"}>
            <button
              disabled={Object.keys(cart).length === 0}
              className="w-full rounded-lg bg-[#5BDEE7] px-5 py-2.5 text-lg font-semibold text-white lg:hover:bg-[#3ef2ff] disabled:opacity-50"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Modal สำหรับการยืนยันการลบทั้งหมด */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-4/5 md:w-1/3 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Are you sure you want to remove all items from your cart?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)} // ปิด modal
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  removeAllItem();
                  setIsModalOpen(false); // ปิด modal หลังจากลบ
                }} // ลบสินค้าทั้งหมด
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Yes, Remove All
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
