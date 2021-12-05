import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export const Wrapper = (children) => {
    return render(<Provider store={store}>{children}</Provider>)
}