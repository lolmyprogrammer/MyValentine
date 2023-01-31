import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import Bojan from "./assets/Bojan.jpg";
import Mila from "./assets/Mila.gif";
import Lutka from "./assets/Lutka.gif";
import Ceskam from "./assets/Ceskam.gif";
import Inaet from "./assets/Inaet.gif";
import Gresam from "./assets/Valorant.png";
import ZaMene from "./assets/ZaMene.gif";
import ZaTebe from "./assets/ZaTebe.gif";
import Interesno from "./assets/Interesno.gif";
import BojanMila from "./assets/MilaBojan.gif";
import TeSakam from "./assets/TeSakam.gif";
import Valentine from "./assets/Valentine.gif";
import Woooooooo from "./assets/WOO.gif";



const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={Bojan}
        bgColor={colors.red}
        textColor={colors.white}
        title="Бојан"
        text="Здраво Мила, јас сум Бојан денес ке ти презентирам една убава страница специајално направена за тебе."
        btnText="<3"
        sequency="1"
      />
      <Screen
        imageUrl={Mila}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Мила"
        text="Започнувајќи со тебе, ти си најубаовото нешто што можело да ми се случи"
        btnText="<3"
        sequency="2"
      />
      <Screen
        imageUrl={Lutka}
        bgColor={colors.pink}
        textColor={colors.dark}
        title="Лутка"
        text="Да може често се лутиш, и многу се нервираш"
        btnText="<3"
        sequency="3"
      />
      <Screen
        imageUrl={Ceskam}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Бараш чешкање"
        text="Да може понекогаш нервираш со чешкањето (Но секако ке те чешкам)"
        btnText="<3"
        sequency="4"
      />
      <Screen
        imageUrl={Inaet}
        bgColor={colors.red}
        textColor={colors.white}
        title="Инает"
        text="Да може си огромен инает и многу си недоразбирлива"
        btnText="<3"
        sequency="5"
      />
      <Screen
        imageUrl={Gresam}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Кога грешам"
        text="Ама затоа си прва да ме поправиш кога ке згрешам (особено во Valorant)"
        btnText="<3"
        sequency="6"
      />
      <Screen
        imageUrl={ZaMene}
        bgColor={colors.green}
        textColor={colors.white}
        title="Тука си за мене"
        text="И во кое било време секогаш си била тука за мене и со било што знам дека можам кај тебе да дојдам"
        btnText="<3"
        sequency="7"
      />
      <Screen
        imageUrl={ZaTebe}
        bgColor={colors.yellow}
        textColor={colors.dark}
        title="Тука сум за тебе"
        text="И секогаш во било кое време јас ќе бидам тука за тебе безразлика што и да е"
        btnText="<3"
        sequency="8"
      />
      <Screen
        imageUrl={Interesno}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Интересно ми е со тебе"
        text="Нема друга личност на светов што може да ми направи да ми биде интересно како ти што можеш "
        btnText="<3"
        sequency="9"
      />
      <Screen
        imageUrl={BojanMila}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Мила и Бојан"
        text="Се ближи година, но се чуствува како да има поминато само месец но во исто време како да сме поминале векови заедно."
        btnText="<3"
        sequency="10"
      />
      <Screen
        imageUrl={TeSakam}
        bgColor={colors.yellow}
        textColor={colors.dark}
        title="Те сакам"
        text="Најмногу те сакам Мила, неможам да опишам со зборови колку те сакам"
        btnText="<3"
        sequency="11"
      />
      <Screen
        imageUrl={Valentine}
        bgColor={colors.red}
        textColor={colors.white}
        title="Главното прашање"
        text="Дали ти Мила ке бидеш мојот Valentine ?"
        btnText="ДА (немаш друг избор)"
        sequency="12"
      />
      <Screen
        imageUrl={Woooooooo}
        bgColor={colors.pink}
        textColor={colors.dark}
        title="WOOOOOOOOO"
        text="Се гледаме на 14ti :D"
        btnText="Од Почеток"
        sequency="13"
      />
    </div>
  );
};

export default App;
