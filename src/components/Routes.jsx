/*
 * Copyright (c) 2021-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import {
  RequiredAuth,
  StepupAuth,
  StepupAuthForce,
  StepupAuthAlways,
} from "./SecureRoute";
import Home from "../pages/Home";
import Loading from "./Loading";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import Scenarios from "../pages/Scenarios";
import Stepup from "../pages/Stepup";
import TermsOfUse from "../pages/TermsOfUse";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
