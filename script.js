let http = new XMLHttpRequest();

http.open('get','Output.json',true);

http.send();

http.onload = function(){

    if(this.readyState == 4 && this.status == 200){
        let players = JSON.parse(this.responseText);
        let output = "";
            for( let i = 0; i < 1; i++){
                let item1 = players[i];
                output += `
                <div class = "container">
                <div class = "players">
                    <div class = "match_details_container">
                        <img src = "${item1.country}" alt = "${item1.country}" width = 90px height = 50px>
                        <span class = "img_cap1">Netherlands &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${item1.team1_tot_runs}</span><br>
                        <img src = "${item1.country1}" alt = "${item1.country1}" width = 90px height = 50px>
                        <span class = "img_cap2">Afganisthan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(${item1.team2_tot_balls}/50 ov, T: ${item1.target})</span>&nbsp;&nbsp;
                        <span class = "team2_runs">${item1.team2_tot_runs}/${item1.wicket_team2}</span>
                        <p>${item1.result}(with ${item1.team2_balls_remaining} balls remaining)</p></div>
                    <div class = "player_of_match_detail">
                        <p style = "font-weight:lighter;font-size:15px">${item1.player_of_the_match}, <span style = "opacity:0.6"> AFG </span><b> &nbsp;&nbsp;&nbsp; Player Of The Match</b></p>
                        <img src = "${item1.image}" alt = "${item1.image}" width = 65px height = 65px>
                        <p style = "font-weight:lighter;font-size:15px"> ${item1.player_runs}(${item1.player_bowl_faced}) & ${item1.wicket_taken}/${item1.player_runs_conceived}</p>
                    </div>
                    </div>
                </div>
                </div>`;
            }

        let out = "";
            for(let j=0; j < players.length / 2;j++){
                let people = players[j];
                out += `
                    <div id = "team1_players">
                        <tr>
                            <td>${people.player_name}</td>
                            <td>${people.has_batted}</td>
                            <td>${people.player_runs}</td>
                            <td>${people.player_bowl_faced}</td>
                            <td>${people.batting_strike_rate}</td>
                        </tr>
                    </div>
                `;
            }


        let out1 = "";
            for(let k=11; k < players.length; k++){
                let people1 = players[k];
                out1 += `
                    <div id = "team2_players">
                        <tr>
                            <td>${people1.player_name}</td>
                            <td>${people1.has_batted}</td>
                            <td>${people1.player_runs}</td>
                            <td>${people1.player_bowl_faced}</td>
                            <td>${people1.batting_strike_rate}</td>
                        </tr>
                    </div>
                `;
            }


    var x = document.querySelector(".players").innerHTML = output;
    var y = document.querySelector("#team1_players").innerHTML = out;
    var z = document.querySelector("#team2_players").innerHTML = out1;  
    }
}




        