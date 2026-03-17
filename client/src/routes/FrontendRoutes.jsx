import { Route } from "react-router-dom";

import Home from "../views/FrontEnd/Pages/Home";
import BlogPage from "../views/FrontEnd/pages/BlogPage";
import BlogDetails from "../views/FrontEnd/Pages/BlogDetails";
import FrontendLayout from "../views/layouts/FrontEndLayout";
import TopMenuContent from "../views/FrontEnd/Pages/TopMenuContent";
import SubMenuContent from "../views/FrontEnd/Pages/SubMenuContent";
import Contact from "../views/FrontEnd/pages/ContactPage";
import AboutPage from "../views/FrontEnd/pages/AboutPage";
import ContentDetails from "../views/FrontEnd/pages/ContentDetails";

export const FrontendRoutes = (
  <>
    <Route element={<FrontendLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="/:slug" element={<TopMenuContent />} />
      <Route path="/:slug/:slug" element={<SubMenuContent />} />

      <Route path="/more-details/:slug" element={<ContentDetails />} />

      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      <Route path="/contact-us" element={<Contact />} />
    </Route>
  </>
);
