import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from '../ui/Theme';
import Header from '../ui/Header';
import LandingPage from './LandingPage';
import Footer from '../ui/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            {/* <Route
              exact
              path="/services"
              render={props => (
                <Services
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/customsoftware"
              render={props => (
                <CustomSoftware
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/mobileapps"
              render={props => (
                <MobileApps
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/websites"
              render={props => (
                <Websites
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/revolution"
              render={props => (
                <Revolution
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/about"
              render={props => (
                <About
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/contact"
              render={props => (
                <Contact
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/estimate"
              component={() => <div>Estimate</div>}
            /> */}
          </Switch>
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
