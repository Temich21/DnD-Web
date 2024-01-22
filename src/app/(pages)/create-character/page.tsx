"use client"

import { useRef, useReducer, Reducer } from "react"
import { Header } from '@app/app/components/Header/Header'
import { Navigation } from '@app/app/components/Navigation/Navigation'
import { CharacterSheet } from '@app/app/components/CharacterSheet/CharacterSheet'
import { useReactToPrint } from "react-to-print"
import reducerCharacterSheet, { ActionTypeCharacterSheet } from "@app/app/components/CharacterSheet/store/reducerCharacterSheet"
import defaultStoreCharacterSheet, {
  CharacterListFields,
} from "@app/app/components/CharacterSheet/store/defaultStoreCharacterSheet"
import { createActions } from "@app/app/components/CharacterSheet/store/actionsCharacterSheet"

export default function Home() {
  const componentRef = useRef(null)
  const [data, dispatch] = useReducer<Reducer<CharacterListFields, ActionTypeCharacterSheet>>(
    reducerCharacterSheet,
    defaultStoreCharacterSheet
  )
  const actions = createActions(data, dispatch)

  const handleClear = () => dispatch({ type: "characterClear", payload: defaultStoreCharacterSheet })

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  })

  return (
    <main>
      <Header name='Character Character'>
        <button className="btn" onClick={handlePrint}>Download</button>
        <button className="btn" onClick={handleClear}>Clear</button>
      </Header>
      <main>
        <Navigation />
        <CharacterSheet
          componentReference={componentRef}
          data={data}
          dispatch={actions}
        />
      </main>
    </main>
  )
}
