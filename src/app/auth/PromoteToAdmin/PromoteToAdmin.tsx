// import { auth } from '../../lib/firebaseConfig';
// import { doc, updateDoc, getFirestore } from 'firebase/firestore';

// const db = getFirestore();

// export const PromoteToAdmin = async (userId: string) => {
//   // يجب تنفيذ هذه الدالة من السيرفر (Cloud Functions) لأسباب أمنية
//   // هذا مثال للتنفيذ من الواجهة (للتطوير فقط)
  
//   // 1. تحديث Custom Claims
//   const user = auth.currentUser;
//   if (!user || !(await user.getIdTokenResult()).claims.admin) {
//     throw new Error('غير مصرح به');
//   }

//   await user.getIdToken(true); // تجديد الـ token

//   // 2. تحديث Firestore
//   await updateDoc(doc(db, 'users', userId), {
//     role: 'admin'
//   });

//   return { success: true };
// };

// export const demoteToUser = async (userId: string) => {
//   // نفس المنطق ولكن للعودة إلى مستخدم عادي
//   await updateDoc(doc(db, 'users', userId), {
//     role: 'user'
//   });
//   return { success: true };
// };