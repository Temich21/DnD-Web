import React, { useRef } from "react"
import styles from "./CharacterSheet.module.scss"
import { CharacterSheetState } from "@app/app/interfaces/CharacterSheetState"

export const CharacterSheet = (props: CharacterSheetState) => {
    const ref = useRef<HTMLTextAreaElement>(null)
    let bioHeight

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (ref.current) {
            ref.current.style.height = "auto"
            ref.current.style.height = `${e.target.scrollHeight - 16}px`;
            bioHeight = e.target.scrollHeight
        }
    }

    return (
        <form className={styles.charsheet} ref={props.componentReference}>
            <header>
                <section className={styles.charname}>
                    <label htmlFor="charname">Character Name</label>
                    <input name="charname"
                        placeholder="Thoradin Fireforge"
                        value={props.data.characterName}
                        onChange={props.dispatch.characterNameSet}>
                    </input>
                </section>
                <section className={styles.misc}>
                    <ul>
                        <li>
                            <label htmlFor="classlevel">Class & Level</label>
                            <input name="classlevel"
                                placeholder="Paladin 2"
                                value={props.data.characterClassAndLevel}
                                onChange={props.dispatch.characterClassAndLevelSet} />
                        </li>
                        <li>
                            <label htmlFor="background">Background</label>
                            <input name="background"
                                placeholder="Acolyte"
                                value={props.data.characterBackground}
                                onChange={props.dispatch.characterBackgroundlSet} />
                        </li>
                        <li>
                            <label htmlFor="playername">Player Name</label>
                            <input name="playername"
                                placeholder="Player McPlayerface"
                                value={props.data.characterPlayerName}
                                onChange={props.dispatch.characterPlayerNameSet} />
                        </li>
                        <li>
                            <label htmlFor="race">Race</label>
                            <input name="race"
                                placeholder="Half-elf"
                                value={props.data.characterRace}
                                onChange={props.dispatch.characterRaceSet} />
                        </li>
                        <li>
                            <label htmlFor="alignment">Alignment</label>
                            <input name="alignment"
                                placeholder="Lawful Good"
                                value={props.data.characterAlignment}
                                onChange={props.dispatch.characterAlignmentSet} />
                        </li>
                        <li>
                            <label htmlFor="experiencepoints">Experience Points</label>
                            <input name="experiencepoints"
                                placeholder="3240"
                                value={props.data.characterExperiencePoints}
                                onChange={props.dispatch.characterExperiencePointsSet} />
                        </li>
                    </ul>
                </section>
            </header>
            <main>
                <section>
                    <section className={styles.attributes}>
                        <div className={styles.scores}>
                            <ul>
                                <li>
                                    <div className={styles.score}>
                                        <label htmlFor="Strengthscore">Strength</label>
                                        <input name="Strengthscore"
                                            placeholder="10"
                                            value={props.data.characterStrength}
                                            onChange={props.dispatch.characterStrengthSet} />
                                    </div>
                                    <div className={styles.modifier}>
                                        <input name="Strengthmod"
                                            placeholder="+0"
                                            value={props.data.characterStrengthmod}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.score}>
                                        <label htmlFor="Dexterityscore">Dexterity</label>
                                        <input name="Dexterityscore"
                                            placeholder="10"
                                            value={props.data.characterDexterity}
                                            onChange={props.dispatch.characterDexteritySet} />
                                    </div>
                                    <div className={styles.modifier}>
                                        <input name="Dexteritymod"
                                            placeholder="+0"
                                            value={props.data.characterDexteritymod} />
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.score}>
                                        <label htmlFor="Constitutionscore">Constitution</label>
                                        <input name="Constitutionscore"
                                            placeholder="10"
                                            value={props.data.characterConstitution}
                                            onChange={props.dispatch.characterConstitutionSet} />
                                    </div>
                                    <div className={styles.modifier}>
                                        <input name="Constitutionmod"
                                            placeholder="+0"
                                            value={props.data.characterConstitutionmod} />
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.score}>
                                        <label htmlFor="Wisdomscore">Wisdom</label>
                                        <input name="Wisdomscore"
                                            placeholder="10"
                                            value={props.data.characterWisdom}
                                            onChange={props.dispatch.characterWisdomSet} />
                                    </div>
                                    <div className={styles.modifier}>
                                        <input name="Wisdommod"
                                            placeholder="+0"
                                            value={props.data.characterWisdommod} />
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.score}>
                                        <label htmlFor="Intelligencescore">Intelligence</label>
                                        <input name="Intelligencescore"
                                            placeholder="10"
                                            value={props.data.characterIntelligence}
                                            onChange={props.dispatch.characterIntelligenceSet}
                                        />
                                    </div>
                                    <div className={styles.modifier}>
                                        <input name="Intelligencemod"
                                            placeholder="+0"
                                            value={props.data.characterIntelligencemod}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.score}>
                                        <label htmlFor="Charismascore">Charisma</label><input name="Charismascore"
                                            placeholder="10"
                                            value={props.data.characterCharisma}
                                            onChange={props.dispatch.characterCharismaSet} />
                                    </div>
                                    <div className={styles.modifier}>
                                        <input name="Charismamod" placeholder="+0"
                                            value={props.data.characterCharismamod} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.attrApplications}>
                            <div className={styles.inspiration + ' ' + styles.box}>
                                <div className={styles.labelContainer}>
                                    <label htmlFor="inspiration">Inspiration</label>
                                </div>
                                <input name="inspiration" type="checkbox" className={styles.checkbox} />
                            </div>
                            <div className={styles.proficiencybonus + ' ' + styles.box}>
                                <div className={styles.labelContainer}>
                                    <label htmlFor="proficiencybonus">Proficiency Bonus</label>
                                </div>
                                <input name="proficiencybonus"
                                    placeholder="+2"
                                    value={props.data.characterProficiencyBonus}
                                    onChange={props.dispatch.characterProficiencyBonusSet} />
                            </div>
                            <div className={styles.saves + ' ' + styles.listSection + ' ' + styles.box}>
                                <ul className={styles.savesThrow}>
                                    <li>
                                        <label htmlFor="Strength-save">Strength</label>
                                        <input name="Strength-save"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterStrengthSave}
                                            onChange={props.dispatch.characterStrengthSaveSet} />
                                        <input name="Strength-save-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.StrengthSaveProf}
                                            onChange={props.dispatch.StrengthSaveProfSet}
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="Dexterity-save">Dexterity</label>
                                        <input name="Dexterity-save"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterDexteritySave}
                                            onChange={props.dispatch.characterDexteritySaveSet} />
                                        <input name="Dexterity-save-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.DexteritySaveProf}
                                            onChange={props.dispatch.DexteritySaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Constitution-save">Constitution</label>
                                        <input name="Constitution-save"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterConstitutionSave}
                                            onChange={props.dispatch.characterConstitutionSaveSet} />
                                        <input name="Constitution-save-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.ConstitutionSaveProf}
                                            onChange={props.dispatch.ConstitutionSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Wisdom-save">Wisdom</label>
                                        <input name="Wisdom-save"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterWisdomSave}
                                            onChange={props.dispatch.characterWisdomSaveSet} />
                                        <input name="Wisdom-save-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.WisdomSaveProf}
                                            onChange={props.dispatch.WisdomSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Intelligence-save">Intelligence</label>
                                        <input name="Intelligence-save"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterIntelligenceSave}
                                            onChange={props.dispatch.characterIntelligenceSaveSet} />
                                        <input name="Intelligence-save-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.IntelligenceSaveProf}
                                            onChange={props.dispatch.IntelligenceSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Charisma-save">Charisma</label>
                                        <input name="Charisma-save"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterCharismaSave}
                                            onChange={props.dispatch.characterCharismaSaveSet} />
                                        <input name="Charisma-save-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.CharismaSaveProf}
                                            onChange={props.dispatch.CharismaSaveProfSet} />
                                    </li>
                                </ul>
                                <div className={styles.label}>
                                    Saving Throws
                                </div>
                            </div>
                            <div className={styles.skills + ' ' + styles.listSection + ' ' + styles.box}>
                                <ul className={styles.savesThrow}>
                                    <li>
                                        <label htmlFor="Acrobatics">Acrobatics <span className={styles.skill}>(Dex)</span></label>
                                        <input
                                            name="Acrobatics"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterAcrobaticsSave}
                                            onChange={props.dispatch.characterAcrobaticsSaveSet} />
                                        <input name="Acrobatics-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.AcrobaticsSaveProf}
                                            onChange={props.dispatch.AcrobaticsSaveProfSet}
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="Animal Handling">Animal Handling <span
                                            className={styles.skill}>(Wis)</span></label>
                                        <input name="Animal Handling"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterAnimalHandlingSave}
                                            onChange={props.dispatch.characterAnimalHandlingSaveSet} />
                                        <input name="Animal Handling-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.AnimalHandlingSaveProf}
                                            onChange={props.dispatch.AnimalHandlingSaveProfSet}
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="Arcana">Arcana<span className={styles.skill}>(Int)</span></label>
                                        <input
                                            name="Arcana"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterArcanaSave}
                                            onChange={props.dispatch.characterArcanaSaveSet} />
                                        <input name="Arcana-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.ArcanaSaveProf}
                                            onChange={props.dispatch.ArcanaSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Athletics">Athletics<span className={styles.skill}>(Str)</span></label>
                                        <input
                                            name="Athletics"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterAthleticsSave}
                                            onChange={props.dispatch.characterAthleticsSaveSet} />
                                        <input name="Athletics-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.AthleticsSaveProf}
                                            onChange={props.dispatch.AthleticsSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Deception">Deception<span className={styles.skill}>(Cha)</span></label>
                                        <input
                                            name="Deception"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterDeceptionSave}
                                            onChange={props.dispatch.characterDeceptionSaveSet} />
                                        <input name="Deception-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.DeceptionSaveProf}
                                            onChange={props.dispatch.DeceptionSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="History">History<span className={styles.skill}>(Int)</span></label>
                                        <input
                                            name="History"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterHistorySave}
                                            onChange={props.dispatch.characterHistorySaveSet} />
                                        <input name="History-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.HistorySaveProf}
                                            onChange={props.dispatch.HistorySaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Insight">Insight<span className={styles.skill}>(Wis)</span></label>
                                        <input
                                            name="Insight"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterInsightSave}
                                            onChange={props.dispatch.characterInsightSaveSet} />
                                        <input name="Insight-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.InsightSaveProf}
                                            onChange={props.dispatch.InsightSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Intimidation">Intimidation<span
                                            className={styles.skill}>(Cha)</span></label>
                                        <input name="Intimidation"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterIntimidationSave}
                                            onChange={props.dispatch.characterIntimidationSaveSet} />
                                        <input name="Intimidation-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.IntimidationSaveProf}
                                            onChange={props.dispatch.IntimidationSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Investigation">Investigation<span
                                            className={styles.skill}>(Int)</span></label>
                                        <input name="Investigation"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterInvestigationSave}
                                            onChange={props.dispatch.characterInvestigationSaveSet} />
                                        <input name="Investigation-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.InvestigationSaveProf}
                                            onChange={props.dispatch.InvestigationSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Medicine">Medicine<span className={styles.skill}>(Wis)</span></label>
                                        <input
                                            name="Medicine"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterMedicineSave}
                                            onChange={props.dispatch.characterMedicineSaveSet} />
                                        <input name="Medicine-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.MedicineSaveProf}
                                            onChange={props.dispatch.MedicineSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Nature">Nature<span className={styles.skill}>(Int)</span></label>
                                        <input
                                            name="Nature"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterNatureSave}
                                            onChange={props.dispatch.characterNatureSaveSet} />
                                        <input name="Nature-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.NatureSaveProf}
                                            onChange={props.dispatch.NatureSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Perception">Perception<span className={styles.skill}>(Wis)</span></label>
                                        <input
                                            name="Perception"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterPerceptionSave}
                                            onChange={props.dispatch.characterPerceptionSaveSet} />
                                        <input name="Perception-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.PerceptionSaveProf}
                                            onChange={props.dispatch.PerceptionSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Performance">Performance<span className={styles.skill}>(Cha)</span></label>
                                        <input
                                            name="Performance"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterPerformanceSave}
                                            onChange={props.dispatch.characterPerformanceSaveSet} />
                                        <input name="Performance-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.PerformanceSaveProf}
                                            onChange={props.dispatch.PerformanceSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Persuasion">Persuasion<span className={styles.skill}>(Cha)</span></label>
                                        <input
                                            name="Persuasion"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterPersuasionSave}
                                            onChange={props.dispatch.characterPersuasionSaveSet} />
                                        <input name="Persuasion-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.PersuasionSaveProf}
                                            onChange={props.dispatch.PersuasionSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Religion">Religion<span className={styles.skill}>(Int)</span></label>
                                        <input
                                            name="Religion"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterReligionSave}
                                            onChange={props.dispatch.characterReligionSaveSet} />
                                        <input name="Religion-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.ReligionSaveProf}
                                            onChange={props.dispatch.ReligionSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Sleight of Hand">Sleight of Hand <span
                                            className={styles.skill}>(Dex)</span></label>
                                        <input name="Sleight of Hand"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterSleightofHandSave}
                                            onChange={props.dispatch.characterSleightofHandSaveSet} />
                                        <input name="Sleight of Hand-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.SleightofHandSaveProf}
                                            onChange={props.dispatch.SleightofHandSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Stealth">Stealth<span className={styles.skill}>(Dex)</span></label>
                                        <input
                                            name="Stealth"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterStealthSave}
                                            onChange={props.dispatch.characterStealthSaveSet} />
                                        <input name="Stealth-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.StealthSaveProf}
                                            onChange={props.dispatch.StealthSaveProfSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="Survival">Survival<span className={styles.skill}>(Wis)</span></label>
                                        <input
                                            name="Survival"
                                            placeholder="+0"
                                            type="text"
                                            value={props.data.characterSurvivalSave}
                                            onChange={props.dispatch.characterSurvivalSaveSet} />
                                        <input name="Survival-prof"
                                            type="checkbox"
                                            className={styles.checkbox}
                                            checked={props.data.SurvivalSaveProf}
                                            onChange={props.dispatch.SurvivalSaveProfSet} />
                                    </li>
                                </ul>
                                <div className={styles.label}>
                                    Skills
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={styles.passivePerception + ' ' + styles.box}>
                        <div className={styles.labelContainer}>
                            <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
                        </div>
                        <input name="passiveperception"
                            placeholder="10"
                            value={props.data.characterPassivePerception}
                            onChange={props.dispatch.characterPassivePerceptionSet}
                        />
                    </div>
                    <div className={styles.otherprofs + ' ' + styles.box + ' ' + styles.textblock}>
                        <label htmlFor="otherprofs" className={styles.otherProf}>Other Proficiencies and Languages</label>
                        <textarea name="otherprofs"
                            className={styles.textarea}
                            value={props.data.characterOtherprofs}
                            onChange={props.dispatch.characterOtherprofsSet}
                        ></textarea>
                    </div>
                </section>
                <section>
                    <section className={styles.combat}>
                        <div className={styles.armorclass}>
                            <div>
                                <label htmlFor="ac">Armor Class</label>
                                <input name="ac"
                                    placeholder="10"
                                    type="text"
                                    value={props.data.characterArmorClass}
                                    onChange={props.dispatch.characterArmorClassSet} />
                            </div>
                        </div>
                        <div className={styles.initiative}>
                            <div>
                                <label htmlFor="initiative">Initiative</label>
                                <input name="initiative"
                                    placeholder="+0"
                                    type="text"
                                    value={props.data.characterInitiative}
                                    onChange={props.dispatch.characterInitiativeSet} />
                            </div>
                        </div>
                        <div className={styles.speed}>
                            <div>
                                <label htmlFor="speed">Speed</label>
                                <input name="speed"
                                    placeholder="30"
                                    type="text"
                                    value={props.data.characterSpeed}
                                    onChange={props.dispatch.characterSpeedSet} />
                            </div>
                        </div>
                        <div className={styles.hp}>
                            <div className={styles.regular}>
                                <div className={styles.max}>
                                    <label htmlFor="maxhp">Hit Point Maximum</label>
                                    <input name="maxhp"
                                        placeholder="10"
                                        type="text"
                                        value={props.data.characterMaxHP}
                                        onChange={props.dispatch.characterMaxHPSet} />
                                </div>
                                <div className={styles.current}>
                                    <label htmlFor="currenthp">CURRENT HIT POINTS</label>
                                    <input name="currenthp"
                                        type="text"
                                        value={props.data.characterCurrentHP}
                                        onChange={props.dispatch.characterCurrentHPSet} />
                                </div>
                            </div>
                            <div className={styles.temporary}>
                                <label htmlFor="temphp">TEMPORARY HIT POINTS</label>
                                <input name="temphp"
                                    type="text"
                                    value={props.data.characterTempHP}
                                    onChange={props.dispatch.characterTempHPSet} />
                            </div>
                        </div>
                        <div className={styles.hitdice}>
                            <div>
                                <div className={styles.total}>
                                    <label htmlFor="totalhd">Total</label>
                                    <input name="totalhd"
                                        placeholder="2d10"
                                        type="text"
                                        value={props.data.characterTotalHD}
                                        onChange={props.dispatch.characterTotalHDSet} />
                                </div>
                                <div className={styles.remaining}>
                                    <label htmlFor="remaininghd">HIT DICE</label>
                                    <input name="remaininghd"
                                        type="text"
                                        value={props.data.characterRemainingHD}
                                        onChange={props.dispatch.characterRemainingHDSet} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.deathsaves}>
                            <div>
                                <div className={styles.label}>
                                    <label>DEATH SAVES</label>
                                </div>
                                <div className={styles.marks}>
                                    <div className={styles.deathsuccesses}>
                                        <label>SUCCESSES</label>
                                        <div className={styles.bubbles}>
                                            <input name="deathsuccess1"
                                                type="checkbox"
                                                className={styles.checkbox}
                                                checked={props.data.characterdeathSuccess1}
                                                onChange={props.dispatch.characterdeathSuccess1Set} />
                                            <input name="deathsuccess2"
                                                type="checkbox"
                                                checked={props.data.characterdeathSuccess2}
                                                onChange={props.dispatch.characterdeathSuccess2Set} />
                                            <input name="deathsuccess3"
                                                type="checkbox"
                                                checked={props.data.characterdeathSuccess3}
                                                onChange={props.dispatch.characterdeathSuccess3Set} />
                                        </div>
                                    </div>
                                    <div className={styles.deathfails}>
                                        <label>FAILURES</label>
                                        <div className={styles.bubbles}>
                                            <input name="deathfail1"
                                                type="checkbox"
                                                className={styles.checkbox}
                                                checked={props.data.characterDeathFail1}
                                                onChange={props.dispatch.characterDeathFail1Set} />
                                            <input name="deathfail2"
                                                type="checkbox"
                                                className={styles.checkbox}
                                                checked={props.data.characterDeathFail2}
                                                onChange={props.dispatch.characterDeathFail2Set} />
                                            <input name="deathfail3"
                                                type="checkbox"
                                                className={styles.checkbox}
                                                checked={props.data.characterDeathFail3}
                                                onChange={props.dispatch.characterDeathFail3Set} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.attacksandspellcasting}>
                        <div>
                            <label >Attacks & Spellcasting</label>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Atk Bonus
                                        </th>
                                        <th>
                                            Damage/Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input name="atkname1"
                                                type="text"
                                                value={props.data.characterAtkName1}
                                                onChange={props.dispatch.characterAtkName1Set} />
                                        </td>
                                        <td>
                                            <input name="atkbonus1"
                                                type="text"
                                                value={props.data.characterAtkbonus1}
                                                onChange={props.dispatch.characterAtkbonus1Set} />
                                        </td>
                                        <td>
                                            <input name="atkdamage1"
                                                type="text"
                                                value={props.data.characterAtkDamage1}
                                                onChange={props.dispatch.characterAtkDamage1Set} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input name="atkname2"
                                                type="text"
                                                value={props.data.characterAtkName2}
                                                onChange={props.dispatch.characterAtkName2Set} />
                                        </td>
                                        <td>
                                            <input name="atkbonus2"
                                                type="text"
                                                value={props.data.characterAtkbonus2}
                                                onChange={props.dispatch.characterAtkbonus2Set} />
                                        </td>
                                        <td>
                                            <input name="atkdamage2"
                                                type="text"
                                                value={props.data.characterAtkDamage2}
                                                onChange={props.dispatch.characterAtkDamage2Set} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input name="atkname3"
                                                type="text"
                                                value={props.data.characterAtkName3}
                                                onChange={props.dispatch.characterAtkName3Set} />
                                        </td>
                                        <td>
                                            <input name="atkbonus3"
                                                type="text"
                                                value={props.data.characterAtkbonus3}
                                                onChange={props.dispatch.characterAtkbonus3Set} />
                                        </td>
                                        <td>
                                            <input name="atkdamage3"
                                                type="text"
                                                value={props.data.characterAtkDamage3}
                                                onChange={props.dispatch.characterAtkDamage3Set} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <textarea className={styles.textarea}
                                value={props.data.attacksAndSpellCasting}
                                onChange={props.dispatch.attacksAndSpellCastingSet}></textarea>
                        </div>
                    </section>
                    <section className={styles.equipment}>
                        <div>
                            <label className={styles.label}>Equipment</label>
                            <div className={styles.money}>
                                <ul>
                                    <li>
                                        <label htmlFor="cp">CP</label>
                                        <input name="cp"
                                            value={props.data.characterCP}
                                            onChange={props.dispatch.characterCPSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="sp">SP</label>
                                        <input name="sp"
                                            value={props.data.characterSP}
                                            onChange={props.dispatch.characterSPSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="ep">EP</label>
                                        <input name="ep"
                                            value={props.data.characterEP}
                                            onChange={props.dispatch.characterEPSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="gp">GP</label>
                                        <input name="gp"
                                            value={props.data.characterGP}
                                            onChange={props.dispatch.characterGPSet} />
                                    </li>
                                    <li>
                                        <label htmlFor="pp">PP</label>
                                        <input name="pp"
                                            value={props.data.characterPP}
                                            onChange={props.dispatch.characterPPSet} />
                                    </li>
                                </ul>
                            </div>
                            <textarea placeholder="Equipment list here"
                                className={styles.textarea}
                                value={props.data.characterEquipment}
                                onChange={props.dispatch.characterEquipmentSet}></textarea>
                        </div>
                    </section>
                </section>
                <section>
                    <section className={styles.flavor}>
                        <div className={styles.personality}>
                            <label htmlFor="personality">PERSONALITY</label>
                            <textarea name="personality"
                                className={styles.textarea}
                                value={props.data.characterPersonality}
                                onChange={props.dispatch.characterPersonalitySet}></textarea>
                        </div>
                        <div className={styles.ideals}>
                            <label htmlFor="ideals">IDEALS</label>
                            <textarea name="ideals"
                                className={styles.textarea}
                                value={props.data.characterIdeals}
                                onChange={props.dispatch.characterIdealsSet}></textarea>
                        </div>
                        <div className={styles.bonds}>
                            <label htmlFor={styles.bonds}>BONDS</label>
                            <textarea name="bonds"
                                className={styles.textarea}
                                value={props.data.characterBonds}
                                onChange={props.dispatch.characterBondsSet}></textarea>
                        </div>
                        <div className={styles.flaws}>
                            <label htmlFor="flaws">FLAWS</label>
                            <textarea name="flaws"
                                className={styles.textarea}
                                value={props.data.characterFlaws}
                                onChange={props.dispatch.characterFlawsSet}></textarea>
                        </div>
                    </section>
                    <section className={styles.features}>
                        <div>
                            <label htmlFor={styles.features}>Features & Traits</label>
                            <textarea name="features"
                                className={styles.textarea}
                                value={props.data.characterFeatures}
                                onChange={props.dispatch.characterFeaturesSet}></textarea>
                        </div>
                    </section>
                </section>
            </main>
            <div className={styles.bio}
                style={{ height: `${bioHeight}px` }}>
                <label htmlFor="bio">Your Background</label>
                <textarea name='bio'
                    ref={ref}
                    rows={1}
                    placeholder="Enter your bio here..."
                    value={props.data.characterBio}
                    onChange={props.dispatch.characterBioSet}
                    onInput={handleInput}></textarea>
            </div>
        </form >
    )
}