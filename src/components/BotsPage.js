import React from "react";
import { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [selectedBot, setSelectedBot] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8002/bots',{
      method: 'GET',

    })
    .then((response)=> response.json())
    .then((data)=> setBots(data))
    
  },[])

  const handleBotClick = (bot)=>{
    console.log(bot)
    setSelectedBot([...selectedBot, bot])
  }

  const handleRemoveBot = (botToRemove) =>{
    setSelectedBot(selectedBot.filter((bot)=> bot.id !== botToRemove.id))
  }

  return (
    <div>
      <YourBotArmy selectedBot={selectedBot} onRemoveBot={handleRemoveBot} />
      <BotCollection bots={bots}  onBotClick={handleBotClick} />
    </div>
  )
}

export default BotsPage;
