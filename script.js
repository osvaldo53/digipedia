function selecionar() {
    var digi = document.getElementsByName('raddigi')
    var res = document.getElementById('conteudo')
    var imgex = document.getElementById('imgexemplo')

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
        <img src="imagens/wargreymon.png" alt="WarGreymon" id="imgres">
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
    } else if (digi[2].checked) {
        res.innerHTML = `<h1>Yocomon</h1>
        <img src="imagens/yokomon.png" alt="Yocomon" id="imgres">
        <p>Um Digimon Lesser de tipo Bolbo com uma grande flor a crescer da sua cabeça. Consegue mover-se habilmente, operando as suas raízes com forma de tentáculo e, devido ao seu leve peso, consegue erguer-se no ar, porém apenas a uma baixa altura. Como é muito curiosa, está sempre a mexer-se e tem uma aparência fofa. Costuma viver em bando que cresce de um ou dois indivíduos para uma centena.</p>

        <h1>Piyomon</h1>
        <img src="imagens/piyomon.png" alt="Piyomon" id="imgres">
        <p>Um Digimon Pintainho cujas asas se desenvolveram de modo a parecerem braços. É capaz de manobrar as asas com destreza para agarrar objetos, mas, por esse motivo, não voa muito bem. Costuma viver no solo, mas quando o perigo bate à porta, escapa a voar. Contudo, visto que as suas habilidades de voo estão ao nível de Patamon, vê este como seu rival. O seu sonho é tornar-se em Birdramon, que é capaz de voar livremente, e parece não querer acabar da mesma forma que Cockatrimon, que não voa, de todo. A sua personalidade transborda curiosidade e adora bicar a cabeça de Tanemon. O seu movimento especial consiste em chamas etéreas (Magical Fire).</p>

        <h1>Birdramon</h1>
        <img src="imagens/birdramon.png" alt="Birdramon" id="imgres">
        <p>Um Digimon Ave Gigante que tem o corpo envolto em chamas. Tal como Meramon, este Digimon nasceu da barreira que protege a Internet, "Firewall". Voa pelo céu, batendo as suas enormes asas. Embora não aprecie lutar, os inimigos que a tentarem atacar serão furiosamente retaliados. O seu movimento especial consiste em agitar as asas e largar as suas penas contra o inimigo, como meteoros (Meteor Wing).</p>

        <h1>Garudamon</h1>
        <img src="imagens/garudamon.png" alt="Garudamon" id="imgres">
        <p>Um Digimon Homem-Ave com grandes presas e asas que o deixam dançar livremente pelo céu. Garudamon honra a justiça e a ordem, e é uma divindade guardiã da terra e do vento que ama a natureza. De todos os Digimons Ave, é o que possui a maior sapiência e habilidade combativa, e é admirado por ser dito que somente Digimons escolhidos evoluem para ele. Pensa-se que, quando o Digital World é perturbado, aparece do nada para reprimir a perturbação. É também um importante amigo do herói Leomon, que possui a mesma vontade. O seu movimento especial é uma lâmina de vácuo superveloz que retalha o inimigo (Shadow Wing). Por causa da velocidade do resíduo de Shadow Wing, a sua verdadeira forma ainda não foi confirmada e apenas pode é vista como a silhueta de um pássaro negro.</p>

        <h1>Phoenixmon</h1>
        <img src="imagens/phoenixmon.png" alt="Phoenixmon" id="imgres">
        <p>Um Digimon sagrado que possui quatro asas com um brilho dourado. É o chefe de todos os Digimons Ave e diz-se ser quem preside os Digimons das espécies sagradas. Enquanto que Holydramon é a derradeira forma dos Digimons Besta, Hououmon é a derradeira forma dos Digimons Ave. Como prova de que é uma espécie de Digimon sagrada, absorve poder sacro de onde quer que toque com os seus dois Holy Ring, e o poder que carrega é compreendido como insondável. O seu movimento especial é bater gentilmente as quatro asas, provocando uma chuva de grãos dourados (Starlight Explosion). Diz-se que a maldade daqueles que sofrem esta técnica é purificada.</p>`
    } else if (digi[3].checked) {
        res.innerHTML = `<h1>Motimon</h1>
        <img src="imagens/motimon.png" alt="Motimon" id="imgres">
        <p>Possuindo pele elástica, é um Digimon de corpo mole que usa as protuberâncias no sopé do seu corpo para gatinhar. Foi chamado de "Motimon" por inchar o seu corpo quando fica chateado, fazendo com que pareça mochi. No entanto, uma vez que tem um grande intelecto, algo que não se apreenderia a partir da sua aparência, conjetura-se que tenha tido origem numa função de dicionário de um computador. Ele entende a fala humana e, às vezes, é visto a deformar voluntariamente o seu corpo, como se estivesse a tentar responder. Produz bolhas elásticas semelhantes a mochi para restringir os movimentos do oponente.</p>

        <h1>Tentomon</h1>
        <img src="imagens/tentomon.png" alt="Tentomon" id="imgres">
        <p>O tipo original de Digimon Inseto que, embora tenha uma carapaça dura, ainda é pouco agressivo. Tem uma garra rija em cada pata dianteira, quatro nas traseiras e nas do meio e estas, em particular, são capazes de segurar habilmente em objectos, como se fosse uma mão humana. Embora os outros Insetos do seu nível de evolução apenas possuam espírito combativo, mantém os seus sentimentos naturalmente puros, e mostra uma forma de vida despreocupada a sentir o aroma das flores e fazer sestas à sombra das árvores. O seu movimento especial, que possui para certas eventualidades, é lançar electricidade estática que é amplificada pelas suas asas (Petit Thunder).</p>

        <h1>Kabuterimon</h1>
        <img src="imagens/kabuterimon.png" alt="Kabuterimon" id="imgres">
        <p>Entre os Digimons recém-descobertos, é um Digimon Inseto bastante único. Os detalhes de como evoluiu para um tipo Inseto não estão claros, porém tem tanto o poder de uma formiga como a capacidade defensiva impecável possuída por um besouro. Como a sua personalidade é a de um inseto em si, só possui o instinto de sobrevivência e, como resultado, não tem inteligência ou qualquer coisa similar. Ele arrebate sobre os Digimons Virus hostis sem piedade. A sua cabeça foi metalizada e tem a defesa de um muro de ferro. O seu movimento especial é Mega Blaster.</p>

        <h1>MegaKabuterimon</h1>
        <img src="imagens/megakabuterimon.png" alt="MegaKabuterimon" id="imgres">
        <p>Uma evolução de Kabuterimon descoberta dentro da região tropical da Net Area. É quase 1,5 vezes maior do que Kabuterimon, um volume consideravelmente grande para um Digimon Inseto. É uma espécie similar a AtlurKabuterimon (Azul); como esse Digimon, a força do seu chifre, que se tornou na sua arma principal, aumentou, mas parece ser-lhe superior em capacidade de voo. Além disso, desenvolveu tecido muscular na base dos membros dianteiros, pelo que a sua capacidade de agarrar foi aprimorada. Foi observado que, para além dos instintos de sobrevivência, comporta-se de forma a proteger os mais fracos, o que se assemelha, por vezes, à conduta de um cavaleiro. O seu movimento especial é perfurar o oponente com o chifre gigante (Horn Buster).</p>

        <h1>H. Kabuterimon</h1>
        <img src="imagens/herculeskabuterimon.png" alt="HerculesKabuterimon" id="imgres">
        <p>HerculesKabuterimon é um digimon Inseto de nível Final que evoluiu a partir dos dados de Digimons das Espécies Kabuterimon e Kuwagamon. Tem um chifre, tesouras gigantes e pode dizer-se que compensa todas as fraquezas que os Digimons dessas espécies de naturezas opostas, possuem. O seu corpo radia dourado, reganhando a perícia aérea que MegaKabuterimon perdeu, e viaja pelo Digital World a velocidades supersónicas. Tendo alcançado a evolução Final, há agora poucos seres que podem rivalizar com este Digimon. O seu movimento especial é uma versão melhorada do Mega Blaster (Giga Blaster). Não há ninguém que seja capaz de suportar esta técnica.</p>`
    } else if (digi[4].checked) {
        res.innerHTML = `<h1>Tokomon</h1>
        <img src="imagens/tokomon.png" alt="Tokomon" id="imgres">
        <p>Um minúsculo Digimon com protuberâncias semelhantes a membros a crescer por baixo do seu corpo (cabeça?). Os Digimons Bebé com membros crescidos são extremamente raros e a sua aparência é imensamente fofa. No entanto, embora possa ser fofo, é preciso ter cuidado, porque se lhe estenderem a mão de forma descuidada, vai abrir de repente a boca, pronto a morder com as presas que crescem, compactas, no interior dela. Dito isto, não tem más intenções e possui uma personalidade muito inocente.</p>

        <h1>Patamon</h1>
        <img src="imagens/patamon.png" alt="Patamon" id="imgres">
        <p>Um Digimon Mamífero caracterizado pelas suas grandes orelhas. Consegue utilizá-as como asas e voar, mas, como só vai a uma velocidade de 1 km/h, diz-se que mais lhe vale andar. No entanto, o ar fofo com que fica está a tentar, desesperadamente, voar, fá-lo bastante popular (se bem que ele não deve sentir o mesmo). Devido à sua personalidade extremamente obediente, os seus treinadores estarão bem defendidos. Além disso, apesar de Patamon não usar um Holy Ring, mostra bem o seu poder sagrado e parece ter herdado os genes de Digimons antigos. Os seus movimentos especiais consistem em chupar ar, disparando-o, de seguida, como uma bala explosiva (Air Shot) e golpear o adversário com as suas grandes orelhas (Hane Binta).</p>

        <h1>Angemon</h1>
        <img src="imagens/angemon.png" alt="Angemon" id="imgres">
        <p>Um Digimon Anjo com seis asas brilhantes, cujo corpo é revestido com um tecido de tão puro branco que parece divino. É um ser de perfeita virtude e, apesar de o descreverem como um Digimon que traz felicidade, ao confrontar o mal tudo que faz é atacar, com extrema calma, até que o oponente seja completamente aniquilado. Nas várias vezes em que o Digital World é visitado por uma crise, é dito que ele desce para liderar Digimons da mesma espécie. Devimon, que foi conquistado pelo lado negro, era originalmente desta espécie. O seu movimento especial consiste em golpear o adversário com o seu punho a brilhar dourado (Heaven's Knuckle).</p>

        <h1>MagnaAngemon</h1>
        <img src="imagens/magnaangemon.png" alt="MagnaAngemon" id="imgres">
        <p>Um Digimon Arcanjo com oitos asas de prata brilhantes. A missão de HolyAngemon no Digital World é ser um oficial da lei e tem o dever de supervisionar e vigiar muitos Digimons Anjo. Ademais, embora seja o orador para a essência da "Luz", tentando preservar a ordem do Digital World geralmente sob a forma de sacerdote, quando o Digital World é derrubado pela essência das "Trevas", ele muda para o seu Modo Batalha e ataca o mal. No seu Modo Batalha, relega o adversário ao esquecimento com o "Beam Shield" no seu braço esquerdo e com a espada sagrada "Excalibur" que tem equipada no braço direito. Além disso, embora HolyAngemon tenha uma personalidade repleta de doçura e de bondade quando está no Modo Sacerdote, assume uma personalidade austera quando está no Modo Batalha. O seu movimento especial é manifestar uma porta para o subespaço do qual não há retorno e consignar o oponente ao esquecimento através dela (Heaven's Gate).</p>

        <h1>Seraphimon</h1>
        <img src="imagens/seraphimon.png" alt="Seraphimon" id="imgres">
        <p>Um Digimon Serafim vestido numa armadura sagrada que brilha de prateado e possui dez asas douradas. Como o Digimon Anjo de mais elevado estatuto, governa sobre todos eles. Embora a sua verdadeira face e pessoa estejam escondidas atrás de uma máscara e não possam ser vislumbradas, é o ser mais próximo do "Ser do Bem" chamado "Deus". Diz-se que quando descender para a batalha final contra os seres do mal, purificará tudo. Além disso, é dito que Demon, que caiu para a Dark Area e se tornou num Digimon Lorde Demónio, era originalmente um Seraphimon. Os seus movimentos especiais são disparar sete esferas de luz super-aquecidas contra o inimigo (Seven Heavens) e usar o mais profundo mistério para converter a sua vida mortal num Big Bang (Testament).</p>`
    } else if (digi[5].checked) {
        res.innerHTML = `<h1>Tanemon</h1>
        <img src="imagens/tanemon.png" alt="Tanemon" id="imgres">
        <p>Um Digimon Bolbo que tem algo parecido a uma planta a germinar da sua cabeça. É uma Yuramon que caminhou à procura do ambiente ideal, onde se deitou ao solo e evoluiu. Devido à sua personalidade extremamente tímida, se sente a presença de um intruso, cava com as suas quatro patas e enterra parte do corpo no chão. Uma vez completamente escondida debaixo de terra, a germinação da sua cabeça permite-lhe que se camufle como planta, protegendo-se. Mas esta técnica é ineficaz contra Digimons herbívoros.</p>
        
        <h1>Palmon</h1>
        <img src="imagens/palmon.png" alt="Palmon" id="imgres">
        <p>Um Digimon Planta com uma flor tropical a florescer na cabeça. Embora tenha evoluído como réptil de Tanemon, é um tipo pouco comum que é classificado como Planta, com base na sua aparência exterior e qualidades especiais. Durante o dia, abre a sua flor e estende os seus braços de folha para efetuar a fotossíntese. Costuma enterrar os seus pés de raiz no solo e, embora esteja a absorver nutrientes, consegue andar ao mesmo tempo. Quando está feliz ou bem disposta, a flor na sua cabeça libertará um aroma doce, mas se sentir perigo ou se chatear, o aroma tornar-se-à pútrido e afastará até Digimons de grande porte. O seu movimento especial consiste em entrelaçar o oponente nas suas heras, portadoras de uma poderosa toxina (Poison Ivy). Se se for vítima deste ataque, o corpo paralisará completamente.</p>
        
        <h1>Togemon</h1>
        <img src="imagens/togemon.png" alt="Togemon" id="imgres">
        <p>Um Digimon Planta com a aparência de um cato gigante. Consegue armazenar dados de nutrientes dentro do seu corpo, o que possibilita a sua sobrevivência a longo prazo em zonas vazias e desertas. Não se consegue discernir o que está a pensar, dada a perpétua expressão vaga com que parece estar sempre a olhar para o vazio. Contudo, assim que se chateia, essa expressão muda completamente, fica violento e incapaz de sossegar. O seu movimento especial consiste em fortalecer os espinhos que tem nos braços e golpear com eles em estilo bang-bang[5] (Chikuchiku Bang Bang).</p>
        
        <h1>Lillymon</h1>
        <img src="imagens/lillymon.png" alt="Lillymon" id="imgres">
        <p>Um Digimon Fada nascido de pétalas de flores que rebentavam lindamente. Embora se assemelhe a uma criança humana, é um Digimon Perfeito que esconde um poder imperscrutável. Devido à sua personalidade extravagante de maria-rapaz, diz-se que abriria o seu coração a uma rapariga humana como se fosse igual a ela. Por ser incapaz de se conter, se começar a choramingar, será difícil fazê-la parar. No entanto, é também portadora de bondade para com os mais pequenos e fracos. É capaz de voar com as quatro asas semelhantes a folhas que crescem nas suas costas e há quem diga que uma brisa fresca cursará por onde Lillymon voar. O seu movimento especial consiste em lançar os dois braços ao ar, formando um cano de arma com as pétalas que tem nos pulsos e disparar uma bala de energia (Flow' Cannon).</p>
        
        <h1>Rosemon</h1>
        <img src="imagens/rosemon.png" alt="Rosemon" id="imgres">
        <p>Um Digimon Fada que se assemelha a uma rosa e é chamado de "Rainha das Flores". Tem a forma de uma linda mulher e deseja permanecer bela para sempre. É mais ou menos esse o tipo de personalidade que tem e, embora seja muito constrangida nesse campo, a sua verdadeira força não fica atrás dos outros Finais. Usa nos seus peitos a "Tiferet", uma jóia gravada com o símbolo do amor e da beleza. Esta "Tiferet" é dita prometer a beleza eterna e poder. O seu movimento especial consiste em domar outros Digimons, por muito frenéticos que estejam, com um chicote de espinhos carregado de eletricidade (Thorn Whip). Diz-se que quem sofre esta técnica torna-se escravo de Rosemon, de corpo e alma. Além disso, consegue abater o adversário utilizando o mesmo chicote como florete (Roses Rapier). Adicionalmente, os Digimons que sofrem a derradeira técnica de Rosemon, Forbidden Temptation, têm os seus dados maravilhosamente destruídos numa chuva de inúmeras pétalas de rosa.</p>`
    } else if (digi[6].checked) {
        res.innerHTML = `<h1>Bukamon</h1>
        <img src="imagens/bukamon.png" alt="Bukamon" id="imgres">
        <p>Embora tenha uma aparência semelhante à de um jovem dinossauro aquático, é um Digimon engraçado que se movimenta inteligentemente, como um cavalo marinho. A personalidade amigável que tinha como Pitchmon desapareceu por completo, por isso foge, caso alguém se aproxime. A sua pele exterior ainda não aguenta as pressões e baixas temperaturas das profundezas do mar e, por consequência, não consegue mergulhar fundo durante muito tempo.</p>
        
        <h1>Gomamon</h1>
        <img src="imagens/gomamon.png" alt="Gomamon" id="imgres">
        <p>Um Digimon Animal Marinho que conseguiu adquirir locomoção terrestre e que está coberto com uma pelagem térmica. À medida que Gomamon cresce, vai ficando castanho e a pelagem acompanha esse crescimento, alongando-se. O pelo vermelho que cresce no topo da sua cabeça mexe de acordo com o que Gomamon estiver a sentir, e quando se chateia, eriça. As suas garras são fortes o suficiente para quebrar gelo, pelo que será doloroso menosprezá-lo. O seu movimento especial é guiar os pequenos peixes que o seguem (Marching Fishes).</p>
        
        <h1>Ikkakumon</h1>
        <img src="imagens/ikkakumon.png" alt="Ikkakumon" id="imgres">
        <p>Um Digimon Animal Marinho descoberto no computador de uma base de exploração no Ártico. A sua pelagem espessa e corpo robusto estão estruturados de forma a que possa suportar até as terras congeladas. O seu chifre afiado é feito de "Mithril", um dos metais mais raros, e a pele por baixo do pelo é igualmente dura. As porções das suas patas onde se situam as garras são capazes de emitir calor, quando assim desejar. Assim, consegue dar passos firmes no gelo, mas não é muito ágil. Em batalha, intimida os oponentes com um rugido surpreendente e muito parecido ao de um leão. O seu movimento especial consiste em disparar o seu chifre, que pode crescer novamente (Harpoon Vulcan).</p>
        
        <h1>Zudomon</h1>
        <img src="imagens/zudomon.png" alt="Zudomon" id="imgres">
        <p>Ikkakumon deu mais um passo evolutivo e tornou-se num Digimon Power bípede. Resguarda os seus músculos desenvolvidos com proteções fabricadas a partir da pelagem e da carapaça que roubou a oponentes. O chifre na sua cabeça foi substituído por um sem a capacidade de voltar a crescer, alterado voluntariamente para ter uma forma sérrea. Contudo, a sua arma mais forte é o "Thor Hammer", que desenterrou de gelo antigo e é feito de Chrome DigiZoid. O seu movimento especial consiste em acertar no oponente com a onda de choque e as faíscas produzidas ao desferir um golpe descendente com esse "Thor Hammer" (Hammer Spark).</p>
        
        <h1>Vikemon</h1>
        <img src="imagens/vikemon.png" alt="Vikemon" id="imgres">
        <p>Um Digimon Homem-Besta de nível Final que governa as terras geladas do pergelissolo, onde nada nunca degela. O seu pelo tornou-se como cristais de gelo e é dito ser tão duro como o metal Chrome DigiZoid. Com as Estrelas d'Alva "Mjöllnir", que carrega nas costas, consegue aniquilar montanhas com um só golpe, distorcendo o próprio espaço. Lidera os corpos de exército de Ikkakkumons e Zudomons e, embora em batalha pareça um bárbaro sem coração, mostra muita compaixão pelos seus subordinados. O seu movimento especial Artic Blizzard leva momentaneamente a atmosfera circundante ao zero absoluto, congelando o oponente instantaneamente e esmagando-o, logo a seguir, com as "Mjöllnir". O ataque tem este nome porque o corpo do inimigo torna-se numa nevasca.</p>`
    } else if (digi[7].checked) {
        res.innerHTML = `<h1>Nyaromon</h1>
        <img src="imagens/nyaromon.png" alt="Nyaromon" id="imgres">
        <p>Um pequeno Digimon que tem características de gato. É sempre caprichoso e esse comportamento parece ter sido ligado a Nyaromon como resultado de ser como um "gato". Embora às vezes seja frívolo, por causa da sua curiosidade transborante, ele também tem um lado só. O seu movimento especial consiste em inchar a sua cauda, tornando os pelos como fios e, de seguida, atingir o adversário (Fox Tail). No entanto, nunca foi visto um oponente a recuar perante este ataque.</p>
        
        <h1>Salamon</h1>
        <img src="imagens/salamon.png" alt="Salamon" id="imgres">
        <p>Um Digimon Criança das Espécies Sagradas caracterizado pelas suas orelhas descaídas. Por ainda ser muito jovem, é incapaz de manifestar os seus poderes sagrados e nem sequer está consciente da sua missão. Por essa razão, é naturalmente inseguro, pelo que pode tornar-se bom ou mau. No entanto, um dia virá a hora em que Plotmon, que nasceu como um Digimon das Espécies Sagradas, despertará para a sua missão como um dos "Virus Busters". Além disso, Plotmon é um Digimon experimental criado pelos investigadores de Digimons, e como foi feito para imitar os animais de estimação que vivem com os seres humanos, tem uma aparência próxima à de um animal real. Com o seu movimento especial Puppy Howling, lança um latido super-alto que paralisa completamente o adversário.</p>
        
        <h1>Gatomon</h1>
        <img src="imagens/gatomon.png" alt="Gatomon" id="imgres">
        <p>Imensamente curioso, adora partidas. Apesar do seu pequeno porte, é um precioso Digimon das Espécies Sagradas cuja aparência não combina com a força que possui. Porta um Holy Ring, a prova de que é uma Espécie Sagrada, na cauda, e se o perder, o seu poder diminuirá e não conseguirá demonstrar o potencial original. Defende-se com garras longas copiadas dos dados de SaberLeomon. Os seus movimentos especiais consistem em usar as longas garras para atacar o adversário (Neko Punch) e manipular o oponente com um olhar penetrante (Cat's Eye). Aqueles que forem vítima deste olhar atacar-se-ão a si mesmos.</p>
        
        <h1>Angewomon</h1>
        <img src="imagens/angewomon.png" alt="Angewomon" id="imgres">
        <p>Um Digimon Arcanjo com a aparência de uma bela mulher. Apesar de ter sido previamente classificada como de tipo Anjo, confirmou-se ser de tipo Arcanjo, dada a grandeza das suas habilidades. Anjos Adultos têm como característica seis asas, enquanto os anjos Perfeitos têm oito. Embora a sua personalidade seja extremamente gentil, não perdoa os desonestos e malvados, mantendo-os sobre ataque até que se convertam. Devido à sua atitude e poder, é dita ser como uma deusa do Digital World. O poderoso golpe do seu movimento especial Holy Arrow é também conhecido como "Punição do Paraíso" e o mortífero raio de luz Heaven's Charm está repleto de beleza e afeto, demonstrando a sua forte eficácia contra os poderes maléficos dos Digimons.</p>
        
        <h1>MagnaDramon</h1>
        <img src="imagens/magnadramon.png" alt="MagnaDramon" id="imgres">
        <p>A derradeira forma dos Digimons besta divinos. A sua figura heróica sugere um governador dos céus. Muito poucos são os que o viram e o seu paradeiro ainda não é completamente conhecido. No entanto, diz-se que, uma vez, apareceu do nada e devastou com o seu imenso poder a gigante energia do mal que se havia gerado no Digital World. O seu movimento especial consiste em atacar o adversário com a energia da luz de toda a justiça (Holy Flame). Aqueles que sofrerem esta técnica serão instantaneamente apagados.</p>`
    }
    imgex.outerHTML = ``
}

