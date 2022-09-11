import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { CandidateDetail, Home, Login, Page404, Register } from "../pages";

export const Router = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      exact
      path="/candidate/:candidateId"
      element={
        <Layout>
          <CandidateDetail />
        </Layout>
      }
    />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route
      path="*"
      element={
        <Layout>
          <Page404 />
        </Layout>
      }
    />
  </Routes>
);
