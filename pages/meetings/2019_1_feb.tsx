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
                Trieste - a partire da Italo Svevo, Senilità
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Incontro a Portogruaro 1Feb.
                </Text>
                <Text p >
                    Come ogni compagnia di guitti che si rispetti, l’Atelier di lettura si propone nel teatro della biblioteca di Portogruaro.
                    Qui di seguito la brochure degli eventi tutti nel mese di febbraio. La grafica è a cura dell’efficientissima bibliotecaria Loretta Balasso, un bell’esempio di dedizione e di creatività.
                    Metteremo in dialogo quattro città “minori” del centro-nord del nostro Paese: Trieste, Venezia, Ferrara, Firenze. La forma degli incontri è sperimentata da lungo tempo e si situa sul versante dell’intrattenimento culturale, un modo lieve e gioioso per entrare nello spirito dei luoghi, dei paesi, delle civilizzazioni.
                    La conversazione si pone l’obiettivo di essere breve e lieve, ma possiamo assicurare che, poiché l’ingresso è garantito da una molteplicità di libri di una certa qualità, il tessuto degli incontri non è affatto superficiale.
                    La prima conversazione ha per tema Trieste e come guida non potevamo che scegliere Italo Svevo. Nel corso della preparazione però, abbiamo discusso e letto di poeti come Umberto Saba, e di saggisti come Claudio Magris, solo per citarne alcuni. È stato utile anche l’opera di un triestino d’adozione, il giallista tedesco Veit Heinichen. Non mancherà un approfondimento sulla storia di questa città multiculturale.
                    Tutto in un’ora. Non stancare è un importante obiettivo. Il tutto è giocato quasi sempre su tre voci, quella narrante a cura dell’Atelier, quella interiore del lettore che potrà seguire i testi attraverso un repertorio e, infine, ultima, ma non ultima quella di qualche emozione. Non ci resta che augurare un buon pomeriggio di lettura.
                    <br />
                    Per l'Atelier di lettura,
                    il Direttore scientifico Grazia Liverani.
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/brochure_1_feb.png" alt="brochure-image" size={ImageSize.SMALL} />
            </div>
        </PageLayout>
    )
}

export default Siberia