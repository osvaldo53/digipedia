function selecionar() {
    var digi = document.getElementsByName('raddigi')
    var res = document.getElementById('conteudo')
    var imgex = document.getElementById('imgexemplo')

    var img1 = document.createElement('img')
    img1.setAttribute('id', 'foto1')
    var img2 = document.createElement('img')
    img2.setAttribute('id', 'foto2')
    var img3 = document.createElement('img')
    img3.setAttribute('id', 'foto3')
    var img4 = document.createElement('img')
    img4.setAttribute('id', 'foto4')
    var img5 = document.createElement('img')
    img5.setAttribute('id', 'foto5')

    if (digi[0].checked) {
        res.innerHTML = `<h1>Koromon</h1>
        <img src="imagens/koromon.png" alt="Koromon" id="imgres">
        <p>Um pequeno Digimon que perdeu a penugem que cobria a sua superfície e cujo corpo ficou maior. Embora tenha se tornado capaz de se mover de forma mais ativa, ainda é incapaz de lutar. Ele pode criar bolhas da sua boca para intimidar os seus inimigos.</p>
        
        <h1>Agumon</h1>
        <img src="imagens/agumon.png" alt="Agumon" id="imgres">
        <p>É um Digimon Réptil que desenvolveu bipedismo e tem a aparência de um pequeno dinossauro. Por ainda estar a caminho da fase adulta, o seu poder é reduzido, no entanto, a sua personalidade é muito feroz, pelo que não entende o medo. Cresceram-lhe afiadas e robustas garras em ambas as mãos e pés, cujo poder demonstra em batalha. Também prediz a evolução para um grande e poderoso Digimon. O seu movimento especial é cuspir fogo da boca para atacar o oponente (Baby Flame).</p>
        
        <h1>Greymon</h1>
        <img src="imagens/greymon.png" alt="Greymon" id="imgres">
        <p>Um Digimon Dinosauro cuja pele craniana endureceu, de maneira a ficar coberta por uma carapaça parecida à de um besouro-rinoceronte. É um Digimon extremamente agressivo, com um corpo que é uma arma letal, repleta de garras afiadas e chifres gigantes. Contudo, é altamente inteligente e, se for domado, não deve haver monstro mais forte. O seu movimento especial Mega Flame consiste em cuspir chamas a elevadas temperaturas que reduzem tudo a cinzas. Como os Greymons que habitam o Continente Folder não têm personalidades frenéticas, são capazes de usar estilos de luta que contam com a cooperação dos seus camaradas, por causa do seu grande inteleto.</p>
        
        <h1>MetalGreymon</h1>
        <img src="imagens/metalgreymon.png" alt="MetalGreymon" id="imgres">
        <p>Um Digimon Ciborgue que mecanizou mais de metade do seu corpo. Os MetalGreymons da Ilha File foram capazes de estender drasticamente as suas funções vitais através de uma remodelação, mas as partes orgânicas dos seus corpos não aguentaram e acabaram por descolorir. Um MetalGreymon pleno, contudo, é um Digimon Ciborgue superior em poder que resulta da evolução bem sucedida de um Greymon. Além disso, diz-se que o seu poder ofensivo equivale ao de uma ogiva nuclear e que qualquer Digimon de baixo nível que sofre o seu ataque é aniquilado sem deixar rasto.</p>
        
        <h1>WarGreymon</h1>
        <img src="imagens/WarGreymon.png" alt="WarGreymon" id="imgres">
        <p>O guerreiro dragão mais forte, cujo corpo é revestido por uma armadura de super-metal "Chrome DigiZoid", é a forma derradeira dos Digimons das Espécies Greymon. Embora a sua forma humana difira das gigantescas figuras dos Digimons das Espécies Greymon, melhorou grandemente a sua velocidade e poder, e é provavelmente impossível derrotá-lo com ataques de níveis Perfeito. Os "Dramon Killers" equipados nos dois braços demonstram imenso poder contra Digimons das espécies Dramon, embora sejam espadas de dois gumes que põem em risco a sua própria vida. Além disso, quando as duas couraças que tem nas costas se unem, tornam-se no "Brave Shield", um dos escudos mais resistentes. O seu movimento especial é reunir toda a energia da atmosfera, concentrá-la num só ponto, e arremessá-la sob a forma de um tiro de energia de densidade e temperatura extremamente elevadas (Gaia Force).</p>`
    } else if (digi[1].checked) {
        res.innerHTML = `<h1>Tsunomon</h1>
        <img src="imagens/tsunomon.png" alt="Tsunomon" id="imgres">
        <p>Um pequeno Digimon que endureceu uma das antenas na sua cabeça como Punimon. A partir de Punimon, ele efetuou uma evolução mais animalesca e o seu corpo foi coberto por pelos maciços. Ele ainda está no auge da brincadeira e possui uma personalidade que ama diabruras, mas o seu instinto de luta não despertou.</p>
        
        <h1>Gabumon</h1>
        <img src="imagens/gabumon.png" alt="Gabumon" id="imgres">
        <p>Embora esteja coberto por um casaco de peles, é claramente um Digimon Réptil. Devido à sua natureza extremamente tímida e envergonhada, reúne dados que os Garurumons deixam para trás e torna-os num casaco de peles, para que os possa vestir. Por usar as peles de Garurumon, temido por outros Digimons, consegue salvaguardar a sua espécie, ao proteger o seu corpo. Quando tem o seu casaco vestido, a sua personalidade faz uma mudança de 180º. O seu movimento especial é Petit Fire.</p>
        
        <h1>Garurumon</h1>
        <img src="imagens/garurumon.png" alt="Garurumon" id="imgres">
        <p>Coberto por um pelo azul, branco e prateado, é um Digimon Besta com a aparência de um lobo. Esse pelo é tão rijo como Mithril, um metal raro lendário, e como as lâminas que lhe crescem dos ombros têm extremidades afiadas, qualquer coisa que toquem é cortada em pedaços. Por possuir um furioso instinto de combate e tendões desenvolvidos em terras gélidas, bem como a óbvia agilidade de um carnívoro e a precisão para derrubar de forma segura os seus alvos, é um ser temido por outros Digimons. No entanto, é muito inteligente e obedece fielmente àquele que reconhece como seu mestre ou líder. O seu movimento especial é uma chama azul, a alta temperatura, que sopra da sua boca (Fox Fire).</p>
        
        <h1>WereGarurumon</h1>
        <img src="imagens/weregarurumon.png" alt="Koromon" id="imgres">
        <p>Um Digimon Homem-Besta que evoluiu de Garurumon e tornou-se capaz de andar sobre duas patas. Ao tornar-se bípede, perdeu a velocidade, mas tornou-se num Digimon de estilo comando com maior poder ofensivo e defensivo, além de ter desenvolvido uma personalidade tática. As suas técnicas de pontapé, facultadas pela força de pernas que herdou de Garurumon, são bastante fortes, pelo que compete pelo primeiro ou segundo lugar em capacidades de salto, entre os outros Digimons. Para além disto, é rico em lealdade e tem e uma personalidade confiável, executando fielmente a missão que o seu mestre lhe der. O seu movimento especial é cortar o oponente em pedaços com as garras afiadas em ambas as mãos (Kaiser Nail).</p>
        
        <h1>MetalGarurumon</h1>
        <img src="imagens/metalgarurumon.png" alt="Koromon" id="imgres">
        <p>A forma Final de Garurumon, cujo poder aumentou ao metalizar quase todo o corpo. Após a metalização, não só manteve a sua astúcia, como ganhou inúmeras armas escondidas pelo corpo, com as quais pode pulverizar o adversário. Lasers invisíveis são irradiados a partir das quatro Laser Sights que tem na ponta do focinho e, por ser capaz de analisar os alvos antes de usar todos os seus sensores, tais como raios infravermelhos e raios X, é impossível escapar de MetalGarurumon. Além disso, consegue voar pelo espaço da Net a altíssima velocidade ao utilizar as asas com forma de feixes de luz que estende pelos braços que lhe crescem das costas. O seu movimento especial é expelir ar frio ao zero absoluto que congela completamente tudo (Cocytus Breath). Também abate o oponente com o Garuru Tomahawk, um missíl gigantesco chamado Freeze Bomber que lança do peito, e Grace Cross Freezer, que consiste em disparar todas as armas ao mesmo tempo.</p>`
    } /*else if (digi[2].checked) {
        res.innerHTML = ``
    } else if (digi[3].checked) {
        res.innerHTML = ``
    } else if (digi[4].checked) {
        res.innerHTML = ``
    } else if (digi[5].checked) {
        res.innerHTML = ``
    } else if (digi[6].checked) {
        res.innerHTML = ``
    } else (digi[7].checked) {
        res.innerHTML = ``
    } */
    imgex.outerHTML = ``
}

