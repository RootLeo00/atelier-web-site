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
                    Incontro a Portogruaro 15 febbraio 2019
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    In preparazione dell’incontro presentiamo Giorgio Bassani, Cinque storie ferraresi
                </Text>
                <Text className="mt-10">
                    l’Atelier è a Portogruaro, presso la Biblioteca Civica, con Ferrara: A partire da Il giardino dei Finzi Contini.
                    Quando? Alle ore 18:15
                </Text>
                <Text p >
                    Ambientato nella città di Ferrara durante e dopo la seconda guerra, il libro riunisce cinque storie in un unico volume.  Il filo che lega queste storie è proprio Ferrara, città di origine dell’autore, alla quale Bassani è legato profondamente e che conosce molto bene.  E’ dalla vita e dagli eventi vissuti da chi abita la città che lo scrittore   trae ispirazione per raccontare le vicende personali (private) dei diversi personaggi, vicende che si intrecciano alla storia nazionale e si alimentano di quell’ambiente provinciale al quale appartengono. Sono storie di dolente consapevolezza in cui Ferrara diventa simbolo di un’intera nazione avvolta nella cupa coltre del fascismo.
                    Indimenticabili i personaggi dei cinque racconti accomunati dalla difficoltà di adattarsi a una provincia italiana che da un lato consola, ma dall’altro respinge qualunque cosa non le appartenga. Il libro racconta di Lida Mantovani, una povera ragazza madre costretta a tornare a casa quando si rende conto che il fidanzato borghese non si farà più vivo, di Gemma Brondi e di Elia Carcos, appartenenti a classi sociali diverse, con il loro tormentato e difficile rapporto che non porterà a niente di buono.
                    Vi troviamo la storia di Clelia Trotti, anziana maestra socialista morta in carcere e raccontata attraverso gli occhi di Bruno Lattes, ebreo ferrarese che era riuscito a stringere un rapporto con l’insegnante, quella di Geo Josz, unico deportato a essere sopravvissuto e che, tornato a Ferrara, scopre il suo nome inciso su una lapide commemorativa. Vi si parla di Pino Barilari, vecchio titolare della farmacia davanti alla quale nel dicembre del 1943 i fascisti fucilarono 11 cittadini (fatto realmente accaduto) e che si rifiuta di testimoniare. Nessuno fu poi accusato per il crimine commesso. Tutti loro testimoniano alcune delle ingiustizie e delle atrocità dell’era fascista.
                    A fare da sfondo ai racconti ci sono le strade di Ferrara, le piazze, le case e i loro interni, le mura della città che consentono all’autore di approfondire alcuni dei temi che sono alla base della sua scrittura: la crudeltà della storia, l’invalicabile separazione tra i diversi strati sociali, la solitudine dell’uomo e la felicità del sogno, il conflitto tra realtà e illusione.  Con la sua prosa lenta e minuziosa, condotta sul filo della memoria, Bassani sa indagare nell’animo umano, rivelarne luci e ombre, fare emergere le cause più intime degli eventi narrati, evocare la tragedia mediata dalla calma serenità della scrittura.
                    <br />
                    Per l'Atelier di lettura,
                    Livia Cappella
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/bassani.png" alt="bassani-image" size={ImageSize.XS} />
            </div>
        </PageLayout>
    )
}

export default Siberia