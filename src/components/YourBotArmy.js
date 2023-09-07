import React from "react";

function YourBotArmy({selectedBot, onRemoveBot}) {
  //your bot army code here...
  console.log("Your Bot",selectedBot)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {selectedBot.map((bot)=>(
            <div>
              <h2 className="selectedBot" key={bot.id} onClick={()=>onRemoveBot(bot)}>Name: {bot ?  bot.name : 'No bot selected'}</h2>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
