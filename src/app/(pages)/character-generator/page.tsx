"use client"

import { Reducer, useReducer, useRef, useState } from 'react'
import { Header } from '@app/app/components/Header/Header'
import { Navigation } from '@app/app/components/Navigation/Navigation'
import { CharacterForm } from '@app/app/components/CharacterForm/CharacterForm'
import { Loading } from '@app/app/components/Loading/Loading'
import { CharacterSheet } from '@app/app/components/CharacterSheet/CharacterSheet'
import { useReactToPrint } from "react-to-print"
import reducerCharacterSheet, { ActionTypeCharacterSheet } from "@app/app/components/CharacterSheet/store/reducerCharacterSheet"
import defaultStoreCharacterSheet, {
  CharacterListFields,
} from "@app/app/components/CharacterSheet/store/defaultStoreCharacterSheet"
import { createActions } from "@app/app/components/CharacterSheet/store/actionsCharacterSheet"
import { CharacterFormState } from '@app/app/interfaces/CharacterFormState'
import { setCharacterForm } from '@app/app/redux/reducers/CharacterFormSlice'

export default function Home() {
  const [characterGeneratorPageState, setCharacterGeneratorPageState] = useState('form')

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

  const handleBackToForm = () => setCharacterGeneratorPageState('form')

  const submit = async (values: CharacterFormState) => {
    setCharacterGeneratorPageState('loading')
    dispatch(setCharacterForm(values))
    console.log(values)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setCharacterGeneratorPageState('sheet')
  }

  return (
    <main>
      <Header name='Character Generator'>
        {characterGeneratorPageState === 'sheet' &&
          <button className="btn" onClick={handlePrint}>Download</button>
        }
        {characterGeneratorPageState === 'sheet' &&
          <button className="btn" onClick={handleClear}>Clear</button>
        }
        {characterGeneratorPageState === 'sheet' &&
          <button className="btn" onClick={handleBackToForm}>Back to form</button>
        }
      </Header>
      <main>
        <Navigation />
        {characterGeneratorPageState === 'form' && <CharacterForm submit={submit} />}
        {characterGeneratorPageState === 'loading' && <Loading />}
        {characterGeneratorPageState === 'sheet' &&
          <CharacterSheet
            componentReference={componentRef}
            data={data}
            dispatch={actions}
          />
        }
      </main>
    </main>
  )
}

