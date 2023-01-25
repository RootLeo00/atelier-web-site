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
                    Ho abitato per nove anni a Bruxelles, nel comune di Ixelles, in una casa di fine Ottocento. Durante questo periodo ho letto Care memorie di Marguerite Yourcenar e ho scoperto che era nata a Bruxelles in una casa di Avenue Louise, la strada che incrocia quella in cui abitavo. Una banale coincidenza, eppure una banale coincidenza che mi ha spinto a leggere con spirito diverso questo gioiello di scrittura.

                    Non era solo la curiosità di scoprire come era prima questo paese dove vivevo. Si trattava di ricostruire, come dice la Yourcenar, la foglia di cui noi percepiamo solo la trama leggera delle nervature, di ricostruirla riannodando la vita di chi ci ha preceduto.

                    Sembrerebbe un’operazione banale, ripetuta migliaia di volte in migliaia di libri, eppure Care memorie è, secondo me, unico per la capacità di rendere, attraverso il racconto della sua infanzia e la storia della sua famiglia, un’epoca, un ambiente sociale, la vita individuale dei personaggi e di svelare come tutto sembri programmato per forgiare Marguerite Yourcenar.

                    Ed io che cosa c’entro? Nulla, ma mi perdevo nelle pagine del libro e rivivevo la vita di persone che con me non avevano niente a che fare e vedevo con altri occhi quello che mi circondava.

                    Si ripeteva così la magia che solo i grandi libri sanno produrre: portarti in luoghi, tempi, ambienti che non conoscerai mai, svelarti vite che non vivrai mai, ma nello stesso tempo farti capire com’è l’essere umano, infine, come sei.
                </Text>
            </div>
        </PageLayout>
    )
}

export default IoSonoAchille