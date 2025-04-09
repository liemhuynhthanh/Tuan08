// import React from "react";

// const statusStyle = {
//   New: "bg-blue-100 text-blue-600",
//   "In-progress": "bg-yellow-100 text-yellow-600",
//   Completed: "bg-green-100 text-green-600"
// };

// const DetailedReport = ({ data }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow">
//       <div className="flex justify-between p-4 border-b">
//         <div className="font-bold text-lg">Detailed report</div>
//         <div>
//           <button className="border px-4 py-1 rounded-lg text-pink-600 border-pink-500 mr-2">Import</button>
//           <button className="border px-4 py-1 rounded-lg text-pink-600 border-pink-500">Export</button>
//         </div>
//       </div>
//       <table className="min-w-full table-auto text-sm">
//         <thead className="text-left bg-gray-50">
//           <tr>
//             <th className="p-4"><input type="checkbox" /></th>
//             <th className="p-4">CUSTOMER NAME</th>
//             <th className="p-4">COMPANY</th>
//             <th className="p-4">ORDER VALUE</th>
//             <th className="p-4">ORDER DATE</th>
//             <th className="p-4">STATUS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, idx) => (
//             <tr key={idx} className="border-t">
//               <td className="p-4"><input type="checkbox" /></td>
//               <td className="p-4 flex items-center gap-2">
//                 <img src={item.avatar} className="w-8 h-8 rounded-full" alt={item.name} />
//                 {item.name}
//               </td>
//               <td className="p-4">{item.company}</td>
//               <td className="p-4">{item.orderValue}</td>
//               <td className="p-4">{item.orderDate}</td>
//               <td className="p-4">
//                 <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${statusStyle[item.status]}`}>
//                   {item.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="p-4 text-sm text-gray-600">{data.length} results</div>
//     </div>
//   );
// };

// export default DetailedReport;
