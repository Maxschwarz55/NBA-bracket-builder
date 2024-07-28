import GameOutline from "./GameOutline"
import propTypes from 'prop-types'
import React, {useContext, useState} from 'react';

export const Context = React.createContext();

function FirstRoundOutline(props) { 

    const [currentTeams, setCurrentTeams] = useState(["","","","","","","",""]);

    return(
        <div className = {`round-container ${props.confType}`}>
                {Array.from({length: props.numGames}, (_, index) => (
                    <Context.Provider value = {[index, props.confType]}>
                    <>
                        <GameOutline key = {index} currentTeams = {currentTeams} setCurrentTeams = {setCurrentTeams}/>
                        {index === props.numGames -1? null: <hr key = {index - 100} className = "game-seperator"></hr>}
                    </>
                    </Context.Provider>
                ))}
        </div>
    )

}

FirstRoundOutline.propTypes = {
    numGames: propTypes.number,
    numTeams: propTypes.number,
    confType: propTypes.string
}

export default FirstRoundOutline