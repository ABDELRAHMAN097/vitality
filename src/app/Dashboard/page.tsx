"use client";
import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { db } from "../lib/firebaseConfig";
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import Link from "next/link";

type CardType = {
  id: string;
  text1: string; // النص الأول
  text2: string; // النص الثاني
};

const Dashboard = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [editingCard, setEditingCard] = useState<CardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // جلب البيانات من Firestore
  useEffect(() => {
    const fetchCards = async () => {
      const querySnapshot = await getDocs(collection(db, "cards"));
      const cardsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CardType[];
      setCards(cardsData);
    };
    fetchCards();
  }, []);

  // حفظ الكارت
  const handleSave = async () => {
    if (!editingCard) return;

    try {
      await setDoc(doc(db, "cards", editingCard.id), {
        text1: editingCard.text1,
        text2: editingCard.text2,
      });

      setCards((prev) =>
        prev.some((c) => c.id === editingCard.id)
          ? prev.map((c) => (c.id === editingCard.id ? editingCard : c))
          : [...prev, editingCard]
      );

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  // حذف الكارت
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "cards", id));
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-6 bg-[#6f55f2] text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FaArrowLeftLong />
            Back
          </motion.button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-[#6f55f2] mb-6 md:mb-8">
          Text control panel
        </h1>

        <div className="flex items-center justify-start gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setEditingCard({
                id: Date.now().toString(),
                text1: "",
                text2: "",
              });
              setIsModalOpen(true);
            }}
            className="mb-6 bg-[#6f55f2] text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FiPlus /> Add new text
          </motion.button>

          {/* <Link href="../auth/AdminUsersPage">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6 bg-[#6f55f2] text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FiPlus /> users
            </motion.button>
          </Link> */}
        </div>

        {/* عرض الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#6f55f2]"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-500 text-sm">النص الأول</h3>
                  <p className="text-[#190C71] text-center md:text-start font-semibold leading-[75px] text-[18px]">{card.text1}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">النص الثاني</h3>
                  <p className="text-center md:text-start text-slate-500 text-sm my-10 md:my-2">{card.text2}</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => {
                    setEditingCard(card);
                    setIsModalOpen(true);
                  }}
                  className="text-[#6f55f2] hover:text-[#5d45e0]"
                >
                  <FiEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* مودال التعديل */}
        {isModalOpen && editingCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
            >
              <h2 className="text-xl font-bold mb-4 text-[#6f55f2]">
                {cards.some((c) => c.id === editingCard.id)
                  ? "Edit Text"
                  : "إضافة جديد"}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">First text</label>
                  <input
                    type="text"
                    value={editingCard.text1 ?? ""}
                    onChange={(e) =>
                      setEditingCard({
                        ...editingCard,
                        text1: e.target.value,
                      })
                    }
                    className="w-full px-3 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f55f2] focus:border-transparent"
                    />
                </div>

                <div>
                  <label className="block mb-2">Second text</label>
                  <input
                    type="text"
                    value={editingCard.text2 ?? ""}
                    onChange={(e) =>
                      setEditingCard({
                        ...editingCard,
                        text2: e.target.value,
                      })
                    }
                    className="w-full px-3 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f55f2] focus:border-transparent"
                    />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#6f55f2] text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
