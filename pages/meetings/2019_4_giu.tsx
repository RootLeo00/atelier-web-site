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
                    Svizzera
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Scrittori di storie guardano la Svizzera e non solo
                </Text>
                <Text className="mt-10">
                    Martedì 4 giugno 2019 ore 18.00
                    Sala conferenze Teresina Degan – Biblioteca Civica - PORDENONE
                </Text>
                <Text p >
                    Dedicheremo l’incontro del 4 giugno a un paese a noi così vicino, ma in fondo sconosciuto, un’anomalia fra i paesi europei. La Svizzera.
                    Al centro dell’Europa, ma estranea alle sue istituzioni. Estranea anche alle istituzioni internazionali, ma sede di molte di esse.
                    <br />
                    Ordinatissima, efficientissima, onestissima, ma nelle sue banche si riciclano i soldi dei peggiori traffici. Democraticissima, ma il voto alle donne è stato dato nel 1971 e violare il segreto bancario è uno dei crimini peggiori di cui ci si possa macchiare.
                    Questi giudizi, che spesso sono gli stereotipi con i quali guardiamo alla Svizzera, non vogliono essere giudizi definitivi ma stimoli per avviare una discussione e un approfondimento che ci porti a scoprire il paese.
                    Ci faremo guidare nella scoperta da Peter Bichsel, un singolare autore di piccole storie, un maestro elementare per il quale leggere è più importante che scrivere. Il suo sguardo dall’interno, la sua attenzione al particolare, le sue osservazioni ci rivelano quello che è la Svizzera e non solo.
                    “Ma noi crediamo che la nostra Svizzera sia quella caratteristica, e attribuiamo acriticamente alla nostra immagine della Svizzera tutti quegli elementi positivi che le attribuiscono gli stranieri. Ci siamo abituati a guardare la Svizzera con gli occhi dei nostri turisti. Uno svizzero medio ha esattamente la stessa opinione della Svizzera che ha un inglese medio. L’immagine che abbiamo del nostro paese è un prodotto di importazione. Viviamo nella leggenda che è stata inventata su di noi.”
                    Questo incontro conclude il programma: ATTRAVERSO IL MONDO. Luoghi, idee, culture fuori dall’attenzione dei media, che abbiamo realizzato anche grazie al contributo della Fondazione Friuli.
                    Ringraziamo tutti coloro hanno partecipato ai nostri incontri.
                    <br />
                    L'Atelier di lettura
                </Text>
            </div> 
        </PageLayout>
    )
}

export default Siberia