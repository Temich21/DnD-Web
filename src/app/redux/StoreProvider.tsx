'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from '../components/Loading/Loading'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    const persistorRef = useRef(persistStore(storeRef.current))

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={<Loading />} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    )
}