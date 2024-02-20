import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AddMenu = React.lazy(() => import("pages/AddMenu"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const TableList = React.lazy(() => import("pages/TableList"));
const TableId = React.lazy(() => import("pages/TableId"));
const CategoriesNine = React.lazy(() => import("pages/CategoriesNine"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const AddTable = React.lazy(() => import("pages/AddTable"));
const OrderId = React.lazy(() => import("pages/OrderId"));
const OrderList = React.lazy(() => import("pages/OrderList"));
const Review = React.lazy(() => import("pages/Review"));
const Customer = React.lazy(() => import("pages/Customer"));
const MenuList = React.lazy(() => import("pages/MenuList"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menulist" element={<MenuList />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/orderid" element={<OrderId />} />
          <Route path="/addtable" element={<AddTable />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/categoriesnine" element={<CategoriesNine />} />
          <Route path="/tableid" element={<TableId />} />
          <Route path="/tablelist" element={<TableList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addmenu" element={<AddMenu />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
