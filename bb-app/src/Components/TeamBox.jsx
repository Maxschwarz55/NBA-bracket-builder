import React, {useState} from "react";
import hawksLogo from "../assets/hawks-logo.png"
import celticsLogo from "../assets/celtics-logo.png"
import netsLogo from "../assets/nets-logo.png"
import hornetsLogo from "../assets/hornets-logo.png"
import bullsLogo from "../assets/bulls-logo.png"
import cavaliersLogo from "../assets/cavaliers-logo.png"
import mavericksLogo from "../assets/mavericks-logo.png"


import images from "../TeamInfo/NBA";

function TeamBox() { 
    
    const NBAInfo = [
        {name: "Hawks", logo: hawksLogo, color: "rgb(200, 16, 46)"},
        {name: "Celtics", logo: celticsLogo, color: "rgb(0, 122, 51)"},
        {name: "Nets", logo: netsLogo, color: "rgb(0, 0, 0)"},
        {name: "Hornets", logo: hornetsLogo, color: "rgb(29, 17, 96)"},
        {name: "Bulls", logo: bullsLogo, color: "rgb(206, 17, 65)"},
        {name: "Cavaliers", logo: cavaliersLogo, color: "rgb(134, 0, 56)"},
        {name: "Mavericks", logo: mavericksLogo, color: "rgb(0, 83, 188)"},
        {name: "Nuggets", logo: "./assets/nuggets-logo.png", color: "rgb(13, 34, 64)"},
        {name: "Pistons", logo: "./assets/pistons-logo.png", color: "rgb(200, 16, 46)"},
        {name: "Warriors", logo: "./assets/warriors-logo.png", color: "rgb(29, 66, 138)"},
        {name: "Rockets", logo: "./assets/rockets-logo.png", color: "rgb(206, 17, 65)"},
        {name: "Pacers", logo: "./assets/pacers-logo.png", color: "rgb(0, 39, 93)"},
        {name: "Clippers", logo: "./assets/clippers-logo.png", color: "rgb(200, 16, 46)"},
        {name: "Lakers", logo: "./assets/lakers-logo.png", color: "rgb(85, 37, 130)"},
        {name: "Grizzlies", logo: "./assets/grizzlies-logo.png", color: "rgb(93, 118, 169)"},
        {name: "Heat", logo: "./assets/heat-logo.png", color: "rgb(152, 0, 46)"},
        {name: "Bucks", logo: "./assets/bucks-logo.png", color: "rgb(0, 71, 27)"},
        {name: "Timberwolves", logo: "./assets/timberwolves-logo.png", color: "rgb(0, 80, 131)"},
        {name: "Pelicans", logo: "./assets/pelicans-logo.png", color: "rgb(0, 22, 65)"},
        {name: "Knicks", logo: "./assets/knicks-logo.png", color: "rgb(0, 107, 182)"},
        {name: "Thunder", logo: "./assets/thunder-logo.png", color: "rgb(0, 125, 195)"},
        {name: "Magic", logo: "./assets/magic-logo.png", color: "rgb(0, 125, 197)"},
        {name: "76ers", logo: "./assets/76ers-logo.png", color: "rgb(0, 107, 182)"},
        {name: "Suns", logo: "./assets/suns-logo.png", color: "rgb(29, 17, 96)"},
        {name: "Trail Blazers", logo: "./assets/blazers-logo.png", color: "rgb(224, 58, 62)"},
        {name: "Kings", logo: "./assets/kings-logo.png", color: "rgb(91, 43, 130)"},
        {name: "Spurs", logo: "./assets/spurs-logo.png", color: "rgb(196, 206, 211)"},
        {name: "Raptors", logo: "./assets/raptors-logo.png", color: "rgb(206, 17, 65)"},
        {name: "Jazz", logo: "./assets/jazz-logo.png", color: "rgb(0, 43, 92)"},
        {name: "Wizards", logo: "./assets/wizards-logo.png", color: "rgb(0, 43, 92)"}

    ]

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