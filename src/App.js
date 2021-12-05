import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './components/pages/Home'
import Category from './components/pages/Category'
import SearchPage from './components/pages/SearchPage'
import SingleMeal from './components/pages/SingleMeal'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { AppContainer } from './styles/AppContainer.styled'
import { GlobalStyles } from './styles/GlobalStyles.styled'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Header />
        <AppContainer>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/c=:categoryName' component={Category} />
          <Route path='/search/s=:searchTerm' component={SearchPage} />
          <Route path='/single-meal/id=:idMeal' component={SingleMeal} />
        </AppContainer>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
