import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataProvider';
import axios from 'axios';

const Success = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { removeAllItem, getItems } = useData();
  const [error, setError] = useState('');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        navigate('/cart');
        return;
      }

      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/order/verifyStripe`,
          { sessionId },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.data.success) {
          // ล้างตะกร้าและอัพเดทข��อมูล
          try {
            await removeAllItem();
            await getItems();
            // แสดงข้อความสำเร็จ 2 วินาทีก่อน redirect
            setTimeout(() => {
              navigate('/cart');
            }, 2000);
          } catch (error) {
            console.error('Error clearing cart:', error);
          }
        } else {
          setError('Payment verification failed');
          setTimeout(() => {
            navigate('/cart');
          }, 2000);
        }
      } catch (error) {
        console.error('Verification error:', error);
        setError(error.response?.data?.message || 'An error occurred');
        setTimeout(() => {
          navigate('/cart');
        }, 2000);
      }
    };

    verifyPayment();
  }, [sessionId, navigate, removeAllItem, getItems]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full mx-4">
        {error ? (
          <>
            <div className="text-red-500 text-5xl mb-4">
              <i className="fas fa-times-circle"></i>
            </div>
            <h1 className="text-2xl font-bold mb-4">Payment Error</h1>
            <p className="text-red-600 mb-4">{error}</p>
          </>
        ) : (
          <>
            <div className="text-green-500 text-6xl mb-6">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been processed successfully.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              Redirecting to cart...
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Success; 