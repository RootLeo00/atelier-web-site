/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const Siberia = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Siberia
                </Text>
                <hr className="mt-5" />
                <Text className="mt-10">
                    Giovedì 17 gennaio 2019 inizia il ciclo di conversazioni dell'Atelier di lettura:
                    Attraverso il mondo, Luoghi, idee, culture fuori dall'attenzione dei media con:
                    Siberia. Un immenso angolo nella Federazione russa.
                    Dove? Al solito posto!
                    Biblioteca Civica di Pordenone,
                    Sala Degan. Solito orario! (ore 18:00)
                </Text>
                <Text subtitle className="mt-10">
                    Vladimir K. Arsen'ev, Dersu Uzala. Il piccolo uomo delle grandi pianure
                </Text>
                <Text p >
                    Nel viaggio culturale in Siberia ci hanno accompagnato molti libri, tra di essi quello presentato da Lorenza Moro: Vladimir K. Arsen'ev, Dersu Uzala. Il piccolo uomo delle grandi pianure.
                    Vladimir K. Arsen'ev (1872-1930) fu esploratore, etnografo e scrittore e, nei primi trent'anni del Novecento fece diverse spedizioni per studiare, dal punto di vista geografico e topografico, nonché militare, le regioni della Siberia orientale intorno alle città di Vladivostock e Chabarovsk.
                    Durante questi viaggi, Arsen'ev studiò le popolazioni di questi lontani territori, conoscendo usi e costumi di udechi, tazy, nanajcy e altri popoli. Nel racconto dell'esploratore queste contrade sconosciute, che noi pensiamo silenziose e desolate, si riempiono di voci di uomini, cacciatori ma anche agricoltori, e di presenze animali come orsi, cavalli, tigri e scoiattoli.
                    La taiga, la grande foresta boreale, è piena di orti e di campi coltivati dove crescono: grano, mais, fave, papavero, tabacco sullo sfondo dei rododendri dalla rossa fioritura e all'ombra dei grandi cedri.
                    In questo libro dove protagonista è la natura con la sua bellezza misteriosa, giganteggia il personaggio di Dersu Uzala, un cacciatore gol'd o nanajcy che suscita subito l'interesse di Arsen'ev per la forza della sua personalità, per quel suo parlare calmo, anche se stentato, e senza servilismo.
                    Nella narrazione è centrale l'amicizia tra i due uomini, che li porterà ad affrontare insieme molte avventure d'esplorazione, sempre all'insegna della primitiva saggezza di Dersu e della sua capacità di essere felice come “frammento” della natura nella quale vive immerso, senza casa: “io sempre vivere monti”, come lui stesso dice. L'amicizia tra i due uomini finirà solo con la morte di Dersu Uzala e fornirà lo spunto ad Akira Kurosawa, uno dei più grandi registi contemporanei, per la realizzazione del film omonimo premiato con l'Oscar nel 1976.
                    <br />
                    Per l'Atelier di lettura
                    testo a cura di Lorenza Moro
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/vladimir_siberia.png" alt="vladimir-siberia-profile-image" size={ImageSize.SMALL} />
                <Text subtitle className="mt-10" >
                    Simone Moro, SIBERIA -71°. Là dove gli uomini amano il freddo - Rizzoli
                </Text>
                <Text p >
                    Cos'è che spinge a intraprendere la salita sulla vetta del Pik Popeda (3003 metri), la montagna più alta della catena dei monti Cherskij, una catena enorme più lunga delle Alpi, nella Siberia orientale in pieno inverno, nel Polo del freddo, con temperature che possono raggiungere anche meno 71 gradi sotto zero?
                    L'impresa per la prima volta è stata realizzata, tra gennaio e febbraio del 2018, in circa due settimane, dall'alpinista bergamasco Simone Moro, specializzato in scalate invernali, insieme alla altoatesina Tamara Lunger e con il supporto della squadra composta da due italiani, un fotografo e un interprete, un alpinista russo e un meteorologo austriaco.
                    Alcune risposte alla domanda iniziale si trovano nel libro scritto da Simone Moro Siberia -71° Là dove gli uomini amano il freddo.
                    C'è innanzitutto la curiosità suscitata dalla lettura di un articolo del Corriere della sera che parlava del luogo abitato più freddo del pianeta mettendo a confronto il villaggio di Omjajkon e la cittadina di Jakutsk, nella Siberia orientale.
                    L'interesse iniziale diventa entusiasmo per aver trovato il posto giusto che tale impresa rappresenta per chi vuole mettersi ancora alla prova, dopo aver scalato per 4 volte gli 8.000 metri, nella capacità di sopravvivere in situazioni estreme legate al freddo, una sfida nella quale tutto era nuovo da imparare e da scoprire. C'è poi un forte spinta ad esplorare posti lontani, isolati, severi di cui sappiamo molto poco, il desiderio di conoscere un ambiente e chi lo abita. “ (…) non era il raggiungimento della vetta che avrebbe rappresentato il successo di questo viaggio, ma il cammino stesso che esprimeva quello spirito libero e autentico tipico delle avventure e delle esplorazioni del passato e del presente.”
                    Il freddo dunque e l'esplorazione sono i due elementi forti che guidano l'avventura di questo alpinista e dei suoi compagni di viaggio, raccontata, come nelle cronache dei grandi esploratori, in tutte le sue fasi: dalla organizzazione del viaggio, alla preparazione dell'attrezzatura necessaria, alle difficoltà di avvicinamento alla meta, all'ascesa vera e propria.
                    Ma la parte più straordinaria del viaggio non è tanto la quota raggiunta di quella catena sperduta e pressoché sconosciuta, quanto tutto il resto che era molto di più, ovvero gli incontri e le presenze umane in quei luoghi di silenzio e solitudine, dove le condizioni di vita sono precarie e difficili : fiumi ghiacciati che diventano strade di comunicazione fra le varie località della Siberia percorse da motoslitte o da qualche camionista solitario, automobili ai bordi delle strade lasciate con il motore acceso per tre mesi in mancanza di un riparo riscaldato, il preside di una scuola locale che accoglie con disponibilità e gentilezza la comitiva, commercianti  avvolti in strati di pellicce che al mercato cittadino vendono pesci rigidi e congelati sui banchi, allevatori nomadi di renne che vivono in baracche in mezzo al nulla, cercatori  nelle miniere d'oro  e cacciatori di pellicce , ma anche tracce del passato nel museo che ospita  cimeli dei Gulag e il percorso sulla Strada delle ossa, così chiamata a causa delle migliaia di vittime morte durante la sua realizzazione.
                    Questa spedizione in Siberia, in un ambiente di una bellezza straordinaria e quasi del tutto inesplorato, è stata per lo scalatore un'esperienza unica e ha significato un riappropriarsi del senso del viaggio, dell'esplorazione vera in luoghi lontani, ma anche in se stesso:
                    <br/>
                    “E con ciò mi sembrava davvero di aver trovato come la sintesi della mia storia di alpinista. In quel progetto c'era chi mi aveva ispirato, chi mi aveva accompagnato, c'era quello che avevo cercato nel mio modo di fare alpinismo, c'erano i luoghi sconosciuti e la voglia del sapore pieno dell'esplorazione che di solito racchiude in sé molti più punti di domanda che certezze.”
                    <br />
                    Per l'Atelier di Lettura
                    Livia Cappella
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/siberia_cartina.png" alt="cartina-siberia-image" size={ImageSize.SMALL} />
                <Image className="mt-3" src="/public/imp_assets/meetings/siberia_meno71.png" alt="siberia-meno-71-book-image" size={ImageSize.SMALL} />

            </div>
        </PageLayout>
    )
}

export default Siberia