import React, {useState} from "react";
import NBAInfo from "../TeamInfo/NBA";

function TeamBox() { 
    
    const [team, setTeam] = useState("");
    const [color, setColor] = useState("rgb(0,0,0)");
    const [logo, setLogo] = useState("");

    function handleChangeTeam(event) {
        const selectedTeamName = event.target.value;
        setTeam(selectedTeamName);
        const selectedTeam = NBAInfo.find(t => t.name === selectedTeamName);
        if (selectedTeam) {
            setColor(selectedTeam.color);
            setLogo(selectedTeam.logo);
        }
        else {
            setColor("rgb(0,0,0)");
            setLogo("");
        }
    }

    return(
        <div className="team-container">
            <select className = "team-selector" value = {team} onChange = {handleChangeTeam} style = {{backgroundColor: color, backgroundImage: `url(${logo})`}}>
                <option className = "team-option" value = "">Select a Team</option>
                {NBAInfo.map((team, index) => <option className = "team-option" key = {index}>{team.name}</option>)}
            </select>
        </div>
    )
}

export default TeamBox;