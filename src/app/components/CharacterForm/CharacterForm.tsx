import { CharacterFormSubmitState } from '@app/app/interfaces/CharacterFormState'
import { Formik, Field, Form } from 'formik'
import { Persist } from 'formik-persist'

export const CharacterForm = ({ submit }: CharacterFormSubmitState) => {
    return (
        <section>
            <Formik
                initialValues={{
                    characterName: '',
                    level: null,
                    class: '',
                    race: '',
                    background: '',
                    alignment: '',
                    bio: '',
                }}
                onSubmit={submit}
            >
                {() => (
                    <Form className='form' >
                        <div className='content pt-4'>
                            <label className='label' htmlFor="characterName">Character name:</label>
                            <Field
                                name='characterName'
                                type="text"
                                className='options inputName'
                                placeholder="Random by default"
                            />
                        </div>
                        <div className='content'>
                            <label className='label' htmlFor="level">Input your level:</label>
                            <Field
                                name='level'
                                type="number"
                                className='options inputLevel'
                                placeholder="Default 1"
                            />
                        </div>
                        <div className='content'>
                            <label className='label' htmlFor="class">Choose your class:</label>
                            <Field
                                component="select"
                                name="class"
                                multiple={false}
                                className='options'
                            >
                                <option value="random">Random</option>
                                <option value="barbarian">Barbarian</option>
                                <option value="bard">Bard</option>
                                <option value="cleric">Cleric</option>
                                <option value="druid">Druid</option>
                                <option value="fighter">Fighter</option>
                                <option value="monk">Monk</option>
                                <option value="paladin">Paladin</option>
                                <option value="ranger">Ranger</option>
                                <option value="rogue">Rogue</option>
                                <option value="sorcerer">Sorcerer</option>
                                <option value="warlock">Warlock</option>
                                <option value="wizard">Wizard</option>
                                <option value="artificer">Artificer</option>
                            </Field>
                        </div>
                        <div className='content'>
                            <label className='label' htmlFor="race">Choose your race:</label>
                            <Field
                                component="select"
                                name="race"
                                multiple={false}
                                className='options'
                            >
                                <option value="random">Random</option>
                                <option value="dragonborn">Dragonborn</option>
                                <option value="dwarf">Dwarf</option>
                                <option value="elf">Elf</option>
                                <option value="gnome">Gnome</option>
                                <option value="half-elf">Half-Elf</option>
                                <option value="halfling">Halfling</option>
                                <option value="half-orc">Half-Orc</option>
                                <option value="human">Human</option>
                                <option value="ranger">Tiefling</option>
                            </Field>
                        </div>
                        <div className='content'>
                            <label className='label' htmlFor="background">Choose your background:</label>
                            <Field
                                component="select"
                                name="background"
                                multiple={false}
                                className='options'
                            >
                                <option value="random">Random</option>
                                <option value="acolyte">Acolyte</option>
                                <option value="charlatan">Charlatan</option>
                                <option value="criminal">Criminal</option>
                                <option value="entertainer">Entertainer</option>
                                <option value="folk hero">Folk Hero</option>
                                <option value="guild artisan">Guild Artisan</option>
                                <option value="hermit">Hermit</option>
                                <option value="outlander">Outlander</option>
                                <option value="noble">Noble</option>
                                <option value="sage">Sage</option>
                                <option value="sailor">Sailor</option>
                                <option value="soldier">Soldier</option>
                                <option value="urchin">Urchin</option>
                            </Field>
                        </div>
                        <div className='content'>
                            <label className='label' htmlFor="alignment">Choose your Alignment:</label>
                            <Field
                                component="select"
                                name="alignment"
                                multiple={false}
                                className='options'
                            >
                                <option value="random">Random</option>
                                <option value="lawful good">Lawful Good</option>
                                <option value="neutral good">Neutral Good</option>
                                <option value="chaotic good">Chaotic Good</option>
                                <option value="lawful neutral">Lawful Neutral</option>
                                <option value="true neutral">True Neutral</option>
                                <option value="chaotic neutral">Chaotic Neutral</option>
                                <option value="lawful evil">Lawful Evil</option>
                                <option value="neutral evil">Neutral Evil</option>
                                <option value="chaotic evil">Chaotic Evil</option>
                            </Field>
                        </div>

                        <div className='content bio'>
                            <label className='label w-96' htmlFor="bio">Write key words for your bio:</label>
                            <Field name='bio' as="textarea" className='bioText' placeholder="Enter your bio here..." />
                        </div>
                        <div className='contentButton'>
                            <button type='reset' className='btn'>Clear</button >
                            <button type='submit' className='btn'>Submit</button >
                        </div>
                        <Persist
                            name="characterForm"
                        />
                    </Form>
                )}
            </Formik>
        </section>
    )
}
