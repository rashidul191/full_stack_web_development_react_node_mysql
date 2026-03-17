import React from "react";
import { Route } from "react-router-dom";
import { ROLES } from "../enum/Roles";
import PrivateRoute from "./PrivateRoute";
import LoginAdmin from "../views/Auth/LoginAdmin";
import AdminLayout from "../views/layouts/AdminLayout";
import AdminDashboard from "../views/Admin/AdminDashboard";
import MenuIndex from "../views/Admin/Menu/MenuIndex";
import MenuForm from "../views/Admin/Menu/MenuForm";
import SubMenuIndex from "../views/Admin/SubMenu/SubMenuIndex";
import SubMenuForm from "../views/Admin/SubMenu/SubMenuForm";
import SliderIndex from "../views/Admin/Slider/SliderIndex";
import SliderForm from "../views/Admin/Slider/SliderForm";
import ReviewIndex from "../views/Admin/Review/ReviewIndex";
import ReviewForm from "../views/Admin/Review/ReviewForm";
import BlogIndex from "../views/Admin/Blog/BlogIndex";
import BlogForm from "../views/Admin/Blog/BlogForm";
import CategoryIndex from "../views/Admin/Category/CategoryIndex";
import CategoryForm from "../views/Admin/Category/CategoryForm";
import GeneralSetting from "../views/Admin/Setting/GeneralSetting";
import SocialLinks from "../views/Admin/Setting/SocialLinks";
import TeamIndex from "../views/Admin/Team/TeamIndex";
import TeamForm from "../views/Admin/Team/TeamForm";
import ContactMessageIndex from "../views/Admin/ContactMessage/ContactMessageIndex";
import ContactMessageShow from "../views/Admin/ContactMessage/ContactMessageShow";
import ClientBrandIndex from "../views/Admin/ClientBrand/ClientBrandIndex";
import ClientBrandForm from "../views/Admin/ClientBrand/ClientBrandForm";
import FAQIndex from "../views/Admin/FAQ/FAQIndex";
import FAQForm from "../views/Admin/FAQ/FAQForm";
import ServiceIndex from "../views/Admin/Service/ServiceIndex";
import ServiceForm from "../views/Admin/Service/ServiceForm";
import VideoSectionForHomePage from "../views/Admin/Setting/VideoSectionForHomePage";
import ActivityIndex from "../views/Admin/Activity/ActivityIndex";
import ActivityForm from "../views/Admin/Activity/ActivityForm";
import StorieIndex from "../views/Admin/Storie/StorieIndex";
import StorieForm from "../views/Admin/Storie/StorieForm";
import AboutIndex from "../views/Admin/About/AboutIndex";
import ContentManageIndex from "../views/Admin/ContentManage/ContentManageIndex";
import ContentManageForm from "../views/Admin/ContentManage/ContentManageForm";
import PriceIndex from "../views/Admin/Price/PriceIndex";
import PriceForm from "../views/Admin/Price/PriceForm";

export const AdminRoutes = (
  <>
    <Route path="/admin/login" element={<LoginAdmin />} />
    {/* <Route path="/register" element={<h1>Register</h1>} /> */}

    {/* Admin Panel [role from backend enum value] Admin = 0 */}
    <Route
      path="/admin"
      element={
        <PrivateRoute role={ROLES.Admin}>
          <AdminLayout />
        </PrivateRoute>
      }
    >
      <Route path="dashboard" element={<AdminDashboard></AdminDashboard>} />

      <Route path="menu">
        <Route path="" element={<MenuIndex />} />
        <Route path="create" element={<MenuForm />} />
        <Route path="edit/:id" element={<MenuForm />} />
      </Route>

      <Route path="sub-menu">
        <Route path="" element={<SubMenuIndex />} />
        <Route path="create" element={<SubMenuForm />} />
        <Route path="edit/:id" element={<SubMenuForm />} />
      </Route>

      <Route path="content-manage">
        <Route path="" element={<ContentManageIndex />} />
        <Route path="create" element={<ContentManageForm />} />
        <Route path="edit/:id" element={<ContentManageForm />} />
      </Route>

      <Route path="slider">
        <Route path="" element={<SliderIndex />} />
        <Route path="create" element={<SliderForm />} />
        <Route path="edit/:id" element={<SliderForm />} />
      </Route>

      <Route path="review">
        <Route path="" element={<ReviewIndex />} />
        <Route path="create" element={<ReviewForm />} />
        <Route path="edit/:id" element={<ReviewForm />} />
      </Route>

      <Route path="team">
        <Route path="" element={<TeamIndex />} />
        <Route path="create" element={<TeamForm />} />
        <Route path="edit/:id" element={<TeamForm />} />
      </Route>

      <Route path="activity">
        <Route path="" element={<ActivityIndex />} />
        <Route path="create" element={<ActivityForm />} />
        <Route path="edit/:id" element={<ActivityForm />} />
      </Route>

      <Route path="price">
        <Route path="" element={<PriceIndex />} />
        <Route path="create" element={<PriceForm />} />
        <Route path="edit/:id" element={<PriceForm />} />
      </Route>

      <Route path="blog">
        <Route path="" element={<BlogIndex />} />
        <Route path="create" element={<BlogForm />} />
        <Route path="edit/:id" element={<BlogForm />} />
      </Route>

      <Route path="category">
        <Route path="" element={<CategoryIndex />} />
        <Route path="create" element={<CategoryForm />} />
        <Route path="edit/:id" element={<CategoryForm />} />
      </Route>

      <Route path="storie">
        <Route path="" element={<StorieIndex />} />
        <Route path="create" element={<StorieForm />} />
        <Route path="edit/:id" element={<StorieForm />} />
      </Route>

      <Route path="client-brand">
        <Route path="" element={<ClientBrandIndex />} />
        <Route path="create" element={<ClientBrandForm />} />
        <Route path="edit/:id" element={<ClientBrandForm />} />
      </Route>

      <Route path="service">
        <Route path="" element={<ServiceIndex />} />
        <Route path="create" element={<ServiceForm />} />
        <Route path="edit/:id" element={<ServiceForm />} />
      </Route>

      <Route path="faq">
        <Route path="" element={<FAQIndex />} />
        <Route path="create" element={<FAQForm />} />
        <Route path="edit/:id" element={<FAQForm />} />
      </Route>

      <Route path="contact-message">
        <Route path="" element={<ContactMessageIndex />} />
        <Route path="show/:id" element={<ContactMessageShow />} />
      </Route>

      <Route path="about-us" element={<AboutIndex />} />

      <Route path="setting">
        <Route path="video-section" element={<VideoSectionForHomePage />} />
        <Route path="general" element={<GeneralSetting />} />
        <Route path="social-links" element={<SocialLinks />} />
        {/* <Route path="profile" element={<GeneralSetting />} /> */}
      </Route>
    </Route>
  </>
);
