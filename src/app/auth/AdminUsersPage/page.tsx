// "use client"
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../context/AuthProvider ';
// import { collection, getDocs, doc, updateDoc, getFirestore } from 'firebase/firestore';
// import { auth } from '../../lib/firebaseConfig';
// import { FiUser, FiUserCheck, FiUserX, FiLoader } from 'react-icons/fi';

// type User = {
//   id: string;
//   email: string;
//   name: string;
//   role: 'user' | 'admin';
//   createdAt?: string;
// };

// const AdminUsersPage = () => {
//   const { user: currentUser, isAdmin, loading: authLoading } = useAuth();
//   const [users, setUsers] = useState<User[]>([]);
//   const [usersLoading, setUsersLoading] = useState(true);
//   const db = getFirestore();

//   useEffect(() => {
//     if (!isAdmin) {
//       setUsersLoading(false);
//       return;
//     }

//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const usersData = querySnapshot.docs.map(doc => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             email: data.email || 'No email',
//             name: data.name || 'No name',
//             role: data.role || (data.admin ? 'admin' : 'user'),
//             admin: data.admin || false,
//             createdAt: data.createdAt?.toDate?.() || null
//           };
//         });
//         setUsers(usersData);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       } finally {
//         setUsersLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [isAdmin]);

//   const updateUserRole = async (userId: string, newRole: 'user' | 'admin') => {
//     try {
//       await updateDoc(doc(db, 'users', userId), {
//         role: newRole,
//         admin: newRole === 'admin'
//       });

//       if (currentUser?.uid === userId) {
//         await auth.currentUser?.getIdToken(true);
//       }

//       setUsers(prev =>
//         prev.map(u =>
//           u.id === userId ? { ...u, role: newRole, admin: newRole === 'admin' } : u
//         )
//       );
//     } catch (error) {
//       console.error("Update error:", error);
//     }
//   };

//   if (authLoading) return <LoadingSpinner />;
//   if (!isAdmin) return <Unauthorized />;
//   if (usersLoading) return <LoadingSpinner />;
//   if (users.length === 0) return <NoUsers />;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6 border-b border-gray-200">
//           <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
//           <p className="text-gray-600">Showing {users.length} user{users.length !== 1 ? 's' : ''}</p>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
//                         <FiUser className="text-purple-500" />
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                         <div className="text-sm text-gray-500">
//                           Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
//                     }`}>
//                       {user.role} {user.role === 'admin' ? '👑' : '👤'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium">
//                     {user.role === 'admin' ? (
//                       <button
//                         onClick={() => updateUserRole(user.id, 'user')}
//                         disabled={user.id === currentUser?.uid}
//                         className={`mr-2 px-3 py-1 text-sm rounded-md ${
//                           user.id === currentUser?.uid 
//                             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                             : 'bg-red-100 text-red-700 hover:bg-red-200'
//                         }`}
//                       >
//                         <FiUserX className="inline mr-1" /> Remove Admin
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => updateUserRole(user.id, 'admin')}
//                         className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-700 hover:bg-green-200"
//                       >
//                         <FiUserCheck className="inline mr-1" /> Make Admin
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LoadingSpinner = () => (
//   <div className="flex justify-center items-center h-64">
//     <FiLoader className="animate-spin text-4xl text-purple-500" />
//   </div>
// );

// const Unauthorized = () => (
//   <div className="flex flex-col items-center justify-center h-64 text-center">
//     <FiUserX className="text-5xl text-red-500 mb-4" />
//     <h2 className="text-2xl font-bold text-red-600 mb-2">Unauthorized Access</h2>
//     <p className="text-gray-600">Admin privileges required to view this page</p>
//   </div>
// );

// const NoUsers = () => (
//   <div className="flex flex-col items-center justify-center h-64 text-center">
//     <FiUser className="text-5xl text-gray-400 mb-4" />
//     <h2 className="text-2xl font-bold text-gray-600 mb-2">No Users Found</h2>
//     <p className="text-gray-500">No users exist in the collection</p>
//     <button 
//       onClick={() => window.location.reload()}
//       className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//     >
//       Refresh Data
//     </button>
//   </div>
// );

// export default AdminUsersPage;
