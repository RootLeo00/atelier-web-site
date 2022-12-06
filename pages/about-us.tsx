/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are a group of ladies that enjoy reading and writing. We are here to share our passion with you.`,
        keywords: 'atelier, books, reading, literature',
        author: 'Maria Grazia Liverani'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                        <img src="/images/componenti-atelier-4-settembre-2017.jpg" alt="atelier ladies" className="rounded-lg overflow-hidden" />
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Cos'è l'Atelier di Lettura?
                    </Text>
                    <Text p className='text-lg'>
                        L'Atelier di Lettura è una società culturale fondata nel 1987 allo scopo di coinvolgere adulti e ragazzi in esperienze di lettura partecipata e facilitata.
                        L'Atelier si propone di motivare alla lettura di libri di qualità, di riattivare la creatività nella scrittura, di abituare a coniugare la lettura alla scrittura e la lettura alla storia del presente.
                        Tra le competenze acquisite in trent'anni di attività ininterrotta abbiamo sperimentato diverse proposte per promuovere l'uso della lettura come strumento di conoscenza di sé e del presente.
                        In questa direzione vanno interpretate sia le attività di lettura partecipata che i corsi di composizione: scrittura creativa, costruzione di racconti e poesie.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        Perchè l'Atelier di Lettura?
                    </Text>
                    <Text p className='text-lg'>
                        Come avviene di consuetudine nei dibattiti seri, ci riserveremo una piccola premessa che ci consenta di fornire qualche plausibile giustificazione per i trent'anni della pervicace attività dell'Atelier di lettura.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Lettura e media
                    </Text>
                    <Text p className='text-lg'>
                        I media, nelle loro diverse specie, sono diventati talmente pervasivi da occupare molti spazi della vita quotidiana in particolare quelli che altrimenti avremmo dedicato al contatto caldo con persone. La vita culturale, nella sua parte di coinvolgimento personale e collettiva, si è rarefatta. Prolificano però, esperti di bon ton letterario che incoraggiano il consumo culturale insieme al suo girotondo di mostre opportunamente pubblicizzate, di fenomeni da esibire, di autori e star da portare in passerella, come un tempo, le miss.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Il circolo culturale
                    </Text>
                    <Text p className='text-lg'>
                        Il circolo è andato via via scomparendo e i suoi bestiari, a malapena, riescono a entusiasmare i bambini, ma, la parte più volgare della sua filosofia di fondo, ha pervaso il mondo delle manifestazioni culturali dove l'esibizione dell'eccentricità, la sfilata dei mostri, dei fenomeni e delle acrobazie intellettuali sono stati assunti come regola di comportamento colto. Ma, mentre il circo delle belve aveva una sua dignità, fatta di professionalità e di meraviglia, il gran circo della cultura mostra solo la parte più modesta e provocatoria dell'intelligenza del mondo; mette in scena esili intellettuali che si esprimono con girandole di parole atte a stupire gli ignari, oppure roboanti buzzurri che danno un indegno spettacolo di volgarità, che si insultano in diretta in nome di supposte e, quasi sempre, oscure scuole di pensiero.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Pensare e sentire
                    </Text>
                    <Text p className='text-lg'>
                        Gli strumenti elettronici entrati ormai nell'uso comune, strumenti che sono maneggiati con grande abilità sia da intellettuali raffinati, sia dall'uomo della strada, a prescindere dal suo grado di alfabetizzazione, rappresentano indubbiamente una risorsa mentale indispensabile e rendono più veloci le operazioni della nostra vita quotidiana. È altrettanto indubbio però, che gradualmente sostituiscono le esperienze calde e coinvolgenti con altre fredde e superficiali.
                        Pensare, sentire, vivere, hanno sempre più bisogno di calore.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Vivere, comprendere, leggere. Leggere, comprendere, vivere
                    </Text>
                    <Text p className='text-lg'>
                        Al di là dell'ossessione della rapidità e al di là delle costrizioni, riteniamo ancora che vi siano spazi in cui gli esseri umani possano sacralmente accostarsi a se stessi, al mondo e alle sue rappresentazioni per imparare prima a conoscere, poi a vivere meglio. Vivere meglio le occasioni culturali, in fondo, significa saper godere dei grandi e dei piccoli interstizi che una vita, pur frenetica ed estremamente costretta dalle necessità come le dita dei piedi in una scarpa nuova, continua.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Il libro nella sua veste cartacea
                    </Text>
                    <Text p className='text-lg'>
                        A chi vuole concedersi qualche piccolo spazio di vita non alienata resta una risorsa disponibile per tutti, la risorsa dei libri di qualità con i quali dialogare in piena libertà e in compagnia del silenzio che abbiamo un po' tutti perso l'abitudine di ascoltare. "Ascoltare il silenzio", è il titolo di un libro intenso di Paolo Valesio, ascoltare in silenzio il silenzio è il fondamento di ogni pratica di lettura. Ma come fare per ascoltare il silenzio e per ricavarne un qualche profitto da regalare a se stessi e da condividere con le persone che per ciascuno di noi contano?
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Un Atelier di lettura
                    </Text>
                    <Text p className='text-lg'>
                        Ci è sembrato di contribuire a riattivare un positivo circuito naturale presentando in maniera godibile i nostri itinerari di lettura dentro e intorno ai libri che, in qualità di lettori appassionati, ci avevano dato la gioia di scoprire nuovi scenari di vita e di soddisfare nuove curiosità. Un libro, soprattutto un buon libro, infatti, è come un apparecchio radio che parla solo se si mette in funzione accendendolo e per accenderlo bisogna che il lettore sappia porgli delle domande, sappia interferire con le cose che vi stanno scritte. Abbiamo iniziato la nostra attività come gruppo di lettura al quale abbiamo dato il nome Atelier di lettura con l'intento di sottolineare il concetto di un'officina, di un laboratorio.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Un libro i libri
                    </Text>
                    <Text p className='text-lg'>
                        Fin dalla sua fondazione, nell'anno 1987, abbiamo proposto una piccola girandola di libri in dialogo fra di loro su un tema scelto tra gli interrogativi che ci pone il presente. Nella scelta dei temi ci siamo tenuti, dunque, strettamente all'attualità così come ci era presentata dalle grandi comunicazioni, dai comportamenti comuni e abituali, dalla mentalità più diffusa e anche dai silenzi, dagli oscuramenti e dalle censure.
                        Attraverso le scarse e, sovente, contraddittorie informazioni che ci sono state proposte in occasione delle molteplici “guerre del Golfo” si è generata l'idea di conoscere l'Islam. Dall'esacerbata accentuazione dell'amore, si è sviluppato il ciclo sulle eroine della grande stagione del romanzo ottocentesco. Quando è caduto il muro di Berlino abbiamo voluto ricordare e ricordarci cosa sia stata la storia tedesca e quando l'Est si è rimesso in cammino, abbiamo proposto la riflessione sul tramonto del grande impero asburgico. Oggi, visto che si impone il tema della globalizzazione e delle grandi migrazioni di massa, ci siamo proposti di andare in viaggio sul pianeta alla scoperta di luoghi di particolare fascino, come le città di New York e Chicago, oppure di luoghi del tutto sconosciuti, come i paesi già satelliti dell'Unione Sovietica e ora strategicamente influenti sulla via del petrolio.
                    </Text>
                    <Text subtitle className='text-xl mb-5 font-style: italic'>
                        Parzialità della nostra proposta
                    </Text>
                    <Text p className='text-lg'>
                        Si potrà obiettare che è limitante offrire al pubblico il punto di vista esclusivo di un gruppo di lettori. Risponderemo che è sicuramente parziale, ma di una parzialità dichiarata, sostenuta però, da un'intensa genuinità di esperienze di lettura e dall'attenzione scrupolosa verso la loro comunicabilità. Pur avendo svolto sui temi proposti alcuni approfondimenti in più rispetto a chi ci ascolta e ci segue, i nostri suggerimenti sono elaborati in modo che informazioni, conoscenze ed esperienze, siano percepite con chiarezza da chi ci ascolta. A chi ci segue, peraltro e con l'intento di promuovere la lettura personale, offriamo la possibilità di verificare i nostri suggerimenti sui libri di cui noi stessi ci siamo nutriti. Un lettore in più non è uno spettatore in meno per il gran circo della cultura e dell'informazione. Un lettore in più è soltanto uno spettatore più astuto e più critico, uno che, se vuole, sa come fare a non sentirsi frastornato da un'informazione caotica e superficiale.
                    </Text>
                    <Seperator />
                    <Text p className='text-lg'>
                        A cura di <LinkTo href="" external className="font-semibold">Grazia Liverani</LinkTo>
                    </Text>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs