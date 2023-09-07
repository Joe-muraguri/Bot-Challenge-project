import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";

function BotCollection({bots, onBotClick}) {
  // Your code here
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map((bot)=>(
          <>
            <ul>
            <li key={bot.id} onClick={()=>onBotClick(bot)}><strong>{bot.name}</strong> -{bot.health} - {bot.damage} - {bot.armor}</li>
            </ul>
            
            
          </>
          
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
