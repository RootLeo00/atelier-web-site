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
                    Incontro a Pordenone Giovedì 7 febbraio 2019
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Attraverso il mondo, Luoghi, idee, culture fuori dall’attenzione dei media con:
                    Magreb
                </Text>
                <Text className="mt-10">
                    prosegue il ciclo di conversazioni dell’Atelier di lettura:
                    Dove? Al solito posto.
                    Biblioteca Civica di Pordenone,
                    Sala Degan. Solito orario! (ore 18:00)
                </Text>
                <Text p >
                    Nel viaggio culturale nel Magreb ci hanno accompagnato molti libri, tra di essi quello proposto da Ivana Miotto: Fethi Benslama, Un furioso desiderio di sacrificio. Il supermusulmano
                    L’autore di questo saggio, di origine tunisina, è psicoanalista e docente di psicopatologia clinica presso l’Università Paris-Diderot, ma quello che più ci interessa è che, alla fine degli anni ’80, ha lavorato come psicologo clinico in un consultorio pubblico della periferia di Parigi, a Saint-Denis dove avrà luogo il primo attentato terroristico del novembre 2015.
                    Qui comincia a osservare la progressiva radicalizzazione dei giovani delle periferie più svantaggiate e questo gli permetterà di seguire le trasformazioni soggettive avvenute negli ultimi venticinque anni in questi giovani.
                    Benslama osserva che, prima di acquisire una coscienza della propria identità, molti giovani vivono in uno stato di sofferenza psichica che talvolta sfocia nella delinquenza. Parla di giovani perché i due terzi dei radicalizzati hanno fra i 15 e i 25 anni. Nel momento in cui diventano islamisti radicali ricevono un’identità, un riconoscimento da parte di un gruppo. Questo li fa sentire potenti.
                    É interessante la distinzione che l’autore fa fra radicalizzazione e estremizzazione propriamente religiosa: spesso i giovani jihadisti hanno una conoscenza molto superficiale dell’Islam, molti di loro sono convertiti da poco e hanno cercato la radicalizzazione senza nemmeno passare dalla religione. Un giudice gli riferì che alcuni di loro non conoscevano nemmeno “i cinque pilastri dell’Islam”, ossia le cinque regole fondamentali su cui si basa la loro religione.
                    Nei riguardi dei credenti tradizionali si pongono come giudici, a volte persecutori, in nome della convinzione secondo la quale, tramite loro, è Allah stesso ad agire e, dunque, nulla è impossibile.
                    Questo è solo un assaggio dei molti temi affrontati nel libro, temi che riguardano, fra gli altri, il rapporto con l’antico Califfato, l’uso della moderna tecnologia, la spettacolarizzazione delle azioni dei jihadisti, la possibile deradicalizzazione, ecc. Il libro è illuminante perché basato sulla conoscenza diretta dell’evolversi del fenomeno.
                    <br />
                    Per l'Atelier di lettura,
                    il Direttore scientifico Grazia Liverani.
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/benslama.png" alt="brochure-image" size={ImageSize.SMALL} />
                <Text className="mt-10">
                    Choukri Mohamed, Il pane nudo
                </Text>
                <Text p >
                    “Il pane nudo” è la storia di Mohamed, un adolescente nato in un povero villaggio berbero della regione del Rif, una delle zone più povere del Marocco. Proveniente da una famiglia poverissima il ragazzo conoscerà e vivrà terribili esperienze-limite per poter sopravvivere, per assicurarsi lo spazio della mera sussistenza.
                    Il romanzo, scritto in modo scarno ed essenziale, con un linguaggio crudo e disincantato, è in verità una vicenda autobiografica. Queste le parole dell’autore in un’intervista: “Io sono vissuto e mi sono nutrito della miseria di Tangeri, frugando con mia madre tra i bidoni della spazzatura. É quella realtà che racconto perché la conosco a fondo, non sono come quegli scrittori stranieri che fanno un giro nella piazza della mia città e gli basta per sapere tutto del Marocco.”
                    Quello che Choukri rappresenta è un Marocco senza veli, è la povertà, il dolore e l’estrema solitudine di un intero continente, è la disperazione più profonda di masse di diseredati al di sotto di ogni livello di speranza o di qualsiasi forma di riscatto.
                    La storia si dipana fra carceri, bordelli, fumerie di hascisc e quartieri puzzolenti dove non è difficile incontrare ubriaconi e vagabondi, ladri e accattoni, prostitute e pedofili, una sorta di umanità seconda e quasi bestiale.
                    La fame e la miseria si accompagnano al degrado della vita comune, regolano i rapporti famigliari e li condizionano. Predomina nella famiglia la figura del padre, alcolizzato e violento che arriverà a uccidere il figlio minore debole e malaticcio in un barbaro sfogo di atrocità. Le difficoltà economiche costringeranno la famiglia a emigrare in cerca di una sorte migliore, dapprima a Tangeri e poi a Tetuan, una breve parentesi a Orano (Algeria) e poi infine nuovamente a Tangeri.
                    Nonostante il lavoro della madre come venditrice di verdure al mercato o del ragazzo come garzone in un caffè, le condizioni di emarginazione e di miseria non mutano, anzi si aggravano con la nascita di una sorella. La fatica del lavoro, il maturarsi della sua sessualità in modo animalesco e selvaggio, la madre di nuovo incinta, sono il contesto in cui Mohamed sembra sprofondare.
                    Il conflitto con il padre lo porterà alla fuga definitiva da casa, a tornare da solo a Tangeri dove cerca inutilmente qualche lavoro, dorme per strada, ruba tra le immondizie, beve e fa a botte. La sua vita rischia di precipitare nel peggiore girone infernale obbligato a convivere con la degradazione umana.
                    La vicenda si svolge negli anni ’40, gli ultimi della colonizzazione franco-spagnola in Marocco e si conclude nel 1956 quando il giovane ormai ventenne decide di frequentare una scuola per imparare a leggere e scrivere, nello stesso momento in cui il Marocco diventa indipendente.
                    In qualche modo “Il pane nudo”, benché vietato e messo all’indice nei paesi arabi, è un libro profondamente morale perché nell’indicare la ferita di un’esistenza, nel raccontare il dolore e la sua solitudine, allude a una possibile via di uscita che non coincide con il lieto fine della storia, ma con la consapevolezza che quella ferita è anche la nostra, che le sue parole sono anche le nostre, ferite sì, ma non a morte…
                    <br />
                    Recensione a cura di Livia Cappella
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/mohamed.png" alt="mohamed-image" size={ImageSize.SMALL} />
            </div>
        </PageLayout>
    )
}

export default Siberia