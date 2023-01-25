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
                    Stoner
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Lorenza Moro presenta il suo libro di culto: Stoner di John Williams
                </Text>
                <Text p >
                    Negli ultimi anni, mi ha colpito per la sua bellezza e per l’intensità del suo protagonista, proprio la più famosa tra le opere di John Williams, che prende il nome dal personaggio principale.

                    È la storia di un uomo che attraversa i primi sessant’anni del Novecento emancipandosi dalla condizione grama e durissima dei piccoli proprietari di terre americani dei primi del secolo. Lo fa attraverso la lettura e lo studio innamorandosi sinceramente della letteratura, nonostante provenga da studi di agraria. La sua tenacia e la passione lo porteranno all’insegnamento universitario che terrà per tutta la vita. Stoner è un uomo tenero, appassionato, cristallino ma, nonostante il magico incontro con la letteratura, la vita non lo risparmierà.

                    Sarà prigioniero del rapporto con una moglie squilibrata, con una figlia, amatissima, ma preda della sua infelicità e, a causa della sua incapacità di scendere a compromessi non riuscirà, pur meritandolo, a progredire nella carriera universitaria. Unica luce nel buio, l’amore per Katherine, un amore vissuto lungamente ma finito perché imbrigliato da obblighi di forma.

                    La scrittura di Williams si snoda limpidissima, mai banale o stucchevole o ridondante e noi (o meglio io) piangiamo e ridiamo con Stoner e lo accompagniamo con reverente commozione.
                </Text>
                <Image className="mt-3" src="/public/imp_assets/books/william.jpg" alt="john-edward-willliams-profile-image" size={ImageSize.DEFAULT} />
            </div>
        </PageLayout>
    )
}

export default IoSonoAchille