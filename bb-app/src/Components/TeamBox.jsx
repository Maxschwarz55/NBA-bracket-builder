import React, {useState, useContext, useCallback, useMemo, useEffect} from "react";
import NBAInfo from "../TeamInfo/NBA";
import { Context } from "./FirstRoundOutline";
import propTypes from 'prop-types'

function TeamBox({ topTeam, currentTeams, setCurrentTeams }) { 
    const [team, setTeam] = useState("");
    const [color, setColor] = useState("rgb(0,0,0)");
    const [logo, setLogo] = useState("");
    const seedAndConf = useContext(Context);
    const seed = topTeam ? seedAndConf[0] + 1 : 8 - seedAndConf[0];

    useEffect(() => {
        const selectedTeamName = currentTeams[seed - 1] || "";
        setTeam(selectedTeamName);

        const selectedTeam = NBAInfo.find(t => t.name === selectedTeamName);
        if (selectedTeam) {
            setColor(selectedTeam.color);
            setLogo(selectedTeam.logo);
        } else {
            setColor("rgb(0,0,0)");
            setLogo("");
        }

    }, [currentTeams, seed]);

    function handleChangeTeam(event) {
        const selectedTeamName = event.target.value;
        const selectedTeam = NBAInfo.find(t => t.name === selectedTeamName);
        if (selectedTeam) {
            const updatedTeams = [...currentTeams];
            updatedTeams[seed - 1] = selectedTeamName;
            setCurrentTeams(updatedTeams);
            setTeam(selectedTeamName);  // Explicitly set the team state
        }
    }

    function isAlreadySelected(teamName) { 
        for (let i = 0; i < currentTeams.length; i++) { 
            if (i !== (seed - 1) && currentTeams[i] === teamName) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="team-container">
            <p className="seed">[{seed}]</p>
            <select 
                className="team-selector" 
                value={team} 
                onChange={handleChangeTeam} 
                style={{ backgroundColor: color, backgroundImage: `url(${logo})` }}
            >
                <option className="team-option" value="">Select a Team</option>
                {NBAInfo.map((currTeam, index) => 
                    currTeam.conf === seedAndConf[1] && !isAlreadySelected(currTeam.name) ? (
                        <option className="team-option" key={index} value={currTeam.name}>
                            {currTeam.name}
                        </option>
                    ) : null
                )}
            </select>
        </div>
    );
}

TeamBox.propTypes = {
    topTeam: propTypes.bool.isRequired,
    currentTeams: propTypes.array.isRequired,
    setCurrentTeams: propTypes.func.isRequired
};

export default TeamBox;