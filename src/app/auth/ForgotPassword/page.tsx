"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../lib/firebaseConfig';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      switch (err.code) {
        case 'auth/invalid-email':
          setError('بريد إلكتروني غير صالح');
          break;
        case 'auth/user-not-found':
          setError('لا يوجد حساب مرتبط بهذا البريد');
          break;
        default:
          setError('حدث خطأ أثناء إرسال رابط الاستعادة');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6f55f2] to-[#190C71] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden p-8"
      >
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[#6f55f2] mb-6"
        >
          <FaArrowLeft className="mr-2" />
          back
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">استعادة كلمة المرور</h2>
          <p className="text-gray-600 mt-2">
            {success 
              ? 'تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني'
              : 'أدخل بريدك الإلكتروني لاستعادة كلمة المرور'}
          </p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
          >
            {error}
          </motion.div>
        )}

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* حقل البريد الإلكتروني */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f55f2] focus:border-transparent"
                placeholder="البريد الإلكتروني"
                required
              />
            </div>

            {/* زر إرسال الرابط */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white ${loading ? 'bg-[#9a86f8]' : 'bg-[#6f55f2] hover:bg-[#5d45e0]'}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جاري الإرسال...
                </span>
              ) : 'إرسال رابط الاستعادة'}
            </motion.button>
          </form>
        ) : (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => router.push('/login')}
              className="w-full py-3 px-4 rounded-lg font-medium text-white bg-[#6f55f2] hover:bg-[#5d45e0]"
            >
              العودة لتسجيل الدخول
            </motion.button>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            تذكرت كلمة المرور؟{' '}
            <Link href="/auth/login" className="text-[#6f55f2] hover:underline font-medium">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;