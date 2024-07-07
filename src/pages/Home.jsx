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

import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect, useContext } from "react";
import BrowserLocale from "../components/BrowserLocale";
import config from "../config";
import { Button, Header } from "semantic-ui-react";
import StoreContext from "../context/StoreContext";
import ChooseCountry from "../components/ChooseCountry";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const { store, country, chooseStore } = useContext(StoreContext);
  const dr = config.dr;
  const hub = dr.hub;
  const spoke01 = dr.spoke01;
  const spoke02 = dr.spoke02;

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes\

  const takeMeToStore = async () => {
    window.location.href = store;
  };

  const login = async () => {
    await oktaAuth.signInWithRedirect({
      acrValues: "urn:okta:loa:1fa:pwd",
      scopes: ["openid", "email", "profile", "offline_access"],
    });
  };

  const signup = async () => {
    window.location.href =
      "https://ciam-spoke02.karthiktc.com/oauth2/default/v1/authorize?client_id=0oac2qpybeHSxXr7T697&code_challenge=AptwK4s28Vrla9GDeSLhE9QEDT_p41ZihtfDKgeKU2A&code_challenge_method=S256&nonce=yuxWTTyxdoAd2RuPGxsPIkrevxnrYlhKjGq3Fdr34rgepSuCHRGiOhlPARa0H78K&redirect_uri=https%3A%2F%2Flocal-app-01.karthiktc.com%2Flogin%2Fcallback&response_type=code&state=qOvqq0XLGbIVpk1IZRoCkNC8JnxxBzzE02ZAd1FvnpkwGN5uQcWqYvUyL6UolXSK&acr_values=urn%3Aokta%3Aloa%3A1fa%3Apwd&scope=openid%20email%20profile%20offline_access&signup_page=true";
  };

  if (!authState) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="div-container">
        <div className="left-div">
          <div>
            <Header as="h1">Data Residency Demo - Scenario 1</Header>
            <Header as="h3">
              Application Directory Page - Choose Country for Store
            </Header>
            <p>
              <span>
                From Identity perspective, each store (country/region) is an
                Individual Okta application bound to the Okta tenant of that
                region.
              </span>
            </p>

            <div>
              <h2>Browser Locale</h2>
              <BrowserLocale />

              <table>
                <thead>
                  <tr>
                    <th>Tenant</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CIAM Hub</td>
                    <td>
                      <a href={hub}>{hub}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Spoke 01</td>
                    <td>
                      <a href={spoke01}>{spoke01}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Spoke 02</td>
                    <td>
                      <a href={spoke02}>{spoke02}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="right-div">
          {!authState.isAuthenticated && (
            <div>
              <div>
                <h2>Country</h2>
                <ChooseCountry />
                {/* <p>
            <strong>Country from Context API:</strong> {country}
          </p> */}
                <h2>Data Residency Info</h2>
                <table>
                  <tbody>
                    <tr>
                      <th>Country</th>
                      <td>{country}</td>
                    </tr>
                    <tr>
                      <th>Store Link for the Country</th>
                      <td className="table-cell">{store}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="signup-login">
                <Button
                  id="login-button"
                  primary
                  onClick={takeMeToStore}
                  style={{ backgroundColor: "#063970" }}
                >
                  Take me to the {country} Store
                </Button>
              </div>

              {/* <div className="signup-login">
                <Button id="login-button" primary onClick={login}>
                  Login
                </Button>      

                <Button id="login-button" primary onClick={signup}>
                  Signup
                </Button>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
