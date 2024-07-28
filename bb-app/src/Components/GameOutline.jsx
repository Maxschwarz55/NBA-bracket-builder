import TeamBox from "./TeamBox"

function GameOutline({currentTeams, setCurrentTeams}) { 



    return(
        <div className = "game-box-outline">
            <div className="game-box">
                <TeamBox className = "top-team" topTeam = {true} currentTeams={currentTeams} setCurrentTeams={setCurrentTeams}/>
                <hr className = "team-seperator"></hr>
                <TeamBox className = "bottom-team" topTeam = {false} currentTeams={currentTeams} setCurrentTeams={setCurrentTeams}></TeamBox>
            </div>
            <hr className = "horz-team-line"></hr>
        </div>
    )
}

export default GameOutline