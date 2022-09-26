import { Route, Routes } from "react-router-dom";
import { Layout, LayoutAdmin } from "../components";
import {
  CandidateDetail,
  CandidateRanked,
  Candidates,
  Education,
  Home,
  Login,
  Page404,
  Proposal,
  Register,
} from "../pages";
import { Candidate } from "../pages";

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
      path="/candidate-ranked"
      element={
        <Layout>
          <CandidateRanked />
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
      exact
      path="/admin/candidates"
      element={
        <LayoutAdmin>
          <Candidates />
        </LayoutAdmin>
      }
    />
    <Route
      exact
      path="/admin/candidates/:candidateId"
      element={
        <LayoutAdmin>
          <Candidate />
        </LayoutAdmin>
      }
    />
    <Route
      exact
      path="/admin/candidates/:candidateId/proposals/:proposalId"
      element={
        <LayoutAdmin>
          <Proposal />
        </LayoutAdmin>
      }
    />
    <Route
      exact
      path="/admin/candidates/:candidateId/educations/:educationId"
      element={
        <LayoutAdmin>
          <Education />
        </LayoutAdmin>
      }
    />
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
