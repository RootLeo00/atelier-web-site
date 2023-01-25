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
                    Care Memorie (M.Yourcenar)
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Ivana Miotto presenta il suo libro di culto:
                    Care memorie
                    di Marguerite Yourcenar
                </Text>
                <Text p >
                    Nel marzo del 1864 Garibaldi era confinato a Caprera. Un bastimento inglese passò a prenderlo per portarlo a Londra. Qui, nell’attesa, ogni lavoro di fatica era stato sospeso.

                    La folla era un mare sterminato di mezzo milione di persone che stipava ogni angolo di piazze e di vie: finestre, palchi appositamente costruiti, abbaini, tetti, torri, spallette di ponti, monumenti, rami d’albero, tutto era decorato di grappoli umani. Garibaldi quel giorno fu riverito come un re. Gli porsero, con un solenne discorso, il decreto di cittadinanza chiuso in una scatola d’oro.

                    Oggi, anche il mito positivo di Garibaldi, mito che, nel secolo 19º, rappresentò un faro di libertà per tutta l’Europa, è oscurato. È, dunque, con soddisfazione che accogliamo, tra i libri di culto, quello di Milly Lenna, Un garibaldino dimenticato.

                    Si tratta del frutto di una ricerca attenta, condotta su due linee egualmente coinvolgenti: la memoria personale e della famiglia e il lavoro certosino dello storico, profuso per ricostruire un passato che rischia altrimenti di scomparire. Vi si narra la vicenda di uno dei tanti piccoli eroi che seguirono Garibaldi nella gloriosa impresa dei Mille.

                    Vi si sottolinea una tesi che oggi sembra essere dimenticata e cioè che la grande storia, anche quella di oggi, vive e si alimenta di speranza, solo se è intessuta degli ideali e delle azioni coraggiose di tanti piccoli eroi.

                    Un garibaldino dimenticato è un libro da leggere per ripercorrere la strada che ha intrapreso uno di loro: Pietro Spangaro.
                </Text>
                <Image className="mt-3" src="/public/imp_assets/books/cover_garibaldino.jpg" alt="cover-garibaldino-image" size={ImageSize.DEFAULT} />
            </div>
        </PageLayout>
    )
}

export default IoSonoAchille