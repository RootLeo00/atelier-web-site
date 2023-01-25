/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const IoSonoAchille = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Hrabal
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Grazia Liverani promuove Ho servito il re d’Inghilterra Bohumil Hrabal
                </Text>
                <Text p >
                    Nel corso della conversazione con le autorità, intervenuta lunedì 4 settembre alla Festa della lettura, a Sergio Bolzonello e a Pietro Tropeano, fuori da ogni paludata ufficialità, è stato chiesto di segnalare il loro libro di culto.
                    L’Assessore alla cultura del Comune di Pordenone ha segnalato la sua inalterata fedeltà a Gabo, Gabriel Garcia Marques, l’autore di Cent’anni di solitudine.
                    Il Vicepresidente della regione, ha detto di sentirsi particolarmente legato a Io sono Achille di un autore australiano, David Malouf.
                    Come da contro copione mi sono autointerrogata. Non potevo che citare Ho servito il re d’Inghilterra.
                    Ho raccontato della preghiera all’amico praghese perché lo facesse autografare dall’autore. L’estate successiva mi arriva la dedica a “Monsieur Liverani”. Che Hrabal magicamente avesse ascoltato la mia voce tormentata da tonnellate di sigarette?
                    L’amico praghese mi racconta che il libro ha viaggiato verso la dacia di Kersko in un cestino di insalate e sotto gli occhi di un poliziotto. Era lo stesso che lo torturicchiava un po’ e nel contempo voleva che Bohumil (in ceco, Benedetto da Dio) gli insegnasse a comporre.
                    Autografo abilmente falsificato? In occasione dell’attribuzione della laurea honoris all’Università di Padova ho potuto vedere l’autore di persona e verificare che il mio prezioso autografo era ed è autentico. Bohumil si è presentato in maglietta e scarpe da ginnastica.
                    Tra l’altro dichiarava, con il candore del genio, che non sapeva lui stesso quale dei samizdat corrispondesse veramente alla versione originale delle sue opere. Aggiungeva poi che sono i grandi direttori d’orchestra che fanno stecche e che la perfezione bisogna cercarla nei loro diligenti e pedanti allievi.
                    <br></br>
                    <Image className="mt-3" src="/public/imp_assets/books/hrabal_gatti.jpg" alt="hrabal-gatti-image" size={ImageSize.DEFAULT} />
                    <Image className="mt-3" src="/public/imp_assets/books/cover_festa_lettura.jpg" alt="cover-festa-lettura-image" size={ImageSize.DEFAULT} />
                    Hrabal venne a mancare il 3 febbraio 1997.

                    Non molti furono disposti a credere che fosse accidentalmente caduto dalla finestra del quinto piano dell’ospedale praghese della Buchova. Tra l’avventura in cui fu coinvolta la copia di Ho servito il re d’Inghilterra e il 1997 l’Atelier aveva affinato la sua conoscenza delle opere di Hrabal. Per porgergli un ultimo saluto decidemmo di fare un viaggio a Praga volevamo visitare i luoghi dove aveva vissuto: ”l'ufficio” nella birreria U Tygra, la chata dove era stato torturicchiato, a Kersko, la tomba di famiglia a Kradiško.

                    Dopo aver visitato suo ufficio di U Tygra nel quale diversi avventori piuttosto bevuti ci avevano omaggiato con incomprensibili battute grasse e qualche generosa pacca sul culo, ci mettemmo in strada per Kersko. Sapevamo che la chata Hrabal era situata in un intrico di strade che si perdevano in un fitto bosco planiniziale. Dopo aver girovagato inutilmente, ci determinammo a chiedere lumi a una prosperosa signora che stava curando un giardinetto. E, come direbbe che Hrabal “State a sentire cosa vi raccontiamo…”, ci eravamo imbattute nella cognata di Hrabal. Non solo ci diede indicazioni su come trovare la sua casa nel bosco, ma ci invitò a salire, ci offrì un tè e ci consentì di toccare la sua mitica macchina per scrivere.

                    Meraviglia delle meraviglie, a ciascuna di noi consegnò una foto di Hrabal, facendo attenzione a che le ragazze avessero una sua foto da giovanotto e a me, che ero più attempata, una foto della maturità. Lei parlava solo ceco e tedesco e noi conoscevamo un poco di francese e di inglese. Ci comprenderemo alla perfezione, a dimostrazione che, quando coincide il sentire, le parole sono superflue. L’aver vissuto questa toccante esperienza, vicino all’umanità di Hrabal, ci ha indotte a comporre un nostro quaderno dal titolo: “Hrabal in Hrabal.”
                </Text>
                <Image className="mt-3" src="/public/imp_assets/books/cover_libro_hrabal.jpg" alt="cover-libro-hrabal-image" size={ImageSize.DEFAULT} />
                <Text subtitle className="mt-10">
                    Presentazione della mostra fotografica "I luoghi di Hrabal"
                </Text>
                <Text p >
                    Visitare i luoghi in cui uno scrittore ambienta le vicende descritte nei suoi libri è sempre un esercizio che serve a comprendere maggiormente i testi e a contestualizzarli.

                    Nel caso di Hrabal si va oltre. Le vicende, spesso autobiografiche di cui scrive si svolgono in luoghi dove ha veramente vissuto, luoghi reali che ancora oggi si possono in gran parte visitare. Non solo, Hrabal stesso che non aveva potuto viaggiare nel corso della sua vita se non in tarda età, appartiene a quel piccolo spazio intorno alla città di Praga che può essere raggiunto percorrendo poche decine di chilometri. Hrabal appartiene a questo spazio, a questo mondo, lo dice lui stesso quando in L’uragano di novembre parlando del grande attore ceco Honza Tříska, emigrato negli Stati Uniti D’America dice che “recita contro la propria volontà in un teatro di Hollywood, nei film, negli spot, interpreta dei ruoli che gli danno da vivere, ma Honza Tříska aveva i numeri per molto e molto di più (…) io sono riuscito a essere vagamente sfasato e quindi ho potuto vivere qui… e sono potuto andare ai colloqui al ministero degli Interni, ai cosiddetti fanghi, ho avuto lo stomaco, ho sopportato quel fango… al prezzo, è vero, di una degenza neurologica alla Bulovka…”

                    Hrabal è riuscito, ha voluto a tutti i costi rimanere in quel piccolo triangolo dove è racchiusa la sua vita. Perché? Non per ragioni economiche, negli anni Settanta era già uno scrittore affermato e conosciuto anche all’estero. Non per ragioni di comodo, all’estero, già famoso, sarebbe stato omaggiato di riconoscimenti più gradevoli delle convocazioni al ministero degli Interni. Altre sono le ragioni. Hrabal scriveva attingendo al mondo reale, immergendosi nella vita e nei discorsi della birreria. Andarsene sarebbe equivalso ad un “suicidio” letterario, sarebbe stato come togliere linfa vitale alla sua scrittura. Questo lo sapeva molto bene. Ha scelto il suo esilio, ma non lontano dalla sua terra. “…il fatto che mi convocavano e mi torturacchiavano piano piano ma sistematicamente gli ufficiali della nostra polizia dal volto umano (…) allora ho dovuto scegliere l’esilio…l’esilio…e io sono venuto in esilio qui, in questa birreria per esempio…”

                    La mostra nasce dalla consapevolezza di quanto siano importanti, armate di libri e macchina fotografica abbiamo cercato i luoghi di cui parla nei suoi libri e dove si è svolta la sua vita. Ci ha fatto da guida Claudio Poeta, suo interprete e traduttore in molte occasioni e in alcuni libri, che con straordinaria gentilezza ci ha guidate e ci ha raccontato episodi riguardanti la vita di Hrabal.
                    Inutile dire che molti edifici non esistono più, soprattutto a Liben, il quartiere dove ha vissuto dal ’50 al ‘73, sono sparite le birrerie e la sua casa in Na Hrazi.

                    Difficile ritrovare l’ambiente che ci descrive: “All’epoca avevo la sensazione che tutte quelle strade e stradine, tutte quelle birrerie, tutto fosse preparato per me e solo per me, che quella periferia aspettasse me, che fosse destinata solo e soltanto ai miei occhi. Le vie, il torrente Rokytka, le colline Bulovka e Hájek, tutto questo mi induceva meraviglia. Passeggiavo di notte e non potevo saziarmi della poesia di quella periferia in cui il gassometro a forma di sfera si ergeva su Palmovka”. Altri luoghi sono snaturati, venduti al turismo consumistico.
                    Nonostante questo, vi invitiamo a fare un viaggio nel mondo di Hrabal attraverso le immagini di cui ci parla, mondo che per uno che si definiva non un autore, ma un trascrittore è particolarmente significativo.
                </Text>
                <Image className="mt-3" src="/public/imp_assets/books/programma_festa_lettura.jpg" alt="programma-festa-lettura-image" size={ImageSize.DEFAULT} />
            </div>
        </PageLayout>
    )
}

export default IoSonoAchille